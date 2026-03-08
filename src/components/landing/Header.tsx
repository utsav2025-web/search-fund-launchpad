import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
          <img src={logo} alt="Two Evergreen" className="h-10 w-10 -ml-1" />
          Two Evergreen
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;