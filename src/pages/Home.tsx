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
  { id: 969, src: "/Images/Screenshot (969).webp", alt: "GTA San Andreas Enhanced Graphics - Los Santos View" },
  { id: 970, src: "/Images/Screenshot (970).webp", alt: "GTA SA HD Mod - Improved Vehicle Models" },
  { id: 971, src: "/Images/Screenshot (971).webp", alt: "GTA San Andreas Ultimate Mod - Character Detail" },
  { id: 972, src: "/Images/Screenshot (972).webp", alt: "GTA SA Compressed - Enhanced Lighting Effects" },
  { id: 973, src: "/Images/Screenshot (973).webp", alt: "GTA San Andreas Download - HD Textures Showcase" },
  { id: 974, src: "/Images/Screenshot (974).webp", alt: "GTA SA Definitive Edition - City Atmosphere" },
  { id: 975, src: "/Images/Screenshot (975).webp", alt: "GTA San Andreas Mod - Improved Shadows" },
  { id: 976, src: "/Images/Screenshot (976).webp", alt: "GTA SA Low End PC - Optimized Performance" },
  { id: 977, src: "/Images/Screenshot (977).webp", alt: "GTA San Andreas 2025 - Modern Graphics" },
  { id: 978, src: "/Images/Screenshot (978).webp", alt: "GTA SA HD Graphics Mod - Urban Details" },
  { id: 979, src: "/Images/Screenshot (979).webp", alt: "GTA San Andreas Download Free - Game Scene" },
  { id: 980, src: "/Images/Screenshot (980).webp", alt: "GTA SA Ultimate - Enhanced Environment" },
  { id: 981, src: "/Images/Screenshot (981).webp", alt: "GTA San Andreas Compressed Edition - Gameplay" },
  { id: 982, src: "/Images/Screenshot (982).webp", alt: "GTA SA Mod Pack - Visual Improvements" },
  { id: 983, src: "/Images/Screenshot (983).webp", alt: "GTA San Andreas HD - Realistic Lighting" },
  { id: 984, src: "/Images/Screenshot (984).webp", alt: "GTA SA Download PC - Game Environment" },
  { id: 985, src: "/Images/Screenshot (985).webp", alt: "GTA San Andreas Ultimate Mod - Street View" },
  { id: 986, src: "/Images/Screenshot (986).webp", alt: "GTA SA Enhanced - Better Textures" },
  { id: 987, src: "/Images/Screenshot (987).webp", alt: "GTA San Andreas Mod 2025 - Updated Graphics" },
  { id: 988, src: "/Images/Screenshot (988).webp", alt: "GTA SA Definitive - Improved Models" },
  { id: 989, src: "/Images/Screenshot (989).webp", alt: "GTA San Andreas Free Download - Final Scene" }
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
              Download{" "}
              <span className="text-gradient">GTA San Andreas</span>
              <br />
              <span className="text-3xl md:text-5xl">Ultimate Mod - Compressed Definitive Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the legendary open-world classic with enhanced HD graphics, optimized performance for low-end PCs, 
              and quality-of-life improvements. Free download (8GB compressed), legal copy required. Available for PC and Android.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the stunning visual upgrades from <strong>gta-san-andreas.one</strong> - HD graphics, enhanced lighting, and improved textures transform your GTA San Andreas gameplay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot) => (
              <div 
                key={screenshot.id} 
                className="aspect-video bg-muted rounded-lg overflow-hidden card-shadow hover:scale-105 transition-transform cursor-pointer group"
              >
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            All screenshots from the GTA San Andreas Ultimate Mod available at <strong className="text-primary">gta-san-andreas.one</strong>
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

      {/* SEO Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-card card-shadow p-8 border-border">
              <article className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4 text-foreground">🔥 About GTA San Andreas - The Ultimate Open-World Experience</h2>
                <p className="text-muted-foreground mb-4">
                  Grand Theft Auto: San Andreas is an open-world action-adventure game developed by Rockstar North and published by Rockstar Games, following the enormous success of its predecessor, Grand Theft Auto: Vice City. Released for PC in 2005, it expanded the foundations laid by Vice City's vibrant 1980s world, pushing the open-world formula to an entirely new level of scale, ambition, and complexity.
                </p>
                <p className="text-muted-foreground mb-6">
                  Set in the fictional state of San Andreas—a sprawling mix of urban chaos, rural deserts, and coastal towns inspired by California and Nevada—the game follows Carl "CJ" Johnson. After returning home to Los Santos following his mother's murder, CJ becomes entangled in gang rivalries, police corruption, and a dangerous climb to power. What begins as a small, personal story of revenge quickly evolves into an epic tale of crime, loyalty, and survival across three huge cities: Los Santos, San Fierro, and Las Venturas.
                </p>

                <h3 className="text-2xl font-semibold mb-3 text-foreground">✨ Why Download Our GTA San Andreas Mod?</h3>
                
                <h4 className="text-xl font-semibold mb-2 text-foreground mt-6">Massive Open World - Enhanced</h4>
                <p className="text-muted-foreground mb-4">
                  San Andreas offers one of the largest and most varied open worlds ever created at the time of its release. From the sun-soaked streets of Los Santos to the misty hills of San Fierro and the neon-lit casinos of Las Venturas, each region has its own culture, atmosphere, and challenges. The world feels alive with pedestrians, vehicles, and random events that make every drive unpredictable. Our mod enhances every corner with HD textures and improved lighting.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-foreground">Deep Character Customization System</h4>
                <p className="text-muted-foreground mb-4">
                  For the first time in the series, players could shape the protagonist both visually and physically. CJ can gain or lose weight, improve stamina, and change hairstyles or tattoos, with each aspect affecting gameplay. Eating too much fast food will make him heavier and slower, while regular exercise at gyms increases strength and agility. This system adds a subtle role-playing dimension to the game.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-foreground">Expansive Mission Variety</h4>
                <p className="text-muted-foreground mb-4">
                  Missions in San Andreas range from small-time gang fights to large-scale heists, government conspiracies, and high-speed chases. The diversity of tasks keeps the gameplay fresh, ensuring that boredom rarely sets in. Many missions involve cinematic set pieces that blend driving, shooting, and strategy.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-foreground">Optimized for Low-End PC & High-End Performance</h4>
                <p className="text-muted-foreground mb-4">
                  Our compressed definitive edition is optimized to run smoothly on both low-end and high-end PCs. Whether you have 2GB RAM or 16GB RAM, you'll experience smooth gameplay with scalable graphics options. The 8GB compressed download includes everything you need without unnecessary bloat.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-foreground">Multiple Download Mirrors Available</h4>
                <p className="text-muted-foreground mb-6">
                  Download from Google Drive, MEGA, or MediaFire—whichever is fastest for your region. We also offer a mobile APK version for Android devices with full mod support and unlimited money. All downloads include automatic installers for hassle-free setup.
                </p>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-semibold mb-2 text-foreground">🎮 Keywords: GTA SA Download, Compressed, Definitive Edition</h4>
                  <p className="text-muted-foreground text-sm">
                    Looking for GTA San Andreas download? Want the compressed version that works on low-end PC? Need the definitive edition with HD graphics? You're in the right place. Download GTA SA with mods, enhanced graphics, performance optimization, and full mobile APK support. This is the ultimate GTA San Andreas experience for 2025.
                  </p>
                </div>
              </article>
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
