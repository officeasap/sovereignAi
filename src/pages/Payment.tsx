
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

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

const Payment = () => {
  const [email, setEmail] = useState("");

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("✅ Thank you, Commander. Your Sovereign AI daemon is being forged. Check your inbox for your encrypted Google Drive zip link.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              🚀 Unlock Sovereign AI — Lifetime License, Full Ownership
            </h2>
            <p className="text-xl text-muted-foreground">
              No subscriptions. No limits. No spying. Pure sovereignty.
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
  <h3 className="text-2xl font-bold mb-4 text-center">
    💌 After payment, we’ll instantly send the zip file to your email. Simply download, unzip, and start using it right away!
  </h3>
  <p className="text-center text-sm mb-6 text-muted-foreground">
    Then, enter your email below to receive your copy:
  </p>
  <div className="flex gap-4">
    <Input
      type="email"
      placeholder="📧 Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 bg-muted/50 border-primary/30"
      required
    />
    <Button type="submit" className="px-6">
      🔓 Confirm
    </Button>
  </div>
</form>

          </Card>
        </div>
      </motion.section>
    </div>
  );
};

export default Payment;

