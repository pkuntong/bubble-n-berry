import { motion } from "framer-motion";
import milkTea from "@/assets/milk-tea.png";
import smoothie from "@/assets/smoothie.png";
import freshTea from "@/assets/fresh-tea.png";
import slush from "@/assets/slush.png";

const menuItems = [
  {
    name: "Milk Tea",
    price: "$5.99",
    description: "Classic non-dairy milk tea with chewy tapioca pearls.",
    image: milkTea,
    rating: "96%",
    popular: true,
  },
  {
    name: "Smoothies",
    price: "$7.99",
    description: "Blend of fresh fruits and yogurt for a refreshing treat.",
    image: smoothie,
    rating: "90%",
  },
  {
    name: "Fresh Tea",
    price: "$5.99",
    description: "Refreshing brew made from premium tea leaves.",
    image: freshTea,
    rating: "97%",
  },
  {
    name: "Slush",
    price: "$7.49",
    description: "Fruity and refreshing iced slush drink.",
    image: slush,
    rating: "95%",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-section-soft">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            Fan Favorites
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Freshly crafted drinks made with quality ingredients — every sip is a delight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 border border-border relative overflow-hidden"
            >
              {item.popular && (
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain group-hover:scale-110 transition-transform duration-300 animate-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{item.name}</h3>
              <p className="font-body text-muted-foreground text-sm mt-1 mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-primary">{item.price}</span>
                <span className="text-xs font-body text-accent font-semibold">
                  👍 {item.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-muted-foreground text-sm mb-4">
            Plus: Aloe Punch, specialty teas, toppings & more!
          </p>
          <a
            href="https://www.grubhub.com/restaurant/bubble-n-berry-7234-muncaster-mill-rd-derwood/3217835"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:shadow-purple transition-all hover:scale-105"
          >
            See Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
