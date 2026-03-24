import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Introduction & LOI",
    description:
      "A confidential conversation to understand your business, goals, and timeline — and share how we approach ownership. No pressure, no rush.",
  },
  {
    number: "02",
    title: "Due Diligence",
    description:
      "If there is mutual interest, we work together to better understand the business. We review financials and operations while finalizing transaction details.",
  },
  {
    number: "03",
    title: "Closing & Transition",
    description:
      "With the support of experienced investors and lenders, we close the transaction and ensure a smooth ownership transition — prioritizing continuity for employees, customers, and the business.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 md:py-32 bg-primary">
      <div className="container">
        {/* Header — split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-accent/80 font-display text-xs tracking-[0.22em] uppercase mb-4 font-medium">
              Process
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
              An Efficient Transition
            </h2>
          </div>
          <p className="text-primary-foreground/55 leading-relaxed font-light max-w-xs md:text-right text-base">
            Straightforward, thoughtful, and confidential — from first
            conversation to close.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-primary-foreground/10 rounded-sm overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`p-10 md:p-12 hover:bg-primary-foreground/4 transition-colors ${
                i < steps.length - 1
                  ? "md:border-r border-b md:border-b-0 border-primary-foreground/10"
                  : ""
              }`}
            >
              {/* Large ghosted step number */}
              <span className="block font-display text-5xl md:text-6xl font-bold text-primary-foreground/10 mb-6 leading-none select-none">
                {step.number}
              </span>

              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-primary-foreground/55 leading-relaxed text-sm font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
