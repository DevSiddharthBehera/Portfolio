import ArchitectureGrid from '@/components/architecture-grid';
import ContactPanel from '@/components/contact-panel';
import ExperienceTimeline from '@/components/experience-timeline';
import ExpertiseGrid from '@/components/expertise-grid';
import NavBar from '@/components/navigation';
import ProjectList from '@/components/project-list';
import SectionHeading from '@/components/section-heading';
import SiteFooter from '@/components/site-footer';
import StatGrid from '@/components/stat-grid';
import { heroContent } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24">
        <section id="hero" className="section-padding flex flex-col gap-12 pt-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-accent">Portfolio 2025</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              {heroContent.name}
              <span className="block text-lg font-normal text-slate-300">{heroContent.role}</span>
            </h1>
            <p className="text-base text-slate-200 md:text-lg">{heroContent.description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40"
                href={heroContent.ctaPrimary.href}
              >
                {heroContent.ctaPrimary.label}
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                href={heroContent.ctaSecondary.href}
              >
                {heroContent.ctaSecondary.label}
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-white/5 bg-grid-dark p-8 text-slate-200">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Focus areas</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">End-to-end MERN delivery</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">System design & microservices</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">DevOps pipelines & observability</li>
            </ul>
          </div>
        </section>

        <section aria-label="Impact metrics">
          <StatGrid stats={heroContent.stats} />
        </section>

        <section id="about" className="section-padding">
          <SectionHeading
            eyebrow="About"
            title="Building dependable, high-performance web apps"
            description="I thrive on simplifying complex product asks into scalable MERN solutions, tuning backends for resilience, and collaborating across functions to turn ideas into shipped software."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-card">
              <h3 className="text-xl font-semibold text-white">MERN craftsmanship</h3>
              <p className="mt-3 text-sm text-slate-300">
                From Mongo data modeling to React interfaces, I own the flow end to end. Socket.io messaging, JWT-hardened APIs, and responsive UI systems are part of my weekly toolkit.
              </p>
            </article>
            <article className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-card">
              <h3 className="text-xl font-semibold text-white">Future-ready systems</h3>
              <p className="mt-3 text-sm text-slate-300">
                I am investing in system design, microservices, Docker/Kubernetes, and Kafka so every solution I ship is ready to scale, observable, and resilient.
              </p>
            </article>
          </div>
        </section>

        <section id="expertise" className="section-padding">
          <SectionHeading
            eyebrow="Expertise"
            title="Where I create leverage"
            description="A blend of systems thinking, experimentation, and hands-on execution across the product lifecycle."
          />
          <ExpertiseGrid />
        </section>

        <section id="projects" className="section-padding">
          <SectionHeading
            eyebrow="Projects"
            title="Selected collaborations and results"
            description="Each engagement pairs measurable outcomes with maintainable foundations your team can run with."
          />
          <ProjectList />
        </section>

        <section id="experience" className="section-padding">
          <SectionHeading
            eyebrow="Experience"
            title="Recent roles & leadership"
            description="From scrappy startups to platform teams, I adapt my toolkit to what the product and people need."
          />
          <ExperienceTimeline />
        </section>

        <section id="architecture" className="section-padding">
          <SectionHeading
            eyebrow="Architecture"
            title="Systems thinking I bring to every build"
            description="A growing toolkit across networking, distributed systems, DevOps, and data ensures solutions stay resilient after launch."
          />
          <ArchitectureGrid />
        </section>

        <section id="contact" className="section-padding">
          <SectionHeading
            eyebrow="Contact"
            title="Have a roadmap in mind?"
            description="Share the outcomes you're chasing - I'll respond with a tailored plan, timeline, and collaboration model."
          />
          <ContactPanel />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
