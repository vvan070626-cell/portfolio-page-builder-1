"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteNavigationProps {
  activePage: "home" | "solutions" | "contact";
}

const navigationItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteNavigation({ activePage }: SiteNavigationProps) {
  function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (activePage !== "home") return;
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-24 border-b border-border bg-background/95 backdrop-blur-[2px] lg:h-14">
        <div className="flex h-full w-full flex-col justify-center gap-1 px-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:justify-start">
            <Link
              href="/"
              className={cn(
                "shrink-0 text-[18px] leading-none tracking-[-0.02em] transition-opacity duration-200 hover:opacity-55 lg:text-[20px]",
                activePage === "home" && "font-bold",
              )}
            >
              Vivian Wang
            </Link>
            {activePage !== "home" ? (
              <Link href="/" className="portfolio-home-spot" aria-label="Return to the profile page">
                <span aria-hidden="true" />
              </Link>
            ) : (
              <span className="portfolio-home-spot portfolio-home-spot-static" aria-hidden="true">
                <span />
              </span>
            )}
          </div>

          <nav className="grid w-full grid-cols-3 gap-x-2 gap-y-1 text-center text-[13px] leading-none lg:flex lg:w-auto lg:items-center lg:gap-4 lg:text-[14px] xl:gap-7 xl:text-[16px]" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={activePage === "home" ? `#${item.id}` : `/#${item.id}`}
                onClick={(event) => scrollToSection(event, item.id)}
                className="py-1 transition-opacity duration-200 hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-10 lg:hidden" aria-hidden="true" />
    </>
  );
}
