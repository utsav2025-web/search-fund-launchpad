import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const people = [
  {
    name: "Utsav G.",
    role: "Co-Founder",
    initials: "UG",
    linkedin: "https://www.linkedin.com/in/utsavghosh20/",
    bio: "I grew up in Portland, Oregon, spending weekends renovating houses with my dad and unloading pallets at my first job. Those experiences gave me a lasting appreciation for the people who keep businesses running every day.\n\nEarlier in my career, I invested in privately owned companies across a range of industries. Over time, I found myself drawn less to the deals and more to the operators behind them — the people leading teams, serving customers, and building something that would last. That led me into operating roles, most recently as CFO and COO of CCOM, a maritime services company, where I helped scale the business, launch a software product, and strengthen operations.\n\nFive years ago, I met Matt. We share a simple belief: when someone hands over a business they've spent years building, the people, culture, and reputation they've created deserve to be protected. His experience founding, operating, and exiting businesses complements my background in investing and scaling businesses, giving us a shared appreciation for both what it takes to build a business and what it takes to grow one.\n\nWe're not looking for a transaction. We're looking for a great company to own, operate, and build upon for decades to come.",
    cta: "We'd love the opportunity to get to know you and learn the story behind your business.",
  },
  {
    name: "Matthew W.",
    role: "Co-Founder and Operating Partner",
    initials: "MW",
    linkedin: "",
    bio: "I'm a U.S. Navy veteran who has spent more than twenty years founding, operating, and growing businesses from the ground up. Over the course of my career, I've built and successfully exited multiple companies serving government and commercial customers, including Fortune 100 organizations such as Marathon.\n\nAfter decades of building businesses, I've come to believe that great companies are defined by their people, culture, and reputation. The most successful organizations invest in their employees, put customers first, and take a long-term view. That's the approach I've tried to bring to every business I've led.\n\nFive years ago, I met Utsav. His experience as both an investor and operator complements my background as a founder and business builder. Together, we bring different perspectives but share the same goal: honoring what owners have built while creating opportunities for employees, customers, and the communities they serve.\n\nWe're not looking to buy a business and move on. We're looking for a great company to own, operate, and strengthen for the long term.",
    cta: "We'd welcome the opportunity to get to know you and learn the story behind your business.",
  },
  {
    name: "Jim N.",
    role: "Advisor",
    initials: "JN",
    linkedin: "",
    bio: "Jim is an Army veteran and senior executive who most recently served as the Global Head of Security at a Fortune 100 company. He has spent decades building teams, leading complex organizations, and developing leaders in high-stakes environments. As an advisor to Two Evergreen, he brings valuable experience in leadership, operations, and organizational growth.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent font-display text-xs tracking-[0.22em] uppercase mb-4 font-medium">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-5">
            The team behind Two Evergreen
          </h2>
          <div className="w-12 h-0.5 bg-accent/60 mb-5" />
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Our team brings decades of experience as founders, operators, and investors, along with a deep appreciation for the work it takes to build a successful business.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {people.map((person, i) => (
            <motion.div key={person.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-sm border border-border bg-card border-t-2 border-t-accent/50 shadow-sm">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-sm font-display font-bold text-accent">{person.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-semibold text-foreground">{person.name}</h4>
                    <p className="text-sm text-accent font-medium">{person.role}</p>
                  </div>
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                      className="ml-auto text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {person.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  {"cta" in person && (
                    <p className="italic text-accent/80 border-t border-border pt-4 mt-4">{person.cta}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
