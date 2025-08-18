import { Metadata } from "next"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Results - AZAI Labs",
  description: "See the measurable impact our intelligent automation solutions have delivered for our clients.",
}

const metrics = [
  {
    value: "60%",
    label: "Fewer hotfixes",
    description: "Reduced production issues through automated testing and quality gates"
  },
  {
    value: "6h→20m",
    label: "Faster checks",
    description: "Accelerated CI/CD pipeline execution with intelligent automation"
  },
  {
    value: "95%",
    label: "Test coverage",
    description: "Comprehensive automated test suites covering critical paths"
  },
  {
    value: "10x",
    label: "Faster deployment",
    description: "Streamlined release processes with automated workflows"
  },
  {
    value: "40%",
    label: "Cost reduction",
    description: "Lower operational costs through intelligent automation"
  },
  {
    value: "24/7",
    label: "Monitoring",
    description: "Continuous system monitoring and alerting"
  }
]

const testimonials = [
  {
    quote: "AZAI Labs transformed our testing process. What used to take days now happens automatically in minutes.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "SC"
  },
  {
    quote: "The automation solutions they built have saved us hundreds of hours per month and improved our quality significantly.",
    author: "Michael Rodriguez",
    role: "VP Engineering",
    company: "DataSync Solutions",
    avatar: "MR"
  },
  {
    quote: "Working with AZAI Labs was a game-changer. Their AI agents handle complex workflows we never thought could be automated.",
    author: "Jennifer Park",
    role: "Head of Operations",
    company: "CloudScale Systems",
    avatar: "JP"
  }
]

const caseStudies = [
  {
    title: "E-commerce Testing Automation",
    industry: "Retail",
    challenge: "Manual testing was taking 3-4 days per release cycle",
    solution: "Implemented AI-powered test generation and execution",
    results: ["80% faster testing", "95% test coverage", "Zero production bugs in 6 months"]
  },
  {
    title: "Healthcare Data Processing",
    industry: "Healthcare",
    challenge: "Manual data entry was error-prone and time-consuming",
    solution: "Built intelligent data extraction and validation agents",
    results: ["90% accuracy improvement", "70% time savings", "HIPAA compliance maintained"]
  },
  {
    title: "Financial Compliance Monitoring",
    industry: "Finance",
    challenge: "Manual compliance checks were resource-intensive",
    solution: "Automated regulatory compliance monitoring system",
    results: ["Real-time compliance", "60% cost reduction", "100% audit trail"]
  }
]

export default function ResultsPage() {
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
            Proven <span className="gradient-text">Results</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Our intelligent automation solutions deliver measurable business impact. 
            Here's what our clients have achieved working with AZAI Labs.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="text-center border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <CardTitle className="text-3xl text-violet-600">
                      {metric.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg font-semibold text-foreground mb-2">
                      {metric.label}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                        <Badge variant="outline" className="mb-2">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Results:</p>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                            <span>{result}</span>
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

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-border transition-colors">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                      </div>
                      <blockquote className="text-sm text-muted-foreground italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-muted/30 rounded-3xl p-12 border border-border/50">
            <h2 className="text-display-2 mb-6">Ready to see similar results?</h2>
            <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your automation needs and explore how we can help you achieve similar improvements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
