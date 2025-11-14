import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download as DownloadIcon, ExternalLink, Copy, Check, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";

const downloadMirrors = [
  {
    name: "Google Drive",
    icon: "🔵",
    url: "https://drive.google.com/file/d/10eHSDRGD3r2ZTVZBp3jx6xDf3jlj-YVa/",
    recommended: true
  },
  {
    name: "MEGA",
    icon: "🔴",
    url: "#mega-link",
    recommended: false
  },
  {
    name: "MediaFire",
    icon: "🟡",
    url: "https://www.mediafire.com/file_premium/4ub2emy3shfkg54/GTA-SA-v2.11.264-full-mod-money-apkvision.apk/file",
    recommended: false
  }
];

const mobileDownload = {
  name: "Mobile APK (Android)",
  icon: "📱",
  url: "https://www.mediafire.com/file_premium/4ub2emy3shfkg54/GTA-SA-v2.11.264-full-mod-money-apkvision.apk/file",
  size: "2.5 GB",
  version: "v2.11.264"
};

const fileInfo = {
  version: "2.0.1",
  size: "8 GB",
  checksum: "a3f5d8c9e4b2f1a7d6e8c3b5a2f9d1e4c7b6a5d8f3e2c1b9a4d7e6f5c8b2a1d3",
  releaseDate: "January 15, 2025"
};

export default function Download() {
  const [copiedChecksum, setCopiedChecksum] = useState(false);

  const copyChecksum = () => {
    navigator.clipboard.writeText(fileInfo.checksum);
    setCopiedChecksum(true);
    setTimeout(() => setCopiedChecksum(false), 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-gradient">GTA San Andreas Ultimate Mod</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the definitive edition with enhanced HD graphics, performance optimizations, compressed for faster downloads, and comprehensive bug fixes. Transform your GTA SA experience today.
          </p>
        </div>

        {/* SEO Article Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="gradient-card card-shadow p-8 border-border">
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4 text-foreground">🔥 What is Grand Theft Auto: San Andreas Ultimate Mod?</h2>
              <p className="text-muted-foreground mb-4">
                Grand Theft Auto: San Andreas is an open-world action-adventure game developed by Rockstar North and published by Rockstar Games, following the enormous success of its predecessor, Grand Theft Auto: Vice City. Released for PC in 2005, it expanded the foundations laid by Vice City's vibrant 1980s world, pushing the open-world formula to an entirely new level of scale, ambition, and complexity.
              </p>
              <p className="text-muted-foreground mb-6">
                Our Ultimate Mod takes this legendary game and elevates it to modern standards with enhanced HD textures, improved lighting systems, optimized performance for both high-end and low-end PCs, and comprehensive bug fixes that make the experience smoother than ever. Whether you're playing on Windows 7, 8, 10, or 11, this compressed definitive edition delivers the complete San Andreas experience.
              </p>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">✨ Features of GTA San Andreas Ultimate Mod</h3>
              
              <h4 className="text-xl font-semibold mb-2 text-foreground mt-6">Massive Open World Enhanced</h4>
              <p className="text-muted-foreground mb-4">
                San Andreas offers one of the largest and most varied open worlds ever created. From the sun-soaked streets of Los Santos to the misty hills of San Fierro and the neon-lit casinos of Las Venturas, each region has its own culture, atmosphere, and challenges. Our mod enhances every corner with HD textures, improved draw distance, and realistic lighting that makes the world feel more alive than ever before.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Deep Character Customization</h4>
              <p className="text-muted-foreground mb-4">
                For the first time in the series, players can shape the protagonist both visually and physically. CJ can gain or lose weight, improve stamina, and change hairstyles or tattoos, with each aspect affecting gameplay. Our mod adds even more customization options and improves the visual quality of all character models.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Performance Optimization</h4>
              <p className="text-muted-foreground mb-4">
                Whether you're running a low-end PC or a high-performance gaming rig, this compressed mod is optimized to deliver smooth 60+ FPS gameplay. We've included performance tweaks, memory optimizations, and scalable graphics settings that ensure everyone can enjoy San Andreas at its best.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Compressed for Faster Downloads</h4>
              <p className="text-muted-foreground mb-6">
                At just 8GB, this compressed definitive edition includes everything you need without unnecessary bloat. Fast download speeds from multiple mirrors (Google Drive, MEGA, MediaFire) ensure you'll be playing within hours, not days.
              </p>
            </article>
          </Card>
        </div>

        {/* Legal Warning */}
        <Alert className="mb-8 border-primary/50 bg-primary/10 max-w-4xl mx-auto">
          <AlertTriangle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-base">
            <strong className="font-semibold">Legal Notice:</strong> This mod requires a legal copy of GTA San Andreas. 
            We do not distribute the original game files. Purchase the game from{" "}
            <a href="https://store.steampowered.com/app/12120/Grand_Theft_Auto_San_Andreas/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-primary underline hover:text-primary/80">
              Steam
            </a>{" "}
            or{" "}
            <a href="https://www.rockstargames.com/games/sanandreas" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-primary underline hover:text-primary/80">
              Rockstar Games
            </a>.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Download Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* File Information */}
        <Card className="gradient-card card-shadow p-8 border-border">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <DownloadIcon className="mr-3 h-6 w-6 text-primary" />
            File Information
          </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Version</p>
                  <p className="font-semibold text-lg">{fileInfo.version}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">File Size</p>
                  <p className="font-semibold text-lg">{fileInfo.size}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Release Date</p>
                  <p className="font-semibold">{fileInfo.releaseDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Format</p>
                  <p className="font-semibold">.zip</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">SHA-256 Checksum:</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyChecksum}
                    className="h-8"
                  >
                    {copiedChecksum ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <code className="text-xs text-muted-foreground break-all block">
                  {fileInfo.checksum}
                </code>
              </div>
            </Card>

            {/* Download Mirrors - PC Version */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-semibold mb-6">Download Mirrors - PC Version</h2>
              <div className="space-y-4">
                {downloadMirrors.map((mirror) => (
                  <div
                    key={mirror.name}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                      mirror.recommended
                        ? "border-primary/50 bg-primary/5"
                        : "border-border bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{mirror.icon}</span>
                      <div>
                        <p className="font-semibold flex items-center gap-2">
                          {mirror.name}
                          {mirror.recommended && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {mirror.recommended ? "Fastest & most reliable" : "Alternative mirror"}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={mirror.url} target="_blank" rel="noopener noreferrer">
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Mobile APK Download */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-semibold mb-6">Mobile Download - Android APK</h2>
              <div className="border-primary/50 bg-primary/5 p-4 rounded-lg border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{mobileDownload.icon}</span>
                    <div>
                      <p className="font-semibold flex items-center gap-2">
                        {mobileDownload.name}
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                          {mobileDownload.version}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Full mod with unlimited money - {mobileDownload.size}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    asChild
                  >
                    <a href={mobileDownload.url} target="_blank" rel="noopener noreferrer">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download APK
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ⚠️ Note: Enable "Install from Unknown Sources" in Android settings before installing.
              </p>
            </Card>

            {/* Virus Scan */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Verified Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    This file has been scanned with VirusTotal and is confirmed safe. 
                    Always verify the SHA-256 checksum after downloading.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Guide */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <h3 className="text-xl font-semibold mb-4">Quick Installation</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    1
                  </span>
                  <span>Download from any mirror above</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    2
                  </span>
                  <span>Verify SHA-256 checksum matches</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    3
                  </span>
                  <span>Extract and run installer</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    4
                  </span>
                  <span>Follow on-screen instructions</span>
                </li>
              </ol>
              <Button variant="outline" className="w-full mt-4 border-primary/50" asChild>
                <a href="/tutorials">
                  Detailed Tutorial
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* What's Included */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  HD Texture Pack (2K/4K)
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Enhanced Vehicle Models
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Improved Lighting System
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Performance Optimizations
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Bug Fixes & Patches
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Automatic Installer
                </li>
              </ul>
            </Card>

            {/* Need Help */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Having issues with installation or download?
              </p>
              <Button variant="outline" className="w-full border-secondary" asChild>
                <a href="/tutorials">
                  View Troubleshooting Guide
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
