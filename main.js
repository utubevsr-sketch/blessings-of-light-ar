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
//   GUNASAGARA               (QUALITY_SETS)  the 5 sets of 24 qualities and colours, from Puja VR
//   SARVAGUNA                (ALL_QUALITIES)  all 24 qualities in one list
//   sankalpa                 (state)  the menu choices, saved in localStorage (its keys are unchanged)
//   smarana                  (save)  saves the menu choices
//   shruti                   (params)  URL parameters
//   gunanidhi                (selectedQualities)  your chosen quality, or the whole set
//   varna                    (palette)  the five-colour palette that tints every layer of a blessing
//   tejovardhana             (liftColor)  lifts dark colours and strengthens pale ones so their glow reads over a bright room
//   vishvakarma              (renderer)  the WebGL renderer (the divine architect)
//   vishvarupa               (scene)  the scene: the whole visible universe
//   sahasraksha              (camera)  the camera (Indra, the thousand-eyed)
//   mahakala                 (clock)  app time in seconds
//   kalachakra               (frameClock)  the frame clock
//   kalashakti               (timeU)  the shared time uniform of every shader
//   POORNAM                  (TAU)  2 pi, the full circle
//   HIRANYAGARBHA            (PHI)  the golden ratio
//   SURYANARAYANA            (GOLDEN_ANGLE)  the golden angle, 137.5 degrees
//   URDHVAGA                 (UP)  the up vector
//   shanta                   (smooth)  smoothstep in JavaScript
//   lila                     (rand)  a random number in a range
//   PRAKASHA                 (GLOW_BLEND)  additive-light blending that keeps the passthrough visible
//   MAYA                     (NOISE)  GLSL hash, value noise and fractal noise
//   VARNAPATHA               (PALETTE_GLSL)  GLSL palette uniform and colour pickers
//   varnadhara               (colorAt)  palette colour by key (GLSL)
//   varnamala                (colorSmooth)  blended palette colour (GLSL)
//   mayapati                 (fbm2)  2D fractal noise (GLSL)
//   mayadhisha               (fbm3)  3D fractal noise for the roiling plasma (GLSL)
//   mayini                   (noise2)  2D value noise (GLSL)
//   mahamayini               (noise3)  3D value noise (GLSL)
//   chitragupta              (hash12)  hash (GLSL)
//   chitrasena               (hash13)  3D hash (GLSL)
//   bhutatma                 (quadGeo)  the shared 2x2 quad
//   mangalamparam            (streakQuad)  the shared streak quad (tail to head)
//   bahurupa                 (makeInstanced)  builds an instanced geometry from a base shape
//   LEELADHARA               (DEMO)  ?demo is on
//   LEELARUPA                (DEMO_MODE)  which ?demo view
//   KARAKA                   (FAKE_XR)  fake XRHand joints are on (smoke test)
//   BHUTAKRIT                (STOP_AT)  demo time at which everything freezes, for screenshots
//   BHUTABHRIT               (THIRD_PERSON)  the demo looks at a stand-in person from outside
//   satsanga                 (session)  session state (paused)
//   punyalekha               (stats)  the session counters: given, received, caught, ascended, blooms
//   Deva                     (Being)  one being of light (class)
//   devagana                 (beings)  all the beings
//   DEVASANKHYA              (BEING_COUNTS)  Few / Many / Multitude
//   LAYA                     (PACES)  Calm / Lively: seconds between blessings
//   GUNAVIDHI                (BEING_QUALITY_MODES)  the beings' qualities: same set as yours, or all sets
//   devarupa                 (presenceMat)  the radiant figure: core, flowing body, arms, robe of light and halo ring
//   kosha                    (shellMat)  the layered fresnel shells (sheaths) round a being
//   pakshaveda               (veilGeo)  instanced geometry of the six veils
//   garudapaksha             (veilMat)  the breathing veils of light like wings or petals
//   taraveda                 (moteGeo)  instanced geometry of the orbiting motes
//   tarakagana               (moteMat)  motes of light orbiting a being
//   YANTRAMALA               (BEING_YANTRAS)  the yantras drawn faintly behind the beings
//   koshaveda                (shellGeo)  the sphere behind each shell
//   meru                     (beingCentre)  the centre the beings circle: you, followed slowly
//   dikpala                  (pickAzimuth)  picks a direction away from the other beings
//   devasabha                (syncBeingCount)  adds or sends away beings to match the menu
//   jagrata                  (liveBeings)  the beings that are present
//   Prasada                  (Bolt)  one blessing in flight: a ball of plasma with its trail (class)
//   prasadapatra             (bolts)  the pool of 12 blessings
//   VARADANA                 (BOLT_TYPES)  kinds of blessing: orb, spiral, sphere, comet
//   DVADASHA                 (BOLT_CAP)  most blessings in flight at once (12)
//   MARGA                    (BOLT_PATH)  GLSL path of a blessing: curve, tangent, spiral orbs
//   gunavahana               (typeForQuality)  which kind of blessing a quality sends
//   tejoveda                 (plasmaGeo)  instanced quads of the plasma balls (three for a spiral)
//   tejasbindu               (plasmaMat)  the plasma ball: churning sphere, white-hot core, turbulent corona
//   ketuveda                 (trailGeo)  instanced streaks of the trail
//   dhumaketu                (trailMat)  the motion-blur trail (a comet tail)
//   mukta                    (freeBolt)  a free blessing from the pool
//   agamana                  (incomingCount)  how many blessings are coming to you
//   anugraha                 (fireIncoming)  a being sends you a blessing
//   pratigrahana             (receiveBlessing)  a blessing reaches your heart or your palm
//   dana                     (giveBolt)  you send a blessing to a being (or along your ray)
//   svasti                   (blessArrives)  your blessing reaches a being
//   sahasrara                (head)  your eyes, as rendered
//   sahasraradisha           (headQ)  head orientation
//   jivatma                  (userHead)  the person the beings bless: you, or the stand-in
//   purvadisha               (fwd)  where you look
//   purvottara               (fwdYaw)  where you face, level
//   hridaya                  (chest)  the heart target, 23 cm below and 15 cm in front of the eyes
//   NARAYANA                 (PHANTOM)  the stand-in person's eyes in third-person demos
//   vajra                    (lightning)  the lightning system
//   agni                     (sparks)  sparks and embers
//   prabhu                   (dotTex)  soft dot texture
//   tejomaya                 (aura)  the aura shells round your body
//   tejasvi                  (auraMat)  aura shell material
//   tejasvini                (auraU)  aura uniforms
//   surya                    (flare)  head-locked flare and bloom overlay, capped so passthrough stays visible
//   vani                     (labels)  floating words such as 'Joy received'
//   vidyut                   (flashes)  flashes where your blessings strike a being
//   tarangini                (waves)  the palm-push waves
//   TARANGA                  (WAVE_CONE)  half-angle of the palm-push wave (30 degrees)
//   sangama                  (gather)  the ring of light gathering at joined palms
//   sangamashakti            (gatherU)  its uniforms
//   sangamayantra            (gatherYantra)  the Seed of Life at joined palms
//   digvijaya                (radialRing)  the Anjali's 360-degree ring of blessing
//   digvijayashakti          (ringU)  its uniforms
//   digbrahma                (ringMetatron)  Metatron's Cube spreading with a charged Anjali
//   anjalimudra              (anjali)  Anjali state: hold, cooldown, ring, count
//   utkranti                 (ascensions)  ascension columns and starbursts
//   vasanta                  (bloom)  the Harmony Bloom state
//   vasantavarna             (bloomColors)  its colours, from the beings
//   bhumandala               (floorMandala)  the Flower of Life / Sri Yantra mandala on the floor
//   amritavarsha             (shower)  the shower of light from every being in the Bloom
//   amritadhara              (showerU)  its uniforms
//   hastajyoti               (handGlow)  glow on fingertips and palms
//   kripa                    (handMotes)  orbs drawn into the palm and up the forearm
//   hrishikeshayantra        (heartYantra)  Anahata at the heart when a blessing enters
//   karayantra               (palmYantras)  a Sri Yantra on a palm that catches a blessing
//   kankana                  (wristMeters)  Prana and Harmony arcs on the left wrist
//   kankanashakti            (wristU)  their uniforms
//   chhayahasta              (standInHands)  translucent stand-in hands (desktop demos)
//   chhayanyasa              (poseStandIn)  poses a stand-in hand
//   purusha                  (phantomBody)  translucent stand-in body for third-person demos
//   vibhuti                  (effects)  the effects director: impacts, catches, waves, rings, lightning, flare
//   shriyantradhara          (sacredU)  sacred geometry on/off fade
//   chitrakara               (lineTex)  draws a line texture once
//   lalita                   (sriYantraTex)  Sri Yantra line texture
//   hrishikesha              (anahataTex)  Anahata (heart) mandala texture
//   brahma                   (metatronTex)  Metatron's Cube / Fruit of Life texture
//   kartikeya                (seedTex)  Seed of Life and hexagram texture
//   shripura                 (bloomTex)  the Harmony Bloom floor mandala texture
//   tripura                  (drawSriYantra)  draws the Sri Yantra
//   pushpitavana             (drawFlowerOfLife)  draws the Flower of Life
//   SHRICHAKRA               (SACRED_FRAG)  GLSL glow of the sacred line textures
//   yantreshvari             (sacredMat)  material for a sacred texture on a quad
//   vastu                    (room)  the desktop stand-in room
//   vastupurusha             (roomMat)  room grid material
//   samatvam                 (meters)  the Prana and Harmony meters
//   saraswati                (panel)  the menu panel
//   jagadguru                (menuHint)  the floating 'turn your left palm' hint
//   chakrapani               (pointers)  the two hand pointers (ray and reticle)
//   mushika                  (mouse)  the desktop mouse pointer (Ganesha's mouse)
//   lakshya                  (aim)  aims a pointer: the panel, or the being nearest the ray (aim assist)
//   DRISHTIKONA              (AIM_CONE)  aim-assist cone (8 degrees)
//   ashirvada                (onSelect)  handles a pinch
//   bindu                    (makeReticle)  builds the ring that marks the being you point at
//   tarjani                  (makePointer)  builds a pointer
//   drishti                  (raycaster)  raycaster
//   nadabrahma               (audio)  all sound
//   gopura                   (desk)  desktop stand-ins for gestures (keys P, N, C)
//   gopurahasta              (deskHands)  stand-in hands made from those keys
//   gopurabindu              (deskHandPoint)  where the desktop blessing leaves from
//   gopurashirvada           (onSelectDesk)  handles a desktop click
//   panduranga               (xrHands)  the two WebXR hands
//   hastamalaka              (readHands)  reads the hands: palm, normal, wrist, forearm, tips, velocity
//   sandhihasta              (jointHands)  hands from WebXR joints
//   hastanirmana             (makeHand)  a hand described directly (desktop and demos)
//   varadahasta              (menuDemoHand)  stand-in left palm for ?demo=menu
//   abhaya                   (demoHands)  stand-in hands for the demos
//   mudra                    (buildFakeJoints)  builds XRHand-like joints for the smoke test
//   parikshamudra            (smokePoses)  hand poses of the smoke test
//   hastagati                (handTrack)  palm velocity per hand
//   VAYUVEGA                 (PUSH_SPEED)  palm-push speed along the palm normal (0.8 m/s)
//   hastamudra               (gestures)  palm push and Anjali detection
//   mudralekha               (gestureStats)  gesture counters
//   ISHVARA                  (TIP_JOINTS)  WebXR fingertip joint names
//   pushpavrishti            (startBloom)  begins the Harmony Bloom
//   pushpotsava              (updateBloom)  runs the Harmony Bloom
//   kalayojana               (scheduleIncoming)  the beings take turns to bless you
//   agamikala                (nextFire)  when the next being blesses you
//   kalarekha                (timeline)  demo and smoke-test script
//   muhurta                  (at)  schedules a step of that script
//   darshana                 (lookFrom)  points the demo camera
//   vyuha                    (arrange)  places beings for a demo
//   leela                    (startDemo)  sets up ?demo views
//   agnipariksha             (smokeTest)  the hand-tracking smoke test
//   sambhava                 (enterBtn)  the Enter AR button
//   bhavana                  (hintEl)  the desktop hint
//   bharta                   (needPlace)  place the menu on the first AR frame
//   prabhava                 (noAR)  shows that AR is not available
//   vikarta                  (uColors)  palette uniform (5 colours)
//   vidarana                 (uTime)  time uniform
//   ijya                     (uTex)  texture uniform
//   satra                    (uAlpha)  brightness uniform of a sacred texture
//   sarvajna                 (uRot)  rotation uniform
//   sarvadarshi              (uBillboard)  faces you when set
//   vimuktatma               (uScale)  size uniform
//   mahejya                  (uSacred)  sacred geometry on/off (uniform)
//   TARPANAVIDHI             (TARPANA)  the Devas, Rishis and Pitrus of the tarpanam: Devanagari, IAST, gloss, tarpayāmi form
//   TRIVARGA                 (LINEAGES)  the three groups: Deva, Rishi, Pitru
//   GOTRANAMA                (LINEAGE_TAG)  the small group tag under a name
//   GOTRAVIDHI               (LINEAGE_MENU)  menu labels: All three / Devas / Rishis / Pitrus
//   TRIBHAGA                 (LINEAGE_MIX)  the default mix of the groups
//   UPAVARNA                 (LINEAGE_ACCENT)  each group's subtle accent colour (form only, never a blessing)
//   LOKATRAYA                (LINEAGE_BAND)  height band of each group
//   SARVATARPANA             (ANJALI_LINE)  the line shown for an Anjali to all
//   tarpanamantra            (tarpanaLine)  builds "… tarpayāmi" with sandhi
//   namajapa                 (nameCursor)  where each group is in its tarpanam order
//   DEVALIPI                 (DEVANAGARI_FONT)  font stack for Devanagari names
//   ROMALIPI                 (IAST_FONT)  font stack for IAST names
//   japaveda                 (malaGeo)  the 108 beads of a Rishi's mala
//   japamala                 (malaMat)  the turning japa mala of a Rishi
//   tilaveda                 (fallGeo)  falling sesame and water around a Pitru
//   tila                     (sesameMat)  dark sesame specks
//   jalabindu                (dropMat)  drops of water
//   lipidarshana             (hasDevanagari)  checks that a Devanagari font is present
//   namankana                (drawName)  draws a being's floating name
//   gotravarana              (pickLineage)  picks the group the mix needs most
//   namavali                 (nextName)  the next name in a group's tarpanam order
//   gotrasamskara            (syncLineage)  swaps beings when the Beings menu changes
//   prasadadata              (blessingFrom)  "Vasiṣṭha's blessing · " text
//   tarpanavakya             (offerLine)  shows a being's tarpanam line when you bless it
//
// Shader names, helpers and the rest:
//   abhu                     (DEMO_MENU)  constant
//   abrahmakitajanani        (uImp)  shader uniform
//   achyuta                  (FALL_N)  constant
//   adhishthana              (FALL_VERT)  constant
//   adhokshaja               (H)  parameter / local
//   adideva                  (J)  constant
//   aditya                   (L)  constant
//   adrishya                 (MAX)  constant
//   agrahya                  (MOTES_PER_BEING)  constant
//   agrani                   (N)  constant
//   ahas                     (PENTA)  constant
//   aja                      (PH)  parameter / local
//   ajnachakra               (ptr)  constant
//   akshara                  (PW)  parameter / local
//   akula                    (presence)  object property
//   amaraprabhu              (R)  constant, GLSL name
//   ambika                   (uSeed)  shader uniform
//   ameyatma                 (S)  constant
//   amitashana               (SHOWER_N)  constant
//   amogha                   (TRAIL_N)  constant
//   amrita                   (W)  constant
//   amritamshudbhava         (WHITE)  constant
//   amritapa                 (_anjMid)  constant
//   amrityu                  (_basisM)  constant
//   anadinidhana             (_ch)  constant
//   anagha                   (_d)  parameter / local
//   anala                    (_el)  parameter / local
//   anantajit                (_fing)  parameter / local
//   anaya                    (_flareQ)  constant
//   anila                    (_flat)  constant
//   animisha                 (_goal)  constant
//   aniruddha                (_goalOut)  constant
//   anirvinna                (_h1)  parameter / local
//   anugrahada               (uEnv)  shader uniform
//   anukula                  (_h2)  parameter / local
//   anuttama                 (_hudR)  constant
//   apamnidhi                (_hudU)  parameter / local
//   apramatta                (_inst)  constant
//   aprameya                 (_n1)  parameter / local
//   aprameyatma              (_n2)  parameter / local
//   aravindaksha             (_nameDir)  constant
//   artha                    (_o)  parameter / local
//   aruna                    (p1)  parameter / local
//   asankhyeya               (_sh)  constant
//   ashoka                   (_side)  parameter / local
//   ashtamichandra           (opts)  parameter / local
//   ashvarudha               (peak)  parameter / local
//   atindra                  (_tan)  constant
//   atindriya                (_tmp)  parameter / local
//   atmavan                  (_tmp2)  constant
//   atula                    (_tmp3)  parameter / local
//   aushadha                 (_toB)  constant
//   avartana                 (a)  constant, GLSL name
//   avijnata                 (a0)  constant
//   avyanga                  (a1)  parameter / local
//   avyaya                   (aBead)  shader attribute
//   babhru                   (aC)  shader attribute
//   bahushira                (aFall)  shader attribute
//   bhadramurti              (qual)  parameter / local
//   bhadrapriya              (qIndex)  parameter / local
//   bhagamalini              (uGrace)  shader uniform
//   bhagavati                (uGroup)  shader uniform
//   bhairavi                 (uGlow)  shader uniform
//   bhaktamanasahamsika      (y1)  parameter / local
//   bhaktasaubhagya          (qualities)  parameter / local
//   bhaktigamya              (quat)  parameter / local
//   bhaktimatkalpalatika     (waveGeo)  constant
//   bhaktipriya              (quality)  parameter / local, object property
//   bhaktivashya             (r)  parameter / local, GLSL name
//   bhandaputra              (pin)  constant
//   bhandasura               (pathAt)  GLSL name
//   bhandasurendra           (point)  object property
//   bhanu                    (aMote)  shader attribute
//   bhanumandalamadhyastha   (uGain)  shader uniform
//   bhaskaradyuti            (aOrb)  shader attribute
//   BHAVA                    (aP0)  shader attribute
//   bhavanashini             (setIndex)  parameter / local
//   bhavani                  (py2)  parameter / local
//   bhavaranya               (q)  parameter / local, GLSL name
//   bhayapaha                (r0)  parameter / local, GLSL name
//   bhedanashini             (shed)  object property
//   bhima                    (aP1)  shader attribute
//   bhogini                  (uR)  shader uniform
//   bhojana                  (aSh)  shader attribute
//   bhokta                   (aTr)  shader attribute
//   bhrajishnu               (aTr2)  shader attribute
//   BHUGARBHA                (aVeil)  shader attribute
//   bhujagottama             (acc)  parameter / local
//   bhuridakshina            (across)  constant
//   bhutabhavana             (active)  object property
//   BHUTABHAVYA              (add)  constant
//   bhutadi                  (age)  constant, object property
//   bhutamaheshvara          (ahead)  parameter / local
//   bhuvaneshvari            (uRipple)  shader uniform
//   bija                     (alive)  constant
//   bindumandalavasini       (z)  parameter / local
//   bisatantu                (py)  parameter / local
//   brahmadyanandasantati    (x0)  constant
//   brahmagranthi            (progress)  object property
//   brahmarupa               (uBOn)  shader uniform
//   brahmopendra             (pointsMat)  constant
//   brihadbhanu              (allBlessed)  constant
//   brihadrupa               (allowed)  constant
//   chakraraja               (perpN)  GLSL name
//   champaka                 (open)  GLSL name, object property
//   chandramshu              (amount)  parameter / local
//   characharajagannatha     (tilt)  GLSL name
//   charuchandrakaladhara    (thumbSide)  constant
//   charuhasa                (thumb)  object property
//   charurupa                (thread)  GLSL name
//   chaturatma               (amp)  parameter / local
//   chaturbahu               (og)  parameter / local
//   chaturbhuja              (ang)  constant, GLSL name
//   chaturdamshtra           (angOf)  constant
//   chaturvyuha              (anjaliAt)  object property
//   chidagni                 (o1)  variable
//   chidekarasarupini        (wristJ)  parameter / local
//   chinmayi                 (tongue)  GLSL name
//   chintamani               (palm)  constant, object property
//   chiti                    (worldLock)  function, object property
//   daksha                   (anjaliRelease)  object property
//   damana                   (anjaliT)  constant
//   damodara                 (apart)  constant
//   devabhrit                (arc)  function
//   devakarya                (o2)  parameter / local
//   devarshigana             (parts)  parameter / local
//   devesha                  (arcBand)  GLSL name
//   dhama                    (armL)  GLSL name
//   dhaneshvara              (armR)  GLSL name
//   dhanvi                   (armsDown)  object property
//   dharanidhara             (arrived)  object property
//   dharma                   (asc)  constant
//   dharmadharma             (trailPos)  GLSL name
//   Dharmadhyaksha           (ascend)  object property
//   dharmagup                (ascendT)  object property
//   dharmakrit               (ascension)  object property
//   Dharmavid                (attack)  parameter / local
//   dharmayupa               (awayFor)  parameter / local
//   dharmi                   (axisA)  constant
//   dhata                    (axisB)  parameter / local
//   dhaturuttama             (az)  object property
//   dhritatma                (b)  constant, GLSL name
//   dhruva                   (ba)  GLSL name
//   dhurya                   (back)  constant
//   dhyanadhyatridhyeya      (trail)  object property
//   duhkhahantri             (sp)  constant, object property
//   durachara                (spawn)  constant
//   duradharsha              (balance)  constant
//   durdhara                 (band)  constant, GLSL name
//   durga                    (source)  object property
//   durgama                  (smin)  GLSL name
//   durlabha                 (slot)  constant
//   durmarshana              (bands)  GLSL name
//   dushtadura               (sparkAcc)  object property
//   gabhastinemi             (base)  parameter / local, GLSL name, object property
//   gahana                   (beads)  GLSL name
//   garudadhvaja             (before)  parameter / local
//   geyachakra               (petals)  constant
//   gopati                   (begin)  object property
//   gopta                    (being)  parameter / local
//   goptri                   (uBPos)  shader uniform
//   govidampati              (beingIndex)  parameter / local
//   govinda                  (bell)  constant
//   govindarupini            (uBloom)  shader uniform
//   gramani                  (below)  parameter / local
//   guha                     (bend)  GLSL name, object property
//   guru                     (best)  variable
//   gurutama                 (bestAng)  parameter / local
//   hamsa                    (bestGap)  parameter / local
//   haranetra                (poked)  parameter / local
//   haribrahmendrasevita     (uSize)  shader uniform
//   havirhari                (bez)  GLSL name
//   hetu                     (bezT)  GLSL name
//   heyopadeya               (until)  object property
//   hiranyanabha             (bi)  GLSL name
//   hridya                   (uWind)  shader uniform
//   hrimati                  (uWash)  shader uniform
//   hrimkari                 (uTrail)  shader uniform
//   ishana                   (blend)  object property
//   ishta                    (bless)  object property
//   ishvari                  (uDir)  shader uniform
//   jagadadija               (blessBackAt)  object property
//   jagarini                 (tt)  GLSL name
//   jagatikanda              (vUv)  shader varying
//   jagatsetu                (blessed)  constant
//   jahnu                    (bloomPos)  object property
//   jalandharasthita         (yu)  constant
//   janardana                (body)  GLSL name
//   janeshvara               (bolt)  constant
//   jaya                     (branch)  parameter / local
//   Jeta                     (breathe)  GLSL name
//   jitakrodha               (build)  function
//   jnanagamya               (burst)  constant, object property
//   jvalamalini              (phase2)  object property
//   jyeshtha                 (bus)  parameter / local
//   kadamba                  (palmColors)  constant
//   kadambakusumapriya       (vS)  shader varying
//   kadambaripriya           (vW)  shader varying
//   kala                     (button)  constant
//   kalalapa                 (vVis)  shader varying
//   kalavati                 (vV)  shader varying
//   kalyani                  (vSeed)  shader varying
//   kamadayini               (part)  constant
//   kamagni                  (pointAt)  object property
//   kamaha                   (buttons)  variable
//   kamakalarupa             (vQ)  shader varying
//   kamakrit                 (c)  constant, GLSL name, object property
//   kamakshi                 (p3)  GLSL name
//   kamakuta                 (ow)  constant
//   kamaprada                (ca)  GLSL name
//   kamapujita               (yaw)  variable
//   kameshajnata             (out)  parameter / local
//   kameshvaramukha          (place)  function, object property
//   kameshvarapranadi        (ya)  parameter / local
//   kameshvari               (p2)  parameter / local
//   kamya                    (vPhase)  shader varying
//   kanakangada              (outside)  GLSL name
//   kanta                    (camPos)  parameter / local
//   kapindra                 (canFire)  object property
//   karana                   (cand)  constant
//   karanguli                (plasma)  object property
//   karpuravitika            (origin)  constant
//   karta                    (cands)  constant
//   karunarasasagara         (vUv2)  shader varying
//   kaulini                  (posePhantomArms)  function
//   kavi                     (canvas)  constant
//   keshava                  (capsule)  GLSL name
//   kiricakra                (phase)  object property
//   krama                    (catchBlend)  object property
//   kratu                    (catchCols)  parameter / local
//   kritajna                 (catchGlow)  constant, object property
//   kritakrita               (catchOn)  object property
//   kritalakshana            (caught)  parameter / local
//   kriti                    (caughtHand)  object property
//   krodhaha                 (cell)  parameter / local
//   krodhakara               (omega)  object property
//   krodhakrit               (cells)  constant, GLSL name
//   krodhashamani            (seen)  constant
//   kshama                   (centre)  object property
//   kshara                   (centres)  constant
//   kshayavriddhivinirmukta  (vis)  GLSL name
//   kshetrajna               (cents)  parameter / local
//   kshetrakshetrajnapalini  (vib)  constant
//   kshetrapalasamarchita    (vn)  constant
//   kshetrasvarupa           (vg)  parameter / local
//   kshetreshi               (vh)  GLSL name
//   kshobhana                (ch)  variable, GLSL name
//   kulamrita                (pool)  constant, object property
//   kulangana                (pose)  parameter / local
//   kulasanketa              (pos)  parameter / local, object property
//   kulayogini               (prana)  GLSL name
//   kundalini                (px2)  parameter / local
//   kuruvinda                (opposed)  constant
//   lakshmivan               (charged)  parameter / local, object property
//   lakshyaroma              (oy)  object property
//   lobhanashini             (self)  parameter / local
//   lohitaksha               (chime)  object property
//   lokadhyaksha             (choir)  object property
//   madanashini              (rr)  parameter / local
//   MADHAVA                  (circle)  constant
//   madhu                    (ck)  constant
//   madhusudana              (click)  object property
//   madhyama                 (y)  constant, GLSL name
//   mahabala                 (col)  constant, GLSL name, object property
//   mahabhaga                (colorList)  parameter / local
//   mahabhairava             (th)  GLSL name
//   mahabhoga                (colors)  parameter / local, object property
//   mahabuddhi               (colorsOf)  parameter / local
//   mahadeva                 (cols)  constant, object property
//   mahadevi                 (strength)  constant
//   mahadhana                (column)  constant, object property
//   mahadyuti                (columnGeo)  constant
//   mahaganesha              (placed)  constant
//   mahaishvarya             (sweep)  parameter / local
//   mahakosha                (comp)  constant
//   mahaksha                 (cone)  object property
//   mahalakshmi              (strengthOf)  parameter / local
//   mahamakha                (controller)  parameter / local
//   mahamantra               (tendrils)  GLSL name
//   mahamaya                 (cool)  object property
//   mahapadma                (palmCatch)  object property
//   mahapatakanashini        (surf)  GLSL name
//   mahapujya                (sum)  parameter / local
//   maharati                 (swatch)  constant
//   maharddhi                (core)  constant, GLSL name, object property
//   maharupa                 (style)  constant
//   mahasana                 (tex)  constant, object property
//   mahasattva               (swap)  object property
//   mahashakti               (coreHalo)  GLSL name
//   mahashana                (count)  parameter / local, object property
//   mahasiddhi               (tail)  GLSL name
//   mahasvana                (cp)  GLSL name
//   mahatantra               (tcol)  parameter / local
//   mahatapa                 (cr)  GLSL name
//   mahavirya                (t)  constant, GLSL name, object property
//   mahayaga                 (text)  parameter / local
//   mahayantra               (test)  constant
//   mahayogeshvareshvari     (target)  parameter / local, object property
//   mahendra                 (crackle)  object property
//   maheshvari               (streak)  variable, GLSL name
//   mahidhara                (crackleAt)  object property
//   mahotsaha                (crackles)  constant
//   mamatahantri             (sa)  GLSL name
//   mandasmita               (other)  constant
//   manipura                 (progressAt)  GLSL name
//   manohara                 (css)  constant
//   manonmani                (strand)  GLSL name
//   manorupa                 (on)  parameter / local, GLSL name, object property
//   mantra                   (ctrl)  constant
//   mantrini                 (pinchLevel)  object property
//   manu                     (ctx)  constant, object property
//   marga                    (cur)  parameter / local
//   marichi                  (cursor)  variable
//   Medhavi                  (cx)  parameter / local
//   mohanashini              (s1)  GLSL name
//   mridapriya               (stretch)  object property
//   mrityumathani            (shells)  object property
//   mukhachandra             (orb)  constant
//   muktanam                 (cy)  parameter / local
//   muladhara                (prof)  GLSL name
//   nabhyalavala             (ox)  object property
//   nadarupa                 (uT0)  shader uniform
//   nahusha                  (d)  constant, GLSL name, object property
//   naikamaya                (data)  constant
//   naikarupa                (dd)  constant
//   naikatma                 (delay)  parameter / local
//   nakshatranemi            (demoAim)  constant
//   nakshatri                (devanagariOK)  variable
//   namarupavivarjita        (uTint)  shader uniform
//   nara                     (dir)  parameter / local, object property
//   narasimha                (dirty)  object property
//   narayani                 (uStreak)  shader uniform
//   naya                     (dist)  constant
//   neta                     (down)  parameter / local, GLSL name
//   neya                     (dq)  GLSL name
//   nidhiravyaya             (dragging)  parameter / local
//   nihsamshaya              (sesame)  object property
//   nijajnarupanigama        (uLen)  shader uniform
//   nijaruna                 (opacity)  parameter / local
//   nijasallapa              (osc)  constant
//   niketana                 (tint)  parameter / local, GLSL name
//   nilachikura              (side)  parameter / local, GLSL name
//   nimisha                  (draw)  function, object property
//   nirabadha                (setup)  parameter / local
//   niradhara                (refresh)  object property
//   niraga                   (rot)  parameter / local
//   nirahankara              (rz)  parameter / local
//   nirakara                 (respawnAt)  object property
//   nirakula                 (ret)  constant
//   niranjana                (rel)  GLSL name
//   nirantara                (rise)  variable, object property
//   nirapaya                 (sign)  constant
//   nirashraya               (ringGeo)  constant
//   niratyaya                (size)  parameter / local
//   niravadya                (rippleAt)  object property
//   nirbhava                 (setHover)  function, object property
//   nirbheda                 (shape)  GLSL name
//   nirguna                  (reticle)  object property
//   nirishvara               (roomBox)  constant
//   nirlepa                  (release)  object property
//   nirlobha                 (seg)  constant, GLSL name
//   nirmada                  (rp)  GLSL name
//   nirmala                  (res)  constant
//   nirmama                  (s2)  GLSL name
//   nirmoha                  (s)  variable, GLSL name, object property
//   nirnasha                 (shellPos)  object property
//   nirupadhi                (robeW)  GLSL name
//   nirupaplava              (ridge)  GLSL name
//   nirvikalpa               (setOn)  object property
//   nirvikara                (rim)  GLSL name
//   nishchinta               (rx)  parameter / local
//   nishkala                 (rg)  constant
//   nishkalanka              (robe)  GLSL name
//   nishkama                 (rgb)  parameter / local
//   nishkarana               (rn)  GLSL name
//   nishkriya                (shoulder)  parameter / local
//   nishkrodha               (seed)  variable
//   nishpapa                 (saved)  constant
//   nishparigraha            (show)  constant, object property
//   nishprapancha            (ring)  variable, GLSL name, object property
//   nistula                  (shown)  parameter / local
//   nitya                    (respawn)  object property
//   nityabuddha              (ripple)  object property
//   nityamukta               (right)  constant
//   nityaparakrama           (pick)  constant
//   nityashuddha             (rip)  GLSL name
//   nivrittatma              (drawFn)  parameter / local
//   niyama                   (drone)  variable
//   nyaya                    (drops)  object property
//   odyanapithanilaya        (yv)  GLSL name
//   padmagarbha              (dt)  parameter / local
//   padmanabha               (dummy)  constant
//   padmanabhasahodari       (uHarm)  shader uniform
//   padmanayana              (title)  parameter / local
//   padmanibhekshana         (dur)  parameter / local, object property
//   padmaragasamaprabha      (tn)  GLSL name
//   padmi                    (dx)  constant
//   panchabrahma             (palmAt)  constant
//   panchabrahmasvarupini    (tone)  constant
//   panchakrityaparayana     (uFade)  shader uniform
//   panchapretasanasina      (tn2)  GLSL name
//   panchatanmatra           (onArrive)  object property
//   papanashini              (sc)  constant
//   para                     (x1)  parameter / local
//   paradevata               (xrSession)  constant
//   paramagati               (dy)  parameter / local
//   paramananda              (tr)  constant
//   Paramaspashta            (dz)  parameter / local
//   paramatma                (e)  parameter / local
//   parameshthi              (e1)  constant
//   parameshvara             (e2)  parameter / local
//   pararddhi                (edge)  GLSL name
//   parigraha                (effectsGroup)  constant
//   parvati                  (tips)  constant, object property
//   pashupashavimochini      (waveMat)  constant
//   pashyanti                (xr)  constant
//   pavana                   (emit)  object property
//   Pavitra                  (end)  constant, object property
//   prabhuta                 (endAt)  object property
//   pradhana                 (ends)  GLSL name
//   prajabhava               (entry)  parameter / local, object property
//   prajapati                (err)  parameter / local
//   prajnatmika              (uAccent)  shader uniform
//   PRAKASHANA               (ev)  constant
//   PRAKASHATMA              (event)  object property
//   pramana                  (f)  constant, GLSL name
//   pramshu                  (f0)  parameter / local
//   pranada                  (f1)  parameter / local
//   Pranava                  (f2)  parameter / local
//   prasannatma              (facing)  constant, GLSL name
//   PRATAPANA                (facingFor)  variable
//   pratardana               (fade)  object property
//   prathita                 (fadeDelay)  object property
//   pratishthita             (fadeEnds)  GLSL name
//   pratyakchitirupa         (xAxis)  parameter / local
//   Pratyaya                 (fadeLow)  GLSL name
//   prithu                   (fakeJoints)  object property
//   Punarvasu                (fall)  GLSL name
//   pundarikaksha            (fan)  GLSL name
//   punyapunyaphalaprada     (uOrbs)  shader uniform
//   purandara                (far)  parameter / local
//   puratana                 (fast)  object property
//   purna                    (uPulse)  shader uniform
//   purujit                  (fg)  constant
//   purusattama              (fib)  GLSL name
//   purusharthaprada         (uPrana)  shader uniform
//   purusheshvara            (fil)  GLSL name
//   purushottama             (fill)  GLSL name
//   pushkaraksha             (fit)  constant
//   PUSHTA                   (fl)  constant
//   PUTATMA                  (flash)  GLSL name
//   ragamathani              (rows)  constant
//   ragasvarupa              (ok)  constant, GLSL name, object property
//   rajarajarchita           (update)  object property
//   rajivalochana            (uv)  parameter / local
//   rakenduvadana            (vAlpha)  shader varying
//   rakini                   (updatePath)  object property
//   rakshakari               (vL)  shader varying
//   rakshasaghni             (vN)  shader varying
//   rama                     (flashAt)  object property
//   ramamani                 (vNear)  shader varying
//   ramanalampata            (vP)  shader varying
//   ramani                   (v1)  constant
//   ramya                    (upper)  constant, object property
//   ranatkinkinimekhala      (vA)  shader varying
//   ranjani                  (v)  parameter / local, GLSL name, object property
//   rasya                    (v2)  parameter / local
//   ratipriya                (vFloor)  shader varying
//   ratirupa                 (vCol)  shader varying
//   ratnagarbha              (flashMat)  constant
//   ratnagraiveya            (outgoing)  object property
//   Riddha                   (flick)  constant
//   ritu                     (flow)  GLSL name
//   rohita                   (flt)  parameter / local
//   rudragranthi             (pts)  parameter / local, object property
//   rudrarupa                (uColor)  shader uniform
//   sadashiva                (uDur)  shader uniform
//   sadayogi                 (fn)  parameter / local, object property
//   sadgatiprada             (standInMat)  constant
//   sadhu                    (follow)  constant
//   sadhvi                   (rays2)  GLSL name
//   saha                     (font)  parameter / local
//   sahasrajit               (forearm)  constant, object property
//   sahasrakshi              (uHold)  shader uniform
//   sahasramshu              (forearmDown)  constant
//   sahasramurdha            (frame)  parameter / local
//   sahasrapat               (frames)  parameter / local
//   sahasrarambuja           (pushAt)  object property
//   sahasrashirshavadana     (uHelix)  shader uniform
//   sahishnu                 (from)  parameter / local
//   sakalagamasandoha        (uP1)  shader uniform
//   sakshi                   (front)  constant
//   sama                     (fu)  constant
//   samahlada                (wind)  GLSL name, object property
//   samanadhika              (spokes)  GLSL name
//   Samatma                  (full)  GLSL name
//   samayachara              (prev)  parameter / local
//   samayajna                (g)  constant, GLSL name
//   samayantastha            (press)  function, object property
//   samharini                (uBright)  shader uniform
//   samhritasheshapashanda   (white)  parameter / local
//   samiha                   (gain)  constant
//   samirana                 (gap)  parameter / local
//   samitinjaya              (gate)  constant
//   sammita                  (gentle)  parameter / local
//   sampatkari               (paused)  object property
//   sampramardana            (geo)  constant, object property
//   samshayaghni             (set)  constant
//   samsthana                (gi)  parameter / local
//   samvatsara               (given)  variable
//   samvrita                 (giver)  object property
//   sandhata                 (glint)  GLSL name
//   sandhiman                (glow)  constant, GLSL name, object property
//   sandrakaruna             (spin)  GLSL name
//   sangraha                 (gn)  parameter / local
//   santapta                 (width)  parameter / local
//   sarga                    (goal)  constant
//   sarva                    (got)  parameter / local
//   sarvadarshana            (grad)  parameter / local
//   sarvadi                  (grav)  parameter / local
//   sarvadrik                (group)  object property
//   SARVAGA                  (grp)  constant
//   sarvajnya                (speed)  parameter / local, object property
//   sarvamangala             (src)  parameter / local
//   sarvamantrasvarupini     (started)  variable
//   sarvamayi                (startWindup)  object property
//   sarvashaktimayi          (spread)  constant
//   sarvatantrarupa          (steps)  parameter / local
//   sarvavasthavivarjita     (uAscend)  shader uniform
//   SARVAVID                 (h)  parameter / local, GLSL name, object property
//   sarvayantratmika         (step)  parameter / local
//   sarveshvara              (h0)  parameter / local
//   sarveshvari              (start)  constant
//   satamgati                (h1)  parameter / local, GLSL name
//   Satkarta                 (h2)  GLSL name
//   satkrita                 (ha)  GLSL name
//   sattvastha               (half)  constant
//   satya                    (halo)  constant, GLSL name, object property
//   satyaparakrama           (hand)  constant, object property
//   Shader                   (BEING_UNIFORMS_GLSL)  constant
//   shambhavi                (r1)  parameter / local
//   shambhu                  (handMenu)  function, object property
//   shankari                 (rayGeo)  constant
//   shantimati               (refSpace)  constant
//   sharabha                 (handMode)  parameter / local
//   sharachchandra           (rc)  GLSL name
//   sharadaradhya            (rad)  GLSL name
//   sharanam                 (handedness)  parameter / local
//   sharirabhrit             (hands)  parameter / local
//   sharma                   (harm)  GLSL name
//   sharmadayini             (radius)  object property
//   sharva                   (have)  constant
//   sharvani                 (radiance)  GLSL name
//   shashabindu              (headGlow)  GLSL name
//   shashvata                (heartImpact)  object property
//   shasta                   (helixAt)  GLSL name
//   shatavarta               (hex)  parameter / local
//   shatchakra               (px)  parameter / local
//   shatodari                (reach)  constant
//   shatrughna               (hexagram)  constant
//   shauri                   (hh)  GLSL name
//   shikhandi                (hi)  parameter / local
//   shipivishta              (hit)  constant
//   shishtakrit              (hold)  object property
//   shishteshta              (hot)  constant, GLSL name
//   shiva                    (hover)  parameter / local
//   shreshtha                (hoverId)  object property
//   shrigarbha               (hoverKey)  parameter / local
//   shrikari                 (rays)  GLSL name, object property
//   shrimaharajni            (now)  constant
//   shriman                  (hovered)  parameter / local
//   shrimata                 (note)  object property
//   shrinagara               (pal)  constant
//   shringamadhya            (pace)  constant
//   shringararasasampurna    (yb)  parameter / local
//   shrinivasa               (hp)  GLSL name
//   shrividya                (poly)  constant
//   shrutisagara             (hr)  GLSL name
//   shrutisimantasindhuri    (uP0)  shader uniform
//   Shubhekshana             (hue)  GLSL name
//   shuchi                   (hw)  constant
//   shuchishrava             (hy)  constant
//   shuddhavidya             (orbs)  object property
//   shuktisamputamauktika    (uP2)  shader uniform
//   shura                    (i)  parameter / local, GLSL name
//   siddha                   (id)  parameter / local, object property
//   siddhartha               (idAt)  constant, object property
//   siddhasankalpa           (ids)  parameter / local
//   siddhi                   (idx)  parameter / local, object property
//   siddhida                 (impactFrom)  constant
//   siddhisadhana            (impulse)  variable
//   simha                    (inArc)  GLSL name
//   simhasaneshvari          (o)  parameter / local, GLSL name
//   skanda                   (index)  parameter / local
//   skandadhara              (indexJ)  constant
//   soma                     (indexTip)  object property
//   somapa                   (inflow)  GLSL name
//   spashtakshara            (init)  function, object property
//   sragvi                   (initial)  parameter / local
//   srishtikartri            (uBCol)  shader uniform
//   stanabhara               (p)  constant, GLSL name, object property
//   sthanada                 (inner)  GLSL name
//   sthanu                   (inside)  constant, GLSL name
//   sthavira                 (instant)  parameter / local
//   sthavishta               (invQ)  constant
//   sthavishtha              (inward)  constant
//   sthira                   (ir)  parameter / local
//   subhuja                  (isDeva)  GLSL name
//   sudhasagara              (pan)  constant
//   sudhasarabhivarshini     (pushLevel)  object property
//   sughosha                 (isPitru)  GLSL name
//   suhrit                   (isRishi)  GLSL name
//   sukhada                  (item)  constant
//   sukhaprada               (span)  parameter / local, object property
//   sukshma                  (j)  variable, GLSL name
//   sumeru                   (pa)  GLSL name
//   sumukha                  (joined)  variable
//   suparna                  (jp)  GLSL name
//   suprasada                (k)  constant, GLSL name
//   supta                    (u)  constant, object property
//   suradhyaksha             (keep)  object property
//   surananda                (keepLineage)  parameter / local
//   surariha                 (key)  parameter / local, GLSL name
//   sureshvara               (kind)  constant, object property
//   sutapa                   (kk)  parameter / local, GLSL name
//   suvrata                  (knees)  GLSL name
//   svapana                  (l)  GLSL name
//   svapanti                 (tw)  constant
//   svatmanandalavibhuta     (x)  parameter / local, GLSL name
//   svavasha                 (label)  parameter / local
//   SVAYAMBHU                (lagN)  GLSL name
//   tadillata                (pushT)  constant
//   taijasatmika             (type)  constant
//   tamopaha                 (world)  GLSL name
//   tanumadhya               (words)  constant
//   tapasaradhya             (word)  constant
//   tapatrayagni             (whoosh)  object property
//   tarana                   (lagSec)  GLSL name
//   tarunya                  (windup)  object property
//   tatpadalakshyartha       (wrap)  function, object property
//   tirodhanakari            (uCone)  shader uniform
//   Trikakubdhama            (lap)  GLSL name
//   turya                    (uAge)  shader uniform
//   tushta                   (last)  object property
//   tvashta                  (lastBlessed)  object property
//   udaradhi                 (lastDraw)  parameter / local
//   udbhava                  (lastEvent)  object property
//   udyadbhanu               (off)  constant
//   ugra                     (lastFire)  object property
//   unmeshanimishotpanna     (uHead)  shader uniform
//   upendra                  (lastPush)  object property
//   urjita                   (lastSel)  object property
//   uttara                   (lastX)  parameter / local
//   vachaspati               (lastY)  parameter / local
//   vadanasmara              (orbOffset)  GLSL name
//   vagmi                    (launch)  object property
//   vagvadini                (wasHidden)  constant
//   vahni                    (layer)  parameter / local
//   vahnimandalavasini       (wave)  object property
//   vaidya                   (left)  constant
//   vaikharirupa             (y0)  parameter / local
//   vaikuntha                (len)  constant, GLSL name
//   vaktralakshmi            (orbPos)  object property
//   vamakeshi                (wash)  parameter / local
//   vamana                   (level)  constant, object property
//   vamanayana               (vY)  shader varying
//   vandarujanavatsala       (want)  constant
//   vandya                   (w)  parameter / local, GLSL name
//   varada                   (levels)  object property
//   vararoha                 (lfo)  constant
//   vardhamana               (lfoGain)  parameter / local
//   vardhana                 (lh)  constant
//   varnashramavidhayini     (uKind)  shader uniform
//   varunimadavihvala        (val)  parameter / local
//   vasavanuja               (life)  parameter / local, GLSL name, object property
//   VASHATKARA               (lift)  GLSL name
//   vasu                     (limb)  GLSL name
//   Vasuda                   (line)  variable, GLSL name
//   vasudeva                 (lineage)  parameter / local
//   vasumana                 (lines)  parameter / local
//   vatsala                  (list)  constant
//   vatsara                  (listen)  object property
//   vatsi                    (live)  constant
//   vayu                     (ln)  parameter / local
//   vayuvahana               (lo)  parameter / local
//   veda                     (local)  constant
//   vedajanani               (vel)  object property
//   vedanga                  (look)  parameter / local
//   vedavedya                (variety)  constant
//   vedavid                  (low)  constant
//   vedya                    (lp)  constant, GLSL name
//   vegavan                  (lum)  constant
//   vibhu                    (lvl)  GLSL name
//   vidhata                  (m)  parameter / local, GLSL name
//   vidhatri                 (veins)  GLSL name
//   vijaya                   (mala)  object property
//   vijnanaghanarupini       (track)  object property
//   vikrama                  (mandala)  object property
//   vikrami                  (master)  variable
//   vikshara                 (mat)  parameter / local, object property
//   vilasini                 (verbGain)  constant
//   vimala                   (vt)  GLSL name
//   vinaya                   (maxW)  parameter / local
//   vindhyachalanivasini     (veils)  object property
//   vira                     (menuFacing)  object property
//   virabahu                 (meru)  GLSL name
//   viraha                   (mesh)  constant, object property
//   virama                   (meshes)  object property
//   virata                   (meta)  constant
//   vishishta                (meterBar)  constant
//   VISHNU                   (mid)  constant
//   vishnugranthi            (prox)  parameter / local
//   vishnumaya               (verb)  variable
//   vishrama                 (mix)  constant
//   vishrutatma              (mix32)  variable
//   vishukra                 (pitch)  parameter / local
//   vishvabahu               (mode)  object property
//   vishvabhuk               (motes)  object property
//   vishvadakshina           (mouseIn)  variable
//   vishvadhika              (value)  parameter / local
//   vishvadhrik              (moved)  parameter / local
//   vishvaksena              (ms)  parameter / local
//   vishvaretas              (mu)  constant
//   vishvatma                (mv)  GLSL name
//   vishvayoni               (n)  parameter / local, GLSL name, object property
//   VISHWAM                  (n000)  GLSL name
//   vistara                  (n001)  GLSL name
//   vivarjita                (tri)  constant
//   vivikta                  (n010)  GLSL name
//   vriddhatma               (n011)  GLSL name
//   vrisha                   (n1)  GLSL name
//   vrishabha                (n100)  GLSL name
//   vrishahi                 (n101)  GLSL name
//   vrishakapi               (n110)  GLSL name
//   vrishakarma              (n111)  GLSL name
//   vrishakriti              (n2)  GLSL name
//   vrishaparva              (name)  parameter / local, object property
//   vrishodara               (nameLabelsOn)  constant
//   vyaktarupa               (nameMesh)  object property
//   vyala                    (nameTag)  object property
//   vyapi                    (nd)  parameter / local
//   vyapta                   (ndc)  constant
//   vyavasaya                (near)  parameter / local, GLSL name
//   vyavasthana              (nearest)  variable
//   yajna                    (nextBuild)  parameter / local
//   yama                     (nm)  constant
//   yogavidam                (noise)  constant
//   yugadikrit               (noiseBuf)  variable
//   yugavarta                (normal)  constant, object property
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
].map((samshayaghni, bhavanashini) => samshayaghni.map(([svavasha, shatavarta], bhadrapriya) => ({ label: svavasha, hex: shatavarta, rgb: new THREE.Color().setHex(shatavarta, THREE.LinearSRGBColorSpace), set: bhavanashini, siddhi: bhadrapriya })));
const SARVAGUNA = GUNASAGARA.flat();

// ---------- URL parameters, and a fixed random sequence in the demos so screenshots repeat ----------
const shruti = new URLSearchParams(location.search);
const LEELADHARA = shruti.has('demo');
const LEELARUPA = LEELADHARA ? shruti.get('demo') : null; // '' | '360' | 'being' | 'catch' | 'give' | 'anjali' | 'bloom' | 'menu' | 'smoke'
const KARAKA = LEELADHARA && shruti.has('xrhands'); // fake XRHand joints fed through the headset's hand code (smoke test)
const abhu = LEELARUPA === 'menu';
const BHUTAKRIT = LEELADHARA ? (shruti.has('stop') ? +shruti.get('stop') : ({ '': 3.1, '360': 3.4, being: 3.0, catch: 2.65, give: 2.35, anjali: 2.0, bloom: 5.2, menu: 1.0, devas: 3.2, rishis: 3.4, pitrus: 3.4, labels: 2.6 })[LEELARUPA] || 0) : 0;
const BHUTABHRIT = ['360', 'bloom', 'anjali', 'catch'].includes(LEELARUPA) && shruti.get('cam') !== 'first';
if (LEELADHARA) {
  let nishkrodha = (+shruti.get('seed') || 11) >>> 0;
  Math.random = () => { nishkrodha = (nishkrodha + 0x6D2B79F5) >>> 0; let vishrutatma = Math.imul(nishkrodha ^ (nishkrodha >>> 15), 1 | nishkrodha); vishrutatma = (vishrutatma + Math.imul(vishrutatma ^ (vishrutatma >>> 7), 61 | vishrutatma)) ^ vishrutatma; return ((vishrutatma ^ (vishrutatma >>> 14)) >>> 0) / 4294967296; };
  document.body.classList.add('leelamaya');
}

// ---------- settings (menu), remembered in localStorage ----------
const DEVASANKHYA = [{ label: 'Few', vishvayoni: 6 }, { label: 'Many', vishvayoni: 10 }, { label: 'Multitude', vishvayoni: 16 }];
const LAYA = [{ label: 'Calm', min: 3.0, max: 5.0 }, { label: 'Lively', min: 1.8, max: 3.0 }]; // guess: seconds between blessings
const GUNAVIDHI = ['Same set as mine', 'All sets'];
const sankalpa = { set: 0, q: 0, beings: 1, pace: 0, beingQ: 0, sacred: true, sound: true, lineage: 0 }; // q = -1 means all of this set; lineage: 0 all three, 1 Devas, 2 Rishis, 3 Pitrus
try {
  const nishpapa = JSON.parse(localStorage.getItem('blessings-of-light') || '{}');
  if (nishpapa.set >= 0 && nishpapa.set < GUNASAGARA.length) sankalpa.set = nishpapa.set;
  if (nishpapa.q >= -1 && nishpapa.q < GUNASAGARA[sankalpa.set].length) sankalpa.q = nishpapa.q;
  if (nishpapa.beings >= 0 && nishpapa.beings < DEVASANKHYA.length) sankalpa.beings = nishpapa.beings;
  if (nishpapa.pace >= 0 && nishpapa.pace < LAYA.length) sankalpa.pace = nishpapa.pace;
  if (nishpapa.beingQ >= 0 && nishpapa.beingQ < 2) sankalpa.beingQ = nishpapa.beingQ;
  if (typeof nishpapa.sacred === 'boolean') sankalpa.sacred = nishpapa.sacred;
  if (typeof nishpapa.sound === 'boolean') sankalpa.sound = nishpapa.sound;
  if (nishpapa.lineage >= 0 && nishpapa.lineage < 4) sankalpa.lineage = nishpapa.lineage;
} catch (prajapati) { /* only a convenience */ }
const smarana = () => { try { localStorage.setItem('blessings-of-light', JSON.stringify(sankalpa)); } catch (prajapati) { /* only a convenience */ } };
if (LEELADHARA) {
  if (shruti.has('set')) sankalpa.set = Math.min(4, Math.max(0, +shruti.get('set')));
  if (shruti.has('q')) sankalpa.q = Math.min(GUNASAGARA[sankalpa.set].length - 1, Math.max(-1, +shruti.get('q')));
  if (shruti.has('n')) sankalpa.beings = Math.min(2, Math.max(0, +shruti.get('n')));
  else if (LEELARUPA === 'being') sankalpa.beings = 0;
  if (shruti.has('bq')) sankalpa.beingQ = shruti.get('bq') === 'all' ? 1 : 0;
  sankalpa.sacred = shruti.get('sacred') !== '0';
  sankalpa.lineage = ({ devas: 1, rishis: 2, pitrus: 3 })[LEELARUPA] || (shruti.has('only') ? +shruti.get('only') : 0);
}
const gunanidhi = () => (sankalpa.q < 0 ? GUNASAGARA[sankalpa.set] : [GUNASAGARA[sankalpa.set][sankalpa.q]]);
const satsanga = { sampatkari: false };
const punyalekha = { given: 0, received: 0, caught: 0, ascended: 0, blooms: 0 };

// A colour lifted so its glow reads over a bright room. Dark colours (like Restraint's indigo) are lifted and pale
// ones (like Divine Justice's steel blue) get their hue strengthened; a true white stays white. Same rule as Energy Flow.
function tejovardhana(nishkama) {
  const mahabala = nishkama.clone();
  const vegavan = 0.2126 * mahabala.r + 0.7152 * mahabala.g + 0.0722 * mahabala.b;
  if (vegavan < 0.5) mahabala.multiplyScalar(Math.min(1.9, 0.5 / Math.max(vegavan, 0.05)));
  const sarvashaktimayi = Math.max(mahabala.r, mahabala.g, mahabala.b) - Math.min(mahabala.r, mahabala.g, mahabala.b);
  if (vegavan > 0.55 && sarvashaktimayi > 0.06 && sarvashaktimayi < 0.4) {
    const samiha = 2.3;
    mahabala.setRGB(Math.max(0, vegavan + (mahabala.r - vegavan) * samiha), Math.max(0, vegavan + (mahabala.g - vegavan) * samiha), Math.max(0, vegavan + (mahabala.b - vegavan) * samiha), THREE.LinearSRGBColorSpace);
  }
  return mahabala;
}
// Five palette slots cycling through the given qualities (one quality fills all five).
const varna = (bhaktasaubhagya = gunanidhi()) => [0, 1, 2, 3, 4].map(durlabha => tejovardhana(bhaktasaubhagya[durlabha % bhaktasaubhagya.length].rgb));

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
const shanta = (vayuvahana, shikhandi, svatmanandalavibhuta) => { const suprasada = Math.min(1, Math.max(0, (svatmanandalavibhuta - vayuvahana) / (shikhandi - vayuvahana))); return suprasada * suprasada * (3 - 2 * suprasada); };
const lila = (vayuvahana, shikhandi) => vayuvahana + Math.random() * (shikhandi - vayuvahana);
const mahakala = { mahavirya: 0 };
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
float chitragupta(vec2 stanabhara){ vec3 kamakshi = fract(vec3(stanabhara.xyx) * .1031); kamakshi += dot(kamakshi, kamakshi.yzx + 33.33); return fract((kamakshi.x + kamakshi.y) * kamakshi.z); }
float chitrasena(vec3 stanabhara){ stanabhara = fract(stanabhara * .1031); stanabhara += dot(stanabhara, stanabhara.zyx + 31.32); return fract((stanabhara.x + stanabhara.y) * stanabhara.z); }
float mayini(vec2 stanabhara){
  vec2 shura = floor(stanabhara), pramana = fract(stanabhara); vec2 vandya = pramana * pramana * (3. - 2. * pramana);
  return mix(mix(chitragupta(shura), chitragupta(shura + vec2(1., 0.)), vandya.x), mix(chitragupta(shura + vec2(0., 1.)), chitragupta(shura + vec2(1., 1.)), vandya.x), vandya.y);
}
float mayapati(vec2 stanabhara){ float nirmoha = 0., avartana = .5; for (int shura = 0; shura < 3; shura++){ nirmoha += avartana * mayini(stanabhara); stanabhara = stanabhara * 2.07 + vec2(3.1, 7.7); avartana *= .5; } return nirmoha / .875; }
float mahamayini(vec3 stanabhara){
  vec3 shura = floor(stanabhara), pramana = fract(stanabhara); vec3 vandya = pramana * pramana * (3. - 2. * pramana);
  float VISHWAM = chitrasena(shura), vrishabha = chitrasena(shura + vec3(1., 0., 0.)), vivikta = chitrasena(shura + vec3(0., 1., 0.)), vrishakapi = chitrasena(shura + vec3(1., 1., 0.));
  float vistara = chitrasena(shura + vec3(0., 0., 1.)), vrishahi = chitrasena(shura + vec3(1., 0., 1.)), vriddhatma = chitrasena(shura + vec3(0., 1., 1.)), vrishakarma = chitrasena(shura + vec3(1., 1., 1.));
  return mix(mix(mix(VISHWAM, vrishabha, vandya.x), mix(vivikta, vrishakapi, vandya.x), vandya.y), mix(mix(vistara, vrishahi, vandya.x), mix(vriddhatma, vrishakarma, vandya.x), vandya.y), vandya.z);
}
float mayadhisha(vec3 stanabhara){ float nirmoha = 0., avartana = .5; for (int shura = 0; shura < 3; shura++){ nirmoha += avartana * mahamayini(stanabhara); stanabhara = stanabhara * 2.03 + vec3(1.7, 9.2, 3.1); avartana *= .5; } return nirmoha / .875; }
`;
// Palette in GLSL: five colours, picked or blended by a 0..1 key.
const VARNAPATHA = /* glsl */`
uniform vec3 vikarta[5];
vec3 varnadhara(float surariha){ int shura = int(floor(fract(surariha) * 5.)); return vikarta[shura < 0 ? 0 : (shura > 4 ? 4 : shura)]; }
vec3 varnamala(float surariha){
  float svatmanandalavibhuta = fract(surariha) * 5.; int shura = int(floor(svatmanandalavibhuta)); int sukshma = int(mod(float(shura) + 1., 5.));
  return mix(vikarta[shura < 0 ? 0 : (shura > 4 ? 4 : shura)], vikarta[sukshma], smoothstep(0.25, 0.75, fract(svatmanandalavibhuta)));
}`;
const bhutatma = new THREE.PlaneGeometry(2, 2);
// A streak: a quad from tail (x = 0) to head (x = 1), y across. Shared by all instanced streak systems.
const mangalamparam = new THREE.BufferAttribute(new Float32Array([0, -1, 0, 1, -1, 0, 0, 1, 0, 1, 1, 0]), 3);
const bahurupa = (gabhastinemi, mahashana) => {
  const sampramardana = new THREE.InstancedBufferGeometry();
  if (gabhastinemi === 'streak') { sampramardana.setIndex([0, 1, 2, 2, 1, 3]); sampramardana.setAttribute('position', mangalamparam); }
  else { sampramardana.setIndex(gabhastinemi.index); sampramardana.setAttribute('position', gabhastinemi.attributes.position); if (gabhastinemi.attributes.uv) sampramardana.setAttribute('uv', gabhastinemi.attributes.uv); }
  sampramardana.instanceCount = mahashana;
  return sampramardana;
};

// ---------- sacred geometry: luminous linework drawn once into canvas textures, tinted in the quality colour ----------
const shriyantradhara = { value: sankalpa.sacred ? 1 : 0 }; // fades the geometry in and out with the menu switch
function chitrakara(niratyaya, nivrittatma) {
  const kavi = document.createElement('canvas'); kavi.width = kavi.height = niratyaya;
  const manu = kavi.getContext('2d');
  manu.translate(niratyaya / 2, niratyaya / 2); manu.scale(niratyaya / 2, niratyaya / 2); // unit square: -1..1
  manu.strokeStyle = '#fff'; manu.fillStyle = '#fff'; manu.lineJoin = 'round'; manu.lineCap = 'round';
  nivrittatma(manu, 2 / niratyaya);
  const mahasana = new THREE.CanvasTexture(kavi);
  mahasana.anisotropy = 4;
  return mahasana;
}
const MADHAVA = (manu, bhaktivashya, Medhavi = 0, muktanam = 0) => { manu.beginPath(); manu.arc(Medhavi, muktanam, bhaktivashya, 0, POORNAM); manu.stroke(); };
const shrividya = (manu, rudragranthi) => { manu.beginPath(); rudragranthi.forEach(([shatchakra, bisatantu], shura) => (shura ? manu.lineTo(shatchakra, bisatantu) : manu.moveTo(shatchakra, bisatantu))); manu.closePath(); manu.stroke(); };
const geyachakra = (manu, vishvayoni, bhayapaha, shambhavi, niraga = 0) => {
  const sattvastha = Math.PI / vishvayoni;
  for (let shura = 0; shura < vishvayoni; shura++) {
    const chaturbhuja = niraga + shura * POORNAM / vishvayoni;
    manu.beginPath();
    manu.moveTo(Math.cos(chaturbhuja - sattvastha) * bhayapaha, Math.sin(chaturbhuja - sattvastha) * bhayapaha);
    manu.quadraticCurveTo(Math.cos(chaturbhuja - sattvastha * 0.55) * shambhavi * 1.02, Math.sin(chaturbhuja - sattvastha * 0.55) * shambhavi * 1.02, Math.cos(chaturbhuja) * shambhavi, Math.sin(chaturbhuja) * shambhavi);
    manu.quadraticCurveTo(Math.cos(chaturbhuja + sattvastha * 0.55) * shambhavi * 1.02, Math.sin(chaturbhuja + sattvastha * 0.55) * shambhavi * 1.02, Math.cos(chaturbhuja + sattvastha) * bhayapaha, Math.sin(chaturbhuja + sattvastha) * bhayapaha);
    manu.stroke();
  }
};
const shatrughna = (manu, bhaktivashya, niraga = -Math.PI / 2) => {
  for (const udyadbhanu of [0, Math.PI]) shrividya(manu, [0, 1, 2].map(suprasada => [Math.cos(niraga + udyadbhanu + suprasada * POORNAM / 3) * bhaktivashya, Math.sin(niraga + udyadbhanu + suprasada * POORNAM / 3) * bhaktivashya]));
};
// Sri Yantra: nine interlocking triangles (four pointing up, five down), bindu, 8- and 16-petal lotuses,
// three circles and the bhupura square with its four gates. Same drawing as Energy Flow.
function tripura(manu, shatchakra) {
  const papanashini = 1 / 2.05;
  manu.save(); manu.scale(papanashini, papanashini);
  manu.lineWidth = shatchakra * 5 / papanashini;
  const vivarjita = (shringararasasampurna, kameshvarapranadi) => { // base at height yb, apex at ya (canvas y is down, so flip)
    const shuchi = Math.min(Math.sqrt(Math.max(0, 1 - shringararasasampurna * shringararasasampurna)), Math.abs(kameshvarapranadi - shringararasasampurna) * 0.62);
    shrividya(manu, [[-shuchi, -shringararasasampurna], [shuchi, -shringararasasampurna], [0, -kameshvarapranadi]]);
  };
  [[0.68, -1.0], [0.45, -0.82], [0.29, -0.58], [0.10, -0.40], [-0.06, -0.20]].forEach(([shringararasasampurna, kameshvarapranadi]) => vivarjita(shringararasasampurna, kameshvarapranadi)); // Shakti, pointing down
  [[-0.62, 1.0], [-0.42, 0.76], [-0.24, 0.52], [-0.03, 0.30]].forEach(([shringararasasampurna, kameshvarapranadi]) => vivarjita(shringararasasampurna, kameshvarapranadi)); // Shiva, pointing up
  manu.beginPath(); manu.arc(0, 0.05, 0.035, 0, POORNAM); manu.fill(); // bindu
  MADHAVA(manu, 1.04);
  geyachakra(manu, 8, 1.04, 1.34, -Math.PI / 2);
  MADHAVA(manu, 1.36);
  geyachakra(manu, 16, 1.36, 1.64, -Math.PI / 2);
  manu.lineWidth = shatchakra * 3.5 / papanashini;
  [1.67, 1.72, 1.77].forEach(bhaktivashya => MADHAVA(manu, bhaktivashya));
  manu.lineWidth = shatchakra * 2.2 / papanashini;
  for (const sattvastha of [1.88, 1.95, 2.02]) { // bhupura with a gate in the middle of each side
    const samitinjaya = 0.32, sarvayantratmika = 0.16;
    manu.beginPath();
    for (let suprasada = 0; suprasada < 4; suprasada++) {
      manu.save(); manu.rotate(suprasada * Math.PI / 2);
      manu.moveTo(-sattvastha, -sattvastha); manu.lineTo(-samitinjaya, -sattvastha); manu.lineTo(-samitinjaya, -sattvastha - sarvayantratmika); manu.moveTo(samitinjaya, -sattvastha - sarvayantratmika); manu.lineTo(samitinjaya, -sattvastha); manu.lineTo(sattvastha, -sattvastha);
      manu.restore();
    }
    manu.stroke();
  }
  manu.restore();
}
const lalita = chitrakara(1024, tripura);
// Anahata, the heart chakra: a 12-petal lotus around a hexagram.
const hrishikesha = chitrakara(512, (manu, shatchakra) => {
  manu.lineWidth = shatchakra * 3.2;
  geyachakra(manu, 12, 0.55, 0.95, -Math.PI / 2);
  MADHAVA(manu, 0.55); MADHAVA(manu, 0.5);
  shatrughna(manu, 0.47);
  MADHAVA(manu, 0.14);
});
// Metatron's Cube over the Fruit of Life: 13 circles, every centre joined to every other.
const brahma = chitrakara(1024, (manu, shatchakra) => {
  manu.lineWidth = shatchakra * 3;
  const bhaktivashya = 0.16, rudragranthi = [[0, 0]];
  for (let suprasada = 0; suprasada < 6; suprasada++) { const chaturbhuja = -Math.PI / 2 + suprasada * POORNAM / 6; rudragranthi.push([Math.cos(chaturbhuja) * 2 * bhaktivashya, Math.sin(chaturbhuja) * 2 * bhaktivashya], [Math.cos(chaturbhuja) * 4 * bhaktivashya, Math.sin(chaturbhuja) * 4 * bhaktivashya]); }
  rudragranthi.forEach(([kundalini, bhavani]) => MADHAVA(manu, bhaktivashya, kundalini, bhavani));
  manu.beginPath();
  for (let shura = 0; shura < rudragranthi.length; shura++) for (let sukshma = shura + 1; sukshma < rudragranthi.length; sukshma++) { manu.moveTo(...rudragranthi[shura]); manu.lineTo(...rudragranthi[sukshma]); }
  manu.stroke();
  MADHAVA(manu, 5 * bhaktivashya);
});
// Seed of Life with a hexagram, in a double circle.
const kartikeya = chitrakara(512, (manu, shatchakra) => {
  manu.lineWidth = shatchakra * 3;
  MADHAVA(manu, 0.95); MADHAVA(manu, 0.9);
  shatrughna(manu, 0.86);
  const bhaktivashya = 0.3;
  MADHAVA(manu, bhaktivashya);
  for (let suprasada = 0; suprasada < 6; suprasada++) MADHAVA(manu, bhaktivashya, Math.cos(suprasada * POORNAM / 6) * bhaktivashya, Math.sin(suprasada * POORNAM / 6) * bhaktivashya);
});
// Flower of Life: 19 circles on a hexagonal lattice, in two outer circles.
function pushpitavana(manu, bhaktivashya) {
  const kshara = [[0, 0]];
  for (let nishprapancha = 1; nishprapancha <= 2; nishprapancha++) for (let suprasada = 0; suprasada < 6; suprasada++) for (let nirmoha = 0; nirmoha < nishprapancha; nirmoha++) {
    const avijnata = suprasada * POORNAM / 6, avyanga = (suprasada + 1) * POORNAM / 6;
    const brahmadyanandasantati = Math.cos(avijnata) * nishprapancha * bhaktivashya, vaikharirupa = Math.sin(avijnata) * nishprapancha * bhaktivashya, para = Math.cos(avyanga) * nishprapancha * bhaktivashya, bhaktamanasahamsika = Math.sin(avyanga) * nishprapancha * bhaktivashya;
    kshara.push([brahmadyanandasantati + (para - brahmadyanandasantati) * nirmoha / nishprapancha, vaikharirupa + (bhaktamanasahamsika - vaikharirupa) * nirmoha / nishprapancha]);
  }
  kshara.forEach(([Medhavi, muktanam]) => MADHAVA(manu, bhaktivashya, Medhavi, muktanam));
  MADHAVA(manu, 3 * bhaktivashya); MADHAVA(manu, 3 * bhaktivashya * 1.04);
}
// The floor mandala of the Harmony Bloom: a Sri Yantra at the centre, inside the Flower of Life, a 24-petal lotus and gates.
const shripura = chitrakara(2048, (manu, shatchakra) => {
  manu.lineWidth = shatchakra * 4;
  manu.save(); manu.scale(0.3, 0.3); tripura(manu, shatchakra / 0.3 * 0.9); manu.restore();
  manu.lineWidth = shatchakra * 4;
  pushpitavana(manu, 0.2);
  geyachakra(manu, 24, 0.66, 0.84, -Math.PI / 2);
  MADHAVA(manu, 0.86); MADHAVA(manu, 0.88);
  geyachakra(manu, 36, 0.88, 0.95, -Math.PI / 2);
  MADHAVA(manu, 0.97);
});
// The glow of a line texture: the sharp line with a soft halo from a blurrier mip level, in the palette colour.
const SHRICHAKRA = VARNAPATHA + /* glsl */`
  uniform sampler2D ijya;
  varying vec2 jagatikanda; varying float rakenduvadana;
  void main(){
    float Vasuda = texture2D(ijya, jagatikanda).a;
    float satya = texture2D(ijya, jagatikanda, 3.5).a;
    vec2 nahusha = jagatikanda - 0.5;
    vec3 gabhastinemi = varnadhara(fract(length(nahusha) * 2.2 + atan(nahusha.y, nahusha.x) / 6.2831853));
    vec3 mahabala = mix(gabhastinemi * 1.5, vec3(1.), 0.35 * Vasuda);
    float avartana = (Vasuda * 0.9 + satya * 1.3) * rakenduvadana;
    gl_FragColor = vec4(mahabala * avartana, avartana * 0.3);
  }`;
// A flat sacred texture on a quad (its own position and rotation), fading with the menu switch.
function yantreshvari(mahasana, mahabhoga) {
  return new THREE.ShaderMaterial({
    uniforms: { ijya: { value: mahasana }, vikarta: { value: mahabhoga }, satra: { value: 0 }, sarvajna: { value: 0 }, mahejya: shriyantradhara, sarvadarshi: { value: 0 }, vimuktatma: { value: 1 } },
    ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      uniform float satra, sarvajna, mahejya, sarvadarshi, vimuktatma; varying vec2 jagatikanda; varying float rakenduvadana;
      void main(){
        vec2 nirmada = vec2(position.x * cos(sarvajna) - position.y * sin(sarvajna), position.x * sin(sarvajna) + position.y * cos(sarvajna)) * vimuktatma;
        jagatikanda = position.xy * 0.5 + 0.5; rakenduvadana = satra * mahejya;
        if (sarvadarshi > 0.5) { vec4 vishvatma = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vishvatma.xy += nirmada; gl_Position = projectionMatrix * vishvatma; }
        else gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(nirmada, 0., 1.);
      }`,
    fragmentShader: SHRICHAKRA,
  });
}

// ---------- the beings' names: Devas, Rishis and Pitrus of the tarpanam ----------
// From the Yajurveda Bodhayana-sutra tarpanam ("Amma Alive" form, Gurukulam: youtube.com/watch?v=dwKx50BQWr0).
// Devas and Rishis: the Brahma-yajna Deva and Rishi tarpanam. Pitrus: the 24 categories of the main tarpanam
// (categories, not personal names). Each: Devanagari, IAST, an English gloss, the accusative used in "... tarpayami",
// plural (1: a collective, shown as one being) and feminine (1: a softer, more graceful form), in tarpanam order.
// Devas are offered with the thread over the left shoulder (yajnopaviti), Rishis with it as a garland (niviti),
// Pitrus over the right shoulder (pracinaviti).
const TARPANAVIDHI = {
  deva: [
    ['अग्नि', 'Agni', 'Agni, fire', 'Agniṃ', 0, 0],
    ['प्रजापति', 'Prajāpati', 'lord of all beings', 'Prajāpatiṃ', 0, 0],
    ['सोम', 'Soma', 'Soma, the moon', 'Somaṃ', 0, 0],
    ['रुद्र', 'Rudra', 'Rudra', 'Rudraṃ', 0, 0],
    ['अदिति', 'Aditi', 'Aditi, mother of the gods', 'Aditiṃ', 0, 1],
    ['बृहस्पति', 'Bṛhaspati', 'teacher of the gods', 'Bṛhaspatiṃ', 0, 0],
    ['सर्पाः', 'Sarpāḥ', 'the Serpents', 'Sarpān', 1, 0],
    ['वसवः', 'Vasavaḥ', 'the Vasus, with the deities of the eastern door', 'Vasūn', 1, 0],
    ['पितरः', 'Pitaraḥ', 'the Fathers, deities of the southern door', 'Pitṝn', 1, 0],
    ['अर्यमा', 'Aryamā', 'Aryaman', 'Aryamaṇaṃ', 0, 0],
    ['भग', 'Bhaga', 'Bhaga, giver of fortune', 'Bhagaṃ', 0, 0],
    ['सविता', 'Savitā', 'Savitṛ, the impelling Sun', 'Savitāraṃ', 0, 0],
    ['त्वष्टा', 'Tvaṣṭā', 'Tvaṣṭṛ, the divine shaper', 'Tvaṣṭāraṃ', 0, 0],
    ['वायु', 'Vāyu', 'Vāyu, the wind', 'Vāyuṃ', 0, 0],
    ['इन्द्राग्नी', 'Indrāgnī', 'Indra and Agni', 'Indrāgnī', 0, 0],
    ['रुद्राः', 'Rudrāḥ', 'the Rudras, with the deities of the southern door', 'Rudrān', 1, 0],
    ['मित्र', 'Mitra', 'Mitra, friend of all', 'Mitraṃ', 0, 0],
    ['इन्द्र', 'Indra', 'Indra, king of the gods', 'Indraṃ', 0, 0],
    ['महापितरः', 'Mahāpitaraḥ', 'the Great Fathers', 'Mahāpitṝn', 1, 0],
    ['आपः', 'Āpaḥ', 'the Waters', 'Apaḥ', 1, 1],
    ['विश्वेदेवाः', 'Viśvedevāḥ', 'the All-gods', 'Viśvān devān', 1, 0],
    ['ब्रह्मा', 'Brahmā', 'Brahmā, the Creator', 'Brahmāṇaṃ', 0, 0],
    ['विष्णु', 'Viṣṇu', 'Viṣṇu', 'Viṣṇuṃ', 0, 0],
    ['आदित्याः', 'Ādityāḥ', 'the Ādityas, with the deities of the western door', 'Ādityān', 1, 0],
    ['वसवः', 'Vasavaḥ', 'the Vasus, deities of the northern door', 'Vasūn', 1, 0],
    ['वरुण', 'Varuṇa', 'Varuṇa, lord of the waters', 'Varuṇaṃ', 0, 0],
    ['अज एकपाद्', 'Aja Ekapād', 'the One-footed Unborn', 'Ajam Ekapādaṃ', 0, 0],
    ['अहिर्बुध्न्य', 'Ahirbudhnya', 'the Serpent of the Deep', 'Ahirbudhnyaṃ', 0, 0],
    ['पूषा', 'Pūṣā', 'Pūṣan, the nourisher', 'Pūṣaṇaṃ', 0, 0],
    ['अश्विनौ', 'Aśvinau', 'the twin Aśvins, divine healers', 'Aśvinau', 1, 0],
    ['यम', 'Yama', 'Yama', 'Yamaṃ', 0, 0],
    ['साध्याः', 'Sādhyāḥ', 'the Sādhyas, with the deities of the northern door', 'Sādhyān', 1, 0],
    ['ब्रह्मा', 'Brahmā', 'Brahmā, first of his circle', 'Brahmāṇaṃ', 0, 0],
    ['प्रजापति', 'Prajāpati', 'Brahmā as lord of beings', 'Prajāpatiṃ', 0, 0],
    ['परमेष्ठी', 'Parameṣṭhī', 'who stands in the highest', 'Parameṣṭhinaṃ', 0, 0],
    ['हिरण्यगर्भ', 'Hiraṇyagarbha', 'the Golden Womb', 'Hiraṇyagarbhaṃ', 0, 0],
    ['चतुर्मुख', 'Caturmukha', 'the four-faced', 'Caturmukhaṃ', 0, 0],
    ['स्वयम्भू', 'Svayambhū', 'the Self-born', 'Svayambhuvaṃ', 0, 0],
    ['ब्रह्मपार्षदाः', 'Brahmapārṣadāḥ', 'Brahmā\'s attendants', 'Brahmapārṣadān', 1, 0],
    ['ब्रह्मपार्षद्यः', 'Brahmapārṣadyaḥ', 'Brahmā\'s women attendants', 'Brahmapārṣadīḥ', 1, 1],
    ['अग्नि', 'Agni', 'Agni, fire', 'Agniṃ', 0, 0],
    ['वायु', 'Vāyu', 'Vāyu, the wind', 'Vāyuṃ', 0, 0],
    ['वरुण', 'Varuṇa', 'Varuṇa, the waters', 'Varuṇaṃ', 0, 0],
    ['सोम', 'Soma', 'Soma', 'Somaṃ', 0, 0],
    ['सूर्य', 'Sūrya', 'Sūrya, the Sun', 'Sūryaṃ', 0, 0],
    ['चन्द्रमाः', 'Candramāḥ', 'the Moon', 'Candramasaṃ', 0, 0],
    ['नक्षत्राणि', 'Nakṣatrāṇi', 'the Lunar Mansions', 'Nakṣatrāṇi', 1, 0],
    ['ज्योतींषि', 'Jyotīṃṣi', 'the Lights of heaven', 'Jyotīṃṣi', 1, 0],
    ['सद्योजात', 'Sadyojāta', 'the Instantly Born, face of Śiva', 'Sadyojātaṃ', 0, 0],
    ['ओं भूः पुरुष', 'Oṃ Bhūḥ Puruṣa', 'the Person of the earth', 'Oṃ Bhūḥ Puruṣaṃ', 0, 0],
    ['ओं भुवः पुरुष', 'Oṃ Bhuvaḥ Puruṣa', 'the Person of the mid-space', 'Oṃ Bhuvaḥ Puruṣaṃ', 0, 0],
    ['ओं सुवः पुरुष', 'Oṃ Suvaḥ Puruṣa', 'the Person of heaven', 'Oṃ Suvaḥ Puruṣaṃ', 0, 0],
    ['ओं भूर्भुवस्सुवः पुरुष', 'Oṃ Bhūrbhuvassuvaḥ Puruṣa', 'the Person of all three worlds', 'Oṃ Bhūrbhuvassuvaḥ Puruṣaṃ', 0, 0],
    ['ओं भूः', 'Oṃ Bhūḥ', 'the earth world', 'Oṃ Bhūḥ', 0, 0],
    ['ओं भुवः', 'Oṃ Bhuvaḥ', 'the mid-world', 'Oṃ Bhuvaḥ', 0, 0],
    ['ओं सुवः', 'Oṃ Suvaḥ', 'the heaven world', 'Oṃ Suvaḥ', 0, 0],
    ['ओं महः', 'Oṃ Mahaḥ', 'the world of greatness', 'Oṃ Mahaḥ', 0, 0],
    ['ओं जनः', 'Oṃ Janaḥ', 'the world of the born', 'Oṃ Janaḥ', 0, 0],
    ['ओं तपः', 'Oṃ Tapaḥ', 'the world of austerity', 'Oṃ Tapaḥ', 0, 0],
    ['ओं सत्यम्', 'Oṃ Satyam', 'the world of truth', 'Oṃ Satyaṃ', 0, 0],
    ['भव देव', 'Bhava Deva', 'Śiva as Bhava', 'Bhavaṃ devaṃ', 0, 0],
    ['शर्व देव', 'Śarva Deva', 'Śiva as Śarva', 'Śarvaṃ devaṃ', 0, 0],
    ['ईशान देव', 'Īśāna Deva', 'Śiva as Īśāna', 'Īśānaṃ devaṃ', 0, 0],
    ['पशुपति देव', 'Paśupati Deva', 'Śiva as Paśupati', 'Paśupatiṃ devaṃ', 0, 0],
    ['रुद्र देव', 'Rudra Deva', 'Śiva as Rudra', 'Rudraṃ devaṃ', 0, 0],
    ['उग्र देव', 'Ugra Deva', 'Śiva as Ugra', 'Ugraṃ devaṃ', 0, 0],
    ['भीम देव', 'Bhīma Deva', 'Śiva as Bhīma', 'Bhīmaṃ devaṃ', 0, 0],
    ['महान् देव', 'Mahān Deva', 'Śiva as Mahān', 'Mahāntaṃ devaṃ', 0, 0],
    ['भवस्य देवस्य पत्नी', 'Bhavasya Devasya Patnī', 'consort of Bhava', 'Bhavasya devasya patnīṃ', 0, 1],
    ['शर्वस्य देवस्य पत्नी', 'Śarvasya Devasya Patnī', 'consort of Śarva', 'Śarvasya devasya patnīṃ', 0, 1],
    ['ईशानस्य देवस्य पत्नी', 'Īśānasya Devasya Patnī', 'consort of Īśāna', 'Īśānasya devasya patnīṃ', 0, 1],
    ['पशुपतेः देवस्य पत्नी', 'Paśupateḥ Devasya Patnī', 'consort of Paśupati', 'Paśupateḥ devasya patnīṃ', 0, 1],
    ['रुद्रस्य देवस्य पत्नी', 'Rudrasya Devasya Patnī', 'consort of Rudra', 'Rudrasya devasya patnīṃ', 0, 1],
    ['उग्रस्य देवस्य पत्नी', 'Ugrasya Devasya Patnī', 'consort of Ugra', 'Ugrasya devasya patnīṃ', 0, 1],
    ['भीमस्य देवस्य पत्नी', 'Bhīmasya Devasya Patnī', 'consort of Bhīma', 'Bhīmasya devasya patnīṃ', 0, 1],
    ['महतः देवस्य पत्नी', 'Mahataḥ Devasya Patnī', 'consort of Mahān', 'Mahataḥ devasya patnīṃ', 0, 1],
    ['भवस्य देवस्य सुत', 'Bhavasya Devasya Suta', 'son of Bhava', 'Bhavasya devasya sutaṃ', 0, 0],
    ['शर्वस्य देवस्य सुत', 'Śarvasya Devasya Suta', 'son of Śarva', 'Śarvasya devasya sutaṃ', 0, 0],
    ['ईशानस्य देवस्य सुत', 'Īśānasya Devasya Suta', 'son of Īśāna', 'Īśānasya devasya sutaṃ', 0, 0],
    ['पशुपतेः देवस्य सुत', 'Paśupateḥ Devasya Suta', 'son of Paśupati', 'Paśupateḥ devasya sutaṃ', 0, 0],
    ['रुद्रस्य देवस्य सुत', 'Rudrasya Devasya Suta', 'son of Rudra', 'Rudrasya devasya sutaṃ', 0, 0],
    ['उग्रस्य देवस्य सुत', 'Ugrasya Devasya Suta', 'son of Ugra', 'Ugrasya devasya sutaṃ', 0, 0],
    ['भीमस्य देवस्य सुत', 'Bhīmasya Devasya Suta', 'son of Bhīma', 'Bhīmasya devasya sutaṃ', 0, 0],
    ['महतः देवस्य सुत', 'Mahataḥ Devasya Suta', 'son of Mahān', 'Mahataḥ devasya sutaṃ', 0, 0],
    ['रुद्राः', 'Rudrāḥ', 'the Rudras', 'Rudrān', 1, 0],
    ['रुद्रपार्षदाः', 'Rudrapārṣadāḥ', 'Rudra\'s attendants', 'Rudrapārṣadān', 1, 0],
    ['रुद्रपार्षद्यः', 'Rudrapārṣadyaḥ', 'Rudra\'s women attendants', 'Rudrapārṣadīḥ', 1, 1],
    ['सनत्कुमार', 'Sanatkumāra', 'the eternal youth', 'Sanatkumāraṃ', 0, 0],
    ['स्कन्द', 'Skanda', 'Skanda', 'Skandaṃ', 0, 0],
    ['इन्द्र', 'Indra', 'Indra', 'Indraṃ', 0, 0],
    ['षष्ठी', 'Ṣaṣṭhī', 'Ṣaṣṭhī, consort of Skanda', 'Ṣaṣṭhīṃ', 0, 1],
    ['षण्मुख', 'Ṣaṇmukha', 'the six-faced', 'Ṣaṇmukhaṃ', 0, 0],
    ['विशाख', 'Viśākha', 'Viśākha', 'Viśākhaṃ', 0, 0],
    ['जयन्त', 'Jayanta', 'the victorious', 'Jayantaṃ', 0, 0],
    ['महासेन', 'Mahāsena', 'commander of the gods', 'Mahāsenaṃ', 0, 0],
    ['स्कन्दपार्षदाः', 'Skandapārṣadāḥ', 'Skanda\'s attendants', 'Skandapārṣadān', 1, 0],
    ['स्कन्दपार्षद्यः', 'Skandapārṣadyaḥ', 'Skanda\'s women attendants', 'Skandapārṣadīḥ', 1, 1],
    ['विघ्न', 'Vighna', 'lord of obstacles', 'Vighnaṃ', 0, 0],
    ['विनायक', 'Vināyaka', 'the remover', 'Vināyakaṃ', 0, 0],
    ['वीर', 'Vīra', 'the hero', 'Vīraṃ', 0, 0],
    ['शूर', 'Śūra', 'the valiant', 'Śūraṃ', 0, 0],
    ['वरद', 'Varada', 'giver of boons', 'Varadaṃ', 0, 0],
    ['हस्तिमुख', 'Hastimukha', 'the elephant-faced', 'Hastimukhaṃ', 0, 0],
    ['एकदन्त', 'Ekadanta', 'the one-tusked', 'Ekadantaṃ', 0, 0],
    ['लम्बोदर', 'Lambodara', 'the big-bellied', 'Lambodaraṃ', 0, 0],
    ['वक्रतुण्ड', 'Vakratuṇḍa', 'of the curved trunk', 'Vakratuṇḍaṃ', 0, 0],
    ['गणपति', 'Gaṇapati', 'lord of the hosts', 'Gaṇapatiṃ', 0, 0],
    ['विघ्नपार्षदाः', 'Vighnapārṣadāḥ', 'Gaṇapati\'s attendants', 'Vighnapārṣadān', 1, 0],
    ['विघ्नपार्षद्यः', 'Vighnapārṣadyaḥ', 'Gaṇapati\'s women attendants', 'Vighnapārṣadīḥ', 1, 1],
    ['केशव', 'Keśava', 'name of Viṣṇu', 'Keśavaṃ', 0, 0],
    ['नारायण', 'Nārāyaṇa', 'name of Viṣṇu', 'Nārāyaṇaṃ', 0, 0],
    ['माधव', 'Mādhava', 'name of Viṣṇu', 'Mādhavaṃ', 0, 0],
    ['गोविन्द', 'Govinda', 'name of Viṣṇu', 'Govindaṃ', 0, 0],
    ['विष्णु', 'Viṣṇu', 'name of Viṣṇu', 'Viṣṇuṃ', 0, 0],
    ['मधुसूदन', 'Madhusūdana', 'name of Viṣṇu', 'Madhusūdanaṃ', 0, 0],
    ['त्रिविक्रम', 'Trivikrama', 'name of Viṣṇu', 'Trivikramaṃ', 0, 0],
    ['वामन', 'Vāmana', 'name of Viṣṇu', 'Vāmanaṃ', 0, 0],
    ['श्रीधर', 'Śrīdhara', 'name of Viṣṇu', 'Śrīdharaṃ', 0, 0],
    ['हृषीकेश', 'Hṛṣīkeśa', 'name of Viṣṇu', 'Hṛṣīkeśaṃ', 0, 0],
    ['पद्मनाभ', 'Padmanābha', 'name of Viṣṇu', 'Padmanābhaṃ', 0, 0],
    ['दामोदर', 'Dāmodara', 'name of Viṣṇu', 'Dāmodaraṃ', 0, 0],
    ['श्रीदेवी', 'Śrīdevī', 'Śrī, goddess of fortune', 'Śrīdevīṃ', 0, 1],
    ['ह्रीदेवी', 'Hrīdevī', 'Hrī, goddess of modesty', 'Hrīdevīṃ', 0, 1],
    ['पुष्टिदेवी', 'Puṣṭidevī', 'Puṣṭi, goddess of nourishment', 'Puṣṭidevīṃ', 0, 1],
    ['वैनतेय', 'Vainateya', 'Garuḍa', 'Vainateyaṃ', 0, 0],
    ['काल', 'Kāla', 'Time', 'Kālaṃ', 0, 0],
    ['नील', 'Nīla', 'the dark one', 'Nīlaṃ', 0, 0],
    ['मृत्यु', 'Mṛtyu', 'Death', 'Mṛtyuṃ', 0, 0],
    ['अन्तक', 'Antaka', 'the Ender', 'Antakaṃ', 0, 0],
    ['यम', 'Yama', 'Yama', 'Yamaṃ', 0, 0],
    ['यमराज', 'Yamarāja', 'King Yama', 'Yamarājaṃ', 0, 0],
    ['धर्म', 'Dharma', 'Dharma', 'Dharmaṃ', 0, 0],
    ['धर्मराज', 'Dharmarāja', 'king of dharma', 'Dharmarājaṃ', 0, 0],
    ['चित्र', 'Citra', 'the bright one', 'Citraṃ', 0, 0],
    ['चित्रगुप्त', 'Citragupta', 'keeper of the record of deeds', 'Citraguptaṃ', 0, 0],
    ['वैवस्वत', 'Vaivasvata', 'son of the Sun', 'Vaivasvataṃ', 0, 0],
    ['वैवस्वतपार्षदाः', 'Vaivasvatapārṣadāḥ', 'Yama\'s attendants', 'Vaivasvatapārṣadān', 1, 0],
    ['वैवस्वतपार्षद्यः', 'Vaivasvatapārṣadyaḥ', 'Yama\'s women attendants', 'Vaivasvatapārṣadīḥ', 1, 1],
    ['विष्णु', 'Viṣṇu', 'Viṣṇu', 'Viṣṇuṃ', 0, 0],
    ['विष्णुपार्षदाः', 'Viṣṇupārṣadāḥ', 'Viṣṇu\'s attendants', 'Viṣṇupārṣadān', 1, 0],
    ['विष्णुपार्षद्यः', 'Viṣṇupārṣadyaḥ', 'Viṣṇu\'s women attendants', 'Viṣṇupārṣadīḥ', 1, 1],
    ['भरद्वाज', 'Bharadvāja', 'the seer Bharadvāja', 'Bharadvājaṃ', 0, 0],
    ['गौतम', 'Gautama', 'the seer Gautama', 'Gautamaṃ', 0, 0],
    ['अत्रि', 'Atri', 'the seer Atri', 'Atriṃ', 0, 0],
    ['अङ्गिरस्', 'Aṅgiras', 'the seer Aṅgiras', 'Aṅgirasaṃ', 0, 0],
    ['विद्या', 'Vidyā', 'Knowledge', 'Vidyāṃ', 0, 1],
    ['दुर्गा', 'Durgā', 'Durgā', 'Durgāṃ', 0, 1],
    ['ज्येष्ठा', 'Jyeṣṭhā', 'Jyeṣṭhā, the elder goddess', 'Jyeṣṭhāṃ', 0, 1],
    ['धन्वन्तरि', 'Dhanvantari', 'physician of the gods', 'Dhanvantariṃ', 0, 0],
    ['धन्वन्तरिपार्षदाः', 'Dhanvantaripārṣadāḥ', 'Dhanvantari\'s attendants', 'Dhanvantaripārṣadān', 1, 0],
    ['धन्वन्तरिपार्षद्यः', 'Dhanvantaripārṣadyaḥ', 'Dhanvantari\'s women attendants', 'Dhanvantaripārṣadīḥ', 1, 1],
  ],
  rishi: [
    ['ऋषयः', 'Ṛṣayaḥ', 'the Seers', 'Ṛṣaīn', 1, 0],
    ['महर्षयः', 'Maharṣayaḥ', 'the great Seers', 'Maharṣaīn', 1, 0],
    ['परमर्षयः', 'Paramarṣayaḥ', 'the supreme Seers', 'Paramarṣaīn', 1, 0],
    ['देवर्षयः', 'Devarṣayaḥ', 'the divine Seers', 'Devarṣaīn', 1, 0],
    ['ब्रह्मर्षयः', 'Brahmarṣayaḥ', 'the Brahmin Seers', 'Brahmarṣaīn', 1, 0],
    ['राजर्षयः', 'Rājarṣayaḥ', 'the royal Seers', 'Rājarṣaīn', 1, 0],
    ['वैश्यर्षयः', 'Vaiśyarṣayaḥ', 'the merchant Seers', 'Vaiśyarṣaīn', 1, 0],
    ['सूतर्षयः', 'Sūtarṣayaḥ', 'the bard Seers', 'Sūtarṣaīn', 1, 0],
    ['श्रुतर्षयः', 'Śrutarṣayaḥ', 'the Seers of hearing', 'Śrutarṣaīn', 1, 0],
    ['जनर्षयः', 'Janarṣayaḥ', 'the Seers of the people', 'Janarṣaīn', 1, 0],
    ['तपर्षयः', 'Taparṣayaḥ', 'the Seers of austerity', 'Taparṣaīn', 1, 0],
    ['सत्यर्षयः', 'Satyarṣayaḥ', 'the Seers of truth', 'Satyarṣaīn', 1, 0],
    ['सप्तर्षयः', 'Saptarṣayaḥ', 'the Seven Seers', 'Saptarṣaīn', 1, 0],
    ['काण्डर्षयः', 'Kāṇḍarṣayaḥ', 'the Seers of the Veda sections', 'Kāṇḍarṣaīn', 1, 0],
    ['ऋषिकाः', 'Ṛṣikāḥ', 'the lesser Seers', 'Ṛṣikān', 1, 0],
    ['ऋषिपत्न्यः', 'Ṛṣipatnyaḥ', 'the Seers\' wives', 'Ṛṣipatnīḥ', 1, 1],
    ['ऋषिपुत्राः', 'Ṛṣiputrāḥ', 'the Seers\' sons', 'Ṛṣiputrān', 1, 0],
    ['ऋषिपौत्राः', 'Ṛṣipautrāḥ', 'the Seers\' grandsons', 'Ṛṣipautrān', 1, 0],
    ['काण्व बोधायन', 'Kāṇva Bodhāyana', 'author of our Sūtra', 'Kāṇvaṃ Bodhāyanaṃ', 0, 0],
    ['आपस्तम्ब सूत्रकार', 'Āpastamba Sūtrakāra', 'Āpastamba, author of a Sūtra', 'Āpastambaṃ Sūtrakāraṃ', 0, 0],
    ['सत्याषाढ हिरण्यकेशिन्', 'Satyāṣāḍha Hiraṇyakeśin', 'Satyāṣāḍha, author of a Sūtra', 'Satyāṣāḍhaṃ Hiraṇyakeśinaṃ', 0, 0],
    ['वाजसनेय याज्ञवल्क्य', 'Vājasaneya Yājñavalkya', 'seer of the White Yajurveda', 'Vājasaneyaṃ Yājñavalkyaṃ', 0, 0],
    ['आश्वलायन शौनक', 'Āśvalāyana Śaunaka', 'teachers of the Ṛgveda Sūtra', 'Āśvalāyanaṃ Śaunakaṃ', 0, 0],
    ['व्यास', 'Vyāsa', 'arranger of the Vedas', 'Vyāsaṃ', 0, 0],
    ['वसिष्ठ', 'Vasiṣṭha', 'the seer Vasiṣṭha', 'Vasiṣṭhaṃ', 0, 0],
    ['प्रणव', 'Praṇava', 'the syllable Om', 'Praṇavaṃ', 0, 0],
    ['व्याहृतयः', 'Vyāhṛtayaḥ', 'the Vyāhṛtis: bhūḥ, bhuvaḥ, suvaḥ', 'Vyāhṛtīḥ', 1, 1],
    ['सावित्री', 'Sāvitrī', 'the verse to Savitṛ', 'Sāvitrīṃ', 0, 1],
    ['गायत्री', 'Gāyatrī', 'Gāyatrī, mother of the Vedas', 'Gāyatrīṃ', 0, 1],
    ['छन्दांसि', 'Chandāṃsi', 'the Metres', 'Chandāṃsi', 1, 0],
    ['सदसस्पति', 'Sadasaspati', 'lord of the assembly', 'Sadasaspatiṃ', 0, 0],
    ['ऋग्वेद', 'Ṛgveda', 'the Ṛgveda', 'Ṛgvedaṃ', 0, 0],
    ['यजुर्वेद', 'Yajurveda', 'the Yajurveda', 'Yajurvedaṃ', 0, 0],
    ['सामवेद', 'Sāmaveda', 'the Sāmaveda', 'Sāmavedaṃ', 0, 0],
    ['अथर्ववेद', 'Atharvaveda', 'the Atharvaveda', 'Atharvavedaṃ', 0, 0],
    ['अथर्वाङ्गिरसः', 'Atharvāṅgirasaḥ', 'the Atharvan and Aṅgiras hymns', 'Atharvāṅgirasaḥ', 1, 0],
    ['इतिहासपुराणानि', 'Itihāsapurāṇāni', 'the Epics and Purāṇas', 'Itihāsapurāṇāni', 1, 0],
    ['सर्पदेवजनाः', 'Sarpadevajanāḥ', 'the serpent and divine peoples', 'Sarpadevajanān', 1, 0],
    ['सर्वभूतानि', 'Sarvabhūtāni', 'all beings', 'Sarvabhūtāni', 1, 0],
  ],
  pitru: [
    ['पितॄन्', 'Pitṝn', 'fathers', 'Pitṝn', 1, 0],
    ['पितामहान्', 'Pitāmahān', 'paternal grandfathers', 'Pitāmahān', 1, 0],
    ['प्रपितामहान्', 'Prapitāmahān', 'paternal great-grandfathers', 'Prapitāmahān', 1, 0],
    ['पितामहीः', 'Pitāmahīḥ', 'paternal grandmothers', 'Pitāmahīḥ', 1, 1],
    ['पितुः पितामहीः', 'Pituḥ Pitāmahīḥ', 'paternal great-grandmothers', 'Pituḥ Pitāmahīḥ', 1, 1],
    ['पितुः प्रपितामहीः', 'Pituḥ Prapitāmahīḥ', 'paternal great-great-grandmothers', 'Pituḥ Prapitāmahīḥ', 1, 1],
    ['मातामहान्', 'Mātāmahān', 'maternal grandfathers', 'Mātāmahān', 1, 0],
    ['मातुः पितामहान्', 'Mātuḥ Pitāmahān', 'maternal great-grandfathers', 'Mātuḥ Pitāmahān', 1, 0],
    ['मातुः प्रपितामहान्', 'Mātuḥ Prapitāmahān', 'maternal great-great-grandfathers', 'Mātuḥ Prapitāmahān', 1, 0],
    ['मातामहीः', 'Mātāmahīḥ', 'maternal grandmothers', 'Mātāmahīḥ', 1, 1],
    ['मातुः पितामहीः', 'Mātuḥ Pitāmahīḥ', 'maternal great-grandmothers', 'Mātuḥ Pitāmahīḥ', 1, 1],
    ['मातुः प्रपितामहीः', 'Mātuḥ Prapitāmahīḥ', 'maternal great-great-grandmothers', 'Mātuḥ Prapitāmahīḥ', 1, 1],
    ['आचार्यान्', 'Ācāryān', 'teachers', 'Ācāryān', 1, 0],
    ['आचार्यपत्नीः', 'Ācāryapatnīḥ', 'teachers\' wives', 'Ācāryapatnīḥ', 1, 1],
    ['गुरून्', 'Gurūn', 'gurus', 'Gurūn', 1, 0],
    ['गुरुपत्नीः', 'Gurupatnīḥ', 'gurus\' wives', 'Gurupatnīḥ', 1, 1],
    ['सखीन्', 'Sakhīn', 'friends', 'Sakhīn', 1, 0],
    ['सखिपत्नीः', 'Sakhipatnīḥ', 'friends\' wives', 'Sakhipatnīḥ', 1, 1],
    ['ज्ञातीन्', 'Jñātīn', 'kinsmen', 'Jñātīn', 1, 0],
    ['ज्ञातिपत्नीः', 'Jñātipatnīḥ', 'kinsmen\'s wives', 'Jñātipatnīḥ', 1, 1],
    ['अमात्यान्', 'Amātyān', 'associates and companions', 'Amātyān', 1, 0],
    ['अमात्यपत्नीः', 'Amātyapatnīḥ', 'companions\' wives', 'Amātyapatnīḥ', 1, 1],
    ['सर्वान्', 'Sarvān', 'all departed men', 'Sarvān', 1, 0],
    ['सर्वाः', 'Sarvāḥ', 'all departed women', 'Sarvāḥ', 1, 1],
  ],
};
const TRIVARGA = ['deva', 'rishi', 'pitru'];
const GOTRANAMA = { deva: 'Deva', rishi: 'Ṛṣi', pitru: 'Pitṛ' };
const GOTRAVIDHI = ['All three', 'Devas', 'Rishis', 'Pitrus'];
const TRIBHAGA = { deva: 0.4, rishi: 0.35, pitru: 0.25 }; // guess: the default mix
// A subtle accent for each group, used only on its form (thread, crown, beads, shimmer), never on a blessing.
const UPAVARNA = { deva: new THREE.Color(1.0, 0.9, 0.62), rishi: new THREE.Color(1.0, 0.68, 0.36), pitru: new THREE.Color(0.7, 0.82, 1.0) };
const LOKATRAYA = { deva: [2.0, 2.85], rishi: [1.3, 2.05], pitru: [0.85, 1.45] }; // guess: heights in metres
const SARVATARPANA = 'Sarvān devān ṛṣīn pitṝn tarpayāmi';
// Sandhi before tarpayāmi: a final -n becomes -ṃs (vedān -> vedāṃs tarpayāmi).
// Pitrus are offered with svadhā: "Pitāmahān svadhā namas tarpayāmi".
const tarpanamantra = (bhujagottama, vasudeva) => (vasudeva === 'pitru' ? bhujagottama + ' svadhā namas tarpayāmi' : (bhujagottama.endsWith('n') ? bhujagottama.slice(0, -1) + 'ṃs' : bhujagottama) + ' tarpayāmi');
const namajapa = { deva: 0, rishi: 0, pitru: 0 }; // each group cycles through its tarpanam order
// The canvas font for names. Android (and so the Quest Browser) normally carries Noto Sans Devanagari.
const DEVALIPI = "'Noto Sans Devanagari', 'Noto Serif Devanagari', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Devanagari MT', 'Nirmala UI', 'Mangal', sans-serif";
const ROMALIPI = "'Noto Serif', 'Noto Sans', Georgia, 'Times New Roman', serif";

// ---------- beings of light (Devas) ----------
// Each being faces you: a white-hot core inside a soft, roughly human radiance of flowing light, a turning halo,
// breathing veils of light like wings or petals, orbiting motes, layered fresnel shells, and a faint yantra behind.
// Everything is in the being's own quality colour; only the core goes white-hot.
const Shader = /* glsl */`
uniform vec3 rudrarupa, prajnatmika; uniform float vidarana, bhairavi, purna, hridya, panchakrityaparayana, ambika, sarvavasthavivarjita, bhagavati, bhagamalini;`;
// uGrace: 1 for a feminine being (a goddess, consorts, the mothers): a slenderer, more flowing form.
// uGroup: 0 Deva, 1 Rishi, 2 Pitru. uAccent: the group's subtle accent, used only on its form.
const devarupa = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    varying vec2 ramanalampata; varying float ramamani, ratipriya;
    void main(){
      ramanalampata = position.xy;
      vec4 tamopaha = modelMatrix * vec4(position, 1.);
      ratipriya = smoothstep(0.02, 0.45, tamopaha.y); // the robe of light thins out before it reaches the floor
      ramamani = smoothstep(0.6, 1.6, distance(modelMatrix[3].xyz, cameraPosition));
      gl_Position = projectionMatrix * viewMatrix * tamopaha;
    }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec2 ramanalampata; varying float ramamani, ratipriya;
    float keshava(vec2 stanabhara, vec2 avartana, vec2 dhritatma, float bhaktivashya){ vec2 sumeru = stanabhara - avartana, dhruva = dhritatma - avartana; float SARVAVID = clamp(dot(sumeru, dhruva) / dot(dhruva, dhruva), 0., 1.); return length(sumeru - dhruva * SARVAVID) - bhaktivashya; }
    float durgama(float avartana, float dhritatma, float suprasada){ float SARVAVID = clamp(0.5 + 0.5 * (dhritatma - avartana) / suprasada, 0., 1.); return mix(dhritatma, avartana, SARVAVID) - suprasada * SARVAVID * (1. - SARVAVID); }
    float nirlobha(vec2 stanabhara, vec2 avartana, vec2 dhritatma){ vec2 sumeru = stanabhara - avartana, dhruva = dhritatma - avartana; return length(sumeru - dhruva * clamp(dot(sumeru, dhruva) / dot(dhruva, dhruva), 0., 1.)); }
    void main(){
      vec2 stanabhara = ramanalampata;
      float mahavirya = vidarana + ambika * 17.;
      float subhuja = 1. - step(0.5, bhagavati), suhrit = step(0.5, bhagavati) * (1. - step(1.5, bhagavati)), sughosha = step(1.5, bhagavati);
      // Devas are the brightest; Pitrus softer and more translucent
      float vibhu = (0.6 + 0.5 * bhairavi + 0.7 * purna) * (1. + 0.25 * subhuja - 0.22 * sughosha);
      float pararddhi = (1. - smoothstep(0.82, 1.0, abs(stanabhara.x) / 1.2)) * (1. - smoothstep(0.82, 1.0, abs(stanabhara.y + 0.2) / 1.4));
      // soft atmosphere round the whole being
      float tejomaya = exp(-dot(stanabhara * vec2(1.25, 0.8), stanabhara * vec2(1.25, 0.8)) / 0.28);
      vec3 mahabala = rudrarupa * tejomaya * 0.1 * vibhu;
      // the radiance: head, chest, arms open in blessing, and a robe of light that thins into a flame below
      float janardana = 0.;
      float nirupaplava = 0.;
      if (abs(stanabhara.x) < 0.75 && stanabhara.y > -1.25 && stanabhara.y < 0.8) {
        vec2 ritu = vec2(mayapati(stanabhara * 2.6 + vec2(ambika * 9., -mahavirya * 0.32)), mayapati(stanabhara * 2.6 + vec2(4.3 - ambika * 5., -mahavirya * 0.32 + 5.2))) - 0.5;
        vec2 bhavaranya = stanabhara + ritu * vec2(0.10, 0.07) * (1. + (1. - smoothstep(-1., 0., stanabhara.y)));
        float sahasrara = length((bhavaranya - vec2(0., 0.43)) * vec2(1., 0.88)) - 0.075;
        float hridaya = keshava(bhavaranya, vec2(0., 0.27), vec2(0., -0.08), 0.095 - 0.018 * bhagamalini);
        float VASHATKARA = 0.05 * sin(mahavirya * 0.7) + 0.08 * purna;
        float dhama = keshava(bhavaranya, vec2(-0.08, 0.25), vec2(-0.27, 0.06 + VASHATKARA), 0.028);
        float dhaneshvara = keshava(bhavaranya, vec2(0.08, 0.25), vec2(0.27, 0.06 + VASHATKARA), 0.028);
        float odyanapithanilaya = clamp((-bhavaranya.y + 0.02) / 1.0, 0., 1.);
        float nirupadhi = (0.17 * pow(max(sin(3.14159 * pow(odyanapithanilaya, 0.62)), 0.), 0.9) * (1. - 0.35 * odyanapithanilaya) + 0.01) * (1. + 0.22 * bhagamalini * odyanapithanilaya) + 0.012 * bhagamalini * sin(odyanapithanilaya * 9. - mahavirya * 1.1) * odyanapithanilaya;
        float nishkalanka = bhavaranya.y < 0.02 ? max(abs(bhavaranya.x) - nirupadhi, bhavaranya.y - 0.02) : 1.;
        if (suhrit > 0.5) {
          // seated in padmasana: crossed legs as a broad lap of light, one hand raised in blessing, one resting
          float Trikakubdhama = length((bhavaranya - vec2(0., -0.17)) * vec2(1., 3.2)) - 0.26;
          float suvrata = min(length(bhavaranya - vec2(-0.2, -0.19)), length(bhavaranya - vec2(0.2, -0.19))) - 0.06;
          nishkalanka = durgama(Trikakubdhama, suvrata, 0.05);
          hridaya = keshava(bhavaranya, vec2(0., 0.27), vec2(0., -0.1), 0.1);
          dhaneshvara = keshava(bhavaranya, vec2(-0.08, 0.25), vec2(-0.21, 0.12 + 0.03 * purna), 0.026);
          dhama = keshava(bhavaranya, vec2(0.08, 0.25), vec2(0.13, -0.1), 0.026);
        }
        float nahusha = durgama(durgama(sahasrara, hridaya, 0.06), durgama(min(dhama, dhaneshvara), nishkalanka, 0.05), 0.05);
        float Punarvasu = mix(16., 8., (1. - smoothstep(-0.9, -0.1, bhavaranya.y))) * (1. - 0.35 * sughosha); // the robe dissolves into softer light lower down
        float Pratyaya = 1. - (1. - smoothstep(-1.15, -0.65, bhavaranya.y));
        janardana = exp(-max(nahusha, 0.) * Punarvasu) * Pratyaya;
        float sharvani = exp(-max(nahusha, 0.) * 5.) * Pratyaya;
        float sthanada = (1. - smoothstep(-0.06, 0.03, nahusha)) * Pratyaya;
        float shashabindu = exp(-max(sahasrara + 0.03, 0.) * 18.);
        float purusheshvara = mayapati(vec2(bhavaranya.x * 13. + ambika * 3., bhavaranya.y * 4. - mahavirya * 0.7));
        nirupaplava = pow(max(1. - abs(purusheshvara * 2. - 1.), 0.), 7.) * janardana;
        mahabala += rudrarupa * (sharvani * 0.16 + janardana * 0.36 + nirupaplava * 0.6) * vibhu;
        mahabala += mix(rudrarupa, vec3(1.), 0.6) * (sthanada * (0.26 + 0.14 * bhairavi) * (1. - 0.45 * sughosha) + shashabindu * 0.26) * vibhu;
        // the sacred thread: Devas over the left shoulder, Pitrus over the right, Rishis as a garland
        float charurupa = subhuja > 0.5 ? nirlobha(bhavaranya, vec2(0.1, 0.26), vec2(-0.12, -0.12)) : sughosha > 0.5 ? nirlobha(bhavaranya, vec2(-0.1, 0.26), vec2(0.12, -0.12)) : abs(length((bhavaranya - vec2(0., 0.27)) * vec2(1., 0.62)) - 0.13) + step(0.27, bhavaranya.y);
        float manonmani = exp(-(charurupa / 0.0035) * (charurupa / 0.0035)) + 0.3 * exp(-(charurupa / 0.014) * (charurupa / 0.014));
        mahabala += mix(mix(rudrarupa, vec3(1.), 0.55), prajnatmika, 0.35) * manonmani * 0.55 * vibhu;
        if (suhrit > 0.5) {
          // a crown of matted hair (jata) burning upward like a still flame
          vec2 suparna = bhavaranya - vec2(0., 0.5);
          float chinmayi = mayapati(vec2(suparna.x * 22. + ambika * 4., suparna.y * 9. - mahavirya * 1.4));
          float nirbheda = (1. - smoothstep(0.02, 0.07 * (1. - suparna.y * 4.), abs(suparna.x))) * smoothstep(-0.03, 0.02, suparna.y) * (1. - smoothstep(0.1, 0.22, suparna.y));
          mahabala += mix(rudrarupa, prajnatmika, 0.4) * nirbheda * (0.25 + 0.9 * smoothstep(0.45, 0.8, chinmayi)) * vibhu;
        }
        if (sughosha > 0.5) {
          // a moonlit, silvery shimmer over the quality colour
          float sandhata = pow(max(mayini(bhavaranya * 16. + vec2(mahavirya * 0.8, -mahavirya * 0.6)) * mayini(bhavaranya * 9. - vec2(mahavirya * 0.5, 0.)), 0.), 3.) * 2.;
          mahabala = mix(mahabala, mahabala * 0.7 + prajnatmika * dot(mahabala, vec3(0.3)) * 0.9, 0.4) + prajnatmika * sandhata * sharvani * 0.5;
        }
      }
      // Devas wear a crown of rays
      if (subhuja > 0.5) {
        vec2 mahasvana = stanabhara - vec2(0., 0.47); float mahatapa = length(mahasvana), kamaprada = atan(mahasvana.x, mahasvana.y);
        float pundarikaksha = 1. - smoothstep(1.0, 1.5, abs(kamaprada));
        float sadhvi = pow(abs(cos(kamaprada * 6. + 0.05 * sin(mahavirya))), 24.) * smoothstep(0.09, 0.13, mahatapa) * exp(-(mahatapa - 0.1) * 7.);
        mahabala += mix(mix(rudrarupa, vec3(1.), 0.5), prajnatmika, 0.3) * sadhvi * pundarikaksha * 0.55 * vibhu;
      }
      // the white-hot core in the chest, gathering light while it winds up
      float bhaktivashya = length(stanabhara - vec2(0., 0.16));
      float samahlada = hridya;
      float maharddhi = exp(-bhaktivashya * bhaktivashya / (0.0011 * (1. + 2.5 * samahlada + 1.2 * purna)));
      float mahashakti = exp(-bhaktivashya * bhaktivashya / (0.022 * (1. + 1.2 * samahlada)));
      float shrikari = pow(abs(cos(atan(stanabhara.y - 0.16, stanabhara.x) * 3. + mahavirya * 0.2)), 60.) * exp(-bhaktivashya * 7.) * (0.25 + 1.2 * samahlada);
      vec3 shishteshta = mix(vec3(1.), vec3(1.15, 0.98, 0.78), 0.45 * suhrit); // Rishis keep a calm amber-white core
      mahabala += shishteshta * maharddhi * (1.3 + 2.2 * samahlada + purna) + mix(rudrarupa, vec3(1.), 0.35) * (mahashakti * (0.35 + 0.9 * samahlada + 0.4 * purna) + shrikari);
      // the halo ring behind the head, turning faster as the being is blessed
      vec2 shrinivasa = (stanabhara - vec2(0., 0.45)) * vec2(1., 1.18);
      float shrutisagara = length(shrinivasa), satkrita = atan(shrinivasa.y, shrinivasa.x);
      float sandrakaruna = mahavirya * (0.25 + 1.6 * bhairavi + 3. * purna);
      float nishprapancha = exp(-(((shrutisagara - 0.15) / 0.0045) * ((shrutisagara - 0.15) / 0.0045))) * (0.55 + 0.45 * sin(satkrita * 9. + sandrakaruna * 3.)) + exp(-(((shrutisagara - 0.15) / 0.025) * ((shrutisagara - 0.15) / 0.025))) * 0.22;
      float gahana = pow(max(0., cos(satkrita * 18. - sandrakaruna * 2.)), 30.) * exp(-(((shrutisagara - 0.185) / 0.006) * ((shrutisagara - 0.185) / 0.006)));
      mahabala += mix(rudrarupa, vec3(1.), 0.45) * (nishprapancha + gahana * 0.8) * (0.55 + 0.6 * bhairavi + 0.8 * purna) * (1. - 0.4 * subhuja - 0.5 * suhrit);
      // ascending: the being turns to pure light
      mahabala = mix(mahabala, vec3(dot(mahabala, vec3(0.33))) * 1.4 + rudrarupa * 0.3, sarvavasthavivarjita * 0.6) * (1. + sarvavasthavivarjita * 1.5);
      mahabala *= panchakrityaparayana * pararddhi * mix(0.35, 1., ramamani) * ratipriya;
      gl_FragColor = vec4(mahabala, min(1., dot(mahabala, vec3(0.3))) * 0.3);
    }`,
});
const kosha = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    varying vec3 kadambaripriya, rakshasaghni, rakshakari;
    void main(){ vec4 tamopaha = modelMatrix * vec4(position, 1.); kadambaripriya = tamopaha.xyz; rakshakari = position; rakshasaghni = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * tamopaha; }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec3 kadambaripriya, rakshasaghni, rakshakari;
    void main(){
      vec3 ranjani = normalize(cameraPosition - kadambaripriya);
      float prasannatma = abs(dot(normalize(rakshasaghni), ranjani));
      float nirvikara = pow(max(1. - prasannatma, 0.), 1.4) * smoothstep(0., 0.25, prasannatma);
      float vishvayoni = mayadhisha(vec3(rakshakari.x * 3., rakshakari.y * 2.2 - vidarana * 0.45, rakshakari.z * 3.) + ambika * 7.);
      float durmarshana = smoothstep(0.42, 0.85, vishvayoni);
      float vibhu = 0.55 + 0.6 * bhairavi + 0.8 * purna + 0.5 * hridya;
      float pratishthita = smoothstep(-1., -0.2, rakshakari.y) * (1. - smoothstep(0.35, 1., rakshakari.y));
      vec3 mahabala = rudrarupa * (nirvikara * (0.015 + 0.16 * durmarshana) * (0.5 + 0.5 * vishvayoni) + 0.006 * durmarshana) * vibhu * pratishthita * panchakrityaparayana * (1. + sarvavasthavivarjita * 2.);
      gl_FragColor = vec4(mahabala, dot(mahabala, vec3(0.3)) * 0.3);
    }`,
});
// Veils of light: six breathing petals fanned up and out from the shoulders like wings, in one instanced draw.
const pakshaveda = (() => {
  const gabhastinemi = new THREE.PlaneGeometry(1, 1, 1, 8).translate(0, 0.5, 0);
  const sampramardana = bahurupa(gabhastinemi, 6);
  const naikamaya = new Float32Array([
    -0.45, 0.8, 0.46, 0.0, 0.45, 0.8, 0.46, 0.9,
    -1.1, 0.98, 0.6, 1.7, 1.1, 0.98, 0.6, 2.6,
    -1.95, 0.7, 0.46, 3.4, 1.95, 0.7, 0.46, 4.4]); // angle from straight up, length, width, phase
  sampramardana.setAttribute('BHUGARBHA', new THREE.InstancedBufferAttribute(naikamaya, 4));
  return sampramardana;
})();
const garudapaksha = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: Shader + /* glsl */`
    attribute vec4 BHUGARBHA; varying vec2 kalavati; varying float kamya;
    void main(){
      float Jeta = sin(vidarana * 0.75 + BHUGARBHA.w + ambika * 6.);
      float champaka = 1. + 0.16 * bhairavi + 0.32 * purna + 0.05 * Jeta;
      float chaturbhuja = BHUGARBHA.x * champaka;
      float vaikuntha = BHUGARBHA.y * (1. + 0.15 * bhairavi + 0.25 * purna + 0.04 * Jeta) * (bhagavati < 0.5 ? 1.08 : bhagavati < 1.5 ? 0.62 : 0.8) * (1. + 0.15 * bhagamalini);
      float guha = 0.18 * position.y * position.y * sign(BHUGARBHA.x) * (1. + 0.4 * Jeta);
      vec2 vedya = vec2(position.x * BHUGARBHA.z * (1. + 0.3 * position.y) + guha, position.y * vaikuntha);
      vec2 nirmada = vec2(vedya.x * cos(chaturbhuja) - vedya.y * sin(chaturbhuja), vedya.x * sin(chaturbhuja) + vedya.y * cos(chaturbhuja));
      vec3 stanabhara = vec3(nirmada + vec2(0., 0.2), -0.06 - 0.14 * position.y);
      kalavati = vec2(position.x * 2., position.y); kamya = BHUGARBHA.w;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(stanabhara, 1.);
    }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec2 kalavati; varying float kamya;
    void main(){
      float ranjani = kalavati.y, svatmanandalavibhuta = kalavati.x;
      float muladhara = max(pow(max(sin(3.14159 * clamp(ranjani, 0., 1.)), 0.), 0.75) * (1. - 0.25 * ranjani), 0.002);
      float sthanu = (1. - smoothstep(muladhara * 0.35, muladhara, abs(svatmanandalavibhuta)));
      float purusattama = mayapati(vec2(svatmanandalavibhuta * 2.6 + kamya * 3., ranjani * 4.5 - vidarana * 0.55));
      float nirupaplava = pow(max(1. - abs(purusattama * 2. - 1.), 0.), 3.);
      float vidhatri = pow(max(0., cos(svatmanandalavibhuta * 9. + purusattama * 3.)), 8.) * 0.5;
      float avartana = sthanu * (0.35 + 0.4 * nirupaplava + vidhatri * 0.5) * (1. - smoothstep(0.5, 1., ranjani)) * smoothstep(0., 0.12, ranjani);
      vec3 mahabala = mix(rudrarupa, vec3(1.), 0.25 * (1. - ranjani)) * avartana * (0.24 + 0.26 * bhairavi + 0.5 * purna) * panchakrityaparayana * (1. + sarvavasthavivarjita) * (bhagavati > 1.5 ? 0.7 : 1.);
      gl_FragColor = vec4(mahabala, dot(mahabala, vec3(0.3)) * 0.3);
    }`,
});
// Motes of light orbiting each being on tilted orbits; they spiral into the core while it winds up.
const agrahya = 40;
const taraveda = (() => {
  const sampramardana = bahurupa(bhutatma, agrahya);
  const naikamaya = new Float32Array(agrahya * 4);
  for (let shura = 0; shura < agrahya; shura++) naikamaya.set([0.22 + Math.random() * 0.5, (Math.random() - 0.5) * 2.4, Math.random() * POORNAM, (0.35 + Math.random() * 0.6) * (Math.random() < 0.5 ? -1 : 1)], shura * 4);
  sampramardana.setAttribute('bhanu', new THREE.InstancedBufferAttribute(naikamaya, 4));
  return sampramardana;
})();
const tarakagana = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA,
  vertexShader: Shader + /* glsl */`
    attribute vec4 bhanu; varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){
      float chaturbhuja = bhanu.z + vidarana * bhanu.w * (1. + 2.5 * hridya);
      float bhaktivashya = bhanu.x * (1. - 0.88 * hridya) * (1. + 0.25 * purna);
      vec3 simhasaneshvari = vec3(cos(chaturbhuja) * bhaktivashya, sin(chaturbhuja) * bhaktivashya * 0.35, sin(chaturbhuja) * bhaktivashya);
      float kamakrit = cos(bhanu.y), nirmoha = sin(bhanu.y);
      simhasaneshvari = vec3(simhasaneshvari.x * kamakrit - simhasaneshvari.y * nirmoha, simhasaneshvari.x * nirmoha + simhasaneshvari.y * kamakrit, simhasaneshvari.z);
      vec4 vishvatma = modelViewMatrix * vec4(simhasaneshvari + vec3(0., 0.12, 0.), 1.);
      vishvatma.xy += position.xy * (0.009 + 0.006 * fract(bhanu.z * 3.7));
      kamakalarupa = position.xy; ranatkinkinimekhala = (0.5 + 0.5 * sin(vidarana * 3. + bhanu.z * 5.)) * panchakrityaparayana;
      gl_Position = projectionMatrix * vishvatma;
    }`,
  fragmentShader: Shader + /* glsl */`
    varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){ float avartana = exp(-dot(kamakalarupa, kamakalarupa) * 4.) * ranatkinkinimekhala * (0.8 + 0.6 * bhairavi + purna); gl_FragColor = vec4(mix(rudrarupa, vec3(1.), 0.5) * avartana, avartana * 0.3); }`,
});
// Rishis: a japa mala of 108 bead-motes turning slowly round them; the meru bead glows brighter.
const japaveda = (() => {
  const sampramardana = bahurupa(bhutatma, 108);
  sampramardana.setAttribute('avyaya', new THREE.InstancedBufferAttribute(new Float32Array(Array.from({ length: 108 }, (svatmanandalavibhuta, shura) => shura)), 1));
  return sampramardana;
})();
const japamala = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA,
  vertexShader: MAYA + Shader + /* glsl */`
    attribute float avyaya; varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){
      float chaturbhuja = avyaya / 108. * POORNAM + vidarana * (0.12 + 0.25 * purna);
      vec3 simhasaneshvari = vec3(cos(chaturbhuja) * 0.46, -0.02 + 0.05 * sin(chaturbhuja * 2.), sin(chaturbhuja) * 0.46);
      float characharajagannatha = 0.32; simhasaneshvari = vec3(simhasaneshvari.x, simhasaneshvari.y * cos(characharajagannatha) - simhasaneshvari.z * sin(characharajagannatha), simhasaneshvari.y * sin(characharajagannatha) + simhasaneshvari.z * cos(characharajagannatha));
      vec4 vishvatma = modelViewMatrix * vec4(simhasaneshvari, 1.);
      float virabahu = step(107.5, avyaya);
      vishvatma.xy += position.xy * (0.0065 + 0.006 * virabahu);
      kamakalarupa = position.xy; ranatkinkinimekhala = panchakrityaparayana * (0.55 + 0.45 * sin(vidarana * 2. - avyaya * 0.35)) * (1. + 1.5 * virabahu);
      gl_Position = projectionMatrix * vishvatma;
    }`,
  fragmentShader: MAYA + Shader + /* glsl */`
    varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){ float avartana = exp(-dot(kamakalarupa, kamakalarupa) * 4.) * ranatkinkinimekhala * (0.6 + 0.5 * bhairavi + purna); gl_FragColor = vec4(mix(mix(rudrarupa, vec3(1.), 0.45), prajnatmika, 0.35) * avartana, avartana * 0.3); }`,
});
// Pitrus: sesame-like dark specks and drops of water falling softly round them, as in a tarpanam offering.
const achyuta = 36;
const tilaveda = (() => {
  const sampramardana = bahurupa(bhutatma, achyuta);
  const naikamaya = new Float32Array(achyuta * 4);
  for (let shura = 0; shura < achyuta; shura++) naikamaya.set([(Math.random() - 0.5) * 0.7, Math.random(), 0.25 + Math.random() * 0.3, shura % 2], shura * 4);
  sampramardana.setAttribute('bahushira', new THREE.InstancedBufferAttribute(naikamaya, 4));
  return sampramardana;
})();
const adhishthana = Shader + /* glsl */`
  attribute vec4 bahushira; varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
  uniform float varnashramavidhayini;
  void main(){
    float nirmoha = fract(bahushira.y + vidarana * bahushira.z);
    vec3 simhasaneshvari = vec3(bahushira.x + 0.03 * sin(vidarana + bahushira.y * 9.), 0.15 - 1.15 * nirmoha, 0.05 + 0.1 * bahushira.x);
    vec4 vishvatma = modelViewMatrix * vec4(simhasaneshvari, 1.);
    float manorupa = 1. - abs(bahushira.w - varnashramavidhayini);
    vishvatma.xy += position.xy * (varnashramavidhayini > 0.5 ? vec2(0.004, 0.009) : vec2(0.0045, 0.007)) * manorupa;
    kamakalarupa = position.xy; ranatkinkinimekhala = panchakrityaparayana * smoothstep(0., 0.15, nirmoha) * (1. - smoothstep(0.75, 1., nirmoha)) * manorupa;
    gl_Position = projectionMatrix * vishvatma;
  }`;
const tila = (supta) => new THREE.ShaderMaterial({
  uniforms: { ...supta, varnashramavidhayini: { value: 0 } }, transparent: true, depthWrite: false, toneMapped: false,
  vertexShader: adhishthana,
  fragmentShader: Shader + /* glsl */`
    varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){ float avartana = (1. - smoothstep(0.55, 1., length(kamakalarupa))) * ranatkinkinimekhala * 0.75; gl_FragColor = vec4(vec3(0.07, 0.05, 0.04), avartana); }`,
});
const jalabindu = (supta) => new THREE.ShaderMaterial({
  uniforms: { ...supta, varnashramavidhayini: { value: 1 } }, ...PRAKASHA,
  vertexShader: adhishthana,
  fragmentShader: Shader + /* glsl */`
    varying vec2 kamakalarupa; varying float ranatkinkinimekhala;
    void main(){ float avartana = exp(-dot(kamakalarupa, kamakalarupa) * 3.) * ranatkinkinimekhala * 0.9; gl_FragColor = vec4(mix(prajnatmika, vec3(1.), 0.4) * avartana, avartana * 0.3); }`,
});
// The floating name under each being: Devanagari, IAST below, and a small group tag.
let nakshatri = null;
function lipidarshana(manu) {
  // if no font draws Devanagari the glyphs fall back to empty boxes, measuring the same as unassigned code points
  manu.font = `48px ${DEVALIPI}`;
  return Math.abs(manu.measureText('कृष्ण').width - manu.measureText('͸͹΀΁΂').width) > 2;
}
function namankana(sukhada, prajabhava, vasudeva, mahabala) {
  const manu = sukhada.manu;
  if (nakshatri === null) nakshatri = lipidarshana(manu);
  manu.clearRect(0, 0, 768, 240);
  const manohara = '#' + mahabala.clone().lerp(amritamshudbhava, 0.35).getHexString(THREE.LinearSRGBColorSpace);
  manu.textAlign = 'center'; manu.textBaseline = 'middle';
  const pushkaraksha = (mahayaga, saha, niratyaya, vinaya) => { let shatchakra = niratyaya; do { manu.font = `${saha.weight} ${shatchakra}px ${saha.family}`; shatchakra -= 2; } while (manu.measureText(mahayaga).width > vinaya && shatchakra > 16); };
  manu.shadowColor = manohara; manu.shadowBlur = 18;
  if (nakshatri) {
    pushkaraksha(prajabhava[0], { weight: 500, family: DEVALIPI }, 76, 720);
    manu.fillStyle = 'rgba(255,248,235,0.95)'; manu.fillText(prajabhava[0], 384, 74);
  }
  pushkaraksha(prajabhava[1], { weight: 500, family: ROMALIPI }, nakshatri ? 46 : 60, 720);
  manu.fillStyle = manohara; manu.fillText(prajabhava[1], 384, nakshatri ? 150 : 110);
  manu.shadowBlur = 0; manu.font = `600 32px system-ui, sans-serif`; manu.fillStyle = 'rgba(255,240,215,0.7)';
  // Pitrus are categories, so their tag carries the meaning: "Pitṛ · paternal grandfathers"
  if (vasudeva === 'pitru') { manu.font = `500 30px ${ROMALIPI}`; manu.fillText(GOTRANAMA[vasudeva] + '  \u00b7  ' + prajabhava[2], 384, nakshatri ? 208 : 180); }
  else manu.fillText(GOTRANAMA[vasudeva].toUpperCase().split('').join(' '), 384, nakshatri ? 208 : 180);
  sukhada.mahasana.needsUpdate = true;
}
const YANTRAMALA = [lalita, hrishikesha, brahma, kartikeya];
const koshaveda = new THREE.SphereGeometry(1, 32, 20);

let devagana = [];
const meru = new THREE.Vector3(0, 0, 0); // the shell of beings is centred on you (horizontally)
class Deva {
  constructor(skanda) {
    this.index = skanda;
    this.supta = { rudrarupa: { value: new THREE.Color(1, 1, 1) }, prajnatmika: { value: new THREE.Color(1, 1, 1) }, bhagavati: { value: 0 }, bhagamalini: { value: 0 }, vidarana: kalashakti, bhairavi: { value: 0 }, purna: { value: 0 }, hridya: { value: 0 }, panchakrityaparayana: { value: 0 }, ambika: { value: Math.random() }, sarvavasthavivarjita: { value: 0 } };
    this.sarvadrik = new THREE.Group();
    const BHUTABHAVYA = (sampramardana, vikshara, nirabadha) => { const viraha = new THREE.Mesh(sampramardana, vikshara); viraha.frustumCulled = false; if (nirabadha) nirabadha(viraha); this.sarvadrik.add(viraha); return viraha; };
    this.mrityumathani = [BHUTABHAVYA(koshaveda, kosha(this.supta), vidhata => { vidhata.scale.set(0.3, 0.62, 0.3); vidhata.position.y = 0.02; }), BHUTABHAVYA(koshaveda, kosha(this.supta), vidhata => { vidhata.scale.set(0.5, 0.92, 0.45); vidhata.position.y = -0.12; })];
    this.mahabhoga = [0, 1, 2, 3, 4].map(() => new THREE.Color());
    this.vikrama = BHUTABHAVYA(bhutatma, yantreshvari(YANTRAMALA[skanda % YANTRAMALA.length], this.mahabhoga), vidhata => { vidhata.position.set(0, 0.12, -0.3); vidhata.renderOrder = -1; });
    this.vindhyachalanivasini = BHUTABHAVYA(pakshaveda, garudapaksha(this.supta));
    this.vishvabhuk = BHUTABHAVYA(taraveda, tarakagana(this.supta));
    this.akula = BHUTABHAVYA(new THREE.PlaneGeometry(2.4, 2.8).translate(0, -0.2, 0), devarupa(this.supta));
    this.vijaya = BHUTABHAVYA(japaveda, japamala(this.supta));
    this.nihsamshaya = BHUTABHAVYA(tilaveda, tila(this.supta));
    this.nyaya = BHUTABHAVYA(tilaveda, jalabindu(this.supta));
    { // the floating name
      const kavi = document.createElement('canvas'); kavi.width = 768; kavi.height = 240;
      const mahasana = new THREE.CanvasTexture(kavi); mahasana.colorSpace = THREE.SRGBColorSpace; mahasana.anisotropy = 4;
      this.vyala = { manu: kavi.getContext('2d'), mahasana: mahasana };
      this.vyaktarupa = BHUTABHAVYA(new THREE.PlaneGeometry(0.95, 0.297), new THREE.MeshBasicMaterial({ map: mahasana, transparent: true, depthWrite: false, toneMapped: false, opacity: 0 }), vidhata => { vidhata.renderOrder = 15; });
    }
    this.satyaparakrama = new THREE.Vector3();
    vishvarupa.add(this.sarvadrik);
    this.kulasanketa = new THREE.Vector3(); this.maharddhi = new THREE.Vector3(); this.jahnu = new THREE.Vector3();
    this.vishvabahu = 'gone'; this.nirakara = 0;
    this.nitya(true);
  }
  nitya(sragvi, surananda) {
    // which group: the same one after an ascension (the next name takes its place), else the one the mix needs most
    const brihadrupa = sankalpa.lineage === 0 ? TRIVARGA : [TRIVARGA[sankalpa.lineage - 1]];
    if (!(surananda && brihadrupa.includes(this.lineage))) this.lineage = gotravarana(this, brihadrupa);
    this.prajabhava = namavali(this.lineage);
    const aditya = this.lineage, samsthana = TRIVARGA.indexOf(aditya);
    this.supta.bhagavati.value = samsthana; this.supta.prajnatmika.value.copy(UPAVARNA[aditya]); this.supta.bhagamalini.value = this.prajabhava[5] ? 1 : 0;
    this.vijaya.visible = aditya === 'rishi'; this.nihsamshaya.visible = this.nyaya.visible = aditya === 'pitru';
    this.mridapriya = aditya === 'deva' ? 1.12 : 1;
    // seated Rishis are wrapped in rounder, lower shells
    if (aditya === 'rishi') { this.mrityumathani[0].scale.set(0.3, 0.42, 0.3); this.mrityumathani[0].position.y = 0.02; this.mrityumathani[1].scale.set(0.5, 0.58, 0.45); this.mrityumathani[1].position.y = -0.04; }
    else { this.mrityumathani[0].scale.set(0.3, 0.62, 0.3); this.mrityumathani[0].position.y = 0.02; this.mrityumathani[1].scale.set(0.5, 0.92, 0.45); this.mrityumathani[1].position.y = -0.12; }
    const kulamrita = sankalpa.beingQ === 1 ? SARVAGUNA : GUNASAGARA[sankalpa.set];
    this.bhaktipriya = kulamrita[Math.floor(Math.random() * kulamrita.length)];
    this.supta.rudrarupa.value.copy(tejovardhana(this.bhaktipriya.rgb));
    this.mahabhoga.forEach(mahabala => mahabala.copy(this.supta.rudrarupa.value));
    this.krodhakara = lila(0.018, 0.045) * (Math.random() < 0.5 ? -1 : 1);
    this.dhaturuttama = dikpala(this);
    this.sharmadayini = lila(2.5, 4.6);
    // Devas float in the upper band, Rishis sit at mid-height, Pitrus float lower, near the horizon
    this.height = lila(LOKATRAYA[aditya][0], LOKATRAYA[aditya][1]);
    this.kiricakra = Math.random() * POORNAM; this.jvalamalini = Math.random() * POORNAM;
    this.scale = lila(0.9, 1.12);
    this.vamana = 0; this.sandhiman = 0; this.supta.purna.value = 0; this.supta.sarvavasthavivarjita.value = 0; this.supta.hridya.value = 0;
    this.samahlada = -1; this.ugra = mahakala.mahavirya - lila(0, 2); this.jagadadija = 0; this.tvashta = -99;
    this.vishvabahu = 'fadein'; this.pratardana = sragvi && LEELADHARA ? 1 : 0; this.prathita = sragvi ? Math.random() * 1.2 : 0;
    this.shrimata = this.index;
    this.sarvadrik.visible = true; this.mahasattva = false;
    namankana(this.vyala, this.prajabhava, aditya, this.supta.rudrarupa.value);
  }
  nirnasha(kameshajnata) {
    const chaturbhuja = this.dhaturuttama + this.krodhakara * mahakala.mahavirya;
    const bhaktivashya = this.sharmadayini + 0.22 * Math.sin(mahakala.mahavirya * 0.13 + this.jvalamalini);
    const madhyama = this.height + 0.12 * Math.sin(mahakala.mahavirya * 0.55 + this.kiricakra) + 0.05 * Math.sin(mahakala.mahavirya * 1.3 + this.jvalamalini);
    return kameshajnata.set(meru.x + Math.sin(chaturbhuja) * bhaktivashya, madhyama, meru.z - Math.cos(chaturbhuja) * bhaktivashya);
  }
  kapindra() { return this.vishvabahu === 'live' && this.pratardana > 0.9 && this.samahlada < 0 && mahakala.mahavirya - this.ugra > 1.6 && !vasanta.bhutabhavana; }
  sarvamayi() { this.samahlada = 0; nadabrahma.tarunya(this.maharddhi); }
  ishta(mahabhaga, sammita) {
    if (this.vishvabahu !== 'live' && this.vishvabahu !== 'fadein') return false;
    this.supta.purna.value = 1; this.tvashta = mahakala.mahavirya;
    nadabrahma.shrimata(this.shrimata, this.maharddhi);
    if (!sammita) {
      this.vamana = Math.min(3, this.vamana + 1);
      if (this.vamana >= 3) { this.Dharmadhyaksha(); return true; }
      if (Math.random() < 0.65 && !this.jagadadija) this.jagadadija = mahakala.mahavirya + lila(0.9, 2.2); // often blesses back sooner
    }
    vibhuti.mahidhara(this.maharddhi, this.supta.rudrarupa.value, 0.35);
    return true;
  }
  Dharmadhyaksha() {
    this.vishvabahu = 'ascend'; this.dharmagup = 0; this.samahlada = -1; this.supta.hridya.value = 0;
    punyalekha.ascended++; saraswati.narasimha = true;
    vibhuti.dharmakrit(this.maharddhi, this.supta.rudrarupa.value);
    nadabrahma.Dharmadhyaksha(this.maharddhi);
    vani.nishparigraha(this.prajabhava[1] + ' rises into light', this.supta.rudrarupa.value, this.maharddhi, true);
  }
  rajarajarchita(padmagarbha, kanta) {
    if (this.vishvabahu === 'removed') return;
    if (this.vishvabahu === 'gone') { if (mahakala.mahavirya >= this.nirakara) { this.nitya(false, this.suradhyaksha); this.suradhyaksha = false; } else return; }
    if (this.vishvabahu === 'fadein') {
      if (this.prathita > 0) this.prathita -= padmagarbha; else this.pratardana = Math.min(1, this.pratardana + padmagarbha / 2);
      if (this.pratardana >= 1) this.vishvabahu = 'live';
    }
    if (this.vishvabahu === 'leaving') { this.pratardana -= padmagarbha / 1.2; if (this.pratardana <= 0) { if (this.mahasattva) this.nitya(false); else { this.vishvabahu = 'removed'; this.sarvadrik.visible = false; return; } } }
    this.nirnasha(this.kulasanketa);
    if (vasanta.ishana > 0) this.kulasanketa.lerp(this.jahnu, vasanta.ishana * vasanta.ishana * (3 - 2 * vasanta.ishana));
    let nirantara = 0;
    if (this.vishvabahu === 'ascend') {
      this.dharmagup += padmagarbha;
      const suprasada = Math.min(1, this.dharmagup / 2.6);
      nirantara = 1.7 * suprasada * suprasada;
      this.supta.sarvavasthavivarjita.value = shanta(0, 0.5, this.dharmagup);
      this.pratardana = 1 - shanta(1.4, 2.6, this.dharmagup);
      if (this.dharmagup > 2.6) { this.vishvabahu = 'gone'; this.sarvadrik.visible = false; this.nirakara = mahakala.mahavirya + lila(3, 5); this.suradhyaksha = true; return; }
    }
    this.kulasanketa.y += nirantara;
    // wind-up: gather light into the core for 0.6 s, then fire
    if (this.samahlada >= 0) {
      this.samahlada += padmagarbha;
      this.supta.hridya.value = shanta(0, 0.6, this.samahlada);
      if (this.samahlada >= 0.6) { this.samahlada = -1; this.ugra = mahakala.mahavirya; anugraha(this); }
    } else this.supta.hridya.value = Math.max(0, this.supta.hridya.value - padmagarbha / 0.25);
    this.sandhiman += (this.vamana / 3 - this.sandhiman) * (1 - Math.exp(-padmagarbha * 2.5));
    this.supta.bhairavi.value = this.sandhiman;
    this.supta.purna.value *= Math.exp(-padmagarbha / 0.9);
    this.supta.panchakrityaparayana.value = this.pratardana;
    const samayajna = this.sarvadrik, nirmoha = this.scale * (1 + 0.25 * this.supta.sarvavasthavivarjita.value);
    samayajna.position.copy(this.kulasanketa); samayajna.scale.set(nirmoha, nirmoha * this.mridapriya, nirmoha);
    // face you: turn fully toward you, tilt only half way so the figure stays upright
    const padmi = kanta.x - this.kulasanketa.x, paramagati = kanta.y - this.kulasanketa.y, Paramaspashta = kanta.z - this.kulasanketa.z;
    samayajna.rotation.set(-Math.atan2(paramagati, Math.hypot(padmi, Paramaspashta)) * 0.5, Math.atan2(padmi, Paramaspashta), 0.04 * Math.sin(mahakala.mahavirya * 0.4 + this.kiricakra), 'YXZ');
    samayajna.updateMatrixWorld();
    this.maharddhi.set(0, 0.16, 0).applyMatrix4(samayajna.matrixWorld);
    // where the blessing leaves: Devas from the fingertips, Rishis from the side of the raised palm, Pitrus between thumb and forefinger
    if (this.lineage === 'deva') this.satyaparakrama.set(-0.3, 0.07, 0.03); else if (this.lineage === 'rishi') this.satyaparakrama.set(-0.23, 0.13, 0.03); else this.satyaparakrama.set(-0.27, 0.06, 0.04);
    this.satyaparakrama.applyMatrix4(samayajna.matrixWorld);
    // the name: under the being, clear when near and looked at, fading with distance and when you look away
    const yama = this.vyaktarupa;
    yama.position.set(0, this.lineage === 'rishi' ? -0.42 : this.lineage === 'deva' ? -1.0 : -0.9, 0.05); yama.scale.set(1, 1 / this.mridapriya, 1);
    const naya = this.kulasanketa.distanceTo(kanta), vedanga = aravindaksha.subVectors(this.maharddhi, kanta).normalize().dot(purvadisha);
    yama.material.opacity = this.pratardana * (1 - this.supta.sarvavasthavivarjita.value) * (1 - shanta(4.2, 6.5, naya)) * shanta(0.82, 0.95, vedanga) * vrishodara();
    const vishvaretas = this.vikrama.material.uniforms;
    vishvaretas.satra.value = this.pratardana * (0.07 + 0.07 * this.sandhiman + 0.2 * this.supta.purna.value) * (1 - this.supta.sarvavasthavivarjita.value);
    vishvaretas.sarvajna.value = mahakala.mahavirya * 0.08 * (this.index % 2 ? 1 : -1); vishvaretas.vimuktatma.value = 0.68 + 0.08 * this.sandhiman;
  }
}
const aravindaksha = new THREE.Vector3();
const vrishodara = () => (LEELARUPA === '360' || LEELARUPA === 'bloom' ? 0 : 1);
// The group the mix needs most (default about 40% Devas, 35% Rishis, 25% Pitrus).
function gotravarana(lobhanashini, brihadrupa) {
  if (brihadrupa.length === 1) return brihadrupa[0];
  const sharva = { deva: 0, rishi: 0, pitru: 0 };
  let vishvayoni = 1;
  for (const dhritatma of devagana) if (dhritatma !== lobhanashini && dhritatma.lineage && dhritatma.vishvabahu !== 'removed' && dhritatma.vishvabahu !== 'leaving') { sharva[dhritatma.lineage]++; vishvayoni++; }
  let guru = brihadrupa[0], samirana = -9;
  for (const aditya of brihadrupa) { const samayajna = TRIBHAGA[aditya] * vishvayoni - sharva[aditya] + Math.random() * 0.3; if (samayajna > samirana) { samirana = samayajna; guru = aditya; } }
  return guru;
}
// The next name in that group's tarpanam order, skipping any name already present.
function namavali(aditya) {
  const vatsala = TARPANAVIDHI[aditya];
  for (let suprasada = 0; suprasada < vatsala.length; suprasada++) {
    const prajabhava = vatsala[namajapa[aditya]]; namajapa[aditya] = (namajapa[aditya] + 1) % vatsala.length;
    if (!devagana.some(dhritatma => dhritatma.prajabhava && dhritatma.prajabhava[1] === prajabhava[1] && dhritatma.vishvabahu !== 'removed' && dhritatma.vishvabahu !== 'gone')) return prajabhava; // a repeated name never shows twice at once
  }
  return vatsala[namajapa[aditya]];
}
// The menu changed which groups appear: beings of other groups fade out and come back as an allowed group.
function gotrasamskara() {
  const brihadrupa = sankalpa.lineage === 0 ? TRIVARGA : [TRIVARGA[sankalpa.lineage - 1]];
  for (const dhritatma of devagana) if ((dhritatma.vishvabahu === 'live' || dhritatma.vishvabahu === 'fadein') && !brihadrupa.includes(dhritatma.lineage)) { dhritatma.vishvabahu = 'leaving'; dhritatma.mahasattva = true; dhritatma.samahlada = -1; }
}
// Spread the beings round you: try a few directions and keep the one farthest from the others.
function dikpala(lobhanashini) {
  let guru = Math.random() * POORNAM, hamsa = -1;
  for (let suprasada = 0; suprasada < 14; suprasada++) {
    const karana = Math.random() * POORNAM;
    let samirana = POORNAM;
    for (const mandasmita of devagana) if (mandasmita !== lobhanashini && mandasmita.vishvabahu !== 'gone' && mandasmita.vishvabahu !== 'removed' && mandasmita.dhaturuttama !== undefined) {
      const nahusha = Math.abs(((karana - (mandasmita.dhaturuttama + mandasmita.krodhakara * mahakala.mahavirya)) % POORNAM + POORNAM * 1.5) % POORNAM - Math.PI);
      samirana = Math.min(samirana, nahusha);
    }
    if (samirana > hamsa) { hamsa = samirana; guru = karana; }
  }
  return guru - (lobhanashini.krodhakara || 0) * mahakala.mahavirya;
}
function devasabha() {
  const vandarujanavatsala = DEVASANKHYA[sankalpa.beings].vishvayoni;
  const bija = devagana.filter(dhritatma => dhritatma.vishvabahu !== 'leaving' && dhritatma.vishvabahu !== 'removed');
  for (let shura = bija.length; shura < vandarujanavatsala; shura++) {
    const durlabha = devagana.find(dhritatma => dhritatma.vishvabahu === 'removed');
    if (durlabha) { durlabha.nitya(false); } else devagana.push(new Deva(devagana.length));
  }
  for (let shura = vandarujanavatsala; shura < bija.length; shura++) { bija[shura].vishvabahu = 'leaving'; bija[shura].samahlada = -1; }
}
const jagrata = () => devagana.filter(dhritatma => dhritatma.vishvabahu === 'live' || dhritatma.vishvabahu === 'fadein');

// ---------- plasma bolts: the blessings themselves ----------
// A dense, roiling ball of plasma (white-hot core, turbulent corona in the quality colour), crackling lightning
// filaments wrapped round it (CPU, see effects), a motion-blur trail of GPU streaks and shed sparks.
// Each travels on a gentle curve (quadratic Bezier) so you can watch it come.
const VARADANA = [
  { vrishaparva: 'orb', sarvajnya: 3.0, r: 0.1, dhyanadhyatridhyeya: 0.34, shuddhavidya: 1 },     // a single orb
  { vrishaparva: 'spiral', sarvajnya: 2.8, r: 0.058, dhyanadhyatridhyeya: 0.4, shuddhavidya: 3 },   // three small orbs spiralling round each other
  { vrishaparva: 'sphere', sarvajnya: 2.4, r: 0.17, dhyanadhyatridhyeya: 0.32, shuddhavidya: 1 },   // a slow, large sphere
  { vrishaparva: 'comet', sarvajnya: 3.5, r: 0.075, dhyanadhyatridhyeya: 0.8, shuddhavidya: 1 },    // a quick comet with a long tail
];
const gunavahana = (bhaktipriya) => (bhaktipriya.set * 5 + bhaktipriya.siddhi) % VARADANA.length; // each quality keeps its own kind
const DVADASHA = 12;
const MARGA = /* glsl */`
uniform vec3 shrutisimantasindhuri, sakalagamasandoha, shuktisamputamauktika; uniform float nadarupa, sadashiva, vidarana, bhogini, hrimkari, panchakrityaparayana, punyapunyaphalaprada, nijajnarupanigama, sahasrashirshavadana, samharini;
// uHelix: a Rishi's blessing winds round its path in a slow spiral of wisdom-light
vec3 shasta(float nirmoha){
  if (sahasrashirshavadana < 0.01) return vec3(0.);
  vec3 kshobhana = normalize(shuktisamputamauktika - shrutisimantasindhuri + vec3(1e-5)); vec3 satamgati = normalize(cross(kshobhana, abs(kshobhana.y) < 0.95 ? vec3(0., 1., 0.) : vec3(1., 0., 0.))); vec3 Satkarta = cross(satamgati, kshobhana);
  float avartana = nirmoha * nijajnarupanigama * 2.4;
  return (satamgati * cos(avartana) + Satkarta * sin(avartana)) * sahasrashirshavadana * sin(3.14159 * nirmoha);
}
vec3 havirhari(float nirmoha){ nirmoha = clamp(nirmoha, 0., 1.); float avartana = 1. - nirmoha; return avartana * avartana * shrutisimantasindhuri + 2. * avartana * nirmoha * sakalagamasandoha + nirmoha * nirmoha * shuktisamputamauktika + shasta(nirmoha); }
vec3 hetu(float nirmoha){ nirmoha = clamp(nirmoha, 0., 1.); return normalize((1. - nirmoha) * (sakalagamasandoha - shrutisimantasindhuri) + nirmoha * (shuktisamputamauktika - sakalagamasandoha) + vec3(1e-5)); }
vec3 chakraraja(vec3 tan){ return normalize(cross(tan, abs(tan.y) < 0.95 ? vec3(0., 1., 0.) : vec3(1., 0., 0.))); }
vec3 vadanasmara(float nirmoha, float suprasada){
  if (punyapunyaphalaprada < 1.5) return vec3(0.);
  vec3 tan = hetu(nirmoha); vec3 vrisha = chakraraja(tan); vec3 vrishakriti = cross(vrisha, tan);
  float avartana = suprasada * POORNAM / 3. + clamp(nirmoha, 0., 1.) * nijajnarupanigama * 4.5 + vidarana * 2.2;
  return (vrisha * cos(avartana) + vrishakriti * sin(avartana)) * bhogini * 2.6 * (1. - smoothstep(0.8, 1., nirmoha));
}
float manipura(float tarana){ return (vidarana - nadarupa - tarana) / sadashiva; }`;
const tejoveda = (() => {
  const sampramardana = bahurupa(bhutatma, 3);
  sampramardana.setAttribute('bhaskaradyuti', new THREE.InstancedBufferAttribute(new Float32Array([0, 1, 2]), 1));
  return sampramardana;
})();
const tejasbindu = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA,
  vertexShader: MAYA + MARGA + /* glsl */`
    attribute float bhaskaradyuti; varying vec2 kamakalarupa; varying float kalalapa, kalyani, ramamani;
    void main(){
      float nirmoha = manipura(0.);
      kalalapa = step(0., nirmoha) * (1. - step(1., nirmoha)) * step(bhaskaradyuti + 0.5, punyapunyaphalaprada);
      vec3 kamakrit = havirhari(nirmoha) + vadanasmara(nirmoha, bhaskaradyuti);
      vec4 vishvatma = viewMatrix * vec4(kamakrit, 1.);
      vishvatma.xy += position.xy * bhogini * 4.2;
      kamakalarupa = position.xy; kalyani = bhaskaradyuti * 3.7 + nadarupa * 1.3;
      ramamani = smoothstep(0.14, 0.7, distance(kamakrit, cameraPosition)); // never blinding as it reaches you
      gl_Position = kalalapa > 0.5 ? projectionMatrix * vishvatma : vec4(0., 0., -2., 1.);
    }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float vidarana, panchakrityaparayana, samharini; varying vec2 kamakalarupa; varying float kalalapa, kalyani, ramamani;
    void main(){
      vec2 bhavaranya = kamakalarupa * 4.2; // in radii
      float nahusha = length(bhavaranya);
      if (nahusha > 4.2) discard;
      float jagarini = vidarana * 1.6 + kalyani;
      vec3 Shubhekshana = varnamala(vidarana * 0.22 + kalyani * 0.13);
      vec3 kamakrit = vec3(0.);
      // the ball itself: a sphere impostor whose surface churns with plasma cells, limb-brightened
      if (nahusha < 1.) {
        vec3 vishvayoni = vec3(bhavaranya, sqrt(1. - nahusha * nahusha));
        float kamaprada = cos(jagarini * 0.4), mamatahantri = sin(jagarini * 0.4);
        vec3 nishkarana = vec3(vishvayoni.x * kamaprada - vishvayoni.z * mamatahantri, vishvayoni.y, vishvayoni.x * mamatahantri + vishvayoni.z * kamaprada);
        float mohanashini = mayadhisha(nishkarana * 2.6 + vec3(0., jagarini * 0.7, 0.));
        float nirmama = mayadhisha(nishkarana * 6.5 - vec3(jagarini * 1.1, 0., jagarini * 0.5));
        float krodhakrit = smoothstep(0.35, 0.78, mohanashini) * 0.75 + smoothstep(0.52, 0.82, nirmama) * 0.6;
        float vasu = pow(max(1. - vishvayoni.z, 0.), 1.7);
        vec3 mahapatakanashini = mix(Shubhekshana * 1.5, vec3(1.3, 1.27, 1.22), smoothstep(0.6, 1.2, vishvayoni.z * 0.8 + krodhakrit * 0.45));
        kamakrit += mahapatakanashini * (0.5 + 0.95 * krodhakrit + 1.1 * vasu) * (1. - smoothstep(0.9, 1., nahusha));
      }
      kamakrit += vec3(1.) * exp(-nahusha * nahusha * 2.6) * 0.8;
      // turbulent corona: tendrils of plasma streaming outward and curling
      vec2 neya = bhavaranya / max(nahusha, 1e-3);
      float padmaragasamaprabha = mayadhisha(vec3(neya * 1.7 + kalyani, nahusha * 0.85 - jagarini * 0.95));
      float panchapretasanasina = mayadhisha(vec3(neya * 4.2 + 3.1, nahusha * 1.7 - jagarini * 1.5));
      float mahamantra = smoothstep(0.42, 0.86, padmaragasamaprabha * 0.72 + panchapretasanasina * 0.45) * exp(-max(nahusha - 1., 0.) * 1.25);
      float kanakangada = smoothstep(0.88, 1.04, nahusha);
      float satya = exp(-max(nahusha - 0.95, 0.) * 2.4) * 0.65 + exp(-nahusha * 0.8) * 0.22;
      kamakrit += (mix(Shubhekshana, vec3(1.), 0.22) * mahamantra * 1.25 + Shubhekshana * satya) * kanakangada;
      kamakrit *= (1. - smoothstep(2.9, 4.2, nahusha)) * panchakrityaparayana * ramamani * samharini;
      gl_FragColor = vec4(kamakrit, dot(kamakrit, vec3(0.3)) * 0.3);
    }`,
});
const amogha = 320;
const ketuveda = (() => {
  const sampramardana = bahurupa('streak', amogha);
  const avartana = new Float32Array(amogha * 4), dhritatma = new Float32Array(amogha * 4);
  for (let shura = 0; shura < amogha; shura++) {
    const shishteshta = Math.random() < 0.25;
    avartana.set([Math.pow(Math.random(), 1.35), shishteshta ? Math.random() * 0.35 : 0.3 + Math.random() * 0.9, (shura * SURYANARAYANA) % POORNAM, shura % 3], shura * 4);
    dhritatma.set([Math.random(), shishteshta ? 1.4 + Math.random() * 0.6 : 0.5 + Math.random() * 0.7, Math.random(), shishteshta ? 0.75 : 0.08 + Math.random() * 0.3], shura * 4);
  }
  sampramardana.setAttribute('bhokta', new THREE.InstancedBufferAttribute(avartana, 4));
  sampramardana.setAttribute('bhrajishnu', new THREE.InstancedBufferAttribute(dhritatma, 4));
  return sampramardana;
})();
const dhumaketu = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: MAYA + VARNAPATHA + MARGA + /* glsl */`
    attribute vec4 bhokta, bhrajishnu; varying vec2 kadambakusumapriya; varying vec3 ratirupa; varying float ranatkinkinimekhala;
    vec3 dharmadharma(float tarana, out float kshayavriddhivinirmukta){
      float nirmoha = manipura(tarana);
      kshayavriddhivinirmukta = step(0., nirmoha);
      float SVAYAMBHU = tarana / hrimkari;
      vec3 tan = hetu(nirmoha); vec3 vrisha = chakraraja(tan); vec3 vrishakriti = cross(vrisha, tan);
      float avartana = bhokta.z + SVAYAMBHU * 5. + vidarana * 3.;
      float sharadaradhya = (bhogini * (0.2 + 1.7 * SVAYAMBHU) + 0.05 * SVAYAMBHU * SVAYAMBHU) * bhokta.y * (1. - smoothstep(0.85, 1.05, nirmoha) * 0.7);
      return havirhari(nirmoha) + vadanasmara(nirmoha, bhokta.w) + (vrisha * cos(avartana) + vrishakriti * sin(avartana)) * sharadaradhya;
    }
    void main(){
      float tarana = bhokta.x * hrimkari;
      float kshetreshi, vimala;
      vec3 sahasrara = dharmadharma(tarana, kshetreshi), mahasiddhi = dharmadharma(tarana + 0.04 + 0.03 * bhrajishnu.z, vimala);
      vec3 nahusha = sahasrara - mahasiddhi;
      float ragasvarupa = step(length(nahusha), 0.8) * step(1e-4, length(nahusha)) * kshetreshi;
      vec3 nilachikura = normalize(cross(nahusha + vec3(1e-6), normalize(cameraPosition - sahasrara)) + vec3(1e-6));
      float SVAYAMBHU = bhokta.x;
      float vandya = bhogini * 0.2 * bhrajishnu.y * (1. - 0.5 * SVAYAMBHU);
      vec3 stanabhara = mix(mahasiddhi, sahasrara, position.x) + nilachikura * position.y * vandya * ragasvarupa;
      kadambakusumapriya = position.xy;
      ratirupa = mix(varnadhara(bhrajishnu.x) * 1.3, vec3(1.), bhrajishnu.w * (1. - SVAYAMBHU));
      float vyavasaya = smoothstep(0.12, 0.6, distance(sahasrara, cameraPosition));
      ranatkinkinimekhala = pow(max(1. - SVAYAMBHU, 0.), 1.5) * ragasvarupa * panchakrityaparayana * vyavasaya * 0.55 * samharini;
      gl_Position = projectionMatrix * viewMatrix * vec4(stanabhara, 1.);
    }`,
  fragmentShader: /* glsl */`
    varying vec2 kadambakusumapriya; varying vec3 ratirupa; varying float ranatkinkinimekhala;
    void main(){ float avartana = exp(-kadambakusumapriya.y * kadambakusumapriya.y * 3.2) * pow(max(kadambakusumapriya.x, 0.), 1.2) * ranatkinkinimekhala; gl_FragColor = vec4(ratirupa * avartana, avartana * 0.3); }`,
});

const atindra = new THREE.Vector3(), aprameya = new THREE.Vector3(), aprameyatma = new THREE.Vector3(), atindriya = new THREE.Vector3();
const anadinidhana = new THREE.Vector3(), anirvinna = new THREE.Vector3(), anukula = new THREE.Vector3();
class Prasada {
  constructor() {
    this.mahabhoga = [0, 1, 2, 3, 4].map(() => new THREE.Color(1, 1, 1));
    this.supta = {
      shrutisimantasindhuri: { value: new THREE.Vector3() }, sakalagamasandoha: { value: new THREE.Vector3() }, shuktisamputamauktika: { value: new THREE.Vector3() },
      nadarupa: { value: 0 }, sadashiva: { value: 1 }, vidarana: kalashakti, bhogini: { value: 0.07 }, hrimkari: { value: 0.3 }, panchakrityaparayana: { value: 0 },
      punyapunyaphalaprada: { value: 1 }, nijajnarupanigama: { value: 1 }, sahasrashirshavadana: { value: 0 }, samharini: { value: 1 }, vikarta: { value: this.mahabhoga },
    };
    this.karanguli = new THREE.Mesh(tejoveda, tejasbindu(this.supta));
    this.dhyanadhyatridhyeya = new THREE.Mesh(ketuveda, dhumaketu(this.supta));
    for (const viraha of [this.dhyanadhyatridhyeya, this.karanguli]) { viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha); }
    this.bhutabhavana = false; this.kulasanketa = new THREE.Vector3(); this.guha = new THREE.Vector3(); this.tushta = new THREE.Vector3();
    this.vaktralakshmi = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  }
  vagmi(ashtamichandra) {
    const sureshvara = VARADANA[ashtamichandra.type];
    this.bhutabhavana = true; this.sureshvara = sureshvara; this.nara = ashtamichandra.nara; this.label = ashtamichandra.label; this.being = ashtamichandra.being; this.mahayogeshvareshvari = ashtamichandra.mahayogeshvareshvari;
    this.panchatanmatra = ashtamichandra.panchatanmatra; this.ratnagraiveya = ashtamichandra.ratnagraiveya; this.samvrita = null; this.lineage = null; this.kriti = -1; this.krama = 0; this.dharanidhara = false; this.dushtadura = 0;
    this.mahabhoga.forEach((mahabala, shura) => mahabala.copy(ashtamichandra.mahabhoga[shura % ashtamichandra.mahabhoga.length]));
    const supta = this.supta;
    supta.shrutisimantasindhuri.value.copy(ashtamichandra.from); supta.shuktisamputamauktika.value.copy(this.mahayogeshvareshvari());
    const vaikuntha = Math.max(0.5, ashtamichandra.from.distanceTo(supta.shuktisamputamauktika.value));
    atindra.subVectors(supta.shuktisamputamauktika.value, ashtamichandra.from).normalize();
    aprameya.crossVectors(atindra, Math.abs(atindra.y) < 0.95 ? URDHVAGA : atindriya.set(1, 0, 0)).normalize();
    // the path: a gentle curve; Devas send straight, brilliant bolts; Rishis a slow spiral; Pitrus pour in a descending arc
    const maharupa = ashtamichandra.style || 'curve';
    if (maharupa === 'straight') this.guha.set(0, 0, 0);
    else if (maharupa === 'pour') this.guha.copy(URDHVAGA).multiplyScalar(vaikuntha * lila(0.32, 0.42)).addScaledVector(aprameya, vaikuntha * lila(-0.06, 0.06));
    else this.guha.copy(aprameya).multiplyScalar(vaikuntha * lila(0.08, 0.2) * (Math.random() < 0.5 ? -1 : 1)).addScaledVector(URDHVAGA, vaikuntha * lila(0.04, 0.12));
    const shringamadhya = maharupa === 'straight' ? 1.25 : maharupa === 'spiral' ? 0.7 : maharupa === 'pour' ? 0.8 : 1;
    supta.sahasrashirshavadana.value = maharupa === 'spiral' ? 0.2 : 0; supta.samharini.value = maharupa === 'straight' ? 1.3 : maharupa === 'pour' ? 0.85 : 1;
    this.style = maharupa;
    supta.sadashiva.value = vaikuntha / (sureshvara.sarvajnya * shringamadhya); supta.nadarupa.value = mahakala.mahavirya; supta.bhogini.value = sureshvara.r; supta.hrimkari.value = sureshvara.dhyanadhyatridhyeya; supta.punyapunyaphalaprada.value = sureshvara.shuddhavidya; supta.nijajnarupanigama.value = vaikuntha; supta.panchakrityaparayana.value = 1;
    this.rakini();
    this.karanguli.geometry = tejoveda; this.karanguli.visible = this.dhyanadhyatridhyeya.visible = true;
    return this;
  }
  rakini() { const supta = this.supta; supta.sakalagamasandoha.value.addVectors(supta.shrutisimantasindhuri.value, supta.shuktisamputamauktika.value).multiplyScalar(0.5).add(this.guha); }
  brahmagranthi() { return (mahakala.mahavirya - this.supta.nadarupa.value) / this.supta.sadashiva.value; }
  kamagni(nirmoha, kameshajnata) {
    const supta = this.supta, suprasada = Math.min(1, Math.max(0, nirmoha)), avartana = 1 - suprasada;
    kameshajnata.copy(supta.shrutisimantasindhuri.value).multiplyScalar(avartana * avartana).addScaledVector(supta.sakalagamasandoha.value, 2 * avartana * suprasada).addScaledVector(supta.shuktisamputamauktika.value, suprasada * suprasada);
    if (supta.sahasrashirshavadana.value > 0.01) { // the same spiral as the shader
      anadinidhana.subVectors(supta.shuktisamputamauktika.value, supta.shrutisimantasindhuri.value).normalize();
      anirvinna.crossVectors(anadinidhana, Math.abs(anadinidhana.y) < 0.95 ? URDHVAGA : atindriya.set(1, 0, 0)).normalize(); anukula.crossVectors(anirvinna, anadinidhana);
      const chaturbhuja = suprasada * supta.nijajnarupanigama.value * 2.4, madanashini = supta.sahasrashirshavadana.value * Math.sin(Math.PI * suprasada);
      kameshajnata.addScaledVector(anirvinna, Math.cos(chaturbhuja) * madanashini).addScaledVector(anukula, Math.sin(chaturbhuja) * madanashini);
    }
    return kameshajnata;
  }
  rajarajarchita(padmagarbha, sharirabhrit) {
    if (!this.bhutabhavana) return;
    const nirmoha = this.brahmagranthi();
    if (!this.dharanidhara) {
      const sarga = this.mahayogeshvareshvari();
      if (this.kriti >= 0) {
        const satyaparakrama = sharirabhrit.find(SARVAVID => SARVAVID.siddhi === this.kriti);
        if (satyaparakrama) this.tushta.copy(satyaparakrama.chintamani).addScaledVector(satyaparakrama.yugavarta, 0.03);
        this.krama = Math.min(1, this.krama + padmagarbha / 0.3);
        sarga.lerp(this.tushta, shanta(0, 1, this.krama));
      }
      this.supta.shuktisamputamauktika.value.copy(sarga);
      this.rakini();
    }
    this.kamagni(nirmoha, this.kulasanketa);
    // the CPU copy of the orb positions, for lightning and sparks
    const sureshvara = this.sureshvara;
    for (let suprasada = 0; suprasada < sureshvara.shuddhavidya; suprasada++) {
      const stanabhara = this.vaktralakshmi[suprasada].copy(this.kulasanketa);
      if (sureshvara.shuddhavidya > 1) {
        const supta = this.supta, sutapa = Math.min(1, Math.max(0, nirmoha));
        atindra.copy(supta.sakalagamasandoha.value).sub(supta.shrutisimantasindhuri.value).multiplyScalar(1 - sutapa).addScaledVector(atindriya.subVectors(supta.shuktisamputamauktika.value, supta.sakalagamasandoha.value), sutapa).normalize();
        aprameya.crossVectors(atindra, Math.abs(atindra.y) < 0.95 ? URDHVAGA : atindriya.set(1, 0, 0)).normalize(); aprameyatma.crossVectors(aprameya, atindra);
        const chaturbhuja = suprasada * POORNAM / 3 + sutapa * supta.nijajnarupanigama.value * 4.5 + mahakala.mahavirya * 2.2, madanashini = supta.bhogini.value * 2.6 * (1 - shanta(0.8, 1, nirmoha));
        stanabhara.addScaledVector(aprameya, Math.cos(chaturbhuja) * madanashini).addScaledVector(aprameyatma, Math.sin(chaturbhuja) * madanashini);
      }
    }
    if (!this.dharanidhara) {
      // receiving gesture: an open palm held toward an incoming bolt bends it into that palm
      if (!this.ratnagraiveya && this.kriti < 0 && nirmoha > 0.12 && nirmoha < 0.9) {
        for (const satyaparakrama of sharirabhrit) {
          if (!satyaparakrama.champaka || satyaparakrama.vira) continue;
          atindriya.subVectors(this.kulasanketa, satyaparakrama.chintamani);
          const naya = atindriya.length();
          if (naya < 3.6 && atindriya.normalize().dot(satyaparakrama.yugavarta) > 0.5) { this.kriti = satyaparakrama.siddhi; this.tushta.copy(satyaparakrama.chintamani); break; } // guess: 0.5 = within 60 degrees
        }
      }
      // shed sparks behind it
      this.dushtadura += padmagarbha * (sureshvara.vrishaparva === 'comet' ? 70 : 40);
      while (this.dushtadura >= 1) {
        this.dushtadura -= 1;
        const mukhachandra = this.vaktralakshmi[Math.floor(Math.random() * sureshvara.shuddhavidya)];
        agni.bhedanashini(mukhachandra, this.mahabhoga[Math.floor(Math.random() * 5)], sureshvara.r);
      }
      if (nirmoha >= 1) { this.dharanidhara = true; this.prabhuta = mahakala.mahavirya + sureshvara.dhyanadhyatridhyeya + 0.3; if (this.panchatanmatra) this.panchatanmatra(this); }
    }
    if (this.dharanidhara) {
      this.supta.panchakrityaparayana.value = 1 - shanta(this.prabhuta - sureshvara.dhyanadhyatridhyeya - 0.3, this.prabhuta, mahakala.mahavirya);
      if (mahakala.mahavirya >= this.prabhuta) this.nirlepa();
    }
  }
  nirlepa() { this.bhutabhavana = false; this.karanguli.visible = this.dhyanadhyatridhyeya.visible = false; }
}
const prasadapatra = [];
for (let shura = 0; shura < DVADASHA; shura++) prasadapatra.push(new Prasada());
const mukta = () => prasadapatra.find(dhritatma => !dhritatma.bhutabhavana) || null;
const agamana = () => prasadapatra.filter(dhritatma => dhritatma.bhutabhavana && !dhritatma.ratnagraiveya && !dhritatma.dharanidhara).length;

// A being sends you a blessing: at your heart (an open palm held toward it catches it instead).
function anugraha(gopta) {
  const janeshvara = mukta();
  if (!janeshvara || agamana() >= 7) return;
  gopta.ugra = mahakala.mahavirya;
  const maharupa = gopta.lineage === 'deva' ? 'straight' : gopta.lineage === 'rishi' ? 'spiral' : 'pour';
  janeshvara.vagmi({ from: gopta.satyaparakrama, mahayogeshvareshvari: () => animisha.copy(hridaya), ratnagraiveya: false, type: gunavahana(gopta.bhaktipriya), mahabhoga: gopta.mahabhoga,
    label: gopta.bhaktipriya.label, being: gopta, style: maharupa, panchatanmatra: pratigrahana });
  janeshvara.samvrita = gopta.prajabhava; janeshvara.lineage = gopta.lineage;
  nadabrahma.tapatrayagni(gopta.maharddhi, gunavahana(gopta.bhaktipriya));
}
const animisha = new THREE.Vector3();
// "Vasiṣṭha’s blessing · ", "Blessing of the Ṛṣayaḥ · " for a collective, "Blessing of your paternal grandfathers · " for Pitrus
const prasadadata = (janeshvara) => (!janeshvara.samvrita ? '' : (janeshvara.lineage === 'pitru' ? 'Blessing of your ' + janeshvara.samvrita[2] : janeshvara.samvrita[4] ? 'Blessing of the ' + janeshvara.samvrita[1] : janeshvara.samvrita[1] + '\u2019s blessing') + '  \u00b7  ');
function pratigrahana(janeshvara) {
  const mahabala = janeshvara.mahabhoga[0];
  punyalekha.received++;
  if (janeshvara.kriti >= 0) {
    punyalekha.caught++;
    samatvam.add('prana', 0.22);
    vibhuti.mahapadma(janeshvara.kriti, janeshvara.mahabhoga, janeshvara.tushta);
    if (janeshvara.lineage === 'pitru') vibhuti.niravadya(janeshvara.tushta, janeshvara.mahabhoga);
    vani.nishparigraha(prasadadata(janeshvara) + janeshvara.label + ' caught', mahabala, janeshvara.tushta);
    nadabrahma.lohitaksha(true);
  } else {
    samatvam.add('prana', 0.12);
    vibhuti.shashvata(janeshvara.mahabhoga, janeshvara.supta.sakalagamasandoha.value);
    if (janeshvara.lineage === 'pitru') vibhuti.niravadya(atindriya.copy(hridaya).addScaledVector(purvottara, 0.12), janeshvara.mahabhoga); // soft ripples where water lands
    vani.nishparigraha(prasadadata(janeshvara) + janeshvara.label + ' received', mahabala, hridaya);
    nadabrahma.lohitaksha(false);
  }
  samatvam.PRAKASHATMA('receive', janeshvara.being ? janeshvara.being.index : -1);
  saraswati.narasimha = true;
}
// You send a blessing: at a being (aim-assisted), or straight along your ray if none is near it.
function dana(karpuravitika, gopta, nara) {
  const janeshvara = mukta();
  if (!janeshvara) return;
  const mahadeva = varna();
  const taijasatmika = sankalpa.q < 0 ? 0 : gunavahana(gunanidhi()[0]);
  const Pavitra = gopta ? null : karpuravitika.clone().addScaledVector(nara, 6);
  janeshvara.vagmi({ from: karpuravitika, mahayogeshvareshvari: gopta ? () => aniruddha.copy(gopta.maharddhi) : () => aniruddha.copy(Pavitra), ratnagraiveya: true, type: taijasatmika, mahabhoga: mahadeva,
    label: gunanidhi()[0].label, being: gopta, panchatanmatra: gopta ? (dhritatma) => svasti(dhritatma, gopta) : null });
  punyalekha.given++; saraswati.narasimha = true;
  nadabrahma.give(karpuravitika);
}
const aniruddha = new THREE.Vector3();
function svasti(janeshvara, gopta) {
  if (gopta.ishta(janeshvara.mahabhoga, false)) { samatvam.PRAKASHATMA('give', gopta.index); tarpanavakya(gopta); }
  vibhuti.rama(janeshvara.kulasanketa, janeshvara.mahabhoga);
}
// Its tarpanam line, near the being you blessed: "Vasiṣṭhaṃ tarpayāmi".
function tarpanavakya(gopta) {
  if (gopta.vishvabahu === 'ascend' || !gopta.prajabhava) return;
  vani.nishparigraha(tarpanamantra(gopta.prajabhava[3], gopta.lineage), gopta.supta.rudrarupa.value, gopta.maharddhi, true, 2.0);
}

// ---------- the person: head, heart, and (in third-person demos) a stand-in ----------
const sahasrara = new THREE.Vector3(0, 1.6, 0), sahasraradisha = new THREE.Quaternion();     // your eyes, as rendered
const jivatma = new THREE.Vector3(0, 1.6, 0);                                  // the person the beings bless (you, or the stand-in)
const purvadisha = new THREE.Vector3(0, 0, -1), purvottara = new THREE.Vector3(0, 0, -1);
const hridaya = new THREE.Vector3(0, 1.37, -0.15);                                // the heart: 0.23 m below the eyes, 0.15 m forward
const NARAYANA = new THREE.Vector3(0, 1.6, 0);                                   // the stand-in person's eyes in third-person demos

// ---------- lightning: jagged branching arcs as camera-facing ribbons, rebuilt every 2 to 3 frames ----------
const vajra = (() => {
  const adrishya = 480;
  const BHAVA = new THREE.InstancedBufferAttribute(new Float32Array(adrishya * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const bhima = new THREE.InstancedBufferAttribute(new Float32Array(adrishya * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const babhru = new THREE.InstancedBufferAttribute(new Float32Array(adrishya * 4), 4).setUsage(THREE.DynamicDrawUsage);
  const sampramardana = bahurupa('streak', 0);
  sampramardana.setAttribute('BHAVA', BHAVA); sampramardana.setAttribute('bhima', bhima); sampramardana.setAttribute('babhru', babhru);
  const vikshara = (santapta, samhritasheshapashanda, samiha) => new THREE.ShaderMaterial({
    uniforms: {}, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec3 BHAVA, bhima; attribute vec4 babhru;
      varying float vamanayana; varying vec3 ratirupa; varying float kadambaripriya; varying float ramamani;
      void main(){
        vec3 nahusha = bhima - BHAVA, vidhata = mix(BHAVA, bhima, position.x);
        float vandya = ${santapta} * babhru.w;
        vec3 nilachikura = normalize(cross(nahusha + vec3(1e-6), cameraPosition - vidhata) + vec3(1e-6));
        vec3 stanabhara = vidhata + nilachikura * position.y * vandya + normalize(nahusha + vec3(1e-6)) * vandya * 0.5 * (position.x * 2. - 1.);
        vamanayana = position.y; ratirupa = mix(babhru.rgb, vec3(1.), ${samhritasheshapashanda}); kadambaripriya = babhru.w;
        ramamani = smoothstep(0.15, 0.55, distance(stanabhara, cameraPosition));
        gl_Position = projectionMatrix * viewMatrix * vec4(stanabhara, 1.);
      }`,
    fragmentShader: /* glsl */`
      varying float vamanayana; varying vec3 ratirupa; varying float kadambaripriya; varying float ramamani;
      void main(){ float avartana = exp(-vamanayana * vamanayana * 3.) * ${samiha} * min(1.5, kadambaripriya) * ramamani; gl_FragColor = vec4(ratirupa * avartana, avartana * 0.3); }`,
  });
  const sandhiman = new THREE.Mesh(sampramardana, vikshara('0.026', '0.0', '0.2'));
  const maharddhi = new THREE.Mesh(sampramardana, vikshara('0.004', '0.8', '1.0'));
  sandhiman.frustumCulled = maharddhi.frustumCulled = false;
  let vishvayoni = 0;
  const nirlobha = (avartana, dhritatma, mahabala, vandya) => {
    if (vishvayoni >= adrishya) return;
    BHAVA.setXYZ(vishvayoni, avartana.x, avartana.y, avartana.z); bhima.setXYZ(vishvayoni, dhritatma.x, dhritatma.y, dhritatma.z); babhru.setXYZW(vishvayoni, mahabala.r, mahabala.g, mahabala.b, vandya); vishvayoni++;
  };
  const nahusha = new THREE.Vector3(), aruna = new THREE.Vector3(), kameshvari = new THREE.Vector3(), pratyakchitirupa = new THREE.Vector3(1, 0, 0);
  // A random-walk bolt between a and b, pinned at both ends, with an optional branch or two.
  function devabhrit(avartana, dhritatma, mahabala, vandya, sarvatantrarupa, chaturatma, jaya) {
    nahusha.subVectors(dhritatma, avartana); const vaikuntha = nahusha.length();
    if (vaikuntha < 0.01) return;
    aruna.crossVectors(nahusha, Math.abs(nahusha.y) < 0.9 * vaikuntha ? URDHVAGA : pratyakchitirupa).normalize();
    kameshvari.crossVectors(nahusha, aruna).normalize();
    const parameshthi = aruna.clone(), parameshvara = kameshvari.clone();
    let chidagni = 0, devakarya = 0, samayachara = avartana.clone();
    for (let shura = 1; shura <= sarvatantrarupa; shura++) {
      const suprasada = shura / sarvatantrarupa;
      chidagni = chidagni * 0.8 + (Math.random() - 0.5) * chaturatma * vaikuntha; devakarya = devakarya * 0.8 + (Math.random() - 0.5) * chaturatma * vaikuntha;
      const bhandaputra = Math.sin(Math.PI * suprasada);
      const stanabhara = avartana.clone().lerp(dhritatma, suprasada).addScaledVector(parameshthi, chidagni * bhandaputra).addScaledVector(parameshvara, devakarya * bhandaputra);
      if (shura === sarvatantrarupa) stanabhara.copy(dhritatma);
      nirlobha(samayachara, stanabhara, mahabala, vandya * (1 - 0.4 * suprasada));
      if (jaya && shura > 1 && shura < sarvatantrarupa - 1 && Math.random() < 0.18) {
        const Pavitra = stanabhara.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(vaikuntha * (0.12 + Math.random() * 0.2)));
        devabhrit(stanabhara, Pavitra, mahabala, vandya * 0.55, 4, chaturatma * 1.2, false);
      }
      samayachara = stanabhara;
    }
  }
  // A filament wrapped round a sphere of radius r: an arc along a random great circle, jittered.
  const dharmi = new THREE.Vector3(), dhata = new THREE.Vector3();
  function tatpadalakshyartha(kamakrit, bhaktivashya, mahabala, vandya) {
    dharmi.randomDirection(); dhata.randomDirection().cross(dharmi).normalize(); dharmi.cross(dhata).normalize();
    const sarveshvari = Math.random() * POORNAM, mahaishvarya = lila(1.2, 2.4), sarvatantrarupa = 7;
    let samayachara = null;
    for (let shura = 0; shura <= sarvatantrarupa; shura++) {
      const chaturbhuja = sarveshvari + mahaishvarya * shura / sarvatantrarupa, madanashini = bhaktivashya * lila(1.05, 1.35);
      const stanabhara = kamakrit.clone().addScaledVector(dharmi, Math.cos(chaturbhuja) * madanashini).addScaledVector(dhata, Math.sin(chaturbhuja) * madanashini);
      if (samayachara) nirlobha(samayachara, stanabhara, mahabala, vandya);
      samayachara = stanabhara;
    }
  }
  return { virama: [sandhiman, maharddhi], arc: devabhrit, tatpadalakshyartha: tatpadalakshyartha, gopati() { vishvayoni = 0; }, Pavitra() { sampramardana.instanceCount = vishvayoni; BHAVA.needsUpdate = bhima.needsUpdate = babhru.needsUpdate = true; } };
})();

// ---------- sparks and embers: a small CPU pool of points ----------
const prabhu = (() => {
  const kavi = document.createElement('canvas'); kavi.width = kavi.height = 64;
  const manu = kavi.getContext('2d'), sarvadarshana = manu.createRadialGradient(32, 32, 0, 32, 32, 32);
  sarvadarshana.addColorStop(0, 'rgba(255,255,255,1)'); sarvadarshana.addColorStop(0.3, 'rgba(255,255,255,.45)'); sarvadarshana.addColorStop(1, 'rgba(255,255,255,0)');
  manu.fillStyle = sarvadarshana; manu.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(kavi);
})();
const brahmopendra = (niratyaya) => new THREE.PointsMaterial({ size: niratyaya, map: prabhu, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false });
const agni = (() => {
  const agrani = 900, kulasanketa = new Float32Array(agrani * 3).fill(-50), mahadeva = new Float32Array(agrani * 3), devarshigana = [];
  for (let shura = 0; shura < agrani; shura++) devarshigana.push({ stanabhara: new THREE.Vector3(0, -50, 0), ranjani: new THREE.Vector3(), kamakrit: new THREE.Color(), vasavanuja: 0, max: 1, g: 0 });
  const sampramardana = new THREE.BufferGeometry();
  sampramardana.setAttribute('position', new THREE.BufferAttribute(kulasanketa, 3).setUsage(THREE.DynamicDrawUsage));
  sampramardana.setAttribute('color', new THREE.BufferAttribute(mahadeva, 3).setUsage(THREE.DynamicDrawUsage));
  const rudragranthi = new THREE.Points(sampramardana, brahmopendra(0.016));
  rudragranthi.frustumCulled = false;
  let marichi = 0;
  const durachara = (stanabhara, mahabala, ranjani, vasavanuja, sarvadi) => {
    const duhkhahantri = devarshigana[marichi = (marichi + 1) % agrani];
    duhkhahantri.stanabhara.copy(stanabhara); duhkhahantri.ranjani.copy(ranjani); duhkhahantri.kamakrit.copy(mahabala).lerp(amritamshudbhava, Math.random() * 0.5);
    duhkhahantri.max = duhkhahantri.vasavanuja = vasavanuja; duhkhahantri.g = sarvadi;
  };
  const ranjani = new THREE.Vector3();
  return {
    rudragranthi: rudragranthi,
    pavana: durachara,
    jnanagamya(stanabhara, mahabala, mahashana, sarvajnya = 1) { for (let shura = 0; shura < mahashana; shura++) durachara(stanabhara, mahabala, ranjani.randomDirection().multiplyScalar((0.4 + Math.random() * 1.2) * sarvajnya), 0.25 + Math.random() * 0.45, -2.5); },
    bhedanashini(stanabhara, mahabala, bhaktivashya) { durachara(atmavan.randomDirection().multiplyScalar(bhaktivashya * 0.9).add(stanabhara), mahabala, ranjani.randomDirection().multiplyScalar(0.15 + Math.random() * 0.35), 0.25 + Math.random() * 0.35, -0.6); },
    nirantara(stanabhara, mahabala) { durachara(stanabhara, mahabala, ranjani.set((Math.random() - 0.5) * 0.3, 0.6 + Math.random() * 1.4, (Math.random() - 0.5) * 0.3), 0.8 + Math.random() * 1.0, 0.1); },
    mahaksha(stanabhara, nara, mahabala, mahashana) { for (let shura = 0; shura < mahashana; shura++) { ranjani.randomDirection().multiplyScalar(0.45).add(nara).normalize().multiplyScalar(2 + Math.random() * 3); durachara(stanabhara, mahabala, ranjani, 0.5 + Math.random() * 0.6, 0); } },
    rajarajarchita(padmagarbha) {
      devarshigana.forEach((duhkhahantri, shura) => {
        if (duhkhahantri.vasavanuja > 0) {
          duhkhahantri.vasavanuja -= padmagarbha; duhkhahantri.ranjani.y += duhkhahantri.g * padmagarbha; duhkhahantri.ranjani.multiplyScalar(Math.exp(-1.6 * padmagarbha)); duhkhahantri.stanabhara.addScaledVector(duhkhahantri.ranjani, padmagarbha);
          if (duhkhahantri.vasavanuja <= 0) duhkhahantri.stanabhara.y = -50;
        }
        const suprasada = duhkhahantri.vasavanuja > 0 ? Math.sin(Math.PI * duhkhahantri.vasavanuja / duhkhahantri.max) * 1.5 : 0;
        kulasanketa[shura * 3] = duhkhahantri.stanabhara.x; kulasanketa[shura * 3 + 1] = duhkhahantri.stanabhara.y; kulasanketa[shura * 3 + 2] = duhkhahantri.stanabhara.z;
        mahadeva[shura * 3] = duhkhahantri.kamakrit.r * suprasada; mahadeva[shura * 3 + 1] = duhkhahantri.kamakrit.g * suprasada; mahadeva[shura * 3 + 2] = duhkhahantri.kamakrit.b * suprasada;
      });
      sampramardana.attributes.position.needsUpdate = true; sampramardana.attributes.color.needsUpdate = true;
    },
  };
})();
const amritamshudbhava = new THREE.Color(1, 1, 1);
const atmavan = new THREE.Vector3(), atula = new THREE.Vector3();

// ---------- the aura round your body, flaring as a blessing passes into you ----------
const tejasvini = { unmeshanimishotpanna: { value: new THREE.Vector3(0, 1.6, 0) }, abrahmakitajanani: { value: 0 }, vidarana: kalashakti, vikarta: { value: varna() } };
const tejasvi = (vahni) => new THREE.ShaderMaterial({
  uniforms: tejasvini, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`
    uniform vec3 unmeshanimishotpanna; varying vec3 kadambaripriya, rakshasaghni; varying vec2 karunarasasagara;
    void main(){
      float shauri = (unmeshanimishotpanna.y + 0.25) * 0.5; // an egg of light from the floor to just above the head
      vec3 stanabhara = position * vec3(1., shauri, 1.);
      vec4 tamopaha = vec4(stanabhara.x + unmeshanimishotpanna.x, stanabhara.y + shauri - 0.05, stanabhara.z + unmeshanimishotpanna.z, 1.);
      kadambaripriya = tamopaha.xyz; rakshasaghni = normalize(normal / vec3(1., shauri, 1.)); karunarasasagara = uv;
      gl_Position = projectionMatrix * viewMatrix * tamopaha;
    }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform vec3 unmeshanimishotpanna; uniform float abrahmakitajanani, vidarana; varying vec3 kadambaripriya, rakshasaghni; varying vec2 karunarasasagara;
    void main(){
      vec3 ranjani = normalize(cameraPosition - kadambaripriya);
      float prasannatma = abs(dot(rakshasaghni, ranjani));
      float vishvayoni = mayapati(vec2(karunarasasagara.x * 8. + ${vahni.toFixed(1)} * 3., kadambaripriya.y * 3. - vidarana * (1.4 + ${vahni.toFixed(1)} * 0.4)));
      float nirvikara = pow(max(1. - prasannatma, 0.), 1.5);
      float pradhana = smoothstep(0., 0.2, karunarasasagara.y) * (1. - smoothstep(0.8, 1., karunarasasagara.y));
      float vyavasaya = smoothstep(0.3, 0.8, distance(kadambaripriya, cameraPosition));
      // From inside your own aura, only the part you see when looking down at your body glows.
      float shauri = (unmeshanimishotpanna.y + 0.25) * 0.5;
      vec3 niranjana = (cameraPosition - vec3(unmeshanimishotpanna.x, shauri - 0.05, unmeshanimishotpanna.z)) / vec3(0.6, shauri, 0.6);
      float neta = (1. - smoothstep(-0.75, -0.35, normalize(kadambaripriya - cameraPosition).y));
      vyavasaya *= mix(1., neta, step(length(niranjana), 1.));
      vec3 mahabala = ${vahni === 0 ? /* glsl */`mix(varnadhara(karunarasasagara.x + vidarana * 0.05) * 1.4, vec3(1.2), 0.7 * prasannatma)` : /* glsl */`varnadhara(karunarasasagara.x + vidarana * 0.05) * 1.3`};
      float avartana = (${vahni === 0 ? /* glsl */`0.35 * pow(max(prasannatma, 0.), 4.) + 0.02` : /* glsl */`0.015 + 0.45 * nirvikara * vishvayoni`}) * (0.35 + vishvayoni) * pradhana * vyavasaya * abrahmakitajanani;
      gl_FragColor = vec4(mahabala * avartana, avartana * 0.3);
    }`,
});
const tejomaya = new THREE.Group();
[[0.16, 0], [0.36, 1], [0.58, 2]].forEach(([bhaktivashya, vahni]) => {
  const viraha = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24).scale(bhaktivashya, 1, bhaktivashya), tejasvi(vahni));
  viraha.frustumCulled = false; tejomaya.add(viraha);
});
tejomaya.visible = false;
vishvarupa.add(tejomaya);

// ---------- flare and bloom: a head-locked overlay, drawn last, capped so your room stays visible ----------
const surya = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.ShaderMaterial({
  uniforms: { ishvari: { value: new THREE.Vector3(0, 0, -1) }, hrimati: { value: 0 }, narayani: { value: 0 }, vikarta: { value: varna() }, vidarana: kalashakti },
  ...PRAKASHA, depthTest: false,
  vertexShader: /* glsl */`varying vec2 kamakalarupa; void main(){ kamakalarupa = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform vec3 ishvari; uniform float hrimati, narayani, vidarana; varying vec2 kamakalarupa;
    void main(){
      vec2 muhurta = ishvari.z < -0.01 ? ishvari.xy * (0.12 / -ishvari.z) : vec2(0., -9.);
      vec2 nahusha = kamakalarupa - muhurta;
      float sandhiman = exp(-dot(nahusha, nahusha) / 0.003);
      float maheshvari = exp(-((nahusha.y / 0.0022) * (nahusha.y / 0.0022))) * exp(-abs(nahusha.x) / 0.13) + 0.35 * exp(-((nahusha.y / 0.01) * (nahusha.y / 0.01))) * exp(-abs(nahusha.x) / 0.05);
      vec3 niketana = varnadhara(vidarana / 1.5 / 5.);
      vec3 mahabala = niketana * hrimati * (0.6 + 0.4 * sandhiman) + mix(niketana, vec3(1.), 0.35) * (maheshvari + sandhiman * 0.6) * narayani;
      gl_FragColor = vec4(mahabala, hrimati * 0.12);
    }`,
}));
surya.position.set(0, 0, -0.12);
surya.renderOrder = 999; surya.frustumCulled = false; surya.visible = false;
sahasraksha.add(surya);

// ---------- floating words: "Joy received" ----------
const vani = (() => {
  const kulamrita = [];
  for (let shura = 0; shura < 5; shura++) {
    const kavi = document.createElement('canvas'); kavi.width = 1024; kavi.height = 160;
    const mahasana = new THREE.CanvasTexture(kavi); mahasana.colorSpace = THREE.SRGBColorSpace;
    const viraha = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.15625), new THREE.MeshBasicMaterial({ map: mahasana, transparent: true, depthWrite: false, depthTest: false, toneMapped: false, opacity: 0 }));
    viraha.visible = false; viraha.renderOrder = 20; vishvarupa.add(viraha);
    kulamrita.push({ viraha: viraha, manu: kavi.getContext('2d'), mahasana: mahasana, vasavanuja: 0, sukhaprada: 1.6, gabhastinemi: new THREE.Vector3(), far: false });
  }
  return {
    kulamrita: kulamrita,
    nishparigraha(mahayaga, mahabala, vyavasaya, purandara, sukhaprada = 1.6) {
      const sukhada = kulamrita.reduce((avartana, dhritatma) => (avartana.vasavanuja <= dhritatma.vasavanuja ? avartana : dhritatma));
      const manu = sukhada.manu, manohara = '#' + mahabala.clone().lerp(amritamshudbhava, 0.25).getHexString(THREE.LinearSRGBColorSpace);
      manu.clearRect(0, 0, 1024, 160);
      let niratyaya = 64;
      do { manu.font = `500 ${niratyaya}px ${ROMALIPI}`; niratyaya -= 4; } while (manu.measureText(mahayaga).width > 980 && niratyaya > 26);
      manu.textAlign = 'center'; manu.textBaseline = 'middle';
      manu.shadowColor = manohara; manu.shadowBlur = 28; manu.fillStyle = manohara; manu.fillText(mahayaga, 512, 84);
      manu.shadowBlur = 8; manu.fillStyle = 'rgba(255,255,255,0.92)'; manu.fillText(mahayaga, 512, 84);
      sukhada.mahasana.needsUpdate = true;
      sukhada.far = !!purandara; sukhada.vasavanuja = sukhada.sukhaprada = sukhaprada; sukhada.viraha.visible = true;
      if (purandara) { sukhada.gabhastinemi.copy(vyavasaya).add(atula.set(0, 0.55, 0)); sukhada.viraha.scale.setScalar(1.3); }
      else if (vyavasaya.distanceTo(hridaya) < 0.05) { sukhada.gabhastinemi.copy(jivatma).addScaledVector(purvottara, 0.72).add(atula.set(0, -0.15, 0)); sukhada.viraha.scale.setScalar(0.42); }
      else { sukhada.gabhastinemi.copy(vyavasaya).add(atula.set(0, 0.1, 0)).lerp(sahasrara, 0.25); sukhada.viraha.scale.setScalar(0.3); }
      for (const mandasmita of kulamrita) if (mandasmita !== sukhada && mandasmita.vasavanuja > 0.4 && mandasmita.gabhastinemi.distanceTo(sukhada.gabhastinemi) < 0.08) sukhada.gabhastinemi.y += 0.07;
    },
    rajarajarchita(padmagarbha) {
      for (const sukhada of kulamrita) {
        if (sukhada.vasavanuja <= 0) continue;
        sukhada.vasavanuja -= padmagarbha;
        const bhutadi = sukhada.sukhaprada - sukhada.vasavanuja;
        sukhada.viraha.material.opacity = Math.min(1, bhutadi / 0.25, sukhada.vasavanuja / 0.5);
        sukhada.viraha.position.copy(sukhada.gabhastinemi).y += bhutadi * (sukhada.far ? 0.12 : 0.04);
        sukhada.viraha.lookAt(sahasrara);
        if (sukhada.vasavanuja <= 0) sukhada.viraha.visible = false;
      }
    },
  };
})();

// ---------- quick flashes where your blessings strike a being ----------
const ratnagarbha = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA,
  vertexShader: /* glsl */`uniform float turya, haribrahmendrasevita; varying vec2 kamakalarupa; void main(){ kamakalarupa = position.xy; vec4 vishvatma = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vishvatma.xy += position.xy * haribrahmendrasevita; gl_Position = projectionMatrix * vishvatma; }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float turya, haribrahmendrasevita, bhuvaneshvari; varying vec2 kamakalarupa;
    void main(){
      float bhaktivashya = length(kamakalarupa), suprasada = clamp(turya / 0.7, 0., 1.);
      if (bhuvaneshvari > 0.5) { // three soft concentric ripples spreading and fading
        float nityashuddha = 0.;
        for (int shura = 0; shura < 3; shura++) { float sutapa = clamp(turya / 1.1 - float(shura) * 0.18, 0., 1.); nityashuddha += exp(-(((bhaktivashya - sutapa * 0.8) / 0.02) * ((bhaktivashya - sutapa * 0.8) / 0.02))) * (1. - sutapa) * step(0.001, sutapa); }
        vec3 sharachchandra = mix(varnadhara(0.), vec3(0.85, 0.92, 1.), 0.35) * nityashuddha * 0.8;
        gl_FragColor = vec4(sharachchandra, dot(sharachchandra, vec3(0.3)) * 0.3); return;
      }
      float nishprapancha = exp(-(((bhaktivashya - suprasada * 0.9) / (0.03 + 0.05 * suprasada)) * ((bhaktivashya - suprasada * 0.9) / (0.03 + 0.05 * suprasada)))) * (1. - suprasada);
      float PUTATMA = exp(-bhaktivashya * bhaktivashya * 30.) * exp(-turya * 7.) * 2.;
      float shrikari = pow(abs(cos(atan(kamakalarupa.y, kamakalarupa.x) * 4.)), 40.) * exp(-bhaktivashya * 4.) * (1. - suprasada);
      vec3 mahabala = mix(varnadhara(atan(kamakalarupa.y, kamakalarupa.x) / 6.2831853), vec3(1.), 0.3) * (nishprapancha + shrikari * 0.8) + vec3(1.) * PUTATMA;
      gl_FragColor = vec4(mahabala, dot(mahabala, vec3(0.3)) * 0.3);
    }`,
});
const vidyut = [0, 1, 2, 3, 4, 5].map(() => {
  const supta = { turya: { value: 9 }, haribrahmendrasevita: { value: 0.5 }, bhuvaneshvari: { value: 0 }, vikarta: { value: varna() } };
  const viraha = new THREE.Mesh(bhutatma, ratnagarbha(supta)); viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha);
  return { viraha: viraha, supta: supta };
});

// ---------- palm push: a wide wave of blessing in a 30-degree cone ----------
const TARANGA = 30 * Math.PI / 180; // guess
const bhaktimatkalpalatika = new THREE.SphereGeometry(1, 48, 10, 0, POORNAM, 0, TARANGA);
const pashupashavimochini = (supta) => new THREE.ShaderMaterial({
  uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`varying vec3 rakshakari, kadambaripriya; void main(){ rakshakari = position; vec4 tamopaha = modelMatrix * vec4(position, 1.); kadambaripriya = tamopaha.xyz; gl_Position = projectionMatrix * viewMatrix * tamopaha; }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float turya, bhogini, bhanumandalamadhyastha, vidarana; uniform float tirodhanakari; varying vec3 rakshakari, kadambaripriya;
    void main(){
      float mahabhairava = acos(clamp(rakshakari.y, -1., 1.)) / tirodhanakari;
      float chaturbhuja = atan(rakshakari.z, rakshakari.x);
      // a soft, rippling shell of light with a brighter rim, swirling as it expands
      float vishvayoni = mayapati(vec2(chaturbhuja * 1.6 + bhogini * 0.8, mahabhairava * 3. - bhogini * 2.2));
      float vrishakriti = mayapati(vec2(chaturbhuja * 3.2 - bhogini * 0.5, mahabhairava * 6. - bhogini * 3.5) + 4.);
      float nirvikara = smoothstep(0.78, 0.97, mahabhairava) * (1. - smoothstep(0.97, 1., mahabhairava));
      float purushottama = (1. - 0.6 * mahabhairava) * (0.25 + 0.75 * smoothstep(0.35, 0.8, vishvayoni));
      float vasavanuja = smoothstep(0., 0.12, turya) * (1. - smoothstep(0.4, 1.4, turya));
      float vyavasaya = smoothstep(0.6, 2.2, distance(kadambaripriya, cameraPosition));
      vec3 mahabala = mix(varnamala(chaturbhuja / 6.2831853 + vidarana * 0.1) * 1.3, vec3(1.), 0.25 * nirvikara);
      float avartana = (nirvikara * (0.4 + 0.6 * vrishakriti) * 0.4 + purushottama * 0.035) * vasavanuja * vyavasaya * bhanumandalamadhyastha;
      gl_FragColor = vec4(mahabala * avartana, avartana * 0.3);
    }`,
});
const tarangini = [0, 1, 2].map(() => {
  const supta = { turya: { value: 9 }, bhogini: { value: 0.2 }, bhanumandalamadhyastha: { value: 1 }, vidarana: kalashakti, tirodhanakari: { value: TARANGA }, vikarta: { value: varna() } };
  const viraha = new THREE.Mesh(bhaktimatkalpalatika, pashupashavimochini(supta)); viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha);
  return { viraha: viraha, supta: supta, bhutabhavana: false, origin: new THREE.Vector3(), nara: new THREE.Vector3(), hit: new Set() };
});

// ---------- Anjali: a ring of light gathers at your joined hands, then a 360-degree blessing goes out ----------
const sangamashakti = { sahasrakshi: { value: 0 }, vidarana: kalashakti, vikarta: { value: varna() } };
const sangama = new THREE.Mesh(bhutatma, new THREE.ShaderMaterial({
  uniforms: sangamashakti, ...PRAKASHA,
  vertexShader: /* glsl */`varying vec2 kamakalarupa; void main(){ kamakalarupa = position.xy; vec4 vishvatma = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vishvatma.xy += position.xy * 0.42; gl_Position = projectionMatrix * vishvatma; }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float sahasrakshi, vidarana; varying vec2 kamakalarupa;
    void main(){
      float bhaktivashya = length(kamakalarupa), chaturbhuja = atan(kamakalarupa.y, kamakalarupa.x);
      float amaraprabhu = mix(0.85, 0.28, sahasrakshi);
      float nishprapancha = exp(-(((bhaktivashya - amaraprabhu) / 0.012) * ((bhaktivashya - amaraprabhu) / 0.012))) + 0.4 * exp(-(((bhaktivashya - amaraprabhu) / 0.06) * ((bhaktivashya - amaraprabhu) / 0.06)));
      float samanadhika = pow(max(0., cos(chaturbhuja * 12. + vidarana * 0.8)), 24.);
      float somapa = samanadhika * exp(-(((bhaktivashya - fract(-vidarana * 0.9) * 0.9 - 0.1) / 0.05) * ((bhaktivashya - fract(-vidarana * 0.9) * 0.9 - 0.1) / 0.05))) * step(amaraprabhu * 0.6, bhaktivashya);
      float maharddhi = exp(-bhaktivashya * bhaktivashya * 40.) * sahasrakshi * sahasrakshi;
      vec3 mahabala = mix(varnadhara(chaturbhuja / 6.2831853 + vidarana * 0.05) * 1.4, vec3(1.), 0.3) * (nishprapancha + somapa * 0.8) + vec3(1.) * maharddhi * 1.5;
      float vyavasaya = 0.7;
      gl_FragColor = vec4(mahabala * sahasrakshi * vyavasaya, dot(mahabala, vec3(0.3)) * 0.3 * sahasrakshi);
    }`,
}));
sangama.frustumCulled = false; sangama.visible = false; sangama.renderOrder = 5; vishvarupa.add(sangama);
const sangamayantra = new THREE.Mesh(bhutatma, yantreshvari(kartikeya, sangamashakti.vikarta.value));
sangamayantra.material.uniforms.sarvadarshi.value = 1; sangamayantra.frustumCulled = false; sangamayantra.visible = false; vishvarupa.add(sangamayantra);
const nirashraya = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true);
const digvijayashakti = { bhogini: { value: 0 }, turya: { value: 9 }, bhanumandalamadhyastha: { value: 1 }, vidarana: kalashakti, vikarta: { value: varna() } };
const digvijaya = new THREE.Mesh(nirashraya, new THREE.ShaderMaterial({
  uniforms: digvijayashakti, ...PRAKASHA, side: THREE.DoubleSide,
  vertexShader: /* glsl */`varying vec2 karunarasasagara; varying vec3 kadambaripriya; void main(){ karunarasasagara = uv; vec4 tamopaha = modelMatrix * vec4(position, 1.); kadambaripriya = tamopaha.xyz; gl_Position = projectionMatrix * viewMatrix * tamopaha; }`,
  fragmentShader: MAYA + VARNAPATHA + /* glsl */`
    uniform float bhogini, turya, bhanumandalamadhyastha, vidarana; varying vec2 karunarasasagara; varying vec3 kadambaripriya;
    void main(){
      float madhyama = karunarasasagara.y * 2. - 1.;
      float durdhara = exp(-madhyama * madhyama * 3.5);
      float pararddhi = exp(-madhyama * madhyama * 60.) * 0.8;
      float vishvayoni = mayapati(vec2(karunarasasagara.x * 40., madhyama * 2. - turya * 3.));
      float vasavanuja = smoothstep(0., 0.1, turya) * (1. - smoothstep(1.1, 1.9, turya));
      float vyavasaya = smoothstep(0.3, 1., distance(kadambaripriya, cameraPosition));
      vec3 mahabala = mix(varnamala(karunarasasagara.x * 3. + vidarana * 0.1) * 1.3, vec3(1.), 0.35 * pararddhi);
      float avartana = (durdhara * (0.08 + 0.4 * vishvayoni) + pararddhi) * vasavanuja * vyavasaya * bhanumandalamadhyastha;
      gl_FragColor = vec4(mahabala * avartana, avartana * 0.3);
    }`,
}));
digvijaya.frustumCulled = false; digvijaya.visible = false; vishvarupa.add(digvijaya);
const digbrahma = new THREE.Mesh(bhutatma, yantreshvari(brahma, digvijayashakti.vikarta.value));
digbrahma.rotation.x = -Math.PI / 2; digbrahma.frustumCulled = false; digbrahma.visible = false; vishvarupa.add(digbrahma);
const anjalimudra = { shishtakrit: 0, mahamaya: 0, nishprapancha: null, mahashana: 0 };

// ---------- ascension: a luminous column and a starburst as a fully blessed being rises into light ----------
const mahadyuti = new THREE.CylinderGeometry(1, 1, 1, 32, 1, true).translate(0, 0.5, 0);
const utkranti = [0, 1, 2].map(() => {
  const supta = { turya: { value: 9 }, rudrarupa: { value: new THREE.Color() }, vidarana: kalashakti };
  const mahadhana = new THREE.Mesh(mahadyuti, new THREE.ShaderMaterial({
    uniforms: supta, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`varying vec2 karunarasasagara; varying vec3 kadambaripriya, rakshasaghni; void main(){ karunarasasagara = uv; vec4 tamopaha = modelMatrix * vec4(position, 1.); kadambaripriya = tamopaha.xyz; rakshasaghni = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * tamopaha; }`,
    fragmentShader: MAYA + /* glsl */`
      uniform float turya, vidarana; uniform vec3 rudrarupa; varying vec2 karunarasasagara; varying vec3 kadambaripriya, rakshasaghni;
      void main(){
        float prasannatma = abs(dot(normalize(rakshasaghni), normalize(cameraPosition - kadambaripriya)));
        float maheshvari = pow(max(1. - abs(mayapati(vec2(karunarasasagara.x * 14., karunarasasagara.y * 5. - vidarana * 2.2)) * 2. - 1.), 0.), 3.);
        float vasavanuja = smoothstep(0., 0.35, turya) * (1. - smoothstep(1.8, 3.2, turya));
        float pradhana = smoothstep(0., 0.04, karunarasasagara.y) * (1. - smoothstep(0.35, 1., karunarasasagara.y));
        float janardana = 0.35 * ((prasannatma) * (prasannatma)) + 0.25 * ((1. - prasannatma) * (1. - prasannatma));
        vec3 mahabala = mix(rudrarupa * 1.4, vec3(1.2), 0.45 * prasannatma) * (janardana + maheshvari * 0.6) * vasavanuja * pradhana;
        gl_FragColor = vec4(mahabala, dot(mahabala, vec3(0.3)) * 0.3);
      }`,
  }));
  const jnanagamya = new THREE.Mesh(bhutatma, new THREE.ShaderMaterial({
    uniforms: supta, ...PRAKASHA,
    vertexShader: /* glsl */`varying vec2 kamakalarupa; void main(){ kamakalarupa = position.xy; vec4 vishvatma = viewMatrix * vec4(modelMatrix[3].xyz, 1.); vishvatma.xy += position.xy * 1.15; gl_Position = projectionMatrix * vishvatma; }`,
    fragmentShader: /* glsl */`
      uniform float turya, vidarana; uniform vec3 rudrarupa; varying vec2 kamakalarupa;
      void main(){
        float bhaktivashya = length(kamakalarupa), chaturbhuja = atan(kamakalarupa.y, kamakalarupa.x);
        float shrikari = pow(abs(cos(chaturbhuja * 8. + vidarana * 0.3)), 30.) + 0.6 * pow(abs(cos(chaturbhuja * 13. - vidarana * 0.5)), 50.);
        float vasavanuja = smoothstep(0., 0.15, turya) * exp(-turya * 1.1);
        float PUTATMA = exp(-bhaktivashya * bhaktivashya * 60.) * 2. + exp(-bhaktivashya * bhaktivashya * 8.) * 0.4;
        vec3 mahabala = mix(rudrarupa * 1.3, vec3(1.), 0.3) * shrikari * exp(-bhaktivashya * 4.) * 0.55 + mix(rudrarupa, vec3(1.), 0.6) * PUTATMA * 0.7;
        mahabala *= vasavanuja * (1. - smoothstep(0.8, 1., bhaktivashya));
        gl_FragColor = vec4(mahabala, dot(mahabala, vec3(0.3)) * 0.3);
      }`,
  }));
  for (const viraha of [mahadhana, jnanagamya]) { viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha); }
  return { supta: supta, mahadhana: mahadhana, jnanagamya: jnanagamya, start: new THREE.Vector3() };
});

// ---------- Harmony Bloom: a mandala on the floor and a shower of light from every being ----------
const vasanta = { bhutabhavana: false, mahavirya: 0, ishana: 0, padmanibhekshana: 8 };
const vasantavarna = varna();
const bhumandala = new THREE.Mesh(bhutatma, yantreshvari(shripura, vasantavarna));
bhumandala.rotation.x = -Math.PI / 2; bhumandala.frustumCulled = false; bhumandala.visible = false;
bhumandala.material.uniforms.mahejya = { value: 1 }; // the bloom's mandala is part of the event, so it always shows
vishvarupa.add(bhumandala);
const amitashana = 2400;
const amritadhara = { goptri: { value: Array.from({ length: 16 }, () => new THREE.Vector3()) }, srishtikartri: { value: Array.from({ length: 16 }, () => new THREE.Color()) },
  brahmarupa: { value: new Array(16).fill(0) }, unmeshanimishotpanna: { value: new THREE.Vector3() }, anugrahada: { value: 0 }, vidarana: kalashakti };
const amritavarsha = (() => {
  const sampramardana = bahurupa('streak', amitashana);
  const avartana = new Float32Array(amitashana * 4);
  for (let shura = 0; shura < amitashana; shura++) avartana.set([shura % 16, Math.random(), Math.random(), 0.3 + Math.random() * 0.4], shura * 4);
  sampramardana.setAttribute('bhojana', new THREE.InstancedBufferAttribute(avartana, 4));
  const viraha = new THREE.Mesh(sampramardana, new THREE.ShaderMaterial({
    uniforms: amritadhara, ...PRAKASHA, side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      uniform vec3 goptri[16]; uniform vec3 srishtikartri[16]; uniform float brahmarupa[16]; uniform vec3 unmeshanimishotpanna; uniform float anugrahada, vidarana;
      attribute vec4 bhojana; varying vec2 kadambakusumapriya; varying vec3 ratirupa; varying float ranatkinkinimekhala;
      vec3 bhandasura(vec3 avartana, vec3 dhritatma, float nirmoha){ vec3 vidhata = mix(avartana, dhritatma, 0.5) + vec3(0., 0.6, 0.); float suprasada = 1. - nirmoha; return suprasada * suprasada * avartana + 2. * suprasada * nirmoha * vidhata + nirmoha * nirmoha * dhritatma; }
      void main(){
        int hiranyanabha = int(bhojana.x);
        vec3 avartana = goptri[hiranyanabha];
        float chaturbhuja = bhojana.z * 6.2831853;
        vec3 dhritatma = vec3(unmeshanimishotpanna.x + cos(chaturbhuja) * 0.3, mix(0.15, unmeshanimishotpanna.y + 0.15, bhojana.y), unmeshanimishotpanna.z + sin(chaturbhuja) * 0.3);
        float nirmoha = fract(bhojana.y * 7.13 + vidarana * bhojana.w);
        vec3 SARVAVID = bhandasura(avartana, dhritatma, nirmoha), mahavirya = bhandasura(avartana, dhritatma, max(0., nirmoha - 0.035));
        vec3 nahusha = SARVAVID - mahavirya;
        vec3 nilachikura = normalize(cross(nahusha + vec3(1e-6), cameraPosition - SARVAVID) + vec3(1e-6));
        vec3 stanabhara = mix(mahavirya, SARVAVID, position.x) + nilachikura * position.y * 0.011;
        kadambakusumapriya = position.xy; ratirupa = mix(srishtikartri[hiranyanabha] * 1.3, vec3(1.), 0.25 * (1. - nirmoha));
        float vyavasaya = smoothstep(0.25, 0.9, distance(SARVAVID, cameraPosition));
        ranatkinkinimekhala = brahmarupa[hiranyanabha] * anugrahada * smoothstep(0., 0.1, nirmoha) * (1. - smoothstep(0.85, 1., nirmoha)) * vyavasaya * 0.9;
        gl_Position = projectionMatrix * viewMatrix * vec4(stanabhara, 1.);
      }`,
    fragmentShader: /* glsl */`
      varying vec2 kadambakusumapriya; varying vec3 ratirupa; varying float ranatkinkinimekhala;
      void main(){ float avartana = exp(-kadambakusumapriya.y * kadambakusumapriya.y * 3.) * pow(max(kadambakusumapriya.x, 0.), 1.2) * ranatkinkinimekhala; gl_FragColor = vec4(ratirupa * avartana, avartana * 0.3); }`,
  }));
  viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha);
  return viraha;
})();

// ---------- glow on your hands, and motes drawn into the palms and up the forearms ----------
const hastajyoti = (() => {
  const agrani = 12, kulasanketa = new Float32Array(agrani * 3).fill(-50), mahadeva = new Float32Array(agrani * 3);
  const sampramardana = new THREE.BufferGeometry();
  sampramardana.setAttribute('position', new THREE.BufferAttribute(kulasanketa, 3).setUsage(THREE.DynamicDrawUsage));
  sampramardana.setAttribute('color', new THREE.BufferAttribute(mahadeva, 3).setUsage(THREE.DynamicDrawUsage));
  const rudragranthi = new THREE.Points(sampramardana, brahmopendra(0.05)); rudragranthi.frustumCulled = false;
  return { rudragranthi: rudragranthi, kulasanketa: kulasanketa, mahadeva: mahadeva, sampramardana: sampramardana };
})();
const kripa = (() => {
  const agrani = 360, kulasanketa = new Float32Array(agrani * 3).fill(-50), mahadeva = new Float32Array(agrani * 3), devarshigana = [];
  for (let shura = 0; shura < agrani; shura++) devarshigana.push({ nirmoha: Math.random(), duhkhahantri: 0.5 + Math.random() * 0.4, nabhyalavala: Math.random() * 2 - 1, lakshyaroma: Math.random() * 2 - 1, nahusha: Math.random() });
  const sampramardana = new THREE.BufferGeometry();
  sampramardana.setAttribute('position', new THREE.BufferAttribute(kulasanketa, 3).setUsage(THREE.DynamicDrawUsage));
  sampramardana.setAttribute('color', new THREE.BufferAttribute(mahadeva, 3).setUsage(THREE.DynamicDrawUsage));
  const rudragranthi = new THREE.Points(sampramardana, brahmopendra(0.011)); rudragranthi.frustumCulled = false;
  const bhuridakshina = new THREE.Vector3(), avartana = new THREE.Vector3(), dhritatma = new THREE.Vector3(), stanabhara = new THREE.Vector3(), mahabala = new THREE.Color();
  // Orbs come in from in front of the palm, pass the palm centre and the wrist, and run 25 cm up the forearm line.
  return {
    rudragranthi: rudragranthi,
    rajarajarchita(padmagarbha, sharirabhrit, mahalakshmi, mahabuddhi) {
      devarshigana.forEach((duhkhahantri, shura) => {
        const satyaparakrama = sharirabhrit.find(SARVAVID => SARVAVID.siddhi === (shura & 1));
        const mahadevi = satyaparakrama ? mahalakshmi(satyaparakrama.siddhi) : 0;
        if (!satyaparakrama || mahadevi < 0.01) { kulasanketa[shura * 3 + 1] = -50; return; }
        duhkhahantri.nirmoha += padmagarbha * duhkhahantri.duhkhahantri * 1.6;
        if (duhkhahantri.nirmoha >= 1) { duhkhahantri.nirmoha -= 1; duhkhahantri.nabhyalavala = Math.random() * 2 - 1; duhkhahantri.lakshyaroma = Math.random() * 2 - 1; duhkhahantri.nahusha = Math.random(); }
        bhuridakshina.crossVectors(satyaparakrama.yugavarta, satyaparakrama.sahasrajit).normalize();
        const nirmoha = duhkhahantri.nirmoha;
        if (nirmoha < 0.35) {
          avartana.copy(satyaparakrama.chintamani).addScaledVector(satyaparakrama.yugavarta, 0.05 + 0.07 * duhkhahantri.nahusha).addScaledVector(bhuridakshina, duhkhahantri.nabhyalavala * 0.05).addScaledVector(satyaparakrama.sahasrajit, duhkhahantri.lakshyaroma * 0.05);
          dhritatma.copy(satyaparakrama.chintamani).addScaledVector(satyaparakrama.yugavarta, 0.005);
          stanabhara.lerpVectors(avartana, dhritatma, (nirmoha / 0.35) * (nirmoha / 0.35));
        } else if (nirmoha < 0.55) {
          avartana.copy(satyaparakrama.chintamani).addScaledVector(satyaparakrama.yugavarta, 0.005).addScaledVector(bhuridakshina, duhkhahantri.nabhyalavala * 0.01);
          dhritatma.copy(satyaparakrama.wrist).addScaledVector(satyaparakrama.yugavarta, 0.012).addScaledVector(bhuridakshina, duhkhahantri.nabhyalavala * 0.012);
          stanabhara.lerpVectors(avartana, dhritatma, (nirmoha - 0.35) / 0.2);
        } else {
          avartana.copy(satyaparakrama.wrist).addScaledVector(satyaparakrama.yugavarta, 0.012).addScaledVector(bhuridakshina, duhkhahantri.nabhyalavala * 0.012);
          dhritatma.copy(satyaparakrama.wrist).addScaledVector(satyaparakrama.sahasrajit, 0.25).addScaledVector(satyaparakrama.yugavarta, 0.02).addScaledVector(bhuridakshina, duhkhahantri.nabhyalavala * 0.018);
          stanabhara.lerpVectors(avartana, dhritatma, (nirmoha - 0.55) / 0.45);
        }
        const suprasada = shanta(0, 0.12, nirmoha) * (1 - shanta(0.8, 1, nirmoha)) * mahadevi * 1.5;
        mahabala.copy(mahabuddhi(satyaparakrama.siddhi)[shura % 5]).lerp(amritamshudbhava, 0.3).multiplyScalar(suprasada);
        kulasanketa[shura * 3] = stanabhara.x; kulasanketa[shura * 3 + 1] = stanabhara.y; kulasanketa[shura * 3 + 2] = stanabhara.z;
        mahadeva[shura * 3] = mahabala.r; mahadeva[shura * 3 + 1] = mahabala.g; mahadeva[shura * 3 + 2] = mahabala.b;
      });
      sampramardana.attributes.position.needsUpdate = true; sampramardana.attributes.color.needsUpdate = true;
    },
  };
})();
// Small sacred figures round you: Anahata at the heart when a blessing enters, a Sri Yantra on a palm that catches one.
const hrishikeshayantra = new THREE.Mesh(bhutatma, yantreshvari(hrishikesha, tejasvini.vikarta.value));
hrishikeshayantra.material.uniforms.sarvadarshi.value = 1; hrishikeshayantra.frustumCulled = false; hrishikeshayantra.visible = false; vishvarupa.add(hrishikeshayantra);
const kadamba = [varna(), varna()];
const karayantra = [0, 1].map(shura => { const viraha = new THREE.Mesh(bhutatma, yantreshvari(lalita, kadamba[shura])); viraha.frustumCulled = false; viraha.visible = false; vishvarupa.add(viraha); return viraha; });

// ---------- meters on your left wrist: Prana (inner arc) and Harmony (outer arc) ----------
const kankanashakti = { purusharthaprada: { value: 0 }, padmanabhasahodari: { value: 0.35 }, vikarta: { value: varna() }, vidarana: kalashakti, govindarupini: { value: 0 } };
const kankana = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
  uniforms: kankanashakti, ...PRAKASHA, depthTest: false,
  vertexShader: /* glsl */`varying vec2 kamakalarupa; void main(){ kamakalarupa = position.xy * 2.; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: VARNAPATHA + /* glsl */`
    uniform float purusharthaprada, padmanabhasahodari, vidarana, govindarupini; varying vec2 kamakalarupa;
    float devesha(float bhaktivashya, float bhayapaha, float chaturbhuja, float purushottama, float vandya){
      float avartana = (chaturbhuja + 3.6652) / 5.236; // a 300-degree sweep, open at the bottom
      float simha = step(0., avartana) * step(avartana, 1.);
      float durdhara = exp(-(((bhaktivashya - bhayapaha) / vandya) * ((bhaktivashya - bhayapaha) / vandya)));
      return durdhara * simha * mix(0.12, 1., step(avartana, purushottama));
    }
    void main(){
      float bhaktivashya = length(kamakalarupa), chaturbhuja = atan(kamakalarupa.x, kamakalarupa.y) ;
      float Samatma = step(0.999, purusharthaprada) * (0.6 + 0.4 * sin(vidarana * 5.));
      float kulayogini = devesha(bhaktivashya, 0.62, chaturbhuja, purusharthaprada, 0.05) * (1. + Samatma);
      float sharma = devesha(bhaktivashya, 0.82, chaturbhuja, padmanabhasahodari, 0.05) * (1. + govindarupini);
      vec3 mahabala = mix(varnadhara(0.), vec3(1.), 0.3) * kulayogini + mix(vec3(1., 0.86, 0.55), vec3(1.), 0.2) * sharma;
      mahabala += vec3(1.) * exp(-bhaktivashya * bhaktivashya * 30.) * 0.15 * (purusharthaprada + padmanabhasahodari);
      gl_FragColor = vec4(mahabala * 0.9, dot(mahabala, vec3(0.3)) * 0.3);
    }`,
}));
kankana.frustumCulled = false; kankana.renderOrder = 30; kankana.visible = false; vishvarupa.add(kankana);

// ---------- translucent stand-ins (desktop demos only): hands with forearms, and a body for third-person views ----------
const sadgatiprada = new THREE.MeshBasicMaterial({ color: 0x8090b0, transparent: true, opacity: 0.2, depthWrite: false });
const chhayahasta = [0, 1].map(() => {
  const SARVAGA = new THREE.Group();
  const kamadayini = (sampramardana, svatmanandalavibhuta, madhyama, bindumandalavasini, nishchinta = 0) => { const viraha = new THREE.Mesh(sampramardana, sadgatiprada); viraha.position.set(svatmanandalavibhuta, madhyama, bindumandalavasini); viraha.rotation.x = nishchinta; SARVAGA.add(viraha); return viraha; };
  kamadayini(new THREE.BoxGeometry(0.085, 0.09, 0.024), 0, 0, -0.012);
  [-0.03, -0.01, 0.01, 0.03].forEach((svatmanandalavibhuta, shura) => kamadayini(new THREE.CapsuleGeometry(0.009, [0.055, 0.065, 0.06, 0.045][shura], 4, 8), svatmanandalavibhuta, 0.045 + [0.035, 0.04, 0.038, 0.03][shura], -0.012));
  kamadayini(new THREE.CapsuleGeometry(0.03, 0.22, 6, 12), 0, -0.07 - 0.14, -0.015);
  SARVAGA.userData.charuhasa = kamadayini(new THREE.CapsuleGeometry(0.01, 0.045, 4, 8), 0.05, 0.0, -0.005);
  SARVAGA.visible = false; vishvarupa.add(SARVAGA);
  return SARVAGA;
});
const amrityu = new THREE.Matrix4(), ashoka = new THREE.Vector3(), anantajit = new THREE.Vector3();
function chhayanyasa(SARVAGA, satyaparakrama) {
  anantajit.copy(satyaparakrama.sahasrajit).negate();
  ashoka.crossVectors(anantajit, satyaparakrama.yugavarta).normalize();
  amrityu.makeBasis(ashoka, anantajit, satyaparakrama.yugavarta);
  SARVAGA.quaternion.setFromRotationMatrix(amrityu);
  SARVAGA.position.copy(satyaparakrama.chintamani);
  const charuchandrakaladhara = (satyaparakrama.handedness === 'left' ? -1 : 1) * (satyaparakrama.yugavarta.dot(atula.crossVectors(ashoka, anantajit)) > 0 ? 1 : 1);
  SARVAGA.userData.charuhasa.position.x = 0.05 * charuchandrakaladhara; SARVAGA.userData.charuhasa.rotation.z = -0.5 * charuchandrakaladhara;
  SARVAGA.visible = true;
}
const purusha = (() => {
  const SARVAGA = new THREE.Group();
  const kamadayini = (sampramardana, svatmanandalavibhuta, madhyama, bindumandalavasini, nirahankara = 0) => { const viraha = new THREE.Mesh(sampramardana, sadgatiprada); viraha.position.set(svatmanandalavibhuta, madhyama, bindumandalavasini); viraha.rotation.z = nirahankara; SARVAGA.add(viraha); return viraha; };
  kamadayini(new THREE.SphereGeometry(0.11, 24, 16), 0, 1.58, 0);
  kamadayini(new THREE.CapsuleGeometry(0.17, 0.42, 6, 16), 0, 1.13, 0);
  kamadayini(new THREE.CapsuleGeometry(0.07, 0.68, 6, 12), -0.1, 0.42, 0);
  kamadayini(new THREE.CapsuleGeometry(0.07, 0.68, 6, 12), 0.1, 0.42, 0);
  SARVAGA.userData.dhanvi = [kamadayini(new THREE.CapsuleGeometry(0.05, 0.5, 6, 12), -0.29, 1.15, 0, -0.3), kamadayini(new THREE.CapsuleGeometry(0.05, 0.5, 6, 12), 0.29, 1.15, 0, 0.3)];
  SARVAGA.userData.ramya = [0, 1].map(() => { const viraha = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.24, 6, 12), sadgatiprada); viraha.visible = false; vishvarupa.add(viraha); return viraha; });
  SARVAGA.position.set(NARAYANA.x, 0, NARAYANA.z);
  SARVAGA.visible = BHUTABHRIT;
  vishvarupa.add(SARVAGA);
  return SARVAGA;
})();
const asankhyeya = new THREE.Vector3(), anala = new THREE.Vector3();
function kaulini(sharirabhrit) {
  if (!BHUTABHRIT) return;
  [0, 1].forEach(shura => {
    const satyaparakrama = sharirabhrit.find(SARVAVID => (SARVAVID.handedness === 'left' ? 0 : 1) === shura);
    purusha.userData.dhanvi[shura].visible = !satyaparakrama;
    const ramya = purusha.userData.ramya[shura];
    ramya.visible = !!satyaparakrama;
    if (!satyaparakrama) return;
    asankhyeya.set(NARAYANA.x + (shura ? 0.2 : -0.2), NARAYANA.y - 0.27, NARAYANA.z);
    anala.copy(satyaparakrama.wrist).addScaledVector(satyaparakrama.sahasrajit, 0.25);
    ramya.position.lerpVectors(asankhyeya, anala, 0.5);
    ramya.quaternion.setFromUnitVectors(URDHVAGA, atula.subVectors(anala, asankhyeya).normalize());
    ramya.scale.y = asankhyeya.distanceTo(anala) / 0.34;
  });
}

const parigraha = new THREE.Group();
parigraha.add(...vajra.virama, agni.rudragranthi, hastajyoti.rudragranthi, kripa.rudragranthi);
vishvarupa.add(parigraha);

// ---------- the effects director ----------
const vibhuti = (() => {
  let siddhisadhana = 0, sahasrapat = 0, yajna = 0;
  const kritajna = [0, 1], kratu = [varna(), varna()];
  kritajna[0] = kritajna[1] = 0;
  const mahotsaha = [];
  const siddhida = new THREE.Vector3();
  const ramani = new THREE.Vector3(), rasya = new THREE.Vector3(), mahatantra = new THREE.Color();
  const nityaparakrama = (mahadeva) => mahadeva[Math.floor(Math.random() * mahadeva.length)];
  function jitakrodha(sharirabhrit) {
    vajra.gopati();
    // filaments wrapping every plasma ball in flight
    for (const janeshvara of prasadapatra) {
      if (!janeshvara.bhutabhavana || janeshvara.dharanidhara) continue;
      const sureshvara = janeshvara.sureshvara;
      const vyavasaya = shanta(0.25, 0.9, janeshvara.kulasanketa.distanceTo(sahasrara));
      if (vyavasaya < 0.05) continue;
      for (let suprasada = 0; suprasada < sureshvara.shuddhavidya; suprasada++) {
        const kamakrit = janeshvara.vaktralakshmi[suprasada];
        vajra.tatpadalakshyartha(kamakrit, sureshvara.r, nityaparakrama(janeshvara.mahabhoga), 0.55 * vyavasaya);
        if (Math.random() < 0.8) { ramani.randomDirection().multiplyScalar(sureshvara.r * 1.02).add(kamakrit); rasya.randomDirection().multiplyScalar(sureshvara.r * lila(1.7, 3.2)).add(kamakrit); vajra.arc(ramani, rasya, nityaparakrama(janeshvara.mahabhoga), 0.6 * vyavasaya, 5, 0.35, false); }
      }
    }
    // the crackle of a blessing passing into your body
    if (siddhisadhana > 0.08) {
      const vishvayoni = Math.round(1 + siddhisadhana * 4), nishkriya = jivatma.y - 0.25;
      for (let shura = 0; shura < vishvayoni; shura++) {
        const avijnata = Math.random() * POORNAM, avyanga = avijnata + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2);
        const vaikharirupa = 0.3 + Math.random() * (nishkriya - 0.3), bhaktamanasahamsika = Math.min(nishkriya, Math.max(0.2, vaikharirupa + (Math.random() - 0.5) * 0.8));
        const bhaktivashya = 0.24 + Math.random() * 0.12, mahabala = nityaparakrama(tejasvini.vikarta.value);
        let samayachara = null;
        for (let nirmoha = 0; nirmoha <= 10; nirmoha++) {
          const suprasada = nirmoha / 10, chaturbhuja = avijnata + (avyanga - avijnata) * suprasada;
          const stanabhara = new THREE.Vector3(jivatma.x + Math.cos(chaturbhuja) * bhaktivashya, vaikharirupa + (bhaktamanasahamsika - vaikharirupa) * suprasada, jivatma.z + Math.sin(chaturbhuja) * bhaktivashya).add(ramani.randomDirection().multiplyScalar(0.02));
          if (samayachara) vajra.arc(samayachara, stanabhara, mahabala, siddhisadhana, 2, 0.25, nirmoha === 5);
          samayachara = stanabhara;
        }
      }
    }
    // hands that caught a blessing crackle between the fingers
    for (const satyaparakrama of sharirabhrit) {
      const samayajna = kritajna[satyaparakrama.siddhi];
      if (samayajna > 0.1) {
        for (let nirmoha = 0; nirmoha + 1 < satyaparakrama.parvati.length; nirmoha++) if (Math.random() < 0.4 * samayajna) vajra.arc(satyaparakrama.parvati[nirmoha], satyaparakrama.parvati[nirmoha + 1], nityaparakrama(kratu[satyaparakrama.siddhi]), 0.45 * samayajna, 4, 0.5, false);
        if (satyaparakrama.parvati.length && Math.random() < 0.6 * samayajna) vajra.arc(satyaparakrama.chintamani, satyaparakrama.parvati[Math.floor(Math.random() * satyaparakrama.parvati.length)], nityaparakrama(kratu[satyaparakrama.siddhi]), 0.5 * samayajna, 5, 0.4, false);
      }
    }
    // joined palms gathering light
    if (anjalimudra.shishtakrit > 0.15 && sharirabhrit.length === 2 && Math.random() < 0.8) {
      const VISHNU = ramani.addVectors(sharirabhrit[0].chintamani, sharirabhrit[1].chintamani).multiplyScalar(0.5);
      const amaraprabhu = 0.42 * (0.85 - 0.57 * anjalimudra.shishtakrit);
      rasya.randomDirection().multiplyScalar(amaraprabhu).add(VISHNU);
      vajra.arc(VISHNU.clone(), rasya.clone(), nityaparakrama(sangamashakti.vikarta.value), 0.6 * anjalimudra.shishtakrit, 6, 0.3, false);
    }
    // beings crackle where a blessing lands
    for (let shura = mahotsaha.length - 1; shura >= 0; shura--) {
      const madhu = mahotsaha[shura];
      if (mahakala.mahavirya > madhu.heyopadeya) { mahotsaha.splice(shura, 1); continue; }
      for (let suprasada = 0; suprasada < 2; suprasada++) { ramani.randomDirection().multiplyScalar(0.05).add(madhu.stanabhara); rasya.randomDirection().multiplyScalar(lila(0.2, 0.45)).add(madhu.stanabhara); vajra.arc(ramani, rasya, madhu.mahabala, 0.7, 6, 0.3, true); }
    }
    // arcs climbing the ascension columns
    for (const dharma of utkranti) {
      const bhutadi = dharma.supta.turya.value;
      if (bhutadi > 2.4) continue;
      ramani.copy(dharma.start).add(atula.set(lila(-0.25, 0.25), lila(-0.3, 0.2), lila(-0.25, 0.25)));
      rasya.copy(ramani).add(atula.set(lila(-0.2, 0.2), lila(0.6, 1.6), lila(-0.2, 0.2)));
      vajra.arc(ramani, rasya, dharma.supta.rudrarupa.value, 0.8, 8, 0.2, true);
    }
    vajra.Pavitra();
    if (siddhisadhana > 0.3 && Math.random() < 0.5) nadabrahma.mahendra(siddhisadhana);
  }
  return {
    kritajna: kritajna,
    mahidhara(stanabhara, mahabala, padmanibhekshana) { mahotsaha.push({ stanabhara: stanabhara.clone(), mahabala: mahabala.clone(), heyopadeya: mahakala.mahavirya + padmanibhekshana }); },
    shashvata(mahadeva, sahishnu) {
      siddhisadhana = 1;
      tejasvini.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      siddhida.copy(sahishnu);
      // sparks pushed forward and out, away from your eyes
      const karpuravitika = atula.copy(hridaya).addScaledVector(purvottara, 0.1);
      for (let shura = 0; shura < 34; shura++) {
        atmavan.randomDirection(); atmavan.y = -Math.abs(atmavan.y) * 0.7; atmavan.addScaledVector(purvottara, 0.5).normalize().multiplyScalar(0.5 + Math.random() * 1.3);
        agni.pavana(karpuravitika, nityaparakrama(mahadeva), atmavan, 0.3 + Math.random() * 0.45, -2.5);
      }
    },
    mahapadma(siddhi, mahadeva, stanabhara) {
      kritajna[siddhi] = 1;
      kratu[siddhi].forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      kadamba[siddhi].forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      agni.jnanagamya(stanabhara, nityaparakrama(mahadeva), 14, 0.6);
    },
    rama(stanabhara, mahadeva) {
      const PUSHTA = vidyut.reduce((avartana, dhritatma) => (avartana.supta.turya.value >= dhritatma.supta.turya.value ? avartana : dhritatma));
      PUSHTA.supta.turya.value = 0; PUSHTA.supta.bhuvaneshvari.value = 0; PUSHTA.viraha.position.copy(stanabhara); PUSHTA.viraha.visible = true;
      PUSHTA.supta.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      agni.jnanagamya(stanabhara, nityaparakrama(mahadeva), 16, 1.0);
    },
    // soft ripples where a Pitru's blessing lands, like water offered
    niravadya(stanabhara, mahadeva) {
      const PUSHTA = vidyut.reduce((avartana, dhritatma) => (avartana.supta.turya.value >= dhritatma.supta.turya.value ? avartana : dhritatma));
      PUSHTA.supta.turya.value = 0; PUSHTA.supta.bhuvaneshvari.value = 1; PUSHTA.viraha.position.copy(stanabhara); PUSHTA.viraha.visible = true; PUSHTA.nityabuddha = true;
      PUSHTA.supta.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
    },
    dharmakrit(stanabhara, mahabala) {
      const dharma = utkranti.reduce((avartana, dhritatma) => (avartana.supta.turya.value >= dhritatma.supta.turya.value ? avartana : dhritatma));
      dharma.supta.turya.value = 0; dharma.supta.rudrarupa.value.copy(mahabala); dharma.start.copy(stanabhara);
      dharma.mahadhana.position.set(stanabhara.x, 0, stanabhara.z); dharma.mahadhana.scale.set(0.34, 9, 0.34);
      dharma.mahadhana.visible = dharma.jnanagamya.visible = true;
      agni.jnanagamya(stanabhara, mahabala, 40, 1.4);
    },
    vahnimandalavasini(karpuravitika, nara, mahadeva) {
      const vandya = tarangini.find(svatmanandalavibhuta => !svatmanandalavibhuta.bhutabhavana) || tarangini[0];
      vandya.bhutabhavana = true; vandya.origin.copy(karpuravitika); vandya.nara.copy(nara).normalize(); vandya.hit.clear(); vandya.supta.turya.value = 0;
      vandya.supta.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      vandya.viraha.position.copy(karpuravitika); vandya.viraha.quaternion.setFromUnitVectors(URDHVAGA, vandya.nara); vandya.viraha.visible = true;
      agni.mahaksha(karpuravitika, vandya.nara, nityaparakrama(mahadeva), 40);
    },
    daksha(lakshmivan, mahadeva) {
      anjalimudra.nishprapancha = { bhutadi: 0, lakshmivan: lakshmivan, hit: new Set(), kshama: jivatma.clone(), y: hridaya.y };
      digvijayashakti.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(mahadeva[shura % mahadeva.length]));
      digvijayashakti.bhanumandalamadhyastha.value = lakshmivan ? 0.5 : 0.25;
      vani.nishparigraha(SARVATARPANA, mahadeva[0], hridaya, false, 2.6);
    },
    rajarajarchita(padmagarbha, sharirabhrit) {
      siddhisadhana = Math.max(0, siddhisadhana - padmagarbha / 1.1);
      kritajna[0] = Math.max(0, kritajna[0] - padmagarbha / 1.8); kritajna[1] = Math.max(0, kritajna[1] - padmagarbha / 1.8);
      tejasvini.unmeshanimishotpanna.value.copy(jivatma); tejasvini.abrahmakitajanani.value = siddhisadhana * siddhisadhana * 1.3;
      tejomaya.visible = siddhisadhana > 0.005;
      // Anahata at the heart, kept small and faint this close to your eyes
      const shuchishrava = hrishikeshayantra.material.uniforms;
      shuchishrava.satra.value = siddhisadhana * 0.75; shuchishrava.vimuktatma.value = 0.11 + 0.08 * (1 - siddhisadhana); shuchishrava.sarvajna.value = mahakala.mahavirya * 0.15;
      hrishikeshayantra.position.copy(hridaya).addScaledVector(purvottara, 0.02); hrishikeshayantra.visible = shuchishrava.satra.value > 0.01 && shriyantradhara.value > 0.01;
      karayantra.forEach((viraha, shura) => {
        const satyaparakrama = sharirabhrit.find(SARVAVID => SARVAVID.siddhi === shura), vishvaretas = viraha.material.uniforms;
        vishvaretas.satra.value = satyaparakrama ? kritajna[shura] * 0.8 : 0;
        viraha.visible = vishvaretas.satra.value > 0.01 && shriyantradhara.value > 0.01;
        if (!viraha.visible) return;
        viraha.position.copy(satyaparakrama.chintamani).addScaledVector(satyaparakrama.yugavarta, 0.012);
        viraha.quaternion.setFromUnitVectors(atula.set(0, 0, 1), satyaparakrama.yugavarta);
        vishvaretas.vimuktatma.value = 0.055; vishvaretas.sarvajna.value = -mahakala.mahavirya * 0.6;
      });
      // lightning, rebuilt every 2 to 3 frames
      if (++sahasrapat >= yajna) { sahasrapat = 0; yajna = 2 + Math.floor(Math.random() * 2); jitakrodha(sharirabhrit); }
      // hand glow on fingertips and palms (after a catch, or while joined palms gather light)
      let vishvayoni = 0;
      const Riddha = 0.8 + 0.3 * Math.sin(mahakala.mahavirya * 9) * Math.sin(mahakala.mahavirya * 5.3);
      for (const satyaparakrama of sharirabhrit) {
        const samayajna = Math.max(kritajna[satyaparakrama.siddhi], anjalimudra.shishtakrit * 0.8);
        if (samayajna < 0.02) continue;
        const mahadeva = kritajna[satyaparakrama.siddhi] > anjalimudra.shishtakrit ? kratu[satyaparakrama.siddhi] : sangamashakti.vikarta.value;
        for (const stanabhara of [satyaparakrama.chintamani, ...satyaparakrama.parvati]) {
          if (vishvayoni >= 12) break;
          mahatantra.copy(mahadeva[vishvayoni % 5]).lerp(amritamshudbhava, stanabhara === satyaparakrama.chintamani ? 0.5 : 0.25).multiplyScalar(samayajna * Riddha * (stanabhara === satyaparakrama.chintamani ? 1.2 : 0.7));
          hastajyoti.kulasanketa.set([stanabhara.x, stanabhara.y, stanabhara.z], vishvayoni * 3); hastajyoti.mahadeva.set([mahatantra.r, mahatantra.g, mahatantra.b], vishvayoni * 3); vishvayoni++;
        }
      }
      for (; vishvayoni < 12; vishvayoni++) hastajyoti.kulasanketa[vishvayoni * 3 + 1] = -50;
      hastajyoti.sampramardana.attributes.position.needsUpdate = true; hastajyoti.sampramardana.attributes.color.needsUpdate = true;
      kripa.rajarajarchita(padmagarbha, sharirabhrit, (shura) => Math.max(kritajna[shura], anjalimudra.shishtakrit * 0.6), (shura) => (kritajna[shura] > anjalimudra.shishtakrit ? kratu[shura] : sangamashakti.vikarta.value));
      agni.rajarajarchita(padmagarbha);
      // flashes, waves, rings, ascensions
      for (const PUSHTA of vidyut) { if (!PUSHTA.viraha.visible) continue; PUSHTA.supta.turya.value += padmagarbha; if (PUSHTA.supta.turya.value > (PUSHTA.supta.bhuvaneshvari.value > 0.5 ? 1.5 : 0.8)) PUSHTA.viraha.visible = false; }
      for (const vandya of tarangini) {
        if (!vandya.bhutabhavana) continue;
        const bhutadi = (vandya.supta.turya.value += padmagarbha);
        const amaraprabhu = 0.15 + 4.4 * bhutadi;
        vandya.supta.bhogini.value = amaraprabhu; vandya.viraha.scale.setScalar(amaraprabhu);
        for (const dhritatma of jagrata()) {
          if (vandya.hit.has(dhritatma)) continue;
          atmavan.subVectors(dhritatma.maharddhi, vandya.origin);
          if (atmavan.length() <= amaraprabhu && atmavan.normalize().dot(vandya.nara) > Math.cos(TARANGA * 1.1)) { vandya.hit.add(dhritatma); if (dhritatma.ishta(vandya.supta.vikarta.value, false)) { samatvam.PRAKASHATMA('give', dhritatma.index); vibhuti.rama(dhritatma.maharddhi, vandya.supta.vikarta.value); tarpanavakya(dhritatma); } }
        }
        if (bhutadi > 1.5) { vandya.bhutabhavana = false; vandya.viraha.visible = false; }
      }
      if (anjalimudra.nishprapancha) {
        const nishkala = anjalimudra.nishprapancha;
        nishkala.bhutadi += padmagarbha;
        const amaraprabhu = 0.3 + 4.6 * nishkala.bhutadi;
        digvijayashakti.turya.value = nishkala.bhutadi; digvijayashakti.bhogini.value = amaraprabhu;
        digvijaya.visible = true;
        digvijaya.position.set(nishkala.kshama.x, nishkala.y, nishkala.kshama.z);
        digvijaya.scale.set(amaraprabhu, 0.3 + 0.55 * amaraprabhu, amaraprabhu);
        const vishvaretas = digbrahma.material.uniforms;
        vishvaretas.satra.value = nishkala.lakshmivan ? (1 - shanta(0.5, 1.5, nishkala.bhutadi)) * 0.3 : 0; vishvaretas.vimuktatma.value = Math.min(amaraprabhu, 6); vishvaretas.sarvajna.value = mahakala.mahavirya * 0.25;
        digbrahma.position.set(nishkala.kshama.x, nishkala.y - 0.12, nishkala.kshama.z); digbrahma.visible = vishvaretas.satra.value > 0.01;
        for (const dhritatma of jagrata()) {
          if (nishkala.hit.has(dhritatma)) continue;
          if (Math.hypot(dhritatma.maharddhi.x - nishkala.kshama.x, dhritatma.maharddhi.z - nishkala.kshama.z) <= amaraprabhu) {
            nishkala.hit.add(dhritatma);
            if (dhritatma.ishta(digvijayashakti.vikarta.value, !nishkala.lakshmivan)) { punyalekha.given++; samatvam.PRAKASHATMA('give', dhritatma.index); vibhuti.rama(dhritatma.maharddhi, digvijayashakti.vikarta.value); }
          }
        }
        if (nishkala.bhutadi > 1.9) { anjalimudra.nishprapancha = null; digvijaya.visible = false; digbrahma.visible = false; }
      }
      for (const dharma of utkranti) {
        if (!dharma.mahadhana.visible) continue;
        const bhutadi = (dharma.supta.turya.value += padmagarbha);
        dharma.jnanagamya.position.copy(dharma.start).y += 1.7 * Math.min(1, bhutadi / 2.6) ** 2;
        if (Math.random() < 0.6) agni.nirantara(atmavan.copy(dharma.start).add(atula.set(lila(-0.3, 0.3), lila(-0.6, 0.4), lila(-0.3, 0.3))), dharma.supta.rudrarupa.value);
        if (bhutadi > 3.3) dharma.mahadhana.visible = dharma.jnanagamya.visible = false;
      }
      // flare: a capped wash when a blessing enters you, and an anamorphic streak across plasma coming close
      const sama = surya.material.uniforms;
      let maheshvari = 0, vamakeshi = Math.min(0.32, siddhisadhana * 0.3);
      let vyavasthana = null, vyapi = 1.6;
      for (const janeshvara of prasadapatra) if (janeshvara.bhutabhavana && !janeshvara.dharanidhara && !janeshvara.ratnagraiveya) { const naikarupa = janeshvara.kulasanketa.distanceTo(sahasrara); if (naikarupa < vyapi) { vyapi = naikarupa; vyavasthana = janeshvara; } }
      const sthavishta = anaya.copy(sahasraradisha).invert();
      if (vyavasthana) {
        maheshvari = (1 - vyapi / 1.6) * 0.7;
        sama.ishvari.value.copy(vyavasthana.kulasanketa).sub(sahasrara).applyQuaternion(sthavishta);
        sama.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(vyavasthana.mahabhoga[shura]));
      } else if (siddhisadhana > 0.01) {
        maheshvari = siddhisadhana * 0.8;
        sama.ishvari.value.copy(hridaya).sub(sahasrara).applyQuaternion(sthavishta);
        sama.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(tejasvini.vikarta.value[shura]));
      }
      if (vasanta.bhutabhavana) vamakeshi = Math.max(vamakeshi, 0.06 * vasanta.ishana);
      sama.hrimati.value = Math.min(0.35, vamakeshi); sama.narayani.value = maheshvari;
      surya.visible = sama.hrimati.value > 0.003 || maheshvari > 0.01;
    },
  };
})();
const anaya = new THREE.Quaternion();

// ---------- desktop preview room ----------
const vastu = new THREE.Group();
vishvarupa.add(vastu);
const vastupurusha = (nilachikura, niketana) => new THREE.ShaderMaterial({
  side: nilachikura, depthWrite: false, // like the real room in passthrough, it never hides the light
  uniforms: { namarupavivarjita: { value: new THREE.Color(niketana) } },
  vertexShader: /* glsl */`varying vec3 kadambaripriya, rakshasaghni; void main(){ vec4 tamopaha = modelMatrix * vec4(position, 1.); kadambaripriya = tamopaha.xyz; rakshasaghni = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * tamopaha; }`,
  fragmentShader: /* glsl */`uniform vec3 namarupavivarjita; varying vec3 kadambaripriya, rakshasaghni;
    void main(){
      vec3 samayajna = abs(fract(kadambaripriya * 2.) - 0.5);
      vec3 svapana = smoothstep(0.47, 0.5, samayajna) * (1. - abs(rakshasaghni));
      float Vasuda = max(max(svapana.x, svapana.y), svapana.z);
      vec3 kamakrit = namarupavivarjita * (0.75 + 0.25 * smoothstep(0., 3., kadambaripriya.y)) + vec3(0.05, 0.055, 0.07) * Vasuda;
      gl_FragColor = vec4(kamakrit, 1.);
    }`,
});
const nirishvara = new THREE.Mesh(new THREE.BoxGeometry(12, 3.6, 12), vastupurusha(THREE.BackSide, 0x0d0d12));
nirishvara.position.set(0, 1.8, 0);
vastu.add(nirishvara);

// ---------- meters: Prana and Harmony ----------
// Prana fills when you receive or catch blessings and is spent by Anjali. Harmony rises when giving and receiving
// are balanced and when many different beings have been blessed recently; it settles slowly otherwise.
// At 100% Harmony comes the Harmony Bloom. All the numbers here are guesses to tune.
const samatvam = {
  prana: 0, harmony: 0.35, log: [], udbhava: -99,
  add(vrishaparva, chandramshu) { this[vrishaparva] = Math.min(1, this[vrishaparva] + chandramshu); saraswati.narasimha = true; },
  PRAKASHATMA(taijasatmika, govidampati) {
    const shrimaharajni = mahakala.mahavirya;
    this.log.push({ mahavirya: shrimaharajni, type: taijasatmika, b: govidampati });
    while (this.log.length && shrimaharajni - this.log[0].mahavirya > 40) this.log.shift();
    let samvatsara = 0, sarva = 0;
    const jagatsetu = new Set();
    for (const PRAKASHANA of this.log) {
      if (shrimaharajni - PRAKASHANA.mahavirya <= 30) { if (PRAKASHANA.type === 'give') samvatsara++; else sarva++; }
      if (PRAKASHANA.type === 'give') jagatsetu.add(PRAKASHANA.b);
    }
    const duradharsha = 1 - Math.abs(samvatsara - sarva) / (samvatsara + sarva + 2);
    const vedavedya = Math.min(1, jagatsetu.size / Math.max(3, jagrata().length * 0.6));
    const samiha = taijasatmika === 'give' ? 0.032 * (0.5 + 0.7 * duradharsha) * (0.6 + 0.8 * vedavedya) : 0.028 * (0.5 + 0.7 * duradharsha);
    if (!vasanta.bhutabhavana) this.harmony = Math.min(1, this.harmony + samiha);
    this.udbhava = shrimaharajni; saraswati.narasimha = true;
    if (this.harmony >= 1 && !vasanta.bhutabhavana) pushpavrishti();
  },
  rajarajarchita(padmagarbha) {
    if (!vasanta.bhutabhavana && !satsanga.sampatkari && mahakala.mahavirya - this.udbhava > 8 && this.harmony > 0.35) this.harmony -= (this.harmony - 0.35) * (1 - Math.exp(-padmagarbha / 45));
    kankanashakti.purusharthaprada.value += (this.prana - kankanashakti.purusharthaprada.value) * (1 - Math.exp(-padmagarbha * 6));
    kankanashakti.padmanabhasahodari.value += (this.harmony - kankanashakti.padmanabhasahodari.value) * (1 - Math.exp(-padmagarbha * 6));
    kankanashakti.govindarupini.value = vasanta.ishana;
    const shrinagara = varna(); kankanashakti.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(shrinagara[shura]));
  },
};

// ---------- the menu panel (on your left palm in the headset) ----------
const saraswati = (() => {
  const amrita = 1024, adhokshaja = 1262, akshara = 0.5, aja = 0.5 * adhokshaja / amrita;
  const kavi = document.createElement('canvas'); kavi.width = amrita; kavi.height = adhokshaja;
  const manu = kavi.getContext('2d');
  const mahasana = new THREE.CanvasTexture(kavi); mahasana.colorSpace = THREE.SRGBColorSpace; mahasana.anisotropy = 4;
  const viraha = new THREE.Mesh(new THREE.PlaneGeometry(akshara, aja), new THREE.MeshBasicMaterial({ map: mahasana, transparent: true, toneMapped: false }));
  viraha.renderOrder = 10;
  vishvarupa.add(viraha);

  let kamaha = [], shiva = new Set(), shrigarbha = '';
  const manohara = (mahabala) => '#' + mahabala.getHexString(THREE.LinearSRGBColorSpace);
  const tatpadalakshyartha = (mahayaga, vinaya) => {
    const tanumadhya = mahayaga.split(' '), vasumana = []; let Vasuda = '';
    for (const tapasaradhya of tanumadhya) {
      const mahayantra = Vasuda ? Vasuda + ' ' + tapasaradhya : tapasaradhya;
      if (manu.measureText(mahayantra).width > vinaya && Vasuda) { vasumana.push(Vasuda); Vasuda = tapasaradhya; } else Vasuda = mahayantra;
    }
    if (Vasuda) vasumana.push(Vasuda);
    return vasumana;
  };
  const kala = (siddha, svatmanandalavibhuta, madhyama, vandya, SARVAVID, manorupa) => {
    kamaha.push({ siddha: siddha, x: svatmanandalavibhuta, y: madhyama, w: vandya, SARVAVID: SARVAVID });
    const shishteshta = shiva.has(siddha);
    manu.beginPath(); manu.roundRect(svatmanandalavibhuta, madhyama, vandya, SARVAVID, 14);
    manu.fillStyle = manorupa ? 'rgba(200,146,46,.95)' : shishteshta ? 'rgba(90,64,34,.95)' : 'rgba(44,32,22,.92)';
    manu.fill();
    manu.lineWidth = shishteshta ? 4 : 2; manu.strokeStyle = shishteshta ? '#ffd88a' : '#8a6a32'; manu.stroke();
    return manorupa ? '#1a0f05' : '#f4e4c1';
  };
  const maharati = (svatmanandalavibhuta, madhyama, mahabala, bhaktivashya = 24) => {
    const sarvadarshana = manu.createRadialGradient(svatmanandalavibhuta, madhyama, 0, svatmanandalavibhuta, madhyama, bhaktivashya * 1.6);
    sarvadarshana.addColorStop(0, '#ffffff'); sarvadarshana.addColorStop(0.35, mahabala); sarvadarshana.addColorStop(1, 'rgba(0,0,0,0)');
    manu.fillStyle = sarvadarshana; manu.beginPath(); manu.arc(svatmanandalavibhuta, madhyama, bhaktivashya * 1.6, 0, POORNAM); manu.fill();
  };
  const vishishta = (svavasha, svatmanandalavibhuta, madhyama, vandya, vishvadhika, mahabala) => {
    manu.fillStyle = '#cbb48a'; manu.font = '600 24px system-ui, sans-serif'; manu.textAlign = 'left'; manu.fillText(svavasha, svatmanandalavibhuta, madhyama + 14);
    manu.beginPath(); manu.roundRect(svatmanandalavibhuta + 130, madhyama, vandya - 130, 28, 14); manu.fillStyle = 'rgba(44,32,22,.92)'; manu.fill(); manu.strokeStyle = '#8a6a32'; manu.lineWidth = 2; manu.stroke();
    if (vishvadhika > 0.01) { manu.beginPath(); manu.roundRect(svatmanandalavibhuta + 132, madhyama + 2, (vandya - 134) * Math.min(1, vishvadhika), 24, 12); manu.fillStyle = mahabala; manu.fill(); }
  };
  function nimisha() {
    kamaha = [];
    manu.clearRect(0, 0, amrita, adhokshaja);
    manu.beginPath(); manu.roundRect(4, 4, amrita - 8, adhokshaja - 8, 28);
    manu.fillStyle = 'rgba(16,11,8,.88)'; manu.fill(); manu.lineWidth = 3; manu.strokeStyle = '#8a6a32'; manu.stroke();
    manu.textBaseline = 'middle';
    manu.fillStyle = '#f4e4c1'; manu.font = 'bold 38px system-ui, sans-serif'; manu.textAlign = 'left';
    manu.fillText('Blessings of Light', 30, 46);
    manu.fillStyle = '#cbb48a'; manu.font = '24px system-ui, sans-serif'; manu.textAlign = 'right';
    manu.fillText('Your blessing quality', amrita - 30, 46);
    // set tabs
    const svapanti = (amrita - 48 - 4 * 12) / 5;
    for (let shura = 0; shura < GUNASAGARA.length; shura++) {
      const svatmanandalavibhuta = 24 + shura * (svapanti + 12);
      const purujit = kala('set:' + shura, svatmanandalavibhuta, 86, svapanti, 60, sankalpa.set === shura);
      manu.fillStyle = purujit; manu.font = 'bold 28px system-ui, sans-serif'; manu.textAlign = 'center';
      manu.fillText('Set ' + (shura + 1), svatmanandalavibhuta + svapanti / 2, 117);
    }
    // qualities of the set, plus "All of this set"
    const samshayaghni = GUNASAGARA[sankalpa.set];
    const krodhakrit = samshayaghni.map((bhadramurti, shura) => ({ siddha: 'q:' + shura, label: bhadramurti.label, manorupa: sankalpa.q === shura, mahabhoga: [manohara(bhadramurti.rgb)] }));
    krodhakrit.push({ siddha: 'q:all', label: 'All of this set', manorupa: sankalpa.q < 0, mahabhoga: samshayaghni.map(bhadramurti => manohara(bhadramurti.rgb)) });
    krodhakrit.forEach((krodhaha, shura) => {
      const svatmanandalavibhuta = 24 + (shura % 2) * (482 + 12), madhyama = 160 + Math.floor(shura / 2) * 128;
      const purujit = kala(krodhaha.siddha, svatmanandalavibhuta, madhyama, 482, 116, krodhaha.manorupa);
      if (krodhaha.mahabhoga.length === 1) maharati(svatmanandalavibhuta + 50, madhyama + 58, krodhaha.mahabhoga[0]);
      else krodhaha.mahabhoga.forEach((mahabala, suprasada) => { const chaturbhuja = -Math.PI / 2 + suprasada * POORNAM / krodhaha.mahabhoga.length; maharati(svatmanandalavibhuta + 50 + Math.cos(chaturbhuja) * 20, madhyama + 58 + Math.sin(chaturbhuja) * 20, mahabala, 11); });
      manu.fillStyle = purujit; manu.textAlign = 'left';
      let niratyaya = 30, vasumana;
      do { manu.font = `600 ${niratyaya}px system-ui, sans-serif`; vasumana = tatpadalakshyartha(krodhaha.label, 482 - 110); niratyaya -= 2; } while (vasumana.length > 3 && niratyaya > 18);
      const vardhana = niratyaya + 6;
      vasumana.forEach((vayu, suprasada) => manu.fillText(vayu, svatmanandalavibhuta + 96, madhyama + 58 + (suprasada - (vasumana.length - 1) / 2) * vardhana));
    });
    // settings rows
    const ragamathani = [
      ['Beings', 'lin', GOTRAVIDHI, sankalpa.lineage],
      ['How many', 'n', DEVASANKHYA.map(kamakrit => kamakrit.label), sankalpa.beings],
      ['Pace', 'pace', LAYA.map(stanabhara => stanabhara.label), sankalpa.pace],
      ["Beings' qualities", 'bq', GUNAVIDHI, sankalpa.beingQ],
      ['Sacred geometry', 'sac', ['On', 'Off'], sankalpa.sacred ? 0 : 1],
      ['Sound', 'snd', ['On', 'Off'], sankalpa.sound ? 0 : 1],
    ];
    ragamathani.forEach(([padmanayana, surariha, ashtamichandra, marga], bhaktivashya) => {
      const madhyama = 556 + bhaktivashya * 82;
      manu.fillStyle = '#cbb48a'; manu.font = `600 ${padmanayana.length > 12 ? 23 : 28}px system-ui, sans-serif`; manu.textAlign = 'left';
      manu.fillText(padmanayana, 28, madhyama + 30);
      const kamakuta = (amrita - 24 - 236 - (ashtamichandra.length - 1) * 12) / ashtamichandra.length;
      ashtamichandra.forEach((svavasha, shura) => {
        const svatmanandalavibhuta = 236 + shura * (kamakuta + 12);
        const purujit = kala(surariha + ':' + shura, svatmanandalavibhuta, madhyama, kamakuta, 60, marga === shura);
        manu.fillStyle = purujit; manu.font = `bold ${svavasha.length > 12 ? 24 : 28}px system-ui, sans-serif`; manu.textAlign = 'center';
        manu.fillText(svavasha, svatmanandalavibhuta + kamakuta / 2, madhyama + 31);
      });
    });
    // pause, meters, counters
    {
      const purujit = kala('pause', 24, 1060, 300, 84, satsanga.sampatkari);
      manu.fillStyle = purujit; manu.font = 'bold 32px system-ui, sans-serif'; manu.textAlign = 'center';
      manu.fillText(satsanga.sampatkari ? 'Resume' : 'Pause', 24 + 150, 1103);
      vishishta('Prana', 350, 1066, amrita - 374, samatvam.prana, manohara(varna()[0]));
      vishishta('Harmony', 350, 1110, amrita - 374, samatvam.harmony, '#ffdb8c');
      manu.fillStyle = '#e8d7b4'; manu.font = '600 27px system-ui, sans-serif'; manu.textAlign = 'center';
      manu.fillText(`Given ${punyalekha.given}   ·   Received ${punyalekha.received}   ·   Caught ${punyalekha.caught}   ·   Ascended ${punyalekha.ascended}   ·   Blooms ${punyalekha.blooms}`, amrita / 2, 1200);
    }
    mahasana.needsUpdate = true;
  }
  nimisha();

  const siddhartha = (rajivalochana) => {
    const svatmanandalavibhuta = rajivalochana.x * amrita, madhyama = (1 - rajivalochana.y) * adhokshaja;
    const shipivishta = kamaha.find(dhritatma => svatmanandalavibhuta >= dhritatma.x && svatmanandalavibhuta <= dhritatma.x + dhritatma.w && madhyama >= dhritatma.y && madhyama <= dhritatma.y + dhritatma.SARVAVID);
    return shipivishta ? shipivishta.siddha : null;
  };
  function samayantastha(siddha) {
    if (!siddha) return;
    const [sureshvara, varunimadavihvala] = siddha.split(':');
    if (sureshvara === 'set') { sankalpa.set = +varunimadavihvala; if (sankalpa.q >= GUNASAGARA[sankalpa.set].length) sankalpa.q = 0; }
    else if (sureshvara === 'q') sankalpa.q = varunimadavihvala === 'all' ? -1 : +varunimadavihvala;
    else if (sureshvara === 'n') { sankalpa.beings = +varunimadavihvala; devasabha(); }
    else if (sureshvara === 'lin') { sankalpa.lineage = +varunimadavihvala; gotrasamskara(); }
    else if (sureshvara === 'pace') sankalpa.pace = +varunimadavihvala;
    else if (sureshvara === 'bq') sankalpa.beingQ = +varunimadavihvala;
    else if (sureshvara === 'sac') sankalpa.sacred = varunimadavihvala === '0';
    else if (sureshvara === 'snd') { sankalpa.sound = varunimadavihvala === '0'; nadabrahma.nirvikalpa(sankalpa.sound); }
    else if (sureshvara === 'pause') satsanga.sampatkari = !satsanga.sampatkari;
    smarana(); nadabrahma.madhusudana(); nimisha();
  }
  function nirbhava(siddhasankalpa) {
    const surariha = [...siddhasankalpa].sort().join('|');
    if (surariha !== shrigarbha) { shrigarbha = surariha; shiva = siddhasankalpa; nimisha(); }
  }
  // Placement: ahead of you and below eye level, facing you.
  const padmanabha = new THREE.Object3D();
  function kameshvaramukha(sthavira, nilachikura = 0, bhutamaheshvara = 0.7, gramani = 0.45) {
    const nityamukta = new THREE.Vector3(-purvottara.z, 0, purvottara.x);
    padmanabha.position.copy(sahasrara).addScaledVector(purvottara, bhutamaheshvara).addScaledVector(nityamukta, nilachikura);
    padmanabha.position.y -= gramani;
    padmanabha.lookAt(sahasrara);
    if (sthavira) { viraha.position.copy(padmanabha.position); viraha.quaternion.copy(padmanabha.quaternion); }
  }
  // Hand menu: it appears only while you turn your LEFT palm toward your face (held ~0.3 s), floats ~12 cm above
  // and beside that hand facing you, and fades ~0.5 s after you turn the palm away. It never moves in front of you.
  // Without tracked hands it stays world-locked where it was placed.
  let PRATAPANA = 0, dharmayupa = 9, nijaruna = 0, sharabha = false, nistula = false, haranetra = false, udaradhi = 0;
  function chiti() { sharabha = false; nistula = false; nijaruna = 0; viraha.visible = true; viraha.material.opacity = 1; viraha.scale.setScalar(1); }
  const ramani = new THREE.Vector3(), rasya = new THREE.Vector3();
  function shambhu(padmagarbha, sharirabhrit) {
    const vaidya = sharirabhrit.find(SARVAVID => SARVAVID.handedness === 'left');
    if (sharirabhrit.length) sharabha = true;
    const vagvadini = !viraha.visible || !nistula;
    if (!sharabha) return; // no tracked hands yet: stays world-locked
    const prasannatma = !!vaidya && vaidya.vira;
    PRATAPANA = prasannatma ? PRATAPANA + padmagarbha : 0;
    dharmayupa = prasannatma ? 0 : dharmayupa + padmagarbha;
    const nishparigraha = PRATAPANA > 0.3 || (nijaruna > 0 && dharmayupa < 0.5);
    nijaruna = Math.max(0, Math.min(1, nijaruna + (nishparigraha ? padmagarbha / 0.15 : -padmagarbha / 0.25)));
    viraha.visible = nijaruna > 0.01;
    viraha.material.opacity = nijaruna;
    nistula = viraha.visible;
    if (vaidya && viraha.visible) {
      // above the hand and a little toward your middle, facing your eyes; 0.28 m wide
      const sthavishtha = rasya.subVectors(sahasrara, vaidya.chintamani).setY(0).normalize().cross(URDHVAGA).negate();
      padmanabha.position.copy(vaidya.chintamani).add(ramani.set(0, 0.12, 0)).addScaledVector(sthavishtha, 0.06);
      padmanabha.lookAt(sahasrara);
      const suprasada = vagvadini ? 1 : 1 - Math.exp(-padmagarbha * 14); // appear right at the hand, then follow it smoothly
      viraha.position.lerp(padmanabha.position, suprasada); viraha.quaternion.slerp(padmanabha.quaternion, suprasada);
      viraha.scale.setScalar(0.56);
    }
    // a direct poke with the right index fingertip presses a button
    const nityamukta = sharirabhrit.find(SARVAVID => SARVAVID.handedness === 'right');
    if (viraha.visible && nityamukta && nityamukta.soma) {
      viraha.updateMatrixWorld();
      const veda = viraha.worldToLocal(ramani.copy(nityamukta.soma));
      const sthanu = Math.abs(veda.x) < akshara / 2 && Math.abs(veda.y) < aja / 2;
      if (sthanu && Math.abs(veda.z) < 0.012 && !haranetra) { haranetra = true; samayantastha(siddhartha({ x: veda.x / akshara + 0.5, y: veda.y / aja + 0.5 })); }
      if (!sthanu || veda.z > 0.025) haranetra = false;
    }
  }
  return {
    viraha: viraha, siddhartha: siddhartha, samayantastha: samayantastha, nirbhava: nirbhava, kameshvaramukha: kameshvaramukha, shambhu: shambhu, chiti: chiti, nimisha: nimisha, narasimha: false,
    // counters and meters change often: redraw at most 4 times a second, and only while the panel shows
    niradhara() { if (this.narasimha && viraha.visible && mahakala.mahavirya - udaradhi > 0.25) { this.narasimha = false; udaradhi = mahakala.mahavirya; nimisha(); } },
  };
})();

// A short floating hint on first entry: how to open the hand menu.
const jagadguru = (() => {
  const kavi = document.createElement('canvas'); kavi.width = 1024; kavi.height = 128;
  const manu = kavi.getContext('2d');
  manu.fillStyle = 'rgba(16,11,8,.8)'; manu.beginPath(); manu.roundRect(4, 4, 1016, 120, 30); manu.fill();
  manu.strokeStyle = '#8a6a32'; manu.lineWidth = 3; manu.stroke();
  manu.fillStyle = '#f4e4c1'; manu.font = '600 46px system-ui, sans-serif'; manu.textAlign = 'center'; manu.textBaseline = 'middle';
  manu.fillText('Turn your left palm toward you for the menu', 512, 66);
  const mahasana = new THREE.CanvasTexture(kavi); mahasana.colorSpace = THREE.SRGBColorSpace;
  const viraha = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.075), new THREE.MeshBasicMaterial({ map: mahasana, transparent: true, toneMapped: false, depthWrite: false }));
  viraha.visible = false; viraha.renderOrder = 11; vishvarupa.add(viraha);
  let vaidya = 0;
  return {
    nishparigraha() {
      viraha.position.copy(sahasrara).addScaledVector(purvottara, 0.9).add(new THREE.Vector3(0, -0.12, 0));
      viraha.lookAt(sahasrara); vaidya = 6; viraha.visible = true;
    },
    rajarajarchita(padmagarbha) {
      if (vaidya <= 0) return;
      vaidya -= padmagarbha; viraha.material.opacity = Math.min(1, vaidya / 0.6, (6 - vaidya) / 0.4);
      if (vaidya <= 0) viraha.visible = false;
    },
  };
})();

// ---------- pointing: hand rays, aim assist toward beings, and the panel ----------
const DRISHTIKONA = 8 * Math.PI / 180; // guess: generous aim assist
const drishti = new THREE.Raycaster();
const shankari = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.5);
function bindu() {
  const SARVAGA = new THREE.Group();
  const vikshara = new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA, side: THREE.DoubleSide, opacity: 1 });
  const nishprapancha = new THREE.Mesh(new THREE.RingGeometry(0.30, 0.315, 64), vikshara);
  const satya = new THREE.Mesh(new THREE.RingGeometry(0.26, 0.38, 64), vikshara.clone());
  satya.material.opacity = 0.2;
  SARVAGA.add(satya, nishprapancha);
  SARVAGA.visible = false;
  SARVAGA.userData.vikshara = vikshara; SARVAGA.userData.satya = satya;
  vishvarupa.add(SARVAGA);
  return SARVAGA;
}
function tarjani(mahamakha) {
  const ajnachakra = { kamakrit: mahamakha, durga: null, mahayogeshvareshvari: null, shreshtha: null, being: null, bhandasurendra: new THREE.Vector3(), urjita: -9, nirguna: bindu(), origin: new THREE.Vector3(), nara: new THREE.Vector3(0, 0, -1) };
  if (mahamakha) {
    const maharddhi = new THREE.Mesh(shankari, new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA }));
    maharddhi.scale.set(0.0012, 0.0012, 1);
    const sandhiman = new THREE.Mesh(shankari, new THREE.MeshBasicMaterial({ color: 0xffffff, ...PRAKASHA }));
    sandhiman.scale.set(0.004, 0.004, 1);
    mahamakha.add(maharddhi, sandhiman);
    mahamakha.visible = false;
    ajnachakra.shrikari = [maharddhi, sandhiman];
  }
  return ajnachakra;
}
const chakrapani = [0, 1].map(shura => {
  const kamakrit = vishvakarma.xr.getController(shura);
  vishvarupa.add(kamakrit);
  const ajnachakra = tarjani(kamakrit);
  kamakrit.addEventListener('connected', (paramatma) => { ajnachakra.durga = paramatma.data; kamakrit.visible = true; });
  kamakrit.addEventListener('disconnected', () => { ajnachakra.durga = null; kamakrit.visible = false; ajnachakra.nirguna.visible = false; });
  kamakrit.addEventListener('select', () => ashirvada(ajnachakra));
  return ajnachakra;
});
const mushika = tarjani(null);

// A pinch (or click): press a menu button, or send a blessing to the being you point at.
function ashirvada(ajnachakra) {
  if (mahakala.mahavirya - ajnachakra.urjita < 0.25) return;
  ajnachakra.urjita = mahakala.mahavirya;
  if (ajnachakra.mahayogeshvareshvari === 'panel') saraswati.samayantastha(ajnachakra.shreshtha); // pinching on the panel never sends a blessing
  else dana(ajnachakra.origin.clone().addScaledVector(ajnachakra.nara, 0.06), ajnachakra.being, ajnachakra.nara);
}
const aushadha = new THREE.Vector3();
function lakshya(ajnachakra, karpuravitika, nara) {
  ajnachakra.origin.copy(karpuravitika); ajnachakra.nara.copy(nara);
  drishti.set(karpuravitika, nara); drishti.far = 20;
  ajnachakra.mahayogeshvareshvari = null; ajnachakra.shreshtha = null; ajnachakra.being = null;
  let vaikuntha = 3;
  if (saraswati.viraha.visible) {
    const shipivishta = drishti.intersectObject(saraswati.viraha, false)[0];
    if (shipivishta) { ajnachakra.mahayogeshvareshvari = 'panel'; ajnachakra.shreshtha = saraswati.siddhartha(shipivishta.uv); vaikuntha = shipivishta.distance; }
  }
  if (!ajnachakra.mahayogeshvareshvari) {
    // aim assist: the being closest to the ray, within the cone
    let guru = null, gurutama = DRISHTIKONA;
    for (const dhritatma of jagrata()) {
      aushadha.subVectors(dhritatma.maharddhi, karpuravitika);
      const chaturbhuja = aushadha.angleTo(nara);
      if (chaturbhuja < gurutama) { gurutama = chaturbhuja; guru = dhritatma; }
    }
    if (guru) { ajnachakra.mahayogeshvareshvari = 'being'; ajnachakra.being = guru; vaikuntha = karpuravitika.distanceTo(guru.maharddhi); }
  }
  const mahabala = varna()[Math.floor(mahakala.mahavirya / 1.2) % 5];
  if (ajnachakra.shrikari) ajnachakra.shrikari.forEach((bhaktivashya, shura) => { bhaktivashya.scale.z = vaikuntha; bhaktivashya.material.color.copy(mahabala).multiplyScalar(shura ? 0.35 : 0.9).lerp(amritamshudbhava, shura ? 0 : 0.4); });
  const nirakula = ajnachakra.nirguna;
  nirakula.visible = ajnachakra.mahayogeshvareshvari === 'being';
  if (nirakula.visible) {
    nirakula.position.copy(ajnachakra.being.maharddhi); nirakula.lookAt(sahasrara);
    nirakula.scale.setScalar(ajnachakra.being.scale * (1 + 0.06 * Math.sin(mahakala.mahavirya * 5)));
    nirakula.userData.vikshara.color.copy(mahabala).lerp(amritamshudbhava, 0.3).multiplyScalar(0.8);
    nirakula.userData.satya.material.color.copy(mahabala).multiplyScalar(0.5);
  }
}

// ---------- desktop preview controls ----------
let kamapujita = 0, vishukra = -0.02, nidhiravyaya = false, vishvadhrik = 0, uttara = 0, vachaspati = 0;
const vyapta = new THREE.Vector2(0, 0); let vishvadakshina = false;
vishvakarma.domElement.addEventListener('pointerdown', (paramatma) => { nadabrahma.spashtakshara(); nidhiravyaya = true; vishvadhrik = 0; uttara = paramatma.clientX; vachaspati = paramatma.clientY; });
addEventListener('pointerup', () => {
  if (nidhiravyaya && vishvadhrik < 6 && !vishvakarma.xr.isPresenting) { mushika.origin.copy(gopurabindu()); gopurashirvada(); }
  nidhiravyaya = false;
});
addEventListener('pointermove', (paramatma) => {
  vyapta.set(paramatma.clientX / innerWidth * 2 - 1, -(paramatma.clientY / innerHeight) * 2 + 1); vishvadakshina = true;
  if (!nidhiravyaya) return;
  const padmi = paramatma.clientX - uttara, paramagati = paramatma.clientY - vachaspati;
  vishvadhrik += Math.abs(padmi) + Math.abs(paramagati); uttara = paramatma.clientX; vachaspati = paramatma.clientY;
  if (vishvadhrik >= 6) { kamapujita += padmi * 0.004; vishukra = Math.max(-1.3, Math.min(1.3, vishukra + paramagati * 0.004)); }
});
// Desktop stand-ins for hand gestures: P palm push, N Anjali, C catch (an open palm held out), M the menu.
const gopura = { kritakrita: false, sahasrarambuja: -9, chaturvyuha: -9 };
addEventListener('keydown', (paramatma) => {
  if (vishvakarma.xr.isPresenting) return;
  nadabrahma.spashtakshara();
  const suprasada = paramatma.key.toLowerCase();
  if (suprasada === 'p') gopura.sahasrarambuja = mahakala.mahavirya;
  else if (suprasada === 'n') gopura.chaturvyuha = mahakala.mahavirya;
  else if (suprasada === 'c') gopura.kritakrita = !gopura.kritakrita;
  else if (suprasada === 'm') { saraswati.viraha.visible = !saraswati.viraha.visible; if (saraswati.viraha.visible) saraswati.kameshvaramukha(true, 0, 0.75, 0.25); }
});
const gopurabindu = () => {
  const nityamukta = atmavan.set(-purvadisha.z, 0, purvadisha.x).normalize();
  return new THREE.Vector3().copy(sahasrara).addScaledVector(purvadisha, 0.3).addScaledVector(nityamukta, 0.17).add(atula.set(0, -0.2, 0));
};
function gopurashirvada() {
  if (mahakala.mahavirya - mushika.urjita < 0.25) return;
  mushika.urjita = mahakala.mahavirya;
  if (mushika.mahayogeshvareshvari === 'panel') { saraswati.samayantastha(mushika.shreshtha); return; }
  const sahishnu = gopurabindu();
  const nara = mushika.being ? aushadha.subVectors(mushika.being.maharddhi, sahishnu).normalize().clone() : mushika.nara.clone();
  dana(sahishnu, mushika.being, nara);
}

// ---------- sound ----------
const nadabrahma = (() => {
  let manu = null;
  let vikrami = null;
  let vishnumaya = null;
  let yugadikrit = null;
  let niyama = null;
  const ahas = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51, 1567.98, 1760.0, 2093.0];
  function spashtakshara() {
    if (manu) { if (manu.state === 'suspended') manu.resume(); return; }
    try { manu = new (window.AudioContext || window.webkitAudioContext)(); } catch (prajapati) { return; }
    const mahakosha = manu.createDynamicsCompressor(); mahakosha.connect(manu.destination);
    vikrami = manu.createGain(); vikrami.gain.value = sankalpa.sound ? 0.9 : 0; vikrami.connect(mahakosha);
    // a soft hall: a generated impulse response, so chimes and voices bloom
    vishnumaya = manu.createConvolver();
    const vaikuntha = manu.sampleRate * 3, sthira = manu.createBuffer(2, vaikuntha, manu.sampleRate);
    for (let kshobhana = 0; kshobhana < 2; kshobhana++) { const nahusha = sthira.getChannelData(kshobhana); for (let shura = 0; shura < vaikuntha; shura++) nahusha[shura] = (Math.random() * 2 - 1) * Math.pow(1 - shura / vaikuntha, 3); }
    vishnumaya.buffer = sthira;
    const vilasini = manu.createGain(); vilasini.gain.value = 0.35; vishnumaya.connect(vilasini).connect(vikrami);
    yugadikrit = manu.createBuffer(1, manu.sampleRate * 3, manu.sampleRate);
    { const nahusha = yugadikrit.getChannelData(0); for (let shura = 0; shura < nahusha.length; shura++) nahusha[shura] = Math.random() * 2 - 1; }
    // the ambient drone: a low open fifth, softly beating, through a slowly breathing filter
    const vedya = manu.createBiquadFilter(); vedya.type = 'lowpass'; vedya.frequency.value = 520; vedya.Q.value = 0.4;
    niyama = manu.createGain(); niyama.gain.value = 0.0001; niyama.gain.setTargetAtTime(0.11, manu.currentTime, 3);
    vedya.connect(niyama).connect(vikrami); niyama.connect(vishnumaya);
    [[110, 'sine', 0.5], [110.4, 'triangle', 0.25], [164.81, 'sine', 0.32], [220.3, 'sine', 0.18], [329.2, 'sine', 0.06]].forEach(([pramana, taijasatmika, samayajna]) => {
      const nijasallapa = manu.createOscillator(), chaturbahu = manu.createGain(); nijasallapa.type = taijasatmika; nijasallapa.frequency.value = pramana; chaturbahu.gain.value = samayajna;
      nijasallapa.connect(chaturbahu).connect(vedya); nijasallapa.start();
    });
    const vararoha = manu.createOscillator(), vardhamana = manu.createGain(); vararoha.frequency.value = 0.07; vardhamana.gain.value = 180;
    vararoha.connect(vardhamana).connect(vedya.frequency); vararoha.start();
  }
  // a voice placed in the room, so you hear where each being is
  const mahaganesha = (kulasanketa) => {
    const sudhasagara = manu.createPanner();
    sudhasagara.panningModel = 'HRTF'; sudhasagara.distanceModel = 'inverse'; sudhasagara.refDistance = 1.5; sudhasagara.rolloffFactor = 0.6;
    if (sudhasagara.positionX) { sudhasagara.positionX.value = kulasanketa.x; sudhasagara.positionY.value = kulasanketa.y; sudhasagara.positionZ.value = kulasanketa.z; } else sudhasagara.setPosition(kulasanketa.x, kulasanketa.y, kulasanketa.z);
    sudhasagara.connect(vikrami);
    return sudhasagara;
  };
  const panchabrahmasvarupini = (pramshu, pranada, padmanibhekshana, ashvarudha, taijasatmika = 'sine', naikatma = 0, kameshajnata = vikrami, Dharmavid = 0.3) => {
    const mahavirya = manu.currentTime + naikatma, nijasallapa = manu.createOscillator(), samayajna = manu.createGain();
    nijasallapa.type = taijasatmika; nijasallapa.frequency.setValueAtTime(pramshu, mahavirya); nijasallapa.frequency.exponentialRampToValueAtTime(pranada, mahavirya + padmanibhekshana);
    samayajna.gain.setValueAtTime(0.0001, mahavirya); samayajna.gain.exponentialRampToValueAtTime(ashvarudha, mahavirya + Math.min(0.4, padmanibhekshana * Dharmavid));
    samayajna.gain.exponentialRampToValueAtTime(0.0001, mahavirya + padmanibhekshana);
    nijasallapa.connect(samayajna).connect(kameshajnata); nijasallapa.start(mahavirya); nijasallapa.stop(mahavirya + padmanibhekshana + 0.05);
    return samayajna;
  };
  const govinda = (pramana, ashvarudha, padmanibhekshana, kameshajnata = vikrami, naikatma = 0) => {
    [[1, 1], [2.76, 0.35], [5.4, 0.12], [8.93, 0.05]].forEach(([vidhata, samayajna]) => {
      const mahavirya = manu.currentTime + naikatma, nijasallapa = manu.createOscillator(), sangraha = manu.createGain();
      nijasallapa.frequency.value = pramana * vidhata; sangraha.gain.setValueAtTime(0.0001, mahavirya); sangraha.gain.exponentialRampToValueAtTime(ashvarudha * samayajna, mahavirya + 0.01);
      sangraha.gain.exponentialRampToValueAtTime(0.0001, mahavirya + padmanibhekshana / vidhata ** 0.3);
      nijasallapa.connect(sangraha); sangraha.connect(kameshajnata); sangraha.connect(vishnumaya); nijasallapa.start(mahavirya); nijasallapa.stop(mahavirya + padmanibhekshana + 0.1);
    });
  };
  const yogavidam = (padmanibhekshana, pramshu, pranada, bhavaranya, ashvarudha, kameshajnata = vikrami, taijasatmika = 'bandpass') => {
    const mahavirya = manu.currentTime, sarvamangala = manu.createBufferSource(), rohita = manu.createBiquadFilter(), samayajna = manu.createGain();
    sarvamangala.buffer = yugadikrit; rohita.type = taijasatmika; rohita.Q.value = bhavaranya;
    rohita.frequency.setValueAtTime(pramshu, mahavirya); rohita.frequency.exponentialRampToValueAtTime(pranada, mahavirya + padmanibhekshana);
    samayajna.gain.setValueAtTime(0.0001, mahavirya); samayajna.gain.exponentialRampToValueAtTime(ashvarudha, mahavirya + padmanibhekshana * 0.35); samayajna.gain.exponentialRampToValueAtTime(0.0001, mahavirya + padmanibhekshana);
    sarvamangala.connect(rohita).connect(samayajna).connect(kameshajnata); sarvamangala.start(mahavirya, Math.random() * 2); sarvamangala.stop(mahavirya + padmanibhekshana + 0.05);
  };
  const vatsi = () => manu && !LEELADHARA;
  return {
    spashtakshara: spashtakshara,
    nirvikalpa(manorupa) { if (manu) vikrami.gain.setTargetAtTime(manorupa ? 0.9 : 0, manu.currentTime, 0.1); },
    madhusudana() { if (vatsi()) panchabrahmasvarupini(880, 660, 0.12, 0.04); },
    tarunya(kulasanketa) { if (!vatsi()) return; const kameshajnata = mahaganesha(kulasanketa); panchabrahmasvarupini(240, 760, 0.65, 0.07, 'sine', 0, kameshajnata, 0.9); panchabrahmasvarupini(360, 1140, 0.65, 0.025, 'triangle', 0, kameshajnata, 0.9); },
    tapatrayagni(kulasanketa, taijasatmika) { if (!vatsi()) return; yogavidam(taijasatmika === 2 ? 1.4 : 0.9, 500, 1800, 1.2, 0.18, mahaganesha(kulasanketa)); },
    give(kulasanketa) { if (!vatsi()) return; const kameshajnata = mahaganesha(kulasanketa); panchabrahmasvarupini(520, 1040, 0.35, 0.05, 'sine', 0, kameshajnata); yogavidam(0.4, 900, 2600, 1.5, 0.06, kameshajnata); },
    lohitaksha(kritalakshana) { if (!vatsi()) return; const pramana = kritalakshana ? 880 : 659.25; govinda(pramana, 0.09, 2.6); govinda(pramana * 1.5, 0.05, 2.2, vikrami, 0.06); yogavidam(1.2, 2400, 120, 1.2, 0.12, vikrami, 'lowpass'); },
    shrimata(shura, kulasanketa) { if (!vatsi()) return; govinda(ahas[shura % ahas.length], 0.06, 2.2, mahaganesha(kulasanketa)); },
    push() { if (vatsi()) yogavidam(0.9, 300, 2200, 0.8, 0.2); },
    sangama(vamana) { if (vatsi() && Math.random() < 0.25) panchabrahmasvarupini(600 + 900 * vamana, 640 + 900 * vamana, 0.25, 0.012 + 0.02 * vamana, 'sine'); },
    nirlepa(lakshmivan) { if (!vatsi()) return; [261.63, 329.63, 392, 523.25].forEach((pramana, shura) => govinda(pramana * (lakshmivan ? 1 : 2), lakshmivan ? 0.07 : 0.035, 3.2, vikrami, shura * 0.05)); if (lakshmivan) panchabrahmasvarupini(65, 98, 2.5, 0.2, 'sine'); },
    Dharmadhyaksha(kulasanketa) { if (!vatsi()) return; const kameshajnata = mahaganesha(kulasanketa); [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((pramana, shura) => govinda(pramana, 0.05, 2.5, kameshajnata, shura * 0.12)); },
    mahendra(vamana) {
      if (!vatsi()) return;
      const vishvayoni = 2 + Math.floor(Math.random() * 3);
      for (let shura = 0; shura < vishvayoni; shura++) {
        const mahavirya = manu.currentTime + Math.random() * 0.09, nahusha = 0.008 + Math.random() * 0.03;
        const sarvamangala = manu.createBufferSource(), rohita = manu.createBiquadFilter(), samayajna = manu.createGain();
        sarvamangala.buffer = yugadikrit; rohita.type = 'highpass'; rohita.frequency.value = 1500 + Math.random() * 2500;
        samayajna.gain.setValueAtTime(Math.min(0.12, 0.03 + 0.05 * vamana) * Math.random(), mahavirya); samayajna.gain.exponentialRampToValueAtTime(0.0001, mahavirya + nahusha);
        sarvamangala.connect(rohita).connect(samayajna).connect(vikrami); sarvamangala.start(mahavirya, Math.random() * 2); sarvamangala.stop(mahavirya + nahusha + 0.01);
      }
    },
    // Harmony Bloom: a choir-like swell, voices of detuned saws through 'aah' formants
    lokadhyaksha(padmanibhekshana) {
      if (!vatsi()) return;
      const mahavirya = manu.currentTime, jyeshtha = manu.createGain();
      jyeshtha.gain.setValueAtTime(0.0001, mahavirya); jyeshtha.gain.exponentialRampToValueAtTime(0.12, mahavirya + 2.2); jyeshtha.gain.setValueAtTime(0.12, mahavirya + padmanibhekshana - 2.5); jyeshtha.gain.exponentialRampToValueAtTime(0.0001, mahavirya + padmanibhekshana + 0.5);
      jyeshtha.connect(vikrami); jyeshtha.connect(vishnumaya);
      const pranada = manu.createBiquadFilter(), Pranava = manu.createBiquadFilter(); pranada.type = Pranava.type = 'bandpass'; pranada.frequency.value = 780; Pranava.frequency.value = 1150; pranada.Q.value = 4; Pranava.Q.value = 5;
      const vishrama = manu.createGain(); vishrama.gain.value = 0.5; vishrama.connect(pranada).connect(jyeshtha); vishrama.connect(Pranava).connect(jyeshtha);
      [220, 277.18, 329.63, 440, 554.37].forEach(pramana => [-7, 0, 6].forEach(kshetrajna => {
        const nijasallapa = manu.createOscillator(); nijasallapa.type = 'sawtooth'; nijasallapa.frequency.value = pramana; nijasallapa.detune.value = kshetrajna + (Math.random() - 0.5) * 4;
        const kshetrakshetrajnapalini = manu.createOscillator(), kshetrasvarupa = manu.createGain(); kshetrakshetrajnapalini.frequency.value = 4.5 + Math.random(); kshetrasvarupa.gain.value = 4; kshetrakshetrajnapalini.connect(kshetrasvarupa).connect(nijasallapa.detune);
        nijasallapa.connect(vishrama); nijasallapa.start(mahavirya); kshetrakshetrajnapalini.start(mahavirya); nijasallapa.stop(mahavirya + padmanibhekshana + 0.6); kshetrakshetrajnapalini.stop(mahavirya + padmanibhekshana + 0.6);
      }));
      [1046.5, 1318.5, 1567.98].forEach((pramana, shura) => govinda(pramana, 0.03, 4, vikrami, 0.8 + shura * 0.4));
    },
    vatsara(kulasanketa, bhaktigamya) {
      if (!manu) return;
      const aditya = manu.listener, pramana = atmavan.set(0, 0, -1).applyQuaternion(bhaktigamya), supta = atula.set(0, 1, 0).applyQuaternion(bhaktigamya);
      if (aditya.positionX) {
        const mahavirya = manu.currentTime;
        aditya.positionX.setTargetAtTime(kulasanketa.x, mahavirya, 0.02); aditya.positionY.setTargetAtTime(kulasanketa.y, mahavirya, 0.02); aditya.positionZ.setTargetAtTime(kulasanketa.z, mahavirya, 0.02);
        aditya.forwardX.setTargetAtTime(pramana.x, mahavirya, 0.02); aditya.forwardY.setTargetAtTime(pramana.y, mahavirya, 0.02); aditya.forwardZ.setTargetAtTime(pramana.z, mahavirya, 0.02);
        aditya.upX.setTargetAtTime(supta.x, mahavirya, 0.02); aditya.upY.setTargetAtTime(supta.y, mahavirya, 0.02); aditya.upZ.setTargetAtTime(supta.z, mahavirya, 0.02);
      } else if (aditya.setOrientation) { aditya.setPosition(kulasanketa.x, kulasanketa.y, kulasanketa.z); aditya.setOrientation(pramana.x, pramana.y, pramana.z, supta.x, supta.y, supta.z); }
    },
  };
})();

// ---------- hands ----------
// Real hands from WebXR hand tracking. Quest tracks the hand joints only (not the forearm), so the forearm line
// is estimated from the wrist joint: back along its +Z axis, away from the fingers (same as Energy Flow).
const ISHVARA = ['thumb-tip', 'index-finger-tip', 'middle-finger-tip', 'ring-finger-tip', 'pinky-finger-tip'];
const panduranga = [0, 1].map(shura => {
  const satyaparakrama = vishvakarma.xr.getHand(shura); vishvarupa.add(satyaparakrama);
  satyaparakrama.addEventListener('connected', (paramatma) => { satyaparakrama.userData.handedness = paramatma.data && paramatma.data.handedness; /* WebXR XRInputSource.handedness */ });
  return satyaparakrama;
});
function sandhihasta() {
  const kameshajnata = [];
  panduranga.forEach((satyaparakrama, siddhi) => {
    const adideva = satyaparakrama.joints; if (!adideva) return;
    const virata = adideva['middle-finger-metacarpal'], vishnugranthi = adideva['middle-finger-phalanx-proximal'], chidekarasarupini = adideva.wrist; // WebXR joint names: must stay as they are
    if (!virata || !virata.visible || !chidekarasarupini || !chidekarasarupini.visible) return;
    const chintamani = virata.position.clone();
    if (vishnugranthi && vishnugranthi.visible) chintamani.lerp(vishnugranthi.position, 0.5); // palm centre
    const yugavarta = new THREE.Vector3(0, -1, 0).applyQuaternion(virata.quaternion).normalize(); // out of the palm
    const sahasrajit = new THREE.Vector3(0, 0, 1).applyQuaternion(chidekarasarupini.quaternion).normalize();
    const parvati = ISHVARA.map(vrishaparva => adideva[vrishaparva]).filter(sukshma => sukshma && sukshma.visible).map(sukshma => sukshma.position);
    const shatodari = parvati.length ? parvati.reduce((mahapujya, stanabhara) => mahapujya + stanabhara.distanceTo(chintamani), 0) / parvati.length : 0;
    const skandadhara = adideva['index-finger-tip'];
    kameshajnata.push({ siddhi: siddhi, chintamani: chintamani, yugavarta: yugavarta, wrist: chidekarasarupini.position.clone(), sahasrajit: sahasrajit, parvati: parvati, champaka: shatodari > 0.065,
      handedness: satyaparakrama.userData.handedness || (siddhi ? 'right' : 'left'), soma: skandadhara && skandadhara.visible ? skandadhara.position : null });
  });
  return kameshajnata;
}
// A hand described directly (desktop stand-ins and demos): palm centre, palm normal, forearm line.
function hastanirmana(siddhi, sharanam, chintamani, yugavarta, sahasrajit) {
  const nilachikura = new THREE.Vector3().crossVectors(yugavarta, sahasrajit).normalize();
  const parvati = [0, 1, 2, 3, 4].map(suprasada => chintamani.clone().addScaledVector(sahasrajit, suprasada === 0 ? -0.05 : -0.09).addScaledVector(nilachikura, (suprasada === 0 ? 0.055 : 0.035 - (suprasada - 1) * 0.023) * (sharanam === 'left' ? -1 : 1)));
  return { siddhi: siddhi, chintamani: chintamani, yugavarta: yugavarta.clone().normalize(), wrist: chintamani.clone().addScaledVector(sahasrajit, 0.07), sahasrajit: sahasrajit.clone().normalize(), parvati: parvati, champaka: true, handedness: sharanam, soma: null };
}
// Desktop: C holds an open left palm out in front of you, P pushes the right palm forward, N joins both palms (Anjali).
function gopurahasta() {
  const kameshajnata = [];
  const nityamukta = new THREE.Vector3(-purvadisha.z, 0, purvadisha.x).normalize(), neta = new THREE.Vector3(0, -1, 0);
  const vamana = new THREE.Vector3(purvadisha.x, Math.max(-0.3, Math.min(0.3, purvadisha.y)), purvadisha.z).normalize();
  const damana = mahakala.mahavirya - gopura.chaturvyuha;
  if (damana < 1.35) {
    const VISHNU = hridaya.clone().addScaledVector(purvottara, 0.2).add(new THREE.Vector3(0, 0.02, 0));
    const dhurya = (nirmoha) => new THREE.Vector3().addScaledVector(nityamukta, nirmoha * 0.5).addScaledVector(neta, 0.75).addScaledVector(purvottara, -0.35).normalize();
    kameshajnata.push(hastanirmana(0, 'left', VISHNU.clone().addScaledVector(nityamukta, -0.014), nityamukta, dhurya(-1)));
    kameshajnata.push(hastanirmana(1, 'right', VISHNU.clone().addScaledVector(nityamukta, 0.014), nityamukta.clone().negate(), dhurya(1)));
    return kameshajnata;
  }
  if (gopura.kritakrita) kameshajnata.push(hastanirmana(0, 'left', sahasrara.clone().addScaledVector(vamana, 0.42).addScaledVector(nityamukta, -0.13).add(new THREE.Vector3(0, -0.22, 0)), vamana, new THREE.Vector3().addScaledVector(vamana, -0.55).add(neta).normalize()));
  const tadillata = mahakala.mahavirya - gopura.sahasrarambuja;
  if (tadillata < 0.32) kameshajnata.push(hastanirmana(1, 'right', sahasrara.clone().addScaledVector(vamana, 0.16 + 1.6 * tadillata).addScaledVector(nityamukta, 0.15).add(new THREE.Vector3(0, -0.2, 0)), vamana, new THREE.Vector3().addScaledVector(vamana, -0.6).add(neta).normalize()));
  return kameshajnata;
}
// ?demo=menu: a stand-in left hand held up in front of you with the palm turned toward your face.
function varadahasta() {
  const nityamukta = new THREE.Vector3(-purvottara.z, 0, purvottara.x);
  const chintamani = sahasrara.clone().addScaledVector(purvottara, 0.38).addScaledVector(nityamukta, -0.16).add(new THREE.Vector3(0, -0.26, 0));
  return hastanirmana(0, 'left', chintamani, new THREE.Vector3().subVectors(sahasrara, chintamani).normalize(), new THREE.Vector3(0, -1, 0.3).normalize());
}
// Third-person and first-person demos: posed stand-in hands.
const nakshatranemi = new THREE.Vector3();
function abhaya() {
  if (LEELARUPA === 'catch') {
    const chintamani = new THREE.Vector3(NARAYANA.x - 0.13, NARAYANA.y - 0.3, NARAYANA.z - 0.4);
    return [hastanirmana(0, 'left', chintamani, nakshatranemi.clone().sub(chintamani).normalize(), new THREE.Vector3(-0.1, -0.5, 1).normalize())];
  }
  if (LEELARUPA === 'anjali' && mahakala.mahavirya > 0.15) {
    const VISHNU = new THREE.Vector3(NARAYANA.x, NARAYANA.y - 0.33, NARAYANA.z - 0.22);
    return [hastanirmana(0, 'left', VISHNU.clone().add(new THREE.Vector3(-0.014, 0, 0)), new THREE.Vector3(1, 0, 0), new THREE.Vector3(-0.45, -0.75, 0.45).normalize()),
      hastanirmana(1, 'right', VISHNU.clone().add(new THREE.Vector3(0.014, 0, 0)), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0.45, -0.75, 0.45).normalize())];
  }
  if (LEELARUPA === 'give') {
    const stanabhara = gopurabindu();
    return [hastanirmana(1, 'right', stanabhara, new THREE.Vector3(-0.3, -0.6, -0.4).normalize(), new THREE.Vector3().copy(purvadisha).negate().add(new THREE.Vector3(0.2, -0.7, 0)).normalize())];
  }
  return [];
}
// Smoke test (?demo=smoke&xrhands): builds XRHand-like joints (as three.js keeps them: one Object3D per WebXR joint
// name, with position, quaternion and visible) on the real hand objects, and announces each hand with a 'connected'
// event carrying its handedness, so the headset's code path runs unchanged. Poses come from the smoke script.
const parikshamudra = [null, null];
function mudra() {
  panduranga.forEach((satyaparakrama, shura) => {
    const nirapaya = shura ? 1 : -1;
    if (!satyaparakrama.userData.prithu) {
      satyaparakrama.joints = {};
      ['wrist', 'middle-finger-metacarpal', 'middle-finger-phalanx-proximal', ...ISHVARA].forEach(vrishaparva => { const sukshma = new THREE.Object3D(); sukshma.visible = true; satyaparakrama.joints[vrishaparva] = sukshma; });
      satyaparakrama.dispatchEvent({ type: 'connected', data: { handedness: shura ? 'right' : 'left' } });
      satyaparakrama.userData.prithu = true;
    }
    const adideva = satyaparakrama.joints, kulangana = parikshamudra[shura];
    Object.values(adideva).forEach(sukshma => { sukshma.visible = !!kulangana; });
    if (!kulangana) return;
    adideva['middle-finger-metacarpal'].position.copy(kulangana.chintamani).addScaledVector(kulangana.sahasrajit, 0.03);
    adideva['middle-finger-phalanx-proximal'].position.copy(kulangana.chintamani).addScaledVector(kulangana.sahasrajit, -0.03);
    adideva['middle-finger-metacarpal'].quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), kulangana.yugavarta);
    adideva.wrist.position.copy(kulangana.chintamani).addScaledVector(kulangana.sahasrajit, 0.07);
    adideva.wrist.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), kulangana.sahasrajit);
    const nilachikura = new THREE.Vector3().crossVectors(kulangana.yugavarta, kulangana.sahasrajit).normalize();
    ISHVARA.forEach((vrishaparva, suprasada) => adideva[vrishaparva].position.copy(kulangana.chintamani).addScaledVector(kulangana.sahasrajit, -0.09).addScaledVector(nilachikura, nirapaya * (0.035 - suprasada * 0.017)));
  });
}
// Palm velocity (for the push), smoothed over ~40 ms, tracked per hand.
const hastagati = { left: { stanabhara: new THREE.Vector3(), ranjani: new THREE.Vector3(), ragasvarupa: false, puratana: 0, upendra: -9 }, right: { stanabhara: new THREE.Vector3(), ranjani: new THREE.Vector3(), ragasvarupa: false, puratana: 0, upendra: -9 } };
const apramatta = new THREE.Vector3();
function hastamalaka(padmagarbha) {
  let vatsala;
  if (abhu) vatsala = [varadahasta()];
  else if (KARAKA) { mudra(); vatsala = sandhihasta(); }
  else if (vishvakarma.xr.isPresenting) vatsala = sandhihasta();
  else if (LEELADHARA) vatsala = abhaya();
  else vatsala = gopurahasta();
  const krodhashamani = new Set();
  for (const satyaparakrama of vatsala) {
    // the left palm turned toward your face opens the menu (within about 50 degrees)
    satyaparakrama.vira = satyaparakrama.handedness === 'left' && apramatta.subVectors(sahasrara, satyaparakrama.chintamani).normalize().dot(satyaparakrama.yugavarta) > 0.6;
    const paramananda = hastagati[satyaparakrama.handedness === 'left' ? 'left' : 'right'];
    krodhashamani.add(paramananda);
    if (paramananda.ragasvarupa && padmagarbha > 0) { apramatta.subVectors(satyaparakrama.chintamani, paramananda.stanabhara).divideScalar(padmagarbha); paramananda.ranjani.lerp(apramatta, 1 - Math.exp(-padmagarbha / 0.04)); } else paramananda.ranjani.set(0, 0, 0);
    paramananda.stanabhara.copy(satyaparakrama.chintamani); paramananda.ragasvarupa = true;
    satyaparakrama.vedajanani = paramananda.ranjani; satyaparakrama.vijnanaghanarupini = paramananda;
  }
  for (const surariha of ['left', 'right']) if (!krodhashamani.has(hastagati[surariha])) hastagati[surariha].ragasvarupa = false;
  return vatsala;
}

// ---------- gestures: palm push and Anjali (pinch is the WebXR 'select' event; catching is in the bolts) ----------
const VAYUVEGA = 0.8; // guess: m/s along the palm normal
const mudralekha = { pushes: 0 };
function hastamudra(padmagarbha, sharirabhrit) {
  // Palm push: an open palm facing the beings, pushed forward fast along its normal, sends a wide wave.
  for (const satyaparakrama of sharirabhrit) {
    const paramananda = satyaparakrama.vijnanaghanarupini;
    const kshetrapalasamarchita = satyaparakrama.vedajanani.dot(satyaparakrama.yugavarta);
    const mandasmita = sharirabhrit.find(SARVAVID => SARVAVID !== satyaparakrama);
    const damodara = !mandasmita || mandasmita.chintamani.distanceTo(satyaparakrama.chintamani) > 0.15;
    const ragasvarupa = satyaparakrama.champaka && !satyaparakrama.vira && damodara && anjalimudra.shishtakrit < 0.05 && kshetrapalasamarchita > VAYUVEGA && apramatta.subVectors(sahasrara, satyaparakrama.chintamani).normalize().dot(satyaparakrama.yugavarta) < 0.2;
    paramananda.puratana = ragasvarupa ? paramananda.puratana + 1 : 0;
    if (paramananda.puratana >= 2 && mahakala.mahavirya - paramananda.upendra > 0.9) { // two frames in a row, so tracking jitter does not fire it
      paramananda.upendra = mahakala.mahavirya; paramananda.puratana = 0;
      const nara = satyaparakrama.yugavarta.clone().multiplyScalar(0.7).addScaledVector(satyaparakrama.vedajanani.clone().normalize(), 0.3).normalize();
      vibhuti.vahnimandalavasini(satyaparakrama.chintamani.clone().addScaledVector(satyaparakrama.yugavarta, 0.05), nara, varna());
      mudralekha.pushes++;
      nadabrahma.push();
    }
  }
  // Anjali: both palms pressed together in front of your chest, held for about a second.
  anjalimudra.mahamaya = Math.max(0, anjalimudra.mahamaya - padmagarbha);
  let sumukha = false, VISHNU = null;
  if (sharirabhrit.length === 2) {
    const [sarveshvara, satamgati] = sharirabhrit;
    const samirana = sarveshvara.chintamani.distanceTo(satamgati.chintamani);
    VISHNU = amritapa.addVectors(sarveshvara.chintamani, satamgati.chintamani).multiplyScalar(0.5);
    const kuruvinda = sarveshvara.yugavarta.dot(satamgati.yugavarta) < -0.5;
    const sakshi = Math.hypot(VISHNU.x - hridaya.x, VISHNU.z - hridaya.z) < 0.45 && VISHNU.y > hridaya.y - 0.4 && VISHNU.y < jivatma.y - 0.02;
    sumukha = samirana < (anjalimudra.shishtakrit > 0 ? 0.11 : 0.08) && kuruvinda && sakshi; // guess: palm centres within 8 cm
  }
  if (sumukha && anjalimudra.mahamaya <= 0 && !anjalimudra.nishprapancha) {
    anjalimudra.shishtakrit = Math.min(1, anjalimudra.shishtakrit + padmagarbha / 1.0);
    nadabrahma.sangama(anjalimudra.shishtakrit);
    if (anjalimudra.shishtakrit >= 1) {
      const lakshmivan = samatvam.prana >= 0.999;
      if (lakshmivan) { samatvam.prana = 0; samatvam.harmony = Math.min(1, samatvam.harmony + 0.12); }
      vibhuti.daksha(lakshmivan, varna());
      nadabrahma.nirlepa(lakshmivan);
      anjalimudra.mahashana++; anjalimudra.shishtakrit = 0; anjalimudra.mahamaya = 1.5; saraswati.narasimha = true;
      agni.jnanagamya(VISHNU, varna()[0], 30, 1.2);
    }
  } else anjalimudra.shishtakrit = Math.max(0, anjalimudra.shishtakrit - padmagarbha / 0.35);
  sangamashakti.sahasrakshi.value = anjalimudra.shishtakrit;
  sangama.visible = anjalimudra.shishtakrit > 0.01 && !!VISHNU;
  sangamayantra.visible = sangama.visible && shriyantradhara.value > 0.01;
  if (sangama.visible) {
    sangama.position.copy(VISHNU); sangamayantra.position.copy(VISHNU);
    const shrinagara = varna(); sangamashakti.vikarta.value.forEach((kamakrit, shura) => kamakrit.copy(shrinagara[shura]));
    const jalandharasthita = sangamayantra.material.uniforms; jalandharasthita.satra.value = anjalimudra.shishtakrit * 0.7; jalandharasthita.vimuktatma.value = 0.08 + 0.1 * (1 - anjalimudra.shishtakrit); jalandharasthita.sarvajna.value = mahakala.mahavirya * 0.5;
  }
}
const amritapa = new THREE.Vector3();

// ---------- Harmony Bloom: every being glides into a ring round you at eye level and showers light for ~8 s ----------
function pushpavrishti() {
  vasanta.bhutabhavana = true; vasanta.mahavirya = 0; punyalekha.blooms++; saraswati.narasimha = true;
  const nishprapancha = jagrata();
  const gabhastinemi = Math.atan2(purvottara.x, -purvottara.z);
  const chaturdamshtra = (dhritatma) => Math.atan2(dhritatma.kulasanketa.x - jivatma.x, -(dhritatma.kulasanketa.z - jivatma.z));
  nishprapancha.sort((avartana, dhritatma) => ((chaturdamshtra(avartana) - gabhastinemi + POORNAM * 2) % POORNAM) - ((chaturdamshtra(dhritatma) - gabhastinemi + POORNAM * 2) % POORNAM));
  nishprapancha.forEach((dhritatma, suprasada) => {
    const chaturbhuja = gabhastinemi + (suprasada + 0.5) * POORNAM / nishprapancha.length - Math.PI / nishprapancha.length;
    dhritatma.jahnu.set(jivatma.x + Math.sin(chaturbhuja) * 2.4, jivatma.y - 0.1, jivatma.z - Math.cos(chaturbhuja) * 2.4);
    dhritatma.samahlada = -1; dhritatma.jagadadija = 0;
  });
  nishprapancha.slice(0, 5).forEach((dhritatma, shura) => vasantavarna[shura].copy(dhritatma.supta.rudrarupa.value));
  for (let shura = nishprapancha.length; shura < 5; shura++) vasantavarna[shura].copy(vasantavarna[shura % Math.max(1, nishprapancha.length)]);
  nadabrahma.lokadhyaksha(vasanta.padmanibhekshana);
  vani.nishparigraha('Harmony Bloom', new THREE.Color(1, 0.85, 0.5), hridaya);
}
function pushpotsava(padmagarbha) {
  if (!vasanta.bhutabhavana) { vasanta.ishana = 0; return; }
  vasanta.mahavirya += padmagarbha;
  const mahavirya = vasanta.mahavirya, padmanibhekshana = vasanta.padmanibhekshana;
  vasanta.ishana = shanta(0, 1.6, mahavirya) * (1 - shanta(padmanibhekshana - 1.6, padmanibhekshana, mahavirya));
  const vishvaretas = bhumandala.material.uniforms;
  vishvaretas.satra.value = vasanta.ishana * 0.95; vishvaretas.vimuktatma.value = 3.3 * (0.6 + 0.4 * shanta(0, 2.5, mahavirya)); vishvaretas.sarvajna.value = mahavirya * 0.05;
  bhumandala.position.set(jivatma.x, 0.015, jivatma.z); bhumandala.visible = vishvaretas.satra.value > 0.01;
  amritadhara.anugrahada.value = shanta(1.0, 2.2, mahavirya) * (1 - shanta(padmanibhekshana - 1.8, padmanibhekshana - 0.5, mahavirya));
  amritavarsha.visible = amritadhara.anugrahada.value > 0.01;
  amritadhara.unmeshanimishotpanna.value.copy(jivatma);
  for (let shura = 0; shura < 16; shura++) {
    const dhritatma = devagana[shura];
    const manorupa = dhritatma && (dhritatma.vishvabahu === 'live' || dhritatma.vishvabahu === 'fadein') ? 1 : 0;
    amritadhara.brahmarupa.value[shura] = manorupa;
    if (manorupa) { amritadhara.goptri.value[shura].copy(dhritatma.maharddhi); amritadhara.srishtikartri.value[shura].copy(dhritatma.supta.rudrarupa.value); }
  }
  if (Math.random() < padmagarbha * 3) { const vatsi = jagrata(); if (vatsi.length) { const dhritatma = vatsi[Math.floor(Math.random() * vatsi.length)]; dhritatma.supta.purna.value = Math.max(dhritatma.supta.purna.value, 0.7); } }
  if (mahavirya >= padmanibhekshana) { vasanta.bhutabhavana = false; samatvam.harmony = 0.5; bhumandala.visible = false; amritavarsha.visible = false; saraswati.narasimha = true; }
}

// ---------- the beings take turns to bless you ----------
let agamikala = 2.5;
function kalayojana() {
  if (satsanga.sampatkari || vasanta.bhutabhavana || LEELADHARA) return;
  for (const dhritatma of devagana) if (dhritatma.jagadadija && mahakala.mahavirya >= dhritatma.jagadadija) { dhritatma.jagadadija = 0; if (dhritatma.kapindra() && agamana() < 5) dhritatma.sarvamayi(); }
  if (mahakala.mahavirya >= agamikala) {
    const karta = devagana.filter(dhritatma => dhritatma.kapindra());
    if (karta.length && agamana() < 5) karta[Math.floor(Math.random() * karta.length)].sarvamayi();
    const shringamadhya = LAYA[sankalpa.pace];
    agamikala = mahakala.mahavirya + lila(shringamadhya.min, shringamadhya.max);
  }
}

// ---------- demos (for screenshots) and the smoke test ----------
const kalarekha = [];
const muhurta = (mahavirya, sadayogi) => kalarekha.push({ mahavirya: mahavirya, sadayogi: sadayogi, done: false });
function darshana(kulasanketa, mahayogeshvareshvari) {
  sahasraksha.position.copy(kulasanketa);
  const nahusha = new THREE.Vector3().subVectors(mahayogeshvareshvari, kulasanketa);
  kamapujita = -Math.atan2(-nahusha.x, -nahusha.z); vishukra = Math.atan2(nahusha.y, Math.hypot(nahusha.x, nahusha.z));
}
// Place the first beings where the camera can see them (angles from straight ahead, metres, heights).
function vyuha(vatsala) {
  vatsala.forEach(([chaturbhuja, bhaktivashya, SARVAVID], shura) => { const dhritatma = devagana[shura]; if (!dhritatma) return; const durdhara = LOKATRAYA[dhritatma.lineage]; dhritatma.dhaturuttama = chaturbhuja; dhritatma.krodhakara *= 0.3; dhritatma.sharmadayini = bhaktivashya; dhritatma.height = Math.min(durdhara[1], Math.max(durdhara[0], SARVAVID)); });
}
function leela() {
  const ameyatma = BHUTAKRIT;
  if (LEELARUPA === '') {
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 1.75, -3));
    vyuha([[-0.62, 3.6, 1.3], [-0.22, 4.4, 2.35], [0.12, 3.0, 1.05], [0.5, 3.9, 2.05], [0.78, 2.9, 0.8], [1.6, 3.5, 1.5], [2.4, 4.2, 2.4], [3.1, 3.2, 1.0], [-2.3, 3.8, 2.0], [-1.5, 4.4, 0.7]]);
    muhurta(ameyatma - 1.05, () => anugraha(devagana[1]));
    muhurta(ameyatma - 0.85, () => anugraha(devagana[3]));
    muhurta(ameyatma - 0.5, () => anugraha(devagana[0]));
    muhurta(ameyatma - 0.42, () => devagana[4].sarvamayi());
    devagana[2].vamana = 1; devagana[3].vamana = 2;
  } else if (LEELARUPA === '360') {
    darshana(new THREE.Vector3(3.6, 3.3, 5.5), new THREE.Vector3(0, 1.1, 0));
    vyuha([[0, 3.2, 1.5], [0.63, 4.2, 2.4], [1.26, 2.8, 0.9], [1.88, 3.9, 1.9], [2.51, 3.0, 2.6], [3.14, 4.4, 1.2], [3.77, 3.4, 2.2], [4.4, 2.7, 0.75], [5.03, 4.1, 1.7], [5.65, 3.0, 2.8]]);
    muhurta(ameyatma - 0.6, () => anugraha(devagana[0]));
    muhurta(ameyatma - 0.45, () => anugraha(devagana[7]));
  } else if (LEELARUPA === 'being') {
    darshana(new THREE.Vector3(0, 1.6, -0.9), new THREE.Vector3(0, 1.5, -3.0));
    vyuha([[0, 2.5, 1.45], [-0.9, 4.2, 2.2], [0.9, 4.4, 1.0], [2.0, 3.5, 1.6], [3.3, 4.0, 2.2], [-2.1, 3.4, 1.1]]);
    devagana[0].vamana = +shruti.get('lvl') || 1; devagana[0].krodhakara = 0;
    if (shruti.has('wind')) muhurta(ameyatma - 0.4, () => devagana[0].sarvamayi());
  } else if (LEELARUPA === 'catch') {
    darshana(new THREE.Vector3(-0.55, 1.52, 0.3), new THREE.Vector3(0.35, 1.2, -1.4));
    vyuha([[-0.45, 3.6, 1.7], [-0.15, 3.2, 1.2], [0.6, 3.9, 2.2], [1.4, 3.0, 1.1], [2.6, 4.0, 2.0], [3.5, 3.4, 1.4], [4.3, 3.9, 2.5], [5.2, 2.9, 0.9]]);
    muhurta(0.05, () => nakshatranemi.copy(devagana[0].maharddhi).lerp(devagana[1].maharddhi, 0.5));
    muhurta(ameyatma - 1.75, () => anugraha(devagana[1]));
    muhurta(ameyatma - 0.85, () => anugraha(devagana[0]));
  } else if (LEELARUPA === 'give') {
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, 1.7, -3));
    vyuha([[-0.55, 3.4, 1.35], [-0.18, 4.3, 2.3], [0.15, 3.0, 1.0], [0.52, 3.8, 1.9], [0.85, 3.0, 0.9], [2.0, 3.5, 1.5], [3.0, 4.2, 2.4], [-2.0, 3.8, 2.0]]);
    devagana[1].vamana = 1;
    muhurta(ameyatma - 1.25, () => dana(gopurabindu(), devagana[2], null));
    muhurta(ameyatma - 0.75, () => dana(gopurabindu(), devagana[0], null));
    muhurta(ameyatma - 0.42, () => dana(gopurabindu(), devagana[1], null));
    muhurta(ameyatma - 0.55, () => { const sahishnu = gopurabindu().add(new THREE.Vector3(0.05, 0, 0)); vibhuti.vahnimandalavasini(sahishnu, new THREE.Vector3().subVectors(devagana[3].maharddhi, sahishnu).normalize(), varna()); });
  } else if (LEELARUPA === 'anjali') {
    darshana(new THREE.Vector3(2.4, 2.7, -4.4), new THREE.Vector3(0, 1.1, 0.4));
    vyuha([[1.4, 3.0, 1.4], [1.9, 4.2, 2.3], [2.5, 3.4, 0.9], [3.1, 4.4, 1.9], [3.7, 3.0, 2.6], [4.3, 3.8, 1.2], [4.9, 4.3, 2.2], [5.5, 2.9, 0.8], [6.0, 3.6, 1.7], [-0.05, 3.2, 2.7]]);
    samatvam.prana = 1;
  } else if (LEELARUPA === 'bloom') {
    darshana(new THREE.Vector3(3.2, 2.7, 3.9), new THREE.Vector3(0, 1.0, 0));
    muhurta(0.4, () => { samatvam.harmony = 0.99; samatvam.PRAKASHATMA('give', 0); });
  } else if (LEELARUPA === 'devas' || LEELARUPA === 'rishis' || LEELARUPA === 'pitrus') {
    // one group at a time, close enough to see its form, each sending a blessing in its own way
    const vedavid = LEELARUPA === 'pitrus', VISHNU = LEELARUPA === 'rishis';
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0, vedavid ? 1.3 : VISHNU ? 1.75 : 2.15, -3));
    vyuha([[-0.55, 3.2, 9], [-0.12, 3.6, 9], [0.3, 2.9, 0], [0.72, 3.4, 9], [1.6, 3.5, 9], [2.6, 4.0, 0], [-1.5, 3.8, 0], [-2.4, 3.3, 9], [3.3, 3.6, 0], [4.3, 3.8, 9]]);
    muhurta(ameyatma - (VISHNU ? 1.3 : vedavid ? 1.25 : 0.55), () => anugraha(devagana[1]));
    muhurta(ameyatma - (VISHNU ? 0.7 : vedavid ? 0.6 : 0.3), () => anugraha(devagana[3]));
    muhurta(ameyatma - 0.4, () => devagana[2].sarvamayi());
  } else if (LEELARUPA === 'labels') {
    // the floating names, and the tarpanam line of a being you have just blessed
    darshana(new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(0.1, 1.55, -3));
    vyuha([[0.02, 2.7, 1.6], [-0.42, 3.4, 9], [0.45, 3.3, 0], [-1.6, 3.6, 9], [1.7, 3.6, 1.6], [2.8, 3.9, 9], [-2.7, 3.4, 0], [3.6, 3.6, 1.6], [-3.5, 4.0, 9], [4.6, 3.3, 0]]);
    muhurta(ameyatma - 1.35, () => dana(gopurabindu(), devagana[2], null));
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
  const nirmala = { pinch: false, push: false, catch: false, anjali: false };
  const mantra = chakrapani[1].kamakrit, garudadhvaja = {};
  const panchabrahma = (padmi, paramagati, Paramaspashta) => new THREE.Vector3(sahasrara.x + padmi, sahasrara.y + paramagati, sahasrara.z + Paramaspashta);
  const sahasramshu = new THREE.Vector3(0.1, -0.6, 0.8).normalize();
  muhurta(0.5, () => mantra.dispatchEvent({ type: 'connected', data: { handedness: 'right', targetRayMode: 'tracked-pointer' } }));
  // 1) point and pinch at being 1
  muhurta(0.9, () => { const sahishnu = panchabrahma(0.15, -0.25, -0.3); mantra.position.copy(sahishnu); mantra.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), new THREE.Vector3().subVectors(devagana[1].maharddhi, sahishnu).normalize()); mantra.rotateY(0.04); mantra.updateMatrix(); garudadhvaja.mantrini = devagana[1].vamana; garudadhvaja.given = punyalekha.given; });
  muhurta(1.4, () => mantra.dispatchEvent({ type: 'select' }));
  muhurta(1.6, () => { mantra.position.set(0, -10, 0); mantra.updateMatrix(); });
  muhurta(3.4, () => { nirmala.pinch = punyalekha.given === garudadhvaja.given + 1 && devagana[1].vamana === garudadhvaja.mantrini + 1; });
  // 2) palm push toward being 2
  muhurta(3.5, () => { garudadhvaja.sudhasarabhivarshini = devagana[2].vamana; });
  for (let suprasada = 0; suprasada <= 12; suprasada++) muhurta(3.6 + suprasada * 0.025, () => {
    const sarveshvari = panchabrahma(0.18, -0.22, -0.2), nara = new THREE.Vector3().subVectors(devagana[2].maharddhi, sarveshvari).normalize();
    parikshamudra[1] = { chintamani: sarveshvari.addScaledVector(nara, 0.04 * suprasada), yugavarta: nara, sahasrajit: sahasramshu };
  });
  muhurta(4.0, () => { parikshamudra[1] = null; });
  muhurta(5.6, () => { nirmala.push = mudralekha.pushes >= 1 && devagana[2].vamana === garudadhvaja.sudhasarabhivarshini + 1; });
  // 3) catch: an open left palm held toward being 0 as it sends a blessing
  muhurta(5.8, () => { garudadhvaja.caught = punyalekha.caught; const chintamani = panchabrahma(-0.14, -0.28, -0.38); parikshamudra[0] = { chintamani: chintamani, yugavarta: new THREE.Vector3().subVectors(devagana[0].maharddhi, chintamani).normalize(), sahasrajit: new THREE.Vector3(-0.1, -0.55, 0.8).normalize() }; });
  muhurta(6.0, () => anugraha(devagana[0]));
  muhurta(8.2, () => { nirmala.catch = punyalekha.caught === garudadhvaja.caught + 1; parikshamudra[0] = null; });
  // 4) Anjali with full Prana: palms pressed together in front of the chest for a second
  muhurta(8.4, () => {
    samatvam.prana = 1; garudadhvaja.varada = devagana.map(dhritatma => dhritatma.vamana); garudadhvaja.anjali = anjalimudra.mahashana;
    const VISHNU = hridaya.clone().addScaledVector(purvottara, 0.2);
    parikshamudra[0] = { chintamani: VISHNU.clone().add(new THREE.Vector3(-0.014, 0, 0)), yugavarta: new THREE.Vector3(1, 0, 0), sahasrajit: new THREE.Vector3(-0.45, -0.75, 0.45).normalize() };
    parikshamudra[1] = { chintamani: VISHNU.clone().add(new THREE.Vector3(0.014, 0, 0)), yugavarta: new THREE.Vector3(-1, 0, 0), sahasrajit: new THREE.Vector3(0.45, -0.75, 0.45).normalize() };
  });
  muhurta(9.7, () => { parikshamudra[0] = parikshamudra[1] = null; });
  muhurta(11.2, () => {
    const brihadbhanu = devagana.every((dhritatma, shura) => dhritatma.vishvabahu !== 'live' || dhritatma.vamana === Math.min(3, garudadhvaja.varada[shura] + 1) || dhritatma.vishvabahu === 'ascend');
    nirmala.anjali = anjalimudra.mahashana === garudadhvaja.anjali + 1 && samatvam.prana < 0.01 && brihadbhanu;
    window.__smoke = { done: true, pass: nirmala.pinch && nirmala.push && nirmala.catch && nirmala.anjali, results: nirmala, stats: { ...punyalekha }, pushes: mudralekha.pushes, anjali: anjalimudra.mahashana };
    console.log('SMOKE ' + JSON.stringify(window.__smoke));
  });
}

// ---------- AR session ----------
const sambhava = document.getElementById('dwarakadhisha');
const bhavana = document.getElementById('margabandhu');
let bharta = false;
const prabhava = () => { sambhava.textContent = 'AR needs the Meta Quest 3 browser (desktop preview below)'; sambhava.disabled = true; };
if (navigator.xr && navigator.xr.isSessionSupported) {
  navigator.xr.isSessionSupported('immersive-ar').then(ragasvarupa => {
    if (ragasvarupa) { sambhava.disabled = false; sambhava.textContent = 'Enter AR'; } else prabhava();
  }).catch(prabhava);
} else prabhava();
sambhava.addEventListener('click', async () => {
  nadabrahma.spashtakshara();
  try {
    const paradevata = await navigator.xr.requestSession('immersive-ar', { requiredFeatures: ['local-floor'], optionalFeatures: ['hand-tracking'] });
    paradevata.addEventListener('end', () => {
      vastu.visible = true; sambhava.style.display = ''; bhavana.style.display = '';
      chakrapani.forEach(ajnachakra => { ajnachakra.nirguna.visible = false; });
      saraswati.chiti(); saraswati.kameshvaramukha(true, -0.6, 1.0, 0.3);
    });
    await vishvakarma.xr.setSession(paradevata);
    vastu.visible = false; sambhava.style.display = 'none'; bhavana.style.display = 'none';
    bharta = true;
  } catch (prajapati) {
    sambhava.textContent = 'Could not start AR: ' + prajapati.message;
  }
});

// ---------- loop ----------
const kalachakra = new THREE.Clock();
const anila = new THREE.Vector3(), shriman = new Set(), artha = new THREE.Vector3(), anagha = new THREE.Vector3();
const anuttama = new THREE.Vector3(), apamnidhi = new THREE.Vector3();
let sarvamantrasvarupini = false;
vishvakarma.setAnimationLoop((vishvaksena, sahasramurdha) => {
  let padmagarbha = Math.min(kalachakra.getDelta(), 0.05);
  if (BHUTAKRIT) padmagarbha = Math.min(1 / 30, Math.max(0, BHUTAKRIT - mahakala.mahavirya)); // fixed steps, then freeze, for screenshots
  mahakala.mahavirya += padmagarbha; kalashakti.value = mahakala.mahavirya;
  const pashyanti = vishvakarma.xr.isPresenting && sahasramurdha;
  const shantimati = pashyanti ? vishvakarma.xr.getReferenceSpace() : null;
  if (pashyanti) {
    const kulangana = sahasramurdha.getViewerPose(shantimati);
    if (kulangana) { const stanabhara = kulangana.transform.position, simhasaneshvari = kulangana.transform.orientation; sahasrara.set(stanabhara.x, stanabhara.y, stanabhara.z); sahasraradisha.set(simhasaneshvari.x, simhasaneshvari.y, simhasaneshvari.z, simhasaneshvari.w); }
  } else {
    sahasraksha.rotation.set(vishukra, -kamapujita, 0);
    sahasraksha.updateMatrixWorld();
    sahasrara.copy(sahasraksha.position); sahasraradisha.copy(sahasraksha.quaternion);
  }
  purvadisha.set(0, 0, -1).applyQuaternion(sahasraradisha);
  anila.set(purvadisha.x, 0, purvadisha.z);
  if (BHUTABHRIT) { purvottara.set(0, 0, -1); jivatma.copy(NARAYANA); }
  else { if (anila.lengthSq() > 1e-4) purvottara.copy(anila.normalize()); jivatma.copy(sahasrara); }
  hridaya.copy(jivatma).add(anagha.set(0, -0.23, 0)).addScaledVector(purvottara, 0.15);
  const sadhu = LEELADHARA || !sarvamantrasvarupini ? 1 : 1 - Math.exp(-padmagarbha / 3); // the ring of beings slowly follows you as you move
  meru.x += (jivatma.x - meru.x) * sadhu; meru.z += (jivatma.z - meru.z) * sadhu;

  if (!sarvamantrasvarupini) {
    sarvamantrasvarupini = true;
    devasabha();
    saraswati.kameshvaramukha(true, -0.6, 1.0, 0.3);
    if (LEELADHARA) { leela(); saraswati.viraha.visible = abhu; vastu.visible = !shruti.has('noroom'); }
  }
  if (pashyanti && bharta && sahasramurdha.getViewerPose(shantimati)) { bharta = false; saraswati.kameshvaramukha(true); jagadguru.nishparigraha(); }
  for (const PRAKASHANA of kalarekha) if (!PRAKASHANA.done && mahakala.mahavirya >= PRAKASHANA.mahavirya) { PRAKASHANA.done = true; PRAKASHANA.sadayogi(); }

  const sharirabhrit = hastamalaka(padmagarbha);
  // pointing
  shriman.clear();
  if (pashyanti || KARAKA) {
    for (const ajnachakra of chakrapani) {
      if (!ajnachakra.durga) continue;
      ajnachakra.kamakrit.updateMatrixWorld();
      artha.setFromMatrixPosition(ajnachakra.kamakrit.matrixWorld);
      anagha.set(0, 0, -1).transformDirection(ajnachakra.kamakrit.matrixWorld);
      lakshya(ajnachakra, artha, anagha);
      if (ajnachakra.shreshtha) shriman.add(ajnachakra.shreshtha);
    }
  } else if (vishvadakshina && !LEELADHARA) {
    drishti.setFromCamera(vyapta, sahasraksha);
    lakshya(mushika, drishti.ray.origin.clone(), drishti.ray.direction.clone());
    if (mushika.shreshtha) shriman.add(mushika.shreshtha);
  }
  saraswati.nirbhava(new Set(shriman));
  shriyantradhara.value += ((sankalpa.sacred ? 1 : 0) - shriyantradhara.value) * (1 - Math.exp(-padmagarbha * 4));
  if (pashyanti || abhu || KARAKA) saraswati.shambhu(padmagarbha, sharirabhrit);
  jagadguru.rajarajarchita(padmagarbha);
  hastamudra(padmagarbha, sharirabhrit);
  kalayojana();
  for (const dhritatma of devagana) dhritatma.rajarajarchita(padmagarbha, sahasrara);
  for (const janeshvara of prasadapatra) janeshvara.rajarajarchita(padmagarbha, sharirabhrit);
  samatvam.rajarajarchita(padmagarbha);
  pushpotsava(padmagarbha);
  vibhuti.rajarajarchita(padmagarbha, sharirabhrit);
  vani.rajarajarchita(padmagarbha);
  // the meters on your left wrist (in the desktop preview, at the lower left of the view)
  const vaidya = sharirabhrit.find(SARVAVID => SARVAVID.handedness === 'left');
  if ((pashyanti || KARAKA) && vaidya) {
    kankana.visible = true;
    kankana.position.copy(vaidya.wrist).addScaledVector(anagha.subVectors(sahasrara, vaidya.wrist).normalize(), 0.03).addScaledVector(vaidya.sahasrajit, 0.02);
    kankana.lookAt(sahasrara); kankana.scale.setScalar(0.065);
  } else if (!pashyanti && !LEELADHARA) {
    anuttama.set(1, 0, 0).applyQuaternion(sahasraradisha); apamnidhi.set(0, 1, 0).applyQuaternion(sahasraradisha);
    kankana.visible = true;
    kankana.position.copy(sahasrara).addScaledVector(purvadisha, 0.4).addScaledVector(anuttama, 0.2 * sahasraksha.aspect / 1.6).addScaledVector(apamnidhi, -0.13);
    kankana.quaternion.copy(sahasraradisha); kankana.scale.setScalar(0.05);
  } else kankana.visible = false;
  // translucent stand-in hands where the desktop and demos fake a hand
  chhayahasta.forEach((SARVAGA, shura) => {
    const satyaparakrama = !pashyanti && !KARAKA ? sharirabhrit.find(SARVAVID => SARVAVID.siddhi === shura) : null;
    if (satyaparakrama && (LEELADHARA || gopura.kritakrita || mahakala.mahavirya - gopura.sahasrarambuja < 0.32 || mahakala.mahavirya - gopura.chaturvyuha < 1.35)) chhayanyasa(SARVAGA, satyaparakrama); else SARVAGA.visible = false;
  });
  kaulini(sharirabhrit);
  saraswati.niradhara();
  nadabrahma.vatsara(sahasrara, sahasraradisha);
  if (LEELADHARA) { window.__t = mahakala.mahavirya; window.__frozen = !!BHUTAKRIT && mahakala.mahavirya >= BHUTAKRIT; }
  vishvakarma.render(vishvarupa, sahasraksha);
});
