"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-transparent bg-background/95 backdrop-blur-[2px]">
      <div className="flex h-full w-full items-center justify-between px-5 sm:px-7 lg:px-8">
        <Link
          href="/"
          className={cn(
            "shrink-0 text-[20px] leading-none tracking-[-0.02em] transition-opacity duration-200 hover:opacity-55",
            activePage === "home" && "font-bold",
          )}
        >
          Vivian Wang
        </Link>

        <nav className="hidden items-center gap-4 text-[14px] leading-none lg:flex xl:gap-7 xl:text-[16px]" aria-label="Primary navigation">
          {activePage !== "home" ? (
            <Link href="/" className="portfolio-home-spot" aria-label="Return to the profile page">
              <span aria-hidden="true" />
            </Link>
          ) : (
            <span className="portfolio-home-spot portfolio-home-spot-static" aria-hidden="true">
              <span />
            </span>
          )}
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={activePage === "home" ? `#${item.id}` : `/#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id)}
              className="transition-opacity duration-200 hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Open navigation" />
              }
            >
              <Menu size={22} strokeWidth={1.8} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[84%] border-l bg-background p-0 shadow-none">
              <SheetHeader className="border-b px-7 py-6 text-left">
                <SheetTitle className="font-heading text-xl font-bold">Vivian Wang</SheetTitle>
                <SheetDescription>Portfolio sections</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-7 py-8" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <SheetClose
                    key={item.id}
                    render={
                      <Link
                        href={activePage === "home" ? `#${item.id}` : `/#${item.id}`}
                        onClick={(event) => scrollToSection(event, item.id)}
                        className="border-b py-3 text-xl focus-visible:outline-2 focus-visible:outline-primary"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
