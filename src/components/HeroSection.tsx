import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bubble-tea.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary-foreground/10 animate-bubble"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-6 border border-accent/30"
          >
            🧋 Bubble Tea & Frozen Yogurt
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Sip, Smile,
            <br />
            <span className="text-green-light">Repeat.</span>
          </h1>

          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg">
            Handcrafted bubble teas, refreshing smoothies, and creamy frozen yogurt — 
            made fresh daily in Derwood, MD.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-card text-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:shadow-card-hover transition-all hover:scale-105"
            >
              Explore Menu
            </a>
            <a
              href="https://www.grubhub.com/restaurant/bubble-n-berry-7234-muncaster-mill-rd-derwood/3217835"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Order Delivery
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-primary-foreground/70 font-body text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span>4.9 rating</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <span>100+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
