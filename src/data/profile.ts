export const profile = {
  name: "Peter Mwangi",
  location: "Nairobi, Kenya",
  availability: "Remote",
  email: "petrasmwash1@gmail.com",
  phone: "+254 799 397 003",
  phoneHref: "tel:+254799397003",
  github: "https://github.com/PETERMWASH286",
  linkedin: "https://www.linkedin.com/in/peter-mwangi-152420292",
  x: "https://x.com/petrasmwash",
  cv: "/peter-mwangi-cv.pdf",
} as const;

export const sections = [
  { id: "top", label: "Intro", frame: "01" },
  { id: "work", label: "Work", frame: "02" },
  { id: "methods", label: "Methods", frame: "03" },
  { id: "studio", label: "Studio", frame: "04" },
  { id: "practice", label: "Practice", frame: "05" },
  { id: "contact", label: "Contact", frame: "06" },
] as const;

export const nav = sections.filter((section) => section.id !== "top");

export const reel = [
  "Software engineering",
  "AI evaluation",
  "Photography",
  "Photo editing",
  "Image labeling",
  "Visual grounding",
  "API design",
  "Technical writing",
  "Rubric scoring",
  "Remote delivery",
] as const;

export const proof = [
  {
    figure: "35%",
    title: "Reported API latency reduction",
    detail: "Redis prompt caching on an LLM gateway. Kept as a reported figure, not a slogan.",
  },
  {
    figure: "8+",
    title: "Clinical and administrative workflows",
    detail: "AstroCare HMIS — registration through pharmacy, with tenant separation.",
  },
  {
    figure: "2023–25",
    title: "Software engineer, AstroByte",
    detail: "Healthcare, education, and operations platforms in production.",
  },
  {
    figure: "2024",
    title: "BSc Computer Science",
    detail: "Kenyatta University. Systems, databases, and AI fundamentals.",
  },
] as const;

export const experience = [
  "Built and improved software across healthcare, education, and operations platforms using Go, Python, TypeScript, React, Next.js, PostgreSQL, and MySQL.",
  "Designed APIs, role-based access controls, and tenant data separation for sensitive records.",
  "Investigated issues, tested fixes, documented behavior, and supported deployment with Docker, Nginx, Git, and CI/CD.",
  "Integrated external services and AI-enabled components, checking response quality, error handling, and reliability.",
] as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  field: string;
  outcome: string;
  lede: string;
  stack: string[];
  notes: string[];
};

export const projects: Project[] = [
  {
    id: "gateway",
    index: "01",
    title: "LLM Gateway & Orchestrator",
    field: "Infrastructure",
    outcome: "35% latency, reported",
    lede: "An LLM proxy with prompt caching, rate limiting, load balancing, and structured responses.",
    stack: ["Go", "Redis", "OpenAI API", "Docker"],
    notes: [
      "Sat between product code and model vendors so timeouts, limits, and response shape lived in one place.",
      "Cached prompts in Redis. The reported result was a 35% API latency reduction on that cache.",
      "Rate limiting and load balancing kept one noisy caller from starving the rest.",
      "Structured responses so downstream services could trust a shape, not a blob of text.",
    ],
  },
  {
    id: "astrocare",
    index: "02",
    title: "AstroCare HMIS",
    field: "Healthcare",
    outcome: "8+ workflows",
    lede: "A multi-tenant hospital platform spanning clinical and administrative work, with access control and coding workflows.",
    stack: ["Go", "Python", "React", "PostgreSQL", "Docker", "Nginx"],
    notes: [
      "Workflows covered registration, billing, triage, consultations, laboratory, radiology, pharmacy, and specialized care.",
      "Role-based access and tenant data separation for sensitive records.",
      "ICD-10 and CPT coding workflows inside the same platform.",
      "Deployment and issue work ran through Docker, Nginx, Git, and CI/CD.",
    ],
  },
  {
    id: "astroedu",
    index: "03",
    title: "AstroEdu Microservices",
    field: "Education",
    outcome: "Identity through AI",
    lede: "A cloud-oriented education platform split across the services a school actually runs on.",
    stack: ["TypeScript", "Next.js", "API Gateway"],
    notes: [
      "Designed across identity, learning, finance, analytics, notifications, and AI integrations.",
      "An API gateway in front of those services so clients were not wired to every backend.",
      "AI pieces were treated as integrations to check — response quality, errors, and reliability — not as magic.",
    ],
  },
  {
    id: "scheduler",
    index: "04",
    title: "Distributed Task Scheduler",
    field: "Operations",
    outcome: "Retries and dead letters",
    lede: "Asynchronous job workflows for background tasks, scheduled reports, and data ingestion.",
    stack: ["Python", "Redis", "RabbitMQ", "PostgreSQL"],
    notes: [
      "Jobs could fail, retry, and land in a dead-letter path instead of vanishing.",
      "Used for background tasks, scheduled reports, and data ingestion.",
      "Redis, RabbitMQ, and PostgreSQL split the queue, the schedule, and the record.",
    ],
  },
];

export type SkillGroup = "Engineering" | "Evaluation" | "Visual" | "Generalist";

export const skillGroups: SkillGroup[] = ["Engineering", "Evaluation", "Visual", "Generalist"];

export const skills: { name: string; group: SkillGroup }[] = [
  { name: "Go", group: "Engineering" },
  { name: "Python", group: "Engineering" },
  { name: "TypeScript", group: "Engineering" },
  { name: "JavaScript", group: "Engineering" },
  { name: "REST APIs", group: "Engineering" },
  { name: "React", group: "Engineering" },
  { name: "Next.js", group: "Engineering" },
  { name: "PostgreSQL", group: "Engineering" },
  { name: "MySQL", group: "Engineering" },
  { name: "Redis", group: "Engineering" },
  { name: "RabbitMQ", group: "Engineering" },
  { name: "Docker", group: "Engineering" },
  { name: "Nginx", group: "Engineering" },
  { name: "CI/CD", group: "Engineering" },
  { name: "Rubric scoring", group: "Evaluation" },
  { name: "Instruction adherence", group: "Evaluation" },
  { name: "Agent trace review", group: "Evaluation" },
  { name: "Code diffs and tests", group: "Evaluation" },
  { name: "Visual grounding", group: "Evaluation" },
  { name: "Source verification", group: "Evaluation" },
  { name: "Photography", group: "Visual" },
  { name: "Adobe Photoshop", group: "Visual" },
  { name: "Crop and composition", group: "Visual" },
  { name: "Image labeling", group: "Visual" },
  { name: "Captions", group: "Visual" },
  { name: "Descriptive metadata", group: "Visual" },
  { name: "Documentation", group: "Generalist" },
  { name: "Issue reporting", group: "Generalist" },
  { name: "Data organization", group: "Generalist" },
  { name: "Remote collaboration", group: "Generalist" },
  { name: "Deadline management", group: "Generalist" },
];

export const traceSteps = [
  {
    id: "plan",
    label: "Plan",
    code: false,
    agent: "Hash the raw prompt. If the cache hits, return it. Skip the database.",
    note: "The task was tenant isolation. The plan never says tenant. I stop the run here — a wrong plan makes every later green check suspect.",
  },
  {
    id: "tools",
    label: "Tools",
    code: false,
    agent: "Open cache.go. Search for cacheKey. Leave the tenant middleware closed.",
    note: "Right file, ignored neighbor. The middleware already had the tenant id in context. Tool choice followed the bad plan.",
  },
  {
    id: "edit",
    label: "Edit",
    code: true,
    agent: `func cacheKey(prompt string) string {\n    return "prompt:" + prompt\n}`,
    note: "The diff compiles and still mixes tenants. The key has to bind the tenant id before the prompt hash.",
  },
  {
    id: "test",
    label: "Test",
    code: false,
    agent: "go test ./internal/cache — ok. One tenant in the fixture. Every assertion passed.",
    note: "A passing test with one tenant cannot see a cross-tenant leak. I treat this as untested, not as proof.",
  },
  {
    id: "verdict",
    label: "Verdict",
    code: false,
    agent: "Done. Cache is in place. Latency should drop.",
    note: "Fail instruction adherence. Latency was not the task. Isolation was. I send it back at the plan.",
  },
] as const;

export const plate = [
  ["Window", "West, warm"],
  ["Object", "Kettle, enamel"],
  ["Object", "Mug ×2"],
  ["Table", "Wood"],
  ["Steam", "Visible"],
  ["Person", "Absent"],
] as const;

export const faults = [
  { id: "person", label: "Invents a person", expect: true },
  { id: "vague", label: "Objects stay unnamed", expect: true },
  { id: "light", label: "No light direction", expect: true },
  { id: "meta", label: "No usable metadata", expect: true },
  { id: "fine", label: "Caption is fit to ship", expect: false },
] as const;

export const claimWords: { t: string; bad?: boolean }[] = [
  { t: "Redis" },
  { t: "prompt" },
  { t: "caching" },
  { t: "reduced" },
  { t: "API" },
  { t: "latency" },
  { t: "by" },
  { t: "35%" },
  { t: "across", bad: true },
  { t: "all", bad: true },
  { t: "production", bad: true },
  { t: "traffic.", bad: true },
];
