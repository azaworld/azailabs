import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="container-constrained py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size={24} />
              <span className="text-lg font-bold">{site.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {site.about.blurb}
            </p>
            <div className="text-sm text-muted-foreground">
              <p>{site.brand.email}</p>
              <p>{site.brand.locationLine}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/capabilities" className="text-muted-foreground hover:text-primary transition-colors">
                Capabilities
              </Link>
              <Link to="/how-we-work" className="text-muted-foreground hover:text-primary transition-colors">
                How We Work
              </Link>
              <Link to="/results" className="text-muted-foreground hover:text-primary transition-colors">
                Results
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={site.brand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={site.brand.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <div className="text-xs text-muted-foreground space-x-4">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/10">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};