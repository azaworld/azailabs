"use client"

import { motion } from "framer-motion"

const keywords = [
  "Agentic Automation",
  "Quality Engineering",
  "Cloud-Native",
  "Security",
  "AI/ML",
  "DevOps",
  "Testing",
  "Operations",
  "Decision Making",
  "Process Automation"
]

export function Marquee() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display-2 mb-4">
            Trusted by teams building the future
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We work with forward-thinking organizations across industries to deploy intelligent automation solutions.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground whitespace-nowrap"
              >
                {keyword}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {keywords.map((keyword, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground whitespace-nowrap"
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
