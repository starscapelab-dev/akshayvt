"use client";

import { useState, useEffect, useCallback } from "react";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProjectType = "website" | "ecommerce" | "webapp" | "redesign" | "maintenance" | "other";
type Budget = "small" | "medium" | "large" | "enterprise" | "unsure";
type Timeline = "urgent" | "1month" | "2months" | "flexible";

interface FormData {
  projectType: ProjectType | null;
  budget: Budget | null;
  timeline: Timeline | null;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const projectTypes: { value: ProjectType; label: string; icon: string; description: string }[] = [
  { value: "website", label: "Business Website", icon: "🌐", description: "Company site, portfolio, or landing page" },
  { value: "ecommerce", label: "E-Commerce Store", icon: "🛒", description: "Online store with payments" },
  { value: "webapp", label: "Web Application", icon: "⚡", description: "Dashboard, SaaS, or custom tool" },
  { value: "redesign", label: "Website Redesign", icon: "✨", description: "Refresh an existing site" },
  { value: "maintenance", label: "Maintenance", icon: "🔧", description: "Ongoing support & updates" },
  { value: "other", label: "Something Else", icon: "💬", description: "Let's discuss your needs" },
];

const budgetRanges: { value: Budget; label: string; range: string }[] = [
  { value: "small", label: "Starter", range: "$1,000 – $3,000" },
  { value: "medium", label: "Standard", range: "$3,000 – $8,000" },
  { value: "large", label: "Premium", range: "$8,000 – $15,000" },
  { value: "enterprise", label: "Enterprise", range: "$15,000+" },
  { value: "unsure", label: "Not sure yet", range: "Let's discuss" },
];

const timelines: { value: Timeline; label: string; description: string }[] = [
  { value: "urgent", label: "ASAP", description: "Within 2 weeks" },
  { value: "1month", label: "1 Month", description: "Standard timeline" },
  { value: "2months", label: "2-3 Months", description: "Complex project" },
  { value: "flexible", label: "Flexible", description: "No rush" },
];

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: null,
    budget: null,
    timeline: null,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const totalSteps = 4;

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
        setFormData({
          projectType: null,
          budget: null,
          timeline: null,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 300);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const nextStep = useCallback(() => {
    if (step < totalSteps) setStep(step + 1);
  }, [step]);

  const prevStep = useCallback(() => {
    if (step > 1) setStep(step - 1);
  }, [step]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType !== null;
      case 2:
        return formData.budget !== null;
      case 3:
        return formData.timeline !== null;
      case 4:
        return formData.name.trim() && formData.email.trim();
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[560px] animate-slideUp">
        <div className="relative overflow-hidden rounded-[22px] bg-[#0a0c14]/80 backdrop-blur-2xl border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_80px_-20px_rgba(111,168,255,0.15),0_0_0_1px_rgba(255,255,255,0.08)_inset]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Progress bar */}
          {!isSubmitted && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
              <div
                className="h-full bg-accent transition-all duration-500 ease-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          )}

          <div className="p-8 pt-10">
            {isSubmitted ? (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green/20 border border-green/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#42E47A" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="serif text-[28px] tracking-tight mb-3">Request Sent!</h3>
                <p className="text-ink-2 mb-6 max-w-[300px] mx-auto">
                  Thanks, {formData.name.split(" ")[0]}! I'll review your project details and get back to you within 24 hours.
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://wa.me/919746220043"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-pill bg-whatsapp text-[#00220C] text-sm font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.5 3.5A10.6 10.6 0 0 0 3.4 16.2L2 22l6-1.4a10.6 10.6 0 0 0 12.5-17.1zM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-3.6.8.8-3.5-.2-.3A8 8 0 1 1 12 20z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-pill border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Step Header */}
                <div className="mb-6">
                  <div className="mono text-[11px] text-muted uppercase tracking-[.14em] mb-2">
                    Step {step} of {totalSteps}
                  </div>
                  <h3 className="serif text-[28px] tracking-tight leading-tight">
                    {step === 1 && "What are you building?"}
                    {step === 2 && "What's your budget?"}
                    {step === 3 && "When do you need it?"}
                    {step === 4 && "Let's connect!"}
                  </h3>
                  <p className="text-ink-2 text-sm mt-2">
                    {step === 1 && "Select the type of project you need help with"}
                    {step === 2 && "This helps me understand the scope"}
                    {step === 3 && "I'll tailor my approach to your timeline"}
                    {step === 4 && "How can I reach you?"}
                  </p>
                </div>

                {/* Step Content */}
                <div className="mb-6">
                  {/* Step 1: Project Type */}
                  {step === 1 && (
                    <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                      {projectTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => {
                            setFormData({ ...formData, projectType: type.value });
                          }}
                          className={`text-left p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 ${
                            formData.projectType === type.value
                              ? "border-accent bg-accent/15"
                              : "border-white/10 bg-white/[.03] hover:border-white/20 hover:bg-white/[.06]"
                          }`}
                        >
                          <div className="font-medium text-[15px] mb-1">{type.label}</div>
                          <div className="text-[12px] text-muted">{type.description}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Budget */}
                  {step === 2 && (
                    <div className="space-y-2">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.value}
                          onClick={() => setFormData({ ...formData, budget: budget.value })}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 ${
                            formData.budget === budget.value
                              ? "border-accent bg-accent/15"
                              : "border-white/10 bg-white/[.03] hover:border-white/20 hover:bg-white/[.06]"
                          }`}
                        >
                          <span className="font-medium">{budget.label}</span>
                          <span className="text-ink-2 mono text-sm">{budget.range}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 3: Timeline */}
                  {step === 3 && (
                    <div className="grid grid-cols-2 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.value}
                          onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                          className={`text-left p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 ${
                            formData.timeline === timeline.value
                              ? "border-accent bg-accent/15"
                              : "border-white/10 bg-white/[.03] hover:border-white/20 hover:bg-white/[.06]"
                          }`}
                        >
                          <div className="font-medium text-[15px] mb-1">{timeline.label}</div>
                          <div className="text-[12px] text-muted">{timeline.description}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 4: Contact Info */}
                  {step === 4 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-ink-2 mb-2">Your name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-ink placeholder:text-muted"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-ink-2 mb-2">Email address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-ink placeholder:text-muted"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-ink-2 mb-2">WhatsApp / Phone (optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-ink placeholder:text-muted"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-ink-2 mb-2">Tell me about your project (optional)</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Brief description of what you need..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-ink placeholder:text-muted resize-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={prevStep}
                    className={`flex items-center gap-2 text-sm text-ink-2 hover:text-ink transition-colors ${
                      step === 1 ? "invisible" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>

                  {step < totalSteps ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-5 py-3 rounded-pill text-sm font-medium transition-all duration-200 ${
                        canProceed()
                          ? "bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary hover:shadow-btn-primary-hover"
                          : "bg-white/10 text-muted cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed() || isSubmitting}
                      className={`flex items-center gap-2 px-6 py-3 rounded-pill text-sm font-medium transition-all duration-200 ${
                        canProceed() && !isSubmitting
                          ? "bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary hover:shadow-btn-primary-hover"
                          : "bg-white/10 text-muted cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Free Quote
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
