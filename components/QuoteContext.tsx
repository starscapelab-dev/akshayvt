"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { QuotePopup } from "./QuotePopup";

interface QuoteContextType {
  openQuote: () => void;
  closeQuote: () => void;
  isOpen: boolean;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuote = () => setIsOpen(true);
  const closeQuote = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote, isOpen }}>
      {children}
      <QuotePopup isOpen={isOpen} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}

// QuoteButton component for easy integration
interface QuoteButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "whatsapp";
}

export function QuoteButton({ children, className, variant = "primary" }: QuoteButtonProps) {
  const { openQuote } = useQuote();

  const baseStyles = "inline-flex items-center gap-[10px] rounded-pill border border-transparent font-medium tracking-tight whitespace-nowrap transition-all duration-250 ease-out px-[22px] py-[14px] text-[15px]";

  const variantStyles = {
    primary: "bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-px",
    ghost: "bg-gradient-to-b from-white/10 to-white/4 backdrop-blur-[14px] backdrop-saturate-[160%] text-ink border-white/16 shadow-[0_1px_0_rgba(255,255,255,.16)_inset] hover:bg-gradient-to-b hover:from-white/16 hover:to-white/6 hover:-translate-y-px",
    whatsapp: "bg-whatsapp text-[#00220C] shadow-btn-whatsapp hover:-translate-y-px",
  };

  return (
    <button onClick={openQuote} className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}>
      {children}
    </button>
  );
}
