import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/mods", label: "Mods" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/about", label: "About" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">GTA SA</span>
              <span className="hidden sm:inline text-muted-foreground">Ultimate Mod</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/download">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.href
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/download" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-gradient">GTA San Andreas Ultimate Mod</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Experience GTA San Andreas like never before with enhanced graphics, 
                performance optimizations, and quality-of-life improvements.
              </p>
              <p className="text-xs text-muted-foreground">
                This mod requires a legal copy of GTA San Andreas. 
                We do not distribute the original game files.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/download" className="text-muted-foreground hover:text-primary transition-colors">Download</Link></li>
                <li><Link to="/mods" className="text-muted-foreground hover:text-primary transition-colors">Mods</Link></li>
                <li><Link to="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground mb-2">Also visit our Indian website:</p>
              <a 
                href="http://gta-san-andreas.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                GTA San Andreas India - gta-san-andreas.in
              </a>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2025 GTA SA Ultimate Mod. Not affiliated with Rockstar Games.</p>
              <p className="mt-2">Grand Theft Auto and GTA are trademarks of Take-Two Interactive Software Inc.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
