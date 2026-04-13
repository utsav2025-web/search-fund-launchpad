import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import utsavChildhood from "@/assets/utsav-childhood.png";
import utsavFrankie from "@/assets/utsav-frankie.png";

const people = [
{ name: "Utsav Ghosh", role: "Owner", initials: "UG", linkedin: "https://www.linkedin.com/in/utsavghosh20/", bio: "Hi – I'm Utsav\n\nI previously served as CFO and COO of CCOM, a national security integration company, where I helped grow the business, double the team, and improve how we served customers.\n\nI grew up in Portland, Oregon, and spent many weekends at Home Depot and renovating houses with my dad. My first job was unloading pallets and stocking warehouse shelves. Those experiences gave me a real appreciation for the hard work it takes to run and grow a small business.\n\nEarlier in my career, I spent several years investing in privately owned companies, but I realized I was most drawn to businesses where owners knew their employees by name and took pride in what they had built. That's what led me to join Matt at CCOM.\n\nToday, my goal is simple: to partner with a business owner who cares deeply about their employees, customers, and community, and continue building on the foundation they've created.\n\nOutside of work, I spend most of my time with my very food-motivated dog, Frankie.\n\nI'd love the opportunity to get to know you and learn the story behind your business." },
  { name: "Matthew W.", role: "Operating Partner & Two Evergreen Investor", initials: "MW", linkedin: "", bio: "Matt is a Navy veteran and former CEO of multiple security integration companies, including CCOM. I've worked alongside him for over five years and learned more from those conversations than almost anywhere else. He has spent decades building and leading security businesses with a consistent focus on the people and teams who serve customers every day." }];


const Team = () => {
  return (
    <section id="team" className="py-12 md:py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16">
          
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            The team behind Two Evergreen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Security isn't new to us. Our team has experience building and supporting security companies.</p>
        </motion.div>

        {/* Utsav - full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-sm border border-border bg-card mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-display font-bold text-accent">
                {people[0].initials}
              </span>
            </div>
            <div>
              <h4 className="text-base font-display font-semibold text-foreground">
                {people[0].name}
              </h4>
              <p className="text-sm text-accent font-medium">{people[0].role}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3 flex-1 md:pt-4">
              {people[0].bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 md:-mt-2">
              <div className="relative">
                <img src={utsavChildhood} alt="Utsav as a child with siblings" className="w-full sm:w-52 h-40 md:w-64 md:h-48 object-cover rounded-sm" />
              </div>
              <img src={utsavFrankie} alt="Utsav with his dog Frankie" className="w-full sm:w-52 h-40 md:w-64 md:h-48 object-cover rounded-sm" />
            </div>
          </div>
          <a href={people[0].linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors mt-3">
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* Matt & Jim - two columns below */}
        <div className="grid sm:grid-cols-2 gap-8">
          {people.slice(1).map((person, i) =>
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            className="p-6 rounded-sm border border-border bg-card">
            
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-sm font-display font-bold text-accent">
                    {person.initials}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground">
                    {person.name}
                  </h4>
                  <p className="text-sm text-accent font-medium">{person.role}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {person.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {person.linkedin ? (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors mt-3">
                  <Linkedin size={18} />
                </a>
              ) : (
                <span className="mt-3" />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Team;
