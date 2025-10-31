import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent! Lovable is listening… We'll respond soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ⚙️ Need a hand forging your daemon?
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a small circle of engineers, poets, and coders who believe in digital sovereignty.<br />
              We don't have a call center. We have code. Talk directly.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-8 md:p-12 shadow-glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-primary/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-primary/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/50 border-primary/30 min-h-[200px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground py-6 text-lg font-semibold shadow-glow-primary hover:scale-[1.02] transition-transform"
              >
                Send Message ➤
              </Button>
            </form>
          </Card>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 space-y-2"
          >
            <p className="text-lg text-muted-foreground italic">
              "Every great assistant begins with a conversation. Let's build yours."
            </p>
            <p className="text-sm text-muted-foreground">
              🌐 Sovereign Intelligence • © 2025 LOVABLE
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
