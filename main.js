// Blessings of Light AR: beings of light float all around you and send you blessings as living plasma;
// you bless them back with your hands. Peaceful and positive: no damage, no health, no losing.
// Meta Quest 3 mixed reality (passthrough), hands only. WebXR + Three.js, no build step.
// ===================================================================================================
// GLOSSARY OF DIVINE NAMES
// Every variable, constant, function, class, shader name and own object key in this file carries a divine name, from the
// Vishnu and Lalita Sahasranamas, the 108 names of Shiva and other names of the Divine. Each entry: divine name, what it
// was called before, and what it does. Names not listed here belong to Three.js, WebXR, the DOM, WebAudio or GLSL and are
// unchanged (WebXR joint names such as 'wrist' and 'handedness' must never change), as are the quality data, the text you
// see, the URL parameters and the saved-settings keys.
//
// Main parts:
//   GUNASAGARA              (QUALITY_SETS)  the 5 sets of 24 qualities and colours, from Puja VR
//   SARVAGUNA               (ALL_QUALITIES)  all 24 qualities in one list
//   sankalpa                (state)  the menu choices, saved in localStorage (its keys are unchanged)
//   smarana                 (save)  saves the menu choices
//   shruti                  (params)  URL parameters
//   gunanidhi               (selectedQualities)  your chosen quality, or the whole set
//   varna                   (palette)  the five-colour palette that tints every layer of a blessing
//   tejovardhana            (liftColor)  lifts dark colours and strengthens pale ones so their glow reads over a bright room
//   vishvakarma             (renderer)  the WebGL renderer (the divine architect)
//   vishvarupa              (scene)  the scene: the whole visible universe
//   sahasraksha             (camera)  the camera (Indra, the thousand-eyed)
//   mahakala                (clock)  app time in seconds
//   kalachakra              (frameClock)  the frame clock
//   kalashakti              (timeU)  the shared time uniform of every shader
//   POORNAM                 (TAU)  2 pi, the full circle
//   HIRANYAGARBHA           (PHI)  the golden ratio
//   SURYANARAYANA           (GOLDEN_ANGLE)  the golden angle, 137.5 degrees
//   URDHVAGA                (UP)  the up vector
//   shanta                  (smooth)  smoothstep in JavaScript
//   lila                    (rand)  a random number in a range
//   PRAKASHA                (GLOW_BLEND)  additive-light blending that keeps the passthrough visible
//   MAYA                    (NOISE)  GLSL hash, value noise and fractal noise
//   VARNAPATHA              (PALETTE_GLSL)  GLSL palette uniform and colour pickers
//   varnadhara              (colorAt)  palette colour by key (GLSL)
//   varnamala               (colorSmooth)  blended palette colour (GLSL)
//   mayapati                (fbm2)  2D fractal noise (GLSL)
//   mayadhisha              (fbm3)  3D fractal noise for the roiling plasma (GLSL)
//   mayini                  (noise2)  2D value noise (GLSL)
//   mahamayini              (noise3)  3D value noise (GLSL)
//   chitragupta             (hash12)  hash (GLSL)
//   chitrasena              (hash13)  3D hash (GLSL)
//   bhutatma                (quadGeo)  the shared 2x2 quad
//   mangalamparam           (streakQuad)  the shared streak quad (tail to head)
//   bahurupa                (makeInstanced)  builds an instanced geometry from a base shape
//   LEELADHARA              (DEMO)  ?demo is on
//   LEELARUPA               (DEMO_MODE)  which ?demo view
//   KARAKA                  (FAKE_XR)  fake XRHand joints are on (smoke test)
//   BHUTAKRIT               (STOP_AT)  demo time at which everything freezes, for screenshots
//   BHUTABHRIT              (THIRD_PERSON)  the demo looks at a stand-in person from outside
//   satsanga                (session)  session state (paused)
//   punyalekha              (stats)  the session counters: given, received, caught, ascended, blooms
//   Deva                    (Being)  one being of light (class)
//   devagana                (beings)  all the beings
//   DEVASANKHYA             (BEING_COUNTS)  Few / Many / Multitude
//   LAYA                    (PACES)  Calm / Lively: seconds between blessings
//   GUNAVIDHI               (BEING_QUALITY_MODES)  the beings' qualities: same set as yours, or all sets
//   devarupa                (presenceMat)  the radiant figure: core, flowing body, arms, robe of light and halo ring
//   kosha                   (shellMat)  the layered fresnel shells (sheaths) round a being
//   pakshaveda              (veilGeo)  instanced geometry of the six veils
//   garudapaksha            (veilMat)  the breathing veils of light like wings or petals
//   taraveda                (moteGeo)  instanced geometry of the orbiting motes
//   tarakagana              (moteMat)  motes of light orbiting a being
//   YANTRAMALA              (BEING_YANTRAS)  the yantras drawn faintly behind the beings
//   koshaveda               (shellGeo)  the sphere behind each shell
//   meru                    (beingCentre)  the centre the beings circle: you, followed slowly
//   dikpala                 (pickAzimuth)  picks a direction away from the other beings
//   devasabha               (syncBeingCount)  adds or sends away beings to match the menu
//   jagrata                 (liveBeings)  the beings that are present
//   Prasada                 (Bolt)  one blessing in flight: a ball of plasma with its trail (class)
//   prasadapatra            (bolts)  the pool of 12 blessings
//   VARADANA                (BOLT_TYPES)  kinds of blessing: orb, spiral, sphere, comet
//   DVADASHA                (BOLT_CAP)  most blessings in flight at once (12)
//   MARGA                   (BOLT_PATH)  GLSL path of a blessing: curve, tangent, spiral orbs
//   gunavahana              (typeForQuality)  which kind of blessing a quality sends
//   tejoveda                (plasmaGeo)  instanced quads of the plasma balls (three for a spiral)
//   tejasbindu              (plasmaMat)  the plasma ball: churning sphere, white-hot core, turbulent corona
//   ketuveda                (trailGeo)  instanced streaks of the trail
//   dhumaketu               (trailMat)  the motion-blur trail (a comet tail)
//   mukta                   (freeBolt)  a free blessing from the pool
//   agamana                 (incomingCount)  how many blessings are coming to you
//   anugraha                (fireIncoming)  a being sends you a blessing
//   pratigrahana            (receiveBlessing)  a blessing reaches your heart or your palm
//   dana                    (giveBolt)  you send a blessing to a being (or along your ray)
//   svasti                  (blessArrives)  your blessing reaches a being
//   sahasrara               (head)  your eyes, as rendered
//   sahasraradisha          (headQ)  head orientation
//   jivatma                 (userHead)  the person the beings bless: you, or the stand-in
//   purvadisha              (fwd)  where you look
//   purvottara              (fwdYaw)  where you face, level
//   hridaya                 (chest)  the heart target, 23 cm below and 15 cm in front of the eyes
//   NARAYANA                (PHANTOM)  the stand-in person's eyes in third-person demos
//   vajra                   (lightning)  the lightning system
//   agni                    (sparks)  sparks and embers
//   prabhu                  (dotTex)  soft dot texture
//   tejomaya                (aura)  the aura shells round your body
//   tejasvi                 (auraMat)  aura shell material
//   tejasvini               (auraU)  aura uniforms
//   surya                   (flare)  head-locked flare and bloom overlay, capped so passthrough stays visible
//   vani                    (labels)  floating words such as 'Joy received'
//   vidyut                  (flashes)  flashes where your blessings strike a being
//   tarangini               (waves)  the palm-push waves
//   TARANGA                 (WAVE_CONE)  half-angle of the palm-push wave (30 degrees)
//   sangama                 (gather)  the ring of light gathering at joined palms
//   sangamashakti           (gatherU)  its uniforms
//   sangamayantra           (gatherYantra)  the Seed of Life at joined palms
//   digvijaya               (radialRing)  the Anjali's 360-degree ring of blessing
//   digvijayashakti         (ringU)  its uniforms
//   digbrahma               (ringMetatron)  Metatron's Cube spreading with a charged Anjali
//   anjalimudra             (anjali)  Anjali state: hold, cooldown, ring, count
//   utkranti                (ascensions)  ascension columns and starbursts
//   vasanta                 (bloom)  the Harmony Bloom state
//   vasantavarna            (bloomColors)  its colours, from the beings
//   bhumandala              (floorMandala)  the Flower of Life / Sri Yantra mandala on the floor
//   amritavarsha            (shower)  the shower of light from every being in the Bloom
//   amritadhara             (showerU)  its uniforms
//   hastajyoti              (handGlow)  glow on fingertips and palms
//   kripa                   (handMotes)  orbs drawn into the palm and up the forearm
//   hrishikeshayantra       (heartYantra)  Anahata at the heart when a blessing enters
//   karayantra              (palmYantras)  a Sri Yantra on a palm that catches a blessing
//   kankana                 (wristMeters)  Prana and Harmony arcs on the left wrist
//   kankanashakti           (wristU)  their uniforms
//   chhayahasta             (standInHands)  translucent stand-in hands (desktop demos)
//   chhayanyasa             (poseStandIn)  poses a stand-in hand
//   purusha                 (phantomBody)  translucent stand-in body for third-person demos
//   vibhuti                 (effects)  the effects director: impacts, catches, waves, rings, lightning, flare
//   shriyantradhara         (sacredU)  sacred geometry on/off fade
//   chitrakara              (lineTex)  draws a line texture once
//   lalita                  (sriYantraTex)  Sri Yantra line texture
//   hrishikesha             (anahataTex)  Anahata (heart) mandala texture
//   brahma                  (metatronTex)  Metatron's Cube / Fruit of Life texture
//   kartikeya               (seedTex)  Seed of Life and hexagram texture
//   shripura                (bloomTex)  the Harmony Bloom floor mandala texture
//   tripura                 (drawSriYantra)  draws the Sri Yantra
//   pushpitavana            (drawFlowerOfLife)  draws the Flower of Life
//   SHRICHAKRA              (SACRED_FRAG)  GLSL glow of the sacred line textures
//   yantreshvari            (sacredMat)  material for a sacred texture on a quad
//   vastu                   (room)  the desktop stand-in room
//   vastupurusha            (roomMat)  room grid material
//   samatvam                (meters)  the Prana and Harmony meters
//   saraswati               (panel)  the menu panel
//   jagadguru               (menuHint)  the floating 'turn your left palm' hint
//   chakrapani              (pointers)  the two hand pointers (ray and reticle)
//   mushika                 (mouse)  the desktop mouse pointer (Ganesha's mouse)
//   lakshya                 (aim)  aims a pointer: the panel, or the being nearest the ray (aim assist)
//   DRISHTIKONA             (AIM_CONE)  aim-assist cone (8 degrees)
//   ashirvada               (onSelect)  handles a pinch
//   bindu                   (makeReticle)  builds the ring that marks the being you point at
//   tarjani                 (makePointer)  builds a pointer
//   drishti                 (raycaster)  raycaster
//   nadabrahma              (audio)  all sound
//   gopura                  (desk)  desktop stand-ins for gestures (keys P, N, C)
//   gopurahasta             (deskHands)  stand-in hands made from those keys
//   gopurabindu             (deskHandPoint)  where the desktop blessing leaves from
//   gopurashirvada          (onSelectDesk)  handles a desktop click
//   panduranga              (xrHands)  the two WebXR hands
//   hastamalaka             (readHands)  reads the hands: palm, normal, wrist, forearm, tips, velocity
//   sandhihasta             (jointHands)  hands from WebXR joints
//   hastanirmana            (makeHand)  a hand described directly (desktop and demos)
//   varadahasta             (menuDemoHand)  stand-in left palm for ?demo=menu
//   abhaya                  (demoHands)  stand-in hands for the demos
//   mudra                   (buildFakeJoints)  builds XRHand-like joints for the smoke test
//   parikshamudra           (smokePoses)  hand poses of the smoke test
//   hastagati               (handTrack)  palm velocity per hand
//   VAYUVEGA                (PUSH_SPEED)  palm-push speed along the palm normal (0.8 m/s)
//   hastamudra              (gestures)  palm push and Anjali detection
//   mudralekha              (gestureStats)  gesture counters
//   ISHVARA                 (TIP_JOINTS)  WebXR fingertip joint names
//   pushpavrishti           (startBloom)  begins the Harmony Bloom
//   pushpotsava             (updateBloom)  runs the Harmony Bloom
//   kalayojana              (scheduleIncoming)  the beings take turns to bless you
//   agamikala               (nextFire)  when the next being blesses you
//   kalarekha               (timeline)  demo and smoke-test script
//   muhurta                 (at)  schedules a step of that script
//   darshana                (lookFrom)  points the demo camera
//   vyuha                   (arrange)  places beings for a demo
//   leela                   (startDemo)  sets up ?demo views
//   agnipariksha            (smokeTest)  the hand-tracking smoke test
//   sambhava                (enterBtn)  the Enter AR button
//   bhavana                 (hintEl)  the desktop hint
//   bharta                  (needPlace)  place the menu on the first AR frame
//   prabhava                (noAR)  shows that AR is not available
//   vikarta                 (uColors)  palette uniform (5 colours)
//   vidarana                (uTime)  time uniform
//   ijya                    (uTex)  texture uniform
//   satra                   (uAlpha)  brightness uniform of a sacred texture
//   sarvajna                (uRot)  rotation uniform
//   sarvadarshi             (uBillboard)  faces you when set
//   vimuktatma              (uScale)  size uniform
//   mahejya                 (uSacred)  sacred geometry on/off (uniform)
//
// Shader names, helpers and the rest:
//   abhu                    (DEMO_MENU)  constant
//   abrahmakitajanani       (waveMat)  constant
//   achyuta                 (H)  parameter / local
//   adhishthana             (J)  constant
//   adhokshaja              (L)  constant
//   adideva                 (MAX)  constant
//   aditya                  (MOTES_PER_BEING)  constant
//   adrishya                (N)  constant
//   agrahya                 (PENTA)  constant
//   agrani                  (PH)  parameter / local
//   ahas                    (PW)  parameter / local
//   aja                     (R)  constant, GLSL name
//   ajnachakra              (robe)  GLSL name
//   akshara                 (S)  constant
//   akula                   (ridge)  GLSL name
//   amaraprabhu             (SHOWER_N)  constant
//   ambika                  (wristJ)  parameter / local
//   ameyatma                (TRAIL_N)  constant
//   amitashana              (W)  constant
//   amogha                  (WHITE)  constant
//   amrita                  (_anjMid)  constant
//   amritamshudbhava        (_basisM)  constant
//   amritapa                (_d)  parameter / local
//   amrityu                 (_el)  parameter / local
//   anadinidhana            (_fing)  parameter / local
//   anagha                  (_flareQ)  constant
//   anala                   (_flat)  constant
//   anantajit               (_goal)  constant
//   anaya                   (_goalOut)  constant
//   anila                   (_hudR)  constant
//   animisha                (_hudU)  parameter / local
//   aniruddha               (_inst)  constant
//   anirvinna               (_n1)  parameter / local
//   anugrahada              (vh)  GLSL name
//   anukula                 (_n2)  parameter / local
//   anuttama                (_o)  parameter / local
//   apamnidhi               (_sh)  constant
//   apramatta               (_side)  parameter / local
//   aprameya                (_tan)  constant
//   aprameyatma             (_tmp)  parameter / local
//   aravindaksha            (_tmp2)  constant
//   artha                   (_tmp3)  parameter / local
//   aruna                   (progressAt)  GLSL name
//   asankhyeya              (_toB)  constant
//   ashoka                  (a)  constant, GLSL name
//   ashtamichandra          (point)  object property
//   ashvarudha              (quality)  parameter / local, object property
//   atindra                 (a0)  constant
//   atindriya               (a1)  parameter / local
//   atmavan                 (aC)  shader attribute
//   atula                   (aMote)  shader attribute
//   aushadha                (aOrb)  shader attribute
//   avartana                (aP0)  shader attribute
//   avijnata                (aP1)  shader attribute
//   avyanga                 (aSh)  shader attribute
//   avyaya                  (aTr)  shader attribute
//   babhru                  (aTr2)  shader attribute
//   bahushira               (aVeil)  shader attribute
//   bhadramurti             (s2)  GLSL name
//   bhadrapriya             (s1)  GLSL name
//   bhagamalini             (vt)  GLSL name
//   bhagavati               (want)  constant
//   bhairavi                (vn)  constant
//   bhaktasaubhagya         (sa)  GLSL name
//   bhaktigamya             (sc)  constant
//   bhaktipriya             (saved)  constant
//   bhaktivashya            (seed)  variable
//   bhandaputra             (radiance)  GLSL name
//   bhandasura              (qual)  parameter / local
//   bhandasurendra          (refresh)  object property
//   bhanu                   (across)  constant
//   bhanumandalamadhyastha  (vis)  GLSL name
//   bhaskaradyuti           (active)  object property
//   BHAVA                   (add)  constant
//   bhavanashini            (tips)  constant, object property
//   bhavani                 (rz)  parameter / local
//   bhavaranya              (s)  variable, GLSL name, object property
//   bhayapaha               (seen)  constant
//   bhedanashini            (tone)  constant
//   bhima                   (age)  constant, object property
//   bhogini                 (worldLock)  function, object property
//   bhojana                 (ahead)  parameter / local
//   bhokta                  (alive)  constant
//   bhrajishnu              (allBlessed)  constant
//   BHUGARBHA               (amount)  parameter / local
//   bhujagottama            (amp)  parameter / local
//   bhuridakshina           (ang)  constant, GLSL name
//   bhutabhavana            (angOf)  constant
//   BHUTABHAVYA             (anjaliAt)  object property
//   bhutadi                 (anjaliRelease)  object property
//   bhutamaheshvara         (anjaliT)  constant
//   bhuvaneshvari           (wrap)  function, object property
//   bija                    (apart)  constant
//   bisatantu               (rx)  parameter / local
//   brahmagranthi           (ringGeo)  constant
//   brahmarupa              (value)  parameter / local
//   brahmopendra            (release)  object property
//   brihadbhanu             (arc)  function
//   brihadrupa              (arcBand)  GLSL name
//   chakraraja              (quat)  parameter / local
//   champaka                (placed)  constant
//   chandramshu             (armL)  GLSL name
//   characharajagannatha    (v1)  constant
//   charuchandrakaladhara   (v)  parameter / local, GLSL name, object property
//   charuhasa               (uv)  parameter / local
//   charurupa               (upper)  constant, object property
//   chaturatma              (armR)  GLSL name
//   chaturbahu              (phase2)  object property
//   chaturbhuja             (armsDown)  object property
//   chaturdamshtra          (arrived)  object property
//   chaturvyuha             (asc)  constant
//   chidagni                (perpN)  GLSL name
//   chinmayi                (vN)  shader varying
//   chintamani              (pushT)  constant
//   daksha                  (ascend)  object property
//   damana                  (ascendT)  object property
//   damodara                (ascension)  object property
//   deva                    (attack)  parameter / local
//   devabhrit               (awayFor)  parameter / local
//   devakarya               (petals)  constant
//   devarshigana            (qIndex)  parameter / local
//   devesha                 (axisA)  constant
//   dhama                   (axisB)  parameter / local
//   dhaneshvara             (az)  object property
//   dhanvi                  (b)  parameter / local, GLSL name
//   dharanidhara            (ba)  GLSL name
//   dharma                  (back)  constant
//   dharmadharma            (vQ)  shader varying
//   Dharmadhyaksha          (balance)  constant
//   dharmagup               (band)  GLSL name
//   dharmakrit              (bands)  GLSL name
//   Dharmavid               (base)  parameter / local, GLSL name, object property
//   dharmayupa              (beads)  GLSL name
//   dharmi                  (before)  parameter / local
//   dhata                   (begin)  object property
//   dhaturuttama            (being)  parameter / local
//   dhritatma               (beingIndex)  parameter / local
//   dhruva                  (bell)  constant
//   dhurya                  (below)  parameter / local
//   dhyanadhyatridhyeya     (vPhase)  shader varying
//   duhkhahantri            (uBCol)  shader uniform
//   durachara               (uBloom)  shader uniform
//   duradharsha             (bend)  GLSL name, object property
//   durdhara                (best)  variable
//   durga                   (uAscend)  shader uniform
//   durgama                 (uAge)  shader uniform
//   durlabha                (u)  constant, object property
//   durmarshana             (bestAng)  parameter / local
//   dushtadura              (uBPos)  shader uniform
//   gabhastinemi            (bestGap)  parameter / local
//   gahana                  (bez)  GLSL name
//   garudadhvaja            (bezT)  GLSL name
//   geyachakra              (r)  parameter / local, GLSL name
//   gopati                  (bi)  GLSL name
//   gopta                   (blend)  object property
//   goptri                  (variety)  constant
//   govidampati             (bless)  object property
//   govinda                 (blessBackAt)  object property
//   govindarupini           (veils)  object property
//   gramani                 (blessed)  constant
//   guha                    (bloomPos)  object property
//   guru                    (body)  GLSL name
//   gurutama                (bolt)  constant
//   hamsa                   (branch)  parameter / local
//   haranetra               (res)  constant
//   haribrahmendrasevita    (x)  parameter / local, GLSL name
//   havirhari               (breathe)  GLSL name
//   hetu                    (build)  function
//   heyopadeya              (y0)  parameter / local
//   hiranyanabha            (burst)  constant, object property
//   hridya                  (y)  constant, GLSL name
//   hrimati                 (xrSession)  constant
//   hrimkari                (xr)  constant
//   ishana                  (bus)  parameter / local
//   ishta                   (button)  constant
//   ishvari                 (verbGain)  constant
//   jagadadija              (buttons)  variable
//   jagarini                (vSeed)  shader varying
//   jagatsetu               (c)  constant, GLSL name, object property
//   jahnu                   (ca)  GLSL name
//   janardana               (camPos)  parameter / local
//   janeshvara              (canFire)  object property
//   jaya                    (cand)  constant
//   Jeta                    (cands)  constant
//   jitakrodha              (canvas)  constant
//   jnanagamya              (capsule)  GLSL name
//   jvalamalini             (r1)  parameter / local
//   jyeshtha                (catchBlend)  object property
//   kadamba                 (py)  parameter / local
//   kala                    (catchCols)  parameter / local
//   kamadayini              (q)  parameter / local, GLSL name
//   kamagni                 (rel)  GLSL name
//   kamaha                  (catchGlow)  constant, object property
//   kamakrit                (catchOn)  object property
//   kamakshi                (ptr)  constant
//   kamakuta                (press)  function, object property
//   kamaprada               (caught)  parameter / local
//   kameshajnata            (posePhantomArms)  function
//   kameshvaramukha         (rays)  GLSL name, object property
//   kameshvari              (prox)  parameter / local
//   kanakangada             (presence)  object property
//   kanta                   (caughtHand)  object property
//   kapindra                (cell)  parameter / local
//   karana                  (cells)  constant, GLSL name
//   karanguli               (refSpace)  constant
//   karpuravitika           (pool)  constant, object property
//   karta                   (centre)  object property
//   kaulini                 (rg)  constant
//   kavi                    (centres)  constant
//   keshava                 (cents)  parameter / local
//   kiricakra               (r0)  parameter / local, GLSL name
//   krama                   (ch)  variable
//   kratu                   (charged)  parameter / local, object property
//   kritajna                (chime)  object property
//   kritakrita              (choir)  object property
//   kritalakshana           (circle)  constant
//   kriti                   (ck)  constant
//   krodhaha                (click)  object property
//   krodhakara              (pin)  constant
//   krodhakrit              (col)  constant, GLSL name, object property
//   krodhashamani           (tex)  constant, object property
//   kshama                  (colorList)  parameter / local
//   kshara                  (colors)  parameter / local, object property
//   kshetrajna              (colorsOf)  parameter / local
//   kshobhana               (cols)  constant, object property
//   kulamrita               (respawnAt)  object property
//   kulangana               (reticle)  object property
//   kulasanketa             (ret)  constant
//   kulayogini              (rgb)  parameter / local
//   kundalini               (rr)  parameter / local
//   kuruvinda               (plasma)  object property
//   lakshmivan              (column)  constant, object property
//   lakshyaroma             (prof)  GLSL name
//   lobhanashini            (th)  GLSL name
//   lohitaksha              (columnGeo)  constant
//   lokadhyaksha            (comp)  constant
//   madanashini             (sum)  parameter / local
//   MADHAVA                 (cone)  object property
//   madhu                   (controller)  parameter / local
//   madhusudana             (cool)  object property
//   mahabala                (core)  constant, GLSL name, object property
//   mahabhaga               (coreHalo)  GLSL name
//   mahabhairava            (updatePath)  object property
//   mahabhoga               (count)  parameter / local, object property
//   mahabuddhi              (crackle)  object property
//   mahadeva                (crackleAt)  object property
//   mahadevi                (uOrbs)  shader uniform
//   mahadhana               (crackles)  constant
//   mahadyuti               (css)  parameter / local
//   mahaganesha             (reach)  constant
//   mahaishvarya            (uSize)  shader uniform
//   mahakosha               (ctrl)  constant
//   mahaksha                (ctx)  constant, object property
//   mahalakshmi             (uP0)  shader uniform
//   mahamakha               (cur)  parameter / local
//   mahamantra              (uWash)  shader uniform
//   mahamaya                (cursor)  variable
//   mahapadma               (px2)  parameter / local
//   mahapatakanashini       (uPulse)  shader uniform
//   mahapujya               (uPrana)  shader uniform
//   maharati                (uSeed)  shader uniform
//   maharddhi               (cx)  parameter / local
//   maharupa                (uP2)  shader uniform
//   mahasana                (until)  object property
//   mahasattva              (uR)  shader uniform
//   mahashakti              (cy)  parameter / local
//   mahashana               (d)  constant, GLSL name, object property
//   mahasiddhi              (uT0)  shader uniform
//   mahasvana               (data)  constant
//   mahatantra              (uTrail)  shader uniform
//   mahatapa                (dd)  constant
//   mahavirya               (uStreak)  shader uniform
//   mahayaga                (update)  object property
//   mahayantra              (uWind)  shader uniform
//   mahayogeshvareshvari    (uTint)  shader uniform
//   mahendra                (delay)  parameter / local
//   maheshvari              (uLen)  shader uniform
//   mahidhara               (demoAim)  constant
//   mahotsaha               (dir)  parameter / local, object property
//   mamatahantri            (target)  parameter / local, object property
//   mandasmita              (pose)  parameter / local
//   manipura                (rise)  variable, object property
//   manohara                (dirty)  object property
//   manonmani               (uImp)  shader uniform
//   manorupa                (pinchLevel)  object property
//   mantra                  (dist)  constant
//   mantrini                (radius)  object property
//   manu                    (down)  parameter / local, GLSL name
//   marga                   (dq)  GLSL name
//   marichi                 (dragging)  parameter / local
//   Medhavi                 (draw)  function, object property
//   mohanashini             (t)  constant, GLSL name, object property
//   mridapriya              (uP1)  shader uniform
//   mrityumathani           (track)  object property
//   mukhachandra            (pointAt)  object property
//   muktanam                (drawFn)  parameter / local
//   muladhara               (ring)  variable, GLSL name, object property
//   nabhyalavala            (prev)  parameter / local
//   nadarupa                (x1)  parameter / local
//   nahusha                 (drone)  variable
//   naikamaya               (dt)  parameter / local
//   naikarupa               (dummy)  constant
//   naikatma                (dur)  parameter / local, object property
//   nakshatranemi           (dx)  constant
//   nakshatri               (dy)  parameter / local
//   namarupavivarjita       (xAxis)  parameter / local
//   nara                    (dz)  parameter / local
//   narasimha               (e)  parameter / local
//   narayani                (x0)  constant
//   naya                    (e1)  constant
//   neta                    (e2)  parameter / local
//   neya                    (edge)  GLSL name
//   nidhiravyaya            (effectsGroup)  constant
//   nihsamshaya             (thumb)  object property
//   nijajnarupanigama       (whoosh)  object property
//   nijaruna                (place)  function, object property
//   nijasallapa             (pos)  parameter / local, object property
//   niketana                (v2)  parameter / local
//   nilachikura             (tt)  GLSL name
//   nimisha                 (emit)  object property
//   nirabadha               (tn)  GLSL name
//   niradhara               (shoulder)  parameter / local
//   niraga                  (streak)  variable, GLSL name
//   nirahankara             (swatch)  constant
//   nirakara                (size)  parameter / local
//   nirakula                (slot)  constant
//   niranjana               (show)  constant, object property
//   nirantara               (start)  constant
//   nirapaya                (tw)  constant
//   nirashraya              (spokes)  GLSL name
//   niratyaya               (type)  constant
//   niravadya               (standInMat)  constant
//   nirbhava                (tint)  parameter / local, GLSL name
//   nirbheda                (tn2)  GLSL name
//   nirguna                 (smin)  GLSL name
//   nirishvara              (steps)  parameter / local
//   nirlepa                 (shown)  parameter / local
//   nirlobha                (text)  parameter / local
//   nirmada                 (strengthOf)  parameter / local
//   nirmala                 (side)  parameter / local, GLSL name
//   nirmama                 (tail)  GLSL name
//   nirmoha                 (sweep)  parameter / local
//   nirnasha                (tr)  constant
//   nirupadhi               (step)  parameter / local
//   nirupaplava             (sparkAcc)  object property
//   nirvikalpa              (title)  parameter / local
//   nirvikara               (speed)  parameter / local, object property
//   nishchinta              (surf)  GLSL name
//   nishkala                (source)  object property
//   nishkalanka             (started)  variable
//   nishkama                (sp)  constant, object property
//   nishkarana              (startWindup)  object property
//   nishkriya               (trail)  object property
//   nishkrodha              (test)  constant
//   nishpapa                (tcol)  parameter / local
//   nishparigraha           (trailPos)  GLSL name
//   nishprapancha           (spin)  GLSL name
//   nistula                 (tri)  constant
//   nitya                   (sign)  constant
//   nityabuddha             (src)  parameter / local
//   nityamukta              (spawn)  constant
//   nityaparakrama          (rad)  GLSL name
//   nityashuddha            (spread)  constant
//   nivrittatma             (end)  constant, object property
//   niyama                  (endAt)  object property
//   nyaya                   (ends)  GLSL name
//   padmagarbha             (err)  parameter / local
//   padmanabha              (ev)  constant
//   padmanabhasahodari      (wasHidden)  constant
//   padmanayana             (vAlpha)  shader varying
//   padmanibhekshana        (event)  object property
//   padmaragasamaprabha     (vCol)  shader varying
//   padmasana               (w)  parameter / local, GLSL name
//   padmi                   (f)  constant, GLSL name
//   panchabrahma            (px)  parameter / local
//   panchabrahmasvarupini   (vL)  shader varying
//   panchakrityaparayana    (vib)  constant
//   panchapretasanasina     (vFloor)  shader varying
//   panchatanmatra          (pitch)  parameter / local
//   papanashini             (tendrils)  GLSL name
//   paramagati              (f0)  parameter / local
//   paramananda             (vNear)  shader varying
//   Paramaspashta           (f1)  parameter / local
//   paramatma               (f2)  parameter / local
//   parameshthi             (facing)  constant, GLSL name
//   parameshvara            (facingFor)  variable
//   pararddhi               (fade)  object property
//   parigraha               (fadeDelay)  object property
//   parvati                 (vA)  shader varying
//   pavana                  (fadeEnds)  GLSL name
//   Pavitra                 (fadeLow)  GLSL name
//   prabhuta                (fakeJoints)  object property
//   pradhana                (fall)  GLSL name
//   prajabhava              (far)  parameter / local
//   prajapati               (fast)  object property
//   prajnatmika             (vVis)  shader varying
//   PRAKASHANA              (fg)  constant
//   PRAKASHATMA             (fib)  GLSL name
//   pramana                 (fil)  GLSL name
//   pramshu                 (fill)  GLSL name
//   pranada                 (fl)  constant
//   Pranava                 (flash)  GLSL name
//   prasannatma             (flashAt)  object property
//   PRATAPANA               (flashMat)  constant
//   pratardana              (flick)  constant
//   prathita                (flow)  GLSL name
//   pratishthita            (flt)  parameter / local
//   Pratyaya                (fn)  parameter / local, object property
//   prithu                  (follow)  constant
//   Punarvasu               (forearm)  constant, object property
//   pundarikaksha           (forearmDown)  constant
//   punyapunyaphalaprada    (width)  parameter / local
//   purandara               (frame)  parameter / local
//   puratana                (frames)  parameter / local
//   purna                   (world)  GLSL name
//   purujit                 (from)  parameter / local
//   purusattama             (front)  constant
//   purusharthaprada        (words)  constant
//   purusheshvara           (fu)  constant
//   purushottama            (full)  GLSL name
//   pushkaraksha            (g)  constant, GLSL name
//   PUSHTA                  (gain)  constant
//   PUTATMA                 (gap)  variable
//   ragamathani             (strength)  constant
//   ragasvarupa             (pick)  constant
//   rajarajarchita          (y1)  parameter / local
//   rajivalochana           (yb)  parameter / local
//   rakini                  (ya)  parameter / local
//   rama                    (gate)  constant
//   ramani                  (yv)  GLSL name
//   ramya                   (yaw)  variable
//   ranjani                 (yu)  constant
//   rasya                   (z)  parameter / local
//   ratnagarbha             (gentle)  parameter / local
//   ratnagraiveya           (prana)  GLSL name
//   Riddha                  (geo)  constant, object property
//   ritu                    (given)  variable
//   rohita                  (glow)  constant, GLSL name, object property
//   rudragranthi            (robeW)  GLSL name
//   rudrarupa               (vel)  object property
//   sadashiva               (vg)  parameter / local
//   sadayogi                (gn)  parameter / local
//   sadgatiprada            (uFade)  shader uniform
//   sadhu                   (goal)  constant
//   sadhvi                  (setup)  parameter / local
//   saha                    (got)  parameter / local
//   sahasrajit              (grad)  parameter / local
//   sahasrakshi             (waveGeo)  constant
//   sahasramshu             (grav)  parameter / local
//   sahasramurdha           (group)  object property
//   sahasrapat              (grp)  constant
//   sahasrarambuja          (roomBox)  constant
//   sahasrashirshavadana    (wave)  object property
//   sahishnu                (h)  parameter / local, GLSL name, object property
//   sakalagamasandoha       (windup)  object property
//   sakshi                  (h0)  parameter / local
//   sama                    (h1)  parameter / local
//   samanadhika             (uDir)  shader uniform
//   Samatma                 (ha)  GLSL name
//   samayachara             (rim)  GLSL name
//   samayajna               (half)  constant
//   samayantastha           (right)  constant
//   samharini               (veins)  GLSL name
//   samiha                  (halo)  constant, GLSL name, object property
//   samirana                (hand)  constant
//   samitinjaya             (handMenu)  function, object property
//   sammita                 (handMode)  parameter / local
//   sampatkari              (qualities)  parameter / local
//   sampramardana           (handedness)  parameter / local
//   samshayaghni            (thumbSide)  constant
//   samsthana               (hands)  parameter / local
//   samvatsara              (harm)  GLSL name
//   samvrita                (headGlow)  GLSL name
//   sandhata                (heartImpact)  object property
//   sandhiman               (hex)  parameter / local
//   sandrakaruna            (uCone)  shader uniform
//   sangraha                (hexagram)  constant
//   sarga                   (hh)  GLSL name
//   sarva                   (hi)  parameter / local
//   sarvadarshana           (hit)  constant
//   sarvadi                 (hold)  object property
//   sarvadrik               (hot)  constant
//   SARVAGA                 (hover)  parameter / local
//   sarvajnya               (uColor)  shader uniform
//   sarvamangala            (uEnv)  shader uniform
//   sarvamantrasvarupini    (uHarm)  shader uniform
//   sarvamayi               (uGlow)  shader uniform
//   sarvashaktimayi         (uDur)  shader uniform
//   sarvatantrarupa         (uHold)  shader uniform
//   sarvavasthavivarjita    (vY)  shader varying
//   SARVAVID                (hoverId)  object property
//   sarvayantratmika        (uHead)  shader uniform
//   sarveshvara             (hoverKey)  parameter / local
//   sarveshvari             (uGain)  shader uniform
//   satamgati               (hovered)  parameter / local
//   Satkarta                (hp)  GLSL name
//   satkrita                (hr)  GLSL name
//   sattvastha              (hue)  GLSL name
//   satya                   (hw)  constant
//   satyaparakrama          (hy)  constant
//   Shader                  (BEING_UNIFORMS_GLSL)  constant
//   shambhavi               (seg)  constant
//   shambhu                 (i)  parameter / local, GLSL name
//   shankari                (setIndex)  parameter / local
//   shantimati              (shells)  object property
//   sharabha                (id)  parameter / local, object property
//   sharachchandra          (shed)  object property
//   sharadaradhya           (self)  parameter / local
//   sharanam                (idAt)  constant, object property
//   sharirabhrit            (ids)  parameter / local
//   sharma                  (idx)  parameter / local, object property
//   sharmadayini            (setHover)  function, object property
//   sharva                  (impactFrom)  constant
//   sharvani                (set)  constant
//   shashabindu             (impulse)  variable
//   shashvata               (inArc)  GLSL name
//   shasta                  (index)  parameter / local
//   shatavarta              (indexJ)  constant
//   shatchakra              (rp)  GLSL name
//   shatodari               (shellPos)  object property
//   shatrughna              (indexTip)  object property
//   shauri                  (inflow)  GLSL name
//   shikhandi               (init)  function, object property
//   shipivishta             (initial)  parameter / local
//   shishtakrit             (inner)  GLSL name
//   shishteshta             (inside)  constant, GLSL name
//   shiva                   (instant)  parameter / local
//   shreshtha               (invQ)  constant
//   shrigarbha              (inward)  constant
//   shrikari                (setOn)  object property
//   shrimaharajni           (paused)  object property
//   shriman                 (ir)  parameter / local
//   shrimata                (pathAt)  GLSL name
//   shrinagara              (pushLevel)  object property
//   shringamadhya           (pushAt)  object property
//   shrinivasa              (item)  constant
//   shrividya               (respawn)  object property
//   shrutisagara            (j)  variable, GLSL name
//   shrutisimantasindhuri   (wind)  GLSL name, object property
//   Shubhekshana            (joined)  variable
//   shuchi                  (k)  constant, GLSL name
//   shuchishrava            (key)  parameter / local, GLSL name
//   shuddhavidya            (poly)  constant
//   shuktisamputamauktika   (word)  constant
//   shura                   (kind)  constant, object property
//   siddha                  (kk)  parameter / local
//   siddhartha              (l)  GLSL name
//   siddhasankalpa          (label)  parameter / local
//   siddhi                  (lagN)  GLSL name
//   siddhida                (lagSec)  GLSL name
//   siddhisadhana           (last)  object property
//   simha                   (lastBlessed)  object property
//   simhasaneshvari         (peak)  parameter / local
//   skanda                  (lastDraw)  parameter / local
//   skandadhara             (lastEvent)  object property
//   soma                    (lastFire)  object property
//   somapa                  (lastPush)  object property
//   spashtakshara           (lastSel)  object property
//   sragvi                  (lastX)  parameter / local
//   srishtikartri           (val)  parameter / local
//   stanabhara              (progress)  object property
//   sthanada                (lastY)  parameter / local
//   sthanu                  (launch)  object property
//   sthavira                (layer)  parameter / local
//   sthavishta              (left)  constant
//   sthavishtha             (len)  constant, GLSL name
//   sthira                  (level)  constant, object property
//   subhuja                 (levels)  object property
//   sudhasagara             (py2)  parameter / local
//   sudhasarabhivarshini    (rot)  parameter / local
//   sughosha                (lfo)  constant
//   suhrit                  (lfoGain)  parameter / local
//   sukhada                 (lh)  constant
//   sukhaprada              (uBOn)  shader uniform
//   sukshma                 (life)  parameter / local, GLSL name, object property
//   sumeru                  (pts)  parameter / local, object property
//   sumukha                 (lift)  GLSL name
//   suparna                 (limb)  GLSL name
//   suprasada               (line)  variable, GLSL name
//   supta                   (vV)  shader varying
//   suradhyaksha            (lines)  parameter / local
//   surananda               (list)  variable
//   surariha                (listen)  object property
//   sureshvara              (live)  constant
//   sutapa                  (ln)  parameter / local
//   suvrata                 (lo)  parameter / local
//   svapana                 (local)  constant
//   svapanti                (vUv)  shader varying
//   svavasha                (lp)  constant, GLSL name
//   SVAYAMBHU               (lum)  constant
//   tadillata               (rows)  constant
//   taijasatmika            (vUv2)  shader varying
//   tarana                  (lvl)  GLSL name
//   tirodhanakari           (verb)  variable
//   Trikakubdhama           (m)  parameter / local, GLSL name
//   turya                   (vW)  shader varying
//   tushta                  (mandala)  object property
//   tvashta                 (master)  variable
//   udaradhi                (mat)  parameter / local, object property
//   udbhava                 (maxW)  parameter / local
//   udyadbhanu              (phase)  object property
//   ugra                    (menuFacing)  object property
//   unmeshanimishotpanna    (wash)  parameter / local
//   upendra                 (mesh)  constant, object property
//   urjita                  (meshes)  object property
//   uttara                  (meta)  constant
//   vachaspati              (meterBar)  constant
//   vadanasmara             (pointsMat)  constant
//   vagmi                   (mid)  constant
//   vahni                   (mix)  constant
//   vaidya                  (mix32)  variable
//   vaikuntha               (mode)  object property
//   vaktralakshmi           (poked)  parameter / local
//   vamana                  (motes)  object property
//   varada                  (mouseIn)  variable
//   vararoha                (moved)  parameter / local
//   vardhamana              (ms)  parameter / local
//   vardhana                (mu)  constant
//   varnashramavidhayini    (white)  parameter / local
//   vasavanuja              (mv)  GLSL name
//   VASHATKARA              (n)  parameter / local, GLSL name, object property
//   vasu                    (n000)  GLSL name
//   Vasuda                  (n001)  GLSL name
//   vasudeva                (n010)  GLSL name
//   vasumana                (n011)  GLSL name
//   vatsala                 (n1)  GLSL name
//   vatsara                 (n100)  GLSL name
//   vatsi                   (n101)  GLSL name
//   vayu                    (n110)  GLSL name
//   vayuvahana              (n111)  GLSL name
//   veda                    (n2)  GLSL name
//   vedanga                 (name)  parameter / local, object property
//   vedavid                 (nd)  parameter / local
//   vedya                   (ndc)  constant
//   vegavan                 (near)  parameter / local, GLSL name
//   vibhu                   (nearest)  variable
//   vidhata                 (nextBuild)  parameter / local
//   vijaya                  (noise)  constant
//   vijnanaghanarupini      (vP)  shader varying
//   vikrama                 (noiseBuf)  variable
//   vikrami                 (normal)  constant, object property
//   vikshara                (note)  object property
//   vinaya                  (now)  constant
//   vira                    (o)  parameter / local, GLSL name
//   virabahu                (o1)  variable
//   viraha                  (o2)  parameter / local
//   virama                  (off)  constant
//   virata                  (og)  parameter / local
//   vishishta               (ok)  constant, GLSL name, object property
//   VISHNU                  (omega)  object property
//   vishnugranthi           (rn)  GLSL name
//   vishrama                (on)  parameter / local, object property
//   vishrutatma             (onArrive)  object property
//   vishukra                (rayGeo)  constant
//   vishvabahu              (opacity)  parameter / local
//   vishvabhuk              (open)  GLSL name, object property
//   vishvadakshina          (opposed)  constant
//   vishvadhrik             (opts)  parameter / local
//   vishvaksena             (orb)  constant
//   vishvaretas             (orbOffset)  GLSL name
//   vishvatma               (orbPos)  object property
//   vishvayoni              (orbs)  object property
//   VISHWAM                 (origin)  constant
//   vistara                 (osc)  constant
//   vivarjita               (vS)  shader varying
//   vivikta                 (other)  constant
//   vriddhatma              (out)  parameter / local
//   vrisha                  (outgoing)  object property
//   vrishabha               (outside)  GLSL name
//   vrishahi                (ow)  constant
//   vrishakapi              (ox)  object property
//   vrishakarma             (oy)  object property
//   vrishakriti             (p)  constant, GLSL name, object property
//   vrishaparva             (p1)  parameter / local
//   vrishodara              (p2)  parameter / local
//   vyaktarupa              (p3)  GLSL name
//   vyala                   (pa)  GLSL name
//   vyapi                   (pace)  constant
//   vyapta                  (pal)  constant
//   vyavasaya               (palm)  constant, object property
//   vyavasthana             (palmAt)  constant
//   yajna                   (palmCatch)  object property
//   yama                    (palmColors)  constant
//   yogavidam               (pan)  constant
//   yugadikrit              (part)  constant
//   yugavarta               (parts)  parameter / local
// ===================================================================================================
import * as THREE from './vendor/three/three.module.js';

// ---------- qualities (copied from Puja VR, with their colours) ----------
// Spiritual qualities to offer instead of liquids, five to a set. Each takes the colour of the planet or deity
// linked with it in Vedic tradition; where tradition gives no single colour, the colour follows the meaning.
// They pour slowly, like honey, as radiant light: white at the core, the colour glowing round it.
const GUNASAGARA = [
  [['Intelligence', 0xffe6a0], ['Love', 0xff5fa8], ['Power', 0xff4a1c], ['Self-discipline', 0x2f6bff], ['Abundance', 0xffc81a]], // Saraswati, Venus, Sun, Saturn, Jupiter
  // Calm and Clear Under Pressure: staying calm and thinking coolly and clearly when under pressure (the cool Moon).
  [['Courage', 0xff1a30], ['Calm and Clear Under Pressure', 0x4fd8ff], ['Harmony', 0x22e07a], ['Peace', 0xdcd0ff], ['Joy', 0xff9a1f]],             // Mars, Moon (water), Mercury, Moon, Jupiter
  [['Strength', 0xff6010], ['Fame', 0xffd040], ['Devotion', 0x9a6bff], ['Wisdom', 0xfff07a], ['Health', 0xff8a5c]],           // Hanuman's sindoor, Sun, Ketu, Jupiter, Sun
  // Restraint: passing up small pleasures for the greater good (shreyas over preyas, Katha Upanishad).
  // Saturn rules patience and rewards that come late; deep sapphire indigo, set apart from self-discipline's blue.
  // Gratitude: Jupiter, grace and blessings received, in a soft rose, paler than love's pink.
  // Focus: Mercury, the one-pointed mind (ekagrata), in a bright chartreuse set apart from harmony's emerald.
  // Peaceful and Divine Sleep: the Moon rules sleep and the mind at rest (yoga nidra), in a soft moonlit periwinkle.
  // Career, Success and Prosperity: Lakshmi's wealth with Mercury's skill in work and trade,
  // in a rich jade teal, set apart from harmony's emerald and calm-and-clear's cyan.
  [['Restraint', 0x4b3cff], ['Gratitude', 0xff8c9a], ['Focus', 0xa8ff2a], ['Peaceful and Divine Sleep', 0x8fa8ff], ['Career, Success and Prosperity', 0x10c9b8]],
  // Protection of food, home and belongings from negative energies: Durga's guarding shakti,
  // in a vivid magenta, set apart from love's pink and devotion's violet.
  // Deep Connection with the Divine: the inner light (jyoti) of the Self, in a pure radiant white.
  // Transmute Psychic Attacks into Joy and Prosperity: Agni's purifying fire turns harm into blessing,
  // in a deep amethyst, set apart from protection's magenta and devotion's soft violet.
  // Divine Justice: Shani, lord of karma and justice, whose metal is iron, in a burnished steel blue-silver.
  [['Protection of Food, Home and Belongings', 0xe31ee0], ['Deep Connection with the Divine', 0xf4f8ff], ['Transmute Psychic Attacks into Joy and Prosperity', 0xa020f0], ['Divine Justice', 0x9fb6d0]],
].map((sharvani, shankari) => sharvani.map(([siddhasankalpa, sandhiman], devarshigana) => ({ label: siddhasankalpa, hex: sandhiman, rgb: new THREE.Color().setHex(sandhiman, THREE.LinearSRGBColorSpace), set: shankari, sharma: devarshigana })));
const SARVAGUNA = GUNASAGARA.flat();

// ---------- URL parameters, and a fixed random sequence in the demos so screenshots repeat ----------
const shruti = new URLSearchParams(location.search);
const LEELADHARA = shruti.has('demo');
const LEELARUPA = LEELADHARA ? shruti.get('demo') : null; // '' | '360' | 'being' | 'catch' | 'give' | 'anjali' | 'bloom' | 'menu' | 'smoke'
const KARAKA = LEELADHARA && shruti.has('xrhands'); // fake XRHand joints fed through the headset's hand code (smoke test)
const abhu = LEELARUPA === 'menu';
const BHUTAKRIT = LEELADHARA ? (shruti.has('stop') ? +shruti.get('stop') : ({ '': 3.1, '360': 3.4, being: 3.0, catch: 2.65, give: 2.35, anjali: 2.0, bloom: 5.2, menu: 1.0 })[LEELARUPA] || 0) : 0;
const BHUTABHRIT = ['360', 'bloom', 'anjali', 'catch'].includes(LEELARUPA) && shruti.get('cam') !== 'first';
if (LEELADHARA) {
  let bhaktivashya = (+shruti.get('seed') || 11) >>> 0;
  Math.random = () => { bhaktivashya = (bhaktivashya + 0x6D2B79F5) >>> 0; let vaidya = Math.imul(bhaktivashya ^ (bhaktivashya >>> 15), 1 | bhaktivashya); vaidya = (vaidya + Math.imul(vaidya ^ (vaidya >>> 7), 61 | vaidya)) ^ vaidya; return ((vaidya ^ (vaidya >>> 14)) >>> 0) / 4294967296; };
  document.body.classList.add('leelamaya');
}

// ---------- settings (menu), remembered in localStorage ----------
const DEVASANKHYA = [{ label: 'Few', VASHATKARA: 6 }, { label: 'Many', VASHATKARA: 10 }, { label: 'Multitude', VASHATKARA: 16 }];
const LAYA = [{ label: 'Calm', min: 3.0, max: 5.0 }, { label: 'Lively', min: 1.8, max: 3.0 }]; // guess: seconds between blessings
const GUNAVIDHI = ['Same set as mine', 'All sets'];
const sankalpa = { set: 0, q: 0, beings: 1, pace: 0, beingQ: 0, sacred: true, sound: true }; // q = -1 means all of this set
try {
  const bhaktipriya = JSON.parse(localStorage.getItem('blessings-of-light') || '{}');
  if (bhaktipriya.set >= 0 && bhaktipriya.set < GUNASAGARA.length) sankalpa.set = bhaktipriya.set;
  if (bhaktipriya.q >= -1 && bhaktipriya.q < GUNASAGARA[sankalpa.set].length) sankalpa.q = bhaktipriya.q;
  if (bhaktipriya.beings >= 0 && bhaktipriya.beings < DEVASANKHYA.length) sankalpa.beings = bhaktipriya.beings;
  if (bhaktipriya.pace >= 0 && bhaktipriya.pace < LAYA.length) sankalpa.pace = bhaktipriya.pace;
  if (bhaktipriya.beingQ >= 0 && bhaktipriya.beingQ < 2) sankalpa.beingQ = bhaktipriya.beingQ;
  if (typeof bhaktipriya.sacred === 'boolean') sankalpa.sacred = bhaktipriya.sacred;
  if (typeof bhaktipriya.sound === 'boolean') sankalpa.sound = bhaktipriya.sound;
} catch (padmagarbha) { /* only a convenience */ }
const smarana = () => { try { localStorage.setItem('blessings-of-light', JSON.stringify(sankalpa)); } catch (padmagarbha) { /* only a convenience */ } };
if (LEELADHARA) {
  if (shruti.has('set')) sankalpa.set = Math.min(4, Math.max(0, +shruti.get('set')));
  if (shruti.has('q')) sankalpa.q = Math.min(GUNASAGARA[sankalpa.set].length - 1, Math.max(-1, +shruti.get('q')));
  if (shruti.has('n')) sankalpa.beings = Math.min(2, Math.max(0, +shruti.get('n')));
  else if (LEELARUPA === 'being') sankalpa.beings = 0;
  if (shruti.has('bq')) sankalpa.beingQ = shruti.get('bq') === 'all' ? 1 : 0;
  sankalpa.sacred = shruti.get('sacred') !== '0';
}
const gunanidhi = () => (sankalpa.q < 0 ? GUNASAGARA[sankalpa.set] : [GUNASAGARA[sankalpa.set][sankalpa.q]]);
const satsanga = { shrimaharajni: false };
const punyalekha = { given: 0, received: 0, caught: 0, ascended: 0, blooms: 0 };

// A colour lifted so its glow reads over a bright room. Dark colours (like Restraint's indigo) are lifted and pale
// ones (like Divine Justice's steel blue) get their hue strengthened; a true white stays white. Same rule as Energy Flow.
function tejovardhana(kulayogini) {
  const krodhakrit = kulayogini.clone();
  const SVAYAMBHU = 0.2126 * krodhakrit.r + 0.7152 * krodhakrit.g + 0.0722 * krodhakrit.b;
  if (SVAYAMBHU < 0.5) krodhakrit.multiplyScalar(Math.min(1.9, 0.5 / Math.max(SVAYAMBHU, 0.05)));
  const nityashuddha = Math.max(krodhakrit.r, krodhakrit.g, krodhakrit.b) - Math.min(krodhakrit.r, krodhakrit.g, krodhakrit.b);
  if (SVAYAMBHU > 0.55 && nityashuddha > 0.06 && nityashuddha < 0.4) {
    const PUSHTA = 2.3;
    krodhakrit.setRGB(Math.max(0, SVAYAMBHU + (krodhakrit.r - SVAYAMBHU) * PUSHTA), Math.max(0, SVAYAMBHU + (krodhakrit.g - SVAYAMBHU) * PUSHTA), Math.max(0, SVAYAMBHU + (krodhakrit.b - SVAYAMBHU) * PUSHTA), THREE.LinearSRGBColorSpace);
  }
  return krodhakrit;
}
// Five palette slots cycling through the given qualities (one quality fills all five).
const varna = (sampatkari = gunanidhi()) => [0, 1, 2, 3, 4].map(nirakula => tejovardhana(sampatkari[nirakula % sampatkari.length].rgb));

// ---------- renderer ----------
const vishvakarma = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: LEELADHARA });
vishvakarma.setPixelRatio(Math.min(devicePixelRatio, 2));
vishvakarma.setSize(innerWidth, innerHeight);
vishvakarma.setClearColor(0x000000, 0);
vishvakarma.xr.enabled = true;
vishvakarma.xr.setReferenceSpaceType('local-floor');
vishvakarma.xr.setFoveation(0.5);
document.body.appendChild(vishvakarma.domElement);

const vishvarupa = new THREE.Scene();
vishvarupa.background = null;
const sahasraksha = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.02, 80);
sahasraksha.rotation.order = 'YXZ';
sahasraksha.position.set(0, 1.6, 0);
vishvarupa.add(sahasraksha);
addEventListener('resize', () => {
  sahasraksha.aspect = innerWidth / innerHeight; sahasraksha.updateProjectionMatrix();
  vishvakarma.setSize(innerWidth, innerHeight);
});

const URDHVAGA = new THREE.Vector3(0, 1, 0);
const POORNAM = Math.PI * 2;
const HIRANYAGARBHA = (1 + Math.sqrt(5)) / 2;
const SURYANARAYANA = Math.PI * (3 - Math.sqrt(5)); // 137.5°
const shanta = (suvrata, sarva, haribrahmendrasevita) => { const shuchi = Math.min(1, Math.max(0, (haribrahmendrasevita - suvrata) / (sarva - suvrata))); return shuchi * shuchi * (3 - 2 * shuchi); };
const lila = (suvrata, sarva) => suvrata + Math.random() * (sarva - suvrata);
const mahakala = { mohanashini: 0 };
const kalashakti = { value: 0 }; // one shared time uniform for every shader

// Additive light that also keeps the passthrough visible: colour adds, alpha only slightly veils the room.
const PRAKASHA = {
  blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
  blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  transparent: true, depthWrite: false, toneMapped: false,
};

// ---------- shared GLSL ----------
const MAYA = /* glsl */`
#define POORNAM 6.2831853
float chitragupta(vec2 vrishakriti){ vec3 vyaktarupa = fract(vec3(vrishakriti.xyx) * .1031); vyaktarupa += dot(vyaktarupa, vyaktarupa.yzx + 33.33); return fract((vyaktarupa.x + vyaktarupa.y) * vyaktarupa.z); }
float chitrasena(vec3 vrishakriti){ vrishakriti = fract(vrishakriti * .1031); vrishakriti += dot(vrishakriti, vrishakriti.zyx + 31.32); return fract((vrishakriti.x + vrishakriti.y) * vrishakriti.z); }
float mayini(vec2 vrishakriti){
  vec2 shambhu = floor(vrishakriti), padmi = fract(vrishakriti); vec2 padmasana = padmi * padmi * (3. - 2. * padmi);
  return mix(mix(chitragupta(shambhu), chitragupta(shambhu + vec2(1., 0.)), padmasana.x), mix(chitragupta(shambhu + vec2(0., 1.)), chitragupta(shambhu + vec2(1., 1.)), padmasana.x), padmasana.y);
}
float mayapati(vec2 vrishakriti){ float bhavaranya = 0., ashoka = .5; for (int shambhu = 0; shambhu < 3; shambhu++){ bhavaranya += ashoka * mayini(vrishakriti); vrishakriti = vrishakriti * 2.07 + vec2(3.1, 7.7); ashoka *= .5; } return bhavaranya / .875; }
float mahamayini(vec3 vrishakriti){
  vec3 shambhu = floor(vrishakriti), padmi = fract(vrishakriti); vec3 padmasana = padmi * padmi * (3. - 2. * padmi);
  float vasu = chitrasena(shambhu), vatsara = chitrasena(shambhu + vec3(1., 0., 0.)), vasudeva = chitrasena(shambhu + vec3(0., 1., 0.)), vayu = chitrasena(shambhu + vec3(1., 1., 0.));
  float Vasuda = chitrasena(shambhu + vec3(0., 0., 1.)), vatsi = chitrasena(shambhu + vec3(1., 0., 1.)), vasumana = chitrasena(shambhu + vec3(0., 1., 1.)), vayuvahana = chitrasena(shambhu + vec3(1., 1., 1.));
  return mix(mix(mix(vasu, vatsara, padmasana.x), mix(vasudeva, vayu, padmasana.x), padmasana.y), mix(mix(Vasuda, vatsi, padmasana.x), mix(vasumana, vayuvahana, padmasana.x), padmasana.y), padmasana.z);
}
float mayadhisha(vec3 vrishakriti){ float bhavaranya = 0., ashoka = .5; for (int shambhu = 0; shambhu < 3; shambhu++){ bhavaranya += ashoka * mahamayini(vrishakriti); vrishakriti = vrishakriti * 2.03 + vec3(1.7, 9.2, 3.1); ashoka *= .5; } return bhavaranya / .875; }
`;
// Palette in GLSL: five colours, picked or blended by a 0..1 key.
const VARNAPATHA = /* glsl */`
uniform vec3 vikarta[5];
vec3 varnadhara(float shuchishrava){ int shambhu = int(floor(fract(shuchishrava) * 5.)); return vikarta[shambhu < 0 ? 0 : (shambhu > 4 ? 4 : shambhu)]; }
vec3 varnamala(float shuchishrava){
  float haribrahmendrasevita = fract(shuchishrava) * 5.; int shambhu = int(floor(haribrahmendrasevita)); int shrutisagara = int(mod(float(shambhu) + 1., 5.));
  return mix(vikarta[shambhu < 0 ? 0 : (shambhu > 4 ? 4 : shambhu)], vikarta[shrutisagara], smoothstep(0.25, 0.75, fract(haribrahmendrasevita)));
}`;
const bhutatma = new THREE.PlaneGeometry(2, 2);
// A streak: a quad from tail (x = 0) to head (x = 1), y across. Shared by all instanced streak systems.
const mangalamparam = new THREE.BufferAttribute(new Float32Array([0, -1, 0, 1, -1, 0, 0, 1, 0, 1, 1, 0]), 3);
const bahurupa = (Dharmavid, mahabhoga) => {
  const Riddha = new THREE.InstancedBufferGeometry();
  if (Dharmavid === 'streak') { Riddha.setIndex([0, 1, 2, 2, 1, 3]); Riddha.setAttribute('position', mangalamparam); }
  else { Riddha.setIndex(Dharmavid.index); Riddha.setAttribute('position', Dharmavid.attributes.position); if (Dharmavid.attributes.uv) Riddha.setAttribute('uv', Dharmavid.attributes.uv); }
  Riddha.instanceCount = mahabhoga;
  return Riddha;
};

// ---------- sacred geometry: luminous linework drawn once into canvas textures, tinted in the quality colour ----------
const shriyantradhara = { value: sankalpa.sacred ? 1 : 0 }; // fades the geometry in and out with the menu switch
function chitrakara(nirakara, muktanam) {
  const jitakrodha = document.createElement('canvas'); jitakrodha.width = jitakrodha.height = nirakara;
  const mahaksha = jitakrodha.getContext('2d');
  mahaksha.translate(nirakara / 2, nirakara / 2); mahaksha.scale(nirakara / 2, nirakara / 2); // unit square: -1..1
  mahaksha.strokeStyle = '#fff'; mahaksha.fillStyle = '#fff'; mahaksha.lineJoin = 'round'; mahaksha.lineCap = 'round';
  muktanam(mahaksha, 2 / nirakara);
  const krodhashamani = new THREE.CanvasTexture(jitakrodha);
  krodhashamani.anisotropy = 4;
  return krodhashamani;
}
const kritalakshana = (mahaksha, geyachakra, maharddhi = 0, mahashakti = 0) => { mahaksha.beginPath(); mahaksha.arc(maharddhi, mahashakti, geyachakra, 0, POORNAM); mahaksha.stroke(); };
const shuddhavidya = (mahaksha, sumeru) => { mahaksha.beginPath(); sumeru.forEach(([panchabrahma, kadamba], shambhu) => (shambhu ? mahaksha.lineTo(panchabrahma, kadamba) : mahaksha.moveTo(panchabrahma, kadamba))); mahaksha.closePath(); mahaksha.stroke(); };
const devakarya = (mahaksha, VASHATKARA, kiricakra, jvalamalini, sudhasarabhivarshini = 0) => {
  const samayajna = Math.PI / VASHATKARA;
  for (let shambhu = 0; shambhu < VASHATKARA; shambhu++) {
    const bhuridakshina = sudhasarabhivarshini + shambhu * POORNAM / VASHATKARA;
    mahaksha.beginPath();
    mahaksha.moveTo(Math.cos(bhuridakshina - samayajna) * kiricakra, Math.sin(bhuridakshina - samayajna) * kiricakra);
    mahaksha.quadraticCurveTo(Math.cos(bhuridakshina - samayajna * 0.55) * jvalamalini * 1.02, Math.sin(bhuridakshina - samayajna * 0.55) * jvalamalini * 1.02, Math.cos(bhuridakshina) * jvalamalini, Math.sin(bhuridakshina) * jvalamalini);
    mahaksha.quadraticCurveTo(Math.cos(bhuridakshina + samayajna * 0.55) * jvalamalini * 1.02, Math.sin(bhuridakshina + samayajna * 0.55) * jvalamalini * 1.02, Math.cos(bhuridakshina + samayajna) * kiricakra, Math.sin(bhuridakshina + samayajna) * kiricakra);
    mahaksha.stroke();
  }
};
const sangraha = (mahaksha, geyachakra, sudhasarabhivarshini = -Math.PI / 2) => {
  for (const virama of [0, Math.PI]) shuddhavidya(mahaksha, [0, 1, 2].map(shuchi => [Math.cos(sudhasarabhivarshini + virama + shuchi * POORNAM / 3) * geyachakra, Math.sin(sudhasarabhivarshini + virama + shuchi * POORNAM / 3) * geyachakra]));
};
// Sri Yantra: nine interlocking triangles (four pointing up, five down), bindu, 8- and 16-petal lotuses,
// three circles and the bhupura square with its four gates. Same drawing as Energy Flow.
function tripura(mahaksha, panchabrahma) {
  const bhaktigamya = 1 / 2.05;
  mahaksha.save(); mahaksha.scale(bhaktigamya, bhaktigamya);
  mahaksha.lineWidth = panchabrahma * 5 / bhaktigamya;
  const nistula = (rajivalochana, rakini) => { // base at height yb, apex at ya (canvas y is down, so flip)
    const satya = Math.min(Math.sqrt(Math.max(0, 1 - rajivalochana * rajivalochana)), Math.abs(rakini - rajivalochana) * 0.62);
    shuddhavidya(mahaksha, [[-satya, -rajivalochana], [satya, -rajivalochana], [0, -rakini]]);
  };
  [[0.68, -1.0], [0.45, -0.82], [0.29, -0.58], [0.10, -0.40], [-0.06, -0.20]].forEach(([rajivalochana, rakini]) => nistula(rajivalochana, rakini)); // Shakti, pointing down
  [[-0.62, 1.0], [-0.42, 0.76], [-0.24, 0.52], [-0.03, 0.30]].forEach(([rajivalochana, rakini]) => nistula(rajivalochana, rakini)); // Shiva, pointing up
  mahaksha.beginPath(); mahaksha.arc(0, 0.05, 0.035, 0, POORNAM); mahaksha.fill(); // bindu
  kritalakshana(mahaksha, 1.04);
  devakarya(mahaksha, 8, 1.04, 1.34, -Math.PI / 2);
  kritalakshana(mahaksha, 1.36);
  devakarya(mahaksha, 16, 1.36, 1.64, -Math.PI / 2);
  mahaksha.lineWidth = panchabrahma * 3.5 / bhaktigamya;
  [1.67, 1.72, 1.77].forEach(geyachakra => kritalakshana(mahaksha, geyachakra));
  mahaksha.lineWidth = panchabrahma * 2.2 / bhaktigamya;
  for (const samayajna of [1.88, 1.95, 2.02]) { // bhupura with a gate in the middle of each side
    const rama = 0.32, nirupadhi = 0.16;
    mahaksha.beginPath();
    for (let shuchi = 0; shuchi < 4; shuchi++) {
      mahaksha.save(); mahaksha.rotate(shuchi * Math.PI / 2);
      mahaksha.moveTo(-samayajna, -samayajna); mahaksha.lineTo(-rama, -samayajna); mahaksha.lineTo(-rama, -samayajna - nirupadhi); mahaksha.moveTo(rama, -samayajna - nirupadhi); mahaksha.lineTo(rama, -samayajna); mahaksha.lineTo(samayajna, -samayajna);
      mahaksha.restore();
    }
    mahaksha.stroke();
  }
  mahaksha.restore();
}
const lalita = chitrakara(1024, tripura);
// Anahata, the heart chakra: a 12-petal lotus around a hexagram.
const hrishikesha = chitrakara(512, (mahaksha, panchabrahma) => {
  mahaksha.lineWidth = panchabrahma * 3.2;
  devakarya(mahaksha, 12, 0.55, 0.95, -Math.PI / 2);
  kritalakshana(mahaksha, 0.55); kritalakshana(mahaksha, 0.5);
  sangraha(mahaksha, 0.47);
  kritalakshana(mahaksha, 0.14);
});
// Metatron's Cube over the Fruit of Life: 13 circles, every centre joined to every other.
const brahma = chitrakara(1024, (mahaksha, panchabrahma) => {
  mahaksha.lineWidth = panchabrahma * 3;
  const geyachakra = 0.16, sumeru = [[0, 0]];
  for (let shuchi = 0; shuchi < 6; shuchi++) { const bhuridakshina = -Math.PI / 2 + shuchi * POORNAM / 6; sumeru.push([Math.cos(bhuridakshina) * 2 * geyachakra, Math.sin(bhuridakshina) * 2 * geyachakra], [Math.cos(bhuridakshina) * 4 * geyachakra, Math.sin(bhuridakshina) * 4 * geyachakra]); }
  sumeru.forEach(([mahapadma, sudhasagara]) => kritalakshana(mahaksha, geyachakra, mahapadma, sudhasagara));
  mahaksha.beginPath();
  for (let shambhu = 0; shambhu < sumeru.length; shambhu++) for (let shrutisagara = shambhu + 1; shrutisagara < sumeru.length; shrutisagara++) { mahaksha.moveTo(...sumeru[shambhu]); mahaksha.lineTo(...sumeru[shrutisagara]); }
  mahaksha.stroke();
  kritalakshana(mahaksha, 5 * geyachakra);
});
// Seed of Life with a hexagram, in a double circle.
const kartikeya = chitrakara(512, (mahaksha, panchabrahma) => {
  mahaksha.lineWidth = panchabrahma * 3;
  kritalakshana(mahaksha, 0.95); kritalakshana(mahaksha, 0.9);
  sangraha(mahaksha, 0.86);
  const geyachakra = 0.3;
  kritalakshana(mahaksha, geyachakra);
  for (let shuchi = 0; shuchi < 6; shuchi++) kritalakshana(mahaksha, geyachakra, Math.cos(shuchi * POORNAM / 6) * geyachakra, Math.sin(shuchi * POORNAM / 6) * geyachakra);
});
// Flower of Life: 19 circles on a hexagonal lattice, in two outer circles.
function pushpitavana(mahaksha, geyachakra) {
  const kavi = [[0, 0]];
  for (let muladhara = 1; muladhara <= 2; muladhara++) for (let shuchi = 0; shuchi < 6; shuchi++) for (let bhavaranya = 0; bhavaranya < muladhara; bhavaranya++) {
    const atindra = shuchi * POORNAM / 6, atindriya = (shuchi + 1) * POORNAM / 6;
    const narayani = Math.cos(atindra) * muladhara * geyachakra, heyopadeya = Math.sin(atindra) * muladhara * geyachakra, nadarupa = Math.cos(atindriya) * muladhara * geyachakra, rajarajarchita = Math.sin(atindriya) * muladhara * geyachakra;
    kavi.push([narayani + (nadarupa - narayani) * bhavaranya / muladhara, heyopadeya + (rajarajarchita - heyopadeya) * bhavaranya / muladhara]);
  }
  kavi.forEach(([maharddhi, mahashakti]) => kritalakshana(mahaksha, geyachakra, maharddhi, mahashakti));
  kritalakshana(mahaksha, 3 * geyachakra); kritalakshana(mahaksha, 3 * geyachakra * 1.04);
}
// The floor mandala of the Harmony Bloom: a Sri Yantra at the centre, inside the Flower of Life, a 24-petal lotus and gates.
const shripura = chitrakara(2048, (mahaksha, panchabrahma) => {
  mahaksha.lineWidth = panchabrahma * 4;
  mahaksha.save(); mahaksha.scale(0.3, 0.3); tripura(mahaksha, panchabrahma / 0.3 * 0.9); mahaksha.restore();
  mahaksha.lineWidth = panchabrahma * 4;
  pushpitavana(mahaksha, 0.2);
  devakarya(mahaksha, 24, 0.66, 0.84, -Math.PI / 2);
  kritalakshana(mahaksha, 0.86); kritalakshana(mahaksha, 0.88);
  devakarya(mahaksha, 36, 0.88, 0.95, -Math.PI / 2);
  kritalakshana(mahaksha, 0.97);
});
// The glow of a line texture: the sharp line with a soft halo from a blurrier mip level, in the palette colour.
const SHRICHAKRA = VARNAPATHA + /* glsl */`
  uniform sampler2D ijya;
  varying vec2 svapanti; varying float padmanayana;
  void main(){
    float suprasada = texture2D(ijya, svapanti).a;
    float samiha = texture2D(ijya, svapanti, 3.5).a;
    vec2 mahashana = svapanti - 0.5;
    vec3 Dharmavid = varnadhara(fract(length(mahashana) * 2.2 + atan(mahashana.y, mahashana.x) / 6.2831853));
    vec3 krodhakrit = mix(Dharmavid * 1.5, vec3(1.), 0.35 * suprasada);
    float ashoka = (suprasada * 0.9 + samiha * 1.3) * padmanayana;
    gl_FragColor = vec4(krodhakrit * ashoka, ashoka * 0.3);
  }`;
// A flat sacred texture on a quad (its own position and rotation), fading with the menu switch.
function yantreshvari(krodhashamani, kshara) {
  return new THREE.ShaderMaterial({
    uniforms: { ijya: { value: krodhashamani }, vikarta: { value: kshara }, satra: { value: 0 }, sarvajna: { value: 0 }, mahejya: shriyantradhara, sarvadarshi: { value: 0 }, vimuktatma: { value: 1 } },
    ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      uniform float satra, sarvajna, mahejya, sarvadarshi, vimuktatma; varying vec2 svapanti; varying float padmanayana;
      void main(){
        vec2 shatchakra = vec2(position.x * cos(sarvajna) - position.y * sin(sarvajna), position.x * sin(sarvajna) + position.y * cos(sarvajna)) * vimuktatma;
        svapanti = position.xy * 0.5 + 0.5; padmanayana = satra * mahejya;
        if (sarvadarshi > 0.5) { vec4 vasavanuja = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vasavanuja.xy += shatchakra; gl_Position = projectionMatrix * vasavanuja; }
        else gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(shatchakra, 0., 1.);
      }`,
    fragmentShader: SHRICHAKRA,
  });
}

// ---------- beings of light (Devas) ----------
// Each being faces you: a white-hot core inside a soft, roughly human radiance of flowing light, a turning halo,
// breathing veils of light like wings or petals, orbiting motes, layered fresnel shells, and a faint yantra behind.
// Everything is in the being's own quality colour; only the core goes white-hot.
const Shader = /* glsl */`
uniform vec3 sarvajnya; uniform float vidarana, sarvamayi, mahapatakanashini, mahayantra, sadgatiprada, maharati, durga;`;
const devarupa = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    varying vec2 vijnanaghanarupini; varying float paramananda, panchapretasanasina;
    void main(){
      vijnanaghanarupini = position.xy;
      vec4 purna = modelMatrix * vec4(position, 1.);
      panchapretasanasina = smoothstep(0.02, 0.45, purna.y); // the robe of light thins out before it reaches the floor
      paramananda = smoothstep(0.6, 1.6, distance(modelMatrix[3].xyz, cameraPosition));
      gl_Position = projectionMatrix * viewMatrix * purna;
    }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec2 vijnanaghanarupini; varying float paramananda, panchapretasanasina;
    float jnanagamya(vec2 vrishakriti, vec2 ashoka, vec2 dhanvi, float geyachakra){ vec2 vyala = vrishakriti - ashoka, dharanidhara = dhanvi - ashoka; float sahishnu = clamp(dot(vyala, dharanidhara) / dot(dharanidhara, dharanidhara), 0., 1.); return length(vyala - dharanidhara * sahishnu) - geyachakra; }
    float nirguna(float ashoka, float dhanvi, float shuchi){ float sahishnu = clamp(0.5 + 0.5 * (dhanvi - ashoka) / shuchi, 0., 1.); return mix(dhanvi, ashoka, sahishnu) - shuchi * sahishnu * (1. - sahishnu); }
    void main(){
      vec2 vrishakriti = vijnanaghanarupini;
      float mohanashini = vidarana + maharati * 17.;
      float tarana = 0.6 + 0.5 * sarvamayi + 0.7 * mahapatakanashini;
      float neya = (1. - smoothstep(0.82, 1.0, abs(vrishakriti.x) / 1.2)) * (1. - smoothstep(0.82, 1.0, abs(vrishakriti.y + 0.2) / 1.4));
      // soft atmosphere round the whole being
      float tejomaya = exp(-dot(vrishakriti * vec2(1.25, 0.8), vrishakriti * vec2(1.25, 0.8)) / 0.28);
      vec3 krodhakrit = sarvajnya * tejomaya * 0.1 * tarana;
      // the radiance: head, chest, arms open in blessing, and a robe of light that thins into a flame below
      float guru = 0.;
      float akula = 0.;
      if (abs(vrishakriti.x) < 0.75 && vrishakriti.y > -1.25 && vrishakriti.y < 0.8) {
        vec2 prathita = vec2(mayapati(vrishakriti * 2.6 + vec2(maharati * 9., -mohanashini * 0.32)), mayapati(vrishakriti * 2.6 + vec2(4.3 - maharati * 5., -mohanashini * 0.32 + 5.2))) - 0.5;
        vec2 kamadayini = vrishakriti + prathita * vec2(0.10, 0.07) * (1. + (1. - smoothstep(-1., 0., vrishakriti.y)));
        float sahasrara = length((kamadayini - vec2(0., 0.43)) * vec2(1., 0.88)) - 0.075;
        float hridaya = jnanagamya(kamadayini, vec2(0., 0.27), vec2(0., -0.08), 0.095);
        float sumukha = 0.05 * sin(mohanashini * 0.7) + 0.08 * mahapatakanashini;
        float chandramshu = jnanagamya(kamadayini, vec2(-0.08, 0.25), vec2(-0.27, 0.06 + sumukha), 0.028);
        float chaturatma = jnanagamya(kamadayini, vec2(0.08, 0.25), vec2(0.27, 0.06 + sumukha), 0.028);
        float ramani = clamp((-kamadayini.y + 0.02) / 1.0, 0., 1.);
        float rudragranthi = 0.17 * pow(max(sin(3.14159 * pow(ramani, 0.62)), 0.), 0.9) * (1. - 0.35 * ramani) + 0.01;
        float ajnachakra = kamadayini.y < 0.02 ? max(abs(kamadayini.x) - rudragranthi, kamadayini.y - 0.02) : 1.;
        float mahashana = nirguna(nirguna(sahasrara, hridaya, 0.06), nirguna(min(chandramshu, chaturatma), ajnachakra, 0.05), 0.05);
        float pradhana = mix(16., 8., (1. - smoothstep(-0.9, -0.1, kamadayini.y))); // the robe dissolves into softer light lower down
        float Pavitra = 1. - (1. - smoothstep(-1.15, -0.65, kamadayini.y));
        guru = exp(-max(mahashana, 0.) * pradhana) * Pavitra;
        float bhandaputra = exp(-max(mahashana, 0.) * 5.) * Pavitra;
        float shishtakrit = (1. - smoothstep(-0.06, 0.03, mahashana)) * Pavitra;
        float samvrita = exp(-max(sahasrara + 0.03, 0.) * 18.);
        float pramana = mayapati(vec2(kamadayini.x * 13. + maharati * 3., kamadayini.y * 4. - mohanashini * 0.7));
        akula = pow(max(1. - abs(pramana * 2. - 1.), 0.), 7.) * guru;
        krodhakrit += sarvajnya * (bhandaputra * 0.16 + guru * 0.36 + akula * 0.6) * tarana;
        krodhakrit += mix(sarvajnya, vec3(1.), 0.6) * (shishtakrit * (0.26 + 0.14 * sarvamayi) + samvrita * 0.26) * tarana;
      }
      // the white-hot core in the chest, gathering light while it winds up
      float geyachakra = length(vrishakriti - vec2(0., 0.16));
      float shrutisimantasindhuri = mahayantra;
      float mahabala = exp(-geyachakra * geyachakra / (0.0011 * (1. + 2.5 * shrutisimantasindhuri + 1.2 * mahapatakanashini)));
      float mahabhaga = exp(-geyachakra * geyachakra / (0.022 * (1. + 1.2 * shrutisimantasindhuri)));
      float kameshvaramukha = pow(abs(cos(atan(vrishakriti.y - 0.16, vrishakriti.x) * 3. + mohanashini * 0.2)), 60.) * exp(-geyachakra * 7.) * (0.25 + 1.2 * shrutisimantasindhuri);
      krodhakrit += vec3(1.) * mahabala * (1.3 + 2.2 * shrutisimantasindhuri + mahapatakanashini) + mix(sarvajnya, vec3(1.), 0.35) * (mahabhaga * (0.35 + 0.9 * shrutisimantasindhuri + 0.4 * mahapatakanashini) + kameshvaramukha);
      // the halo ring behind the head, turning faster as the being is blessed
      vec2 Satkarta = (vrishakriti - vec2(0., 0.45)) * vec2(1., 1.18);
      float satkrita = length(Satkarta), Samatma = atan(Satkarta.y, Satkarta.x);
      float nishprapancha = mohanashini * (0.25 + 1.6 * sarvamayi + 3. * mahapatakanashini);
      float muladhara = exp(-(((satkrita - 0.15) / 0.0045) * ((satkrita - 0.15) / 0.0045))) * (0.55 + 0.45 * sin(Samatma * 9. + nishprapancha * 3.)) + exp(-(((satkrita - 0.15) / 0.025) * ((satkrita - 0.15) / 0.025))) * 0.22;
      float dharmayupa = pow(max(0., cos(Samatma * 18. - nishprapancha * 2.)), 30.) * exp(-(((satkrita - 0.185) / 0.006) * ((satkrita - 0.185) / 0.006)));
      krodhakrit += mix(sarvajnya, vec3(1.), 0.45) * (muladhara + dharmayupa * 0.8) * (0.55 + 0.6 * sarvamayi + 0.8 * mahapatakanashini);
      // ascending: the being turns to pure light
      krodhakrit = mix(krodhakrit, vec3(dot(krodhakrit, vec3(0.33))) * 1.4 + sarvajnya * 0.3, durga * 0.6) * (1. + durga * 1.5);
      krodhakrit *= sadgatiprada * neya * mix(0.35, 1., paramananda) * panchapretasanasina;
      gl_FragColor = vec4(krodhakrit, min(1., dot(krodhakrit, vec3(0.3))) * 0.3);
    }`,
});
const kosha = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    varying vec3 turya, chinmayi, panchabrahmasvarupini;
    void main(){ vec4 purna = modelMatrix * vec4(position, 1.); turya = purna.xyz; panchabrahmasvarupini = position; chinmayi = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * purna; }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec3 turya, chinmayi, panchabrahmasvarupini;
    void main(){
      vec3 charuchandrakaladhara = normalize(cameraPosition - turya);
      float parameshthi = abs(dot(normalize(chinmayi), charuchandrakaladhara));
      float samayachara = pow(max(1. - parameshthi, 0.), 1.4) * smoothstep(0., 0.25, parameshthi);
      float VASHATKARA = mayadhisha(vec3(panchabrahmasvarupini.x * 3., panchabrahmasvarupini.y * 2.2 - vidarana * 0.45, panchabrahmasvarupini.z * 3.) + maharati * 7.);
      float dharmakrit = smoothstep(0.42, 0.85, VASHATKARA);
      float tarana = 0.55 + 0.6 * sarvamayi + 0.8 * mahapatakanashini + 0.5 * mahayantra;
      float pavana = smoothstep(-1., -0.2, panchabrahmasvarupini.y) * (1. - smoothstep(0.35, 1., panchabrahmasvarupini.y));
      vec3 krodhakrit = sarvajnya * (samayachara * (0.015 + 0.16 * dharmakrit) * (0.5 + 0.5 * VASHATKARA) + 0.006 * dharmakrit) * tarana * pavana * sadgatiprada * (1. + durga * 2.);
      gl_FragColor = vec4(krodhakrit, dot(krodhakrit, vec3(0.3)) * 0.3);
    }`,
});
// Veils of light: six breathing petals fanned up and out from the shoulders like wings, in one instanced draw.
const pakshaveda = (() => {
  const Dharmavid = new THREE.PlaneGeometry(1, 1, 1, 8).translate(0, 0.5, 0);
  const Riddha = bahurupa(Dharmavid, 6);
  const mahasvana = new Float32Array([
    -0.45, 0.8, 0.46, 0.0, 0.45, 0.8, 0.46, 0.9,
    -1.1, 0.98, 0.6, 1.7, 1.1, 0.98, 0.6, 2.6,
    -1.95, 0.7, 0.46, 3.4, 1.95, 0.7, 0.46, 4.4]); // angle from straight up, length, width, phase
  Riddha.setAttribute('bahushira', new THREE.InstancedBufferAttribute(mahasvana, 4));
  return Riddha;
})();
const garudapaksha = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: Shader + /* glsl */`
    attribute vec4 bahushira; varying vec2 supta; varying float dhyanadhyatridhyeya;
    void main(){
      float havirhari = sin(vidarana * 0.75 + bahushira.w + maharati * 6.);
      float vishvabhuk = 1. + 0.16 * sarvamayi + 0.32 * mahapatakanashini + 0.05 * havirhari;
      float bhuridakshina = bahushira.x * vishvabhuk;
      float sthavishtha = bahushira.y * (1. + 0.15 * sarvamayi + 0.25 * mahapatakanashini + 0.04 * havirhari);
      float duradharsha = 0.18 * position.y * position.y * sign(bahushira.x) * (1. + 0.4 * havirhari);
      vec2 svavasha = vec2(position.x * bahushira.z * (1. + 0.3 * position.y) + duradharsha, position.y * sthavishtha);
      vec2 shatchakra = vec2(svavasha.x * cos(bhuridakshina) - svavasha.y * sin(bhuridakshina), svavasha.x * sin(bhuridakshina) + svavasha.y * cos(bhuridakshina));
      vec3 vrishakriti = vec3(shatchakra + vec2(0., 0.2), -0.06 - 0.14 * position.y);
      supta = vec2(position.x * 2., position.y); dhyanadhyatridhyeya = bahushira.w;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(vrishakriti, 1.);
    }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec2 supta; varying float dhyanadhyatridhyeya;
    void main(){
      float charuchandrakaladhara = supta.y, haribrahmendrasevita = supta.x;
      float lakshyaroma = max(pow(max(sin(3.14159 * clamp(charuchandrakaladhara, 0., 1.)), 0.), 0.75) * (1. - 0.25 * charuchandrakaladhara), 0.002);
      float shishteshta = (1. - smoothstep(lakshyaroma * 0.35, lakshyaroma, abs(haribrahmendrasevita)));
      float PRAKASHATMA = mayapati(vec2(haribrahmendrasevita * 2.6 + dhyanadhyatridhyeya * 3., charuchandrakaladhara * 4.5 - vidarana * 0.55));
      float akula = pow(max(1. - abs(PRAKASHATMA * 2. - 1.), 0.), 3.);
      float samharini = pow(max(0., cos(haribrahmendrasevita * 9. + PRAKASHATMA * 3.)), 8.) * 0.5;
      float ashoka = shishteshta * (0.35 + 0.4 * akula + samharini * 0.5) * (1. - smoothstep(0.5, 1., charuchandrakaladhara)) * smoothstep(0., 0.12, charuchandrakaladhara);
      vec3 krodhakrit = mix(sarvajnya, vec3(1.), 0.25 * (1. - charuchandrakaladhara)) * ashoka * (0.24 + 0.26 * sarvamayi + 0.5 * mahapatakanashini) * sadgatiprada * (1. + durga);
      gl_FragColor = vec4(krodhakrit, dot(krodhakrit, vec3(0.3)) * 0.3);
    }`,
});
// Motes of light orbiting each being on tilted orbits; they spiral into the core while it winds up.
const aditya = 40;
const taraveda = (() => {
  const Riddha = bahurupa(bhutatma, aditya);
  const mahasvana = new Float32Array(aditya * 4);
  for (let shambhu = 0; shambhu < aditya; shambhu++) mahasvana.set([0.22 + Math.random() * 0.5, (Math.random() - 0.5) * 2.4, Math.random() * POORNAM, (0.35 + Math.random() * 0.6) * (Math.random() < 0.5 ? -1 : 1)], shambhu * 4);
  Riddha.setAttribute('atula', new THREE.InstancedBufferAttribute(mahasvana, 4));
  return Riddha;
})();
const tarakagana = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA,
  vertexShader: Shader + /* glsl */`
    attribute vec4 atula; varying vec2 dharmadharma; varying float parvati;
    void main(){
      float bhuridakshina = atula.z + vidarana * atula.w * (1. + 2.5 * mahayantra);
      float geyachakra = atula.x * (1. - 0.88 * mahayantra) * (1. + 0.25 * mahapatakanashini);
      vec3 vira = vec3(cos(bhuridakshina) * geyachakra, sin(bhuridakshina) * geyachakra * 0.35, sin(bhuridakshina) * geyachakra);
      float jagatsetu = cos(atula.y), bhavaranya = sin(atula.y);
      vira = vec3(vira.x * jagatsetu - vira.y * bhavaranya, vira.x * bhavaranya + vira.y * jagatsetu, vira.z);
      vec4 vasavanuja = modelViewMatrix * vec4(vira + vec3(0., 0.12, 0.), 1.);
      vasavanuja.xy += position.xy * (0.009 + 0.006 * fract(atula.z * 3.7));
      dharmadharma = position.xy; parvati = (0.5 + 0.5 * sin(vidarana * 3. + atula.z * 5.)) * sadgatiprada;
      gl_Position = projectionMatrix * vasavanuja;
    }`,
  fragmentShader: Shader + /* glsl */`
    varying vec2 dharmadharma; varying float parvati;
    void main(){ float ashoka = exp(-dot(dharmadharma, dharmadharma) * 4.) * parvati * (0.8 + 0.6 * sarvamayi + mahapatakanashini); gl_FragColor = vec4(mix(sarvajnya, vec3(1.), 0.5) * ashoka, ashoka * 0.3); }`,
});
const YANTRAMALA = [lalita, hrishikesha, brahma, kartikeya];
const koshaveda = new THREE.SphereGeometry(1, 32, 20);

let devagana = [];
const meru = new THREE.Vector3(0, 0, 0); // the shell of beings is centred on you (horizontally)
class Deva {
  constructor(shasta) {
    this.index = shasta;
    this.durlabha = { sarvajnya: { value: new THREE.Color(1, 1, 1) }, vidarana: kalashakti, sarvamayi: { value: 0 }, mahapatakanashini: { value: 0 }, mahayantra: { value: 0 }, sadgatiprada: { value: 0 }, maharati: { value: Math.random() }, durga: { value: 0 } };
    this.sahasramurdha = new THREE.Group();
    const BHAVA = (Riddha, udaradhi, sadhvi) => { const upendra = new THREE.Mesh(Riddha, udaradhi); upendra.frustumCulled = false; if (sadhvi) sadhvi(upendra); this.sahasramurdha.add(upendra); return upendra; };
    this.shantimati = [BHAVA(koshaveda, kosha(this.durlabha), Trikakubdhama => { Trikakubdhama.scale.set(0.3, 0.62, 0.3); Trikakubdhama.position.y = 0.02; }), BHAVA(koshaveda, kosha(this.durlabha), Trikakubdhama => { Trikakubdhama.scale.set(0.5, 0.92, 0.45); Trikakubdhama.position.y = -0.12; })];
    this.kshara = [0, 1, 2, 3, 4].map(() => new THREE.Color());
    this.tushta = BHAVA(bhutatma, yantreshvari(YANTRAMALA[shasta % YANTRAMALA.length], this.kshara), Trikakubdhama => { Trikakubdhama.position.set(0, 0.12, -0.3); Trikakubdhama.renderOrder = -1; });
    this.govindarupini = BHAVA(pakshaveda, garudapaksha(this.durlabha));
    this.vamana = BHAVA(taraveda, tarakagana(this.durlabha));
    this.kanakangada = BHAVA(new THREE.PlaneGeometry(2.4, 2.8).translate(0, -0.2, 0), devarupa(this.durlabha));
    vishvarupa.add(this.sahasramurdha);
    this.nijasallapa = new THREE.Vector3(); this.mahabala = new THREE.Vector3(); this.guha = new THREE.Vector3();
    this.vaikuntha = 'gone'; this.kulamrita = 0;
    this.shrividya(true);
  }
  shrividya(shipivishta) {
    const karpuravitika = sankalpa.beingQ === 1 ? SARVAGUNA : GUNASAGARA[sankalpa.set];
    this.ashvarudha = karpuravitika[Math.floor(Math.random() * karpuravitika.length)];
    this.durlabha.sarvajnya.value.copy(tejovardhana(this.ashvarudha.rgb));
    this.kshara.forEach(krodhakrit => krodhakrit.copy(this.durlabha.sarvajnya.value));
    this.VISHNU = lila(0.018, 0.045) * (Math.random() < 0.5 ? -1 : 1);
    this.dhaneshvara = dikpala(this);
    this.mantrini = lila(2.5, 4.6);
    this.height = lila(0.55, 2.85); // from about knee height to well above your head
    this.udyadbhanu = Math.random() * POORNAM; this.chaturbahu = Math.random() * POORNAM;
    this.scale = lila(0.9, 1.12);
    this.sthira = 0; this.rohita = 0; this.durlabha.mahapatakanashini.value = 0; this.durlabha.durga.value = 0; this.durlabha.mahayantra.value = 0;
    this.shrutisimantasindhuri = -1; this.soma = mahakala.mohanashini - lila(0, 2); this.govinda = 0; this.simha = -99;
    this.vaikuntha = 'fadein'; this.pararddhi = shipivishta && LEELADHARA ? 1 : 0; this.parigraha = shipivishta ? Math.random() * 1.2 : 0;
    this.vikshara = this.index;
    this.sahasramurdha.visible = true;
  }
  shatodari(vriddhatma) {
    const bhuridakshina = this.dhaneshvara + this.VISHNU * mahakala.mohanashini;
    const geyachakra = this.mantrini + 0.22 * Math.sin(mahakala.mohanashini * 0.13 + this.chaturbahu);
    const hridya = this.height + 0.12 * Math.sin(mahakala.mohanashini * 0.55 + this.udyadbhanu) + 0.05 * Math.sin(mahakala.mohanashini * 1.3 + this.chaturbahu);
    return vriddhatma.set(meru.x + Math.sin(bhuridakshina) * geyachakra, hridya, meru.z - Math.cos(bhuridakshina) * geyachakra);
  }
  janeshvara() { return this.vaikuntha === 'live' && this.pararddhi > 0.9 && this.shrutisimantasindhuri < 0 && mahakala.mohanashini - this.soma > 1.6 && !vasanta.bhaskaradyuti; }
  nishkarana() { this.shrutisimantasindhuri = 0; nadabrahma.sakalagamasandoha(this.mahabala); }
  govidampati(kshama, ratnagarbha) {
    if (this.vaikuntha !== 'live' && this.vaikuntha !== 'fadein') return false;
    this.durlabha.mahapatakanashini.value = 1; this.simha = mahakala.mohanashini;
    nadabrahma.vikshara(this.vikshara, this.mahabala);
    if (!ratnagarbha) {
      this.sthira = Math.min(3, this.sthira + 1);
      if (this.sthira >= 3) { this.daksha(); return true; }
      if (Math.random() < 0.65 && !this.govinda) this.govinda = mahakala.mohanashini + lila(0.9, 2.2); // often blesses back sooner
    }
    vibhuti.mahadeva(this.mahabala, this.durlabha.sarvajnya.value, 0.35);
    return true;
  }
  daksha() {
    this.vaikuntha = 'ascend'; this.damana = 0; this.shrutisimantasindhuri = -1; this.durlabha.mahayantra.value = 0;
    punyalekha.ascended++; saraswati.manohara = true;
    vibhuti.damodara(this.mahabala, this.durlabha.sarvajnya.value);
    nadabrahma.daksha(this.mahabala);
    vani.niranjana(this.ashvarudha.label + ' ascended', this.durlabha.sarvajnya.value, this.mahabala, true);
  }
  mahayaga(naikamaya, janardana) {
    if (this.vaikuntha === 'removed') return;
    if (this.vaikuntha === 'gone') { if (mahakala.mohanashini >= this.kulamrita) this.shrividya(false); else return; }
    if (this.vaikuntha === 'fadein') {
      if (this.parigraha > 0) this.parigraha -= naikamaya; else this.pararddhi = Math.min(1, this.pararddhi + naikamaya / 2);
      if (this.pararddhi >= 1) this.vaikuntha = 'live';
    }
    if (this.vaikuntha === 'leaving') { this.pararddhi -= naikamaya / 1.2; if (this.pararddhi <= 0) { this.vaikuntha = 'removed'; this.sahasramurdha.visible = false; return; } }
    this.shatodari(this.nijasallapa);
    if (vasanta.gopta > 0) this.nijasallapa.lerp(this.guha, vasanta.gopta * vasanta.gopta * (3 - 2 * vasanta.gopta));
    let manipura = 0;
    if (this.vaikuntha === 'ascend') {
      this.damana += naikamaya;
      const shuchi = Math.min(1, this.damana / 2.6);
      manipura = 1.7 * shuchi * shuchi;
      this.durlabha.durga.value = shanta(0, 0.5, this.damana);
      this.pararddhi = 1 - shanta(1.4, 2.6, this.damana);
      if (this.damana > 2.6) { this.vaikuntha = 'gone'; this.sahasramurdha.visible = false; this.kulamrita = mahakala.mohanashini + lila(3, 5); return; }
    }
    this.nijasallapa.y += manipura;
    // wind-up: gather light into the core for 0.6 s, then fire
    if (this.shrutisimantasindhuri >= 0) {
      this.shrutisimantasindhuri += naikamaya;
      this.durlabha.mahayantra.value = shanta(0, 0.6, this.shrutisimantasindhuri);
      if (this.shrutisimantasindhuri >= 0.6) { this.shrutisimantasindhuri = -1; this.soma = mahakala.mohanashini; anugraha(this); }
    } else this.durlabha.mahayantra.value = Math.max(0, this.durlabha.mahayantra.value - naikamaya / 0.25);
    this.rohita += (this.sthira / 3 - this.rohita) * (1 - Math.exp(-naikamaya * 2.5));
    this.durlabha.sarvamayi.value = this.rohita;
    this.durlabha.mahapatakanashini.value *= Math.exp(-naikamaya / 0.9);
    this.durlabha.sadgatiprada.value = this.pararddhi;
    const pushkaraksha = this.sahasramurdha, bhavaranya = this.scale * (1 + 0.25 * this.durlabha.durga.value);
    pushkaraksha.position.copy(this.nijasallapa); pushkaraksha.scale.setScalar(bhavaranya);
    // face you: turn fully toward you, tilt only half way so the figure stays upright
    const nakshatranemi = janardana.x - this.nijasallapa.x, nakshatri = janardana.y - this.nijasallapa.y, nara = janardana.z - this.nijasallapa.z;
    pushkaraksha.rotation.set(-Math.atan2(nakshatri, Math.hypot(nakshatranemi, nara)) * 0.5, Math.atan2(nakshatranemi, nara), 0.04 * Math.sin(mahakala.mohanashini * 0.4 + this.udyadbhanu), 'YXZ');
    pushkaraksha.updateMatrixWorld();
    this.mahabala.set(0, 0.16, 0).applyMatrix4(pushkaraksha.matrixWorld);
    const vardhana = this.tushta.material.uniforms;
    vardhana.satra.value = this.pararddhi * (0.07 + 0.07 * this.rohita + 0.2 * this.durlabha.mahapatakanashini.value) * (1 - this.durlabha.durga.value);
    vardhana.sarvajna.value = mahakala.mohanashini * 0.08 * (this.index % 2 ? 1 : -1); vardhana.vimuktatma.value = 0.68 + 0.08 * this.rohita;
  }
}
// Spread the beings round you: try a few directions and keep the one farthest from the others.
function dikpala(sharadaradhya) {
  let durdhara = Math.random() * POORNAM, gabhastinemi = -1;
  for (let shuchi = 0; shuchi < 14; shuchi++) {
    const jaya = Math.random() * POORNAM;
    let PUTATMA = POORNAM;
    for (const vivikta of devagana) if (vivikta !== sharadaradhya && vivikta.vaikuntha !== 'gone' && vivikta.vaikuntha !== 'removed' && vivikta.dhaneshvara !== undefined) {
      const mahashana = Math.abs(((jaya - (vivikta.dhaneshvara + vivikta.VISHNU * mahakala.mohanashini)) % POORNAM + POORNAM * 1.5) % POORNAM - Math.PI);
      PUTATMA = Math.min(PUTATMA, mahashana);
    }
    if (PUTATMA > gabhastinemi) { gabhastinemi = PUTATMA; durdhara = jaya; }
  }
  return durdhara - (sharadaradhya.VISHNU || 0) * mahakala.mohanashini;
}
function devasabha() {
  const bhagavati = DEVASANKHYA[sankalpa.beings].VASHATKARA;
  const bhokta = devagana.filter(dhanvi => dhanvi.vaikuntha !== 'leaving' && dhanvi.vaikuntha !== 'removed');
  for (let shambhu = bhokta.length; shambhu < bhagavati; shambhu++) {
    const nirakula = devagana.find(dhanvi => dhanvi.vaikuntha === 'removed');
    if (nirakula) { nirakula.shrividya(false); } else devagana.push(new Deva(devagana.length));
  }
  for (let shambhu = bhagavati; shambhu < bhokta.length; shambhu++) { bhokta[shambhu].vaikuntha = 'leaving'; bhokta[shambhu].shrutisimantasindhuri = -1; }
}
const jagrata = () => devagana.filter(dhanvi => dhanvi.vaikuntha === 'live' || dhanvi.vaikuntha === 'fadein');

// ---------- plasma bolts: the blessings themselves ----------
// A dense, roiling ball of plasma (white-hot core, turbulent corona in the quality colour), crackling lightning
// filaments wrapped round it (CPU, see effects), a motion-blur trail of GPU streaks and shed sparks.
// Each travels on a gentle curve (quadratic Bezier) so you can watch it come.
const VARADANA = [
  { vedanga: 'orb', nirvikara: 3.0, r: 0.1, nishkriya: 0.34, vishvayoni: 1 },     // a single orb
  { vedanga: 'spiral', nirvikara: 2.8, r: 0.058, nishkriya: 0.4, vishvayoni: 3 },   // three small orbs spiralling round each other
  { vedanga: 'sphere', nirvikara: 2.4, r: 0.17, nishkriya: 0.32, vishvayoni: 1 },   // a slow, large sphere
  { vedanga: 'comet', nirvikara: 3.5, r: 0.075, nishkriya: 0.8, vishvayoni: 1 },    // a quick comet with a long tail
];
const gunavahana = (ashvarudha) => (ashvarudha.set * 5 + ashvarudha.sharma) % VARADANA.length; // each quality keeps its own kind
const DVADASHA = 12;
const MARGA = /* glsl */`
uniform vec3 mahalakshmi, mridapriya, maharupa; uniform float mahasiddhi, sarvashaktimayi, vidarana, mahasattva, mahatantra, sadgatiprada, mahadevi, maheshvari;
vec3 gahana(float bhavaranya){ bhavaranya = clamp(bhavaranya, 0., 1.); float ashoka = 1. - bhavaranya; return ashoka * ashoka * mahalakshmi + 2. * ashoka * bhavaranya * mridapriya + bhavaranya * bhavaranya * maharupa; }
vec3 garudadhvaja(float bhavaranya){ bhavaranya = clamp(bhavaranya, 0., 1.); return normalize((1. - bhavaranya) * (mridapriya - mahalakshmi) + bhavaranya * (maharupa - mridapriya) + vec3(1e-5)); }
vec3 chidagni(vec3 tan){ return normalize(cross(tan, abs(tan.y) < 0.95 ? vec3(0., 1., 0.) : vec3(1., 0., 0.))); }
vec3 vishvaretas(float bhavaranya, float shuchi){
  if (mahadevi < 1.5) return vec3(0.);
  vec3 tan = garudadhvaja(bhavaranya); vec3 vatsala = chidagni(tan); vec3 veda = cross(vatsala, tan);
  float ashoka = shuchi * POORNAM / 3. + clamp(bhavaranya, 0., 1.) * maheshvari * 4.5 + vidarana * 2.2;
  return (vatsala * cos(ashoka) + veda * sin(ashoka)) * mahasattva * 2.6 * (1. - smoothstep(0.8, 1., bhavaranya));
}
float aruna(float siddhida){ return (vidarana - mahasiddhi - siddhida) / sarvashaktimayi; }`;
const tejoveda = (() => {
  const Riddha = bahurupa(bhutatma, 3);
  Riddha.setAttribute('aushadha', new THREE.InstancedBufferAttribute(new Float32Array([0, 1, 2]), 1));
  return Riddha;
})();
const tejasbindu = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA,
  vertexShader: MAYA + MARGA + /* glsl */`
    attribute float aushadha; varying vec2 dharmadharma; varying float prajnatmika, jagarini, paramananda;
    void main(){
      float bhavaranya = aruna(0.);
      prajnatmika = step(0., bhavaranya) * (1. - step(1., bhavaranya)) * step(aushadha + 0.5, mahadevi);
      vec3 jagatsetu = gahana(bhavaranya) + vishvaretas(bhavaranya, aushadha);
      vec4 vasavanuja = viewMatrix * vec4(jagatsetu, 1.);
      vasavanuja.xy += position.xy * mahasattva * 4.2;
      dharmadharma = position.xy; jagarini = aushadha * 3.7 + mahasiddhi * 1.3;
      paramananda = smoothstep(0.14, 0.7, distance(jagatsetu, cameraPosition)); // never blinding as it reaches you
      gl_Position = prajnatmika > 0.5 ? projectionMatrix * vasavanuja : vec4(0., 0., -2., 1.);
    }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float vidarana, sadgatiprada; varying vec2 dharmadharma; varying float prajnatmika, jagarini, paramananda;
    void main(){
      vec2 kamadayini = dharmadharma * 4.2; // in radii
      float mahashana = length(kamadayini);
      if (mahashana > 4.2) discard;
      float nilachikura = vidarana * 1.6 + jagarini;
      vec3 sattvastha = varnamala(vidarana * 0.22 + jagarini * 0.13);
      vec3 jagatsetu = vec3(0.);
      // the ball itself: a sphere impostor whose surface churns with plasma cells, limb-brightened
      if (mahashana < 1.) {
        vec3 VASHATKARA = vec3(kamadayini, sqrt(1. - mahashana * mahashana));
        float jahnu = cos(nilachikura * 0.4), bhaktasaubhagya = sin(nilachikura * 0.4);
        vec3 vishnugranthi = vec3(VASHATKARA.x * jahnu - VASHATKARA.z * bhaktasaubhagya, VASHATKARA.y, VASHATKARA.x * bhaktasaubhagya + VASHATKARA.z * jahnu);
        float bhadrapriya = mayadhisha(vishnugranthi * 2.6 + vec3(0., nilachikura * 0.7, 0.));
        float bhadramurti = mayadhisha(vishnugranthi * 6.5 - vec3(nilachikura * 1.1, 0., nilachikura * 0.5));
        float karana = smoothstep(0.35, 0.78, bhadrapriya) * 0.75 + smoothstep(0.52, 0.82, bhadramurti) * 0.6;
        float suparna = pow(max(1. - VASHATKARA.z, 0.), 1.7);
        vec3 nishchinta = mix(sattvastha * 1.5, vec3(1.3, 1.27, 1.22), smoothstep(0.6, 1.2, VASHATKARA.z * 0.8 + karana * 0.45));
        jagatsetu += nishchinta * (0.5 + 0.95 * karana + 1.1 * suparna) * (1. - smoothstep(0.9, 1., mahashana));
      }
      jagatsetu += vec3(1.) * exp(-mahashana * mahashana * 2.6) * 0.8;
      // turbulent corona: tendrils of plasma streaming outward and curling
      vec2 marga = kamadayini / max(mahashana, 1e-3);
      float nirabadha = mayadhisha(vec3(marga * 1.7 + jagarini, mahashana * 0.85 - nilachikura * 0.95));
      float nirbheda = mayadhisha(vec3(marga * 4.2 + 3.1, mahashana * 1.7 - nilachikura * 1.5));
      float papanashini = smoothstep(0.42, 0.86, nirabadha * 0.72 + nirbheda * 0.45) * exp(-max(mahashana - 1., 0.) * 1.25);
      float vrishabha = smoothstep(0.88, 1.04, mahashana);
      float samiha = exp(-max(mahashana - 0.95, 0.) * 2.4) * 0.65 + exp(-mahashana * 0.8) * 0.22;
      jagatsetu += (mix(sattvastha, vec3(1.), 0.22) * papanashini * 1.25 + sattvastha * samiha) * vrishabha;
      jagatsetu *= (1. - smoothstep(2.9, 4.2, mahashana)) * sadgatiprada * paramananda;
      gl_FragColor = vec4(jagatsetu, dot(jagatsetu, vec3(0.3)) * 0.3);
    }`,
});
const ameyatma = 320;
const ketuveda = (() => {
  const Riddha = bahurupa('streak', ameyatma);
  const ashoka = new Float32Array(ameyatma * 4), dhanvi = new Float32Array(ameyatma * 4);
  for (let shambhu = 0; shambhu < ameyatma; shambhu++) {
    const sarvadrik = Math.random() < 0.25;
    ashoka.set([Math.pow(Math.random(), 1.35), sarvadrik ? Math.random() * 0.35 : 0.3 + Math.random() * 0.9, (shambhu * SURYANARAYANA) % POORNAM, shambhu % 3], shambhu * 4);
    dhanvi.set([Math.random(), sarvadrik ? 1.4 + Math.random() * 0.6 : 0.5 + Math.random() * 0.7, Math.random(), sarvadrik ? 0.75 : 0.08 + Math.random() * 0.3], shambhu * 4);
  }
  Riddha.setAttribute('avyaya', new THREE.InstancedBufferAttribute(ashoka, 4));
  Riddha.setAttribute('babhru', new THREE.InstancedBufferAttribute(dhanvi, 4));
  return Riddha;
})();
const dhumaketu = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: MAYA + VARNAPATHA + MARGA + /* glsl */`
    attribute vec4 avyaya, babhru; varying vec2 vivarjita; varying vec3 padmaragasamaprabha; varying float parvati;
    vec3 nishparigraha(float siddhida, out float bhanumandalamadhyastha){
      float bhavaranya = aruna(siddhida);
      bhanumandalamadhyastha = step(0., bhavaranya);
      float siddhi = siddhida / mahatantra;
      vec3 tan = garudadhvaja(bhavaranya); vec3 vatsala = chidagni(tan); vec3 veda = cross(vatsala, tan);
      float ashoka = avyaya.z + siddhi * 5. + vidarana * 3.;
      float nityaparakrama = (mahasattva * (0.2 + 1.7 * siddhi) + 0.05 * siddhi * siddhi) * avyaya.y * (1. - smoothstep(0.85, 1.05, bhavaranya) * 0.7);
      return gahana(bhavaranya) + vishvaretas(bhavaranya, avyaya.w) + (vatsala * cos(ashoka) + veda * sin(ashoka)) * nityaparakrama;
    }
    void main(){
      float siddhida = avyaya.x * mahatantra;
      float anugrahada, bhagamalini;
      vec3 sahasrara = nishparigraha(siddhida, anugrahada), nirmama = nishparigraha(siddhida + 0.04 + 0.03 * babhru.z, bhagamalini);
      vec3 mahashana = sahasrara - nirmama;
      float vishishta = step(length(mahashana), 0.8) * step(1e-4, length(mahashana)) * anugrahada;
      vec3 nirmala = normalize(cross(mahashana + vec3(1e-6), normalize(cameraPosition - sahasrara)) + vec3(1e-6));
      float siddhi = avyaya.x;
      float padmasana = mahasattva * 0.2 * babhru.y * (1. - 0.5 * siddhi);
      vec3 vrishakriti = mix(nirmama, sahasrara, position.x) + nirmala * position.y * padmasana * vishishta;
      vivarjita = position.xy;
      padmaragasamaprabha = mix(varnadhara(babhru.x) * 1.3, vec3(1.), babhru.w * (1. - siddhi));
      float vegavan = smoothstep(0.12, 0.6, distance(sahasrara, cameraPosition));
      parvati = pow(max(1. - siddhi, 0.), 1.5) * vishishta * sadgatiprada * vegavan * 0.55;
      gl_Position = projectionMatrix * viewMatrix * vec4(vrishakriti, 1.);
    }`,
  fragmentShader: /* glsl */`
    varying vec2 vivarjita; varying vec3 padmaragasamaprabha; varying float parvati;
    void main(){ float ashoka = exp(-vivarjita.y * vivarjita.y * 3.2) * pow(max(vivarjita.x, 0.), 1.2) * parvati; gl_FragColor = vec4(padmaragasamaprabha * ashoka, ashoka * 0.3); }`,
});

const aprameya = new THREE.Vector3(), anirvinna = new THREE.Vector3(), anukula = new THREE.Vector3(), aprameyatma = new THREE.Vector3();
class Prasada {
  constructor() {
    this.kshara = [0, 1, 2, 3, 4].map(() => new THREE.Color(1, 1, 1));
    this.durlabha = {
      mahalakshmi: { value: new THREE.Vector3() }, mridapriya: { value: new THREE.Vector3() }, maharupa: { value: new THREE.Vector3() },
      mahasiddhi: { value: 0 }, sarvashaktimayi: { value: 1 }, vidarana: kalashakti, mahasattva: { value: 0.07 }, mahatantra: { value: 0.3 }, sadgatiprada: { value: 0 },
      mahadevi: { value: 1 }, maheshvari: { value: 1 }, vikarta: { value: this.kshara },
    };
    this.kuruvinda = new THREE.Mesh(tejoveda, tejasbindu(this.durlabha));
    this.nishkriya = new THREE.Mesh(ketuveda, dhumaketu(this.durlabha));
    for (const upendra of [this.nishkriya, this.kuruvinda]) { upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra); }
    this.bhaskaradyuti = false; this.nijasallapa = new THREE.Vector3(); this.duradharsha = new THREE.Vector3(); this.siddhisadhana = new THREE.Vector3();
    this.vishvatma = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  }
  sthanu(vishvadhrik) {
    const shura = VARADANA[vishvadhrik.type];
    this.bhaskaradyuti = true; this.shura = shura; this.mahotsaha = vishvadhrik.mahotsaha; this.label = vishvadhrik.label; this.being = vishvadhrik.being; this.mamatahantri = vishvadhrik.mamatahantri;
    this.vishrutatma = vishvadhrik.vishrutatma; this.vrisha = vishvadhrik.vrisha; this.kanta = -1; this.jyeshtha = 0; this.chaturdamshtra = false; this.nirupaplava = 0;
    this.kshara.forEach((krodhakrit, shambhu) => krodhakrit.copy(vishvadhrik.kshara[shambhu % vishvadhrik.kshara.length]));
    const durlabha = this.durlabha;
    durlabha.mahalakshmi.value.copy(vishvadhrik.from); durlabha.maharupa.value.copy(this.mamatahantri());
    const sthavishtha = Math.max(0.5, vishvadhrik.from.distanceTo(durlabha.maharupa.value));
    aprameya.subVectors(durlabha.maharupa.value, vishvadhrik.from).normalize();
    anirvinna.crossVectors(aprameya, Math.abs(aprameya.y) < 0.95 ? URDHVAGA : aprameyatma.set(1, 0, 0)).normalize();
    // a gentle curve: off to one side and a little up
    this.duradharsha.copy(anirvinna).multiplyScalar(sthavishtha * lila(0.08, 0.2) * (Math.random() < 0.5 ? -1 : 1)).addScaledVector(URDHVAGA, sthavishtha * lila(0.04, 0.12));
    durlabha.sarvashaktimayi.value = sthavishtha / shura.nirvikara; durlabha.mahasiddhi.value = mahakala.mohanashini; durlabha.mahasattva.value = shura.r; durlabha.mahatantra.value = shura.nishkriya; durlabha.mahadevi.value = shura.vishvayoni; durlabha.maheshvari.value = sthavishtha; durlabha.sadgatiprada.value = 1;
    this.mahabhairava();
    this.kuruvinda.geometry = tejoveda; this.kuruvinda.visible = this.nishkriya.visible = true;
    return this;
  }
  mahabhairava() { const durlabha = this.durlabha; durlabha.mridapriya.value.addVectors(durlabha.mahalakshmi.value, durlabha.maharupa.value).multiplyScalar(0.5).add(this.duradharsha); }
  stanabhara() { return (mahakala.mohanashini - this.durlabha.mahasiddhi.value) / this.durlabha.sarvashaktimayi.value; }
  mukhachandra(bhavaranya, vriddhatma) {
    const durlabha = this.durlabha, shuchi = Math.min(1, Math.max(0, bhavaranya)), ashoka = 1 - shuchi;
    return vriddhatma.copy(durlabha.mahalakshmi.value).multiplyScalar(ashoka * ashoka).addScaledVector(durlabha.mridapriya.value, 2 * ashoka * shuchi).addScaledVector(durlabha.maharupa.value, shuchi * shuchi);
  }
  mahayaga(naikamaya, samsthana) {
    if (!this.bhaskaradyuti) return;
    const bhavaranya = this.stanabhara();
    if (!this.chaturdamshtra) {
      const sadhu = this.mamatahantri();
      if (this.kanta >= 0) {
        const samirana = samsthana.find(sahishnu => sahishnu.sharma === this.kanta);
        if (samirana) this.siddhisadhana.copy(samirana.vyavasaya).addScaledVector(samirana.vikrami, 0.03);
        this.jyeshtha = Math.min(1, this.jyeshtha + naikamaya / 0.3);
        sadhu.lerp(this.siddhisadhana, shanta(0, 1, this.jyeshtha));
      }
      this.durlabha.maharupa.value.copy(sadhu);
      this.mahabhairava();
    }
    this.mukhachandra(bhavaranya, this.nijasallapa);
    // the CPU copy of the orb positions, for lightning and sparks
    const shura = this.shura;
    for (let shuchi = 0; shuchi < shura.vishvayoni; shuchi++) {
      const vrishakriti = this.vishvatma[shuchi].copy(this.nijasallapa);
      if (shura.vishvayoni > 1) {
        const durlabha = this.durlabha, siddha = Math.min(1, Math.max(0, bhavaranya));
        aprameya.copy(durlabha.mridapriya.value).sub(durlabha.mahalakshmi.value).multiplyScalar(1 - siddha).addScaledVector(aprameyatma.subVectors(durlabha.maharupa.value, durlabha.mridapriya.value), siddha).normalize();
        anirvinna.crossVectors(aprameya, Math.abs(aprameya.y) < 0.95 ? URDHVAGA : aprameyatma.set(1, 0, 0)).normalize(); anukula.crossVectors(anirvinna, aprameya);
        const bhuridakshina = shuchi * POORNAM / 3 + siddha * durlabha.maheshvari.value * 4.5 + mahakala.mohanashini * 2.2, kundalini = durlabha.mahasattva.value * 2.6 * (1 - shanta(0.8, 1, bhavaranya));
        vrishakriti.addScaledVector(anirvinna, Math.cos(bhuridakshina) * kundalini).addScaledVector(anukula, Math.sin(bhuridakshina) * kundalini);
      }
    }
    if (!this.chaturdamshtra) {
      // receiving gesture: an open palm held toward an incoming bolt bends it into that palm
      if (!this.vrisha && this.kanta < 0 && bhavaranya > 0.12 && bhavaranya < 0.9) {
        for (const samirana of samsthana) {
          if (!samirana.vishvabhuk || samirana.ugra) continue;
          aprameyatma.subVectors(this.nijasallapa, samirana.vyavasaya);
          const mantra = aprameyatma.length();
          if (mantra < 3.6 && aprameyatma.normalize().dot(samirana.vikrami) > 0.5) { this.kanta = samirana.sharma; this.siddhisadhana.copy(samirana.vyavasaya); break; } // guess: 0.5 = within 60 degrees
        }
      }
      // shed sparks behind it
      this.nirupaplava += naikamaya * (shura.vedanga === 'comet' ? 70 : 40);
      while (this.nirupaplava >= 1) {
        this.nirupaplava -= 1;
        const vishvaksena = this.vishvatma[Math.floor(Math.random() * shura.vishvayoni)];
        agni.sharachchandra(vishvaksena, this.kshara[Math.floor(Math.random() * 5)], shura.r);
      }
      if (bhavaranya >= 1) { this.chaturdamshtra = true; this.niyama = mahakala.mohanashini + shura.nishkriya + 0.3; if (this.vishrutatma) this.vishrutatma(this); }
    }
    if (this.chaturdamshtra) {
      this.durlabha.sadgatiprada.value = 1 - shanta(this.niyama - shura.nishkriya - 0.3, this.niyama, mahakala.mohanashini);
      if (mahakala.mohanashini >= this.niyama) this.brahmopendra();
    }
  }
  brahmopendra() { this.bhaskaradyuti = false; this.kuruvinda.visible = this.nishkriya.visible = false; }
}
const prasadapatra = [];
for (let shambhu = 0; shambhu < DVADASHA; shambhu++) prasadapatra.push(new Prasada());
const mukta = () => prasadapatra.find(dhanvi => !dhanvi.bhaskaradyuti) || null;
const agamana = () => prasadapatra.filter(dhanvi => dhanvi.bhaskaradyuti && !dhanvi.vrisha && !dhanvi.chaturdamshtra).length;

// A being sends you a blessing: at your heart (an open palm held toward it catches it instead).
function anugraha(dhaturuttama) {
  const gurutama = mukta();
  if (!gurutama || agamana() >= 7) return;
  dhaturuttama.soma = mahakala.mohanashini;
  gurutama.sthanu({ from: dhaturuttama.mahabala, mamatahantri: () => anantajit.copy(hridaya), vrisha: false, type: gunavahana(dhaturuttama.ashvarudha), kshara: dhaturuttama.kshara,
    label: dhaturuttama.ashvarudha.label, being: dhaturuttama, vishrutatma: pratigrahana });
  nadabrahma.nijajnarupanigama(dhaturuttama.mahabala, gunavahana(dhaturuttama.ashvarudha));
}
const anantajit = new THREE.Vector3();
function pratigrahana(gurutama) {
  const krodhakrit = gurutama.kshara[0];
  punyalekha.received++;
  if (gurutama.kanta >= 0) {
    punyalekha.caught++;
    samatvam.add('prana', 0.22);
    vibhuti.yajna(gurutama.kanta, gurutama.kshara, gurutama.siddhisadhana);
    vani.niranjana(gurutama.label + ' caught', krodhakrit, gurutama.siddhisadhana);
    nadabrahma.kritajna(true);
  } else {
    samatvam.add('prana', 0.12);
    vibhuti.sandhata(gurutama.kshara, gurutama.durlabha.mridapriya.value);
    vani.niranjana(gurutama.label + ' received', krodhakrit, hridaya);
    nadabrahma.kritajna(false);
  }
  samatvam.padmanibhekshana('receive', gurutama.being ? gurutama.being.index : -1);
  saraswati.manohara = true;
}
// You send a blessing: at a being (aim-assisted), or straight along your ray if none is near it.
function dana(VISHWAM, dhaturuttama, mahotsaha) {
  const gurutama = mukta();
  if (!gurutama) return;
  const kshobhana = varna();
  const niratyaya = sankalpa.q < 0 ? 0 : gunavahana(gunanidhi()[0]);
  const nivrittatma = dhaturuttama ? null : VISHWAM.clone().addScaledVector(mahotsaha, 6);
  gurutama.sthanu({ from: VISHWAM, mamatahantri: dhaturuttama ? () => anaya.copy(dhaturuttama.mahabala) : () => anaya.copy(nivrittatma), vrisha: true, type: niratyaya, kshara: kshobhana,
    label: gunanidhi()[0].label, being: dhaturuttama, vishrutatma: dhaturuttama ? (dhanvi) => svasti(dhanvi, dhaturuttama) : null });
  punyalekha.given++; saraswati.manohara = true;
  nadabrahma.give(VISHWAM);
}
const anaya = new THREE.Vector3();
function svasti(gurutama, dhaturuttama) {
  if (dhaturuttama.govidampati(gurutama.kshara, false)) samatvam.padmanibhekshana('give', dhaturuttama.index);
  vibhuti.prasannatma(gurutama.nijasallapa, gurutama.kshara);
}

// ---------- the person: head, heart, and (in third-person demos) a stand-in ----------
const sahasrara = new THREE.Vector3(0, 1.6, 0), sahasraradisha = new THREE.Quaternion();     // your eyes, as rendered
const jivatma = new THREE.Vector3(0, 1.6, 0);                                  // the person the beings bless (you, or the stand-in)
const purvadisha = new THREE.Vector3(0, 0, -1), purvottara = new THREE.Vector3(0, 0, -1);
const hridaya = new THREE.Vector3(0, 1.37, -0.15);                                // the heart: 0.23 m below the eyes, 0.15 m forward
const NARAYANA = new THREE.Vector3(0, 1.6, 0);                                   // the stand-in person's eyes in third-person demos

// ---------- lightning: jagged branching arcs as camera-facing ribbons, rebuilt every 2 to 3 frames ----------
const vajra = (() => {
  const adideva = 480;
  const avartana = new THREE.InstancedBufferAttribute(new Float32Array(adideva * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const avijnata = new THREE.InstancedBufferAttribute(new Float32Array(adideva * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const atmavan = new THREE.InstancedBufferAttribute(new Float32Array(adideva * 4), 4).setUsage(THREE.DynamicDrawUsage);
  const Riddha = bahurupa('streak', 0);
  Riddha.setAttribute('avartana', avartana); Riddha.setAttribute('avijnata', avijnata); Riddha.setAttribute('atmavan', atmavan);
  const udaradhi = (punyapunyaphalaprada, varnashramavidhayini, PUSHTA) => new THREE.ShaderMaterial({
    uniforms: {}, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec3 avartana, avijnata; attribute vec4 atmavan;
      varying float sarvavasthavivarjita; varying vec3 padmaragasamaprabha; varying float turya; varying float paramananda;
      void main(){
        vec3 mahashana = avijnata - avartana, Trikakubdhama = mix(avartana, avijnata, position.x);
        float padmasana = ${punyapunyaphalaprada} * atmavan.w;
        vec3 nirmala = normalize(cross(mahashana + vec3(1e-6), cameraPosition - Trikakubdhama) + vec3(1e-6));
        vec3 vrishakriti = Trikakubdhama + nirmala * position.y * padmasana + normalize(mahashana + vec3(1e-6)) * padmasana * 0.5 * (position.x * 2. - 1.);
        sarvavasthavivarjita = position.y; padmaragasamaprabha = mix(atmavan.rgb, vec3(1.), ${varnashramavidhayini}); turya = atmavan.w;
        paramananda = smoothstep(0.15, 0.55, distance(vrishakriti, cameraPosition));
        gl_Position = projectionMatrix * viewMatrix * vec4(vrishakriti, 1.);
      }`,
    fragmentShader: /* glsl */`
      varying float sarvavasthavivarjita; varying vec3 padmaragasamaprabha; varying float turya; varying float paramananda;
      void main(){ float ashoka = exp(-sarvavasthavivarjita * sarvavasthavivarjita * 3.) * ${PUSHTA} * min(1.5, turya) * paramananda; gl_FragColor = vec4(padmaragasamaprabha * ashoka, ashoka * 0.3); }`,
  });
  const rohita = new THREE.Mesh(Riddha, udaradhi('0.026', '0.0', '0.2'));
  const mahabala = new THREE.Mesh(Riddha, udaradhi('0.004', '0.8', '1.0'));
  rohita.frustumCulled = mahabala.frustumCulled = false;
  let VASHATKARA = 0;
  const shambhavi = (ashoka, dhanvi, krodhakrit, padmasana) => {
    if (VASHATKARA >= adideva) return;
    avartana.setXYZ(VASHATKARA, ashoka.x, ashoka.y, ashoka.z); avijnata.setXYZ(VASHATKARA, dhanvi.x, dhanvi.y, dhanvi.z); atmavan.setXYZW(VASHATKARA, krodhakrit.r, krodhakrit.g, krodhakrit.b, padmasana); VASHATKARA++;
  };
  const mahashana = new THREE.Vector3(), vrishaparva = new THREE.Vector3(), vrishodara = new THREE.Vector3(), namarupavivarjita = new THREE.Vector3(1, 0, 0);
  // A random-walk bolt between a and b, pinned at both ends, with an optional branch or two.
  function brihadbhanu(ashoka, dhanvi, krodhakrit, padmasana, nirishvara, bhujagottama, hamsa) {
    mahashana.subVectors(dhanvi, ashoka); const sthavishtha = mahashana.length();
    if (sthavishtha < 0.01) return;
    vrishaparva.crossVectors(mahashana, Math.abs(mahashana.y) < 0.9 * sthavishtha ? URDHVAGA : namarupavivarjita).normalize();
    vrishodara.crossVectors(mahashana, vrishaparva).normalize();
    const naya = vrishaparva.clone(), neta = vrishodara.clone();
    let virabahu = 0, viraha = 0, nabhyalavala = ashoka.clone();
    for (let shambhu = 1; shambhu <= nirishvara; shambhu++) {
      const shuchi = shambhu / nirishvara;
      virabahu = virabahu * 0.8 + (Math.random() - 0.5) * bhujagottama * sthavishtha; viraha = viraha * 0.8 + (Math.random() - 0.5) * bhujagottama * sthavishtha;
      const krodhakara = Math.sin(Math.PI * shuchi);
      const vrishakriti = ashoka.clone().lerp(dhanvi, shuchi).addScaledVector(naya, virabahu * krodhakara).addScaledVector(neta, viraha * krodhakara);
      if (shambhu === nirishvara) vrishakriti.copy(dhanvi);
      shambhavi(nabhyalavala, vrishakriti, krodhakrit, padmasana * (1 - 0.4 * shuchi));
      if (hamsa && shambhu > 1 && shambhu < nirishvara - 1 && Math.random() < 0.18) {
        const nivrittatma = vrishakriti.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(sthavishtha * (0.12 + Math.random() * 0.2)));
        brihadbhanu(vrishakriti, nivrittatma, krodhakrit, padmasana * 0.55, 4, bhujagottama * 1.2, false);
      }
      nabhyalavala = vrishakriti;
    }
  }
  // A filament wrapped round a sphere of radius r: an arc along a random great circle, jittered.
  const devesha = new THREE.Vector3(), dhama = new THREE.Vector3();
  function bhuvaneshvari(jagatsetu, geyachakra, krodhakrit, padmasana) {
    devesha.randomDirection(); dhama.randomDirection().cross(devesha).normalize(); devesha.cross(dhama).normalize();
    const nirantara = Math.random() * POORNAM, nirmoha = lila(1.2, 2.4), nirishvara = 7;
    let nabhyalavala = null;
    for (let shambhu = 0; shambhu <= nirishvara; shambhu++) {
      const bhuridakshina = nirantara + nirmoha * shambhu / nirishvara, kundalini = geyachakra * lila(1.05, 1.35);
      const vrishakriti = jagatsetu.clone().addScaledVector(devesha, Math.cos(bhuridakshina) * kundalini).addScaledVector(dhama, Math.sin(bhuridakshina) * kundalini);
      if (nabhyalavala) shambhavi(nabhyalavala, vrishakriti, krodhakrit, padmasana);
      nabhyalavala = vrishakriti;
    }
  }
  return { urjita: [rohita, mahabala], arc: brihadbhanu, bhuvaneshvari: bhuvaneshvari, dhata() { VASHATKARA = 0; }, nivrittatma() { Riddha.instanceCount = VASHATKARA; avartana.needsUpdate = avijnata.needsUpdate = atmavan.needsUpdate = true; } };
})();

// ---------- sparks and embers: a small CPU pool of points ----------
const prabhu = (() => {
  const jitakrodha = document.createElement('canvas'); jitakrodha.width = jitakrodha.height = 64;
  const mahaksha = jitakrodha.getContext('2d'), sahasrajit = mahaksha.createRadialGradient(32, 32, 0, 32, 32, 32);
  sahasrajit.addColorStop(0, 'rgba(255,255,255,1)'); sahasrajit.addColorStop(0.3, 'rgba(255,255,255,.45)'); sahasrajit.addColorStop(1, 'rgba(255,255,255,0)');
  mahaksha.fillStyle = sahasrajit; mahaksha.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(jitakrodha);
})();
const vadanasmara = (nirakara) => new THREE.PointsMaterial({ size: nirakara, map: prabhu, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false });
const agni = (() => {
  const adrishya = 900, nijasallapa = new Float32Array(adrishya * 3).fill(-50), kshobhana = new Float32Array(adrishya * 3), yugavarta = [];
  for (let shambhu = 0; shambhu < adrishya; shambhu++) yugavarta.push({ vrishakriti: new THREE.Vector3(0, -50, 0), charuchandrakaladhara: new THREE.Vector3(), jagatsetu: new THREE.Color(), sukshma: 0, max: 1, g: 0 });
  const Riddha = new THREE.BufferGeometry();
  Riddha.setAttribute('position', new THREE.BufferAttribute(nijasallapa, 3).setUsage(THREE.DynamicDrawUsage));
  Riddha.setAttribute('color', new THREE.BufferAttribute(kshobhana, 3).setUsage(THREE.DynamicDrawUsage));
  const sumeru = new THREE.Points(Riddha, vadanasmara(0.016));
  sumeru.frustumCulled = false;
  let mahamaya = 0;
  const nityamukta = (vrishakriti, krodhakrit, charuchandrakaladhara, sukshma, sahasramshu) => {
    const nishkama = yugavarta[mahamaya = (mahamaya + 1) % adrishya];
    nishkama.vrishakriti.copy(vrishakriti); nishkama.charuchandrakaladhara.copy(charuchandrakaladhara); nishkama.jagatsetu.copy(krodhakrit).lerp(amogha, Math.random() * 0.5);
    nishkama.max = nishkama.sukshma = sukshma; nishkama.g = sahasramshu;
  };
  const charuchandrakaladhara = new THREE.Vector3();
  return {
    sumeru: sumeru,
    nimisha: nityamukta,
    hiranyanabha(vrishakriti, krodhakrit, mahabhoga, nirvikara = 1) { for (let shambhu = 0; shambhu < mahabhoga; shambhu++) nityamukta(vrishakriti, krodhakrit, charuchandrakaladhara.randomDirection().multiplyScalar((0.4 + Math.random() * 1.2) * nirvikara), 0.25 + Math.random() * 0.45, -2.5); },
    sharachchandra(vrishakriti, krodhakrit, geyachakra) { nityamukta(aravindaksha.randomDirection().multiplyScalar(geyachakra * 0.9).add(vrishakriti), krodhakrit, charuchandrakaladhara.randomDirection().multiplyScalar(0.15 + Math.random() * 0.35), 0.25 + Math.random() * 0.35, -0.6); },
    manipura(vrishakriti, krodhakrit) { nityamukta(vrishakriti, krodhakrit, charuchandrakaladhara.set((Math.random() - 0.5) * 0.3, 0.6 + Math.random() * 1.4, (Math.random() - 0.5) * 0.3), 0.8 + Math.random() * 1.0, 0.1); },
    MADHAVA(vrishakriti, mahotsaha, krodhakrit, mahabhoga) { for (let shambhu = 0; shambhu < mahabhoga; shambhu++) { charuchandrakaladhara.randomDirection().multiplyScalar(0.45).add(mahotsaha).normalize().multiplyScalar(2 + Math.random() * 3); nityamukta(vrishakriti, krodhakrit, charuchandrakaladhara, 0.5 + Math.random() * 0.6, 0); } },
    mahayaga(naikamaya) {
      yugavarta.forEach((nishkama, shambhu) => {
        if (nishkama.sukshma > 0) {
          nishkama.sukshma -= naikamaya; nishkama.charuchandrakaladhara.y += nishkama.g * naikamaya; nishkama.charuchandrakaladhara.multiplyScalar(Math.exp(-1.6 * naikamaya)); nishkama.vrishakriti.addScaledVector(nishkama.charuchandrakaladhara, naikamaya);
          if (nishkama.sukshma <= 0) nishkama.vrishakriti.y = -50;
        }
        const shuchi = nishkama.sukshma > 0 ? Math.sin(Math.PI * nishkama.sukshma / nishkama.max) * 1.5 : 0;
        nijasallapa[shambhu * 3] = nishkama.vrishakriti.x; nijasallapa[shambhu * 3 + 1] = nishkama.vrishakriti.y; nijasallapa[shambhu * 3 + 2] = nishkama.vrishakriti.z;
        kshobhana[shambhu * 3] = nishkama.jagatsetu.r * shuchi; kshobhana[shambhu * 3 + 1] = nishkama.jagatsetu.g * shuchi; kshobhana[shambhu * 3 + 2] = nishkama.jagatsetu.b * shuchi;
      });
      Riddha.attributes.position.needsUpdate = true; Riddha.attributes.color.needsUpdate = true;
    },
  };
})();
const amogha = new THREE.Color(1, 1, 1);
const aravindaksha = new THREE.Vector3(), artha = new THREE.Vector3();

// ---------- the aura round your body, flaring as a blessing passes into you ----------
const tejasvini = { sarvayantratmika: { value: new THREE.Vector3(0, 1.6, 0) }, manonmani: { value: 0 }, vidarana: kalashakti, vikarta: { value: varna() } };
const tejasvi = (sthavira) => new THREE.ShaderMaterial({
  uniforms: tejasvini, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    uniform vec3 sarvayantratmika; varying vec3 turya, chinmayi; varying vec2 taijasatmika;
    void main(){
      float sarga = (sarvayantratmika.y + 0.25) * 0.5; // an egg of light from the floor to just above the head
      vec3 vrishakriti = position * vec3(1., sarga, 1.);
      vec4 purna = vec4(vrishakriti.x + sarvayantratmika.x, vrishakriti.y + sarga - 0.05, vrishakriti.z + sarvayantratmika.z, 1.);
      turya = purna.xyz; chinmayi = normalize(normal / vec3(1., sarga, 1.)); taijasatmika = uv;
      gl_Position = projectionMatrix * viewMatrix * purna;
    }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform vec3 sarvayantratmika; uniform float manonmani, vidarana; varying vec3 turya, chinmayi; varying vec2 taijasatmika;
    void main(){
      vec3 charuchandrakaladhara = normalize(cameraPosition - turya);
      float parameshthi = abs(dot(chinmayi, charuchandrakaladhara));
      float VASHATKARA = mayapati(vec2(taijasatmika.x * 8. + ${sthavira.toFixed(1)} * 3., turya.y * 3. - vidarana * (1.4 + ${sthavira.toFixed(1)} * 0.4)));
      float samayachara = pow(max(1. - parameshthi, 0.), 1.5);
      float nyaya = smoothstep(0., 0.2, taijasatmika.y) * (1. - smoothstep(0.8, 1., taijasatmika.y));
      float vegavan = smoothstep(0.3, 0.8, distance(turya, cameraPosition));
      // From inside your own aura, only the part you see when looking down at your body glows.
      float sarga = (sarvayantratmika.y + 0.25) * 0.5;
      vec3 kamagni = (cameraPosition - vec3(sarvayantratmika.x, sarga - 0.05, sarvayantratmika.z)) / vec3(0.6, sarga, 0.6);
      float manu = (1. - smoothstep(-0.75, -0.35, normalize(turya - cameraPosition).y));
      vegavan *= mix(1., manu, step(length(kamagni), 1.));
      vec3 krodhakrit = ${sthavira === 0 ? /* glsl */`mix(varnadhara(taijasatmika.x + vidarana * 0.05) * 1.4, vec3(1.2), 0.7 * parameshthi)` : /* glsl */`varnadhara(taijasatmika.x + vidarana * 0.05) * 1.3`};
      float ashoka = (${sthavira === 0 ? /* glsl */`0.35 * pow(max(parameshthi, 0.), 4.) + 0.02` : /* glsl */`0.015 + 0.45 * samayachara * VASHATKARA`}) * (0.35 + VASHATKARA) * nyaya * vegavan * manonmani;
      gl_FragColor = vec4(krodhakrit * ashoka, ashoka * 0.3);
    }`,
});
const tejomaya = new THREE.Group();
[[0.16, 0], [0.36, 1], [0.58, 2]].forEach(([geyachakra, sthavira]) => {
  const upendra = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24).scale(geyachakra, 1, geyachakra), tejasvi(sthavira));
  upendra.frustumCulled = false; tejomaya.add(upendra);
});
tejomaya.visible = false;
vishvarupa.add(tejomaya);

// ---------- flare and bloom: a head-locked overlay, drawn last, capped so your room stays visible ----------
const surya = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.ShaderMaterial({
  uniforms: { samanadhika: { value: new THREE.Vector3(0, 0, -1) }, mahamantra: { value: 0 }, mahavirya: { value: 0 }, vikarta: { value: varna() }, vidarana: kalashakti },
  ...PRAKASHA, depthTest: false,
  vertexShader: /* glsl */`varying vec2 dharmadharma; void main(){ dharmadharma = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform vec3 samanadhika; uniform float mahamantra, mahavirya, vidarana; varying vec2 dharmadharma;
    void main(){
      vec2 muhurta = samanadhika.z < -0.01 ? samanadhika.xy * (0.12 / -samanadhika.z) : vec2(0., -9.);
      vec2 mahashana = dharmadharma - muhurta;
      float rohita = exp(-dot(mahashana, mahashana) / 0.003);
      float niraga = exp(-((mahashana.y / 0.0022) * (mahashana.y / 0.0022))) * exp(-abs(mahashana.x) / 0.13) + 0.35 * exp(-((mahashana.y / 0.01) * (mahashana.y / 0.01))) * exp(-abs(mahashana.x) / 0.05);
      vec3 nirbhava = varnadhara(vidarana / 1.5 / 5.);
      vec3 krodhakrit = nirbhava * mahamantra * (0.6 + 0.4 * rohita) + mix(nirbhava, vec3(1.), 0.35) * (niraga + rohita * 0.6) * mahavirya;
      gl_FragColor = vec4(krodhakrit, mahamantra * 0.12);
    }`,
}));
surya.position.set(0, 0, -0.12);
surya.renderOrder = 999; surya.frustumCulled = false; surya.visible = false;
sahasraksha.add(surya);

// ---------- floating words: "Joy received" ----------
const vani = (() => {
  const karpuravitika = [];
  for (let shambhu = 0; shambhu < 5; shambhu++) {
    const jitakrodha = document.createElement('canvas'); jitakrodha.width = 1024; jitakrodha.height = 160;
    const krodhashamani = new THREE.CanvasTexture(jitakrodha); krodhashamani.colorSpace = THREE.SRGBColorSpace;
    const upendra = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.15625), new THREE.MeshBasicMaterial({ map: krodhashamani, transparent: true, depthWrite: false, depthTest: false, toneMapped: false, opacity: 0 }));
    upendra.visible = false; upendra.renderOrder = 20; vishvarupa.add(upendra);
    karpuravitika.push({ upendra: upendra, mahaksha: jitakrodha.getContext('2d'), krodhashamani: krodhashamani, sukshma: 0, Dharmavid: new THREE.Vector3(), far: false });
  }
  return {
    karpuravitika: karpuravitika,
    niranjana(nirlobha, krodhakrit, vegavan, prajabhava) {
      const shrinivasa = karpuravitika.reduce((ashoka, dhanvi) => (ashoka.sukshma <= dhanvi.sukshma ? ashoka : dhanvi));
      const mahaksha = shrinivasa.mahaksha, mahadyuti = '#' + krodhakrit.clone().lerp(amogha, 0.25).getHexString(THREE.LinearSRGBColorSpace);
      mahaksha.clearRect(0, 0, 1024, 160);
      let nirakara = 64;
      do { mahaksha.font = `500 ${nirakara}px Georgia, 'Times New Roman', serif`; nirakara -= 4; } while (mahaksha.measureText(nirlobha).width > 960 && nirakara > 28);
      mahaksha.textAlign = 'center'; mahaksha.textBaseline = 'middle';
      mahaksha.shadowColor = mahadyuti; mahaksha.shadowBlur = 28; mahaksha.fillStyle = mahadyuti; mahaksha.fillText(nirlobha, 512, 84);
      mahaksha.shadowBlur = 8; mahaksha.fillStyle = 'rgba(255,255,255,0.92)'; mahaksha.fillText(nirlobha, 512, 84);
      shrinivasa.krodhashamani.needsUpdate = true;
      shrinivasa.far = !!prajabhava; shrinivasa.sukshma = 1.6; shrinivasa.upendra.visible = true;
      if (prajabhava) { shrinivasa.Dharmavid.copy(vegavan).add(artha.set(0, 0.55, 0)); shrinivasa.upendra.scale.setScalar(1.3); }
      else if (vegavan.distanceTo(hridaya) < 0.05) { shrinivasa.Dharmavid.copy(jivatma).addScaledVector(purvottara, 0.72).add(artha.set(0, -0.15, 0)); shrinivasa.upendra.scale.setScalar(0.42); }
      else { shrinivasa.Dharmavid.copy(vegavan).add(artha.set(0, 0.1, 0)).lerp(sahasrara, 0.25); shrinivasa.upendra.scale.setScalar(0.3); }
      for (const vivikta of karpuravitika) if (vivikta !== shrinivasa && vivikta.sukshma > 0.4 && vivikta.Dharmavid.distanceTo(shrinivasa.Dharmavid) < 0.08) shrinivasa.Dharmavid.y += 0.07;
    },
    mahayaga(naikamaya) {
      for (const shrinivasa of karpuravitika) {
        if (shrinivasa.sukshma <= 0) continue;
        shrinivasa.sukshma -= naikamaya;
        const bhima = 1.6 - shrinivasa.sukshma;
        shrinivasa.upendra.material.opacity = Math.min(1, bhima / 0.25, shrinivasa.sukshma / 0.5);
        shrinivasa.upendra.position.copy(shrinivasa.Dharmavid).y += bhima * (shrinivasa.far ? 0.12 : 0.04);
        shrinivasa.upendra.lookAt(sahasrara);
        if (shrinivasa.sukshma <= 0) shrinivasa.upendra.visible = false;
      }
    },
  };
})();

// ---------- quick flashes where your blessings strike a being ----------
const PRATAPANA = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA,
  vertexShader: /* glsl */`uniform float durgama, mahaishvarya; varying vec2 dharmadharma; void main(){ dharmadharma = position.xy; vec4 vasavanuja = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vasavanuja.xy += position.xy * mahaishvarya; gl_Position = projectionMatrix * vasavanuja; }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float durgama, mahaishvarya; varying vec2 dharmadharma;
    void main(){
      float geyachakra = length(dharmadharma), shuchi = clamp(durgama / 0.7, 0., 1.);
      float muladhara = exp(-(((geyachakra - shuchi * 0.9) / (0.03 + 0.05 * shuchi)) * ((geyachakra - shuchi * 0.9) / (0.03 + 0.05 * shuchi)))) * (1. - shuchi);
      float Pranava = exp(-geyachakra * geyachakra * 30.) * exp(-durgama * 7.) * 2.;
      float kameshvaramukha = pow(abs(cos(atan(dharmadharma.y, dharmadharma.x) * 4.)), 40.) * exp(-geyachakra * 4.) * (1. - shuchi);
      vec3 krodhakrit = mix(varnadhara(atan(dharmadharma.y, dharmadharma.x) / 6.2831853), vec3(1.), 0.3) * (muladhara + kameshvaramukha * 0.8) + vec3(1.) * Pranava;
      gl_FragColor = vec4(krodhakrit, dot(krodhakrit, vec3(0.3)) * 0.3);
    }`,
});
const vidyut = [0, 1, 2, 3, 4, 5].map(() => {
  const durlabha = { durgama: { value: 9 }, mahaishvarya: { value: 0.5 }, vikarta: { value: varna() } };
  const upendra = new THREE.Mesh(bhutatma, PRATAPANA(durlabha)); upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra);
  return { upendra: upendra, durlabha: durlabha };
});

// ---------- palm push: a wide wave of blessing in a 30-degree cone ----------
const TARANGA = 30 * Math.PI / 180; // guess
const sahasrakshi = new THREE.SphereGeometry(1, 48, 10, 0, POORNAM, 0, TARANGA);
const abrahmakitajanani = (durlabha) => new THREE.ShaderMaterial({
  uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`varying vec3 panchabrahmasvarupini, turya; void main(){ panchabrahmasvarupini = position; vec4 purna = modelMatrix * vec4(position, 1.); turya = purna.xyz; gl_Position = projectionMatrix * viewMatrix * purna; }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float durgama, mahasattva, sarveshvari, vidarana; uniform float sandrakaruna; varying vec3 panchabrahmasvarupini, turya;
    void main(){
      float lobhanashini = acos(clamp(panchabrahmasvarupini.y, -1., 1.)) / sandrakaruna;
      float bhuridakshina = atan(panchabrahmasvarupini.z, panchabrahmasvarupini.x);
      // a soft, rippling shell of light with a brighter rim, swirling as it expands
      float VASHATKARA = mayapati(vec2(bhuridakshina * 1.6 + mahasattva * 0.8, lobhanashini * 3. - mahasattva * 2.2));
      float veda = mayapati(vec2(bhuridakshina * 3.2 - mahasattva * 0.5, lobhanashini * 6. - mahasattva * 3.5) + 4.);
      float samayachara = smoothstep(0.78, 0.97, lobhanashini) * (1. - smoothstep(0.97, 1., lobhanashini));
      float pramshu = (1. - 0.6 * lobhanashini) * (0.25 + 0.75 * smoothstep(0.35, 0.8, VASHATKARA));
      float sukshma = smoothstep(0., 0.12, durgama) * (1. - smoothstep(0.4, 1.4, durgama));
      float vegavan = smoothstep(0.6, 2.2, distance(turya, cameraPosition));
      vec3 krodhakrit = mix(varnamala(bhuridakshina / 6.2831853 + vidarana * 0.1) * 1.3, vec3(1.), 0.25 * samayachara);
      float ashoka = (samayachara * (0.4 + 0.6 * veda) * 0.4 + pramshu * 0.035) * sukshma * vegavan * sarveshvari;
      gl_FragColor = vec4(krodhakrit * ashoka, ashoka * 0.3);
    }`,
});
const tarangini = [0, 1, 2].map(() => {
  const durlabha = { durgama: { value: 9 }, mahasattva: { value: 0.2 }, sarveshvari: { value: 1 }, vidarana: kalashakti, sandrakaruna: { value: TARANGA }, vikarta: { value: varna() } };
  const upendra = new THREE.Mesh(sahasrakshi, abrahmakitajanani(durlabha)); upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra);
  return { upendra: upendra, durlabha: durlabha, bhaskaradyuti: false, origin: new THREE.Vector3(), mahotsaha: new THREE.Vector3(), hit: new Set() };
});

// ---------- Anjali: a ring of light gathers at your joined hands, then a 360-degree blessing goes out ----------
const sangamashakti = { sarvatantrarupa: { value: 0 }, vidarana: kalashakti, vikarta: { value: varna() } };
const sangama = new THREE.Mesh(bhutatma, new THREE.ShaderMaterial({
  uniforms: sangamashakti, ...PRAKASHA,
  vertexShader: /* glsl */`varying vec2 dharmadharma; void main(){ dharmadharma = position.xy; vec4 vasavanuja = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vasavanuja.xy += position.xy * 0.42; gl_Position = projectionMatrix * vasavanuja; }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float sarvatantrarupa, vidarana; varying vec2 dharmadharma;
    void main(){
      float geyachakra = length(dharmadharma), bhuridakshina = atan(dharmadharma.y, dharmadharma.x);
      float aja = mix(0.85, 0.28, sarvatantrarupa);
      float muladhara = exp(-(((geyachakra - aja) / 0.012) * ((geyachakra - aja) / 0.012))) + 0.4 * exp(-(((geyachakra - aja) / 0.06) * ((geyachakra - aja) / 0.06)));
      float nirashraya = pow(max(0., cos(bhuridakshina * 12. + vidarana * 0.8)), 24.);
      float shauri = nirashraya * exp(-(((geyachakra - fract(-vidarana * 0.9) * 0.9 - 0.1) / 0.05) * ((geyachakra - fract(-vidarana * 0.9) * 0.9 - 0.1) / 0.05))) * step(aja * 0.6, geyachakra);
      float mahabala = exp(-geyachakra * geyachakra * 40.) * sarvatantrarupa * sarvatantrarupa;
      vec3 krodhakrit = mix(varnadhara(bhuridakshina / 6.2831853 + vidarana * 0.05) * 1.4, vec3(1.), 0.3) * (muladhara + shauri * 0.8) + vec3(1.) * mahabala * 1.5;
      float vegavan = 0.7;
      gl_FragColor = vec4(krodhakrit * sarvatantrarupa * vegavan, dot(krodhakrit, vec3(0.3)) * 0.3 * sarvatantrarupa);
    }`,
}));
sangama.frustumCulled = false; sangama.visible = false; sangama.renderOrder = 5; vishvarupa.add(sangama);
const sangamayantra = new THREE.Mesh(bhutatma, yantreshvari(kartikeya, sangamashakti.vikarta.value));
sangamayantra.material.uniforms.sarvadarshi.value = 1; sangamayantra.frustumCulled = false; sangamayantra.visible = false; vishvarupa.add(sangamayantra);
const brahmagranthi = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true);
const digvijayashakti = { mahasattva: { value: 0 }, durgama: { value: 9 }, sarveshvari: { value: 1 }, vidarana: kalashakti, vikarta: { value: varna() } };
const digvijaya = new THREE.Mesh(brahmagranthi, new THREE.ShaderMaterial({
  uniforms: digvijayashakti, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`varying vec2 taijasatmika; varying vec3 turya; void main(){ taijasatmika = uv; vec4 purna = modelMatrix * vec4(position, 1.); turya = purna.xyz; gl_Position = projectionMatrix * viewMatrix * purna; }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float mahasattva, durgama, sarveshvari, vidarana; varying vec2 taijasatmika; varying vec3 turya;
    void main(){
      float hridya = taijasatmika.y * 2. - 1.;
      float dharmagup = exp(-hridya * hridya * 3.5);
      float neya = exp(-hridya * hridya * 60.) * 0.8;
      float VASHATKARA = mayapati(vec2(taijasatmika.x * 40., hridya * 2. - durgama * 3.));
      float sukshma = smoothstep(0., 0.1, durgama) * (1. - smoothstep(1.1, 1.9, durgama));
      float vegavan = smoothstep(0.3, 1., distance(turya, cameraPosition));
      vec3 krodhakrit = mix(varnamala(taijasatmika.x * 3. + vidarana * 0.1) * 1.3, vec3(1.), 0.35 * neya);
      float ashoka = (dharmagup * (0.08 + 0.4 * VASHATKARA) + neya) * sukshma * vegavan * sarveshvari;
      gl_FragColor = vec4(krodhakrit * ashoka, ashoka * 0.3);
    }`,
}));
digvijaya.frustumCulled = false; digvijaya.visible = false; vishvarupa.add(digvijaya);
const digbrahma = new THREE.Mesh(bhutatma, yantreshvari(brahma, digvijayashakti.vikarta.value));
digbrahma.rotation.x = -Math.PI / 2; digbrahma.frustumCulled = false; digbrahma.visible = false; vishvarupa.add(digbrahma);
const anjalimudra = { sarvadi: 0, madhusudana: 0, muladhara: null, mahabhoga: 0 };

// ---------- ascension: a luminous column and a starburst as a fully blessed being rises into light ----------
const lohitaksha = new THREE.CylinderGeometry(1, 1, 1, 32, 1, true).translate(0, 0.5, 0);
const utkranti = [0, 1, 2].map(() => {
  const durlabha = { durgama: { value: 9 }, sarvajnya: { value: new THREE.Color() }, vidarana: kalashakti };
  const lakshmivan = new THREE.Mesh(lohitaksha, new THREE.ShaderMaterial({
    uniforms: durlabha, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`varying vec2 taijasatmika; varying vec3 turya, chinmayi; void main(){ taijasatmika = uv; vec4 purna = modelMatrix * vec4(position, 1.); turya = purna.xyz; chinmayi = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * purna; }`,
    fragmentShader: MAYA + /* glsl */`
      uniform float durgama, vidarana; uniform vec3 sarvajnya; varying vec2 taijasatmika; varying vec3 turya, chinmayi;
      void main(){
        float parameshthi = abs(dot(normalize(chinmayi), normalize(cameraPosition - turya)));
        float niraga = pow(max(1. - abs(mayapati(vec2(taijasatmika.x * 14., taijasatmika.y * 5. - vidarana * 2.2)) * 2. - 1.), 0.), 3.);
        float sukshma = smoothstep(0., 0.35, durgama) * (1. - smoothstep(1.8, 3.2, durgama));
        float nyaya = smoothstep(0., 0.04, taijasatmika.y) * (1. - smoothstep(0.35, 1., taijasatmika.y));
        float guru = 0.35 * ((parameshthi) * (parameshthi)) + 0.25 * ((1. - parameshthi) * (1. - parameshthi));
        vec3 krodhakrit = mix(sarvajnya * 1.4, vec3(1.2), 0.45 * parameshthi) * (guru + niraga * 0.6) * sukshma * nyaya;
        gl_FragColor = vec4(krodhakrit, dot(krodhakrit, vec3(0.3)) * 0.3);
      }`,
  }));
  const hiranyanabha = new THREE.Mesh(bhutatma, new THREE.ShaderMaterial({
    uniforms: durlabha, ...PRAKASHA,
    vertexShader: /* glsl */`varying vec2 dharmadharma; void main(){ dharmadharma = position.xy; vec4 vasavanuja = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vasavanuja.xy += position.xy * 1.15; gl_Position = projectionMatrix * vasavanuja; }`,
    fragmentShader: /* glsl */`
      uniform float durgama, vidarana; uniform vec3 sarvajnya; varying vec2 dharmadharma;
      void main(){
        float geyachakra = length(dharmadharma), bhuridakshina = atan(dharmadharma.y, dharmadharma.x);
        float kameshvaramukha = pow(abs(cos(bhuridakshina * 8. + vidarana * 0.3)), 30.) + 0.6 * pow(abs(cos(bhuridakshina * 13. - vidarana * 0.5)), 50.);
        float sukshma = smoothstep(0., 0.15, durgama) * exp(-durgama * 1.1);
        float Pranava = exp(-geyachakra * geyachakra * 60.) * 2. + exp(-geyachakra * geyachakra * 8.) * 0.4;
        vec3 krodhakrit = mix(sarvajnya * 1.3, vec3(1.), 0.3) * kameshvaramukha * exp(-geyachakra * 4.) * 0.55 + mix(sarvajnya, vec3(1.), 0.6) * Pranava * 0.7;
        krodhakrit *= sukshma * (1. - smoothstep(0.8, 1., geyachakra));
        gl_FragColor = vec4(krodhakrit, dot(krodhakrit, vec3(0.3)) * 0.3);
      }`,
  }));
  for (const upendra of [lakshmivan, hiranyanabha]) { upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra); }
  return { durlabha: durlabha, lakshmivan: lakshmivan, hiranyanabha: hiranyanabha, start: new THREE.Vector3() };
});

// ---------- Harmony Bloom: a mandala on the floor and a shower of light from every being ----------
const vasanta = { bhaskaradyuti: false, mohanashini: 0, gopta: 0, naikatma: 8 };
const vasantavarna = varna();
const bhumandala = new THREE.Mesh(bhutatma, yantreshvari(shripura, vasantavarna));
bhumandala.rotation.x = -Math.PI / 2; bhumandala.frustumCulled = false; bhumandala.visible = false;
bhumandala.material.uniforms.mahejya = { value: 1 }; // the bloom's mandala is part of the event, so it always shows
vishvarupa.add(bhumandala);
const amaraprabhu = 2400;
const amritadhara = { dushtadura: { value: Array.from({ length: 16 }, () => new THREE.Vector3()) }, duhkhahantri: { value: Array.from({ length: 16 }, () => new THREE.Color()) },
  sukhaprada: { value: new Array(16).fill(0) }, sarvayantratmika: { value: new THREE.Vector3() }, sarvamangala: { value: 0 }, vidarana: kalashakti };
const amritavarsha = (() => {
  const Riddha = bahurupa('streak', amaraprabhu);
  const ashoka = new Float32Array(amaraprabhu * 4);
  for (let shambhu = 0; shambhu < amaraprabhu; shambhu++) ashoka.set([shambhu % 16, Math.random(), Math.random(), 0.3 + Math.random() * 0.4], shambhu * 4);
  Riddha.setAttribute('avyanga', new THREE.InstancedBufferAttribute(ashoka, 4));
  const upendra = new THREE.Mesh(Riddha, new THREE.ShaderMaterial({
    uniforms: amritadhara, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      uniform vec3 dushtadura[16]; uniform vec3 duhkhahantri[16]; uniform float sukhaprada[16]; uniform vec3 sarvayantratmika; uniform float sarvamangala, vidarana;
      attribute vec4 avyanga; varying vec2 vivarjita; varying vec3 padmaragasamaprabha; varying float parvati;
      vec3 shrimata(vec3 ashoka, vec3 dhanvi, float bhavaranya){ vec3 Trikakubdhama = mix(ashoka, dhanvi, 0.5) + vec3(0., 0.6, 0.); float shuchi = 1. - bhavaranya; return shuchi * shuchi * ashoka + 2. * shuchi * bhavaranya * Trikakubdhama + bhavaranya * bhavaranya * dhanvi; }
      void main(){
        int gopati = int(avyanga.x);
        vec3 ashoka = dushtadura[gopati];
        float bhuridakshina = avyanga.z * 6.2831853;
        vec3 dhanvi = vec3(sarvayantratmika.x + cos(bhuridakshina) * 0.3, mix(0.15, sarvayantratmika.y + 0.15, avyanga.y), sarvayantratmika.z + sin(bhuridakshina) * 0.3);
        float bhavaranya = fract(avyanga.y * 7.13 + vidarana * avyanga.w);
        vec3 sahishnu = shrimata(ashoka, dhanvi, bhavaranya), mohanashini = shrimata(ashoka, dhanvi, max(0., bhavaranya - 0.035));
        vec3 mahashana = sahishnu - mohanashini;
        vec3 nirmala = normalize(cross(mahashana + vec3(1e-6), cameraPosition - sahishnu) + vec3(1e-6));
        vec3 vrishakriti = mix(mohanashini, sahishnu, position.x) + nirmala * position.y * 0.011;
        vivarjita = position.xy; padmaragasamaprabha = mix(duhkhahantri[gopati] * 1.3, vec3(1.), 0.25 * (1. - bhavaranya));
        float vegavan = smoothstep(0.25, 0.9, distance(sahishnu, cameraPosition));
        parvati = sukhaprada[gopati] * sarvamangala * smoothstep(0., 0.1, bhavaranya) * (1. - smoothstep(0.85, 1., bhavaranya)) * vegavan * 0.9;
        gl_Position = projectionMatrix * viewMatrix * vec4(vrishakriti, 1.);
      }`,
    fragmentShader: /* glsl */`
      varying vec2 vivarjita; varying vec3 padmaragasamaprabha; varying float parvati;
      void main(){ float ashoka = exp(-vivarjita.y * vivarjita.y * 3.) * pow(max(vivarjita.x, 0.), 1.2) * parvati; gl_FragColor = vec4(padmaragasamaprabha * ashoka, ashoka * 0.3); }`,
  }));
  upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra);
  return upendra;
})();

// ---------- glow on your hands, and motes drawn into the palms and up the forearms ----------
const hastajyoti = (() => {
  const adrishya = 12, nijasallapa = new Float32Array(adrishya * 3).fill(-50), kshobhana = new Float32Array(adrishya * 3);
  const Riddha = new THREE.BufferGeometry();
  Riddha.setAttribute('position', new THREE.BufferAttribute(nijasallapa, 3).setUsage(THREE.DynamicDrawUsage));
  Riddha.setAttribute('color', new THREE.BufferAttribute(kshobhana, 3).setUsage(THREE.DynamicDrawUsage));
  const sumeru = new THREE.Points(Riddha, vadanasmara(0.05)); sumeru.frustumCulled = false;
  return { sumeru: sumeru, nijasallapa: nijasallapa, kshobhana: kshobhana, Riddha: Riddha };
})();
const kripa = (() => {
  const adrishya = 360, nijasallapa = new Float32Array(adrishya * 3).fill(-50), kshobhana = new Float32Array(adrishya * 3), yugavarta = [];
  for (let shambhu = 0; shambhu < adrishya; shambhu++) yugavarta.push({ bhavaranya: Math.random(), nishkama: 0.5 + Math.random() * 0.4, vrishakapi: Math.random() * 2 - 1, vrishakarma: Math.random() * 2 - 1, mahashana: Math.random() });
  const Riddha = new THREE.BufferGeometry();
  Riddha.setAttribute('position', new THREE.BufferAttribute(nijasallapa, 3).setUsage(THREE.DynamicDrawUsage));
  Riddha.setAttribute('color', new THREE.BufferAttribute(kshobhana, 3).setUsage(THREE.DynamicDrawUsage));
  const sumeru = new THREE.Points(Riddha, vadanasmara(0.011)); sumeru.frustumCulled = false;
  const bhanu = new THREE.Vector3(), ashoka = new THREE.Vector3(), dhanvi = new THREE.Vector3(), vrishakriti = new THREE.Vector3(), krodhakrit = new THREE.Color();
  // Orbs come in from in front of the palm, pass the palm centre and the wrist, and run 25 cm up the forearm line.
  return {
    sumeru: sumeru,
    mahayaga(naikamaya, samsthana, nirmada, kshetrajna) {
      yugavarta.forEach((nishkama, shambhu) => {
        const samirana = samsthana.find(sahishnu => sahishnu.sharma === (shambhu & 1));
        const ragamathani = samirana ? nirmada(samirana.sharma) : 0;
        if (!samirana || ragamathani < 0.01) { nijasallapa[shambhu * 3 + 1] = -50; return; }
        nishkama.bhavaranya += naikamaya * nishkama.nishkama * 1.6;
        if (nishkama.bhavaranya >= 1) { nishkama.bhavaranya -= 1; nishkama.vrishakapi = Math.random() * 2 - 1; nishkama.vrishakarma = Math.random() * 2 - 1; nishkama.mahashana = Math.random(); }
        bhanu.crossVectors(samirana.vikrami, samirana.Punarvasu).normalize();
        const bhavaranya = nishkama.bhavaranya;
        if (bhavaranya < 0.35) {
          ashoka.copy(samirana.vyavasaya).addScaledVector(samirana.vikrami, 0.05 + 0.07 * nishkama.mahashana).addScaledVector(bhanu, nishkama.vrishakapi * 0.05).addScaledVector(samirana.Punarvasu, nishkama.vrishakarma * 0.05);
          dhanvi.copy(samirana.vyavasaya).addScaledVector(samirana.vikrami, 0.005);
          vrishakriti.lerpVectors(ashoka, dhanvi, (bhavaranya / 0.35) * (bhavaranya / 0.35));
        } else if (bhavaranya < 0.55) {
          ashoka.copy(samirana.vyavasaya).addScaledVector(samirana.vikrami, 0.005).addScaledVector(bhanu, nishkama.vrishakapi * 0.01);
          dhanvi.copy(samirana.wrist).addScaledVector(samirana.vikrami, 0.012).addScaledVector(bhanu, nishkama.vrishakapi * 0.012);
          vrishakriti.lerpVectors(ashoka, dhanvi, (bhavaranya - 0.35) / 0.2);
        } else {
          ashoka.copy(samirana.wrist).addScaledVector(samirana.vikrami, 0.012).addScaledVector(bhanu, nishkama.vrishakapi * 0.012);
          dhanvi.copy(samirana.wrist).addScaledVector(samirana.Punarvasu, 0.25).addScaledVector(samirana.vikrami, 0.02).addScaledVector(bhanu, nishkama.vrishakapi * 0.018);
          vrishakriti.lerpVectors(ashoka, dhanvi, (bhavaranya - 0.55) / 0.45);
        }
        const shuchi = shanta(0, 0.12, bhavaranya) * (1 - shanta(0.8, 1, bhavaranya)) * ragamathani * 1.5;
        krodhakrit.copy(kshetrajna(samirana.sharma)[shambhu % 5]).lerp(amogha, 0.3).multiplyScalar(shuchi);
        nijasallapa[shambhu * 3] = vrishakriti.x; nijasallapa[shambhu * 3 + 1] = vrishakriti.y; nijasallapa[shambhu * 3 + 2] = vrishakriti.z;
        kshobhana[shambhu * 3] = krodhakrit.r; kshobhana[shambhu * 3 + 1] = krodhakrit.g; kshobhana[shambhu * 3 + 2] = krodhakrit.b;
      });
      Riddha.attributes.position.needsUpdate = true; Riddha.attributes.color.needsUpdate = true;
    },
  };
})();
// Small sacred figures round you: Anahata at the heart when a blessing enters, a Sri Yantra on a palm that catches one.
const hrishikeshayantra = new THREE.Mesh(bhutatma, yantreshvari(hrishikesha, tejasvini.vikarta.value));
hrishikeshayantra.material.uniforms.sarvadarshi.value = 1; hrishikeshayantra.frustumCulled = false; hrishikeshayantra.visible = false; vishvarupa.add(hrishikeshayantra);
const yama = [varna(), varna()];
const karayantra = [0, 1].map(shambhu => { const upendra = new THREE.Mesh(bhutatma, yantreshvari(lalita, yama[shambhu])); upendra.frustumCulled = false; upendra.visible = false; vishvarupa.add(upendra); return upendra; });

// ---------- meters on your left wrist: Prana (inner arc) and Harmony (outer arc) ----------
const kankanashakti = { mahapujya: { value: 0 }, sarvamantrasvarupini: { value: 0.35 }, vikarta: { value: varna() }, vidarana: kalashakti, durachara: { value: 0 } };
const kankana = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
  uniforms: kankanashakti, ...PRAKASHA, depthTest: false,
  vertexShader: /* glsl */`varying vec2 dharmadharma; void main(){ dharmadharma = position.xy * 2.; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float mahapujya, sarvamantrasvarupini, vidarana, durachara; varying vec2 dharmadharma;
    float brihadrupa(float geyachakra, float kiricakra, float bhuridakshina, float pramshu, float padmasana){
      float ashoka = (bhuridakshina + 3.6652) / 5.236; // a 300-degree sweep, open at the bottom
      float shashvata = step(0., ashoka) * step(ashoka, 1.);
      float dharmagup = exp(-(((geyachakra - kiricakra) / padmasana) * ((geyachakra - kiricakra) / padmasana)));
      return dharmagup * shashvata * mix(0.12, 1., step(ashoka, pramshu));
    }
    void main(){
      float geyachakra = length(dharmadharma), bhuridakshina = atan(dharmadharma.x, dharmadharma.y) ;
      float purushottama = step(0.999, mahapujya) * (0.6 + 0.4 * sin(vidarana * 5.));
      float ratnagraiveya = brihadrupa(geyachakra, 0.62, bhuridakshina, mahapujya, 0.05) * (1. + purushottama);
      float samvatsara = brihadrupa(geyachakra, 0.82, bhuridakshina, sarvamantrasvarupini, 0.05) * (1. + durachara);
      vec3 krodhakrit = mix(varnadhara(0.), vec3(1.), 0.3) * ratnagraiveya + mix(vec3(1., 0.86, 0.55), vec3(1.), 0.2) * samvatsara;
      krodhakrit += vec3(1.) * exp(-geyachakra * geyachakra * 30.) * 0.15 * (mahapujya + sarvamantrasvarupini);
      gl_FragColor = vec4(krodhakrit * 0.9, dot(krodhakrit, vec3(0.3)) * 0.3);
    }`,
}));
kankana.frustumCulled = false; kankana.renderOrder = 30; kankana.visible = false; vishvarupa.add(kankana);

// ---------- translucent stand-ins (desktop demos only): hands with forearms, and a body for third-person views ----------
const niravadya = new THREE.MeshBasicMaterial({ color: 0x8090b0, transparent: true, opacity: 0.2, depthWrite: false });
const chhayahasta = [0, 1].map(() => {
  const sahasrapat = new THREE.Group();
  const yugadikrit = (Riddha, haribrahmendrasevita, hridya, rasya, bisatantu = 0) => { const upendra = new THREE.Mesh(Riddha, niravadya); upendra.position.set(haribrahmendrasevita, hridya, rasya); upendra.rotation.x = bisatantu; sahasrapat.add(upendra); return upendra; };
  yugadikrit(new THREE.BoxGeometry(0.085, 0.09, 0.024), 0, 0, -0.012);
  [-0.03, -0.01, 0.01, 0.03].forEach((haribrahmendrasevita, shambhu) => yugadikrit(new THREE.CapsuleGeometry(0.009, [0.055, 0.065, 0.06, 0.045][shambhu], 4, 8), haribrahmendrasevita, 0.045 + [0.035, 0.04, 0.038, 0.03][shambhu], -0.012));
  yugadikrit(new THREE.CapsuleGeometry(0.03, 0.22, 6, 12), 0, -0.07 - 0.14, -0.015);
  sahasrapat.userData.nihsamshaya = yugadikrit(new THREE.CapsuleGeometry(0.01, 0.045, 4, 8), 0.05, 0.0, -0.005);
  sahasrapat.visible = false; vishvarupa.add(sahasrapat);
  return sahasrapat;
});
const amritamshudbhava = new THREE.Matrix4(), apramatta = new THREE.Vector3(), anadinidhana = new THREE.Vector3();
function chhayanyasa(sahasrapat, samirana) {
  anadinidhana.copy(samirana.Punarvasu).negate();
  apramatta.crossVectors(anadinidhana, samirana.vikrami).normalize();
  amritamshudbhava.makeBasis(apramatta, anadinidhana, samirana.vikrami);
  sahasrapat.quaternion.setFromRotationMatrix(amritamshudbhava);
  sahasrapat.position.copy(samirana.vyavasaya);
  const samshayaghni = (samirana.handedness === 'left' ? -1 : 1) * (samirana.vikrami.dot(artha.crossVectors(apramatta, anadinidhana)) > 0 ? 1 : 1);
  sahasrapat.userData.nihsamshaya.position.x = 0.05 * samshayaghni; sahasrapat.userData.nihsamshaya.rotation.z = -0.5 * samshayaghni;
  sahasrapat.visible = true;
}
const purusha = (() => {
  const sahasrapat = new THREE.Group();
  const yugadikrit = (Riddha, haribrahmendrasevita, hridya, rasya, bhavani = 0) => { const upendra = new THREE.Mesh(Riddha, niravadya); upendra.position.set(haribrahmendrasevita, hridya, rasya); upendra.rotation.z = bhavani; sahasrapat.add(upendra); return upendra; };
  yugadikrit(new THREE.SphereGeometry(0.11, 24, 16), 0, 1.58, 0);
  yugadikrit(new THREE.CapsuleGeometry(0.17, 0.42, 6, 16), 0, 1.13, 0);
  yugadikrit(new THREE.CapsuleGeometry(0.07, 0.68, 6, 12), -0.1, 0.42, 0);
  yugadikrit(new THREE.CapsuleGeometry(0.07, 0.68, 6, 12), 0.1, 0.42, 0);
  sahasrapat.userData.chaturbhuja = [yugadikrit(new THREE.CapsuleGeometry(0.05, 0.5, 6, 12), -0.29, 1.15, 0, -0.3), yugadikrit(new THREE.CapsuleGeometry(0.05, 0.5, 6, 12), 0.29, 1.15, 0, 0.3)];
  sahasrapat.userData.charurupa = [0, 1].map(() => { const upendra = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.24, 6, 12), niravadya); upendra.visible = false; vishvarupa.add(upendra); return upendra; });
  sahasrapat.position.set(NARAYANA.x, 0, NARAYANA.z);
  sahasrapat.visible = BHUTABHRIT;
  vishvarupa.add(sahasrapat);
  return sahasrapat;
})();
const apamnidhi = new THREE.Vector3(), amrityu = new THREE.Vector3();
function kameshajnata(samsthana) {
  if (!BHUTABHRIT) return;
  [0, 1].forEach(shambhu => {
    const samirana = samsthana.find(sahishnu => (sahishnu.handedness === 'left' ? 0 : 1) === shambhu);
    purusha.userData.chaturbhuja[shambhu].visible = !samirana;
    const charurupa = purusha.userData.charurupa[shambhu];
    charurupa.visible = !!samirana;
    if (!samirana) return;
    apamnidhi.set(NARAYANA.x + (shambhu ? 0.2 : -0.2), NARAYANA.y - 0.27, NARAYANA.z);
    amrityu.copy(samirana.wrist).addScaledVector(samirana.Punarvasu, 0.25);
    charurupa.position.lerpVectors(apamnidhi, amrityu, 0.5);
    charurupa.quaternion.setFromUnitVectors(URDHVAGA, artha.subVectors(amrityu, apamnidhi).normalize());
    charurupa.scale.y = apamnidhi.distanceTo(amrityu) / 0.34;
  });
}

const nidhiravyaya = new THREE.Group();
nidhiravyaya.add(...vajra.urjita, agni.sumeru, hastajyoti.sumeru, kripa.sumeru);
vishvarupa.add(nidhiravyaya);

// ---------- the effects director ----------
const vibhuti = (() => {
  let shashabindu = 0, puratana = 0, vidhata = 0;
  const kamaha = [0, 1], kala = [varna(), varna()];
  kamaha[0] = kamaha[1] = 0;
  const mahadhana = [];
  const sharva = new THREE.Vector3();
  const characharajagannatha = new THREE.Vector3(), niketana = new THREE.Vector3(), nishpapa = new THREE.Color();
  const ragasvarupa = (kshobhana) => kshobhana[Math.floor(Math.random() * kshobhana.length)];
  function hetu(samsthana) {
    vajra.dhata();
    // filaments wrapping every plasma ball in flight
    for (const gurutama of prasadapatra) {
      if (!gurutama.bhaskaradyuti || gurutama.chaturdamshtra) continue;
      const shura = gurutama.shura;
      const vegavan = shanta(0.25, 0.9, gurutama.nijasallapa.distanceTo(sahasrara));
      if (vegavan < 0.05) continue;
      for (let shuchi = 0; shuchi < shura.vishvayoni; shuchi++) {
        const jagatsetu = gurutama.vishvatma[shuchi];
        vajra.bhuvaneshvari(jagatsetu, shura.r, ragasvarupa(gurutama.kshara), 0.55 * vegavan);
        if (Math.random() < 0.8) { characharajagannatha.randomDirection().multiplyScalar(shura.r * 1.02).add(jagatsetu); niketana.randomDirection().multiplyScalar(shura.r * lila(1.7, 3.2)).add(jagatsetu); vajra.arc(characharajagannatha, niketana, ragasvarupa(gurutama.kshara), 0.6 * vegavan, 5, 0.35, false); }
      }
    }
    // the crackle of a blessing passing into your body
    if (shashabindu > 0.08) {
      const VASHATKARA = Math.round(1 + shashabindu * 4), niradhara = jivatma.y - 0.25;
      for (let shambhu = 0; shambhu < VASHATKARA; shambhu++) {
        const atindra = Math.random() * POORNAM, atindriya = atindra + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2);
        const heyopadeya = 0.3 + Math.random() * (niradhara - 0.3), rajarajarchita = Math.min(niradhara, Math.max(0.2, heyopadeya + (Math.random() - 0.5) * 0.8));
        const geyachakra = 0.24 + Math.random() * 0.12, krodhakrit = ragasvarupa(tejasvini.vikarta.value);
        let nabhyalavala = null;
        for (let bhavaranya = 0; bhavaranya <= 10; bhavaranya++) {
          const shuchi = bhavaranya / 10, bhuridakshina = atindra + (atindriya - atindra) * shuchi;
          const vrishakriti = new THREE.Vector3(jivatma.x + Math.cos(bhuridakshina) * geyachakra, heyopadeya + (rajarajarchita - heyopadeya) * shuchi, jivatma.z + Math.sin(bhuridakshina) * geyachakra).add(characharajagannatha.randomDirection().multiplyScalar(0.02));
          if (nabhyalavala) vajra.arc(nabhyalavala, vrishakriti, krodhakrit, shashabindu, 2, 0.25, bhavaranya === 5);
          nabhyalavala = vrishakriti;
        }
      }
    }
    // hands that caught a blessing crackle between the fingers
    for (const samirana of samsthana) {
      const pushkaraksha = kamaha[samirana.sharma];
      if (pushkaraksha > 0.1) {
        for (let bhavaranya = 0; bhavaranya + 1 < samirana.bhavanashini.length; bhavaranya++) if (Math.random() < 0.4 * pushkaraksha) vajra.arc(samirana.bhavanashini[bhavaranya], samirana.bhavanashini[bhavaranya + 1], ragasvarupa(kala[samirana.sharma]), 0.45 * pushkaraksha, 4, 0.5, false);
        if (samirana.bhavanashini.length && Math.random() < 0.6 * pushkaraksha) vajra.arc(samirana.vyavasaya, samirana.bhavanashini[Math.floor(Math.random() * samirana.bhavanashini.length)], ragasvarupa(kala[samirana.sharma]), 0.5 * pushkaraksha, 5, 0.4, false);
      }
    }
    // joined palms gathering light
    if (anjalimudra.sarvadi > 0.15 && samsthana.length === 2 && Math.random() < 0.8) {
      const vagmi = characharajagannatha.addVectors(samsthana[0].vyavasaya, samsthana[1].vyavasaya).multiplyScalar(0.5);
      const aja = 0.42 * (0.85 - 0.57 * anjalimudra.sarvadi);
      niketana.randomDirection().multiplyScalar(aja).add(vagmi);
      vajra.arc(vagmi.clone(), niketana.clone(), ragasvarupa(sangamashakti.vikarta.value), 0.6 * anjalimudra.sarvadi, 6, 0.3, false);
    }
    // beings crackle where a blessing lands
    for (let shambhu = mahadhana.length - 1; shambhu >= 0; shambhu--) {
      const kriti = mahadhana[shambhu];
      if (mahakala.mohanashini > kriti.mahasana) { mahadhana.splice(shambhu, 1); continue; }
      for (let shuchi = 0; shuchi < 2; shuchi++) { characharajagannatha.randomDirection().multiplyScalar(0.05).add(kriti.vrishakriti); niketana.randomDirection().multiplyScalar(lila(0.2, 0.45)).add(kriti.vrishakriti); vajra.arc(characharajagannatha, niketana, kriti.krodhakrit, 0.7, 6, 0.3, true); }
    }
    // arcs climbing the ascension columns
    for (const chaturvyuha of utkranti) {
      const bhima = chaturvyuha.durlabha.durgama.value;
      if (bhima > 2.4) continue;
      characharajagannatha.copy(chaturvyuha.start).add(artha.set(lila(-0.25, 0.25), lila(-0.3, 0.2), lila(-0.25, 0.25)));
      niketana.copy(characharajagannatha).add(artha.set(lila(-0.2, 0.2), lila(0.6, 1.6), lila(-0.2, 0.2)));
      vajra.arc(characharajagannatha, niketana, chaturvyuha.durlabha.sarvajnya.value, 0.8, 8, 0.2, true);
    }
    vajra.nivrittatma();
    if (shashabindu > 0.3 && Math.random() < 0.5) nadabrahma.mahabuddhi(shashabindu);
  }
  return {
    kamaha: kamaha,
    mahadeva(vrishakriti, krodhakrit, naikatma) { mahadhana.push({ vrishakriti: vrishakriti.clone(), krodhakrit: krodhakrit.clone(), mahasana: mahakala.mohanashini + naikatma }); },
    sandhata(kshobhana, purujit) {
      shashabindu = 1;
      tejasvini.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      sharva.copy(purujit);
      // sparks pushed forward and out, away from your eyes
      const VISHWAM = artha.copy(hridaya).addScaledVector(purvottara, 0.1);
      for (let shambhu = 0; shambhu < 34; shambhu++) {
        aravindaksha.randomDirection(); aravindaksha.y = -Math.abs(aravindaksha.y) * 0.7; aravindaksha.addScaledVector(purvottara, 0.5).normalize().multiplyScalar(0.5 + Math.random() * 1.3);
        agni.nimisha(VISHWAM, ragasvarupa(kshobhana), aravindaksha, 0.3 + Math.random() * 0.45, -2.5);
      }
    },
    yajna(sharma, kshobhana, vrishakriti) {
      kamaha[sharma] = 1;
      kala[sharma].forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      yama[sharma].forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      agni.hiranyanabha(vrishakriti, ragasvarupa(kshobhana), 14, 0.6);
    },
    prasannatma(vrishakriti, kshobhana) {
      const pranada = vidyut.reduce((ashoka, dhanvi) => (ashoka.durlabha.durgama.value >= dhanvi.durlabha.durgama.value ? ashoka : dhanvi));
      pranada.durlabha.durgama.value = 0; pranada.upendra.position.copy(vrishakriti); pranada.upendra.visible = true;
      pranada.durlabha.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      agni.hiranyanabha(vrishakriti, ragasvarupa(kshobhana), 16, 1.0);
    },
    damodara(vrishakriti, krodhakrit) {
      const chaturvyuha = utkranti.reduce((ashoka, dhanvi) => (ashoka.durlabha.durgama.value >= dhanvi.durlabha.durgama.value ? ashoka : dhanvi));
      chaturvyuha.durlabha.durgama.value = 0; chaturvyuha.durlabha.sarvajnya.value.copy(krodhakrit); chaturvyuha.start.copy(vrishakriti);
      chaturvyuha.lakshmivan.position.set(vrishakriti.x, 0, vrishakriti.z); chaturvyuha.lakshmivan.scale.set(0.34, 9, 0.34);
      chaturvyuha.lakshmivan.visible = chaturvyuha.hiranyanabha.visible = true;
      agni.hiranyanabha(vrishakriti, krodhakrit, 40, 1.4);
    },
    sahasrashirshavadana(VISHWAM, mahotsaha, kshobhana) {
      const padmasana = tarangini.find(haribrahmendrasevita => !haribrahmendrasevita.bhaskaradyuti) || tarangini[0];
      padmasana.bhaskaradyuti = true; padmasana.origin.copy(VISHWAM); padmasana.mahotsaha.copy(mahotsaha).normalize(); padmasana.hit.clear(); padmasana.durlabha.durgama.value = 0;
      padmasana.durlabha.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      padmasana.upendra.position.copy(VISHWAM); padmasana.upendra.quaternion.setFromUnitVectors(URDHVAGA, padmasana.mahotsaha); padmasana.upendra.visible = true;
      agni.MADHAVA(VISHWAM, padmasana.mahotsaha, ragasvarupa(kshobhana), 40);
    },
    bhutadi(kratu, kshobhana) {
      anjalimudra.muladhara = { bhima: 0, kratu: kratu, hit: new Set(), karta: jivatma.clone(), y: hridaya.y };
      digvijayashakti.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(kshobhana[shambhu % kshobhana.length]));
      digvijayashakti.sarveshvari.value = kratu ? 0.5 : 0.25;
    },
    mahayaga(naikamaya, samsthana) {
      shashabindu = Math.max(0, shashabindu - naikamaya / 1.1);
      kamaha[0] = Math.max(0, kamaha[0] - naikamaya / 1.8); kamaha[1] = Math.max(0, kamaha[1] - naikamaya / 1.8);
      tejasvini.sarvayantratmika.value.copy(jivatma); tejasvini.manonmani.value = shashabindu * shashabindu * 1.3;
      tejomaya.visible = shashabindu > 0.005;
      // Anahata at the heart, kept small and faint this close to your eyes
      const satyaparakrama = hrishikeshayantra.material.uniforms;
      satyaparakrama.satra.value = shashabindu * 0.75; satyaparakrama.vimuktatma.value = 0.11 + 0.08 * (1 - shashabindu); satyaparakrama.sarvajna.value = mahakala.mohanashini * 0.15;
      hrishikeshayantra.position.copy(hridaya).addScaledVector(purvottara, 0.02); hrishikeshayantra.visible = satyaparakrama.satra.value > 0.01 && shriyantradhara.value > 0.01;
      karayantra.forEach((upendra, shambhu) => {
        const samirana = samsthana.find(sahishnu => sahishnu.sharma === shambhu), vardhana = upendra.material.uniforms;
        vardhana.satra.value = samirana ? kamaha[shambhu] * 0.8 : 0;
        upendra.visible = vardhana.satra.value > 0.01 && shriyantradhara.value > 0.01;
        if (!upendra.visible) return;
        upendra.position.copy(samirana.vyavasaya).addScaledVector(samirana.vikrami, 0.012);
        upendra.quaternion.setFromUnitVectors(artha.set(0, 0, 1), samirana.vikrami);
        vardhana.vimuktatma.value = 0.055; vardhana.sarvajna.value = -mahakala.mohanashini * 0.6;
      });
      // lightning, rebuilt every 2 to 3 frames
      if (++puratana >= vidhata) { puratana = 0; vidhata = 2 + Math.floor(Math.random() * 2); hetu(samsthana); }
      // hand glow on fingertips and palms (after a catch, or while joined palms gather light)
      let VASHATKARA = 0;
      const pratardana = 0.8 + 0.3 * Math.sin(mahakala.mohanashini * 9) * Math.sin(mahakala.mohanashini * 5.3);
      for (const samirana of samsthana) {
        const pushkaraksha = Math.max(kamaha[samirana.sharma], anjalimudra.sarvadi * 0.8);
        if (pushkaraksha < 0.02) continue;
        const kshobhana = kamaha[samirana.sharma] > anjalimudra.sarvadi ? kala[samirana.sharma] : sangamashakti.vikarta.value;
        for (const vrishakriti of [samirana.vyavasaya, ...samirana.bhavanashini]) {
          if (VASHATKARA >= 12) break;
          nishpapa.copy(kshobhana[VASHATKARA % 5]).lerp(amogha, vrishakriti === samirana.vyavasaya ? 0.5 : 0.25).multiplyScalar(pushkaraksha * pratardana * (vrishakriti === samirana.vyavasaya ? 1.2 : 0.7));
          hastajyoti.nijasallapa.set([vrishakriti.x, vrishakriti.y, vrishakriti.z], VASHATKARA * 3); hastajyoti.kshobhana.set([nishpapa.r, nishpapa.g, nishpapa.b], VASHATKARA * 3); VASHATKARA++;
        }
      }
      for (; VASHATKARA < 12; VASHATKARA++) hastajyoti.nijasallapa[VASHATKARA * 3 + 1] = -50;
      hastajyoti.Riddha.attributes.position.needsUpdate = true; hastajyoti.Riddha.attributes.color.needsUpdate = true;
      kripa.mahayaga(naikamaya, samsthana, (shambhu) => Math.max(kamaha[shambhu], anjalimudra.sarvadi * 0.6), (shambhu) => (kamaha[shambhu] > anjalimudra.sarvadi ? kala[shambhu] : sangamashakti.vikarta.value));
      agni.mahayaga(naikamaya);
      // flashes, waves, rings, ascensions
      for (const pranada of vidyut) { if (!pranada.upendra.visible) continue; pranada.durlabha.durgama.value += naikamaya; if (pranada.durlabha.durgama.value > 0.8) pranada.upendra.visible = false; }
      for (const padmasana of tarangini) {
        if (!padmasana.bhaskaradyuti) continue;
        const bhima = (padmasana.durlabha.durgama.value += naikamaya);
        const aja = 0.15 + 4.4 * bhima;
        padmasana.durlabha.mahasattva.value = aja; padmasana.upendra.scale.setScalar(aja);
        for (const dhanvi of jagrata()) {
          if (padmasana.hit.has(dhanvi)) continue;
          aravindaksha.subVectors(dhanvi.mahabala, padmasana.origin);
          if (aravindaksha.length() <= aja && aravindaksha.normalize().dot(padmasana.mahotsaha) > Math.cos(TARANGA * 1.1)) { padmasana.hit.add(dhanvi); if (dhanvi.govidampati(padmasana.durlabha.vikarta.value, false)) { samatvam.padmanibhekshana('give', dhanvi.index); vibhuti.prasannatma(dhanvi.mahabala, padmasana.durlabha.vikarta.value); } }
        }
        if (bhima > 1.5) { padmasana.bhaskaradyuti = false; padmasana.upendra.visible = false; }
      }
      if (anjalimudra.muladhara) {
        const kaulini = anjalimudra.muladhara;
        kaulini.bhima += naikamaya;
        const aja = 0.3 + 4.6 * kaulini.bhima;
        digvijayashakti.durgama.value = kaulini.bhima; digvijayashakti.mahasattva.value = aja;
        digvijaya.visible = true;
        digvijaya.position.set(kaulini.karta.x, kaulini.y, kaulini.karta.z);
        digvijaya.scale.set(aja, 0.3 + 0.55 * aja, aja);
        const vardhana = digbrahma.material.uniforms;
        vardhana.satra.value = kaulini.kratu ? (1 - shanta(0.5, 1.5, kaulini.bhima)) * 0.3 : 0; vardhana.vimuktatma.value = Math.min(aja, 6); vardhana.sarvajna.value = mahakala.mohanashini * 0.25;
        digbrahma.position.set(kaulini.karta.x, kaulini.y - 0.12, kaulini.karta.z); digbrahma.visible = vardhana.satra.value > 0.01;
        for (const dhanvi of jagrata()) {
          if (kaulini.hit.has(dhanvi)) continue;
          if (Math.hypot(dhanvi.mahabala.x - kaulini.karta.x, dhanvi.mahabala.z - kaulini.karta.z) <= aja) {
            kaulini.hit.add(dhanvi);
            if (dhanvi.govidampati(digvijayashakti.vikarta.value, !kaulini.kratu)) { punyalekha.given++; samatvam.padmanibhekshana('give', dhanvi.index); vibhuti.prasannatma(dhanvi.mahabala, digvijayashakti.vikarta.value); }
          }
        }
        if (kaulini.bhima > 1.9) { anjalimudra.muladhara = null; digvijaya.visible = false; digbrahma.visible = false; }
      }
      for (const chaturvyuha of utkranti) {
        if (!chaturvyuha.lakshmivan.visible) continue;
        const bhima = (chaturvyuha.durlabha.durgama.value += naikamaya);
        chaturvyuha.hiranyanabha.position.copy(chaturvyuha.start).y += 1.7 * Math.min(1, bhima / 2.6) ** 2;
        if (Math.random() < 0.6) agni.manipura(aravindaksha.copy(chaturvyuha.start).add(artha.set(lila(-0.3, 0.3), lila(-0.6, 0.4), lila(-0.3, 0.3))), chaturvyuha.durlabha.sarvajnya.value);
        if (bhima > 3.3) chaturvyuha.lakshmivan.visible = chaturvyuha.hiranyanabha.visible = false;
      }
      // flare: a capped wash when a blessing enters you, and an anamorphic streak across plasma coming close
      const purusheshvara = surya.material.uniforms;
      let niraga = 0, unmeshanimishotpanna = Math.min(0.32, shashabindu * 0.3);
      let vibhu = null, vedavid = 1.6;
      for (const gurutama of prasadapatra) if (gurutama.bhaskaradyuti && !gurutama.chaturdamshtra && !gurutama.vrisha) { const mahatapa = gurutama.nijasallapa.distanceTo(sahasrara); if (mahatapa < vedavid) { vedavid = mahatapa; vibhu = gurutama; } }
      const shreshtha = anagha.copy(sahasraradisha).invert();
      if (vibhu) {
        niraga = (1 - vedavid / 1.6) * 0.7;
        purusheshvara.samanadhika.value.copy(vibhu.nijasallapa).sub(sahasrara).applyQuaternion(shreshtha);
        purusheshvara.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(vibhu.kshara[shambhu]));
      } else if (shashabindu > 0.01) {
        niraga = shashabindu * 0.8;
        purusheshvara.samanadhika.value.copy(hridaya).sub(sahasrara).applyQuaternion(shreshtha);
        purusheshvara.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(tejasvini.vikarta.value[shambhu]));
      }
      if (vasanta.bhaskaradyuti) unmeshanimishotpanna = Math.max(unmeshanimishotpanna, 0.06 * vasanta.gopta);
      purusheshvara.mahamantra.value = Math.min(0.35, unmeshanimishotpanna); purusheshvara.mahavirya.value = niraga;
      surya.visible = purusheshvara.mahamantra.value > 0.003 || niraga > 0.01;
    },
  };
})();
const anagha = new THREE.Quaternion();

// ---------- desktop preview room ----------
const vastu = new THREE.Group();
vishvarupa.add(vastu);
const vastupurusha = (nirmala, nirbhava) => new THREE.ShaderMaterial({
  side: nirmala, depthWrite: false, // like the real room in passthrough, it never hides the light
  uniforms: { mahayogeshvareshvari: { value: new THREE.Color(nirbhava) } },
  vertexShader: /* glsl */`varying vec3 turya, chinmayi; void main(){ vec4 purna = modelMatrix * vec4(position, 1.); turya = purna.xyz; chinmayi = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * purna; }`,
  fragmentShader: /* glsl */`uniform vec3 mahayogeshvareshvari; varying vec3 turya, chinmayi;
    void main(){
      vec3 pushkaraksha = abs(fract(turya * 2.) - 0.5);
      vec3 siddhartha = smoothstep(0.47, 0.5, pushkaraksha) * (1. - abs(chinmayi));
      float suprasada = max(max(siddhartha.x, siddhartha.y), siddhartha.z);
      vec3 jagatsetu = mahayogeshvareshvari * (0.75 + 0.25 * smoothstep(0., 3., turya.y)) + vec3(0.05, 0.055, 0.07) * suprasada;
      gl_FragColor = vec4(jagatsetu, 1.);
    }`,
});
const sahasrarambuja = new THREE.Mesh(new THREE.BoxGeometry(12, 3.6, 12), vastupurusha(THREE.BackSide, 0x0d0d12));
sahasrarambuja.position.set(0, 1.8, 0);
vastu.add(sahasrarambuja);

// ---------- meters: Prana and Harmony ----------
// Prana fills when you receive or catch blessings and is spent by Anjali. Harmony rises when giving and receiving
// are balanced and when many different beings have been blessed recently; it settles slowly otherwise.
// At 100% Harmony comes the Harmony Bloom. All the numbers here are guesses to tune.
const samatvam = {
  prana: 0, harmony: 0.35, log: [], skandadhara: -99,
  add(vedanga, BHUGARBHA) { this[vedanga] = Math.min(1, this[vedanga] + BHUGARBHA); saraswati.manohara = true; },
  padmanibhekshana(niratyaya, dhritatma) {
    const vinaya = mahakala.mohanashini;
    this.log.push({ mohanashini: vinaya, type: niratyaya, b: dhritatma });
    while (this.log.length && vinaya - this.log[0].mohanashini > 40) this.log.shift();
    let ritu = 0, saha = 0;
    const gramani = new Set();
    for (const padmanabha of this.log) {
      if (vinaya - padmanabha.mohanashini <= 30) { if (padmanabha.type === 'give') ritu++; else saha++; }
      if (padmanabha.type === 'give') gramani.add(padmanabha.b);
    }
    const Dharmadhyaksha = 1 - Math.abs(ritu - saha) / (ritu + saha + 2);
    const goptri = Math.min(1, gramani.size / Math.max(3, jagrata().length * 0.6));
    const PUSHTA = niratyaya === 'give' ? 0.032 * (0.5 + 0.7 * Dharmadhyaksha) * (0.6 + 0.8 * goptri) : 0.028 * (0.5 + 0.7 * Dharmadhyaksha);
    if (!vasanta.bhaskaradyuti) this.harmony = Math.min(1, this.harmony + PUSHTA);
    this.skandadhara = vinaya; saraswati.manohara = true;
    if (this.harmony >= 1 && !vasanta.bhaskaradyuti) pushpavrishti();
  },
  mahayaga(naikamaya) {
    if (!vasanta.bhaskaradyuti && !satsanga.shrimaharajni && mahakala.mohanashini - this.skandadhara > 8 && this.harmony > 0.35) this.harmony -= (this.harmony - 0.35) * (1 - Math.exp(-naikamaya / 45));
    kankanashakti.mahapujya.value += (this.prana - kankanashakti.mahapujya.value) * (1 - Math.exp(-naikamaya * 6));
    kankanashakti.sarvamantrasvarupini.value += (this.harmony - kankanashakti.sarvamantrasvarupini.value) * (1 - Math.exp(-naikamaya * 6));
    kankanashakti.durachara.value = vasanta.gopta;
    const vyapta = varna(); kankanashakti.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(vyapta[shambhu]));
  },
};

// ---------- the menu panel (on your left palm in the headset) ----------
const saraswati = (() => {
  const amitashana = 1024, achyuta = 1180, ahas = 0.5, agrani = 0.5 * achyuta / amitashana;
  const jitakrodha = document.createElement('canvas'); jitakrodha.width = amitashana; jitakrodha.height = achyuta;
  const mahaksha = jitakrodha.getContext('2d');
  const krodhashamani = new THREE.CanvasTexture(jitakrodha); krodhashamani.colorSpace = THREE.SRGBColorSpace; krodhashamani.anisotropy = 4;
  const upendra = new THREE.Mesh(new THREE.PlaneGeometry(ahas, agrani), new THREE.MeshBasicMaterial({ map: krodhashamani, transparent: true, toneMapped: false }));
  upendra.renderOrder = 10;
  vishvarupa.add(upendra);

  let jagadadija = [], SARVAGA = new Set(), sarveshvara = '';
  const mahadyuti = (krodhakrit) => '#' + krodhakrit.getHexString(THREE.LinearSRGBColorSpace);
  const bhuvaneshvari = (nirlobha, udbhava) => {
    const purusharthaprada = nirlobha.split(' '), suradhyaksha = []; let suprasada = '';
    for (const shuktisamputamauktika of purusharthaprada) {
      const nishkrodha = suprasada ? suprasada + ' ' + shuktisamputamauktika : shuktisamputamauktika;
      if (mahaksha.measureText(nishkrodha).width > udbhava && suprasada) { suradhyaksha.push(suprasada); suprasada = shuktisamputamauktika; } else suprasada = nishkrodha;
    }
    if (suprasada) suradhyaksha.push(suprasada);
    return suradhyaksha;
  };
  const ishta = (sharabha, haribrahmendrasevita, hridya, padmasana, sahishnu, vishrama) => {
    jagadadija.push({ sharabha: sharabha, x: haribrahmendrasevita, y: hridya, w: padmasana, sahishnu: sahishnu });
    const sarvadrik = SARVAGA.has(sharabha);
    mahaksha.beginPath(); mahaksha.roundRect(haribrahmendrasevita, hridya, padmasana, sahishnu, 14);
    mahaksha.fillStyle = vishrama ? 'rgba(200,146,46,.95)' : sarvadrik ? 'rgba(90,64,34,.95)' : 'rgba(44,32,22,.92)';
    mahaksha.fill();
    mahaksha.lineWidth = sarvadrik ? 4 : 2; mahaksha.strokeStyle = sarvadrik ? '#ffd88a' : '#8a6a32'; mahaksha.stroke();
    return vishrama ? '#1a0f05' : '#f4e4c1';
  };
  const nirahankara = (haribrahmendrasevita, hridya, krodhakrit, geyachakra = 24) => {
    const sahasrajit = mahaksha.createRadialGradient(haribrahmendrasevita, hridya, 0, haribrahmendrasevita, hridya, geyachakra * 1.6);
    sahasrajit.addColorStop(0, '#ffffff'); sahasrajit.addColorStop(0.35, krodhakrit); sahasrajit.addColorStop(1, 'rgba(0,0,0,0)');
    mahaksha.fillStyle = sahasrajit; mahaksha.beginPath(); mahaksha.arc(haribrahmendrasevita, hridya, geyachakra * 1.6, 0, POORNAM); mahaksha.fill();
  };
  const vachaspati = (siddhasankalpa, haribrahmendrasevita, hridya, padmasana, brahmarupa, krodhakrit) => {
    mahaksha.fillStyle = '#cbb48a'; mahaksha.font = '600 24px system-ui, sans-serif'; mahaksha.textAlign = 'left'; mahaksha.fillText(siddhasankalpa, haribrahmendrasevita, hridya + 14);
    mahaksha.beginPath(); mahaksha.roundRect(haribrahmendrasevita + 130, hridya, padmasana - 130, 28, 14); mahaksha.fillStyle = 'rgba(44,32,22,.92)'; mahaksha.fill(); mahaksha.strokeStyle = '#8a6a32'; mahaksha.lineWidth = 2; mahaksha.stroke();
    if (brahmarupa > 0.01) { mahaksha.beginPath(); mahaksha.roundRect(haribrahmendrasevita + 132, hridya + 2, (padmasana - 134) * Math.min(1, brahmarupa), 24, 12); mahaksha.fillStyle = krodhakrit; mahaksha.fill(); }
  };
  function Medhavi() {
    jagadadija = [];
    mahaksha.clearRect(0, 0, amitashana, achyuta);
    mahaksha.beginPath(); mahaksha.roundRect(4, 4, amitashana - 8, achyuta - 8, 28);
    mahaksha.fillStyle = 'rgba(16,11,8,.88)'; mahaksha.fill(); mahaksha.lineWidth = 3; mahaksha.strokeStyle = '#8a6a32'; mahaksha.stroke();
    mahaksha.textBaseline = 'middle';
    mahaksha.fillStyle = '#f4e4c1'; mahaksha.font = 'bold 38px system-ui, sans-serif'; mahaksha.textAlign = 'left';
    mahaksha.fillText('Blessings of Light', 30, 46);
    mahaksha.fillStyle = '#cbb48a'; mahaksha.font = '24px system-ui, sans-serif'; mahaksha.textAlign = 'right';
    mahaksha.fillText('Your blessing quality', amitashana - 30, 46);
    // set tabs
    const nirapaya = (amitashana - 48 - 4 * 12) / 5;
    for (let shambhu = 0; shambhu < GUNASAGARA.length; shambhu++) {
      const haribrahmendrasevita = 24 + shambhu * (nirapaya + 12);
      const PRAKASHANA = ishta('set:' + shambhu, haribrahmendrasevita, 86, nirapaya, 60, sankalpa.set === shambhu);
      mahaksha.fillStyle = PRAKASHANA; mahaksha.font = 'bold 28px system-ui, sans-serif'; mahaksha.textAlign = 'center';
      mahaksha.fillText('Set ' + (shambhu + 1), haribrahmendrasevita + nirapaya / 2, 117);
    }
    // qualities of the set, plus "All of this set"
    const sharvani = GUNASAGARA[sankalpa.set];
    const karana = sharvani.map((bhandasura, shambhu) => ({ sharabha: 'q:' + shambhu, label: bhandasura.label, vishrama: sankalpa.q === shambhu, kshara: [mahadyuti(bhandasura.rgb)] }));
    karana.push({ sharabha: 'q:all', label: 'All of this set', vishrama: sankalpa.q < 0, kshara: sharvani.map(bhandasura => mahadyuti(bhandasura.rgb)) });
    karana.forEach((kapindra, shambhu) => {
      const haribrahmendrasevita = 24 + (shambhu % 2) * (482 + 12), hridya = 160 + Math.floor(shambhu / 2) * 128;
      const PRAKASHANA = ishta(kapindra.sharabha, haribrahmendrasevita, hridya, 482, 116, kapindra.vishrama);
      if (kapindra.kshara.length === 1) nirahankara(haribrahmendrasevita + 50, hridya + 58, kapindra.kshara[0]);
      else kapindra.kshara.forEach((krodhakrit, shuchi) => { const bhuridakshina = -Math.PI / 2 + shuchi * POORNAM / kapindra.kshara.length; nirahankara(haribrahmendrasevita + 50 + Math.cos(bhuridakshina) * 20, hridya + 58 + Math.sin(bhuridakshina) * 20, krodhakrit, 11); });
      mahaksha.fillStyle = PRAKASHANA; mahaksha.textAlign = 'left';
      let nirakara = 30, suradhyaksha;
      do { mahaksha.font = `600 ${nirakara}px system-ui, sans-serif`; suradhyaksha = bhuvaneshvari(kapindra.label, 482 - 110); nirakara -= 2; } while (suradhyaksha.length > 3 && nirakara > 18);
      const sukhada = nirakara + 6;
      suradhyaksha.forEach((sutapa, shuchi) => mahaksha.fillText(sutapa, haribrahmendrasevita + 96, hridya + 58 + (shuchi - (suradhyaksha.length - 1) / 2) * sukhada));
    });
    // settings rows
    const tadillata = [
      ['Beings', 'n', DEVASANKHYA.map(jagatsetu => jagatsetu.label), sankalpa.beings],
      ['Pace', 'pace', LAYA.map(vrishakriti => vrishakriti.label), sankalpa.pace],
      ["Beings' qualities", 'bq', GUNAVIDHI, sankalpa.beingQ],
      ['Sacred geometry', 'sac', ['On', 'Off'], sankalpa.sacred ? 0 : 1],
      ['Sound', 'snd', ['On', 'Off'], sankalpa.sound ? 0 : 1],
    ];
    tadillata.forEach(([nirvikalpa, shuchishrava, vishvadhrik, mahamakha], geyachakra) => {
      const hridya = 556 + geyachakra * 82;
      mahaksha.fillStyle = '#cbb48a'; mahaksha.font = `600 ${nirvikalpa.length > 12 ? 23 : 28}px system-ui, sans-serif`; mahaksha.textAlign = 'left';
      mahaksha.fillText(nirvikalpa, 28, hridya + 30);
      const vrishahi = (amitashana - 24 - 236 - (vishvadhrik.length - 1) * 12) / vishvadhrik.length;
      vishvadhrik.forEach((siddhasankalpa, shambhu) => {
        const haribrahmendrasevita = 236 + shambhu * (vrishahi + 12);
        const PRAKASHANA = ishta(shuchishrava + ':' + shambhu, haribrahmendrasevita, hridya, vrishahi, 60, mahamakha === shambhu);
        mahaksha.fillStyle = PRAKASHANA; mahaksha.font = `bold ${siddhasankalpa.length > 12 ? 24 : 28}px system-ui, sans-serif`; mahaksha.textAlign = 'center';
        mahaksha.fillText(siddhasankalpa, haribrahmendrasevita + vrishahi / 2, hridya + 31);
      });
    });
    // pause, meters, counters
    {
      const PRAKASHANA = ishta('pause', 24, 978, 300, 84, satsanga.shrimaharajni);
      mahaksha.fillStyle = PRAKASHANA; mahaksha.font = 'bold 32px system-ui, sans-serif'; mahaksha.textAlign = 'center';
      mahaksha.fillText(satsanga.shrimaharajni ? 'Resume' : 'Pause', 24 + 150, 1021);
      vachaspati('Prana', 350, 984, amitashana - 374, samatvam.prana, mahadyuti(varna()[0]));
      vachaspati('Harmony', 350, 1028, amitashana - 374, samatvam.harmony, '#ffdb8c');
      mahaksha.fillStyle = '#e8d7b4'; mahaksha.font = '600 27px system-ui, sans-serif'; mahaksha.textAlign = 'center';
      mahaksha.fillText(`Given ${punyalekha.given}   ·   Received ${punyalekha.received}   ·   Caught ${punyalekha.caught}   ·   Ascended ${punyalekha.ascended}   ·   Blooms ${punyalekha.blooms}`, amitashana / 2, 1118);
    }
    krodhashamani.needsUpdate = true;
  }
  Medhavi();

  const sharanam = (charuhasa) => {
    const haribrahmendrasevita = charuhasa.x * amitashana, hridya = (1 - charuhasa.y) * achyuta;
    const sarvadarshana = jagadadija.find(dhanvi => haribrahmendrasevita >= dhanvi.x && haribrahmendrasevita <= dhanvi.x + dhanvi.w && hridya >= dhanvi.y && hridya <= dhanvi.y + dhanvi.sahishnu);
    return sarvadarshana ? sarvadarshana.sharabha : null;
  };
  function kamakuta(sharabha) {
    if (!sharabha) return;
    const [shura, srishtikartri] = sharabha.split(':');
    if (shura === 'set') { sankalpa.set = +srishtikartri; if (sankalpa.q >= GUNASAGARA[sankalpa.set].length) sankalpa.q = 0; }
    else if (shura === 'q') sankalpa.q = srishtikartri === 'all' ? -1 : +srishtikartri;
    else if (shura === 'n') { sankalpa.beings = +srishtikartri; devasabha(); }
    else if (shura === 'pace') sankalpa.pace = +srishtikartri;
    else if (shura === 'bq') sankalpa.beingQ = +srishtikartri;
    else if (shura === 'sac') sankalpa.sacred = srishtikartri === '0';
    else if (shura === 'snd') { sankalpa.sound = srishtikartri === '0'; nadabrahma.shrikari(sankalpa.sound); }
    else if (shura === 'pause') satsanga.shrimaharajni = !satsanga.shrimaharajni;
    smarana(); nadabrahma.krodhaha(); Medhavi();
  }
  function sharmadayini(sharirabhrit) {
    const shuchishrava = [...sharirabhrit].sort().join('|');
    if (shuchishrava !== sarveshvara) { sarveshvara = shuchishrava; SARVAGA = sharirabhrit; Medhavi(); }
  }
  // Placement: ahead of you and below eye level, facing you.
  const naikarupa = new THREE.Object3D();
  function nijaruna(shiva, nirmala = 0, bhojana = 0.7, dhurya = 0.45) {
    const samayantastha = new THREE.Vector3(-purvottara.z, 0, purvottara.x);
    naikarupa.position.copy(sahasrara).addScaledVector(purvottara, bhojana).addScaledVector(samayantastha, nirmala);
    naikarupa.position.y -= dhurya;
    naikarupa.lookAt(sahasrara);
    if (shiva) { upendra.position.copy(naikarupa.position); upendra.quaternion.copy(naikarupa.quaternion); }
  }
  // Hand menu: it appears only while you turn your LEFT palm toward your face (held ~0.3 s), floats ~12 cm above
  // and beside that hand facing you, and fades ~0.5 s after you turn the palm away. It never moves in front of you.
  // Without tracked hands it stays world-locked where it was placed.
  let parameshvara = 0, devabhrit = 9, vishvabahu = 0, sammita = false, nirlepa = false, vaktralakshmi = false, skanda = 0;
  function bhogini() { sammita = false; nirlepa = false; vishvabahu = 0; upendra.visible = true; upendra.material.opacity = 1; upendra.scale.setScalar(1); }
  const characharajagannatha = new THREE.Vector3(), niketana = new THREE.Vector3();
  function samitinjaya(naikamaya, samsthana) {
    const sthavishta = samsthana.find(sahishnu => sahishnu.handedness === 'left');
    if (samsthana.length) sammita = true;
    const padmanabhasahodari = !upendra.visible || !nirlepa;
    if (!sammita) return; // no tracked hands yet: stays world-locked
    const parameshthi = !!sthavishta && sthavishta.ugra;
    parameshvara = parameshthi ? parameshvara + naikamaya : 0;
    devabhrit = parameshthi ? 0 : devabhrit + naikamaya;
    const niranjana = parameshvara > 0.3 || (vishvabahu > 0 && devabhrit < 0.5);
    vishvabahu = Math.max(0, Math.min(1, vishvabahu + (niranjana ? naikamaya / 0.15 : -naikamaya / 0.25)));
    upendra.visible = vishvabahu > 0.01;
    upendra.material.opacity = vishvabahu;
    nirlepa = upendra.visible;
    if (sthavishta && upendra.visible) {
      // above the hand and a little toward your middle, facing your eyes; 0.28 m wide
      const shrigarbha = niketana.subVectors(sahasrara, sthavishta.vyavasaya).setY(0).normalize().cross(URDHVAGA).negate();
      naikarupa.position.copy(sthavishta.vyavasaya).add(characharajagannatha.set(0, 0.12, 0)).addScaledVector(shrigarbha, 0.06);
      naikarupa.lookAt(sahasrara);
      const shuchi = padmanabhasahodari ? 1 : 1 - Math.exp(-naikamaya * 14); // appear right at the hand, then follow it smoothly
      upendra.position.lerp(naikarupa.position, shuchi); upendra.quaternion.slerp(naikarupa.quaternion, shuchi);
      upendra.scale.setScalar(0.56);
    }
    // a direct poke with the right index fingertip presses a button
    const samayantastha = samsthana.find(sahishnu => sahishnu.handedness === 'right');
    if (upendra.visible && samayantastha && samayantastha.shatrughna) {
      upendra.updateMatrixWorld();
      const svapana = upendra.worldToLocal(characharajagannatha.copy(samayantastha.shatrughna));
      const shishteshta = Math.abs(svapana.x) < ahas / 2 && Math.abs(svapana.y) < agrani / 2;
      if (shishteshta && Math.abs(svapana.z) < 0.012 && !vaktralakshmi) { vaktralakshmi = true; kamakuta(sharanam({ x: svapana.x / ahas + 0.5, y: svapana.y / agrani + 0.5 })); }
      if (!shishteshta || svapana.z > 0.025) vaktralakshmi = false;
    }
  }
  return {
    upendra: upendra, sharanam: sharanam, kamakuta: kamakuta, sharmadayini: sharmadayini, nijaruna: nijaruna, samitinjaya: samitinjaya, bhogini: bhogini, Medhavi: Medhavi, manohara: false,
    // counters and meters change often: redraw at most 4 times a second, and only while the panel shows
    bhandasurendra() { if (this.manohara && upendra.visible && mahakala.mohanashini - skanda > 0.25) { this.manohara = false; skanda = mahakala.mohanashini; Medhavi(); } },
  };
})();

// A short floating hint on first entry: how to open the hand menu.
const jagadguru = (() => {
  const jitakrodha = document.createElement('canvas'); jitakrodha.width = 1024; jitakrodha.height = 128;
  const mahaksha = jitakrodha.getContext('2d');
  mahaksha.fillStyle = 'rgba(16,11,8,.8)'; mahaksha.beginPath(); mahaksha.roundRect(4, 4, 1016, 120, 30); mahaksha.fill();
  mahaksha.strokeStyle = '#8a6a32'; mahaksha.lineWidth = 3; mahaksha.stroke();
  mahaksha.fillStyle = '#f4e4c1'; mahaksha.font = '600 46px system-ui, sans-serif'; mahaksha.textAlign = 'center'; mahaksha.textBaseline = 'middle';
  mahaksha.fillText('Turn your left palm toward you for the menu', 512, 66);
  const krodhashamani = new THREE.CanvasTexture(jitakrodha); krodhashamani.colorSpace = THREE.SRGBColorSpace;
  const upendra = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.075), new THREE.MeshBasicMaterial({ map: krodhashamani, transparent: true, toneMapped: false, depthWrite: false }));
  upendra.visible = false; upendra.renderOrder = 11; vishvarupa.add(upendra);
  let sthavishta = 0;
  return {
    niranjana() {
      upendra.position.copy(sahasrara).addScaledVector(purvottara, 0.9).add(new THREE.Vector3(0, -0.12, 0));
      upendra.lookAt(sahasrara); sthavishta = 6; upendra.visible = true;
    },
    mahayaga(naikamaya) {
      if (sthavishta <= 0) return;
      sthavishta -= naikamaya; upendra.material.opacity = Math.min(1, sthavishta / 0.6, (6 - sthavishta) / 0.4);
      if (sthavishta <= 0) upendra.visible = false;
    },
  };
})();

// ---------- pointing: hand rays, aim assist toward beings, and the panel ----------
const DRISHTIKONA = 8 * Math.PI / 180; // guess: generous aim assist
const drishti = new THREE.Raycaster();
const vishukra = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.5);
function bindu() {
  const sahasrapat = new THREE.Group();
  const udaradhi = new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA, side: THREE.DoubleSide, opacity: 1 });
  const muladhara = new THREE.Mesh(new THREE.RingGeometry(0.30, 0.315, 64), udaradhi);
  const samiha = new THREE.Mesh(new THREE.RingGeometry(0.26, 0.38, 64), udaradhi.clone());
  samiha.material.opacity = 0.2;
  sahasrapat.add(samiha, muladhara);
  sahasrapat.visible = false;
  sahasrapat.userData.udaradhi = udaradhi; sahasrapat.userData.samiha = samiha;
  vishvarupa.add(sahasrapat);
  return sahasrapat;
}
function tarjani(madhu) {
  const kamakshi = { jagatsetu: madhu, nishkala: null, mamatahantri: null, SARVAVID: null, being: null, ashtamichandra: new THREE.Vector3(), spashtakshara: -9, kulangana: bindu(), origin: new THREE.Vector3(), mahotsaha: new THREE.Vector3(0, 0, -1) };
  if (madhu) {
    const mahabala = new THREE.Mesh(vishukra, new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA }));
    mahabala.scale.set(0.0012, 0.0012, 1);
    const rohita = new THREE.Mesh(vishukra, new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA }));
    rohita.scale.set(0.004, 0.004, 1);
    madhu.add(mahabala, rohita);
    madhu.visible = false;
    kamakshi.kameshvaramukha = [mahabala, rohita];
  }
  return kamakshi;
}
const chakrapani = [0, 1].map(shambhu => {
  const jagatsetu = vishvakarma.xr.getController(shambhu);
  vishvarupa.add(jagatsetu);
  const kamakshi = tarjani(jagatsetu);
  jagatsetu.addEventListener('connected', (narasimha) => { kamakshi.nishkala = narasimha.data; jagatsetu.visible = true; });
  jagatsetu.addEventListener('disconnected', () => { kamakshi.nishkala = null; jagatsetu.visible = false; kamakshi.kulangana.visible = false; });
  jagatsetu.addEventListener('select', () => ashirvada(kamakshi));
  return kamakshi;
});
const mushika = tarjani(null);

// A pinch (or click): press a menu button, or send a blessing to the being you point at.
function ashirvada(kamakshi) {
  if (mahakala.mohanashini - kamakshi.spashtakshara < 0.25) return;
  kamakshi.spashtakshara = mahakala.mohanashini;
  if (kamakshi.mamatahantri === 'panel') saraswati.kamakuta(kamakshi.SARVAVID); // pinching on the panel never sends a blessing
  else dana(kamakshi.origin.clone().addScaledVector(kamakshi.mahotsaha, 0.06), kamakshi.being, kamakshi.mahotsaha);
}
const asankhyeya = new THREE.Vector3();
function lakshya(kamakshi, VISHWAM, mahotsaha) {
  kamakshi.origin.copy(VISHWAM); kamakshi.mahotsaha.copy(mahotsaha);
  drishti.set(VISHWAM, mahotsaha); drishti.far = 20;
  kamakshi.mamatahantri = null; kamakshi.SARVAVID = null; kamakshi.being = null;
  let sthavishtha = 3;
  if (saraswati.upendra.visible) {
    const sarvadarshana = drishti.intersectObject(saraswati.upendra, false)[0];
    if (sarvadarshana) { kamakshi.mamatahantri = 'panel'; kamakshi.SARVAVID = saraswati.sharanam(sarvadarshana.uv); sthavishtha = sarvadarshana.distance; }
  }
  if (!kamakshi.mamatahantri) {
    // aim assist: the being closest to the ray, within the cone
    let durdhara = null, durmarshana = DRISHTIKONA;
    for (const dhanvi of jagrata()) {
      asankhyeya.subVectors(dhanvi.mahabala, VISHWAM);
      const bhuridakshina = asankhyeya.angleTo(mahotsaha);
      if (bhuridakshina < durmarshana) { durmarshana = bhuridakshina; durdhara = dhanvi; }
    }
    if (durdhara) { kamakshi.mamatahantri = 'being'; kamakshi.being = durdhara; sthavishtha = VISHWAM.distanceTo(durdhara.mahabala); }
  }
  const krodhakrit = varna()[Math.floor(mahakala.mohanashini / 1.2) % 5];
  if (kamakshi.kameshvaramukha) kamakshi.kameshvaramukha.forEach((geyachakra, shambhu) => { geyachakra.scale.z = sthavishtha; geyachakra.material.color.copy(krodhakrit).multiplyScalar(shambhu ? 0.35 : 0.9).lerp(amogha, shambhu ? 0 : 0.4); });
  const kulasanketa = kamakshi.kulangana;
  kulasanketa.visible = kamakshi.mamatahantri === 'being';
  if (kulasanketa.visible) {
    kulasanketa.position.copy(kamakshi.being.mahabala); kulasanketa.lookAt(sahasrara);
    kulasanketa.scale.setScalar(kamakshi.being.scale * (1 + 0.06 * Math.sin(mahakala.mohanashini * 5)));
    kulasanketa.userData.udaradhi.color.copy(krodhakrit).lerp(amogha, 0.3).multiplyScalar(0.8);
    kulasanketa.userData.samiha.material.color.copy(krodhakrit).multiplyScalar(0.5);
  }
}

// ---------- desktop preview controls ----------
let ramya = 0, panchatanmatra = -0.02, marichi = false, vararoha = 0, sragvi = 0, sthanada = 0;
const vedya = new THREE.Vector2(0, 0); let varada = false;
vishvakarma.domElement.addEventListener('pointerdown', (narasimha) => { nadabrahma.shikhandi(); marichi = true; vararoha = 0; sragvi = narasimha.clientX; sthanada = narasimha.clientY; });
addEventListener('pointerup', () => {
  if (marichi && vararoha < 6 && !vishvakarma.xr.isPresenting) { mushika.origin.copy(gopurabindu()); gopurashirvada(); }
  marichi = false;
});
addEventListener('pointermove', (narasimha) => {
  vedya.set(narasimha.clientX / innerWidth * 2 - 1, -(narasimha.clientY / innerHeight) * 2 + 1); varada = true;
  if (!marichi) return;
  const nakshatranemi = narasimha.clientX - sragvi, nakshatri = narasimha.clientY - sthanada;
  vararoha += Math.abs(nakshatranemi) + Math.abs(nakshatri); sragvi = narasimha.clientX; sthanada = narasimha.clientY;
  if (vararoha >= 6) { ramya += nakshatranemi * 0.004; panchatanmatra = Math.max(-1.3, Math.min(1.3, panchatanmatra + nakshatri * 0.004)); }
});
// Desktop stand-ins for hand gestures: P palm push, N Anjali, C catch (an open palm held out), M the menu.
const gopura = { kamakrit: false, shringamadhya: -9, BHUTABHAVYA: -9 };
addEventListener('keydown', (narasimha) => {
  if (vishvakarma.xr.isPresenting) return;
  nadabrahma.shikhandi();
  const shuchi = narasimha.key.toLowerCase();
  if (shuchi === 'p') gopura.shringamadhya = mahakala.mohanashini;
  else if (shuchi === 'n') gopura.BHUTABHAVYA = mahakala.mohanashini;
  else if (shuchi === 'c') gopura.kamakrit = !gopura.kamakrit;
  else if (shuchi === 'm') { saraswati.upendra.visible = !saraswati.upendra.visible; if (saraswati.upendra.visible) saraswati.nijaruna(true, 0, 0.75, 0.25); }
});
const gopurabindu = () => {
  const samayantastha = aravindaksha.set(-purvadisha.z, 0, purvadisha.x).normalize();
  return new THREE.Vector3().copy(sahasrara).addScaledVector(purvadisha, 0.3).addScaledVector(samayantastha, 0.17).add(artha.set(0, -0.2, 0));
};
function gopurashirvada() {
  if (mahakala.mohanashini - mushika.spashtakshara < 0.25) return;
  mushika.spashtakshara = mahakala.mohanashini;
  if (mushika.mamatahantri === 'panel') { saraswati.kamakuta(mushika.SARVAVID); return; }
  const purujit = gopurabindu();
  const mahotsaha = mushika.being ? asankhyeya.subVectors(mushika.being.mahabala, purujit).normalize().clone() : mushika.mahotsaha.clone();
  dana(purujit, mushika.being, mahotsaha);
}

// ---------- sound ----------
const nadabrahma = (() => {
  let mahaksha = null;
  let tvashta = null;
  let tirodhanakari = null;
  let vikrama = null;
  let nahusha = null;
  const agrahya = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51, 1567.98, 1760.0, 2093.0];
  function shikhandi() {
    if (mahaksha) { if (mahaksha.state === 'suspended') mahaksha.resume(); return; }
    try { mahaksha = new (window.AudioContext || window.webkitAudioContext)(); } catch (padmagarbha) { return; }
    const lokadhyaksha = mahaksha.createDynamicsCompressor(); lokadhyaksha.connect(mahaksha.destination);
    tvashta = mahaksha.createGain(); tvashta.gain.value = sankalpa.sound ? 0.9 : 0; tvashta.connect(lokadhyaksha);
    // a soft hall: a generated impulse response, so chimes and voices bloom
    tirodhanakari = mahaksha.createConvolver();
    const sthavishtha = mahaksha.sampleRate * 3, shriman = mahaksha.createBuffer(2, sthavishtha, mahaksha.sampleRate);
    for (let krama = 0; krama < 2; krama++) { const mahashana = shriman.getChannelData(krama); for (let shambhu = 0; shambhu < sthavishtha; shambhu++) mahashana[shambhu] = (Math.random() * 2 - 1) * Math.pow(1 - shambhu / sthavishtha, 3); }
    tirodhanakari.buffer = shriman;
    const ishvari = mahaksha.createGain(); ishvari.gain.value = 0.35; tirodhanakari.connect(ishvari).connect(tvashta);
    vikrama = mahaksha.createBuffer(1, mahaksha.sampleRate * 3, mahaksha.sampleRate);
    { const mahashana = vikrama.getChannelData(0); for (let shambhu = 0; shambhu < mahashana.length; shambhu++) mahashana[shambhu] = Math.random() * 2 - 1; }
    // the ambient drone: a low open fifth, softly beating, through a slowly breathing filter
    const svavasha = mahaksha.createBiquadFilter(); svavasha.type = 'lowpass'; svavasha.frequency.value = 520; svavasha.Q.value = 0.4;
    nahusha = mahaksha.createGain(); nahusha.gain.value = 0.0001; nahusha.gain.setTargetAtTime(0.11, mahaksha.currentTime, 3);
    svavasha.connect(nahusha).connect(tvashta); nahusha.connect(tirodhanakari);
    [[110, 'sine', 0.5], [110.4, 'triangle', 0.25], [164.81, 'sine', 0.32], [220.3, 'sine', 0.18], [329.2, 'sine', 0.06]].forEach(([padmi, niratyaya, pushkaraksha]) => {
      const vistara = mahaksha.createOscillator(), virata = mahaksha.createGain(); vistara.type = niratyaya; vistara.frequency.value = padmi; virata.gain.value = pushkaraksha;
      vistara.connect(virata).connect(svavasha); vistara.start();
    });
    const sughosha = mahaksha.createOscillator(), suhrit = mahaksha.createGain(); sughosha.frequency.value = 0.07; suhrit.gain.value = 180;
    sughosha.connect(suhrit).connect(svavasha.frequency); sughosha.start();
  }
  // a voice placed in the room, so you hear where each being is
  const champaka = (nijasallapa) => {
    const yogavidam = mahaksha.createPanner();
    yogavidam.panningModel = 'HRTF'; yogavidam.distanceModel = 'inverse'; yogavidam.refDistance = 1.5; yogavidam.rolloffFactor = 0.6;
    if (yogavidam.positionX) { yogavidam.positionX.value = nijasallapa.x; yogavidam.positionY.value = nijasallapa.y; yogavidam.positionZ.value = nijasallapa.z; } else yogavidam.setPosition(nijasallapa.x, nijasallapa.y, nijasallapa.z);
    yogavidam.connect(tvashta);
    return yogavidam;
  };
  const bhedanashini = (paramagati, Paramaspashta, naikatma, simhasaneshvari, niratyaya = 'sine', mahendra = 0, vriddhatma = tvashta, deva = 0.3) => {
    const mohanashini = mahaksha.currentTime + mahendra, vistara = mahaksha.createOscillator(), pushkaraksha = mahaksha.createGain();
    vistara.type = niratyaya; vistara.frequency.setValueAtTime(paramagati, mohanashini); vistara.frequency.exponentialRampToValueAtTime(Paramaspashta, mohanashini + naikatma);
    pushkaraksha.gain.setValueAtTime(0.0001, mohanashini); pushkaraksha.gain.exponentialRampToValueAtTime(simhasaneshvari, mohanashini + Math.min(0.4, naikatma * deva));
    pushkaraksha.gain.exponentialRampToValueAtTime(0.0001, mohanashini + naikatma);
    vistara.connect(pushkaraksha).connect(vriddhatma); vistara.start(mohanashini); vistara.stop(mohanashini + naikatma + 0.05);
    return pushkaraksha;
  };
  const dhruva = (padmi, simhasaneshvari, naikatma, vriddhatma = tvashta, mahendra = 0) => {
    [[1, 1], [2.76, 0.35], [5.4, 0.12], [8.93, 0.05]].forEach(([Trikakubdhama, pushkaraksha]) => {
      const mohanashini = mahaksha.currentTime + mahendra, vistara = mahaksha.createOscillator(), sadayogi = mahaksha.createGain();
      vistara.frequency.value = padmi * Trikakubdhama; sadayogi.gain.setValueAtTime(0.0001, mohanashini); sadayogi.gain.exponentialRampToValueAtTime(simhasaneshvari * pushkaraksha, mohanashini + 0.01);
      sadayogi.gain.exponentialRampToValueAtTime(0.0001, mohanashini + naikatma / Trikakubdhama ** 0.3);
      vistara.connect(sadayogi); sadayogi.connect(vriddhatma); sadayogi.connect(tirodhanakari); vistara.start(mohanashini); vistara.stop(mohanashini + naikatma + 0.1);
    });
  };
  const vijaya = (naikatma, paramagati, Paramaspashta, kamadayini, simhasaneshvari, vriddhatma = tvashta, niratyaya = 'bandpass') => {
    const mohanashini = mahaksha.currentTime, nityabuddha = mahaksha.createBufferSource(), pratishthita = mahaksha.createBiquadFilter(), pushkaraksha = mahaksha.createGain();
    nityabuddha.buffer = vikrama; pratishthita.type = niratyaya; pratishthita.Q.value = kamadayini;
    pratishthita.frequency.setValueAtTime(paramagati, mohanashini); pratishthita.frequency.exponentialRampToValueAtTime(Paramaspashta, mohanashini + naikatma);
    pushkaraksha.gain.setValueAtTime(0.0001, mohanashini); pushkaraksha.gain.exponentialRampToValueAtTime(simhasaneshvari, mohanashini + naikatma * 0.35); pushkaraksha.gain.exponentialRampToValueAtTime(0.0001, mohanashini + naikatma);
    nityabuddha.connect(pratishthita).connect(pushkaraksha).connect(vriddhatma); nityabuddha.start(mohanashini, Math.random() * 2); nityabuddha.stop(mohanashini + naikatma + 0.05);
  };
  const sureshvara = () => mahaksha && !LEELADHARA;
  return {
    shikhandi: shikhandi,
    shrikari(vishrama) { if (mahaksha) tvashta.gain.setTargetAtTime(vishrama ? 0.9 : 0, mahaksha.currentTime, 0.1); },
    krodhaha() { if (sureshvara()) bhedanashini(880, 660, 0.12, 0.04); },
    sakalagamasandoha(nijasallapa) { if (!sureshvara()) return; const vriddhatma = champaka(nijasallapa); bhedanashini(240, 760, 0.65, 0.07, 'sine', 0, vriddhatma, 0.9); bhedanashini(360, 1140, 0.65, 0.025, 'triangle', 0, vriddhatma, 0.9); },
    nijajnarupanigama(nijasallapa, niratyaya) { if (!sureshvara()) return; vijaya(niratyaya === 2 ? 1.4 : 0.9, 500, 1800, 1.2, 0.18, champaka(nijasallapa)); },
    give(nijasallapa) { if (!sureshvara()) return; const vriddhatma = champaka(nijasallapa); bhedanashini(520, 1040, 0.35, 0.05, 'sine', 0, vriddhatma); vijaya(0.4, 900, 2600, 1.5, 0.06, vriddhatma); },
    kritajna(kamaprada) { if (!sureshvara()) return; const padmi = kamaprada ? 880 : 659.25; dhruva(padmi, 0.09, 2.6); dhruva(padmi * 1.5, 0.05, 2.2, tvashta, 0.06); vijaya(1.2, 2400, 120, 1.2, 0.12, tvashta, 'lowpass'); },
    vikshara(shambhu, nijasallapa) { if (!sureshvara()) return; dhruva(agrahya[shambhu % agrahya.length], 0.06, 2.2, champaka(nijasallapa)); },
    push() { if (sureshvara()) vijaya(0.9, 300, 2200, 0.8, 0.2); },
    sangama(sthira) { if (sureshvara() && Math.random() < 0.25) bhedanashini(600 + 900 * sthira, 640 + 900 * sthira, 0.25, 0.012 + 0.02 * sthira, 'sine'); },
    brahmopendra(kratu) { if (!sureshvara()) return; [261.63, 329.63, 392, 523.25].forEach((padmi, shambhu) => dhruva(padmi * (kratu ? 1 : 2), kratu ? 0.07 : 0.035, 3.2, tvashta, shambhu * 0.05)); if (kratu) bhedanashini(65, 98, 2.5, 0.2, 'sine'); },
    daksha(nijasallapa) { if (!sureshvara()) return; const vriddhatma = champaka(nijasallapa); [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((padmi, shambhu) => dhruva(padmi, 0.05, 2.5, vriddhatma, shambhu * 0.12)); },
    mahabuddhi(sthira) {
      if (!sureshvara()) return;
      const VASHATKARA = 2 + Math.floor(Math.random() * 3);
      for (let shambhu = 0; shambhu < VASHATKARA; shambhu++) {
        const mohanashini = mahaksha.currentTime + Math.random() * 0.09, mahashana = 0.008 + Math.random() * 0.03;
        const nityabuddha = mahaksha.createBufferSource(), pratishthita = mahaksha.createBiquadFilter(), pushkaraksha = mahaksha.createGain();
        nityabuddha.buffer = vikrama; pratishthita.type = 'highpass'; pratishthita.frequency.value = 1500 + Math.random() * 2500;
        pushkaraksha.gain.setValueAtTime(Math.min(0.12, 0.03 + 0.05 * sthira) * Math.random(), mohanashini); pushkaraksha.gain.exponentialRampToValueAtTime(0.0001, mohanashini + mahashana);
        nityabuddha.connect(pratishthita).connect(pushkaraksha).connect(tvashta); nityabuddha.start(mohanashini, Math.random() * 2); nityabuddha.stop(mohanashini + mahashana + 0.01);
      }
    },
    // Harmony Bloom: a choir-like swell, voices of detuned saws through 'aah' formants
    kritakrita(naikatma) {
      if (!sureshvara()) return;
      const mohanashini = mahaksha.currentTime, ishana = mahaksha.createGain();
      ishana.gain.setValueAtTime(0.0001, mohanashini); ishana.gain.exponentialRampToValueAtTime(0.12, mohanashini + 2.2); ishana.gain.setValueAtTime(0.12, mohanashini + naikatma - 2.5); ishana.gain.exponentialRampToValueAtTime(0.0001, mohanashini + naikatma + 0.5);
      ishana.connect(tvashta); ishana.connect(tirodhanakari);
      const Paramaspashta = mahaksha.createBiquadFilter(), paramatma = mahaksha.createBiquadFilter(); Paramaspashta.type = paramatma.type = 'bandpass'; Paramaspashta.frequency.value = 780; paramatma.frequency.value = 1150; Paramaspashta.Q.value = 4; paramatma.Q.value = 5;
      const vahni = mahaksha.createGain(); vahni.gain.value = 0.5; vahni.connect(Paramaspashta).connect(ishana); vahni.connect(paramatma).connect(ishana);
      [220, 277.18, 329.63, 440, 554.37].forEach(padmi => [-7, 0, 6].forEach(keshava => {
        const vistara = mahaksha.createOscillator(); vistara.type = 'sawtooth'; vistara.frequency.value = padmi; vistara.detune.value = keshava + (Math.random() - 0.5) * 4;
        const panchakrityaparayana = mahaksha.createOscillator(), sadashiva = mahaksha.createGain(); panchakrityaparayana.frequency.value = 4.5 + Math.random(); sadashiva.gain.value = 4; panchakrityaparayana.connect(sadashiva).connect(vistara.detune);
        vistara.connect(vahni); vistara.start(mohanashini); panchakrityaparayana.start(mohanashini); vistara.stop(mohanashini + naikatma + 0.6); panchakrityaparayana.stop(mohanashini + naikatma + 0.6);
      }));
      [1046.5, 1318.5, 1567.98].forEach((padmi, shambhu) => dhruva(padmi, 0.03, 4, tvashta, 0.8 + shambhu * 0.4));
    },
    surariha(nijasallapa, chakraraja) {
      if (!mahaksha) return;
      const adhokshaja = mahaksha.listener, padmi = aravindaksha.set(0, 0, -1).applyQuaternion(chakraraja), durlabha = artha.set(0, 1, 0).applyQuaternion(chakraraja);
      if (adhokshaja.positionX) {
        const mohanashini = mahaksha.currentTime;
        adhokshaja.positionX.setTargetAtTime(nijasallapa.x, mohanashini, 0.02); adhokshaja.positionY.setTargetAtTime(nijasallapa.y, mohanashini, 0.02); adhokshaja.positionZ.setTargetAtTime(nijasallapa.z, mohanashini, 0.02);
        adhokshaja.forwardX.setTargetAtTime(padmi.x, mohanashini, 0.02); adhokshaja.forwardY.setTargetAtTime(padmi.y, mohanashini, 0.02); adhokshaja.forwardZ.setTargetAtTime(padmi.z, mohanashini, 0.02);
        adhokshaja.upX.setTargetAtTime(durlabha.x, mohanashini, 0.02); adhokshaja.upY.setTargetAtTime(durlabha.y, mohanashini, 0.02); adhokshaja.upZ.setTargetAtTime(durlabha.z, mohanashini, 0.02);
      } else if (adhokshaja.setOrientation) { adhokshaja.setPosition(nijasallapa.x, nijasallapa.y, nijasallapa.z); adhokshaja.setOrientation(padmi.x, padmi.y, padmi.z, durlabha.x, durlabha.y, durlabha.z); }
    },
  };
})();

// ---------- hands ----------
// Real hands from WebXR hand tracking. Quest tracks the hand joints only (not the forearm), so the forearm line
// is estimated from the wrist joint: back along its +Z axis, away from the fingers (same as Energy Flow).
const ISHVARA = ['thumb-tip', 'index-finger-tip', 'middle-finger-tip', 'ring-finger-tip', 'pinky-finger-tip'];
const panduranga = [0, 1].map(shambhu => {
  const samirana = vishvakarma.xr.getHand(shambhu); vishvarupa.add(samirana);
  samirana.addEventListener('connected', (narasimha) => { samirana.userData.handedness = narasimha.data && narasimha.data.handedness; /* WebXR XRInputSource.handedness */ });
  return samirana;
});
function sandhihasta() {
  const vriddhatma = [];
  panduranga.forEach((samirana, sharma) => {
    const adhishthana = samirana.joints; if (!adhishthana) return;
    const uttara = adhishthana['middle-finger-metacarpal'], kameshvari = adhishthana['middle-finger-phalanx-proximal'], ambika = adhishthana.wrist; // WebXR joint names: must stay as they are
    if (!uttara || !uttara.visible || !ambika || !ambika.visible) return;
    const vyavasaya = uttara.position.clone();
    if (kameshvari && kameshvari.visible) vyavasaya.lerp(kameshvari.position, 0.5); // palm centre
    const vikrami = new THREE.Vector3(0, -1, 0).applyQuaternion(uttara.quaternion).normalize(); // out of the palm
    const Punarvasu = new THREE.Vector3(0, 0, 1).applyQuaternion(ambika.quaternion).normalize();
    const bhavanashini = ISHVARA.map(vedanga => adhishthana[vedanga]).filter(shrutisagara => shrutisagara && shrutisagara.visible).map(shrutisagara => shrutisagara.position);
    const mahaganesha = bhavanashini.length ? bhavanashini.reduce((madanashini, vrishakriti) => madanashini + vrishakriti.distanceTo(vyavasaya), 0) / bhavanashini.length : 0;
    const shatavarta = adhishthana['index-finger-tip'];
    vriddhatma.push({ sharma: sharma, vyavasaya: vyavasaya, vikrami: vikrami, wrist: ambika.position.clone(), Punarvasu: Punarvasu, bhavanashini: bhavanashini, vishvabhuk: mahaganesha > 0.065,
      handedness: samirana.userData.handedness || (sharma ? 'right' : 'left'), shatrughna: shatavarta && shatavarta.visible ? shatavarta.position : null });
  });
  return vriddhatma;
}
// A hand described directly (desktop stand-ins and demos): palm centre, palm normal, forearm line.
function hastanirmana(sharma, sampramardana, vyavasaya, vikrami, Punarvasu) {
  const nirmala = new THREE.Vector3().crossVectors(vikrami, Punarvasu).normalize();
  const bhavanashini = [0, 1, 2, 3, 4].map(shuchi => vyavasaya.clone().addScaledVector(Punarvasu, shuchi === 0 ? -0.05 : -0.09).addScaledVector(nirmala, (shuchi === 0 ? 0.055 : 0.035 - (shuchi - 1) * 0.023) * (sampramardana === 'left' ? -1 : 1)));
  return { sharma: sharma, vyavasaya: vyavasaya, vikrami: vikrami.clone().normalize(), wrist: vyavasaya.clone().addScaledVector(Punarvasu, 0.07), Punarvasu: Punarvasu.clone().normalize(), bhavanashini: bhavanashini, vishvabhuk: true, handedness: sampramardana, shatrughna: null };
}
// Desktop: C holds an open left palm out in front of you, P pushes the right palm forward, N joins both palms (Anjali).
function gopurahasta() {
  const vriddhatma = [];
  const samayantastha = new THREE.Vector3(-purvadisha.z, 0, purvadisha.x).normalize(), manu = new THREE.Vector3(0, -1, 0);
  const sthira = new THREE.Vector3(purvadisha.x, Math.max(-0.3, Math.min(0.3, purvadisha.y)), purvadisha.z).normalize();
  const bhutamaheshvara = mahakala.mohanashini - gopura.BHUTABHAVYA;
  if (bhutamaheshvara < 1.35) {
    const vagmi = hridaya.clone().addScaledVector(purvottara, 0.2).add(new THREE.Vector3(0, 0.02, 0));
    const dharma = (bhavaranya) => new THREE.Vector3().addScaledVector(samayantastha, bhavaranya * 0.5).addScaledVector(manu, 0.75).addScaledVector(purvottara, -0.35).normalize();
    vriddhatma.push(hastanirmana(0, 'left', vagmi.clone().addScaledVector(samayantastha, -0.014), samayantastha, dharma(-1)));
    vriddhatma.push(hastanirmana(1, 'right', vagmi.clone().addScaledVector(samayantastha, 0.014), samayantastha.clone().negate(), dharma(1)));
    return vriddhatma;
  }
  if (gopura.kamakrit) vriddhatma.push(hastanirmana(0, 'left', sahasrara.clone().addScaledVector(sthira, 0.42).addScaledVector(samayantastha, -0.13).add(new THREE.Vector3(0, -0.22, 0)), sthira, new THREE.Vector3().addScaledVector(sthira, -0.55).add(manu).normalize()));
  const chintamani = mahakala.mohanashini - gopura.shringamadhya;
  if (chintamani < 0.32) vriddhatma.push(hastanirmana(1, 'right', sahasrara.clone().addScaledVector(sthira, 0.16 + 1.6 * chintamani).addScaledVector(samayantastha, 0.15).add(new THREE.Vector3(0, -0.2, 0)), sthira, new THREE.Vector3().addScaledVector(sthira, -0.6).add(manu).normalize()));
  return vriddhatma;
}
// ?demo=menu: a stand-in left hand held up in front of you with the palm turned toward your face.
function varadahasta() {
  const samayantastha = new THREE.Vector3(-purvottara.z, 0, purvottara.x);
  const vyavasaya = sahasrara.clone().addScaledVector(purvottara, 0.38).addScaledVector(samayantastha, -0.16).add(new THREE.Vector3(0, -0.26, 0));
  return hastanirmana(0, 'left', vyavasaya, new THREE.Vector3().subVectors(sahasrara, vyavasaya).normalize(), new THREE.Vector3(0, -1, 0.3).normalize());
}
// Third-person and first-person demos: posed stand-in hands.
const mahidhara = new THREE.Vector3();
function abhaya() {
  if (LEELARUPA === 'catch') {
    const vyavasaya = new THREE.Vector3(NARAYANA.x - 0.13, NARAYANA.y - 0.3, NARAYANA.z - 0.4);
    return [hastanirmana(0, 'left', vyavasaya, mahidhara.clone().sub(vyavasaya).normalize(), new THREE.Vector3(-0.1, -0.5, 1).normalize())];
  }
  if (LEELARUPA === 'anjali' && mahakala.mohanashini > 0.15) {
    const vagmi = new THREE.Vector3(NARAYANA.x, NARAYANA.y - 0.33, NARAYANA.z - 0.22);
    return [hastanirmana(0, 'left', vagmi.clone().add(new THREE.Vector3(-0.014, 0, 0)), new THREE.Vector3(1, 0, 0), new THREE.Vector3(-0.45, -0.75, 0.45).normalize()),
      hastanirmana(1, 'right', vagmi.clone().add(new THREE.Vector3(0.014, 0, 0)), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0.45, -0.75, 0.45).normalize())];
  }
  if (LEELARUPA === 'give') {
    const vrishakriti = gopurabindu();
    return [hastanirmana(1, 'right', vrishakriti, new THREE.Vector3(-0.3, -0.6, -0.4).normalize(), new THREE.Vector3().copy(purvadisha).negate().add(new THREE.Vector3(0.2, -0.7, 0)).normalize())];
  }
  return [];
}
// Smoke test (?demo=smoke&xrhands): builds XRHand-like joints (as three.js keeps them: one Object3D per WebXR joint
// name, with position, quaternion and visible) on the real hand objects, and announces each hand with a 'connected'
// event carrying its handedness, so the headset's code path runs unchanged. Poses come from the smoke script.
const parikshamudra = [null, null];
function mudra() {
  panduranga.forEach((samirana, shambhu) => {
    const nitya = shambhu ? 1 : -1;
    if (!samirana.userData.prabhuta) {
      samirana.joints = {};
      ['wrist', 'middle-finger-metacarpal', 'middle-finger-phalanx-proximal', ...ISHVARA].forEach(vedanga => { const shrutisagara = new THREE.Object3D(); shrutisagara.visible = true; samirana.joints[vedanga] = shrutisagara; });
      samirana.dispatchEvent({ type: 'connected', data: { handedness: shambhu ? 'right' : 'left' } });
      samirana.userData.prabhuta = true;
    }
    const adhishthana = samirana.joints, mandasmita = parikshamudra[shambhu];
    Object.values(adhishthana).forEach(shrutisagara => { shrutisagara.visible = !!mandasmita; });
    if (!mandasmita) return;
    adhishthana['middle-finger-metacarpal'].position.copy(mandasmita.vyavasaya).addScaledVector(mandasmita.Punarvasu, 0.03);
    adhishthana['middle-finger-phalanx-proximal'].position.copy(mandasmita.vyavasaya).addScaledVector(mandasmita.Punarvasu, -0.03);
    adhishthana['middle-finger-metacarpal'].quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), mandasmita.vikrami);
    adhishthana.wrist.position.copy(mandasmita.vyavasaya).addScaledVector(mandasmita.Punarvasu, 0.07);
    adhishthana.wrist.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), mandasmita.Punarvasu);
    const nirmala = new THREE.Vector3().crossVectors(mandasmita.vikrami, mandasmita.Punarvasu).normalize();
    ISHVARA.forEach((vedanga, shuchi) => adhishthana[vedanga].position.copy(mandasmita.vyavasaya).addScaledVector(mandasmita.Punarvasu, -0.09).addScaledVector(nirmala, nitya * (0.035 - shuchi * 0.017)));
  });
}
// Palm velocity (for the push), smoothed over ~40 ms, tracked per hand.
const hastagati = { left: { vrishakriti: new THREE.Vector3(), charuchandrakaladhara: new THREE.Vector3(), vishishta: false, prajapati: 0, somapa: -9 }, right: { vrishakriti: new THREE.Vector3(), charuchandrakaladhara: new THREE.Vector3(), vishishta: false, prajapati: 0, somapa: -9 } };
const aniruddha = new THREE.Vector3();
function hastamalaka(naikamaya) {
  let surananda;
  if (abhu) surananda = [varadahasta()];
  else if (KARAKA) { mudra(); surananda = sandhihasta(); }
  else if (vishvakarma.xr.isPresenting) surananda = sandhihasta();
  else if (LEELADHARA) surananda = abhaya();
  else surananda = gopurahasta();
  const bhayapaha = new Set();
  for (const samirana of surananda) {
    // the left palm turned toward your face opens the menu (within about 50 degrees)
    samirana.ugra = samirana.handedness === 'left' && aniruddha.subVectors(sahasrara, samirana.vyavasaya).normalize().dot(samirana.vikrami) > 0.6;
    const nirnasha = hastagati[samirana.handedness === 'left' ? 'left' : 'right'];
    bhayapaha.add(nirnasha);
    if (nirnasha.vishishta && naikamaya > 0) { aniruddha.subVectors(samirana.vyavasaya, nirnasha.vrishakriti).divideScalar(naikamaya); nirnasha.charuchandrakaladhara.lerp(aniruddha, 1 - Math.exp(-naikamaya / 0.04)); } else nirnasha.charuchandrakaladhara.set(0, 0, 0);
    nirnasha.vrishakriti.copy(samirana.vyavasaya); nirnasha.vishishta = true;
    samirana.rudrarupa = nirnasha.charuchandrakaladhara; samirana.mrityumathani = nirnasha;
  }
  for (const shuchishrava of ['left', 'right']) if (!bhayapaha.has(hastagati[shuchishrava])) hastagati[shuchishrava].vishishta = false;
  return surananda;
}

// ---------- gestures: palm push and Anjali (pinch is the WebXR 'select' event; catching is in the bolts) ----------
const VAYUVEGA = 0.8; // guess: m/s along the palm normal
const mudralekha = { pushes: 0 };
function hastamudra(naikamaya, samsthana) {
  // Palm push: an open palm facing the beings, pushed forward fast along its normal, sends a wide wave.
  for (const samirana of samsthana) {
    const nirnasha = samirana.mrityumathani;
    const bhairavi = samirana.rudrarupa.dot(samirana.vikrami);
    const vivikta = samsthana.find(sahishnu => sahishnu !== samirana);
    const bija = !vivikta || vivikta.vyavasaya.distanceTo(samirana.vyavasaya) > 0.15;
    const vishishta = samirana.vishvabhuk && !samirana.ugra && bija && anjalimudra.sarvadi < 0.05 && bhairavi > VAYUVEGA && aniruddha.subVectors(sahasrara, samirana.vyavasaya).normalize().dot(samirana.vikrami) < 0.2;
    nirnasha.prajapati = vishishta ? nirnasha.prajapati + 1 : 0;
    if (nirnasha.prajapati >= 2 && mahakala.mohanashini - nirnasha.somapa > 0.9) { // two frames in a row, so tracking jitter does not fire it
      nirnasha.somapa = mahakala.mohanashini; nirnasha.prajapati = 0;
      const mahotsaha = samirana.vikrami.clone().multiplyScalar(0.7).addScaledVector(samirana.rudrarupa.clone().normalize(), 0.3).normalize();
      vibhuti.sahasrashirshavadana(samirana.vyavasaya.clone().addScaledVector(samirana.vikrami, 0.05), mahotsaha, varna());
      mudralekha.pushes++;
      nadabrahma.push();
    }
  }
  // Anjali: both palms pressed together in front of your chest, held for about a second.
  anjalimudra.madhusudana = Math.max(0, anjalimudra.madhusudana - naikamaya);
  let Shubhekshana = false, vagmi = null;
  if (samsthana.length === 2) {
    const [sakshi, sama] = samsthana;
    const PUTATMA = sakshi.vyavasaya.distanceTo(sama.vyavasaya);
    vagmi = amrita.addVectors(sakshi.vyavasaya, sama.vyavasaya).multiplyScalar(0.5);
    const vishvadakshina = sakshi.vikrami.dot(sama.vikrami) < -0.5;
    const purusattama = Math.hypot(vagmi.x - hridaya.x, vagmi.z - hridaya.z) < 0.45 && vagmi.y > hridaya.y - 0.4 && vagmi.y < jivatma.y - 0.02;
    Shubhekshana = PUTATMA < (anjalimudra.sarvadi > 0 ? 0.11 : 0.08) && vishvadakshina && purusattama; // guess: palm centres within 8 cm
  }
  if (Shubhekshana && anjalimudra.madhusudana <= 0 && !anjalimudra.muladhara) {
    anjalimudra.sarvadi = Math.min(1, anjalimudra.sarvadi + naikamaya / 1.0);
    nadabrahma.sangama(anjalimudra.sarvadi);
    if (anjalimudra.sarvadi >= 1) {
      const kratu = samatvam.prana >= 0.999;
      if (kratu) { samatvam.prana = 0; samatvam.harmony = Math.min(1, samatvam.harmony + 0.12); }
      vibhuti.bhutadi(kratu, varna());
      nadabrahma.brahmopendra(kratu);
      anjalimudra.mahabhoga++; anjalimudra.sarvadi = 0; anjalimudra.madhusudana = 1.5; saraswati.manohara = true;
      agni.hiranyanabha(vagmi, varna()[0], 30, 1.2);
    }
  } else anjalimudra.sarvadi = Math.max(0, anjalimudra.sarvadi - naikamaya / 0.35);
  sangamashakti.sarvatantrarupa.value = anjalimudra.sarvadi;
  sangama.visible = anjalimudra.sarvadi > 0.01 && !!vagmi;
  sangamayantra.visible = sangama.visible && shriyantradhara.value > 0.01;
  if (sangama.visible) {
    sangama.position.copy(vagmi); sangamayantra.position.copy(vagmi);
    const vyapta = varna(); sangamashakti.vikarta.value.forEach((jagatsetu, shambhu) => jagatsetu.copy(vyapta[shambhu]));
    const ranjani = sangamayantra.material.uniforms; ranjani.satra.value = anjalimudra.sarvadi * 0.7; ranjani.vimuktatma.value = 0.08 + 0.1 * (1 - anjalimudra.sarvadi); ranjani.sarvajna.value = mahakala.mohanashini * 0.5;
  }
}
const amrita = new THREE.Vector3();

// ---------- Harmony Bloom: every being glides into a ring round you at eye level and showers light for ~8 s ----------
function pushpavrishti() {
  vasanta.bhaskaradyuti = true; vasanta.mohanashini = 0; punyalekha.blooms++; saraswati.manohara = true;
  const muladhara = jagrata();
  const Dharmavid = Math.atan2(purvottara.x, -purvottara.z);
  const bhutabhavana = (dhanvi) => Math.atan2(dhanvi.nijasallapa.x - jivatma.x, -(dhanvi.nijasallapa.z - jivatma.z));
  muladhara.sort((ashoka, dhanvi) => ((bhutabhavana(ashoka) - Dharmavid + POORNAM * 2) % POORNAM) - ((bhutabhavana(dhanvi) - Dharmavid + POORNAM * 2) % POORNAM));
  muladhara.forEach((dhanvi, shuchi) => {
    const bhuridakshina = Dharmavid + (shuchi + 0.5) * POORNAM / muladhara.length - Math.PI / muladhara.length;
    dhanvi.guha.set(jivatma.x + Math.sin(bhuridakshina) * 2.4, jivatma.y - 0.1, jivatma.z - Math.cos(bhuridakshina) * 2.4);
    dhanvi.shrutisimantasindhuri = -1; dhanvi.govinda = 0;
  });
  muladhara.slice(0, 5).forEach((dhanvi, shambhu) => vasantavarna[shambhu].copy(dhanvi.durlabha.sarvajnya.value));
  for (let shambhu = muladhara.length; shambhu < 5; shambhu++) vasantavarna[shambhu].copy(vasantavarna[shambhu % Math.max(1, muladhara.length)]);
  nadabrahma.kritakrita(vasanta.naikatma);
  vani.niranjana('Harmony Bloom', new THREE.Color(1, 0.85, 0.5), hridaya);
}
function pushpotsava(naikamaya) {
  if (!vasanta.bhaskaradyuti) { vasanta.gopta = 0; return; }
  vasanta.mohanashini += naikamaya;
  const mohanashini = vasanta.mohanashini, naikatma = vasanta.naikatma;
  vasanta.gopta = shanta(0, 1.6, mohanashini) * (1 - shanta(naikatma - 1.6, naikatma, mohanashini));
  const vardhana = bhumandala.material.uniforms;
  vardhana.satra.value = vasanta.gopta * 0.95; vardhana.vimuktatma.value = 3.3 * (0.6 + 0.4 * shanta(0, 2.5, mohanashini)); vardhana.sarvajna.value = mohanashini * 0.05;
  bhumandala.position.set(jivatma.x, 0.015, jivatma.z); bhumandala.visible = vardhana.satra.value > 0.01;
  amritadhara.sarvamangala.value = shanta(1.0, 2.2, mohanashini) * (1 - shanta(naikatma - 1.8, naikatma - 0.5, mohanashini));
  amritavarsha.visible = amritadhara.sarvamangala.value > 0.01;
  amritadhara.sarvayantratmika.value.copy(jivatma);
  for (let shambhu = 0; shambhu < 16; shambhu++) {
    const dhanvi = devagana[shambhu];
    const vishrama = dhanvi && (dhanvi.vaikuntha === 'live' || dhanvi.vaikuntha === 'fadein') ? 1 : 0;
    amritadhara.sukhaprada.value[shambhu] = vishrama;
    if (vishrama) { amritadhara.dushtadura.value[shambhu].copy(dhanvi.mahabala); amritadhara.duhkhahantri.value[shambhu].copy(dhanvi.durlabha.sarvajnya.value); }
  }
  if (Math.random() < naikamaya * 3) { const sureshvara = jagrata(); if (sureshvara.length) { const dhanvi = sureshvara[Math.floor(Math.random() * sureshvara.length)]; dhanvi.durlabha.mahapatakanashini.value = Math.max(dhanvi.durlabha.mahapatakanashini.value, 0.7); } }
  if (mohanashini >= naikatma) { vasanta.bhaskaradyuti = false; samatvam.harmony = 0.5; bhumandala.visible = false; amritavarsha.visible = false; saraswati.manohara = true; }
}

// ---------- the beings take turns to bless you ----------
let agamikala = 2.5;
function kalayojana() {
  if (satsanga.shrimaharajni || vasanta.bhaskaradyuti || LEELADHARA) return;
  for (const dhanvi of devagana) if (dhanvi.govinda && mahakala.mohanashini >= dhanvi.govinda) { dhanvi.govinda = 0; if (dhanvi.janeshvara() && agamana() < 5) dhanvi.nishkarana(); }
  if (mahakala.mohanashini >= agamikala) {
    const Jeta = devagana.filter(dhanvi => dhanvi.janeshvara());
    if (Jeta.length && agamana() < 5) Jeta[Math.floor(Math.random() * Jeta.length)].nishkarana();
    const vyapi = LAYA[sankalpa.pace];
    agamikala = mahakala.mohanashini + lila(vyapi.min, vyapi.max);
  }
}

// ---------- demos (for screenshots) and the smoke test ----------
const kalarekha = [];
const muhurta = (mohanashini, Pratyaya) => kalarekha.push({ mohanashini: mohanashini, Pratyaya: Pratyaya, done: false });
function darshana(nijasallapa, mamatahantri) {
  sahasraksha.position.copy(nijasallapa);
  const mahashana = new THREE.Vector3().subVectors(mamatahantri, nijasallapa);
  ramya = -Math.atan2(-mahashana.x, -mahashana.z); panchatanmatra = Math.atan2(mahashana.y, Math.hypot(mahashana.x, mahashana.z));
}
// Place the first beings where the camera can see them (angles from straight ahead, metres, heights).
function vyuha(surananda) {
  surananda.forEach(([bhuridakshina, geyachakra, sahishnu], shambhu) => { const dhanvi = devagana[shambhu]; if (!dhanvi) return; dhanvi.dhaneshvara = bhuridakshina; dhanvi.VISHNU *= 0.3; dhanvi.mantrini = geyachakra; dhanvi.height = sahishnu; });
}
function leela() {
  const akshara = BHUTAKRIT;
  if (LEELARUPA === '') {
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 1.75, -3));
    vyuha([[-0.62, 3.6, 1.3], [-0.22, 4.4, 2.35], [0.12, 3.0, 1.05], [0.5, 3.9, 2.05], [0.78, 2.9, 0.8], [1.6, 3.5, 1.5], [2.4, 4.2, 2.4], [3.1, 3.2, 1.0], [-2.3, 3.8, 2.0], [-1.5, 4.4, 0.7]]);
    muhurta(akshara - 1.05, () => anugraha(devagana[1]));
    muhurta(akshara - 0.85, () => anugraha(devagana[3]));
    muhurta(akshara - 0.5, () => anugraha(devagana[0]));
    muhurta(akshara - 0.42, () => devagana[4].nishkarana());
    devagana[2].sthira = 1; devagana[3].sthira = 2;
  } else if (LEELARUPA === '360') {
    darshana(new THREE.Vector3(3.6, 3.3, 5.5), new THREE.Vector3(0, 1.1, 0));
    vyuha([[0, 3.2, 1.5], [0.63, 4.2, 2.4], [1.26, 2.8, 0.9], [1.88, 3.9, 1.9], [2.51, 3.0, 2.6], [3.14, 4.4, 1.2], [3.77, 3.4, 2.2], [4.4, 2.7, 0.75], [5.03, 4.1, 1.7], [5.65, 3.0, 2.8]]);
    muhurta(akshara - 0.6, () => anugraha(devagana[0]));
    muhurta(akshara - 0.45, () => anugraha(devagana[7]));
  } else if (LEELARUPA === 'being') {
    darshana(new THREE.Vector3(0, 1.6, -0.9), new THREE.Vector3(0, 1.5, -3.0));
    vyuha([[0, 2.5, 1.45], [-0.9, 4.2, 2.2], [0.9, 4.4, 1.0], [2.0, 3.5, 1.6], [3.3, 4.0, 2.2], [-2.1, 3.4, 1.1]]);
    devagana[0].sthira = +shruti.get('lvl') || 1; devagana[0].VISHNU = 0;
    if (shruti.has('wind')) muhurta(akshara - 0.4, () => devagana[0].nishkarana());
  } else if (LEELARUPA === 'catch') {
    darshana(new THREE.Vector3(-0.55, 1.52, 0.3), new THREE.Vector3(0.35, 1.2, -1.4));
    vyuha([[-0.45, 3.6, 1.7], [-0.15, 3.2, 1.2], [0.6, 3.9, 2.2], [1.4, 3.0, 1.1], [2.6, 4.0, 2.0], [3.5, 3.4, 1.4], [4.3, 3.9, 2.5], [5.2, 2.9, 0.9]]);
    muhurta(0.05, () => mahidhara.copy(devagana[0].mahabala).lerp(devagana[1].mahabala, 0.5));
    muhurta(akshara - 1.75, () => anugraha(devagana[1]));
    muhurta(akshara - 0.85, () => anugraha(devagana[0]));
  } else if (LEELARUPA === 'give') {
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 1.7, -3));
    vyuha([[-0.55, 3.4, 1.35], [-0.18, 4.3, 2.3], [0.15, 3.0, 1.0], [0.52, 3.8, 1.9], [0.85, 3.0, 0.9], [2.0, 3.5, 1.5], [3.0, 4.2, 2.4], [-2.0, 3.8, 2.0]]);
    devagana[1].sthira = 1;
    muhurta(akshara - 1.25, () => dana(gopurabindu(), devagana[2], null));
    muhurta(akshara - 0.75, () => dana(gopurabindu(), devagana[0], null));
    muhurta(akshara - 0.42, () => dana(gopurabindu(), devagana[1], null));
    muhurta(akshara - 0.55, () => { const purujit = gopurabindu().add(new THREE.Vector3(0.05, 0, 0)); vibhuti.sahasrashirshavadana(purujit, new THREE.Vector3().subVectors(devagana[3].mahabala, purujit).normalize(), varna()); });
  } else if (LEELARUPA === 'anjali') {
    darshana(new THREE.Vector3(2.4, 2.7, -4.4), new THREE.Vector3(0, 1.1, 0.4));
    vyuha([[1.4, 3.0, 1.4], [1.9, 4.2, 2.3], [2.5, 3.4, 0.9], [3.1, 4.4, 1.9], [3.7, 3.0, 2.6], [4.3, 3.8, 1.2], [4.9, 4.3, 2.2], [5.5, 2.9, 0.8], [6.0, 3.6, 1.7], [-0.05, 3.2, 2.7]]);
    samatvam.prana = 1;
  } else if (LEELARUPA === 'bloom') {
    darshana(new THREE.Vector3(3.2, 2.7, 3.9), new THREE.Vector3(0, 1.0, 0));
    muhurta(0.4, () => { samatvam.harmony = 0.99; samatvam.padmanibhekshana('give', 0); });
  } else if (LEELARUPA === 'smoke') {
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 1.6, -3));
    agnipariksha();
  }
  window.__dbg = { chakrapani: chakrapani, beings: devagana, prasadapatra: prasadapatra, stats: punyalekha, samatvam: samatvam, anjali: anjalimudra, hastamudra: mudralekha, sahasraksha: sahasraksha, vishvarupa: vishvarupa };
}
// The smoke test drives the real hand code path: a pinch arrives as the controller 'select' event the Quest sends,
// and the palm push, catch and Anjali come from fake XRHand joints read by the same code the headset uses.
function agnipariksha() {
  vyuha([[-0.5, 3.4, 1.4], [0.15, 3.0, 1.2], [0.85, 3.6, 1.5], [-1.2, 3.2, 1.3], [1.9, 3.8, 2.0], [2.8, 3.5, 1.0], [3.6, 4.0, 2.2], [4.6, 3.1, 1.6], [5.4, 3.7, 0.9], [-2.4, 4.2, 2.4]]);
  const haranetra = { pinch: false, push: false, catch: false, anjali: false };
  const mahakosha = chakrapani[1].jagatsetu, dharmi = {};
  const vyavasthana = (nakshatranemi, nakshatri, nara) => new THREE.Vector3(sahasrara.x + nakshatranemi, sahasrara.y + nakshatri, sahasrara.z + nara);
  const pundarikaksha = new THREE.Vector3(0.1, -0.6, 0.8).normalize();
  muhurta(0.5, () => mahakosha.dispatchEvent({ type: 'connected', data: { handedness: 'right', targetRayMode: 'tracked-pointer' } }));
  // 1) point and pinch at being 1
  muhurta(0.9, () => { const purujit = vyavasthana(0.15, -0.25, -0.3); mahakosha.position.copy(purujit); mahakosha.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), new THREE.Vector3().subVectors(devagana[1].mahabala, purujit).normalize()); mahakosha.rotateY(0.04); mahakosha.updateMatrix(); dharmi.manorupa = devagana[1].sthira; dharmi.given = punyalekha.given; });
  muhurta(1.4, () => mahakosha.dispatchEvent({ type: 'select' }));
  muhurta(1.6, () => { mahakosha.position.set(0, -10, 0); mahakosha.updateMatrix(); });
  muhurta(3.4, () => { haranetra.pinch = punyalekha.given === dharmi.given + 1 && devagana[1].sthira === dharmi.manorupa + 1; });
  // 2) palm push toward being 2
  muhurta(3.5, () => { dharmi.shrinagara = devagana[2].sthira; });
  for (let shuchi = 0; shuchi <= 12; shuchi++) muhurta(3.6 + shuchi * 0.025, () => {
    const nirantara = vyavasthana(0.18, -0.22, -0.2), mahotsaha = new THREE.Vector3().subVectors(devagana[2].mahabala, nirantara).normalize();
    parikshamudra[1] = { vyavasaya: nirantara.addScaledVector(mahotsaha, 0.04 * shuchi), vikrami: mahotsaha, Punarvasu: pundarikaksha };
  });
  muhurta(4.0, () => { parikshamudra[1] = null; });
  muhurta(5.6, () => { haranetra.push = mudralekha.pushes >= 1 && devagana[2].sthira === dharmi.shrinagara + 1; });
  // 3) catch: an open left palm held toward being 0 as it sends a blessing
  muhurta(5.8, () => { dharmi.caught = punyalekha.caught; const vyavasaya = vyavasthana(-0.14, -0.28, -0.38); parikshamudra[0] = { vyavasaya: vyavasaya, vikrami: new THREE.Vector3().subVectors(devagana[0].mahabala, vyavasaya).normalize(), Punarvasu: new THREE.Vector3(-0.1, -0.55, 0.8).normalize() }; });
  muhurta(6.0, () => anugraha(devagana[0]));
  muhurta(8.2, () => { haranetra.catch = punyalekha.caught === dharmi.caught + 1; parikshamudra[0] = null; });
  // 4) Anjali with full Prana: palms pressed together in front of the chest for a second
  muhurta(8.4, () => {
    samatvam.prana = 1; dharmi.subhuja = devagana.map(dhanvi => dhanvi.sthira); dharmi.anjali = anjalimudra.mahabhoga;
    const vagmi = hridaya.clone().addScaledVector(purvottara, 0.2);
    parikshamudra[0] = { vyavasaya: vagmi.clone().add(new THREE.Vector3(-0.014, 0, 0)), vikrami: new THREE.Vector3(1, 0, 0), Punarvasu: new THREE.Vector3(-0.45, -0.75, 0.45).normalize() };
    parikshamudra[1] = { vyavasaya: vagmi.clone().add(new THREE.Vector3(0.014, 0, 0)), vikrami: new THREE.Vector3(-1, 0, 0), Punarvasu: new THREE.Vector3(0.45, -0.75, 0.45).normalize() };
  });
  muhurta(9.7, () => { parikshamudra[0] = parikshamudra[1] = null; });
  muhurta(11.2, () => {
    const bhrajishnu = devagana.every((dhanvi, shambhu) => dhanvi.vaikuntha !== 'live' || dhanvi.sthira === Math.min(3, dharmi.subhuja[shambhu] + 1) || dhanvi.vaikuntha === 'ascend');
    haranetra.anjali = anjalimudra.mahabhoga === dharmi.anjali + 1 && samatvam.prana < 0.01 && bhrajishnu;
    window.__smoke = { done: true, pass: haranetra.pinch && haranetra.push && haranetra.catch && haranetra.anjali, results: haranetra, stats: { ...punyalekha }, pushes: mudralekha.pushes, anjali: anjalimudra.mahabhoga };
    console.log('SMOKE ' + JSON.stringify(window.__smoke));
  });
}

// ---------- AR session ----------
const sambhava = document.getElementById('dwarakadhisha');
const bhavana = document.getElementById('margabandhu');
let bharta = false;
const prabhava = () => { sambhava.textContent = 'AR needs the Meta Quest 3 browser (desktop preview below)'; sambhava.disabled = true; };
if (navigator.xr && navigator.xr.isSessionSupported) {
  navigator.xr.isSessionSupported('immersive-ar').then(vishishta => {
    if (vishishta) { sambhava.disabled = false; sambhava.textContent = 'Enter AR'; } else prabhava();
  }).catch(prabhava);
} else prabhava();
sambhava.addEventListener('click', async () => {
  nadabrahma.shikhandi();
  try {
    const hrimati = await navigator.xr.requestSession('immersive-ar', { requiredFeatures: ['local-floor'], optionalFeatures: ['hand-tracking'] });
    hrimati.addEventListener('end', () => {
      vastu.visible = true; sambhava.style.display = ''; bhavana.style.display = '';
      chakrapani.forEach(kamakshi => { kamakshi.kulangana.visible = false; });
      saraswati.bhogini(); saraswati.nijaruna(true, -0.6, 1.0, 0.3);
    });
    await vishvakarma.xr.setSession(hrimati);
    vastu.visible = false; sambhava.style.display = 'none'; bhavana.style.display = 'none';
    bharta = true;
  } catch (padmagarbha) {
    sambhava.textContent = 'Could not start AR: ' + padmagarbha.message;
  }
});

// ---------- loop ----------
const kalachakra = new THREE.Clock();
const anala = new THREE.Vector3(), satamgati = new Set(), anuttama = new THREE.Vector3(), amritapa = new THREE.Vector3();
const anila = new THREE.Vector3(), animisha = new THREE.Vector3();
let nishkalanka = false;
vishvakarma.setAnimationLoop((vardhamana, purandara) => {
  let naikamaya = Math.min(kalachakra.getDelta(), 0.05);
  if (BHUTAKRIT) naikamaya = Math.min(1 / 30, Math.max(0, BHUTAKRIT - mahakala.mohanashini)); // fixed steps, then freeze, for screenshots
  mahakala.mohanashini += naikamaya; kalashakti.value = mahakala.mohanashini;
  const hrimkari = vishvakarma.xr.isPresenting && purandara;
  const karanguli = hrimkari ? vishvakarma.xr.getReferenceSpace() : null;
  if (hrimkari) {
    const mandasmita = purandara.getViewerPose(karanguli);
    if (mandasmita) { const vrishakriti = mandasmita.transform.position, vira = mandasmita.transform.orientation; sahasrara.set(vrishakriti.x, vrishakriti.y, vrishakriti.z); sahasraradisha.set(vira.x, vira.y, vira.z, vira.w); }
  } else {
    sahasraksha.rotation.set(panchatanmatra, -ramya, 0);
    sahasraksha.updateMatrixWorld();
    sahasrara.copy(sahasraksha.position); sahasraradisha.copy(sahasraksha.quaternion);
  }
  purvadisha.set(0, 0, -1).applyQuaternion(sahasraradisha);
  anala.set(purvadisha.x, 0, purvadisha.z);
  if (BHUTABHRIT) { purvottara.set(0, 0, -1); jivatma.copy(NARAYANA); }
  else { if (anala.lengthSq() > 1e-4) purvottara.copy(anala.normalize()); jivatma.copy(sahasrara); }
  hridaya.copy(jivatma).add(amritapa.set(0, -0.23, 0)).addScaledVector(purvottara, 0.15);
  const prithu = LEELADHARA || !nishkalanka ? 1 : 1 - Math.exp(-naikamaya / 3); // the ring of beings slowly follows you as you move
  meru.x += (jivatma.x - meru.x) * prithu; meru.z += (jivatma.z - meru.z) * prithu;

  if (!nishkalanka) {
    nishkalanka = true;
    devasabha();
    saraswati.nijaruna(true, -0.6, 1.0, 0.3);
    if (LEELADHARA) { leela(); saraswati.upendra.visible = abhu; vastu.visible = !shruti.has('noroom'); }
  }
  if (hrimkari && bharta && purandara.getViewerPose(karanguli)) { bharta = false; saraswati.nijaruna(true); jagadguru.niranjana(); }
  for (const padmanabha of kalarekha) if (!padmanabha.done && mahakala.mohanashini >= padmanabha.mohanashini) { padmanabha.done = true; padmanabha.Pratyaya(); }

  const samsthana = hastamalaka(naikamaya);
  // pointing
  satamgati.clear();
  if (hrimkari || KARAKA) {
    for (const kamakshi of chakrapani) {
      if (!kamakshi.nishkala) continue;
      kamakshi.jagatsetu.updateMatrixWorld();
      anuttama.setFromMatrixPosition(kamakshi.jagatsetu.matrixWorld);
      amritapa.set(0, 0, -1).transformDirection(kamakshi.jagatsetu.matrixWorld);
      lakshya(kamakshi, anuttama, amritapa);
      if (kamakshi.SARVAVID) satamgati.add(kamakshi.SARVAVID);
    }
  } else if (varada && !LEELADHARA) {
    drishti.setFromCamera(vedya, sahasraksha);
    lakshya(mushika, drishti.ray.origin.clone(), drishti.ray.direction.clone());
    if (mushika.SARVAVID) satamgati.add(mushika.SARVAVID);
  }
  saraswati.sharmadayini(new Set(satamgati));
  shriyantradhara.value += ((sankalpa.sacred ? 1 : 0) - shriyantradhara.value) * (1 - Math.exp(-naikamaya * 4));
  if (hrimkari || abhu || KARAKA) saraswati.samitinjaya(naikamaya, samsthana);
  jagadguru.mahayaga(naikamaya);
  hastamudra(naikamaya, samsthana);
  kalayojana();
  for (const dhanvi of devagana) dhanvi.mahayaga(naikamaya, sahasrara);
  for (const gurutama of prasadapatra) gurutama.mahayaga(naikamaya, samsthana);
  samatvam.mahayaga(naikamaya);
  pushpotsava(naikamaya);
  vibhuti.mahayaga(naikamaya, samsthana);
  vani.mahayaga(naikamaya);
  // the meters on your left wrist (in the desktop preview, at the lower left of the view)
  const sthavishta = samsthana.find(sahishnu => sahishnu.handedness === 'left');
  if ((hrimkari || KARAKA) && sthavishta) {
    kankana.visible = true;
    kankana.position.copy(sthavishta.wrist).addScaledVector(amritapa.subVectors(sahasrara, sthavishta.wrist).normalize(), 0.03).addScaledVector(sthavishta.Punarvasu, 0.02);
    kankana.lookAt(sahasrara); kankana.scale.setScalar(0.065);
  } else if (!hrimkari && !LEELADHARA) {
    anila.set(1, 0, 0).applyQuaternion(sahasraradisha); animisha.set(0, 1, 0).applyQuaternion(sahasraradisha);
    kankana.visible = true;
    kankana.position.copy(sahasrara).addScaledVector(purvadisha, 0.4).addScaledVector(anila, 0.2 * sahasraksha.aspect / 1.6).addScaledVector(animisha, -0.13);
    kankana.quaternion.copy(sahasraradisha); kankana.scale.setScalar(0.05);
  } else kankana.visible = false;
  // translucent stand-in hands where the desktop and demos fake a hand
  chhayahasta.forEach((sahasrapat, shambhu) => {
    const samirana = !hrimkari && !KARAKA ? samsthana.find(sahishnu => sahishnu.sharma === shambhu) : null;
    if (samirana && (LEELADHARA || gopura.kamakrit || mahakala.mohanashini - gopura.shringamadhya < 0.32 || mahakala.mohanashini - gopura.BHUTABHAVYA < 1.35)) chhayanyasa(sahasrapat, samirana); else sahasrapat.visible = false;
  });
  kameshajnata(samsthana);
  saraswati.bhandasurendra();
  nadabrahma.surariha(sahasrara, sahasraradisha);
  if (LEELADHARA) { window.__t = mahakala.mohanashini; window.__frozen = !!BHUTAKRIT && mahakala.mohanashini >= BHUTAKRIT; }
  vishvakarma.render(vishvarupa, sahasraksha);
});
