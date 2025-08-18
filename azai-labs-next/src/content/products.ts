export const products = [
  {
    slug: "qa-agent",
    name: "QA Agent",
    summary: "Autonomous testing—from requirements to CI.",
    description: "AI-powered testing automation that generates, runs, and maintains test suites across your entire application stack.",
    bullets: [
      "Generates & runs checks on critical paths",
      "Self-heals selectors, rich reports",
      "CI/CD ready (GitHub/GitLab)"
    ],
    heroImage: "/brand/product-qa.png",
    priceTable: { starter: 49, growth: 199, enterprise: "Contact" },
    stripePriceId: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_QA_MONTHLY || "",
      yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_QA_YEARLY || ""
    },
    features: [
      "Automated test generation",
      "Cross-browser testing",
      "Performance monitoring",
      "Regression detection",
      "API testing automation",
      "Visual regression testing"
    ]
  },
  {
    slug: "daktarai",
    name: "DaktarAI",
    summary: "Everyday health guidance (privacy-first).",
    description: "AI-powered health assistant that provides personalized guidance while maintaining complete privacy and security.",
    bullets: ["Symptom guidance", "Lab report explainers", "Habits & reminders"],
    heroImage: "/brand/product-daktar.png",
    priceTable: { starter: 0, growth: 19, enterprise: "Contact" },
    stripePriceId: { monthly: "", yearly: "" },
    features: [
      "Symptom assessment",
      "Lab report analysis",
      "Medication reminders",
      "Health tracking",
      "Privacy-first design",
      "HIPAA compliance"
    ]
  },
  {
    slug: "agriai",
    name: "AgriAI",
    summary: "Crop intelligence & market insights.",
    description: "Agricultural AI platform providing real-time insights for crop management, weather forecasting, and market analysis.",
    bullets: ["Crop Q&A", "Weather & price signals", "Pest alerts"],
    heroImage: "/brand/product-agri.png",
    priceTable: { starter: 0, growth: 19, enterprise: "Contact" },
    stripePriceId: { monthly: "", yearly: "" },
    features: [
      "Crop disease detection",
      "Weather forecasting",
      "Market price analysis",
      "Pest management",
      "Soil health monitoring",
      "Yield optimization"
    ]
  }
];

export function getProduct(slug: string) {
  return products.find(product => product.slug === slug);
}

export function getAllProducts() {
  return products;
}
