import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Zap, Image as ImageIcon, Cpu, HardDrive, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ImageIcon,
    title: "Enhanced Graphics",
    description: "HD textures, improved lighting, and visual effects that bring San Andreas to life."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Runs smoothly on low-end PCs while maintaining visual quality."
  },
  {
    icon: Cpu,
    title: "Quality of Life",
    description: "Bug fixes, improved controls, and gameplay enhancements."
  }
];

const screenshots = [
  { id: 1, alt: "Los Santos skyline with enhanced graphics" },
  { id: 2, alt: "Improved vehicle models and reflections" },
  { id: 3, alt: "Enhanced character models and animations" },
  { id: 4, alt: "Better lighting and shadow effects" },
  { id: 5, alt: "HD texture pack showcase" },
  { id: 6, alt: "Performance comparison" }
];

const systemRequirements = {
  minimum: [
    { label: "OS", value: "Windows 7/8/10/11" },
    { label: "Processor", value: "Intel Pentium 4 / AMD Athlon XP" },
    { label: "Memory", value: "2 GB RAM" },
    { label: "Graphics", value: "128 MB Video Card" },
    { label: "Storage", value: "5 GB available space" }
  ],
  recommended: [
    { label: "OS", value: "Windows 10/11 (64-bit)" },
    { label: "Processor", value: "Intel Core i5 / AMD Ryzen 5" },
    { label: "Memory", value: "8 GB RAM" },
    { label: "Graphics", value: "NVIDIA GTX 660 / AMD HD 7870" },
    { label: "Storage", value: "10 GB available space" }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient">San Andreas</span>
              <br />
              <span className="text-3xl md:text-5xl">Ultimate Mod Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the classic with enhanced graphics, optimized performance, 
              and quality-of-life improvements. Free download, legal copy required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Now (Free)
                </Button>
              </Link>
              <Link to="/tutorials">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                  Installation Guide
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ⚠️ Requires a legal copy of GTA San Andreas
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's <span className="text-gradient">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="gradient-card card-shadow p-8 border-border hover:border-primary/50 transition-all">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot) => (
              <div 
                key={screenshot.id} 
                className="aspect-video bg-muted rounded-lg overflow-hidden card-shadow hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Click any image to view full size • Before/After comparisons available
          </p>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            System <span className="text-gradient">Requirements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="gradient-card card-shadow p-8 border-border">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Monitor className="mr-3 h-6 w-6 text-secondary" />
                Minimum
              </h3>
              <ul className="space-y-4">
                {systemRequirements.minimum.map((req) => (
                  <li key={req.label} className="flex justify-between">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="font-medium text-right ml-4">{req.value}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="gradient-card card-shadow p-8 border-primary/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <HardDrive className="mr-3 h-6 w-6 text-primary" />
                Recommended
              </h3>
              <ul className="space-y-4">
                {systemRequirements.recommended.map((req) => (
                  <li key={req.label} className="flex justify-between">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="font-medium text-right ml-4">{req.value}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Easy <span className="text-gradient">Installation</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="gradient-card card-shadow p-6 border-border">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download the Mod Pack</h3>
                  <p className="text-muted-foreground">
                    Get the latest version from our download page with multiple mirror options.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card card-shadow p-6 border-border">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Run the Installer</h3>
                  <p className="text-muted-foreground">
                    Our automatic installer detects your GTA SA installation and applies the mods safely.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card card-shadow p-6 border-border">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch and Enjoy!</h3>
                  <p className="text-muted-foreground">
                    Start the game and experience San Andreas with stunning improvements.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/tutorials">
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                View Detailed Tutorial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying the ultimate GTA San Andreas experience.
          </p>
          <Link to="/download">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
