import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { FeatureGrid } from "@/components/FeatureGrid"
import { ProductHighlights } from "@/components/ProductHighlights"
import { MetricCards } from "@/components/MetricCards"
import { SlideshowTeaser } from "@/components/SlideshowTeaser"
import { CTAStrip } from "@/components/CTAStrip"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeatureGrid />
      <ProductHighlights />
      <MetricCards />
      <SlideshowTeaser />
      <CTAStrip />
    </>
  )
}
