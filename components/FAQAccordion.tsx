"use client";

import { useState, useRef, useEffect } from "react";
import { Glass } from "./Glass";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  defaultOpen?: number;
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <Glass
      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "border-white/20" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors duration-300 hover:bg-white/[.02]"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium tracking-tight">{faq.question}</span>
        <span
          className={`w-7 h-7 rounded-full grid place-items-center text-xl flex-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? "bg-accent border-accent text-bg rotate-45 scale-110"
              : "bg-white/8 border border-white/10 text-muted"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="transition-transform duration-500"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div ref={contentRef} className="px-6 pb-5 pt-0">
          <p className="text-[14.5px] text-ink-2 leading-[1.6] m-0">{faq.answer}</p>
        </div>
      </div>
    </Glass>
  );
}

export function FAQAccordion({ faqs, defaultOpen = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
