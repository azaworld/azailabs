"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTAStrip() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Gradient Rule */}
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-8 rounded-full" />
          
          <h2 className="text-display-2 mb-6">
            Ready to build with <span className="gradient-text">agents</span>?
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the future of intelligent automation. Let's discuss how AI agents can transform your workflow.
          </p>
          
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
