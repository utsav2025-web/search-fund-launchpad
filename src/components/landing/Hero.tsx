import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

      {/* Layered overlay — deeper gradient for strong text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/85 to-primary/75" />

      {/* Subtle radial highlight on the right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(148,200,170,0.07),transparent)]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/60" />

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Kicker row */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src={logo}
              alt="Two Evergreen"
              className="w-9 h-9 brightness-0 invert opacity-80"
            />
            <span className="w-8 h-px bg-accent/50" />
            <p className="text-accent/90 font-display text-xs tracking-[0.22em] uppercase font-medium">
              Security Industry · Houston, TX
            </p>
          </div>

          {/* Headline — white for high contrast, italic accent word in light green */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold text-primary-foreground leading-[1.08] tracking-tight mb-7">
            Building upon the legacy of{" "}
            <em className="not-italic text-accent">exceptional</em>{" "}
            security businesses.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/65 font-body font-light max-w-xl leading-relaxed mb-12">
            Two Evergreen is dedicated to acquiring, operating, and growing a
            single security company — with the same care and commitment the
            owner built it with.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-white text-primary font-display font-semibold text-sm px-8 py-4 rounded-sm hover:bg-primary-foreground transition-colors tracking-wide group"
            >
              Connect With Us
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-12 left-0 flex items-center gap-3 text-primary-foreground/30"
        >
          <span className="w-10 h-px bg-primary-foreground/20" />
          <span className="text-xs tracking-[0.12em] uppercase font-display">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
