import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
              Visit Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
              Come Say Hi!
            </h2>

            <div className="space-y-6 font-body">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    7234 Muncaster Mill Rd<br />
                    Derwood, MD 20855
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Phone</h3>
                  <a href="tel:+12404776171" className="text-primary hover:underline">
                    (240) 477-6171
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">
                    Every Day: 12:00 PM – 8:20 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/bubblenberry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @bubblenberry on Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.grubhub.com/restaurant/bubble-n-berry-7234-muncaster-mill-rd-derwood/3217835"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:shadow-purple transition-all hover:scale-105"
              >
                Order on Grubhub
              </a>
              <a
                href="https://postmates.com/store/bubble-n-berry/4jaiBEYiQQe1nlkNQn47Lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:shadow-card-hover transition-all hover:scale-105"
              >
                Order on Postmates
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5!2d-77.15!3d39.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzEyLjAiTiA3N8KwMDknMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bubble n' Berry location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
