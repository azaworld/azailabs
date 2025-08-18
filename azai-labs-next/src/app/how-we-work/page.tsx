import { Metadata } from "next"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How We Work - AZAI Labs",
  description: "Discover our proven process for delivering intelligent automation solutions that drive real business results.",
}

const process = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We start by understanding your current workflows, pain points, and automation opportunities.",
    duration: "1-2 weeks",
    deliverables: ["Process audit", "Automation roadmap", "ROI analysis"]
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our team designs a custom automation solution tailored to your specific needs and constraints.",
    duration: "2-3 weeks",
    deliverables: ["Technical architecture", "User experience design", "Implementation plan"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using cutting-edge AI and engineering best practices.",
    duration: "4-8 weeks",
    deliverables: ["Working prototype", "Test suite", "Documentation"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "We deploy your solution and ensure your team is equipped to use it effectively.",
    duration: "1-2 weeks",
    deliverables: ["Production deployment", "User training", "Support handoff"]
  }
]

const engagementModels = [
  {
    name: "Project-Based",
    description: "Fixed-scope projects with clear deliverables and timelines.",
    bestFor: "Specific automation needs with defined requirements",
    duration: "8-16 weeks",
    pricing: "Fixed price"
  },
  {
    name: "Retainer",
    description: "Ongoing partnership for continuous improvement and support.",
    bestFor: "Long-term automation strategy and maintenance",
    duration: "Ongoing",
    pricing: "Monthly retainer"
  },
  {
    name: "Consulting",
    description: "Strategic guidance and technical expertise for your internal team.",
    bestFor: "Organizations building automation in-house",
    duration: "As needed",
    pricing: "Hourly or daily rates"
  }
]

export default function HowWeWorkPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-display-1 mb-6">
            How We <span className="gradient-text">Work</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Our proven process combines deep technical expertise with collaborative project management 
            to deliver intelligent automation solutions that drive real business results.
          </p>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Our Process</h2>
          <div className="space-y-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                          {phase.step}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {phase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        {phase.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Deliverables:</p>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {model.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Best for:</p>
                      <p className="text-sm text-muted-foreground">{model.bestFor}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Duration</p>
                        <p className="text-sm">{model.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Pricing</p>
                        <p className="text-sm">{model.pricing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-muted/30 rounded-3xl p-12 border border-border/50">
            <h2 className="text-display-2 mb-6">Ready to get started?</h2>
            <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your automation needs and explore how we can help transform your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Start a Project
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
