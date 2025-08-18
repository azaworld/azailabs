import { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact - AZAI Labs",
  description: "Get in touch with AZAI Labs to discuss your automation needs and start building with agents.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-display-1 mb-6">
            Let's build the <span className="gradient-text">future</span> together
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your workflow with intelligent automation? We'd love to hear about your project and explore how AI agents can help.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-display-2 mb-6">Send us a message</h2>
            <p className="text-body text-muted-foreground mb-8">
              Fill out the form and we'll get back to you within 24 hours. We're excited to learn about your automation needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-violet-600" />
                <span className="text-sm text-muted-foreground">Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-violet-600" />
                <span className="text-sm text-muted-foreground">Free consultation call</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-violet-600" />
                <span className="text-sm text-muted-foreground">Custom solution design</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        {/* Calendly Section */}
        <div className="mt-24 text-center">
          <h2 className="text-display-2 mb-6">Schedule a call</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Prefer to talk directly? Book a 30-minute consultation to discuss your automation needs and see how we can help.
          </p>
          
          <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book a Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Free 30-minute call to discuss your project
              </p>
              <a
                href="https://calendly.com/azai-labs/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
