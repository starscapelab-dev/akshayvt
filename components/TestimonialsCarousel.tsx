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
        className="overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-[14px] max-[600px]:gap-3 snap-x snap-mandatory" aria-label="Client testimonials carousel">
          {testimonials.map((testimonial) => (
            <div
              data-testimonial-card
              key={testimonial.id}
              className="snap-start flex-none w-[calc((100%-28px)/3)] max-[900px]:w-[calc((100%-14px)/2)] max-[600px]:w-[85vw] max-[480px]:w-[90vw]"
            >
              <Glass className="p-8 max-[600px]:p-6 px-[30px] max-[600px]:px-5 flex flex-col h-full">
                <div className="text-warm mono text-sm max-[600px]:text-xs tracking-[.2em] mb-[22px] max-[600px]:mb-4">★★★★★</div>
                <blockquote
                  className={`m-0 mb-7 max-[600px]:mb-5 serif font-normal ${
                    testimonial.large
                      ? "text-[clamp(18px,1.8vw,26px)]"
                      : "text-[clamp(16px,1.6vw,24px)]"
                  } leading-[1.3] tracking-tight text-ink pretty`}
                >
                  "{testimonial.quote}"
                </blockquote>
                <cite className="mt-auto flex items-center gap-[14px] max-[600px]:gap-3 pt-[22px] max-[600px]:pt-4 border-t border-dashed border-white/12 not-italic">
                  <span className="w-11 h-11 max-[600px]:w-10 max-[600px]:h-10 rounded-full bg-gradient-to-br from-white/14 to-white/4 border border-white/14 grid place-items-center text-ink font-medium text-[15px] max-[600px]:text-[14px]">
                    {testimonial.avatar}
                  </span>
                  <span className="flex flex-col gap-1">
                    <strong className="text-[15px] max-[600px]:text-[14px] font-medium">{testimonial.name}</strong>
                    <small className="text-xs max-[600px]:text-[11px] text-muted">{testimonial.role}</small>
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
