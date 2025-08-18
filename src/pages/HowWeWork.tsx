import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { Search, Rocket, TrendingUp, Users, Target, Calendar } from "lucide-react";

const phaseIcons = {
  "Private Pilot (4–6 weeks)": Rocket,
  "Adoption (quarterly)": TrendingUp,
  "Support": Users,
};

export default function HowWeWork() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <Section title="How We Work" eyebrow="Our Methodology">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We follow a proven methodology that minimizes risk while maximizing impact.
            Every engagement starts small and scales based on measurable results.
          </p>
        </div>
      </Section>

      {/* Process Steps */}
      <Section title="Our 3-Step Process" eyebrow="Discovery to Deployment">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {site.howItWorks.map((step, index) => {
            const icons = [Search, Rocket, TrendingUp];
            const Icon = icons[index];
            return (
              <Card key={index} className="p-6 text-center card-hover bg-card border-border/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.step}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Engagement Model */}
      <Section title="Engagement Model" eyebrow="Partnership Structure" className="bg-muted/20">
        <div className="space-y-8">
          {site.process.model.map((phase, index) => {
            const Icon = phaseIcons[phase.phase as keyof typeof phaseIcons] || Calendar;
            return (
              <Card key={index} className="p-6 bg-card border-border/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Requirements */}
      <Section title="What We Need From You" eyebrow="Partnership Requirements">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.process.requirements.map((requirement, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border/20">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{requirement}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section title="Our Principles" eyebrow="How We Operate" className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.about.principles.map((principle, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border/20">
                <h3 className="text-lg font-semibold mb-3">{principle}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}