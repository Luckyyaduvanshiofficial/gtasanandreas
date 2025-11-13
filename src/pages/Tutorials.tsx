import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

export default function Tutorials() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Installation & <span className="text-gradient">Tutorials</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Step-by-step guides to install and optimize GTA SA Ultimate Mod
          </p>
        </div>

        {/* Prerequisites */}
        <Alert className="mb-8 border-primary/50 bg-primary/10">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription>
            <strong className="font-semibold">Before you begin:</strong> Make sure you have a legal copy of GTA San Andreas installed. 
            The mod will not work without the base game files.
          </AlertDescription>
        </Alert>

        {/* Installation Guide */}
        <Card className="gradient-card card-shadow p-8 border-border mb-8">
          <h2 className="text-2xl font-bold mb-6">Complete Installation Guide</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Download the Mod Pack
              </h3>
              <div className="ml-11 space-y-2 text-muted-foreground">
                <p>1. Visit the <a href="/download" className="text-primary underline">Download page</a></p>
                <p>2. Choose your preferred download mirror (Google Drive recommended)</p>
                <p>3. Save the file to a location you can easily find</p>
                <p>4. Verify the SHA-256 checksum to ensure file integrity</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Backup Your Game Files
              </h3>
              <div className="ml-11 space-y-2 text-muted-foreground">
                <p>1. Locate your GTA San Andreas installation folder</p>
                <p className="text-sm italic">Usually at: C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto San Andreas</p>
                <p>2. Create a backup copy of the entire folder</p>
                <p>3. Name it something like "GTA SA Backup - [Date]"</p>
                <Alert className="mt-3 border-secondary/50">
                  <AlertTriangle className="h-4 w-4 text-secondary" />
                  <AlertDescription className="text-sm">
                    This backup is crucial! If anything goes wrong, you can restore the original game.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Extract and Install
              </h3>
              <div className="ml-11 space-y-2 text-muted-foreground">
                <p>1. Extract the downloaded .zip file using WinRAR, 7-Zip, or Windows built-in extractor</p>
                <p>2. Run the "GTASA_Ultimate_Mod_Installer.exe" as Administrator</p>
                <p>3. The installer will automatically detect your GTA SA installation</p>
                <p>4. Select installation options (HD Textures, Performance Mode, etc.)</p>
                <p>5. Click "Install" and wait for the process to complete (5-10 minutes)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Launch and Configure
              </h3>
              <div className="ml-11 space-y-2 text-muted-foreground">
                <p>1. Launch GTA San Andreas from Steam or your usual method</p>
                <p>2. On first launch, the mod will apply additional configurations</p>
                <p>3. Go to Settings → Display and adjust graphics settings as needed</p>
                <p>4. Recommended: Enable "Frame Limiter" for stable 60 FPS</p>
                <Alert className="mt-3 border-primary/50 bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm">
                    You're all set! Enjoy your enhanced GTA San Andreas experience.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ / Troubleshooting */}
        <Card className="gradient-card card-shadow p-8 border-border">
          <h2 className="text-2xl font-bold mb-6">Common Issues & Solutions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-left">
                Game crashes on startup after installing mods
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">This usually happens due to incompatible settings or corrupted files. Try these solutions:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Verify game files through Steam (Right-click game → Properties → Local Files → Verify integrity)</li>
                  <li>Run the game as Administrator</li>
                  <li>Disable any overlays (Discord, Steam, NVIDIA GeForce Experience)</li>
                  <li>If issue persists, restore from backup and reinstall with "Performance Mode" option</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-left">
                Low FPS or stuttering after installing mods
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Performance issues can be resolved with these optimizations:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Lower graphics settings in-game (reduce Draw Distance first)</li>
                  <li>Enable "Performance Mode" in the mod installer</li>
                  <li>Update your graphics drivers to the latest version</li>
                  <li>Close background applications consuming RAM</li>
                  <li>Consider using the "Low-End PC Optimization" profile in the installer</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-left">
                Textures look blurry or incorrect
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Texture issues can be fixed by:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Ensuring you selected "HD Textures" during installation</li>
                  <li>Increasing "Texture Quality" setting in-game to High or Very High</li>
                  <li>Verifying the download wasn't corrupted (check SHA-256 checksum)</li>
                  <li>Reinstalling the texture pack component only</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-left">
                How to uninstall the mods?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">To completely remove the mods:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Run the installer again and select "Uninstall" option</li>
                  <li>Or, delete the game folder and restore from your backup</li>
                  <li>Or, use Steam's "Verify integrity of game files" feature to restore original files</li>
                  <li>Restart your PC after uninstallation for clean state</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-left">
                Can I use these mods with other mods?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Compatibility depends on the other mods:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Compatible:</strong> Script mods (CLEO mods), mission mods, sound mods</li>
                  <li><strong>May Conflict:</strong> Other texture packs, ENB presets, handling mods</li>
                  <li><strong>Not Recommended:</strong> Other "complete overhaul" mod packs</li>
                  <li>Always test new mods in a separate game copy first</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        {/* Low-End PC Tips */}
        <Card className="gradient-card card-shadow p-8 border-border mt-8">
          <h2 className="text-2xl font-bold mb-4">Low-End PC Optimization Guide</h2>
          <p className="text-muted-foreground mb-4">
            Playing on older hardware? These tweaks will help you maintain good FPS:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">In-Game Settings</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>Draw Distance: 50-70%</li>
                <li>Visual FX Quality: Medium or Low</li>
                <li>Anti-Aliasing: Off or 2x</li>
                <li>Frame Limiter: On (limits to 60 FPS for stability)</li>
                <li>Resolution: 1280x720 or 1366x768</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Installer Options</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>Use "Performance Mode" profile</li>
                <li>Select "2K Textures" instead of 4K</li>
                <li>Enable "Low-End Optimization Pack"</li>
                <li>Skip "Advanced Lighting System" if FPS drops below 30</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Windows Optimizations</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>Close unnecessary background programs</li>
                <li>Set game to "High Priority" in Task Manager</li>
                <li>Disable Windows visual effects (System Properties → Performance → Adjust for best performance)</li>
                <li>Keep at least 20% of disk space free on your main drive</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
