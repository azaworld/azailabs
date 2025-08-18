"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Cloud, Brain, Lock, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Agentic Automation",
    description: "Intelligent agents that work autonomously to complete complex tasks and workflows."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Built-in quality gates and automated testing ensure reliable, production-ready code."
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    description: "Designed for modern cloud infrastructure with scalability and resilience built-in."
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leveraging cutting-edge AI to make intelligent decisions and optimize processes."
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade security with compliance and privacy controls at every level."
  },
  {
    icon: Rocket,
    title: "Fast Deployment",
    description: "Get from concept to production in days, not months with our streamlined approach."
  }
]

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 mb-6">
            Why choose <span className="gradient-text">AZAI Labs</span>?
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge AI with proven engineering practices to deliver automation solutions that actually work in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-600/10 to-cyan-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
