import logo from "@/assets/logo_transparent.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="flex items-center gap-2 font-display text-lg font-bold text-primary-foreground tracking-tight">
          <img src={logo} alt="Two Evergreen" className="h-9 w-9 -ml-1 brightness-0 invert" />
          Two Evergreen<span className="text-accent">.</span>
        </span>
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Two Evergreen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
