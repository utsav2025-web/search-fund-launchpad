import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import utsavChildhood from "@/assets/utsav-childhood.png";
import utsavFrankie from "@/assets/utsav-frankie.png";

const people = [
  {
    name: "Utsav Ghosh",
    role: "Founder & Owner",
    initials: "UG",
    linkedin: "https://www.linkedin.com/in/utsavghosh20/",
    bio: "I previously served as CFO and COO of CCOM, a national security integration company, where I helped grow the business, double the team, and improve how we served customers.\n\nI grew up in Portland, Oregon, and spent many weekends at Home Depot and renovating houses with my dad. My first job was unloading pallets and stocking warehouse shelves. Those experiences gave me a real appreciation for the hard work it takes to run and grow a small business.\n\nEarlier in my career, I spent several years investing in privately owned companies, but I realized I was most drawn to businesses where owners knew their employees by name and took pride in what they had built. That's what led me to join Matt at CCOM.\n\nToday, my goal is simple: to partner with a business owner who cares deeply about their employees, customers, and community, and continue building on the foundation they've created.\n\nOutside of work, I spend most of my time with my very food-motivated dog, Frankie.",
    cta: "I'd love the opportunity to get to know you and learn the story behind your business.",
  },
  {
    name: "Matthew W.",
    role: "Operating Partner & Two Evergreen Investor",
    initials: "MW",
    linkedin: "",
    bio: "Matt is a Navy veteran who has spent his career in the security integration industry — founding, running, and growing companies from the ground up. I've worked alongside him for over five years and seen firsthand how he leads: with deep respect for the people doing the work every day.",
  },
  {
    name: "Jim N.",
    role: "Advisor",
    initials: "JN",
    linkedin: "",
    bio: "Jim is an Army veteran and the Global Head of Security at Apple. He has spent decades leading large security organizations and knows what it takes to build teams that actually protect people, facilities, and operations at scale. His perspective on the industry is something we lean on heavily.",
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
            Security isn't new to us. Our team has decades of experience
            building and supporting security companies — and a deep respect for
            the owners who built them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm border border-border bg-card border-t-2 border-t-accent/50 shadow-sm mb-6"
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-sm font-display font-bold text-accent">{people[0].initials}</span>
              </div>
              <div>
                <h4 className="text-lg font-display font-semibold text-foreground">{people[0].name}</h4>
                <p className="text-sm text-accent font-medium">{people[0].role}</p>
              </div>
              {people[0].linkedin && (
                <a href={people[0].linkedin} target="_blank" rel="noopener noreferrer"
                  className="ml-auto text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
                {people[0].bio.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                <p className="italic text-accent/80 border-t border-border pt-4 mt-4">{people[0].cta}</p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <div className="relative">
                  <img src={utsavChildhood} alt="Utsav as a child with siblings"
                    className="w-full sm:w-52 h-40 md:w-60 md:h-44 object-cover rounded-sm" />
                </div>
                <img src={utsavFrankie} alt="Utsav with his dog Frankie"
                  className="w-full sm:w-52 h-40 md:w-60 md:h-44 object-cover rounded-sm" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {people.slice(1).map((person, i) => (
            <motion.div key={person.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="p-8 rounded-sm border border-border bg-card border-t-2 border-t-accent/30 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-sm font-display font-bold text-accent">{person.initials}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-display font-semibold text-foreground">{person.name}</h4>
                  <p className="text-sm text-accent font-medium">{person.role}</p>
                </div>
                {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {person.bio.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
