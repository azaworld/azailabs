import { Metadata } from "next"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Capabilities - AZAI Labs",
  description: "Explore our core capabilities in intelligent automation, AI engineering, and quality assurance.",
}

const capabilities = [
  {
    title: "Intelligent Automation",
    description: "AI-powered agents that can understand, learn, and execute complex workflows autonomously.",
    features: [
      "Natural language processing",
      "Machine learning integration",
      "Adaptive decision making",
      "Process optimization"
    ],
    icon: "🤖"
  },
  {
    title: "Quality Engineering",
    description: "Comprehensive testing and quality assurance solutions that ensure reliability and performance.",
    features: [
      "Automated test generation",
      "Continuous testing",
      "Performance monitoring",
      "Quality metrics"
    ],
    icon: "🔍"
  },
  {
    title: "Cloud-Native Development",
    description: "Scalable, resilient applications built for modern cloud infrastructure.",
    features: [
      "Microservices architecture",
      "Container orchestration",
      "Auto-scaling",
      "DevOps automation"
    ],
    icon: "☁️"
  },
  {
    title: "AI/ML Integration",
    description: "Seamless integration of machine learning models into production systems.",
    features: [
      "Model deployment",
      "Real-time inference",
      "Data pipeline automation",
      "MLOps practices"
    ],
    icon: "🧠"
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with built-in compliance controls and audit trails.",
    features: [
      "Identity management",
      "Data encryption",
      "Compliance monitoring",
      "Security automation"
    ],
    icon: "🔒"
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and eliminate bottlenecks through intelligent workflow automation.",
    features: [
      "Workflow analysis",
      "Process mining",
      "Automation opportunities",
      "ROI measurement"
    ],
    icon: "⚡"
  }
]

const technologies = [
  "Python", "TypeScript", "React", "Node.js", "Python", "TensorFlow", "PyTorch",
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions",
  "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka", "Apache Spark"
]

export default function CapabilitiesPage() {
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
            Our <span className="gradient-text">Capabilities</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge AI with proven engineering practices to deliver 
            intelligent automation solutions that transform how organizations work.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Understand</h3>
              <p className="text-muted-foreground">
                Deep dive into your current processes, pain points, and automation opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Create intelligent solutions that integrate seamlessly with your existing systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy</h3>
              <p className="text-muted-foreground">
                Implement and optimize your automation solution with ongoing support and training.
              </p>
            </div>
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
            <h2 className="text-display-2 mb-6">Ready to explore possibilities?</h2>
            <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our capabilities can help solve your specific challenges and drive business value.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
