"use client";

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
  function handleScroll(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-24 w-full items-center border-b border-gray-100 bg-white/80 px-6 py-4 backdrop-blur-md lg:h-14 lg:justify-between">
        <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          {activePage === "home" ? (
            <span className="shrink-0 text-lg leading-none font-bold tracking-[-0.02em]">Vivian Wang</span>
          ) : (
            <a href="/" className="shrink-0 text-lg leading-none font-bold tracking-[-0.02em] transition-opacity duration-200 hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label="Vivian Wang — return to profile">
              Vivian Wang
            </a>
          )}

          {activePage === "home" && (
            <nav className="grid w-full grid-cols-3 gap-x-3 gap-y-2 text-center text-xs leading-none sm:grid-cols-6 sm:text-sm lg:w-auto lg:shrink-0 lg:flex lg:items-center lg:gap-6" aria-label="Primary navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleScroll(event, item.id)}
                  className="whitespace-nowrap py-1 transition-opacity duration-200 hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      <div className="h-10 lg:hidden" aria-hidden="true" />
    </>
  );
}
