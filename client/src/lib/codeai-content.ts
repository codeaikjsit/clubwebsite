/* Repository-grounded content source: edit this file to update visible CodeAI copy, event details, and team information. */

export function withBase(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base + cleanPath : base + "/" + cleanPath;
}

const rawCodeaiImages = {
  mark: "/codeai-logo-white.png",
  hero: "/events/report-writing-2.jpg",
  epochPoster: "/events/epoch-poster.jpg",
  appDevelopment: "/events/app-dev-1.jpg",
  appDev1: "/events/app-dev-1.jpg",
  appDev2: "/events/app-dev-2.png",
  appDev3: "/events/app-dev-3.png",
  appDev4: "/events/app-dev-4.png",
  community:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  levelUp1: "/events/level-up-1.jpg",
  levelUp2: "/events/level-up-2.jpg",
  levelUp3: "/events/level-up-3.jpg",
  levelUp4: "/events/level-up-4.jpg",
  levelUp5: "/events/level-up-5.jpg",
  reportWriting1: "/events/report-writing-1.jpg",
  reportWriting2: "/events/report-writing-2.jpg",
  reportWriting3: "/events/report-writing-3.jpg",
  reportWriting4: "/events/report-writing-4.jpg",
};

export const codeaiImages: typeof rawCodeaiImages = Object.fromEntries(
  Object.entries(rawCodeaiImages).map(([key, val]) => [key, withBase(val)])
) as typeof rawCodeaiImages;

export type EventItem = {
  id: string;
  month: string;
  day: string;
  year: string;
  date: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: "lime" | "coral" | "blue";
  kind: "hackathon" | "workshop" | "community";
  time: string;
  venue: string;
  format: string;
  agenda: string[];
  eligibility: string;
};

export const siteContent = {
  socials: {
    github: "https://github.com/vedanthundare/CodeAI",
    linkedin: "https://www.linkedin.com/company/code-ai-kjsit/",
    instagram: "https://www.instagram.com/codeai.kjsit/",
  },
  brand: {
    name: "CodeAI",
    department: "Computer Engineering",
    institute: "KJ Somaiya Institute of Technology",
    shortInstitute: "KJSIT",
    location: "Sion — Mumbai 400 022",
    email: "codeai@kjsit.edu.in",
    activeSince: "2023",
    coordinates: "K J Somaiya Institute of Technology, Mumbai",
  },
  nav: [
    { number: "01", label: "HOME", href: "/" },
    { number: "02", label: "EVENTS", href: "/events" },
    { number: "03", label: "HACKATHON", href: "/hackathon" },
    { number: "04", label: "ABOUT US", href: "/about" },
  ],
  hero: {
    kicker: "CodeAI / AI & Machine Learning Club",
    titleLines: ["CodeAI", "", ""],
    lede: "A space for curious minds to explore what’s next in technology, connect with the people shaping it, and turn ideas into something real. We create experiences that spark curiosity, encourage experimentation, and bring innovation closer to the student community.",
    footnote: "Be greater, be greater together",
    imageAlt: "Students collaborating in a computer engineering lab",
    captionLeft: "CodeAI / KJSIT",
    sideNote: "Creativity · Technology",
  },
  principles: [
    { icon: "code", label: "AI enthusiasts" },
    { icon: "zap", label: "Hands-on learning" },
    { icon: "users", label: "Real-world projects" },
  ],
  about: {
    kicker: "About us / CodeAI",
    title: ["Creativity meets", "technology."],
    intro:
      "We are a community built around curiosity, technology, and the drive to create. Our club brings students together to explore emerging ideas, learn from people working at the forefront of the industry, and discover possibilities beyond the classroom.",
    experiences:
      "Through a diverse range of experiences, we create opportunities to learn, collaborate, experiment, and challenge what’s possible. From conversations with industry leaders to spaces where students can build and compete, we aim to turn interest into action and ideas into impact.",
    coreBelief:
      "At our core, we believe technology is best understood by experiencing it — by asking questions, meeting people, building things, and being willing to try something new. We’re here to create that space.",
  },
  upcoming: {
    number: "01",
    railLabel: "Upcoming event",
    kicker: "CodeAI Club Hackathon",
    title: ["Epoch 1.0", "Collaborative Problem-Solving"],
    description:
      "Epoch 1.0 is an 8-hour, hands-on hackathon where selected student teams will work on real-world problem statements across multiple technical tracks and domains.",
    note: "8-hour hackathon · 3rd October 2026 · KJSIT",
  },
  hackathon: {
    eyebrow: "CodeAI Club Hackathon",
    title: "Epoch 1.0",
    theme: "",
    intro:
      "Epoch 1.0 is an 8-hour, hands-on hackathon by the CodeAI Club. Selected student teams will work on real-world problem statements across multiple technical tracks. The event features a unique format: a 4-hour build phase, an intervening mentorship round, and a final 4-hour build phase.",
    date: "3rd October 2026",
    venue: "KJSIT",
    countdownTarget: "2026-10-03T08:00:00+05:30",
    countdownLabel: "",
    projectorStart: "2026-10-03T08:00:00+05:30",
    projectorDurationHours: 12,
    tracks: [
      {
        number: "01",
        title: "AI & Machine Learning",
        description: "Develop intelligent algorithms, models, and autonomous AI systems.",
        domains: [
          "Generative AI",
          "Computer Vision",
          "Natural Language Processing",
          "Predictive Analytics",
          "Recommendation Systems",
          "AI Agents & Automation",
          "Speech & Audio AI",
          "Multimodal AI",
        ],
      },
      {
        number: "02",
        title: "Cybersecurity & Digital Trust",
        description: "Build solutions for data protection, threat intelligence, and digital security.",
        domains: [
          "Phishing & Fraud Detection",
          "Network Security",
          "Identity & Access Management",
          "Privacy & Data Protection",
          "Digital Forensics",
          "Secure Software",
          "Cyber Threat Intelligence",
          "Deepfake Detection",
        ],
      },
      {
        number: "03",
        title: "Education & Accessibility",
        description: "Transform learning experiences, accessibility tools, and skill development.",
        domains: [
          "Personalized Learning",
          "AI Tutors",
          "Gamified Learning",
          "Assessment & Evaluation",
          "Language Learning",
          "Accessibility Technology",
          "Assistive Technology",
          "Career & Skill Development",
        ],
      },
      {
        number: "04",
        title: "Sustainability & Environment",
        description: "Innovate for climate monitoring, renewable energy, and ecological impact.",
        domains: [
          "Waste Management",
          "Water Conservation",
          "Renewable Energy",
          "Carbon Footprint",
          "Climate Monitoring",
          "Pollution Detection",
          "Sustainable Agriculture",
          "Disaster Management",
        ],
      },
      {
        number: "05",
        title: "Finance & Business",
        description: "Create financial tech, business analytics, and e-commerce innovations.",
        domains: [
          "FinTech",
          "Fraud Detection",
          "Personal Finance",
          "Financial Inclusion",
          "E-commerce",
          "Business Analytics",
          "Supply Chain",
          "Customer Intelligence",
        ],
      },
      {
        number: "06",
        title: "Agriculture & Rural Innovation",
        description: "Empower farming with crop monitoring, smart irrigation, and robotics.",
        domains: [
          "Crop Monitoring",
          "Disease & Weed Detection",
          "Smart Irrigation",
          "Agricultural Robotics",
          "Weather Intelligence",
          "Supply Chain & Market Access",
          "Soil Analysis",
          "Farmer Assistance",
        ],
      },
      {
        number: "07",
        title: "Blockchain & Web3",
        description: "Develop decentralized applications, smart contracts, and web3 infrastructure.",
        domains: [
          "Digital Identity",
          "Credential Verification",
          "Supply Chain",
          "Decentralized Applications",
          "Digital Ownership",
          "Secure Transactions",
          "Decentralized Storage",
          "Smart Contracts",
        ],
      },
      {
        number: "08",
        title: "Open Innovation",
        description: "Open-ended category for groundbreaking ideas across software and hardware.",
        domains: [
          "Interdisciplinary Solutions",
          "Novel Software Frameworks",
          "Emerging Tech Concepts",
          "Cross-domain Innovation",
        ],
      },
    ],
    timeline: [
      { time: "08:00", label: "Registration & Opening" },
      { time: "09:00", label: "Build Phase I — 4 hours" },
      { time: "13:00", label: "Mentorship Round" },
      { time: "14:00", label: "Build Phase II — 4 hours" },
      { time: "18:00", label: "Submission, Evaluation & Closing" },
    ],
    judging: ["Problem Understanding & Relevance", "Innovation & Creativity", "Technical Implementation", "Impact & Practicality", "UX / Product Quality", "Presentation & Demo"],
    rewards:
      "Top teams receive certificates, recognition, and showcase opportunities.",
    sponsors: [
      {
        name: "Title sponsor",
        shortName: "TS",
        detail: "Partner logo placeholder",
      },
      {
        name: "Technology partner",
        shortName: "TP",
        detail: "Partner logo placeholder",
      },
      {
        name: "Community partner",
        shortName: "CP",
        detail: "Partner logo placeholder",
      },
      {
        name: "Knowledge partner",
        shortName: "KP",
        detail: "Partner logo placeholder",
      },
    ],
  },
  events: [
    {
      id: "epoch-1-0",
      month: "OCT",
      day: "03",
      year: "2026",
      date: "3rd October 2026",
      eyebrow: "CodeAI Club Hackathon",
      title: "Epoch 1.0",
      description:
        "An 8-hour hackathon where student teams work on real-world problem statements. Features a 4-hour build phase, a mentorship round, and a final 4-hour build phase.",
      image: codeaiImages.epochPoster,
      accent: "lime",
      kind: "hackathon",
      time: "8-hour challenge",
      venue: "KJSIT",
      format: "In-person",
      agenda: [
        "4-hour initial build phase",
        "Mentorship round for feedback",
        "4-hour final build and presentation",
      ],
      eligibility:
        "Selected student teams. The official event information lists rules and deliverables.",
    },
  ] satisfies EventItem[],
  archive: {
    number: "02",
    railLabel: "Events archive",
    kicker: "Previously conducted / event gallery",
    title: ["Our", "EVENTS"],
    count: "03",
    countLabel: "event series",
    events: [
      {
        index: "01",
        year: "AUG 2026",
        category: "Workshop",
        title: "Mastering Report Writing",
        description: "From Information to Impact: Mastering Report Writing workshop by Dr. Pradnya Patil.",
        image: codeaiImages.reportWriting2,
        tag: "CodeAI Workshop",
      },
      {
        index: "02",
        year: "APR 2025",
        category: "24 Hours Hackathon",
        title: "LEVEL-UP Hackathon",
        description: "24 Hours Offline Hackathon organized by CodeAI and IETE.",
        image: codeaiImages.levelUp4,
        tag: "CodeAI x IETE event",
      },
      {
        index: "03",
        year: "FEB 2025",
        category: "App Development",
        title: "App Development",
        description: "Event gallery from the CodeAI App Development series.",
        image: codeaiImages.appDev1,
        tag: "CodeAI event",
      },
    ],
  },
  people: {
    number: "03",
    railLabel: "Team",
    kicker: "Brains behind the code",
    title: ["Core", "Subcore", "Members"],
    description:
      "Be greater, be greater together. Meet the students coordinating CodeAI’s community, events, publicity, digital media, and technical work.",
    coreLabel: "Core",
    subcoreLabel: "Subcore",
    membersLabel: "Members",
    core: [
      {
        name: "Shravan Kadam",
        role: "Chairperson",
        initials: "SK",
        tone: "lime",
        linkedin: "",
        instagram: "shravan_kadam5",
      },
      {
        name: "Atharv Gangrade",
        role: "Vice Chairperson",
        initials: "AG",
        tone: "coral",
        linkedin: "",
        instagram: "atharv_gangrade27",
      },
      {
        name: "Manasvi Chauhan",
        role: "Secretary",
        initials: "MC",
        tone: "blue",
        linkedin: "",
        instagram: "mannassviiiiiiii",
      },
      {
        name: "Shreya Boda",
        role: "COO",
        initials: "SB",
        tone: "cream",
        linkedin: "",
        instagram: "_shreya._a",
      },
      {
        name: "Akash Das",
        role: "CEO",
        initials: "AD",
        tone: "lime",
        linkedin: "",
        instagram: "akash_das006",
      },
      {
        name: "Jay Chauhan",
        role: "CFO",
        initials: "JC",
        tone: "coral",
        linkedin: "",
        instagram: "__jaychauhan__7",
      },
      {
        name: "Varuni Deshmukh",
        role: "CMO",
        initials: "VD",
        tone: "blue",
        linkedin: "",
        instagram: "varunideshmukh_",
      },
      {
        name: "Niharika Maurya",
        role: "CTO",
        initials: "NM",
        tone: "cream",
        linkedin: "",
        instagram: "nihariikaa.m",
      },
      {
        name: "Arth Dixit",
        role: "DMM",
        initials: "AD",
        tone: "lime",
        linkedin: "",
        instagram: "arthdixit_",
      },
      {
        name: "Sukhdev Hathiyani",
        role: "PRO",
        initials: "SH",
        tone: "coral",
        linkedin: "",
        instagram: "sukhdev_b_hathiyani",
      },
      {
        name: "Ishan Bhavsar",
        role: "CAO",
        initials: "IB",
        tone: "blue",
        linkedin: "",
        instagram: "ishanbhavsar_",
      },
    ],
    subcore: [
      {
        name: "Sankalp Mehtre",
        role: "Org Admin",
        domain: "organising",
        initials: "SM",
        tone: "blue",
        linkedin: "",
        instagram: "",
      },
      {
        name: "Ayush Shivdikar",
        role: "Org Jt. Admin",
        domain: "organising",
        initials: "AS",
        tone: "coral",
        linkedin: "",
        instagram: "ayushshivdikar",
      },
      {
        name: "Jaiganesh Nadar",
        role: "Tech Admin",
        domain: "technical",
        initials: "JN",
        tone: "lime",
        linkedin: "",
        instagram: "",
      },
      {
        name: "Ajay Bhakar",
        role: "Tech Jt. Admin",
        domain: "technical",
        initials: "AB",
        tone: "cream",
        linkedin: "",
        instagram: "",
      },
      {
        name: "Swarup Santosh Patil",
        role: "Marketing Admin",
        domain: "marketing",
        initials: "SP",
        tone: "blue",
        linkedin: "",
        instagram: "swaruppp.16",
      },
      {
        name: "Mohammed Muzzammil Dagli",
        role: "Marketing Jt. Admin",
        domain: "marketing",
        initials: "MD",
        tone: "coral",
        linkedin: "",
        instagram: "",
      },
      {
        name: "Teerth Patil",
        role: "Marketing Jt. Admin",
        domain: "marketing",
        initials: "TP",
        tone: "cream",
        linkedin: "",
        instagram: "teerthpatil__",
      },
      {
        name: "Nikesh Hingu",
        role: "Creative Admin",
        domain: "creative",
        initials: "NH",
        tone: "lime",
        linkedin: "",
        instagram: "_nikessh",
      },
      {
        name: "Ayush Gyan Singh",
        role: "Creative Jt. Admin",
        domain: "creative",
        initials: "AS",
        tone: "cream",
        linkedin: "",
        instagram: "",
      },
      {
        name: "Mahi Khati",
        role: "PR Admin",
        domain: "pr",
        initials: "MK",
        tone: "blue",
        linkedin: "",
        instagram: "",
      },
    ],
    members: [
      {
        name: "Sarth Jain",
        role: "Org Member",
        domain: "organising",
        initials: "SJ",
        tone: "lime",
        instagram: "sarthh.j",
        linkedin: "",
      },
      {
        name: "Patel Ujjval Dharmendra",
        role: "Tech Member",
        domain: "technical",
        initials: "PU",
        tone: "blue",
        instagram: "ujjval.singh_0867",
        linkedin: "",
      },
      {
        name: "Yash Ramchandra Panigrahi",
        role: "Tech Member",
        domain: "technical",
        initials: "YP",
        tone: "coral",
        instagram: "panigrahi_yash_48",
        linkedin: "",
      },
      {
        name: "Yash Khandar",
        role: "Tech Member",
        domain: "technical",
        initials: "YK",
        tone: "cream",
        instagram: "yash_khandar12",
        linkedin: "",
      },
      {
        name: "Kaustubh Rajesh Sinha",
        role: "Marketing Member",
        domain: "marketing",
        initials: "KS",
        tone: "lime",
        instagram: "sinha.ji_krs",
        linkedin: "",
      },
      {
        name: "Saish Maniyar",
        role: "Marketing Member",
        domain: "marketing",
        initials: "SM",
        tone: "blue",
        instagram: "saish_maniyar",
        linkedin: "",
      },
      {
        name: "Keval Bharadwa",
        role: "Creative Member",
        domain: "creative",
        initials: "KB",
        tone: "coral",
        instagram: "keval_2917",
        linkedin: "",
      },
      {
        name: "Henvi Damani",
        role: "Creative Member",
        domain: "creative",
        initials: "HD",
        tone: "cream",
        instagram: "_.henvii._",
        linkedin: "",
      },
      {
        name: "Hrishikesh Jadav",
        role: "PR Member",
        domain: "pr",
        initials: "HJ",
        tone: "lime",
        instagram: "",
        linkedin: "",
      },
    ],
  },
  faculty: {
    label: "Faculty coordinators",
    quote:
      "Faculty coordinator details are not listed in the supplied repository.",
    note: "Add the official faculty coordinator names and roles here when they are confirmed.",
    people: [] as {
      name: string;
      role: string;
      initials: string;
      tone: "ink" | "coral";
    }[],
  },
  cta: {
    kicker: "Join us / CodeAI",
    title: ["Join the", "community."],
    description:
      "Join CodeAI and take part in a structured, collaborative, hands-on learning experience in AI and machine learning.",
    linkLabel: "JOIN US",
    formUrl: "https://linktr.ee/codeai.kjsit",
  },
};
