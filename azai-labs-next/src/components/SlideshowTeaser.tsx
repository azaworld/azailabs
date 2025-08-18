"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllSlides } from "@/content/slides"

export function SlideshowTeaser() {
  const slides = getAllSlides()
  const previewSlides = slides.slice(0, 3)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 mb-6">
            See our work in <span className="gradient-text">action</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Explore our presentation slides and see how we communicate complex AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewSlides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-2xl border border-border/50 p-6 flex items-center justify-center hover:border-border transition-colors">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {slide.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{slide.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Click to view full slide
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/slides">View All Slides</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
