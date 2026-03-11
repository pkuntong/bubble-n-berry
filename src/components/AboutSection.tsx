import { motion } from "framer-motion";
import logo from "@/assets/bubblenberry-logo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Where Bubbles
              <br />
              Meet Berries
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              At Bubble n' Berry, we believe every drink should be an experience. 
              Located in the heart of Derwood, Maryland, we craft our bubble teas with 
              premium tea leaves and fresh ingredients — no shortcuts, just flavor.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From our signature milk teas with perfectly chewy tapioca pearls to 
              refreshing fruit smoothies and frozen yogurt, there's something for 
              every taste bud. Come by, bring a friend, and sip something special.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Fresh Daily", icon: "🍃" },
                { label: "Kid Friendly", icon: "👨‍👩‍👧‍👦" },
                { label: "4.9 Stars", icon: "⭐" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-secondary rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-heading text-sm font-semibold text-secondary-foreground mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary flex items-center justify-center shadow-purple">
                <img
                  src={logo}
                  alt="Bubble n' Berry logo"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-lg animate-float">
                100+
                <br />
                reviews
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
