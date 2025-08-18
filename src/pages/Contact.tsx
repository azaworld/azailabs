import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { site } from "@/content/site";
import { Clock, Shield, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <Section title={site.contact.title} eyebrow="Get Started">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {site.contact.intro}
          </p>
        </div>
      </Section>

      {/* Contact Form & FAQ */}
      <section className="py-16">
        <div className="container-constrained">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* FAQ & Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border/20">
                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      Response Time
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We respond to all inquiries within 24 hours, typically much sooner.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Shield className="h-4 w-4 text-primary mr-2" />
                      Data Handling
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Your information is encrypted and never shared with third parties.
                      We only use it to respond to your inquiry.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      Next Steps
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      After you submit your request, we'll schedule a brief call to
                      understand your needs and propose a pilot scope.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/20">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{site.brand.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm">{site.brand.locationLine}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/20">
                <h3 className="text-lg font-semibold mb-4">What to Include</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Current workflow pain points</li>
                  <li>• Team size and structure</li>
                  <li>• Existing tools and infrastructure</li>
                  <li>• Success metrics you'd like to improve</li>
                  <li>• Timeline for potential pilot</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <Section className="bg-muted/20">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Prefer to connect directly?</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out to us directly at{" "}
            <a 
              href={`mailto:${site.brand.email}`}
              className="text-primary hover:underline"
            >
              {site.brand.email}
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            We're always happy to discuss how agentic automation can help your team.
          </p>
        </div>
      </Section>
    </div>
  );
}