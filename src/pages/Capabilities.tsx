import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { Bot, Shield, Cloud, Database, CheckCircle } from "lucide-react";

const iconMap = {
  "Agentic Automation": Bot,
  "Quality Engineering": Shield,
  "Cloud & DevOps Enablement": Cloud,
  "Data & Safety": Database,
};

export default function Capabilities() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <Section title="Our Capabilities" eyebrow="What We Deliver">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in building agentic systems that integrate seamlessly with your existing infrastructure
            while maintaining the highest standards of security and reliability.
          </p>
        </div>
      </Section>

      {/* Capabilities Grid */}
      <section className="py-16">
        <div className="container-constrained">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {site.capabilities.map((capability, index) => {
              const Icon = iconMap[capability.title as keyof typeof iconMap];
              return (
                <Card key={index} className="p-8 card-hover bg-card border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                      <ul className="space-y-3">
                        {capability.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <Section title="Technology Stack" eyebrow="Built With" className="bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI & Automation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Large Language Models (GPT, Claude, etc.)</li>
              <li>Custom agent frameworks</li>
              <li>Tool orchestration systems</li>
              <li>Natural language processing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Docker & Kubernetes</li>
              <li>AWS, GCP, Azure</li>
              <li>Terraform & infrastructure as code</li>
              <li>CI/CD pipelines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Observability</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Metrics, logs, and traces</li>
              <li>Custom dashboards</li>
              <li>Alert management</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}