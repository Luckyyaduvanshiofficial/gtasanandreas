import { Card } from "@/components/ui/card";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">This Project</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Bringing new life to a classic game
          </p>
        </div>

        {/* Main Content */}
        <Card className="gradient-card card-shadow p-8 md:p-12 border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              GTA San Andreas Ultimate Mod was created to enhance the experience of one of gaming's most beloved classics. 
              Our goal is to provide modern graphics, improved performance, and quality-of-life improvements while maintaining 
              the soul and feel of the original game.
            </p>
            <p>
              This project began as a personal passion to replay GTA SA with better visuals on modern hardware. 
              After months of testing, tweaking, and optimization, we've compiled the best mods and enhancements 
              into a single, easy-to-install package that anyone can use.
            </p>
            <p>
              All mods included have been carefully selected and tested for compatibility, performance, and stability. 
              We've optimized everything to work on both low-end and high-end systems, ensuring everyone can enjoy 
              an improved San Andreas experience.
            </p>
          </div>
        </Card>

        {/* What We Believe */}
        <Card className="gradient-card card-shadow p-8 md:p-12 border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">What We Stand For</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">100% Legal & Ethical</h3>
              <p className="text-muted-foreground">
                We do not host, distribute, or encourage piracy of any kind. This mod requires a legal copy of 
                GTA San Andreas. We believe in supporting game developers and respecting intellectual property rights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Always Free</h3>
              <p className="text-muted-foreground">
                This mod pack is and always will be completely free. We believe in the modding community's spirit 
                of sharing and collaboration. No paywalls, no premium versions, just free enhancements for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Community-Driven</h3>
              <p className="text-muted-foreground">
                Most of the individual mods included were created by talented community members. We've simply 
                compiled, tested, and packaged them for easy installation. Full credit goes to the original creators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Safe & Secure</h3>
              <p className="text-muted-foreground">
                All files are scanned for viruses and malware. We provide SHA-256 checksums for verification. 
                Your security and privacy are important to us.
              </p>
            </div>
          </div>
        </Card>

        {/* Credits */}
        <Card className="gradient-card card-shadow p-8 md:p-12 border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">Credits & Acknowledgments</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This mod pack wouldn't be possible without the incredible work of modders in the GTA community. 
              We'd like to thank:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The GTAForums and ModDB communities for their countless contributions</li>
              <li>Texture artists who created the HD texture packs</li>
              <li>Developers who fixed bugs and improved game stability</li>
              <li>Performance optimization specialists who made the game run better</li>
              <li>Everyone who tested and provided feedback during development</li>
            </ul>
            <p className="mt-6">
              <strong>Original Game:</strong> Grand Theft Auto: San Andreas © 2004-2025 Rockstar Games, Inc. 
              GTA and Grand Theft Auto are trademarks of Take-Two Interactive Software Inc.
            </p>
          </div>
        </Card>

        {/* Contact */}
        <Card className="gradient-card card-shadow p-8 md:p-12 border-primary/50 text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions, feedback, or issues? We'd love to hear from you.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="mailto:contact@gta-san-andreas.one">
              <Mail className="mr-2 h-4 w-4" />
              contact@gta-san-andreas.one
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            We typically respond within 24-48 hours.
          </p>
        </Card>

        {/* Legal Note */}
        <div className="text-center text-sm text-muted-foreground mt-8 space-y-2">
          <p>
            This is an unofficial mod and is not endorsed by or affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <p>
            You must own a legal copy of GTA San Andreas to use this mod.
          </p>
        </div>
      </div>
    </div>
  );
}
