import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Home = () => {
  const navigate = useNavigate();

  const handleScrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-glow-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center z-10"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-primary-foreground">
            ⚡️ Command. Don't Ask.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            The era of rented intelligence is over. Meet <span className="text-primary-foreground font-bold">Sovereign AI Assistant</span> — the last assistant you'll ever need.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            This isn't ChatGPT. This isn't Claude. This is <span className="text-primary-foreground font-semibold">yours</span>.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
            "Offline. Local. Sovereign. The power of GPT-level reasoning, unshackled from clouds, surveillance, and corporate control."
          </p>

          <div className="space-y-4 mb-12 max-w-2xl mx-auto text-left">
            <p className="text-lg text-foreground/80">✓ No subscription. No monthly fees. One payment. Lifetime ownership.</p>
            <p className="text-lg text-foreground/80">✓ Runs on your machine. Your data never leaves your device.</p>
            <p className="text-lg text-foreground/80">✓ No telemetry. No tracking. No surveillance. Pure sovereignty.</p>
            <p className="text-lg text-foreground/80">✓ Adapts to your mind, your rituals, your language.</p>
          </div>

          <Button
            onClick={handleScrollToShowcase}
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
          >
            🔥 Experience Sovereign AI
          </Button>
        </motion.div>
      </section>

 {/* Product Showcase */}
<section id="showcase" className="py-20 px-6">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="container mx-auto"
  >
    <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-0 md:p-0 shadow-glass">
      <div className="aspect-video rounded-lg mb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 z-0" />
        <img
          src="/images/heroAi.png"
          alt="Sovereign AI Product Preview"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
        />
      </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-primary-foreground">
              The Assistant That Understands You
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-6 leading-relaxed">
              Not as data points. Not as metrics. But as a <span className="text-primary-foreground font-semibold">living intelligence</span>.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 text-center mb-8">
              Every conversation shapes it. Every command refines it. Every interaction makes it more <span className="italic">yours</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-foreground">🧠 Your Second Brain</h3>
                <p className="text-muted-foreground">Remembers context across sessions. Learns your patterns. Anticipates your needs.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-foreground">⚡️ Lightning Fast</h3>
                <p className="text-muted-foreground">No API delays. No cloud latency. Pure local processing power.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-foreground">🔐 Fort Knox Security</h3>
                <p className="text-muted-foreground">Zero data leaks. Complete encryption. Absolute privacy.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-foreground">🎯 Infinite Capabilities</h3>
                <p className="text-muted-foreground">Code, write, calculate, strategize, heal, create. All in one.</p>
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-center font-bold mb-8 text-primary-foreground">
              This isn't software. This is your digital daemon.
            </p>

            <div className="text-center">
              <Button
                onClick={() => navigate("/payment")}
                size="lg"
                className="px-10 py-6 text-xl font-bold"
              >
                💎 Get Your Copy Now
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
