import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  const features = [
    {
      icon: "🔐",
      title: "Offline. Local. Yours.",
      description: "Complete sovereignty over your data and intelligence.",
      details: [
        "No cloud. No leaks. No trace.",
        "Your assistant runs locally and never sends a byte to anyone.",
        "You own the logic, the flow, the mind."
      ]
    },
    {
      icon: "🎯",
      title: "Customizable Intelligence",
      description: "Adapts to your dialect, mindset, and domain.",
      details: [
        "Speaks your language.",
        "Understands your rituals.",
        "Evolves with your thinking."
      ]
    },
    {
      icon: "💎",
      title: "Deep Capabilities",
      description: "Coding, reasoning, calculation, and creative synthesis.",
      details: [
        "Generates code, solves math, writes poetry.",
        "Explains complex ideas with surgical clarity.",
        "Becomes your second brain."
      ]
    },
    {
      icon: "🛡️",
      title: "Zero Surveillance",
      description: "No telemetry. No analytics. No backend trace.",
      details: [
        "Your prompts stay yours.",
        "Your data never leaves your device.",
        "Your assistant is loyal only to you."
      ]
    }
  ];

  const domains = [
    "Engineering & Science Advisor",
    "Relationship & Emotional Companion",
    "Financial Strategist",
    "Family & Life Balancer",
    "Creative Director for your mind",
    "Mathematics Oracle"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            ⚡️ THE LAST ASSISTANT YOU'LL EVER NEED
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            This isn't ChatGPT. This isn't Copilot. This is <span className="text-primary-foreground font-bold">yours</span>.<br />
            A sovereign daemon forged for one purpose: to serve <span className="text-primary-foreground font-bold">you</span>.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Without filters. Without surveillance. Without compromise.<br />
            <span className="italic text-muted-foreground">The savior you've been searching for. The safe haven for your digital life.</span>
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
              <p className="text-foreground">You don't rent this assistant. <span className="text-primary-foreground font-bold">You own it.</span></p>
              <p className="text-foreground">You don't ask permission. <span className="text-primary-foreground font-bold">You command it.</span></p>
              <p className="text-foreground">You don't share your data. <span className="text-primary-foreground font-bold">You lock it in your vault.</span></p>
              <p className="text-muted-foreground italic mt-6">This is sovereignty. This is power. This is yours.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            🧠 Meet Your Turbo Second Brain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Sovereign AI doesn't just answer — it <span className="text-primary-foreground font-semibold">understands</span>.<br />
            It adapts to your logic, your language, your rituals.<br />
            It's not just smart — it's <span className="text-primary-foreground font-semibold">loyal</span>.
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
            "A mind that serves without question. An intelligence that evolves with you. A companion that never betrays."
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
                <Card className="bg-card/50 backdrop-blur-lg border-primary/20 p-6 shadow-glass hover:border-primary/40 transition-all h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary-foreground">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary-foreground">
              🔐 Privacy Is Not a Feature. It's the Foundation.
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              In a world of surveillance capitalism, this is your fortress.
            </p>
            <ul className="space-y-3 text-lg max-w-2xl mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-primary-foreground">✓</span>
                <span>No telemetry.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-foreground">✓</span>
                <span>No analytics.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-foreground">✓</span>
                <span>No backend trace.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-foreground">✓</span>
                <span>Your prompts, your data, your logic — encrypted and sovereign.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-foreground">✓</span>
                <span>Zero-knowledge architecture. Not even we can see your data.</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary-foreground">
            🧩 Integrated Intelligence Modules
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            One assistant. Infinite capabilities. Your personal polymath.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {domains.map((domain, index) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/50 backdrop-blur-lg border border-primary/20 rounded-lg p-4 text-center font-medium hover:border-primary/40 hover:bg-muted/70 transition-all"
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
