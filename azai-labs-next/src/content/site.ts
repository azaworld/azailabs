export const brand = {
  name: "AZAI Labs",
  tagline: "Build with agents, not headcount.",
  email: "azailabsltd@gmail.com",
  socials: { 
    linkedin: "https://linkedin.com/company/azai-labs", 
    github: "https://github.com/azai-labs" 
  },
  locationLine: "Remote-first • US/EU/APAC",
  stealth: process.env.NEXT_PUBLIC_STEALTH === "true",
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hidden: brand.stealth },
    { name: "Pricing", href: "/pricing", hidden: brand.stealth },
    { name: "Capabilities", href: "/capabilities" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Results", href: "/results" },
    { name: "About", href: "/about" },
    { name: "Docs", href: "/docs", hidden: brand.stealth },
    { name: "Blog", href: "/blog", hidden: brand.stealth },
    { name: "Contact", href: "/contact" },
  ].filter(item => !item.hidden),
  footer: [
    { name: "Privacy", href: "/legal/privacy" },
    { name: "Terms", href: "/legal/terms" },
  ],
};

export const seo = {
  title: `${brand.name} - ${brand.tagline}`,
  description: "We design and deploy agentic automation that ships real work—quality, operations, and decision-making.",
  url: "https://azailabs.com",
  siteName: brand.name,
  images: [
    {
      url: "/brand/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: brand.name,
    },
  ],
  locale: "en_US",
  type: "website",
};
