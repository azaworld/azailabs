import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

const metricIcons = {
  "Release reliability": Shield,
  "Cycle time": Clock,
  "Coverage": TrendingUp,
  "Ops time saved": Zap,
};

export default function Results() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <Section title="Proven Results" eyebrow="Real Impact">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We measure success through tangible business outcomes, not vanity metrics.
            Here's what our partners have achieved through agentic automation.
          </p>
        </div>
      </Section>

      {/* Results Grid */}
      <section className="py-16">
        <div className="container-constrained">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {site.results.map((result, index) => {
              const Icon = metricIcons[result.metric as keyof typeof metricIcons];
              return (
                <Card key={index} className="p-8 card-hover bg-card border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">{result.metric}</h3>
                      <p className="text-lg leading-relaxed">{result.text}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <Section title="Success Stories" eyebrow="Case Studies" className="bg-muted/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border/20">
            <h3 className="text-xl font-semibold mb-4">Enterprise Software Company</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Industry</span>
                <span className="font-medium">SaaS Platform</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Team Size</span>
                <span className="font-medium">50+ Engineers</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Challenge</span>
                <span className="font-medium">Manual QA Bottleneck</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Result</span>
                <span className="font-medium text-primary">60% Faster Releases</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border/20">
            <h3 className="text-xl font-semibold mb-4">Financial Services Startup</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Industry</span>
                <span className="font-medium">FinTech</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Team Size</span>
                <span className="font-medium">25+ Engineers</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/20">
                <span className="text-muted-foreground">Challenge</span>
                <span className="font-medium">Compliance Automation</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Result</span>
                <span className="font-medium text-primary">40h/month Saved</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ROI Calculator */}
      <Section title="Calculate Your ROI" eyebrow="Investment Impact">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Typical ROI Breakdown</h3>
              <p className="text-muted-foreground">
                Based on our experience with similar organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-6x</div>
                <div className="text-sm text-muted-foreground">ROI within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">40-80%</div>
                <div className="text-sm text-muted-foreground">Reduction in manual work</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-4 weeks</div>
                <div className="text-sm text-muted-foreground">Time to first results</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}