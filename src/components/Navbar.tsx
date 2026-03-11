import { motion } from "framer-motion";
import logo from "@/assets/bubblenberry-logo.jpeg";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Bubble n' Berry" className="w-12 h-12 rounded-full" />
          <span className="font-heading text-xl font-semibold text-foreground">
            Bubble n' Berry
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-body font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors">Visit Us</a>
        </div>
        <a
          href="https://www.grubhub.com/restaurant/bubble-n-berry-7234-muncaster-mill-rd-derwood/3217835"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-heading font-medium text-sm hover:shadow-purple transition-all hover:scale-105"
        >
          Order Now
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
