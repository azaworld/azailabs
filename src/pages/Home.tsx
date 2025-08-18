import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { ArrowRight, CheckCircle, Zap, Shield, Cloud, Target } from "lucide-react";

const iconMap = {
  "Agentic Automation": Zap,
  "Quality & Reliability": Shield,
  "Cloud-Native Delivery": Cloud,
  "Security & Privacy": Target,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-constrained">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 hero-safe-area">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  {site.hero.headline}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  {site.hero.sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to={site.hero.primaryCta.href}>
                      {site.hero.primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={site.hero.secondaryCta.href}>
                      {site.hero.secondaryCta.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative">
                <Logo size={200} className="animate-pulse-glow" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Watermark */}
        <div className="absolute bottom-8 right-8 opacity-5">
          <Logo size={120} fade />
        </div>
      </section>

      {/* Value Pillars */}
      <Section title="Why Choose Agentic Automation?" eyebrow="Core Capabilities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.title as keyof typeof iconMap];
            return (
              <Card key={index} className="p-6 card-hover bg-card border-border/20">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="What You Get" eyebrow="Expected Outcomes" className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {site.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-lg leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How It Works" eyebrow="Our Process">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {site.howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.step}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-primary/5 border-y border-primary/10">
        <div className="text-center">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Private pilots with global teams
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Trusted by forward-thinking engineering organizations
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Ready to Start?" eyebrow="Get Started">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join our private pilot program and see how agentic automation can transform your workflows.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}