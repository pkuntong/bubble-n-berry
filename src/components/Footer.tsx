import logo from "@/assets/bubblenberry-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bubble n' Berry" className="w-10 h-10 rounded-full" />
            <span className="font-heading text-lg font-semibold text-primary-foreground">
              Bubble n' Berry
            </span>
          </div>

          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Bubble n' Berry. Bubble Tea & Frozen Yogurt — Derwood, MD.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bubblenberry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.grubhub.com/restaurant/bubble-n-berry-7234-muncaster-mill-rd-derwood/3217835"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm"
            >
              Grubhub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
