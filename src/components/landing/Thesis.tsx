import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";

const criteria = [
  {
    icon: TrendingUp,
    title: "Recurring Revenue",
    description:
      "Predictable, subscription-based or contract-driven revenue streams that provide stable cash flow and customer continuity.",
  },
  {
    icon: Users,
    title: "Loyal Customer Base",
    description:
      "Serving mission-critical security needs with high retention rates and long-term customer relationships.",
  },
  {
    icon: Target,
    title: "$2M–$5M EBITDA",
    description:
      "Target businesses generating stable and growing cash flows, demonstrating financial strength and operational discipline.",
  },
];

const Thesis = () => {
  return (
    <section id="thesis" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section header — split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div className="max-w-lg">
            <p className="text-accent font-display text-xs tracking-[0.22em] uppercase mb-4 font-medium">
              What We Look For
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-0">
              Our acquisition criteria
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed font-light max-w-sm md:text-right">
            We seek to acquire a single, exceptional business in the security
            industry — one with strong unit economics, a dedicated team, and
            room to grow under committed ownership.
          </p>
        </motion.div>

        {/* Criteria cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {criteria.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-9 border border-border rounded-sm bg-card hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon with background bubble */}
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <item.icon
                  className="w-5 h-5 text-accent"
                  strokeWidth={1.75}
                />
              </div>

              <h3 className="text-lg font-display font-semibold text-card-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
