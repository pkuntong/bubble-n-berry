import { motion } from "framer-motion";

const reviews = [
  { name: "Colleen", text: "It was really good!", date: "Nov 2023" },
  { name: "Sarah M.", text: "Best bubble tea in the Derwood area. The milk tea is perfect every single time!", date: "Dec 2023" },
  { name: "David K.", text: "Great smoothies and the frozen yogurt is delicious. My kids love this place.", date: "Jan 2024" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-section-soft">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase">
            Reviews
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-card-hover transition-all"
            >
              <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="font-body text-foreground mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-sm text-foreground">
                  {review.name}
                </span>
                <span className="font-body text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
