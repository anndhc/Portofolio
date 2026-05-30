"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "POTENSI Web Portal",
      description: "A web-based integrated platform designed to manage and synchronize academic schedules and time enrollment efficiently.",
      caseStudy: "Streamlining academic management through a structured and responsive web interface.",
      image: "/web.webp",
      href: "https://www.figma.com/design/V1wJyyA9sdmcXu0oVkdMAa/Potensi-Design?node-id=0-1&t=mFtUG9RNbLfBbvMh-1",
      year: "2024",
      tags: ["Web", "UI/UX"]
    },
    {
      title: "POTENSI Mobile",
      description: "A mobile version of the enrollment system, tailored for students to access and track their academic schedules on the go.",
      caseStudy: "Bringing academic scheduling to students' fingertips with an intuitive mobile experience.",
      image: "/potensiapp.webp",
      href: "https://www.figma.com/design/V1wJyyA9sdmcXu0oVkdMAa/Potensi-Design?node-id=370-776&t=mFtUG9RNbLfBbvMh-1",
      year: "2024",
      tags: ["Mobile", "UI/UX"]
    },
    {
      title: "SIPMAS",
      description: "A mobile-based attendance information system featuring detailed system mapping to simplify student tracking processes.",
      caseStudy: "Enhancing daily attendance tracking with intuitive mobile interactions and clear visualization.",
      image: "/sipmas.webp",
      href: "https://www.figma.com/design/fZcSNDk91MkFdcdGkPNSpc/Design-SIPMAS?node-id=0-1&t=p221A2qxSJh2TOoH-1",
      year: "2025",
      tags: ["Mobile UI/UX", "System Analysis"]
    },
  ];

  return (
    <main className="relative flex flex-col items-center w-full overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 ${scrolled ? "bg-transparent backdrop-blur-md border-b border-foreground/5" : "bg-transparent"
          }`}
      >
        <Link href="#hero" className="font-serif italic font-medium text-xl tracking-wide">
          Caca.
        </Link>
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 sm:gap-x-4 md:gap-6 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase max-w-[65vw] md:max-w-none">
          <Link href="#specialization" className="hover:text-accent transition-colors">Services</Link>
          <Link href="#work" className="hover:text-accent transition-colors">Work</Link>
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#resume" className="hover:text-accent transition-colors">Resume</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full max-w-[100rem] mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[100dvh] flex flex-col justify-center relative">
        
        {/* Scattered Animated Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Set 1 */}
          <i className="devicon-figma-plain text-5xl md:text-6xl text-foreground/10 absolute top-[10%] left-[5%] animate-float" style={{ animationDelay: '0s' }}></i>
          <i className="devicon-photoshop-plain text-4xl md:text-5xl text-foreground/10 absolute top-[25%] right-[10%] animate-float" style={{ animationDelay: '1s' }}></i>
          <i className="devicon-canva-original text-4xl md:text-5xl text-foreground/10 absolute bottom-[20%] left-[10%] animate-float" style={{ animationDelay: '2s' }}></i>
          <i className="devicon-python-plain text-3xl md:text-4xl text-foreground/10 absolute top-[45%] left-[40%] animate-float" style={{ animationDelay: '1.5s' }}></i>
          <i className="devicon-mysql-plain text-5xl md:text-6xl text-foreground/10 absolute bottom-[30%] right-[15%] animate-float" style={{ animationDelay: '0.5s' }}></i>
          <i className="devicon-vscode-plain text-4xl md:text-5xl text-foreground/10 absolute top-[10%] right-[35%] animate-float" style={{ animationDelay: '2.5s' }}></i>
          <i className="devicon-github-original text-4xl md:text-5xl text-foreground/10 absolute bottom-[15%] left-[35%] animate-float" style={{ animationDelay: '1.2s' }}></i>
          <i className="devicon-html5-plain text-3xl md:text-4xl text-foreground/10 absolute top-[60%] right-[5%] animate-float" style={{ animationDelay: '0.8s' }}></i>
          <i className="devicon-css3-plain text-4xl md:text-5xl text-foreground/10 absolute bottom-[5%] right-[45%] animate-float" style={{ animationDelay: '2.2s' }}></i>
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-foreground/10 absolute top-[50%] left-[8%] animate-float" style={{ animationDelay: '0.3s' }}>
            <path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z" />
          </svg>
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-foreground/10 absolute bottom-[45%] right-[30%] animate-float" style={{ animationDelay: '1.8s' }}>
            <path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8806-3.133 6.138-3.133h3.7372a2.0007 2.0007 0 0 0 2.0007-2.0007V5.2697a2.0007 2.0007 0 0 0-2.0007-2.0007z" />
          </svg>
          
          {/* Set 2 (Duplicates for denser background) */}
          <i className="devicon-figma-plain text-4xl md:text-5xl text-foreground/10 absolute bottom-[10%] right-[5%] animate-float" style={{ animationDelay: '1.7s' }}></i>
          <i className="devicon-photoshop-plain text-3xl md:text-4xl text-foreground/10 absolute top-[5%] left-[25%] animate-float" style={{ animationDelay: '0.4s' }}></i>
          <i className="devicon-canva-original text-5xl md:text-6xl text-foreground/10 absolute top-[80%] right-[25%] animate-float" style={{ animationDelay: '2.9s' }}></i>
          <i className="devicon-python-plain text-4xl md:text-5xl text-foreground/10 absolute top-[35%] right-[5%] animate-float" style={{ animationDelay: '1.1s' }}></i>
          <i className="devicon-mysql-plain text-3xl md:text-4xl text-foreground/10 absolute bottom-[50%] left-[20%] animate-float" style={{ animationDelay: '2.4s' }}></i>
          <i className="devicon-vscode-plain text-5xl md:text-6xl text-foreground/10 absolute top-[5%] right-[20%] animate-float" style={{ animationDelay: '0.9s' }}></i>
          <i className="devicon-github-original text-4xl md:text-5xl text-foreground/10 absolute bottom-[5%] left-[60%] animate-float" style={{ animationDelay: '1.6s' }}></i>
          <i className="devicon-html5-plain text-5xl md:text-6xl text-foreground/10 absolute top-[20%] left-[50%] animate-float" style={{ animationDelay: '2.1s' }}></i>
          <i className="devicon-css3-plain text-3xl md:text-4xl text-foreground/10 absolute top-[70%] left-[25%] animate-float" style={{ animationDelay: '0.2s' }}></i>
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-foreground/10 absolute bottom-[25%] right-[60%] animate-float" style={{ animationDelay: '1.3s' }}>
            <path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z" />
          </svg>
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-foreground/10 absolute top-[30%] left-[70%] animate-float" style={{ animationDelay: '2.8s' }}>
            <path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8806-3.133 6.138-3.133h3.7372a2.0007 2.0007 0 0 0 2.0007-2.0007V5.2697a2.0007 2.0007 0 0 0-2.0007-2.0007z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8 reveal">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent">UI / UX Designer</h2>
            <h1 className="font-serif text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] leading-[0.85] tracking-tighter">
              Anindha<br />
              <span className="italic">Cahya</span><br />
              M.S
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8 reveal reveal-delay-200 lg:items-end mt-8 lg:mt-0">
            <div className="w-40 h-40 md:w-76 md:h-76 rounded-full overflow-hidden bg-surface relative border-4 border-foreground/10">
              <Image src="/profile.webp" alt="Profile" fill className="object-cover object-bottom" />
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 text-balance max-w-sm font-medium lg:text-right">
              I am a Computer Engineering student with a growing interest in UI/UX Design. I enjoy exploring how technology and design work together to create user-friendly digital experiences. Through academic projects and self-learning, I continue to develop my skills and contribute to meaningful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section id="specialization" className="w-full bg-foreground text-background py-32 md:py-48 selection:bg-accent selection:text-foreground relative overflow-hidden">
        {/* Abstract glow */}
        <div className="absolute top-0 right-0 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen blur-3xl"></div>

        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col gap-24 md:gap-40">
            <div className="reveal">
              <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-accent mb-4">Core Focus</h2>
              <h2 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] text-background leading-[0.9] tracking-tight">What I <br />Specialize In</h2>
            </div>

            <div className="flex flex-col gap-32">

              {/* ── 01 Mobile Design ── */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 reveal reveal-delay-100 relative">
                <span className="font-serif italic text-[10rem] md:text-[15rem] lg:text-[20rem] leading-[0.8] tracking-tighter text-accent/40 -z-10 absolute -top-10 md:-top-20 -left-6 md:-left-12 pointer-events-none select-none">01</span>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-24 md:pt-0 pl-4 md:pl-24">
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">Mobile Design & System Analysis</h3>
                  <p className="text-background/70 text-xl md:text-2xl leading-relaxed font-medium">
                    Creating intuitive mobile application designs through user-centered approaches and system analysis methodologies. Experienced in developing high-fidelity prototypes, user flows, and structured system documentation to support functional and efficient digital solutions.
                  </p>
                </div>

                {/* Phone Frames */}
                <div className="flex w-full md:w-1/2 items-center justify-center relative min-h-[350px] md:min-h-[420px] mt-12 md:mt-0">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

                  {/* Secondary phone — splash.webp (behind, tilted) */}
                  <div className="absolute right-8 top-4 z-0 -rotate-6 opacity-70 pointer-events-none group/phone2">
                    {/* Phone shell */}
                    <div className="relative w-36 lg:w-44">
                      <div style={{ paddingBottom: '222%' }} />
                      {/* Outer frame */}
                      <div className="absolute inset-0 rounded-[2rem] bg-zinc-900 border-[3px] border-zinc-800 shadow-xl" />
                      {/* Side buttons left */}
                      <div className="absolute left-[-5px] top-[22%] w-1 h-6 rounded-l-sm bg-zinc-700" />
                      <div className="absolute left-[-5px] top-[33%] w-1 h-10 rounded-l-sm bg-zinc-700" />
                      {/* Side button right */}
                      <div className="absolute right-[-5px] top-[28%] w-1 h-12 rounded-r-sm bg-zinc-700" />
                      {/* Screen area */}
                      <div className="absolute inset-[4px] rounded-[1.8rem] overflow-hidden bg-white">
                        <Image src="/splash.webp" alt="Splash Screen UI" fill className="object-contain object-center" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {/* Screen gloss */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                      {/* Top camera pill */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[6px] bg-black rounded-full z-10" />
                      {/* Bottom home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-black/40 rounded-full z-10" />
                    </div>
                  </div>

                  {/* Primary phone — home.webp (front, slightly rotated) */}
                  <div className="relative z-10 rotate-3 hover:rotate-0 transition-transform duration-700 group/phone1">
                    <div className="relative w-44 lg:w-56">
                      <div style={{ paddingBottom: '222%' }} />
                      {/* Outer frame */}
                      <div className="absolute inset-0 rounded-[2.5rem] bg-zinc-900 border-[4px] border-zinc-800 shadow-2xl shadow-accent/20" />
                      {/* Side buttons left */}
                      <div className="absolute left-[-6px] top-[20%] w-[5px] h-6 rounded-l-sm bg-zinc-700" />
                      <div className="absolute left-[-6px] top-[30%] w-[5px] h-12 rounded-l-sm bg-zinc-700" />
                      {/* Side button right */}
                      <div className="absolute right-[-6px] top-[26%] w-[5px] h-14 rounded-r-sm bg-zinc-700" />
                      {/* Screen area */}
                      <div className="absolute inset-[5px] rounded-[2.2rem] overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src="/home.webp"
                          alt="Home Screen UI"
                          fill
                          className="object-contain object-center transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        {/* Screen gloss */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                      {/* Top camera pill */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-[7px] bg-black rounded-full z-10" />
                      {/* Bottom home indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/40 rounded-full z-10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── 02 Website Design ── */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16 reveal reveal-delay-200 relative">
                <span className="font-serif italic text-[10rem] md:text-[15rem] lg:text-[20rem] leading-[0.8] tracking-tighter text-accent/40 -z-10 absolute -top-10 md:-top-20 -right-6 md:-right-12 pointer-events-none select-none text-right">02</span>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-24 md:pt-0 pr-4 md:pr-24 lg:text-right">
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">Website Design</h3>
                  <p className="text-background/70 text-xl md:text-2xl leading-relaxed font-medium">
                    Creating responsive and user-friendly website interfaces with a focus on usability, visual consistency, and modern design principles. Experienced in designing high-fidelity prototypes that translate user needs into engaging web experiences.
                  </p>
                </div>

                {/* Laptop Frames */}
                <div className="flex w-full md:w-1/2 items-end justify-center relative py-10 px-4 mt-8 md:mt-0">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

                  {/* ── Secondary laptop (2.webp) — behind, tilted right ── */}
                  <div className="absolute bottom-10 left-0 z-0 rotate-2 opacity-60 pointer-events-none w-[82%]">
                    {/* Lid (screen area) */}
                    <div className="flex flex-col w-full rounded-t-[10px] border-[3px] border-background/20 overflow-hidden shadow-lg bg-background/10">
                      {/* Top bezel — camera dot */}
                      <div className="flex items-center justify-center h-5 bg-background/15 flex-shrink-0">
                        <div className="w-[6px] h-[6px] rounded-full bg-background/30" />
                      </div>
                      {/* Screen */}
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <Image
                          src="/2.webp"
                          alt="Website Design UI 2"
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-transparent pointer-events-none" />
                      </div>
                    </div>
                    {/* Hinge strip */}
                    <div className="w-full h-[5px] bg-background/20 border-x-[3px] border-background/20" />
                    {/* Base / trackpad area */}
                    <div className="w-full h-[14px] rounded-b-[8px] bg-background/15 border-x-[3px] border-b-[3px] border-background/20 flex items-center justify-center">
                      <div className="w-1/5 h-[4px] rounded-full bg-background/20" />
                    </div>
                    {/* Stand foot */}
                    <div className="w-[108%] -ml-[4%] mt-[3px] h-[4px] rounded-full bg-background/15" />
                  </div>

                  {/* ── Primary laptop (2.webp) — front, tilted left ── */}
                  <div className="relative z-10 -rotate-2 hover:rotate-0 transition-transform duration-700 group/laptop w-[90%]">
                    {/* Lid (screen area) */}
                    <div className="flex flex-col w-full rounded-t-[12px] border-[3px] border-background/30 overflow-hidden shadow-2xl shadow-accent/20 bg-background/10">
                      {/* Top bezel — camera dot */}
                      <div className="flex items-center justify-center h-6 bg-background/20 flex-shrink-0">
                        <div className="w-[7px] h-[7px] rounded-full bg-background/40" />
                      </div>
                      {/* Screen */}
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <Image
                          src="/2.webp"
                          alt="Website Design UI"
                          fill
                          className="object-cover object-top scale-105 group-hover/laptop:scale-100 transition-transform duration-700"
                        />
                        {/* Screen gloss */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                    {/* Hinge strip */}
                    <div className="w-full h-[6px] bg-background/25 border-x-[3px] border-background/30" />
                    {/* Base / keyboard area */}
                    <div className="w-full h-[16px] rounded-b-[10px] bg-background/20 border-x-[3px] border-b-[3px] border-background/30 flex items-center justify-center">
                      <div className="w-1/4 h-[5px] rounded-full bg-background/25" />
                    </div>
                    {/* Stand foot */}
                    <div className="w-[110%] -ml-[5%] mt-[4px] h-[5px] rounded-full bg-background/20 shadow-md" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="work" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col gap-32">
        <div className="reveal">
          <h2 className="font-serif italic text-5xl md:text-7xl">Academic Projects</h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col gap-12 md:gap-24 group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
            >
              {/* Image Container */}
              <div className={`w-full md:w-3/5 rounded-2xl overflow-hidden relative reveal border border-foreground/5 shadow-sm group-hover:shadow-xl group-hover:shadow-accent/10 transition-all duration-700 group-hover:-translate-y-2 ${["/potensiapp.webp", "/web.webp", "/sipmas.webp"].includes(project.image) ? "aspect-[16/9] bg-black" : "aspect-[4/3] bg-surface"
                }`}>
                <Image
                  src={project.image}
                  alt={`${project.title} Mockup`}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${["/potensiapp.webp", "/web.webp", "/sipmas.webp"].includes(project.image) ? "object-contain" : "object-cover"
                    }`}
                />
                <div className="absolute inset-0 bg-accent/5 transition-colors duration-500 group-hover:bg-transparent z-10 pointer-events-none" />
              </div>

              {/* Text Container */}
              <div className={`w-full md:w-2/5 flex flex-col gap-8 reveal reveal-delay-200 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-accent uppercase">
                    <span>{project.year}</span>
                    <span className="w-8 h-px bg-accent/50"></span>
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-foreground/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif italic text-4xl md:text-5xl group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-xl text-foreground/90 leading-relaxed font-semibold">
                    {project.caseStudy}
                  </p>
                  <p className="text-base text-foreground/70 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors w-fit pb-1 border-b border-foreground/30 hover:border-accent mt-4 group/btn"
                >
                  View More <span className="transform transition-transform group-hover/btn:translate-x-2">→</span >
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About & Gallery */}
      <section id="about" className="w-full bg-surface py-32 md:py-48 border-y border-foreground/5 overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="lg:col-span-5 flex flex-col gap-12 reveal">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase tracking-widest text-accent">The Designer</span>
              <h2 className="font-serif italic text-5xl md:text-7xl">About Me</h2>
            </div>
            <div className="flex flex-col gap-6 text-lg text-foreground/80 leading-relaxed font-medium">
              <p>
                Hi, I'm Anindha Cahya Mulia Salim, a Computer Engineering student at Politeknik Negeri Semarang with a passion in <span className="font-semibold text-foreground relative inline-block group cursor-default">UI/UX Design<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></span>. I enjoy designing intuitive digital experiences for web and mobile applications.
              </p>
              <p>
                My academic projects have allowed me to explore <span className="italic text-foreground">interface design, interactive prototyping, and system analysis, </span> helping me translate user requirements into functional and user-centered solutions. I am eager to continue learning and growing in the field of <span className="font-semibold text-foreground relative inline-block group cursor-default">UI/UX Design<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></span>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 reveal reveal-delay-200">
            <div className="col-span-2 aspect-[21/9] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
              <Image
                src="/studio.webp"
                alt="Studio Process"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-white/90 font-serif italic text-2xl group-hover:scale-110 group-hover:text-white transition-all duration-700">Studio Process</div>
            </div>
            <div className="aspect-[4/5] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:-rotate-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
              <Image
                src="/me.png"
                alt="Me"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-white/90 font-serif italic text-xl group-hover:scale-110 group-hover:text-white transition-all duration-700">Me</div>
            </div>
            <div className="aspect-[4/5] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:rotate-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
              <Image
                src="/teamwork.webp"
                alt="Teamwork"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-white/90 font-serif italic text-xl group-hover:scale-110 group-hover:text-white transition-all duration-700">Teamwork</div>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Section */}
      <section id="resume" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col gap-24 md:gap-32">
        <div className="reveal">
          <h2 className="font-serif italic text-5xl md:text-7xl">Resume</h2>
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Education</h3>
          <div className="md:col-span-8 flex flex-col gap-8 font-medium border-t border-foreground/10 pt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl md:text-2xl font-semibold">Bachelor of Computer Engineering</h4>
                <p className="text-foreground/70 text-lg leading-relaxed max-w-xl font-normal">
                  Currently pursuing a Bachelor's degree in Computer Engineering at Politeknik Negeri Semarang with a GPA of 3.73. Passionate about UI/UX Design and System Analysis, with experience in academic projects involving web and mobile application design using Figma.
                </p>
              </div>
              <div className="flex sm:justify-end text-sm font-bold tracking-widest text-accent uppercase">
                <span>2023-Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Expertise</h3>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6 border-t border-foreground/10 pt-6">
              <h4 className="text-xl font-semibold">UI/UX Design</h4>
              <p className="text-foreground/70 text-base leading-relaxed font-normal">
                Designing user-friendly interfaces for web and mobile applications through academic projects. Focused on visual consistency, usability, and creating engaging digital experiences.
              </p>
              <ul className="flex flex-col gap-2 text-foreground/90 font-medium text-base mt-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> High-Fidelity Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Mobile Interface Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Web Interface Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Component & Design Systems</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Responsive Design</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 border-t border-foreground/10 pt-6">
              <h4 className="text-xl font-semibold">System Analysis</h4>
              <p className="text-foreground/70 text-base leading-relaxed font-normal">
                Analyzing system requirements and translating them into structured digital solutions through system modeling and user-centered design approaches.
              </p>
              <ul className="flex flex-col gap-2 text-foreground/90 font-medium text-base mt-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> User Flow Mapping</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Flowchart Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Use Case Diagram</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Data Flow Diagram (DFD)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Information Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Software & Tools</h3>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-foreground/10 pt-6 font-sans">
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-figma-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Figma</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-photoshop-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Photoshop</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-canva-original text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Canva</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-python-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Python</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-mysql-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">SQL</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-vscode-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">VS Code</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-github-original text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">GitHub</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-html5-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">HTML5</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <i className="devicon-css3-plain text-3xl group-hover:scale-110 transition-transform"></i>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">CSS3</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[28px] h-[28px] group-hover:scale-110 transition-transform"
                >
                  <path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z" />
                </svg>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Miro</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 rounded-xl bg-surface/30 hover:bg-surface/70 transition-all duration-300 cursor-default group w-full h-[72px]">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground group-hover:text-accent transition-colors">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[28px] h-[28px] group-hover:scale-110 transition-transform"
                >
                  <path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8806-3.133 6.138-3.133h3.7372a2.0007 2.0007 0 0 0 2.0007-2.0007V5.2697a2.0007 2.0007 0 0 0-2.0007-2.0007z" />
                </svg>
              </div>
              <span className="font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors">Visual Paradigm</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Certifications</h3>
          <div className="md:col-span-8 flex flex-col gap-6 font-medium border-t border-foreground/10 pt-6">
            {[
              { title: "Belajar Dasar AI", issuer: "Dicoding", year: "2025" },
              { title: "Samsung Innovation Campus", issuer: "Code Kickstart", year: "2025" },
              { title: "Oracle Academy", issuer: "Database Programming with SQL", year: "2024" },
              { title: "Oracle Academy", issuer: "Database Design", year: "2024" },

            ].map((cert, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-foreground/5 last:border-0 last:pb-0">
                <h4 className="text-lg md:text-xl font-semibold">{cert.title}</h4>
                <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                  <span className="text-foreground/60">{cert.issuer}</span>
                  <span className="text-accent">•</span>
                  <span className="text-foreground">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full bg-foreground text-background py-32 md:py-48 selection:bg-accent selection:text-foreground">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-16 reveal">
          <div className="flex flex-col gap-6">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Get in touch</span>
            <a
              href="mailto:anindaa35@gmail.com"
              className="font-serif italic text-4xl sm:text-5xl md:text-7xl hover:text-accent transition-colors block pb-4 relative group break-all"
            >
              anindaa35@gmail.com
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </a>
          </div>

          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
            <a
              href="https://www.linkedin.com/in/anindhasalim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-foreground text-background/50 py-8 text-center text-sm border-t border-background/10 font-medium">
        © {new Date().getFullYear()} Anindha Cahya M.S. All rights reserved.
      </footer>
    </main>
  );
}
