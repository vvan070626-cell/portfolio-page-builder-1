"use client";

import { useEffect, useRef } from "react";

interface ResumeRevealProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function ResumeReveal({ id, title, children }: ResumeRevealProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("resume-section-visible");
        observer.unobserve(section);
      }
    }, { threshold: 0.08 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} aria-labelledby={`${id}-title`} className="resume-section scroll-mt-28 border-b border-border py-20 last:border-b-0 sm:py-28 lg:scroll-mt-20">
      <h2 id={`${id}-title`} className="mb-10 font-heading text-3xl font-black tracking-[-0.045em] sm:mb-14 sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
