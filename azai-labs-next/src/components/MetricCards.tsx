"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    value: 60,
    suffix: "%",
    label: "Fewer hotfixes",
    description: "Reduced production issues through automated testing"
  },
  {
    value: 6,
    suffix: "h→20m",
    label: "Faster checks",
    description: "Accelerated CI/CD pipeline execution"
  },
  {
    value: 95,
    suffix: "%",
    label: "Test coverage",
    description: "Comprehensive automated test suites"
  },
  {
    value: 10,
    suffix: "x",
    label: "Faster deployment",
    description: "Streamlined release processes"
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl font-bold text-foreground">
      {count}{suffix}
    </span>
  )
}

export function MetricCards() {
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
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Our clients see measurable improvements in quality, speed, and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
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
      </div>
    </section>
  )
}
