"""Runs every desktop preview mode in headless Chrome, fails on console errors, saves screenshots,
and runs the hand-tracking smoke test (?demo=smoke&xrhands).

  python3 tools/check.py [base_url] [out_dir]      (serve the folder first: python3 -m http.server 8765)
"""
import json, sys, time
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8765/'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'screenshots'
SHOTS = [
    ('beings-360.png', '?demo=360'),
    ('incoming-plasma.png', '?demo'),
    ('being-closeup.png', '?demo=being'),
    ('catch-palm.png', '?demo=catch'),
    ('give-pinch.png', '?demo=give'),
    ('anjali-gather.png', '?demo=anjali&stop=1.0'),
    ('anjali.png', '?demo=anjali'),
    ('harmony-bloom.png', '?demo=bloom'),
    ('menu-on-hand.png', '?demo=menu'),
    ('incoming-set3-all.png', '?demo&set=2&bq=all&seed=5'),
    ('give-set5-all-of-set.png', '?demo=give&set=4&q=-1'),
    ('being-closeup-devotion.png', '?demo=being&set=2&seed=3&lvl=2'),
    ('preview.png', ''),
]
only = sys.argv[3].split(',') if len(sys.argv) > 3 else None

def run():
    failures = []
    with sync_playwright() as p:
        browser = p.chromium.launch(channel='chrome', args=['--use-angle=metal', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
        for name, query in SHOTS:
            if only and name not in only:
                continue
            page = browser.new_page(viewport={'width': 1280, 'height': 800}, device_scale_factor=1)
            errors = []
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(BASE + query)
            if query:
                page.wait_for_function('window.__frozen === true', timeout=60000)
                page.wait_for_timeout(400)
            else:
                page.wait_for_timeout(3000)
            page.screenshot(path=f'{OUT}/{name}')
            print(('OK   ' if not errors else 'FAIL ') + name, query, errors[:3])
            if errors:
                failures.append((name, errors))
            page.close()
        if not only or 'smoke' in only:
            page = browser.new_page(viewport={'width': 1280, 'height': 800})
            errors = []
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(BASE + '?demo=smoke&xrhands')
            page.wait_for_function('window.__smoke && window.__smoke.done', timeout=60000)
            res = page.evaluate('window.__smoke')
            print('SMOKE', json.dumps(res), errors[:3])
            if not res['pass'] or errors:
                failures.append(('smoke', [json.dumps(res)] + errors))
            page.close()
        browser.close()
    print('ALL PASSED' if not failures else f'{len(failures)} FAILED')
    return 0 if not failures else 1

sys.exit(run())
