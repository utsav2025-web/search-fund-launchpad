import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzViOYgC3dj4zh8nVlk-nXkdYxHqFhtSx3FEgPLnVolhNwcHHV6V7sXDHDLOn9qJPQR4Q/exec";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}>
            
             <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Let's start a conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Whether you're a business owner considering your succession options, a broker with a relevant opportunity — we'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <span>utsav@twoevergreencapital.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-accent" />
                <span>Houston, TX</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5"
            onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-display font-medium text-foreground mb-2 tracking-wide uppercase">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="James" />
              </div>
              <div>
                <label className="block text-xs font-display font-medium text-foreground mb-2 tracking-wide uppercase">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Whitfield" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-display font-medium text-foreground mb-2 tracking-wide uppercase">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="james@example.com" />
            </div>
            <div>
              <label className="block text-xs font-display font-medium text-foreground mb-2 tracking-wide uppercase">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your business or opportunity..." />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent text-accent-foreground font-display font-medium text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity tracking-wide disabled:opacity-50">
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>);
};

export default Contact;