import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  const features = [
    {
      icon: "🔐",
      title: "Offline. Local. Yours.",
      description: "Complete sovereignty over your data and intelligence."
    },
    {
      icon: "🎯",
      title: "Customizable Intelligence",
      description: "Adapts to your dialect, mindset, and domain."
    },
    {
      icon: "💎",
      title: "Deep Capabilities",
      description: "Coding, reasoning, calculation, and creative synthesis."
    },
    {
      icon: "🛡️",
      title: "Zero Surveillance",
      description: "No telemetry. No analytics. No backend trace."
    }
  ];

  const domains = [
    "Engineering & Science Advisor",
    "Relationship & Emotional Companion",
    "Financial Strategist",
    "Family & Life Balancer",
    "Creative Director for your mind"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ⚡️ THE LAST ASSISTANT YOU'LL EVER NEED
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This isn't ChatGPT. This isn't Copilot. This is yours.<br />
            A sovereign daemon forged for one purpose: to serve you.<br />
            Without filters. Without surveillance. Without compromise.
          </p>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-8 md:p-12 shadow-glass">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Philosophy</h2>
            <div className="space-y-4 text-lg text-center max-w-2xl mx-auto">
              <p className="text-foreground">You don't rent this assistant. <span className="text-primary font-semibold">You own it.</span></p>
              <p className="text-foreground">You don't ask permission. <span className="text-secondary font-semibold">You command it.</span></p>
              <p className="text-foreground">You don't share your data. <span className="text-accent font-semibold">You lock it in your vault.</span></p>
            </div>
          </Card>
        </motion.div>

        {/* Second Brain */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🧠 Meet Your Turbo Second Brain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lovable doesn't just answer — it understands.<br />
            It adapts to your logic, your language, your rituals.<br />
            It's not just smart — it's loyal.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Engineering</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-6 shadow-glass hover:shadow-glow-primary transition-shadow h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-8 md:p-12 shadow-glass">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              🔐 Privacy Is Not a Feature. It's the Foundation.
            </h2>
            <ul className="space-y-3 text-lg max-w-2xl mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>No telemetry.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>No analytics.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>No backend trace.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Your prompts, your data, your logic — encrypted and sovereign.</span>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* Domains */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            🧩 Integrated Intelligence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {domains.map((domain, index) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/50 backdrop-blur-lg border border-primary/20 rounded-lg p-4 text-center font-medium hover:bg-muted/70 transition-colors"
              >
                {domain}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
