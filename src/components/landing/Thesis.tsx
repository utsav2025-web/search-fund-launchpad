import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";

const criteria = [
{
  icon: TrendingUp,
  title: "Recurring Revenue",
  description: "Predictable, subscription-based or contract-driven revenue streams"
},
{
  icon: Users,
  title: "Loyal Customer Base",
  description: "Serving mission-critical needs with high retention rates."
},
{
  icon: Target,
  title: "$2M–$5M EBITDA",
  description: "Target businesses generating stable and/or growing cash flows"
}];


const Thesis = () => {
  return (
    <section id="thesis" className="py-12 md:py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16">
          
           <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">WHAT WE LOOK FOR

          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            What we look for
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">We seek to acquire a single, exceptional business in the security industry — one with strong unit economics, a dedicated team, and room to grow under committed ownership.


          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {criteria.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group p-8 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors">
            
              <item.icon className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-display font-semibold text-card-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Thesis;