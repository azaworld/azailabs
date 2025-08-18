"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { brand } from "@/content/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background Gradient Orb */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="safe-area-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="inline-flex items-center rounded-full border border-violet-200/20 bg-violet-50/10 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
                    {brand.tagline}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-display-1"
                >
                  Build with agents,{" "}
                  <span className="gradient-text">not headcount.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-body-large text-muted-foreground max-w-2xl"
                >
                  We design and deploy agentic automation that ships real work—quality, operations, and decision-making.
                </motion.p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Request Access</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/how-we-work">See How We Work</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right side - empty for LinkedIn cover compatibility */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
