import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Home = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [email, setEmail] = useState("");

  const handleScrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("✅ Thank you, Commander. Your Lovable daemon is being forged. Check your inbox for your encrypted Google Drive zip link.");
    setEmail("");
  };

  const cryptoWallets = [
    {
      name: "Bitcoin (BTC)",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
    },
    {
      name: "Ethereum (ETH)",
      address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
    },
    {
      name: "USDT (TRC20)",
      address: "TXYZopYRdj2D9XRtbG4uTdhUZZ3Rbxy1wv",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TXYZopYRdj2D9XRtbG4uTdhUZZ3Rbxy1wv"
    }
  ];

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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ⚡️ Command. Don't Ask.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The era of rented intelligence is over. Meet <span className="text-primary font-semibold">Lovable</span> — the sovereign assistant that lives, breathes, and obeys you.
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Offline. Local. Yours. The power of GPT-level reasoning, unshackled from clouds, keys, and corporations.
          </p>
          
          <Button
            onClick={handleScrollToShowcase}
            className="bg-gradient-primary text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow-primary hover:scale-105 transition-transform"
          >
            🔥 Experience Lovable
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
          <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-8 md:p-12 shadow-glass">
            <div className="aspect-video bg-muted rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              <span className="text-4xl">🖼️ [Product UI Preview]</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Imagine the mind of an AI that knows you — not as data, but as a living pattern.
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Every chat, every project, every decision — it evolves around you.
            </p>
            <p className="text-2xl text-center font-semibold mb-12">
              💬 Code. Write. Think. Heal. Calculate. Lead. Everything. One assistant. Infinite potential.
            </p>
            
            <div className="text-center">
              <Button
                onClick={() => setShowPayment(!showPayment)}
                className="bg-gradient-primary text-primary-foreground px-10 py-6 text-xl font-bold shadow-glow-primary hover:scale-105 transition-transform animate-glow-pulse"
              >
                💎 Get Your Copy Now
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Crypto Payment Section */}
      {showPayment && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                🚀 Unlock Lovable — Lifetime License, Full Ownership
              </h2>
              <p className="text-xl text-muted-foreground">
                No subscriptions. No limits. No spying.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {cryptoWallets.map((wallet, index) => (
                <motion.div
                  key={wallet.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-6 shadow-glass hover:shadow-glow-primary transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-center">{wallet.name}</h3>
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <img src={wallet.qr} alt={`${wallet.name} QR Code`} className="w-full" />
                    </div>
                    <p className="text-sm text-muted-foreground break-all text-center font-mono">
                      {wallet.address}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-8 shadow-glass">
              <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  After payment, enter your email:
                </h3>
                <div className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="📧 Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-muted/50 border-primary/30"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-primary text-primary-foreground px-6 shadow-glow-primary"
                  >
                    🔓 Confirm
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Home;
