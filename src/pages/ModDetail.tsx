import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Image as ImageIcon } from "lucide-react";

// This would typically come from an API or data file
const modData: Record<string, any> = {
  "hd-textures": {
    title: "HD Texture Pack",
    category: "Graphics",
    version: "2.0",
    description: "Complete texture overhaul featuring 2K and 4K resolution textures for buildings, roads, vehicles, and characters.",
    longDescription: `This comprehensive texture pack replaces nearly every texture in GTA San Andreas with high-resolution alternatives. 
    The pack includes textures for buildings, roads, vegetation, vehicles, characters, weapons, and more. 
    
    All textures have been carefully optimized to maintain performance while providing a significant visual upgrade. 
    The pack includes both 2K and 4K variants, allowing you to choose based on your system capabilities.`,
    features: [
      "2K and 4K texture variants available",
      "Optimized for performance with LOD support",
      "Covers buildings, roads, terrain, and props",
      "Vehicle texture improvements",
      "Character and clothing upgrades",
      "Weapon and item textures"
    ],
    changelog: [
      "v2.0: Added 4K texture support",
      "v1.8: Improved vehicle textures",
      "v1.5: Initial release with 2K textures"
    ],
    requirements: [
      "GTA San Andreas (any version)",
      "Minimum 4GB RAM for 2K textures",
      "Recommended 8GB RAM for 4K textures",
      "2GB+ VRAM recommended"
    ]
  },
  "enhanced-vehicles": {
    title: "Enhanced Vehicle Models",
    category: "Vehicles",
    version: "1.8",
    description: "High-quality vehicle models with improved details, reflections, and realistic damage.",
    longDescription: `This mod replaces all vehicle models in GTA San Andreas with enhanced versions featuring 
    higher polygon counts, improved textures, and realistic details. Each vehicle has been carefully modeled 
    to match the original while adding modern visual fidelity.`,
    features: [
      "High-detail vehicle models",
      "Realistic reflections and materials",
      "Improved damage deformation",
      "Custom tire and rim textures",
      "Enhanced interior details"
    ],
    changelog: [
      "v1.8: Added sports car improvements",
      "v1.5: Enhanced damage system",
      "v1.0: Initial release"
    ],
    requirements: [
      "GTA San Andreas",
      "HD Texture Pack (recommended)",
      "4GB RAM minimum"
    ]
  }
  // Add more mod details as needed
};

export default function ModDetail() {
  const { slug } = useParams<{ slug: string }>();
  const mod = slug ? modData[slug] : null;

  if (!mod) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Mod Not Found</h1>
          <Link to="/mods">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mods
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link to="/mods" className="inline-block mb-6">
          <Button variant="ghost" className="hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mods
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{mod.title}</h1>
                  <p className="text-muted-foreground">{mod.description}</p>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                  {mod.category}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Version {mod.version}
              </div>
            </Card>

            {/* Screenshots */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center card-shadow hover:scale-105 transition-transform cursor-pointer">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Description */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-bold mb-4">About This Mod</h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {mod.longDescription}
              </div>
            </Card>

            {/* Features */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-2">
                {mod.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Changelog */}
            <Card className="gradient-card card-shadow p-8 border-border">
              <h2 className="text-2xl font-bold mb-4">Changelog</h2>
              <ul className="space-y-2">
                {mod.changelog.map((change: string, index: number) => (
                  <li key={index} className="text-muted-foreground">
                    {change}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download CTA */}
            <Card className="gradient-card card-shadow p-6 border-primary/50 sticky top-20">
              <h3 className="font-semibold mb-4 text-center">Get This Mod</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Included in the Ultimate Mod pack
              </p>
              <Link to="/download">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect mb-3">
                  <Download className="mr-2 h-4 w-4" />
                  Download Pack
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Free • {mod.version} • Tested & Safe
              </p>
            </Card>

            {/* Requirements */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <h3 className="font-semibold mb-4">Requirements</h3>
              <ul className="space-y-2 text-sm">
                {mod.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Info */}
            <Card className="gradient-card card-shadow p-6 border-border">
              <h3 className="font-semibold mb-4">Mod Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Category</p>
                  <p className="font-medium">{mod.category}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Version</p>
                  <p className="font-medium">{mod.version}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Installation</p>
                  <p className="font-medium">Automatic via installer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
