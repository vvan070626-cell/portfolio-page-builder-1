import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { PageTransitionLink } from "@/components/portfolio/page-transition-link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";
import { ResumeReveal } from "@/components/portfolio/resume-reveal";

const experiences = [
  {
    title: "CHINESE MEDICINE CLUB | President | Sep 2022 - Jun 2023",
    points: [
      "Earned the Model Club Prize for outstanding club leadership and impact.",
      "Produced two flagship events, attracting 200+ visitors.",
    ],
  },
  {
    title: "ENTREPRENEURIAL FINANCE SEMINAR | Group Leader",
    points: [
      "Delivered by Prof. Shai Bernstein from Harvard Business School.",
      "Applied POCD to assess market, rivals, and growth strategy with qual/quant evaluation.",
    ],
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT | Group Organizer",
    points: [
      "Identified an unmet eye-care niche and launched a Douban community (5,000+ members).",
      "Published eye-health content, including screen-break challenges and science-based tips.",
    ],
  },
  {
    title: "PROM FINANCE LEAD | Finance Lead",
    points: [
      "Finance lead for 400-person prom; managed end-to-end budgeting.",
      "Wrote sponsorship pitch; secured HSBC and ABC in-kind support.",
    ],
  },
];

const projects = [
  {
    title: "HKSI INSTITUTE CASE COMPETITION 2026 | Semi-Finalist",
    description: "Adopted by Champion REIT. Building ops saves HK$1.41M; tenant mgmt adds HK$18.88M NOI.",
  },
  {
    title: "Tokenized FoF Smart Allocation Platform for Elderly Care | Feb 2026 - Mar 2026",
    description: "Monetize from AUM fee, 5% fulfillment commission, and anonymized data.",
  },
];

export function HomePortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <SiteNavigation activePage="home" />
      <main className="portfolio-content-shell pb-24">
        <div className="min-h-[min(44rem,calc(100svh-3.5rem))] border-b border-border py-10 sm:py-16">
          <IllustratedHero
            id="about"
            title="Vivian Wang"
            titleLines={["Vivian", "Wang"]}
            subtitle="BBA, The Hong Kong University of Science and Technology (Expected June 2029)"
            illustration="/illustration-working.webp"
            illustrationAlt="Black line illustration of Wang Hanzhi working at a laptop"
          >
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="mt-10 inline-block rounded-full border-2 border-primary px-6 py-3 font-bold text-foreground transition-[color,background-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Download Resume (PDF)
            </a>
          </IllustratedHero>
        </div>

        <ResumeReveal id="education" title="Education">
          <div className="border-l-[3px] border-primary py-2 pl-6 sm:pl-9">
            <h3 className="font-heading text-xl font-bold leading-snug sm:text-2xl">The Hong Kong University of Science and Technology</h3>
            <p className="mt-2 text-lg">BBA (Expected June 2029)</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Introduction to Information System, Academic English for Business Studies</p>
          </div>
        </ResumeReveal>

        <ResumeReveal id="experience" title="Experience">
          <div className="space-y-0">
            {experiences.map((experience) => (
              <article key={experience.title} className="border-t border-border py-10 first:border-t-0 first:pt-0 sm:py-12">
                <div className="min-w-0 max-w-[52rem]">
                  <h3 className="font-heading text-lg font-bold leading-snug sm:text-xl">{experience.title}</h3>
                  <ul className="mt-6 list-disc space-y-3 pl-5 marker:text-primary">
                    {experience.points.map((point) => <li key={point} className="pl-1 leading-relaxed">{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ResumeReveal>

        <ResumeReveal id="research" title="Research & Projects">
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="flex min-w-0 flex-col border border-border bg-card p-8 transition-[transform,box-shadow,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:p-10">
                <h3 className="font-heading text-xl font-bold leading-snug">{project.title}</h3>
                <p className="mt-7 border-t border-border pt-6 leading-relaxed">{project.description}</p>
              </article>
            ))}
          </div>
        </ResumeReveal>

        <ResumeReveal id="skills" title="Skills">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="min-w-0 border-t border-border pt-5">
              <p className="inline-block max-w-full rounded-full bg-muted px-5 py-3 leading-relaxed">Languages: Fluent in Mandarin, English. Familiar with Cantonese.</p>
            </div>
            <div className="min-w-0 border-t border-border pt-5">
              <p className="inline-block max-w-full rounded-full bg-muted px-5 py-3 leading-relaxed">Tools: Python / Vibe coding / Microsoft Office</p>
            </div>
          </div>
        </ResumeReveal>

        <ResumeReveal id="contact" title="Contact">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-bold">Email</h3>
              <a className="mt-3 inline-block break-all text-lg underline decoration-primary underline-offset-4 transition-opacity hover:opacity-60" href="mailto:hzwang@connect.ust.hk">hzwang@connect.ust.hk</a>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">LinkedIn</h3>
              <a className="mt-3 inline-block break-all text-lg underline decoration-primary underline-offset-4 transition-opacity hover:opacity-60" href="https://www.linkedin.com/in/hanzhi-w-b33780439" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/hanzhi-w-b33780439</a>
            </div>
          </div>
        </ResumeReveal>
        <div className="portfolio-home-action">
          <PageTransitionLink href="/solutions" label="See the evidence" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
