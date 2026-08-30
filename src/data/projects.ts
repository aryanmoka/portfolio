// src/data/projects.ts

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudy {
  summary: string;
  problem: string;
  constraints?: string[];
  approach: CaseStudySection[];
  challenges: CaseStudySection[];
  results: CaseStudyResult[];
  techStack: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string;
  demoLink?: string;
  demoType?: 'video' | 'other';
  liveLink?: string;
  highlights: string[];
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'hinglish-offensive-language-detection',
    title: 'Hinglish Offensive Language Detection',
    role: 'Published Research · NLP',
    year: '2025-26',
    image: '/projects/paper.jpg',
    description:
      'Compared mBERT and MuRIL transformer models for detecting offensive Hinglish (code-mixed Hindi-English) text, with an automated training/evaluation pipeline scored on macro F1.',
    technologies: ['Python', 'Transformers', 'Hugging Face', 'NLP', 'mBERT', 'MuRIL'],
    liveLink: 'https://rjwave.org/jaafr/papers/JAAFR26A3208.pdf',
    demoType: 'other',
    highlights: [
      'MuRIL outperformed mBERT by ~1.4% macro F1, showing the value of domain-specific models.',
      'Built an automated pipeline covering multiple preprocessing strategies and evaluation.',
      'Identified key challenges: slang ambiguity, transliteration errors, mixed-language complexity.',
    ],
    caseStudy: {
      summary:
        'A published study comparing two multilingual transformer models on detecting offensive language in Hinglish — text where speakers switch between Hindi and English mid-sentence, usually transliterated into Roman script.',
      problem:
        'Most hate-speech research targets monolingual English, but a huge share of real Indian social text is Hinglish: code-mixed, inconsistently transliterated ("bakwaas" vs "bakwas"), slang-heavy. English classifiers don\'t generalize, and there was little empirical comparison of which multilingual architecture actually handles it.',
      constraints: [
        'Needed real code-mixed data, not translated/synthetic text.',
        'Had to compare multiple preprocessing strategies fairly, not just one tokenization approach.',
        'Macro F1 required — the model had to catch the offensive class specifically, not just score well overall.',
      ],
      approach: [
        {
          title: 'Model selection',
          body: 'Compared mBERT (general multilingual) against MuRIL (pretrained specifically on Indian languages and transliteration) — the hypothesis: India-specific pretraining wins on Hinglish.',
        },
        {
          title: 'Automated pipeline',
          body: 'A Hugging Face pipeline ran both models through multiple preprocessing strategies (raw, normalized, slang-aware) without manual re-wiring, scoring consistently on macro F1.',
        },
        {
          title: 'Error analysis',
          body: 'Went past the headline number — manually reviewed misclassifications to categorize why each model failed.',
        },
      ],
      challenges: [
        {
          title: 'Transliteration inconsistency',
          body: 'The same word spelled multiple ways in Roman script fragmented the vocabulary and broke exact-match preprocessing rules.',
        },
        {
          title: 'Slang ambiguity',
          body: 'Slang that\'s offensive in one context and affectionate in another meant keyword presence alone wasn\'t enough — a real ceiling for any classifier at this scale.',
        },
        {
          title: 'Mixed-language complexity',
          body: 'Mid-clause language switching stressed both tokenizers differently than their original pretraining distributions.',
        },
      ],
      results: [
        { label: 'Macro F1 improvement', value: 'MuRIL beat mBERT by ~1.4%' },
        { label: 'Outcome', value: 'Published in a peer-reviewed journal' },
        { label: 'Key finding', value: 'Domain-specific pretraining beats model size for code-mixed text' },
      ],
      techStack: ['Python', 'Hugging Face Transformers', 'mBERT', 'MuRIL', 'PyTorch', 'Pandas', 'scikit-learn'],
      links: [{ label: 'Read the paper', url: 'https://rjwave.org/jaafr/papers/JAAFR26A3208.pdf' }],
    },
  },
  {
    slug: 'smart-india-hackathon-2025',
    title: 'Smart India Hackathon 2025',
    role: 'Team Leader',
    year: '2025',
    image: '/projects/youtube.jpg',
    description:
      'Automated attendance monitoring system combining QR codes, face recognition, geo-location, and device authentication, with a Flask + JWT backend.',
    technologies: ['React Native', 'Flask', 'MongoDB Atlas', 'JWT', 'Python'],
    demoLink: 'https://www.youtube.com/watch?v=d-BjvncCt8o',
    demoType: 'video',
    highlights: [
      'Led the team through the college-level SIH selection round',
      'Multi-factor identity verification',
      'Geo-fencing & device-binding logic',
    ],
    caseStudy: {
      summary:
        'A secure attendance monitoring system built for Smart India Hackathon 2025, combining QR scanning, face recognition, geo-location, and device authentication into one flow — built to close the loopholes that make traditional attendance systems easy to cheat.',
      problem:
        'Manual and single-factor attendance systems (a single QR code, a signature sheet, a basic ID scan) are trivially gameable — one student can mark attendance for another by sharing a code or a photo. The brief called for a system where a single point of failure could not be exploited: no one factor alone should be enough to fake a presence.',
      constraints: [
        'Needed to work reliably on a range of Android devices for a hackathon demo, not just a controlled lab setup.',
        'Had to combine multiple verification signals (QR, face, location, device) without making the actual check-in process slow or frustrating.',
        'Backend had to handle authenticated requests securely without a heavyweight identity provider — team size and timeline were hackathon-constrained.',
      ],
      approach: [
        {
          title: 'Multi-factor design',
          body: 'Layered four independent signals: a dynamically generated QR code (rotates to prevent screenshot sharing), on-device face recognition to confirm identity, geo-location to confirm the student is physically on campus, and device authentication to bind the check-in to a registered device — so even if one factor were compromised, the others still hold.',
        },
        {
          title: 'Mobile-first build',
          body: 'Built the client in React Native so the same codebase could run the face-recognition and QR-scanning flow on both Android and iOS without maintaining two separate apps under hackathon time pressure.',
        },
        {
          title: 'Secure backend',
          body: 'Implemented the backend in Flask with JWT-based identity validation, so every attendance event is tied to an authenticated, verifiable session rather than an anonymous form submission.',
        },
      ],
      challenges: [
        {
          title: 'Balancing security with speed',
          body: 'Each additional verification factor adds friction. Tuned the flow so the four checks run in sequence quickly enough that marking attendance still took only a few seconds, not a multi-step ordeal.',
        },
        {
          title: 'Device and location spoofing',
          body: 'Location and device signals can be spoofed on a rooted/jailbroken device or with a mock GPS app. Combining them with face recognition meant that even a spoofed location or device alone wasn\'t enough to fake a valid attendance record.',
        },
      ],
      results: [
        { label: 'Outcome', value: 'Qualified through college-level SIH selection' },
        { label: 'Verification factors', value: '4 independent signals per check-in' },
        { label: 'Role', value: 'Team Leader — coordinated build across mobile & backend' },
      ],
      techStack: ['React Native', 'Flask', 'MongoDB Atlas', 'JWT', 'Python', 'Face Recognition'],
      links: [{ label: 'Watch Demo Video', url: 'https://www.youtube.com/watch?v=d-BjvncCt8o' }],
    },
  },
  {
    slug: 'nutrichef',
    title: 'NutriChef (Chef Byte)',
    role: 'Full Stack Developer',
    year: '2025',
    image: '/projects/aichefbyte.jpg',
    description:
      'AI cooking chatbot and SaaS meal planner powered by the Gemini API, with a 7-day multi-turn meal planner, BMI/TDEE engines, allergy filtering, and Razorpay subscription billing.',
    technologies: ['Flask', 'PostgreSQL', 'React.js', 'Gemini API', 'Razorpay API', 'Swagger UI'],
    liveLink: 'https://aichefbyte.netlify.app/',
    demoType: 'other',
    highlights: [
      'Migrated SQLite → PostgreSQL to eliminate write-locking for high-concurrency traffic.',
      'Webhook-driven recurring billing via Razorpay Subscriptions API.',
      'Swagger/OpenAPI-documented REST API with token-based auth.',
    ],
    caseStudy: {
      summary:
        'An AI-powered nutrition SaaS combining a Gemini-driven cooking chatbot with a 7-day multi-turn meal planner, BMI/TDEE calculators, and subscription billing — built to go beyond a single-shot "give me a recipe" chatbot into something that remembers context and pays for itself.',
      problem:
        'Most AI recipe tools generate a single recipe from a single prompt with no memory of dietary constraints, past requests, or the user\'s actual nutritional targets. The goal was a genuinely useful meal-planning assistant: multi-turn conversation that remembers allergies and preferences, a real 7-day plan grounded in the user\'s BMI/TDEE numbers, and a sustainable business model (subscriptions) rather than a one-off demo.',
      constraints: [
        'Needed reliable multi-turn context handling from the Gemini API across a full week of meal planning, not just isolated prompts.',
        'Required accurate, explainable BMI/TDEE calculations client-side before ever calling the AI, so recommendations were grounded in real numbers.',
        'Had to support recurring billing (not just one-time payments) for a SaaS model, with correct handling of renewals, failures, and webhooks.',
      ],
      approach: [
        {
          title: 'Conversational meal planning',
          body: 'Engineered the core flow around the Gemini API to hold a 7-day multi-turn conversation — the assistant tracks what\'s already been planned, applies allergy filters, and offers ingredient substitutions without the user having to re-state constraints every turn.',
        },
        {
          title: 'Grounded calculations',
          body: 'Built client-side BMI/TDEE calculation engines so the meal plan\'s calorie and macro targets are computed from real formulas, not just guessed by the language model — the AI works from those numbers rather than inventing them.',
        },
        {
          title: 'Production-grade backend',
          body: 'Paired a Flask backend with PostgreSQL and a React.js frontend, and documented the REST API with Swagger/OpenAPI so the API surface is discoverable and testable independent of the frontend.',
        },
        {
          title: 'SaaS billing',
          body: 'Integrated the Razorpay Subscriptions API with webhook-driven billing, so renewals, upgrades, and failed payments are handled automatically rather than through manual reconciliation, plus token-based auth secured via Flask-Mail for account verification.',
        },
      ],
      challenges: [
        {
          title: 'SQLite write-locking under concurrency',
          body: 'The initial build used SQLite, which locks the entire database file on writes — fine for a single user, but it started failing under multiple simultaneous users hitting the meal-planning and billing endpoints at once. Migrated to PostgreSQL specifically to support real multi-user concurrent traffic without write contention.',
        },
        {
          title: 'Webhook reliability for billing',
          body: 'Subscription billing depends on webhooks firing correctly for renewal and failure events — if a webhook is missed or processed twice, a user could be double-charged or lose access incorrectly. Built the webhook handling to be idempotent so retries and out-of-order delivery don\'t corrupt subscription state.',
        },
      ],
      results: [
        { label: 'Architecture', value: 'SQLite → PostgreSQL for multi-user concurrency' },
        { label: 'Billing', value: 'Automated, webhook-driven Razorpay subscriptions' },
        { label: 'API', value: 'Fully Swagger/OpenAPI documented' },
      ],
      techStack: ['Flask', 'PostgreSQL', 'React.js', 'Gemini API', 'Razorpay Subscriptions API', 'Swagger UI', 'Flask-Mail'],
      links: [{ label: 'Visit Live Site', url: 'https://aichefbyte.netlify.app/' }],
    },
  },
  {
    slug: 'multi-sensor-activity-prediction',
    title: 'Multi-Sensor Activity & Intensity Prediction',
    role: 'MSc Research Thesis',
    year: '2025',
    image: '/projects/musclematrix.jpg',
    description:
      'Hybrid Deep Learning system (CNN-LSTM) for Human Activity Recognition (HAR) using UCI wearable sensor data. Classifies 6 physical activities and estimates workout intensity zones from raw accelerometer/gyroscope signals.',
    technologies: ['Python', 'TensorFlow (Keras)', 'Scikit-Learn', 'Hybrid CNN-LSTM', 'SciPy (Signal Processing)'],
    demoType: 'other',
    highlights: [
      'Achieved 91.11% accuracy with Hybrid CNN-LSTM, outperforming a Random Forest baseline (84.46%) by ~7%.',
      'Advanced signal preprocessing: Butterworth low-pass filtering and sliding-window segmentation.',
      'Dual-output logic correlating signal magnitude (SMA) with metabolic intensity levels.',
    ],
    caseStudy: {
      summary:
        'An MSc research thesis building a hybrid CNN-LSTM deep learning model for Human Activity Recognition (HAR) from wearable sensor data — classifying physical activities and estimating workout intensity from raw accelerometer and gyroscope signals, benchmarked against a classical ML baseline.',
      problem:
        'Wearable devices generate continuous, noisy time-series signals (accelerometer and gyroscope readings) that need to be translated into something useful: which activity is the person doing, and how intense is it. Classical machine learning models like Random Forest can classify activities reasonably well from hand-engineered features, but struggle to capture the temporal patterns in raw signal sequences the way a model designed for sequential data can.',
      constraints: [
        'Signals are noisy and sampled at high frequency — needed proper filtering before any modeling could be meaningful.',
        'Had to benchmark fairly against a classical baseline (Random Forest) to demonstrate the deep learning approach was actually worth the added complexity, not just novelty for its own sake.',
        'Needed a dual-output design: activity classification and intensity estimation from the same underlying signal pipeline.',
      ],
      approach: [
        {
          title: 'Signal preprocessing',
          body: 'Applied Butterworth low-pass filtering to remove high-frequency sensor noise, then used sliding-window segmentation to break the continuous signal stream into fixed-length windows suitable for both the classical and deep learning models — same preprocessing pipeline feeding both, for a fair comparison.',
        },
        {
          title: 'Hybrid architecture',
          body: 'Built a hybrid CNN-LSTM model using TensorFlow/Keras: the CNN layers extract local spatial patterns from each signal window (like the shape of a footstep in accelerometer data), while the LSTM layers model how those patterns evolve over time — combining the strengths of both architectures rather than relying on one alone.',
        },
        {
          title: 'Dual-output intensity estimation',
          body: 'Beyond classifying which of 6 activities was occurring, computed Signal Magnitude Area (SMA) from the raw signal and correlated it with metabolic intensity zones, giving the model a second output: not just "what" but "how hard."',
        },
        {
          title: 'Baseline comparison',
          body: 'Trained a Random Forest classifier on hand-engineered statistical features from the same windowed data as a baseline, to have a fair, like-for-like comparison of classical ML versus the hybrid deep learning approach.',
        },
      ],
      challenges: [
        {
          title: 'Noisy raw sensor data',
          body: 'Raw accelerometer/gyroscope data is full of high-frequency jitter that isn\'t related to the actual activity. Filtering had to remove that noise without smoothing away the genuine signal differences between activities like walking versus running.',
        },
        {
          title: 'Justifying model complexity',
          body: 'A CNN-LSTM hybrid is significantly more complex to train and tune than a Random Forest. The thesis had to empirically demonstrate the accuracy gain was real and not just from overfitting — validated on held-out UCI benchmark data.',
        },
      ],
      results: [
        { label: 'Hybrid CNN-LSTM accuracy', value: '91.11%' },
        { label: 'Random Forest baseline', value: '84.46%' },
        { label: 'Improvement', value: '~7% accuracy gain from the hybrid approach' },
      ],
      techStack: ['Python', 'TensorFlow (Keras)', 'Scikit-Learn', 'CNN-LSTM', 'SciPy', 'UCI HAR Dataset'],
    },
  },
  {
    slug: 'harmony-minds',
    title: 'Harmony Minds',
    role: 'Collaborative Project',
    year: '2024',
    image: '/projects/harmonyminds.jpg',
    description:
      'Music & mental health integration utilizing the Spotify API and OAuth for data-driven wellness insights and mood tracking.',
    technologies: ['Flask', 'SQL', 'Spotify API', 'React', 'OAuth 2.0'],
    liveLink: 'https://spotifyharmonyminds.netlify.app/',
    demoType: 'other',
    highlights: ['Spotify OAuth & webhooks', 'Real-time data handling', 'SQL schema design'],
    caseStudy: {
      summary:
        'A collaborative project connecting music listening habits to mental wellness — using the Spotify API and OAuth to pull real listening data and surface it as mood-tracking and wellness insights, rather than asking users to manually log how they feel.',
      problem:
        'Most mood-tracking apps rely entirely on manual self-reporting, which people stop doing after a few days. The idea behind Harmony Minds was that listening behavior — genre shifts, tempo, replay patterns — already carries a signal about mood and energy, if it can be reliably captured and connected to a simple wellness view.',
      constraints: [
        'Had to authenticate securely against a real third-party API (Spotify) using OAuth 2.0, not a mocked data source.',
        'Needed a relational schema that could relate a user, their listening sessions, and derived wellness metrics without becoming unwieldy.',
        'Real-time-ish data handling was required so insights reflected recent listening, not a stale daily batch.',
      ],
      approach: [
        {
          title: 'Spotify OAuth integration',
          body: 'Implemented the OAuth 2.0 authorization code flow against the Spotify API, handling token exchange and refresh so the app could pull a user\'s listening history and currently-playing data without ever handling their Spotify password directly.',
        },
        {
          title: 'Schema design',
          body: 'Designed a SQL schema in Flask relating users to their listening sessions and derived metrics, structured to support querying trends over time (e.g. genre/tempo shifts across a week) rather than just storing a flat event log.',
        },
        {
          title: 'React frontend',
          body: 'Built the frontend in React to visualize listening trends and connect them to simple wellness prompts, translating raw API data into something a user could actually read and reflect on.',
        },
      ],
      challenges: [
        {
          title: 'Token refresh & webhook handling',
          body: 'OAuth access tokens expire and need silent refresh without interrupting the user session — handled the refresh-token flow and webhook-driven updates so the data stayed current without requiring the user to constantly re-authenticate.',
        },
      ],
      results: [
        { label: 'Data source', value: 'Live Spotify listening history via OAuth' },
        { label: 'Output', value: 'Mood/wellness insights from real behavior, not self-report' },
      ],
      techStack: ['Flask', 'SQL', 'Spotify API', 'React', 'OAuth 2.0'],
      links: [{ label: 'Visit Live Site', url: 'https://spotifyharmonyminds.netlify.app/' }],
    },
  },
  {
    slug: 'sales-dashboard',
    title: 'Sales Dashboard',
    role: 'Data Analyst',
    year: '2024',
    image: '/projects/salesdashboard.jpg',
    description:
      'Interactive Power BI dashboard tracking sales, cost, and profit across regions with KPI visualization and trend analysis.',
    technologies: ['Power BI', 'Data Viz', 'DAX', 'Analytics', 'Excel'],
    demoType: 'other',
    highlights: ['Multi-dimensional viz', 'Interactive filtering', 'Business insight generation'],
    caseStudy: {
      summary:
        'An interactive Power BI dashboard turning raw sales records into a filterable, multi-dimensional view of revenue, cost, and profit across regions — built to answer "where is the business actually making money" faster than scrolling through spreadsheets.',
      problem:
        'Raw sales data in spreadsheets is hard to interrogate quickly — answering a question like "which region\'s profit margin dropped last quarter" means manually filtering and cross-referencing multiple sheets. The goal was a single dashboard where that kind of question could be answered in seconds via interactive filtering, not a fresh pivot table each time.',
      approach: [
        {
          title: 'Data modeling',
          body: 'Structured the underlying sales data with DAX measures for revenue, cost, and profit so the dashboard could compute derived metrics dynamically rather than relying on pre-calculated static columns.',
        },
        {
          title: 'Multi-dimensional views',
          body: 'Built visualizations that let a viewer slice the same underlying data by region, time period, and product category simultaneously, so trend and comparison questions could be answered without leaving the dashboard.',
        },
        {
          title: 'Interactive filtering',
          body: 'Added cross-filtering so clicking a region or category on one chart automatically updates every other visual on the dashboard — turning it into an exploratory tool rather than a static report.',
        },
      ],
      challenges: [
        {
          title: 'Balancing detail with clarity',
          body: 'Sales data has many possible dimensions (region, product, time, channel) — the challenge was choosing which cuts to expose as interactive filters versus which would just add clutter, so the dashboard stayed usable rather than overwhelming.',
        },
      ],
      results: [
        { label: 'Format', value: 'Fully interactive, cross-filterable dashboard' },
        { label: 'Metrics tracked', value: 'Revenue, cost, profit across regions' },
      ],
      techStack: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
    },
  },
  {    
    slug: 'd-waffle-story',
    title: 'D Waffle Story',
    role: 'Freelance Full Stack Developer',
    year: '2026',
    image: '/projects/waffle.jpg',
    description:
      'QR-based digital menu platform for a local food business, replacing static printed menus with an admin panel for real-time dish, pricing, and availability updates.',
    technologies: ['React.js', 'FastAPI', 'MongoDB Atlas', 'Cloudinary', 'JWT'],
    demoType: 'other',
    highlights: [
      'Migrated auth from tokens to HttpOnly cookie sessions with CSRF double-submit protection across a cross-origin deployment.',
      'Resolved a production-breaking motor–pymongo dependency conflict.',
      'Multi-tenant-ready schema with an analytics pipeline for dish views & peak traffic hours.',
    ],
    caseStudy: {
      summary:
        'A QR-based digital menu built freelance for a local waffle shop — simple in concept, but it surfaced real infrastructure problems: cross-origin auth, cookie security, and a dependency conflict that broke production.',
      problem:
        'The client was reprinting menus every time a price changed or a dish sold out. They needed a live QR menu, plus an admin panel the non-technical owner could update herself.',
      constraints: [
        'Admin panel had to be usable without training.',
        'Frontend and backend deployed separately (cross-origin), complicating session auth.',
        'Fast turnaround — a small business, not a long build cycle.',
      ],
      approach: [
        {
          title: 'Initial build',
          body: 'React.js + FastAPI + MongoDB Atlas, starting with token-based auth for the admin panel — fast to ship first.',
        },
        {
          title: 'Security migration',
          body: 'Client-side-accessible tokens were an XSS risk. Migrated to HttpOnly cookie sessions with CSRF double-submit protection — the browser handles the session, JavaScript never touches it.',
        },
        {
          title: 'Analytics layer',
          body: 'Multi-tenant-ready schema plus a pipeline tracking dish views and peak hours — visibility the owner never had with a printed menu.',
        },
      ],
      challenges: [
        {
          title: 'Cross-origin cookies',
          body: 'SameSite=None + Secure flags are required across origins, with real browser quirks and HTTPS needed even locally. Solved through direct cross-browser testing, not just docs.',
        },
        {
          title: 'CSRF without friction',
          body: 'HttpOnly cookies block token theft but need a separate CSRF strategy. Implemented double-submit tokens — cookie and header must match — with zero added steps for the owner.',
        },
        {
          title: 'Dependency conflict in production',
          body: 'A motor/pymongo version mismatch broke the live app after a routine update. Diagnosed the pin, fixed it, and locked requirements to stop it recurring.',
        },
      ],
      results: [
        { label: 'Menu updates', value: 'Reprint cycle → real-time, self-serve' },
        { label: 'Security posture', value: 'Tokens → HttpOnly + CSRF-protected sessions' },
        { label: 'Architecture', value: 'Multi-tenant-ready for future restaurants' },
      ],
      techStack: ['React.js', 'FastAPI', 'MongoDB Atlas', 'Cloudinary', 'JWT → HttpOnly cookies', 'CSRF double-submit'],
    },
  },
  {
    slug: 'itz-me-official',
    title: "IT'Z ME Official",
    role: 'Freelance Full Stack Developer',
    year: '2025-26',
    image: '/projects/itzme.jpg',
    liveLink: 'https://itz-me.com/',
    description:
      'Scalable full-stack e-commerce platform for a fashion retail brand, deployed on AWS EC2 with Cloudinary CDN and Razorpay checkout.',
    technologies: ['React.js', 'Flask', 'MongoDB', 'AWS EC2', 'Cloudinary', 'Razorpay'],
    demoType: 'other',
    highlights: [
      'MongoDB inventory system with atomic updates for size-variant stock, preventing overselling.',
      'HMAC SHA256 server-side verified Razorpay checkout.',
      'Reduced shipping errors by ~40% with a smarter checkout flow.',
    ],
    caseStudy: {
      summary:
        'A full e-commerce platform for a fashion retail brand — storefront, inventory, payments, deployment. Two problems worth digging into: overselling on size-variant stock, and a checkout flow causing real shipping errors.',
      problem:
        'The client needed a real store, not a template — sizing (S/M/L/XL) that couldn\'t oversell a size down to its last unit, and a checkout that reliably captured size, address, and payment. Their manual process was already causing shipping mistakes.',
      constraints: [
        'Size-level stock, not just product-level — naive decrements risk race conditions.',
        'Payments needed server-side verification, not client-reported trust.',
        'Cost-effective infrastructure for a small business.',
      ],
      approach: [
        {
          title: 'Architecture',
          body: 'React.js + Flask + MongoDB, deployed on AWS EC2 for cost control, Cloudinary handling image CDN so product photos load fast.',
        },
        {
          title: 'Inventory system',
          body: "MongoDB's atomic update operators (findOneAndUpdate with conditional filters) — a size's stock only decrements if enough exists at the moment of the write, eliminating the race window entirely.",
        },
        {
          title: 'Payment verification',
          body: "Server-side HMAC SHA256 signature verification on every Razorpay callback — the backend recomputes the signature independently and only confirms if it matches, closing the gap where a client could fake a 'payment successful' response.",
        },
      ],
      challenges: [
        {
          title: 'Overselling under load',
          body: "Read-then-write stock checks leave a race window — two customers can both pass the check for the last unit. Solved with atomic conditional writes instead.",
        },
        {
          title: 'Shipping errors from checkout gaps',
          body: 'Orders were going through with mismatched size/address data. Rebuilt checkout with stricter validation and tighter coupling to what actually reaches the order record.',
        },
      ],
      results: [
        { label: 'Shipping errors', value: '~40% reduction' },
        { label: 'Overselling incidents', value: 'Eliminated via atomic stock updates' },
        { label: 'Payment integrity', value: 'Server-side HMAC SHA256 on every transaction' },
      ],
      techStack: ['React.js', 'Flask', 'MongoDB', 'AWS EC2', 'Cloudinary', 'Razorpay API', 'HMAC SHA256'],
    },
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
