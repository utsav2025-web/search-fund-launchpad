import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const navItems = [
  { label: "Who We Are", href: "team" },
  { label: "What We Look For", href: "thesis" },
  { label: "Process", href: "approach" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/97 shadow-lg shadow-primary/20 backdrop-blur-md"
          : "bg-primary/80 backdrop-blur-md"
      } border-b border-primary-foreground/8`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-primary-foreground hover:text-primary-foreground/90 transition-colors"
        >
          <img src={logo} alt="Two Evergreen" className="h-9 w-9 brightness-0 invert" />
          Two Evergreen
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-sm font-medium text-primary-foreground/65 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-white text-primary px-5 py-2.5 rounded-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 pb-6 pt-4 space-y-5"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-primary-foreground"
          >
            Get in Touch →
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
