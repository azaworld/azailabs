import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { Globe, Shield, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <Section title="About AZAI Labs" eyebrow="Who We Are">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {site.about.blurb}
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-constrained">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize the power of agentic AI by building systems that augment human capabilities
                rather than replace them. We believe the future of work is collaborative intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every agent we deploy is designed to free up human creativity and strategic thinking
                by automating the repetitive, error-prone tasks that consume valuable time.
              </p>
            </div>
            <Card className="p-8 bg-card border-border/20">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-4">
                {site.about.principles.map((principle, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <Section title="Company Details" eyebrow="Quick Facts" className="bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-card border-border/20">
            <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">{site.brand.locationLine}</p>
          </Card>
          
          <Card className="p-6 text-center bg-card border-border/20">
            <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Remote-First</h3>
            <p className="text-sm text-muted-foreground">Distributed team of experts</p>
          </Card>
          
          <Card className="p-6 text-center bg-card border-border/20">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Security Focus</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
          </Card>
          
          <Card className="p-6 text-center bg-card border-border/20">
            <Target className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Results Driven</h3>
            <p className="text-sm text-muted-foreground">Measured impact only</p>
          </Card>
        </div>
      </Section>

      {/* Approach */}
      <Section title="Our Approach" eyebrow="How We Think">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pragmatic Implementation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't chase the latest AI trends. Instead, we focus on proven technologies
                that solve real business problems with measurable ROI.
              </p>
              <h3 className="text-xl font-semibold mb-4">Security by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every system we build includes security, privacy, and compliance considerations
                from day one, not as an afterthought.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Transparent Partnership</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in full transparency about capabilities, limitations, and costs.
                No black boxes, no vendor lock-in.
              </p>
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                We stay at the forefront of AI research while maintaining production stability
                through careful evaluation and testing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section title="Get In Touch" eyebrow="Contact Information" className="bg-muted/20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-card border-border/20">
            <h3 className="text-xl font-semibold mb-6">Ready to discuss your project?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Email:</strong> {site.brand.email}
              </p>
              <p>
                <strong>Based in:</strong> {site.brand.usCity}
              </p>
              <p className="text-sm">
                {site.brand.locationLine}
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}