"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { useRouter } from "next/navigation";

// Note: metadata exported in layout.tsx since this is a client component

const serviceOptions = [
  "New website",
  "Fix existing site",
  "Redesign",
  "Maintenance",
  "SEO / performance",
  "AI integration",
  "E-commerce",
  "Not sure yet",
];

const budgetOptions = [
  "Under $2k",
  "$2k — $5k",
  "$5k — $15k",
  "$15k — $40k",
  "$40k+",
  "Not sure",
];

const inlineFaqs = [
  {
    q: "Do you sign NDAs?",
    a: "Yes — happy to. Send yours and I'll sign before our first call. I work mostly under standard terms but I'm flexible.",
  },
  {
    q: "How do you charge?",
    a: "Fixed-price projects with milestones — not hourly. The proposal includes everything; no surprise invoices. Maintenance retainers are flat monthly.",
  },
  {
    q: "Will I own the code?",
    a: "Yes — completely. Deployed under your accounts, full source handed over. If you want to take it elsewhere later, you can.",
  },
  {
    q: "What time zone do you work in?",
    a: "India Standard Time (UTC+5:30). I overlap comfortably with UAE, Europe, and Asia-Pacific. For US clients, mornings IST = evenings EST.",
  },
  {
    q: "Can you start immediately?",
    a: "Usually within 1–2 weeks of signing. Right now I'm taking 1 of 2 remaining project slots for next quarter — earlier is better.",
  },
  {
    q: "Do you do retainers?",
    a: "Yes — most of my work is monthly maintenance retainers for past clients. Flexible scope, no long lock-ins. Cancellable with 30 days notice.",
  },
];

export default function ContactPage() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>(["New website"]);
  const [selectedBudget, setSelectedBudget] = useState("$5k — $15k");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    timeline: "ASAP — within 2 weeks",
    source: "Referral from a client",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        ...formData,
        services: selectedServices,
        budget: selectedBudget,
      });

      if (result.success) {
        router.push("/thank-you");
      } else {
        alert("There was an error submitting your form. Please try again or contact me via WhatsApp.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again or contact me via WhatsApp.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Currently accepting · Reply within 24h"
        title={
          <>
            Let's talk about <em className="italic text-accent">your project.</em>
          </>
        }
        lede="Free consultation. No commitment. WhatsApp, email, or the form — your pick. I reply within 24 hours, usually within 3."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Contact Grid */}
      <section className="container pb-20 -mt-8 relative z-10">
        <div className="grid grid-cols-[1.05fr_.95fr] gap-8 max-[600px]:gap-5 items-start max-[980px]:grid-cols-1">
          {/* LEFT: Form Card */}
          <Glass className="p-[clamp(32px,4vw,48px)]">
            <h2 className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-tight m-0 mb-[14px] balance">
              Tell me about <em className="italic text-accent">your project.</em>
            </h2>
            <p className="text-ink-2 text-[15px] leading-[1.55] m-0 mb-8 max-w-[50ch]">
              A few sentences is plenty. The more specific you are, the better the first reply.
            </p>

            <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent focus-within:from-[rgba(111,168,255,.06)] focus-within:to-[rgba(111,168,255,.01)]">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ayesha Rahman"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full tracking-tight placeholder:text-muted-2"
                  />
                </div>
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent focus-within:from-[rgba(111,168,255,.06)] focus-within:to-[rgba(111,168,255,.01)]">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ayesha@company.ae"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full tracking-tight placeholder:text-muted-2"
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent focus-within:from-[rgba(111,168,255,.06)] focus-within:to-[rgba(111,168,255,.01)]">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    Phone / WhatsApp (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full tracking-tight placeholder:text-muted-2"
                  />
                </div>
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent focus-within:from-[rgba(111,168,255,.06)] focus-within:to-[rgba(111,168,255,.01)]">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full tracking-tight placeholder:text-muted-2"
                  />
                </div>
              </div>

              {/* Service chips */}
              <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10">
                <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                  What you need
                </label>
                <div className="flex gap-[6px] flex-wrap mt-[6px]">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3 py-[6px] rounded-pill text-[12.5px] border transition-all duration-200 cursor-pointer ${
                        selectedServices.includes(service)
                          ? "bg-accent text-bg border-transparent"
                          : "bg-white/5 border-white/10 text-ink-2 hover:bg-white/10"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline + Source */}
              <div className="grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full appearance-none cursor-pointer pr-5 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2012%2012%22%20fill=%22%238089A0%22%3E%3Cpath%20d=%22M3%204.5L6%208l3-3.5z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0_center]"
                  >
                    <option>ASAP — within 2 weeks</option>
                    <option>Within a month</option>
                    <option>1–3 months</option>
                    <option>Flexible, no rush</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent">
                  <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                    How you heard about me
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full appearance-none cursor-pointer pr-5 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2012%2012%22%20fill=%22%238089A0%22%3E%3Cpath%20d=%22M3%204.5L6%208l3-3.5z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0_center]"
                  >
                    <option>Referral from a client</option>
                    <option>Google search</option>
                    <option>LinkedIn</option>
                    <option>Twitter / X</option>
                    <option>Blog post</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Budget chips */}
              <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10">
                <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                  Approximate budget (optional, helps scope)
                </label>
                <div className="flex gap-2 flex-wrap mt-[6px]">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-[14px] py-2 rounded-pill mono text-xs tracking-[.04em] border transition-all duration-200 cursor-pointer ${
                        selectedBudget === budget
                          ? "bg-gradient-to-b from-[rgba(111,168,255,.16)] to-[rgba(111,168,255,.06)] border-[rgba(111,168,255,.4)] text-ink"
                          : "bg-white/5 border-white/10 text-ink-2 hover:bg-white/10 hover:text-ink"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project description */}
              <div className="flex flex-col p-[12px_18px] rounded-[14px] bg-gradient-to-b from-white/[.05] to-white/[.015] border border-white/10 transition-all duration-200 hover:from-white/[.07] hover:to-white/[.02] focus-within:border-accent focus-within:from-[rgba(111,168,255,.06)] focus-within:to-[rgba(111,168,255,.01)]">
                <label className="mono text-[10.5px] text-muted uppercase tracking-[.14em]">
                  Tell me about your project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A few sentences about your business, the website, what you're hoping to achieve — and anything that's keeping you up at night."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-0 outline-none text-ink text-[15.5px] pt-[6px] w-full resize-none tracking-tight placeholder:text-muted-2"
                />
              </div>

              {/* Submit row */}
              <div className="flex items-center justify-between gap-6 flex-wrap mt-3">
                <p className="mono text-xs text-muted m-0 max-w-[36ch] leading-[1.5] tracking-[.04em]">
                  I read every message myself · No newsletters, no sales calls · GDPR-friendly
                </p>
                <Button variant="primary" type="submit" showChevron disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </Glass>

          {/* RIGHT: Contact channels, status, map */}
          <div className="flex flex-col gap-[14px]">
            {/* Channels Card */}
            <Glass className="p-7">
              <h3 className="serif text-[26px] leading-[1.1] tracking-tight m-0 mb-[14px]">
                Or reach me <em className="italic text-accent">directly.</em>
              </h3>
              <div className="flex flex-col gap-[10px]">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919746220043"
                  className="flex items-center gap-[14px] p-[14px_16px] rounded-2xl bg-gradient-to-b from-white/[.06] to-white/[.02] border border-white/8 transition-all duration-200 hover:from-white/10 hover:to-white/[.03] hover:-translate-y-px hover:border-white/[.16]"
                >
                  <span className="w-10 h-10 rounded-xl bg-whatsapp border border-white/30 grid place-items-center text-[#04331A] flex-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <div className="mono text-[10.5px] text-muted uppercase tracking-[.14em] mb-[3px]">
                      WhatsApp · fastest
                    </div>
                    <div className="text-[15px] text-ink tracking-tight">+91 974 622 0043</div>
                  </div>
                  <span className="ml-auto mono text-[10.5px] text-[#BFEFCB] inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-pill bg-[rgba(66,228,122,.1)] border border-[rgba(66,228,122,.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_#42E47A] animate-pulse" />
                    Online
                  </span>
                </a>

                {/* Email */}
                <ObfuscatedEmail className="flex items-center gap-[14px] p-[14px_16px] rounded-2xl bg-gradient-to-b from-white/[.06] to-white/[.02] border border-white/8 transition-all duration-200 hover:from-white/10 hover:to-white/[.03] hover:-translate-y-px hover:border-white/[.16]">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/[.12] to-white/[.03] border border-white/12 grid place-items-center text-ink flex-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="mono text-[10.5px] text-muted uppercase tracking-[.14em] mb-[3px]">
                      Email
                    </div>
                    <div className="text-[15px] text-ink tracking-tight">info@akshayvt.com</div>
                  </div>
                </ObfuscatedEmail>

                {/* Calendar */}
                <a
                  href="https://calendly.com/"
                  className="flex items-center gap-[14px] p-[14px_16px] rounded-2xl bg-gradient-to-b from-white/[.06] to-white/[.02] border border-white/8 transition-all duration-200 hover:from-white/10 hover:to-white/[.03] hover:-translate-y-px hover:border-white/[.16]"
                >
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/[.12] to-white/[.03] border border-white/12 grid place-items-center text-ink flex-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                  </span>
                  <div>
                    <div className="mono text-[10.5px] text-muted uppercase tracking-[.14em] mb-[3px]">
                      Book a call · 20 min
                    </div>
                    <div className="text-[15px] text-ink tracking-tight">calendly.com/akshayvt</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center gap-[14px] p-[14px_16px] rounded-2xl bg-gradient-to-b from-white/[.06] to-white/[.02] border border-white/8 transition-all duration-200 hover:from-white/10 hover:to-white/[.03] hover:-translate-y-px hover:border-white/[.16]"
                >
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/[.12] to-white/[.03] border border-white/12 grid place-items-center text-ink flex-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.8a1.6 1.6 0 1 0 0-3.1 1.6 1.6 0 0 0 0 3.1zm11.3 9.5v-4.7c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 0 0-2.4 1.3V10h-2.6v8.3h2.6v-4.6c0-1.2.2-2.4 1.7-2.4 1.5 0 1.5 1.4 1.5 2.5v4.5h2.2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="mono text-[10.5px] text-muted uppercase tracking-[.14em] mb-[3px]">
                      LinkedIn
                    </div>
                    <div className="text-[15px] text-ink tracking-tight">linkedin.com/in/akshayvt</div>
                  </div>
                </a>
              </div>
            </Glass>

            {/* Status Card */}
            <Glass className="px-7 py-6">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0">
                Studio <em className="italic text-green">open today.</em>
              </h3>
              <div className="mt-4 border-t border-dashed border-white/8">
                <div className="flex justify-between items-center py-[10px] border-b border-dashed border-white/8">
                  <span className="mono text-xs text-muted tracking-[.04em]">Current status</span>
                  <span className="text-sm text-[#BFEFCB]">● Available · accepting clients</span>
                </div>
                <div className="flex justify-between items-center py-[10px] border-b border-dashed border-white/8">
                  <span className="mono text-xs text-muted tracking-[.04em]">Working hours</span>
                  <span className="text-sm text-ink">
                    09:00 – 21:00 <span className="mono text-[11px] text-muted">IST</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-[10px] border-b border-dashed border-white/8">
                  <span className="mono text-xs text-muted tracking-[.04em]">Avg response</span>
                  <span className="text-sm text-ink">Under 3 hours</span>
                </div>
                <div className="flex justify-between items-center py-[10px]">
                  <span className="mono text-xs text-muted tracking-[.04em]">Next opening</span>
                  <span className="text-sm text-ink">
                    June 2026 <span className="mono text-[11px] text-muted">· 2 slots left</span>
                  </span>
                </div>
              </div>
            </Glass>

            {/* Map Card */}
            <Glass className="p-5 max-[600px]:p-4 relative min-h-[220px] max-[600px]:min-h-[180px]">
              {/* Map background with radial gradients */}
              <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                  background: `
                    radial-gradient(circle at 28% 60%, rgba(111,168,255,.35) 0 8px, transparent 9px),
                    radial-gradient(circle at 56% 38%, rgba(244,197,140,.5) 0 6px, transparent 7px),
                    radial-gradient(circle at 86% 76%, rgba(182,155,255,.5) 0 6px, transparent 7px),
                    radial-gradient(circle at 60% 36%, rgba(244,197,140,.18) 0 30px, transparent 70px),
                    radial-gradient(circle at 28% 60%, rgba(111,168,255,.20) 0 36px, transparent 80px),
                    radial-gradient(circle at 86% 76%, rgba(182,155,255,.18) 0 30px, transparent 70px),
                    linear-gradient(135deg, #07091E 0%, #0A1224 60%, #0A0E18 100%)
                  `,
                }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-50 rounded-[inherit]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Content */}
              <div className="relative z-[2]">
                {/* Map label */}
                <span className="inline-block mono text-[11px] max-[480px]:text-[10px] text-ink-2 uppercase tracking-[.12em] px-3 py-1.5 rounded-pill bg-bg/50 backdrop-blur-sm border border-white/10 mb-6 max-[600px]:mb-4">
                  Where I work from
                </span>
                {/* Location pills */}
                <div className="flex flex-wrap gap-2 max-[480px]:gap-1.5">
                  <span className="px-3 max-[480px]:px-2.5 py-2 max-[480px]:py-1.5 rounded-pill bg-accent/20 border border-accent/30 backdrop-blur-sm mono text-[12px] max-[480px]:text-[11px] tracking-[.02em] text-ink">
                    🇮🇳 Kerala · home base
                  </span>
                  <span className="px-3 max-[480px]:px-2.5 py-2 max-[480px]:py-1.5 rounded-pill bg-warm/20 border border-warm/30 backdrop-blur-sm mono text-[12px] max-[480px]:text-[11px] tracking-[.02em] text-ink">
                    🇦🇪 Dubai · clients
                  </span>
                  <span className="px-3 max-[480px]:px-2.5 py-2 max-[480px]:py-1.5 rounded-pill bg-[#B69BFF]/20 border border-[#B69BFF]/30 backdrop-blur-sm mono text-[12px] max-[480px]:text-[11px] tracking-[.02em] text-ink">
                    🇦🇺 Sydney · clients
                  </span>
                </div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* Inline FAQ Section */}
      <section className="py-20 bg-bg-2 ">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Before you ask
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Things people <em className="italic text-ink-2">usually want to know.</em>
              </h2>
            </div>
            <div className="text-sm text-ink-2 max-w-[38ch]">
              Saves us both a back-and-forth. If yours isn't here, send it on WhatsApp — I read each one.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[14px] max-[600px]:gap-3 max-[820px]:grid-cols-1">
            {inlineFaqs.map((faq, i) => (
              <Glass key={i} className="px-7 max-[600px]:px-5 py-[26px] max-[600px]:py-5">
                <h4 className="serif text-[22px] leading-[1.15] tracking-tight m-0 mb-[10px] balance">
                  {faq.q}
                </h4>
                <p className="text-[14.5px] text-ink-2 leading-[1.55] m-0">{faq.a}</p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative py-[clamp(50px,6vw,80px)]">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(40% 60% at 50% 0%, rgba(111,168,255,.08), transparent 70%)",
          }}
        />
        <div className="container relative z-[1]">
          <div className="grid grid-cols-4 gap-8 max-[600px]:gap-5 items-center max-[820px]:grid-cols-2">
            <div className="text-center">
              <div className="serif text-[44px] max-[600px]:text-[32px] leading-none tracking-tight text-ink">
                <em className="italic text-accent">6+</em>
              </div>
              <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mt-[10px]">
                Years experience
              </div>
            </div>
            <div className="text-center">
              <div className="serif text-[44px] max-[600px]:text-[32px] leading-none tracking-tight text-ink">
                50<em className="italic text-accent">+</em>
              </div>
              <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mt-[10px]">
                Happy clients
              </div>
            </div>
            <div className="text-center">
              <div className="serif text-[44px] max-[600px]:text-[32px] leading-none tracking-tight text-ink">
                &lt;24<em className="italic text-accent">h</em>
              </div>
              <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mt-[10px]">
                Reply guaranteed
              </div>
            </div>
            <div className="text-center">
              <div className="serif text-[44px] max-[600px]:text-[32px] leading-none tracking-tight text-ink">
                4<em className="italic text-accent">.9</em>
              </div>
              <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mt-[10px]">
                Client rating
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
