import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: January 15, 2025</p>

        <Card className="gradient-card card-shadow p-8 md:p-12 border-border">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website and downloading our mod pack, you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Legal Requirements</h2>
              <p className="font-semibold text-primary">You must own a legal copy of GTA San Andreas to use this mod.</p>
              <p>
                This mod pack is designed to enhance your legally owned copy of Grand Theft Auto: San Andreas. 
                We do not provide, distribute, or support the distribution of the base game files. Piracy is 
                illegal and violates intellectual property rights.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>You must purchase GTA SA from legitimate sources (Steam, Rockstar Games, etc.)</li>
                <li>We are not responsible for any use of this mod with pirated copies</li>
                <li>Using this mod does not grant you rights to the original game</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Mod Usage</h2>
              <p>This mod pack is provided free of charge for personal, non-commercial use only.</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>You may install and use the mod on your own devices</li>
                <li>You may share the download link with others</li>
                <li>You may NOT redistribute, sell, or claim ownership of the mod pack</li>
                <li>You may NOT use the mod for commercial purposes without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Disclaimer of Warranties</h2>
              <p className="font-semibold">THIS MOD IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES.</p>
              <p>We make no guarantees about:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Compatibility with your system or game version</li>
                <li>Absence of bugs or technical issues</li>
                <li>Continuous availability of downloads</li>
                <li>Future updates or support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, we are NOT liable for any damages resulting from:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use or inability to use this mod</li>
                <li>Corruption of game files or save data</li>
                <li>System crashes or hardware issues</li>
                <li>Loss of data or any indirect, incidental, or consequential damages</li>
              </ul>
              <p className="mt-3 font-semibold">
                YOU USE THIS MOD AT YOUR OWN RISK. Always backup your game files before installation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
              <p>
                Grand Theft Auto: San Andreas and all related trademarks are property of Take-Two Interactive 
                Software Inc. and Rockstar Games. This is an unofficial mod not endorsed by or affiliated with 
                Rockstar Games.
              </p>
              <p className="mt-2">
                Individual mods included in this pack were created by various community members. Credit belongs 
                to the original creators. If you believe your work is included without proper attribution, 
                please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Prohibited Uses</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use the mod for any illegal purposes</li>
                <li>Modify and redistribute the mod pack without permission</li>
                <li>Reverse engineer or decompile the installer</li>
                <li>Use the mod to violate any game's terms of service</li>
                <li>Sell or monetize the mod in any way</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Updates and Termination</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the mod pack or website at any time 
                without notice. We may also update these Terms of Service. Continued use after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable international 
                laws regarding software modification and intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>
                For questions about these Terms, contact us at:{" "}
                <a href="mailto:legal@gta-san-andreas.one" className="text-primary hover:underline">
                  legal@gta-san-andreas.one
                </a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
