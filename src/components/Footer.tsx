import logo from "@/assets/bubblenberry-logo.jpeg";
import devLogo from "@/assets/dev-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bubble n' Berry" className="w-10 h-10 rounded-full" />
              <span className="font-heading text-lg font-semibold text-primary-foreground">
                Bubble n' Berry
              </span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30"></div>
            
            <div className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
              <span>dev by</span>
              <a href="https://www.paukuntong.xyz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center">
                <img src={devLogo} alt="PK" className="h-4 w-auto object-contain rounded-sm" />
              </a>
            </div>
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
