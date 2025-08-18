import Link from "next/link"
import { brand, navigation } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500" />
              <span className="text-xl font-bold">{brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {brand.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              {brand.locationLine}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/qa-agent"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  QA Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/products/daktarai"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  DaktarAI
                </Link>
              </li>
              <li>
                <Link
                  href="/products/agriai"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  AgriAI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {brand.email}
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href={brand.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href={brand.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigation.footer.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
