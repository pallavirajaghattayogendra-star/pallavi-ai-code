import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronLeft, ChevronRight,
  Code2, Cpu, Database, ExternalLink, FileImage, Github, GraduationCap, Layers3,
  Linkedin, Mail, Menu, Network, ShieldCheck, Sparkles, X, Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pallavi R Y — AI & Data Science Student Portfolio" },
      { name: "description", content: "Explore Pallavi R Y's journey as a CSE (AI & Data Science) undergraduate at REVA University, including IoT projects, skills, certifications and interests." },
      { property: "og:title", content: "Pallavi R Y — AI & Data Science Student Portfolio" },
      { property: "og:description", content: "Learning. Building. Solving. Explore projects, skills and the learning journey of Pallavi R Y, an aspiring AI & Data Science engineer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "about", label: "About" }, { id: "education", label: "Education" },
  { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" }, { id: "contact", label: "Contact" },
];
const linkedin = "https://www.linkedin.com/in/pallavi-r-y-81b308367";
const email = "mailto:pallaviry20@gmail.com";

const skillGroups = [
  { number: "01", name: "Programming", icon: Code2, tone: "bg-soft-blue", skills: [{ name: "C" }, { name: "C++" }, { name: "Python" }, { name: "Java", status: "Currently learning" }] },
  { number: "02", name: "Data & AI", icon: BrainCircuit, tone: "bg-soft-violet", skills: [{ name: "Data Analytics", status: "Learning" }, { name: "Data Science", status: "Learning" }, { name: "Artificial Intelligence", status: "Academic interest" }, { name: "Problem Solving" }] },
  { number: "03", name: "Technology", icon: Cpu, tone: "bg-soft-green", skills: [{ name: "Internet of Things (IoT)" }] },
  { number: "04", name: "UI/UX", icon: Layers3, tone: "bg-soft-blue", skills: [{ name: "UI Design", status: "Interest" }, { name: "UX Design", status: "Interest" }, { name: "User-centered Design", status: "Interest" }] },
];
const projects = [
  { number: "01", name: "Smart Irrigation System", category: "IoT / Smart Agriculture", description: "A smart irrigation project designed to explore sensor-based monitoring and automated irrigation for more efficient water usage.", tags: ["IoT", "Sensors", "Automation", "Smart Agriculture"], icon: Cpu, visual: "project-visual-irrigation" },
  { number: "02", name: "Women Safety & Security Device", category: "IoT / Safety Technology", description: "An IoT-based women safety and security device designed to provide emergency assistance and location-based alerts.", tags: ["IoT", "GPS", "Emergency Alert", "Safety Technology"], icon: ShieldCheck, visual: "project-visual-safety" },
];
const certificates = [
  { issuer: "IBM", name: "Fundamentals of Data Science", category: "Data Science", number: "01" },
  { issuer: "Infosys", name: "Programming with C", category: "Programming", number: "02" },
  { issuer: "Issuer to be added", name: "Cyber Security", category: "Cyber Security", number: "03" },
];
const journey = ["Programming", "Problem Solving", "Data Analytics", "Data Science", "Artificial Intelligence", "Real-world Projects"];
const gallery = [
  { label: "Project photos", icon: Cpu, tone: "bg-soft-blue" },
  { label: "IoT hardware", icon: Network, tone: "bg-soft-green" },
  { label: "Certificates", icon: GraduationCap, tone: "bg-soft-violet" },
  { label: "UI/UX designs", icon: Layers3, tone: "bg-soft-blue" },
  { label: "Hackathon work", icon: Zap, tone: "bg-soft-violet" },
  { label: "Future projects", icon: Sparkles, tone: "bg-soft-green" },
];

function SectionHeading({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return <div className="max-w-2xl">
    <p className={`section-label mb-5 text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? "text-electric" : "text-primary"}`}>{eyebrow}</p>
    <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px] ${dark ? "text-dark-foreground" : "text-foreground"}`}>{title}</h2>
    {description && <p className={`mt-5 max-w-xl text-base leading-relaxed ${dark ? "text-dark-muted" : "text-muted-foreground"}`}>{description}</p>}
  </div>;
}

function IconTile({ icon: Icon, tone = "bg-soft-blue" }: { icon: LucideIcon; tone?: string }) {
  return <span className={`flex size-12 shrink-0 items-center justify-center rounded-md ${tone}`}><Icon className="size-5 text-primary" strokeWidth={1.7} /></span>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [selectedJourney, setSelectedJourney] = useState(0);
  const [modal, setModal] = useState<{ title: string; kind: "project" | "certificate"; description?: string } | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.2, 0.5] });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollGallery = (direction: number) => {
    const next = Math.max(0, Math.min(gallery.length - 1, galleryIndex + direction));
    setGalleryIndex(next);
    document.getElementById(`gallery-${next}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return <div className="min-w-0 overflow-x-hidden">
    <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line text-hero-foreground">
      <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Pallavi R Y, back to top">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-hero-line font-display text-sm font-bold">P.</span>
          <span className="truncate font-display text-sm font-bold tracking-[0.12em]">PALLAVI R Y</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => <a key={item.id} href={`#${item.id}`} className={`text-xs font-semibold transition-colors hover:text-hero-foreground ${active === item.id ? "text-hero-foreground" : "text-hero-muted"}`}>{item.label}</a>)}
        </nav>
        <div className="hidden lg:block"><Button asChild size="portfolio" variant="heroOutline"><a href={email}>Let's talk <ArrowUpRight /></a></Button></div>
        <Button variant="heroOutline" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-hero-line bg-dark-surface px-5 py-3 lg:hidden">{nav.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} className="block border-b border-dark-line py-3 text-sm text-dark-foreground last:border-0">{item.label}</a>)}</nav>}
    </header>

    <main>
      <section id="top" className="hero-art relative flex min-h-[680px] flex-col justify-center bg-dark-surface pt-28 text-hero-foreground sm:min-h-[720px] lg:min-h-[min(820px,88vh)]">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 sm:px-8 lg:px-12 lg:pb-28">
          <div className="reveal max-w-[710px]">
            <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-electric"><span className="h-px w-7 bg-electric" /> Portfolio / 2026</div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-hero-muted sm:text-sm">Undergraduate Student | CSE (AI & Data Science)</p>
            <h1 className="font-display text-[clamp(3.9rem,7.3vw,7.4rem)] font-bold leading-[0.95] text-hero-foreground">PALLAVI<br />R Y<span className="text-electric">.</span></h1>
            <p className="mt-8 font-display text-xl font-medium sm:text-2xl">Learning. Building. Solving.</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-hero-muted sm:text-base">An aspiring AI & Data Science engineer exploring programming, data, IoT and user-centered technology solutions.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="portfolio"><a href="#projects">View My Projects <ArrowUpRight /></a></Button>
              <Button asChild variant="heroOutline" size="portfolio"><a href="#about">About Me <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-hero-line bg-hero-glass backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-hero-muted sm:gap-8 sm:px-8 lg:px-12">
            {["AI", "Data", "Programming", "UI/UX", "IoT"].map((item, i) => <span key={item} className="flex shrink-0 items-center gap-3 sm:gap-8">{i > 0 && <span className="size-1 rounded-full bg-electric" />}{item}</span>)}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div><SectionHeading eyebrow="01 / Introduction" title="About Me" /><div className="mt-8 hidden h-px w-20 bg-primary lg:block" /></div>
          <div>
            <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">Hi! I am Pallavi R Y, a 2nd year engineering student studying at REVA University in the CSE (AI & Data Science) branch.</p>
            <p className="mt-6 leading-8 text-muted-foreground">I am interested in learning Java programming, Data Analytics, Data Science and problem-solving methodologies. I enjoy learning through practical projects and exploring how technology can be used to solve real-world problems.</p>
            <p className="mt-4 leading-8 text-muted-foreground">I am currently focused on strengthening my programming fundamentals, analytical thinking and technical project experience.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {[{ icon: GraduationCap, text: "2nd Year Engineering Student" }, { icon: BrainCircuit, text: "AI & Data Science" }, { icon: Code2, text: "Programming & Problem Solving" }, { icon: Cpu, text: "IoT Projects" }].map(({ icon: Icon, text }) => <div key={text} className="flex min-h-24 items-center gap-3 rounded-md border border-border bg-card p-3 transition-colors hover:border-primary/40 sm:p-4"><Icon className="size-5 shrink-0 text-primary" strokeWidth={1.7} /><span className="text-xs font-semibold leading-snug sm:text-sm">{text}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-16 border-y border-border bg-secondary/55 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <SectionHeading eyebrow="02 / Academic path" title="Education" description="Building a foundation in computer science, data and emerging technologies." />
          <div className="relative border-l border-primary/35 pl-7 sm:pl-10"><span className="absolute -left-[6px] top-2 size-3 rounded-full border-[3px] border-primary bg-background" />
            <div className="rounded-md border border-border bg-card p-6 shadow-sm sm:p-9"><div className="mb-7 flex items-start justify-between gap-4"><IconTile icon={GraduationCap} /><span className="rounded-sm bg-soft-blue px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">Currently pursuing — 2nd Year</span></div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">REVA University</p><h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Bachelor of Technology</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">Computer Science and Engineering<br />(Artificial Intelligence and Data Science)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="03 / What I'm exploring" title="Skills & Interests" description="A growing toolkit shaped by coursework, curiosity and hands-on projects." /><p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground">Currently learning and building, one skill at a time.</p></div>
        <div className="grid gap-4 md:grid-cols-2">{skillGroups.map((group) => <article key={group.name} className="group rounded-md border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-8"><div className="flex items-start justify-between"><IconTile icon={group.icon} tone={group.tone} /><span className="font-display text-sm text-muted-foreground">/{group.number}</span></div><h3 className="mt-7 font-display text-xl font-semibold">{group.name}</h3><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill.name} className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-sm border border-border bg-tag px-3 py-2 text-xs font-medium leading-snug transition-colors group-hover:border-primary/20">{skill.name}{"status" in skill && skill.status && <span className="text-primary">· {skill.status}</span>}</span>)}</div></article>)}</div>
      </div></section>

      <section id="projects" className="scroll-mt-16 bg-dark-surface py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="04 / Selected work" title="Projects" description="Exploring practical ideas through connected technology and thoughtful problem solving." dark /><span className="text-xs uppercase tracking-widest text-dark-muted">01 — 02</span></div>
        <div className="grid gap-5 lg:grid-cols-2">{projects.map((project) => <article key={project.name} className="group overflow-hidden rounded-md border border-dark-line bg-dark-raised transition-transform duration-300 hover:-translate-y-1"><div className={`visual-grid relative flex h-52 items-center justify-center overflow-hidden ${project.visual} sm:h-64`}><div className="orbit-ring absolute size-40 transition-transform duration-500 group-hover:scale-110 sm:size-48" /><div className="orbit-ring absolute size-56 sm:size-64" /><div className="orbit-ring absolute size-72 opacity-60 sm:size-80" /><project.icon className="relative z-10 size-16 text-electric sm:size-20" strokeWidth={0.8} /><span className="absolute bottom-5 left-6 font-display text-xs tracking-widest text-dark-muted">PROJECT / {project.number}</span><ArrowUpRight className="absolute right-6 top-6 size-5 text-dark-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div className="p-6 sm:p-8"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-electric">{project.category}</p><h3 className="mt-3 font-display text-2xl font-semibold text-dark-foreground">{project.name}</h3><p className="mt-4 min-h-[72px] text-sm leading-7 text-dark-muted">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-sm border border-dark-line px-2.5 py-1.5 text-[11px] text-dark-muted">{tag}</span>)}</div><div className="mt-7 flex flex-wrap gap-3"><Button variant="hero" size="portfolio" onClick={() => setModal({ title: project.name, kind: "project", description: project.description })}>View Project <ArrowUpRight /></Button><Button variant="darkOutline" size="portfolio" disabled title="GitHub link not yet provided"><Github /> GitHub</Button></div></div></article>)}</div>
      </div></section>

      <section id="certifications" className="scroll-mt-16 py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="05 / Continued learning" title="Certifications" description="Courses and certifications that support my learning beyond the classroom." /><div className="mt-12 grid gap-4 md:grid-cols-3">{certificates.map((certificate) => <article key={certificate.number} className="group overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"><div className="flex h-44 flex-col items-center justify-center gap-3 border-b border-border bg-secondary/70 text-muted-foreground"><FileImage className="size-9 opacity-45" strokeWidth={1.2} /><span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Certificate image to be added</span></div><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{certificate.issuer}</span><span className="text-xs text-muted-foreground">/{certificate.number}</span></div><h3 className="mt-3 min-h-14 font-display text-xl font-semibold leading-snug">{certificate.name}</h3><p className="mt-2 text-xs text-muted-foreground">{certificate.category}</p><Button variant="outline" size="portfolio" className="mt-6 w-full" onClick={() => setModal({ title: certificate.name, kind: "certificate" })}>View Certificate <ArrowUpRight /></Button></div></article>)}</div></div></section>

      <section id="journey" className="border-y border-border bg-secondary/55 py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="06 / The process" title="My Learning Journey" description="I am continuously learning and developing my technical skills through coursework, certifications and hands-on projects." /><div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:gap-14"><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{journey.map((step, i) => <Button key={step} variant="outline" onClick={() => setSelectedJourney(i)} aria-pressed={selectedJourney === i} className={`relative h-auto min-h-24 flex-col items-start justify-center gap-2 whitespace-normal rounded-md p-4 text-left font-display text-sm transition-all hover:border-primary sm:min-h-28 sm:p-5 ${selectedJourney === i ? "journey-active border-primary hover:bg-primary/90 hover:text-primary-foreground" : "bg-card"}`}><span className={`text-[10px] ${selectedJourney === i ? "opacity-80" : "text-muted-foreground"}`}>0{i + 1} / 06</span><span className="w-full leading-snug">{step}</span></Button>)}</div><div className="border-l-2 border-primary pl-6 sm:pl-8"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Currently exploring</span><p className="mt-4 font-display text-3xl font-medium sm:text-4xl">{journey[selectedJourney]}</p><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Every new concept is another step towards building meaningful, real-world solutions.</p><span className="mt-7 flex items-center gap-2 text-xs font-semibold text-primary"><span className="h-px w-8 bg-primary" /> Learning in progress</span></div></div></div></section>

      <section id="approach" className="bg-dark-surface py-20 sm:py-28"><div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12"><div><SectionHeading eyebrow="07 / My perspective" title="Where Design Meets Technology" description="I am interested in creating technology solutions that are not only functional, but also simple, intuitive and meaningful for users." dark /><div className="mt-9 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-electric sm:gap-3 sm:text-xs">{["UI/UX", "AI & Data Science", "Programming", "IoT"].map((item, i) => <span key={item} className="flex items-center gap-2 sm:gap-3">{i > 0 && <span className="text-dark-muted">+</span>}{item}</span>)}</div></div><div className="relative overflow-hidden rounded-md border border-dark-line bg-dark-raised p-6 sm:p-10"><div className="grid-texture absolute inset-0 opacity-50" /><div className="relative z-10 flex flex-wrap items-center justify-center gap-2 py-8 sm:gap-3">{["USER", "IDEA", "DESIGN", "CODE", "DATA", "SOLUTION"].map((item, i) => <div key={item} className="flex items-center gap-2 sm:gap-3"><span className={`flex h-14 min-w-20 items-center justify-center rounded-sm border px-3 text-[10px] font-bold tracking-widest sm:h-16 sm:min-w-24 ${i === 0 || i === 5 ? "border-electric bg-hero-glass-strong text-electric" : "border-dark-line bg-dark-surface text-dark-foreground"}`}>{item}</span>{i < 5 && <ArrowRight className="size-3 text-electric" />}</div>)}</div><p className="relative z-10 mt-4 border-t border-dark-line pt-5 text-center text-xs text-dark-muted">From understanding people to shaping useful solutions.</p></div></div></section>

      <section id="gallery" className="py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="flex items-end justify-between gap-4"><SectionHeading eyebrow="08 / Visual archive" title="The Work, In Pictures" description="A space for projects, designs and milestones as the journey grows." /><div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" aria-label="Scroll gallery left" onClick={() => scrollGallery(-1)} disabled={galleryIndex === 0}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Scroll gallery right" onClick={() => scrollGallery(1)} disabled={galleryIndex === gallery.length - 1}><ChevronRight /></Button></div></div><div className="gallery-track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">{gallery.map((item, i) => <div id={`gallery-${i}`} key={item.label} className="w-[240px] shrink-0 snap-start sm:w-[300px]"><div className={`flex h-52 items-center justify-center rounded-md border border-border ${item.tone} sm:h-60`}><item.icon className="size-12 text-primary/35" strokeWidth={1} /></div><div className="mt-4 flex items-center justify-between"><span className="text-sm font-semibold">{item.label}</span><span className="text-[10px] uppercase tracking-widest text-muted-foreground">Coming soon</span></div></div>)}</div><div className="mt-2 flex justify-center gap-2 sm:hidden"><Button variant="outline" size="icon" aria-label="Scroll gallery left" onClick={() => scrollGallery(-1)} disabled={galleryIndex === 0}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Scroll gallery right" onClick={() => scrollGallery(1)} disabled={galleryIndex === gallery.length - 1}><ChevronRight /></Button></div></div></section>

      <section id="contact" className="scroll-mt-16 border-t border-border bg-secondary/55 py-20 sm:py-28"><div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12"><div><SectionHeading eyebrow="09 / Get in touch" title="Let's Connect" description="I am always interested in learning, collaborating on projects and connecting with people who share an interest in technology." /><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="hero" size="portfolio"><a href={linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="outline" size="portfolio"><a href={email}>Send Email <Mail /></a></Button></div></div><div className="border-t border-border lg:border-t-0"><a href={email} className="group flex items-center justify-between gap-4 border-b border-border py-5"><span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</span><span className="mt-1 block break-all font-display text-base font-medium sm:text-lg">pallaviry20@gmail.com</span></span><ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href={linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 border-b border-border py-5"><span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">LinkedIn</span><span className="mt-1 block break-all font-display text-sm font-medium sm:text-lg">linkedin.com/in/pallavi-r-y-81b308367</span></span><ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div></section>
    </main>

    <footer className="bg-dark-surface py-10 text-dark-foreground"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-end lg:px-12"><div><a href="#top" className="font-display text-xl font-bold tracking-wider">PALLAVI R Y<span className="text-electric">.</span></a><p className="mt-3 text-xs text-dark-muted">Undergraduate Student | CSE (AI & Data Science)</p><p className="mt-1 text-xs text-dark-muted">Learning. Building. Solving.</p></div><div className="flex gap-5"><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-muted transition-colors hover:text-electric"><Linkedin className="size-5" /></a><a href={email} aria-label="Email" className="text-dark-muted transition-colors hover:text-electric"><Mail className="size-5" /></a></div></div><div className="mx-auto mt-10 max-w-[1280px] border-t border-dark-line px-5 pt-5 text-[11px] text-dark-muted sm:px-8 lg:px-12">© {new Date().getFullYear()} Pallavi R Y. Built with curiosity.</div></footer>

    {modal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/80 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}><div role="dialog" aria-modal="true" aria-labelledby="detail-title" className="w-full max-w-lg rounded-md border border-border bg-card p-6 shadow-xl sm:p-8"><div className="flex items-start justify-between gap-3"><span className="text-[11px] font-bold uppercase tracking-widest text-primary">{modal.kind === "project" ? "Project overview" : "Certificate"}</span><Button variant="ghost" size="icon" aria-label="Close details" onClick={() => setModal(null)}><X /></Button></div><h2 id="detail-title" className="mt-4 font-display text-2xl font-semibold">{modal.title}</h2>{modal.description && <p className="mt-4 text-sm leading-7 text-muted-foreground">{modal.description}</p>}<div className="mt-7 flex items-center gap-3 rounded-md border border-border bg-secondary p-4"><FileImage className="size-5 shrink-0 text-primary" /><p className="text-sm text-muted-foreground">{modal.kind === "project" ? "Project photos and links have not been added yet." : "Certificate image has not been added yet."}</p></div><Button variant="outline" className="mt-6" onClick={() => setModal(null)}>Close</Button></div></div>}
  </div>;
}
