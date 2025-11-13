import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const mods = [
  {
    id: "hd-textures",
    title: "HD Texture Pack",
    category: "Graphics",
    description: "2K and 4K texture replacements for buildings, roads, vehicles, and characters. Dramatically improves visual quality while maintaining performance.",
    features: ["2K/4K Textures", "Optimized for Performance", "LOD Support"],
    version: "2.0"
  },
  {
    id: "enhanced-vehicles",
    title: "Enhanced Vehicle Models",
    category: "Vehicles",
    description: "High-quality vehicle models with improved details, reflections, and realistic damage. Includes all vehicles from the base game.",
    features: ["HD Models", "Realistic Physics", "Custom Textures"],
    version: "1.8"
  },
  {
    id: "lighting-overhaul",
    title: "Advanced Lighting System",
    category: "Graphics",
    description: "Complete lighting overhaul with dynamic shadows, improved sun rays, and realistic nighttime illumination.",
    features: ["Dynamic Shadows", "Volumetric Lighting", "HDR Support"],
    version: "3.1"
  },
  {
    id: "character-improvements",
    title: "Character Model Upgrades",
    category: "Characters",
    description: "Enhanced character models with better textures, facial animations, and clothing details for CJ and all NPCs.",
    features: ["HD Faces", "Better Animations", "Clothing Details"],
    version: "1.5"
  },
  {
    id: "performance-pack",
    title: "Performance Optimization Pack",
    category: "Performance",
    description: "Various performance tweaks and optimizations to ensure smooth gameplay on low-end systems without sacrificing visual quality.",
    features: ["FPS Boost", "Memory Optimization", "Load Time Reduction"],
    version: "2.2"
  },
  {
    id: "bug-fixes",
    title: "Community Bug Fixes",
    category: "Fixes",
    description: "Collection of bug fixes addressing common issues, crashes, and gameplay problems from the original game.",
    features: ["Crash Fixes", "Mission Fixes", "Audio Fixes"],
    version: "1.9"
  }
];

const categories = ["All", "Graphics", "Vehicles", "Characters", "Performance", "Fixes"];

export default function Mods() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Included <span className="text-gradient">Mods</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all the mods included in the Ultimate Mod pack. Each mod has been carefully tested and optimized.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-primary text-primary-foreground" : "border-border"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Mods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {mods.map((mod) => (
            <Card key={mod.id} className="gradient-card card-shadow border-border overflow-hidden group hover:border-primary/50 transition-all">
              {/* Mod Image Placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <ImageIcon className="h-16 w-16 text-muted-foreground" />
              </div>
              
              {/* Mod Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                    {mod.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">v{mod.version}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {mod.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {mod.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {mod.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/mods/${mod.id}`}>
                  <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-card card-shadow p-8 max-w-3xl mx-auto border-primary/50">
            <h2 className="text-2xl font-bold mb-4">Get All These Mods in One Pack</h2>
            <p className="text-muted-foreground mb-6">
              Download the complete Ultimate Mod pack and get all these enhancements with our easy-to-use installer.
            </p>
            <Link to="/download">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Download Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
