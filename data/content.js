// =============================================================
//  CENTRAL CONTENT FILE
//  Edit this file to update your portfolio. Component code does
//  not need to change. Push → Vercel auto-deploys.
// =============================================================

export const profile = {
  name: "Amar Gupta",
  title: "Software Development Engineer 2",
  subtitle: "AI-Native Engineer · Platform Engineering",
  location: "Mumbai, India",
  email: "amarg4812@gmail.com",
  phone: "+91 8446708718",
  linkedin: "https://www.linkedin.com/in/amargupta-engg",
  github: "https://github.com/amargupta-engg",
  resumeUrl: "/Amar_Gupta_Resume.pdf",
  photo: "/images/profile.png",
  tagline:
    "I build autonomous AI systems that compress engineering toil into pipelines.",
};

export const about = [
  "I'm a Software Development Engineer 2 at Fynd (Jio Commerce Platform), where I build the multi-tenant Storefront Platform and Headless CMS that powers commerce experiences for AJIO, JioMart, Tira, Netmeds, Reliance Digital, SHEIN, Swadesh, and Urban Ladder.",
  "My focus sits at the intersection of platform engineering, distributed systems, and LLM-driven automation. I designed Dr. Nexus — a 7-step autonomous AI agent that takes production Sentry alerts all the way to merged PRs with zero manual intervention.",
  "I work AI-native by default. Cursor, Claude, and OpenAI APIs aren't side tools — they're part of how I design, debug, review, and ship. I measure productivity in features and reliability, not lines of code.",
];

export const projects = [
  {
    name: "Dr. Nexus",
    tagline: "Autonomous Sentry-to-PR AI Agent",
    description:
      "A 7-step agentic AI pipeline that takes production Sentry alerts to merged pull requests with zero manual intervention. Orchestrates Sentry, Jira, Cursor, Claude, OpenAI APIs, and LangChain with structured validation, idempotency, and human-in-the-loop review gates.",
    stack: ["Claude", "OpenAI API", "LangChain", "Sentry", "Jira API", "Node.js"],
    link: "https://github.com/amargupta-engg/Jira-AI-Agent",
    linkLabel: "View on GitHub",
    highlight: true,
    metrics: [
      { value: "7", label: "Step Pipeline" },
      { value: "0", label: "Manual Steps" },
      { value: "5+", label: "Services" },
    ],
  },
  {
    name: "Section Maker-Checker",
    tagline: "Real-Time Collaborative CMS Workflow",
    description:
      "Designed a Maker-Checker publishing workflow with WebSocket-based real-time locking and a sequential merging algorithm to handle multi-user concurrent edits. Ensures deterministic merge order and conflict-free publishing on production storefronts.",
    stack: ["Node.js", "WebSockets", "MongoDB", "Vue.js"],
    link: null,
    highlight: false,
  },
  {
    name: "Marketplace Sync Engine",
    tagline: "High-Availability Inventory Integrations",
    description:
      "Built marketplace integration extensions spanning Amazon, Flipkart, Myntra, Tata Cliq, and Tata Cliq Luxe. Architected inventory sync favoring high availability over strict consistency with eventual-consistency guarantees, keeping listings live under heavy concurrent load.",
    stack: ["Node.js", "Kafka", "Redis", "MongoDB", "REST APIs"],
    link: null,
    highlight: false,
  },
  {
    name: "Predicate Hashing",
    tagline: "Query Optimization at Scale",
    description:
      "Engineered a hashing-based indexing solution converting dynamic multi-predicate conditions into deterministic hash keys, enabling single-index lookups. Significantly reduced query execution time on large-scale datasets under high-traffic workloads.",
    stack: ["MongoDB", "Node.js", "Algorithm Design"],
    link: null,
    highlight: false,
  },
  {
    name: "jira-cli & sentry-cli",
    tagline: "Internal Developer Tools",
    description:
      "Built CLI tools automating Jira reporting, evidence collection, and Sentry triaging via live APIs. Reduced repetitive operational work team-wide and improved transparency on engineering metrics.",
    stack: ["Node.js", "Jira API", "Sentry API"],
    link: null,
    highlight: false,
  },
];

export const techStack = {
  "AI / LLM": [
    "OpenAI API",
    "Claude API",
    "Vertex AI",
    "LangChain",
    "Agentic Workflows",
    "Cursor",
    "Claude Code",
    "GitHub Copilot",
  ],
  Frontend: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  "Backend & Data": [
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "Redis",
    "PostgreSQL",
    "Kafka",
    "WebSockets",
  ],
  "Infra & DevOps": [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "REST APIs",
    "SSR",
  ],
  Observability: ["Sentry", "Prometheus", "Grafana", "Coralogix", "New Relic"],
  Practices: [
    "TDD",
    "System Design",
    "Distributed Systems",
    "Multi-tenant Platforms",
    "Performance Optimization",
  ],
};

export const experience = [
  {
    role: "Software Development Engineer 2",
    company: "Fynd (Jio Commerce Platform)",
    period: "Apr 2026 – Present",
    current: true,
    summary:
      "Driving platform-level architectural decisions across Storefront, CMS, and Marketplace Integrations. Built Dr. Nexus AI agent. Lead AI-native engineering adoption.",
  },
  {
    role: "Software Development Engineer",
    company: "Fynd (Jio Commerce Platform)",
    period: "Nov 2021 – Mar 2026",
    current: false,
    summary:
      "Core contributor to the multi-tenant Storefront Platform & Headless CMS. Built Section Maker-Checker with real-time locking, marketplace integrations, Search/SEO infrastructure, and led Vue→React migration with 70–80% dev-time reduction.",
  },
  {
    role: "Graduate Software Development Engineer",
    company: "Fynd (Jio Commerce Platform)",
    period: "Aug 2021 – Oct 2021",
    current: false,
    summary:
      "Onboarded onto Storefront Platform team, shipped production features, earning a full-time promotion.",
  },
  {
    role: "Full Stack Developer",
    company: "Self-Employed",
    period: "Dec 2019 – Mar 2021",
    current: false,
    summary:
      "Built MERN-stack applications, business portals, and e-commerce solutions with end-to-end REST APIs.",
  },
];

export const awards = [
  {
    title: "Fynd Star",
    meta: "Awarded Twice",
    description:
      "Recognized twice for exceptional performance, ownership, and significant contributions to high-impact platform initiatives at Fynd.",
  },
  {
    title: "AJIO CMS Launch Recognition",
    meta: "Manager Recognition",
    description:
      "Delivered the AJIO CMS module on a tight timeline, enabling smooth launch of live pages and ongoing onboarding to core Fynd platform services.",
  },
];

export const brands = [
  "AJIO",
  "JioMart",
  "Tira",
  "Netmeds",
  "Reliance Digital",
  "SHEIN",
  "Swadesh",
  "Urban Ladder",
];
