import { motion } from "framer-motion";

const steps = [
{
  number: "01",
  title: "Introduction & LOI",
  description: "A confidential conversation to understand your business, goals, and timeline - and share how we approach ownership."
},
{
  number: "02",
  title: "Due Diligence",
  description: "If there is mutual interest, we will work together to better understand the business. During this stage we review financials, and operations while finalizing transaction details."
},
{
  number: "03",
  title: "Closing & Transition",
  description: "With the support of experienced investors and lenders, we close the transaction and ensure a smooth ownership transition—prioritizing continuity for employees, customers, and the business."
}];


const Approach = () => {
  return (
    <section id="approach" className="py-12 md:py-16 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16">
          
           <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">An Efficient Transition
          </h2>
          <p className="text-lg text-primary-foreground/60 leading-relaxed">Straightforward, thoughtful, and confidential.




          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border border-primary-foreground/10 rounded-sm overflow-hidden">
          {steps.map((step, i) => <motion.div key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`p-10 ${i < steps.length - 1 ? "md:border-r border-b md:border-b-0 border-primary-foreground/10" : ""}`}>
            
              <span className="text-accent font-display text-4xl font-bold mb-6 block">
                {step.number}
              </span>
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-primary-foreground/50 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Approach;