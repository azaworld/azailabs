"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllProducts } from "@/content/products"
import { isStealthMode } from "@/lib/utils"

export function ProductHighlights() {
  const products = getAllProducts()
  const stealth = isStealthMode()

  if (stealth) {
    return null
  }

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
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Ready-to-deploy AI agents that transform how you work, test, and make decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600/10 to-cyan-500/10 flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {product.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${product.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
            <Link href="/products">View All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
