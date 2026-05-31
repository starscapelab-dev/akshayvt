"use client";

import { useRef } from "react";
import { Glass } from "@/components/Glass";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!firstCard) return;

    const gap = parseFloat(
      getComputedStyle(carousel).columnGap || getComputedStyle(carousel).gap || "0"
    );

    const scrollAmount = firstCard.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollTestimonials("left")}
          aria-label="Scroll testimonials left"
          className="grid h-10 w-10 max-[480px]:h-9 max-[480px]:w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg max-[480px]:text-base text-ink transition hover:bg-white/10"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollTestimonials("right")}
          aria-label="Scroll testimonials right"
          className="grid h-10 w-10 max-[480px]:h-9 max-[480px]:w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg max-[480px]:text-base text-ink transition hover:bg-white/10"
        >
          →
        </button>
      </div>

      <div
        ref={carouselRef}
        className="overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden -mx-4 px-4"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-4 max-[600px]:gap-3 snap-x snap-mandatory w-max" aria-label="Client testimonials carousel">
          {testimonials.map((testimonial) => (
            <div
              data-testimonial-card
              key={testimonial.id}
              className="snap-start flex-none w-[380px] max-[900px]:w-[340px] max-[600px]:w-[300px] max-[480px]:w-[280px]"
            >
              <Glass className="!p-6 max-[600px]:!p-5 flex flex-col h-full" hover={false}>
                <div className="text-warm mono text-sm max-[600px]:text-xs tracking-[.2em] mb-5 max-[600px]:mb-4">★★★★★</div>
                <blockquote
                  className="m-0 mb-6 max-[600px]:mb-5 serif font-normal text-[17px] max-[600px]:text-[15px] leading-[1.45] tracking-tight text-ink"
                >
                  "{testimonial.quote}"
                </blockquote>
                <cite className="mt-auto flex items-center gap-3 pt-5 max-[600px]:pt-4 border-t border-dashed border-white/12 not-italic">
                  <span className="w-10 h-10 max-[600px]:w-9 max-[600px]:h-9 rounded-full bg-gradient-to-br from-white/14 to-white/4 border border-white/14 grid place-items-center text-ink font-medium text-[14px] max-[600px]:text-[13px] flex-shrink-0">
                    {testimonial.avatar}
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <strong className="text-[14px] max-[600px]:text-[13px] font-medium truncate">{testimonial.name}</strong>
                    <small className="text-[11px] max-[600px]:text-[10px] text-muted truncate">{testimonial.role}</small>
                  </span>
                </cite>
              </Glass>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
