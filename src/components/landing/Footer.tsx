import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary border-t border-primary-foreground/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <span className="flex items-center gap-2.5 font-display text-lg font-bold text-primary-foreground tracking-tight">
          <img
            src={logo}
            alt="Two Evergreen"
            className="h-8 w-8 brightness-0 invert"
          />
          Two Evergreen
          <span className="text-accent">.</span>
        </span>

        {/* Copyright */}
        <p className="text-sm text-primary-foreground/40 order-last md:order-none">
          © {new Date().getFullYear()} Two Evergreen. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:utsav@twoevergreencapital.com"
            className="text-primary-foreground/45 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/utsavghosh20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/45 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
