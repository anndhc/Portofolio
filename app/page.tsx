"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      title: "Cookie",
      description: "A mobile recipe application to help users create, discover, save, and follow cooking steps easily.",
      caseStudy: "Simplifying the culinary journey through intuitive step-by-step guidance.",
      href: "#",
      year: "2023",
      tags: ["Mobile UX", "Interaction Design"]
    },
    {
      title: "SCM Website",
      description: "Design of a Supply Chain Management website for industrial scale, ranging from dashboards, inventory, warehousing, to delivery monitoring.",
      caseStudy: "Organizing complex industrial data into actionable, clear dashboards.",
      href: "#",
      year: "2023",
      tags: ["Web App", "Data Visualization"]
    },
    {
      title: "Wireframe Santry Cyber",
      description: "Wireframe design of an online learning application accessible to all students in Indonesia.",
      caseStudy: "Focusing on core educational flows before visual application.",
      href: "#",
      year: "2024",
      tags: ["Wireframing", "EdTech"]
    },
    {
      title: "Website Kamal Group",
      description: "A digital-based company profile providing photography studio, printing, and internship services.",
      caseStudy: "Balancing multiple service offerings under a cohesive brand umbrella.",
      href: "#",
      year: "2024",
      tags: ["Corporate Website", "Branding"]
    },
    {
      title: "Trains Ticket",
      description: "Redesign of the train ticket booking feature on the Traveloka application, focusing on the ease of seat selection and checkout process.",
      caseStudy: "Streamlining a high-friction user journey.",
      href: "#",
      year: "2024",
      tags: ["Redesign", "E-commerce Flows"]
    },
    {
      title: "Gonyam",
      description: "An application to help culinary MSMEs promote and sell food products digitally with a user-friendly interface.",
      caseStudy: "Empowering small businesses with accessible digital tools.",
      href: "#",
      year: "2024",
      tags: ["SaaS Mobile", "B2B Design"]
    }
  ];

  return (
    <main className="relative flex flex-col items-center w-full overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/5" : "bg-transparent"
          }`}
      >
        <Link href="#hero" className="font-serif italic font-medium text-xl tracking-wide">
          Zakia.
        </Link>
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 md:gap-6 text-xs md:text-sm font-bold tracking-wide uppercase max-w-[60vw] md:max-w-none">
          <Link href="#specialization" className="hover:text-accent transition-colors">Services</Link>
          <Link href="#work" className="hover:text-accent transition-colors">Work</Link>
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#resume" className="hover:text-accent transition-colors">Resume</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full max-w-[100rem] mx-auto px-6 md:px-12 pt-48 pb-24 md:pt-64 md:pb-48 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-9 flex flex-col gap-6 md:gap-10 reveal">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-accent">UI / UX Designer</h2>
            <h1 className="font-serif text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] leading-[0.8] tracking-tighter">
              Zakia<br />
              <span className="italic">Azharrifa</span><br />
              Kn
            </h1>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-10 reveal reveal-delay-200 lg:items-end">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-surface relative grayscale contrast-150 mix-blend-multiply border-4 border-foreground/10">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
            </div>
            <p className="text-xl md:text-2xl leading-snug text-foreground/80 text-balance max-w-sm font-medium lg:text-right">
              I design interfaces that are not only visually appealing but also comfortable and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section id="specialization" className="w-full bg-foreground text-background py-32 md:py-48 selection:bg-accent selection:text-foreground relative overflow-hidden">
        {/* Abstract shape to break the grid visually */}
        <div className="absolute top-0 right-0 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen blur-3xl"></div>
        
        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col gap-24 md:gap-40">
            <div className="reveal">
              <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-accent mb-4">Core Focus</h2>
              <h2 className="font-serif italic text-6xl md:text-8xl lg:text-[7rem] text-background leading-[0.9] tracking-tight">What I <br/>Specialize In</h2>
            </div>
            
            <div className="flex flex-col gap-32">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 reveal reveal-delay-100 relative">
                <span className="font-serif italic text-[10rem] md:text-[15rem] lg:text-[20rem] leading-[0.8] tracking-tighter text-accent/40 -z-10 absolute -top-10 md:-top-20 -left-6 md:-left-12 pointer-events-none select-none">01</span>
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-24 md:pt-0 pl-4 md:pl-24">
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">Mobile Design</h3>
                  <p className="text-background/70 text-xl md:text-2xl leading-relaxed font-medium">
                    Designing intuitive, visually appealing, and easy-to-use mobile application interfaces for iOS and Android platforms, prioritizing tap targets and tactile feedback.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-24 reveal reveal-delay-200 relative">
                <span className="font-serif italic text-[10rem] md:text-[15rem] lg:text-[20rem] leading-[0.8] tracking-tighter text-accent/40 -z-10 absolute -top-10 md:-top-20 -right-6 md:-right-12 pointer-events-none select-none text-right">02</span>
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-24 md:pt-0 pr-4 md:pr-24 lg:text-right">
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">Website Design</h3>
                  <p className="text-background/70 text-xl md:text-2xl leading-relaxed font-medium">
                    Crafting responsive website interfaces oriented towards user comfort, accessibility, and conversion goals, with a focus on narrative scroll pacing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col gap-32">
        <div className="reveal">
          <h2 className="font-serif italic text-5xl md:text-7xl">Featured Work</h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col gap-12 md:gap-24 group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
            >
              {/* Image Container */}
              <div className="w-full md:w-3/5 aspect-[4/3] bg-surface rounded-2xl overflow-hidden relative reveal border border-foreground/5 shadow-sm group-hover:shadow-xl group-hover:shadow-accent/10 transition-all duration-700 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-accent/5 transition-colors duration-500 group-hover:bg-transparent z-10 pointer-events-none" />
                <div className="w-full h-full flex items-center justify-center text-foreground/20 font-serif italic text-3xl md:text-4xl px-8 text-center leading-tight bg-foreground/5 group-hover:scale-105 transition-transform duration-700">
                  {project.title} <br />Mockup
                </div>
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
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors w-fit pb-1 border-b border-foreground/30 hover:border-accent mt-4 group/btn"
                >
                  Read Case Study <span className="transform transition-transform group-hover/btn:translate-x-2">→</span >
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
                I am a 6th-semester Information Systems student focusing on <span className="font-semibold text-foreground relative inline-block group cursor-default">UI/UX Design<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></span>. I am accustomed to being involved in the entire end-to-end design process, from user research and problem formulation to wireframing, prototyping, and usability testing.
              </p>
              <p>
                My approach relies on <span className="italic text-foreground">Human-Centered Design (HCD)</span> to ensure that the outcomes are not only aesthetically pleasing but functionally valid and impactful for the business. In past projects, this focus has driven measurable improvements, such as increasing user satisfaction by during testing phases.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 reveal reveal-delay-200">
            <div className="col-span-2 aspect-[21/9] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-serif italic text-2xl group-hover:scale-110 group-hover:text-accent transition-all duration-700">Studio Process</div>
            </div>
            <div className="aspect-[4/5] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:-rotate-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-serif italic text-xl group-hover:scale-110 group-hover:text-accent transition-all duration-700">Workspace</div>
            </div>
            <div className="aspect-[4/5] bg-background grayscale opacity-60 border border-foreground/10 rounded-xl hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-2 hover:rotate-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-serif italic text-xl group-hover:scale-110 group-hover:text-accent transition-all duration-700">Workshop</div>
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
                <h4 className="text-xl md:text-2xl font-semibold">Bachelor of Information Systems</h4>
                <p className="text-foreground/70 text-lg leading-relaxed max-w-xl font-normal">
                  Currently in my 6th semester. I bridge the gap between technical system architecture and human-centered design, ensuring that my interfaces are not only beautiful but also technically feasible and business-aligned.
                </p>
              </div>
              <div className="flex sm:justify-end text-sm font-bold tracking-widest text-accent uppercase">
                <span>Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Expertise</h3>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6 border-t border-foreground/10 pt-6">
              <h4 className="text-xl font-semibold">UI Design</h4>
              <p className="text-foreground/70 text-base leading-relaxed font-normal">
                Crafting pixel-perfect, responsive layouts with a strong emphasis on typography, visual hierarchy, and modern aesthetics.
              </p>
              <ul className="flex flex-col gap-2 text-foreground/90 font-medium text-base mt-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Wireframing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Prototyping</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Visual Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Responsive Design</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 border-t border-foreground/10 pt-6">
              <h4 className="text-xl font-semibold">UX Methods</h4>
              <p className="text-foreground/70 text-base leading-relaxed font-normal">
                Rooting every design decision in empathy and data, ensuring the final product solves real user problems effectively.
              </p>
              <ul className="flex flex-col gap-2 text-foreground/90 font-medium text-base mt-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> User Research</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> User Persona</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Journey Mapping</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Human-Centered Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Software & Tools</h3>
          <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-8 font-sans text-xl md:text-2xl text-foreground/80 border-t border-foreground/10 pt-6">
            <div className="flex items-center gap-3 hover:text-accent transition-colors cursor-default group">
              <i className="devicon-figma-plain text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">Figma</span>
            </div>
            <div className="flex items-center gap-3 hover:text-accent transition-colors cursor-default group">
              <i className="devicon-photoshop-plain text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">Photoshop</span>
            </div>
            <div className="flex items-center gap-3 hover:text-accent transition-colors cursor-default group">
              <i className="devicon-illustrator-plain text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">Illustrator</span>
            </div>
            <div className="flex items-center gap-3 hover:text-accent transition-colors cursor-default group">
              <i className="devicon-canva-original text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">Canva</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 reveal">
          <h3 className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-accent mt-2">Certifications</h3>
          <div className="md:col-span-8 flex flex-col gap-6 font-medium border-t border-foreground/10 pt-6">
            {[
              { title: "Complete UI Design Figma Holiday App Project", issuer: "Udemy", year: "2024" },
              { title: "UI/UX Design Fundamentals", issuer: "Institution", year: "2023" },
              { title: "Fundamental Front End Web", issuer: "Dicoding", year: "2023" },
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
              href="mailto:zakiaazharrifakn@gmail.com"
              className="font-serif italic text-4xl sm:text-5xl md:text-7xl hover:text-accent transition-colors block pb-4 relative group break-all"
            >
              zakiaazharrifakn@gmail.com
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </a>
          </div>

          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-foreground text-background/50 py-8 text-center text-sm border-t border-background/10 font-medium">
        © {new Date().getFullYear()} Zakia Azharrifa Kn. All rights reserved.
      </footer>
    </main>
  );
}
