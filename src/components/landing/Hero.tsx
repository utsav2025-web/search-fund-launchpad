import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/forest-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl">
          
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Two Evergreen" className="w-10 h-10 brightness-0 invert" />
            <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-8">Building upon the legacy of{' '}
            <span className="text-accent">exceptional</span> security businesses.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl leading-relaxed mb-12">
            Two Evergreen is dedicated to acquiring, operating, and growing a single security company
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground font-display font-medium text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity tracking-wide">
              Connect With Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a href="#thesis" className="text-primary-foreground/40 hover:text-accent transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>);

};

export default Hero;