import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Shield, Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Disclaimer</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">Important information about using this mod</p>

        {/* Critical Warning */}
        <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-base">
            <strong className="font-semibold">Critical Notice:</strong> This mod requires a legal copy of GTA San Andreas. 
            We do NOT distribute the original game files. Using this mod with pirated software is illegal and not supported.
          </AlertDescription>
        </Alert>

        <Card className="gradient-card card-shadow p-8 md:p-12 border-border mb-8">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6 text-primary" />
                General Disclaimer
              </h2>
              <p>
                The information and software provided on this website are for enhancement of your legally 
                owned copy of Grand Theft Auto: San Andreas. While we strive for accuracy and stability, 
                we make no representations or warranties of any kind, express or implied, about:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Completeness, accuracy, or reliability of the mod pack</li>
                <li>Compatibility with all system configurations</li>
                <li>Absence of errors, bugs, or technical issues</li>
                <li>Suitability for any particular purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-primary" />
                Use at Your Own Risk
              </h2>
              <p className="font-semibold text-primary">
                BY DOWNLOADING AND USING THIS MOD, YOU ACKNOWLEDGE THAT:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong>You use the mod entirely at your own risk.</strong> We are not responsible for any 
                  damage to your game installation, save files, or computer system.
                </li>
                <li>
                  <strong>Game file corruption is possible.</strong> Always backup your GTA SA installation 
                  folder before installing any mods.
                </li>
                <li>
                  <strong>Save game compatibility is not guaranteed.</strong> Mod installation may affect 
                  existing save games. Backup your saves before proceeding.
                </li>
                <li>
                  <strong>System crashes may occur.</strong> While we test extensively, specific hardware/software 
                  combinations may cause instability.
                </li>
                <li>
                  <strong>We are not liable for any damages,</strong> direct or indirect, arising from the use 
                  of this mod pack.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Not Affiliated with Rockstar Games</h2>
              <p>
                This is an <strong>UNOFFICIAL</strong> modification created by fans for fans. We are NOT:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Affiliated with, endorsed by, or sponsored by Rockstar Games</li>
                <li>Affiliated with Take-Two Interactive Software Inc.</li>
                <li>Representing or acting on behalf of the official game developers</li>
              </ul>
              <p className="mt-3">
                Grand Theft Auto, GTA, and San Andreas are trademarks of Take-Two Interactive Software Inc. 
                All rights to the original game belong to Rockstar Games and Take-Two Interactive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Legal Copy Required</h2>
              <p className="font-semibold text-primary mb-2">
                ⚠️ YOU MUST OWN A LEGAL COPY OF GTA SAN ANDREAS
              </p>
              <p>
                This mod pack is designed to work with legally purchased copies of the game only. 
                You can purchase GTA San Andreas from:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>
                  <a href="https://store.steampowered.com/app/12120/Grand_Theft_Auto_San_Andreas/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-primary hover:underline">
                    Steam
                  </a>
                </li>
                <li>
                  <a href="https://www.rockstargames.com/games/sanandreas" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-primary hover:underline">
                    Rockstar Games Store
                  </a>
                </li>
                <li>Other authorized retailers</li>
              </ul>
              <p className="mt-3 font-semibold">
                We DO NOT support, condone, or provide assistance for pirated copies of the game. 
                Using this mod with illegal copies is a violation of copyright law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">No Warranty</h2>
              <p>
                This mod pack is provided "AS IS" without warranty of any kind, either expressed or implied, 
                including but not limited to the implied warranties of merchantability and fitness for a 
                particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Third-Party Content</h2>
              <p>
                This mod pack contains modifications created by various community members. We have made 
                every effort to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Include only freely available, community-released mods</li>
                <li>Provide proper attribution to original creators where known</li>
                <li>Respect the licensing terms of included mods</li>
              </ul>
              <p className="mt-3">
                If you are a mod creator and believe your work is included without proper permission or 
                attribution, please contact us immediately at{" "}
                <a href="mailto:copyright@gta-san-andreas.one" className="text-primary hover:underline">
                  copyright@gta-san-andreas.one
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">External Links</h2>
              <p>
                This website contains links to external websites (download mirrors, Steam, Rockstar Games, etc.). 
                We have no control over the content and availability of those sites and are not responsible for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Content, privacy policies, or practices of external sites</li>
                <li>Availability or uptime of download mirrors</li>
                <li>Security of file hosting services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Changes to This Disclaimer</h2>
              <p>
                We reserve the right to update this disclaimer at any time without prior notice. 
                Continued use of the website and mod pack after changes constitutes acceptance of the 
                updated disclaimer.
              </p>
            </section>
          </div>
        </Card>

        {/* Bottom Notice */}
        <Alert className="border-primary/50 bg-primary/10">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription>
            <strong>Remember:</strong> Always backup your game files before installing any mods. 
            If you encounter issues, you can restore from backup or verify game files through Steam.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
