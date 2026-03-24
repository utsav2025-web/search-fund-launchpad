import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzViOYgC3dj4zh8nVlk-nXkdYxHqFhtSx3FEgPLnVolhNwcHHV6V7sXDHDLOn9qJPQR4Q/exec";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) return;
    setStatus("sending");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-display text-xs tracking-[0.22em] uppercase mb-4 font-medium">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-5">
              Let's start a conversation
            </h2>
            {/* Divider */}
            <div className="w-12 h-0.5 bg-accent/60 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Whether you're a business owner considering your succession
              options, or a broker with a relevant opportunity — we'd love to
              hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:utsav@twoevergreencapital.com"
                  className="hover:text-foreground transition-colors"
                >
                  utsav@twoevergreencapital.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Houston, TX</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-display font-semibold text-foreground/70 mb-2 tracking-wide uppercase">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="James"
                />
              </div>
              <div>
                <label className="block text-xs font-display font-semibold text-foreground/70 mb-2 tracking-wide uppercase">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="Whitfield"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-foreground/70 mb-2 tracking-wide uppercase">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                placeholder="james@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-foreground/70 mb-2 tracking-wide uppercase">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                placeholder="Tell us about your business or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm px-8 py-4 rounded-sm hover:bg-primary/90 transition-colors tracking-wide disabled:opacity-50 group"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✓"
                : (
                  <>
                    Send Message
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
