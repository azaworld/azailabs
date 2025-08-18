export const site = {
  brand: {
    name: "AZAI Labs",
    tagline: "Build with agents, not headcount.",
    email: "azailabsltd@gmail.com",
    locationLine: "Remote-first • US/EU/APAC",
    usCity: "San Francisco, CA",
    socials: {
      linkedin: "https://linkedin.com/company/azai-labs",
      github: "https://github.com/azai-labs"
    }
  },
  hero: {
    headline: "Build with agents, not headcount.",
    sub: "We design and deploy agentic automation that ships real work—quality, operations, and decision-making.",
    primaryCta: { label: "Request Access", href: "/contact" },
    secondaryCta: { label: "How we work", href: "/how-we-work" }
  },
  pillars: [
    { title: "Agentic Automation", body: "From requirement to execution with LLMs and safe tool use." },
    { title: "Quality & Reliability", body: "Continuous checks in pipelines; fewer regressions, safer releases." },
    { title: "Cloud-Native Delivery", body: "Docker, CI/CD, observability; ship fast with confidence." },
    { title: "Security & Privacy", body: "Least-privilege access, data minimization, auditability." }
  ],
  outcomes: [
    "Turn repetitive hours into minutes.",
    "Fewer rollbacks and hotfixes.",
    "Traceable runs with human-reviewable reports.",
    "Integrates with your existing tools."
  ],
  howItWorks: [
    { step: "Discover", detail: "Map critical flows, guardrails, and success metrics." },
    { step: "Deploy", detail: "Stand up agents and pipelines in a staging environment." },
    { step: "Scale", detail: "Measure ROI; expand to new flows with SLOs." }
  ],
  capabilities: [
    {
      title: "Agentic Automation",
      bullets: [
        "Natural-language specs → executable workflows",
        "Tool use with retries and grounding",
        "Human-in-the-loop checkpoints where needed"
      ]
    },
    {
      title: "Quality Engineering",
      bullets: [
        "Autonomous checks for critical paths",
        "Self-healing selectors, visual diffs",
        "CI/CD integration, dashboards, alerts"
      ]
    },
    {
      title: "Cloud & DevOps Enablement",
      bullets: [
        "Dockerized services, IaC, secure secrets",
        "Observability (logs, metrics, traces)",
        "Cost-aware scaling; nightly/PR triggers"
      ]
    },
    {
      title: "Data & Safety",
      bullets: [
        "Guardrails and policy enforcement",
        "PII minimization & environment isolation",
        "Audit trails and access governance"
      ]
    }
  ],
  process: {
    model: [
      { phase: "Private Pilot (4–6 weeks)", desc: "Scope 1–2 high-impact flows. Ship working agents + dashboards + ROI readout." },
      { phase: "Adoption (quarterly)", desc: "Expand coverage, raise reliability, knowledge transfer." },
      { phase: "Support", desc: "On-call SLAs for production runs." }
    ],
    requirements: [
      "Access to non-prod environments",
      "A pilot owner on your side",
      "A clear success metric (e.g., reduce regression escapes 70%)"
    ]
  },
  results: [
    { metric: "Release reliability", text: "Reduced hotfixes by 60% within two sprints." },
    { metric: "Cycle time", text: "Cut manual checks from 6h to 20m per release." },
    { metric: "Coverage", text: "Automated 8 mission-critical flows with traceable reports." },
    { metric: "Ops time saved", text: "~40 engineer-hours/month reallocated from repetitive work." }
  ],
  about: {
    blurb:
      "AZAI Labs is a remote-first AI engineering studio building agentic systems that automate real work. We prioritize reliability, security, and measurable impact.",
    principles: ["Pragmatic over flashy", "Safety by default", "Measured ROI, not vanity metrics"]
  },
  contact: {
    title: "Request a private pilot",
    intro: "Tell us about your workflow or release pain. We'll suggest a pilot within 24 hours.",
    success: "Thanks—your request is in. We'll reply within 24 hours."
  }
};