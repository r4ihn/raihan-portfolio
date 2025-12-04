"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] font-sans">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(128, 0, 32, 0.15), transparent 40%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(128,0,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,0,32,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-maroon/20 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-[#800020]">Portfolio</div>
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="text-zinc-300 transition-colors hover:text-[#800020]">
              About
            </a>
            <a href="#projects" className="text-zinc-300 transition-colors hover:text-[#800020]">
              Projects
            </a>
            <a href="#skills" className="text-zinc-300 transition-colors hover:text-[#800020]">
              Skills
            </a>
            <a href="#contact" className="text-zinc-300 transition-colors hover:text-[#800020]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div
            className={`max-w-5xl text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6 inline-block rounded-full border border-[#800020]/30 bg-[#800020]/10 px-4 py-2 text-sm text-[#800020] backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#800020]"></span>
              Available for opportunities
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-[#800020] via-[#a00028] to-[#800020] bg-clip-text text-6xl font-bold leading-tight text-transparent md:text-8xl">
              Hi, I&apos;m Raihan
            </h1>
            <p className="mb-4 text-2xl font-light text-zinc-300 md:text-3xl">
              Embedded Systems & Electronics Engineer
            </p>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400">
              Designing and developing embedded systems, creating custom PCBs, and bringing hardware
              projects to life. Bridging the gap between software and hardware with precision and
              innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#800020] to-[#a00028] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(128,0,32,0.5)]"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a00028] to-[#800020] opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-[#800020]/50 bg-black/30 px-8 py-4 font-semibold text-[#800020] backdrop-blur-sm transition-all hover:border-[#800020] hover:bg-[#800020]/10"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-5xl font-bold text-[#800020]">About Me</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-2xl border border-[#800020]/20 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-[#800020]/40 hover:shadow-[0_0_40px_rgba(128,0,32,0.2)]">
                <h3 className="mb-4 text-2xl font-semibold text-white">Who I Am</h3>
                <p className="leading-relaxed text-zinc-300">
                  A passionate embedded systems engineer and electronics enthusiast with expertise in
                  C and Python programming. I specialize in designing custom PCBs, developing
                  embedded firmware, and bringing hardware projects from concept to reality.
                </p>
              </div>
              <div className="rounded-2xl border border-[#800020]/20 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-[#800020]/40 hover:shadow-[0_0_40px_rgba(128,0,32,0.2)]">
                <h3 className="mb-4 text-2xl font-semibold text-white">What I Do</h3>
                <p className="leading-relaxed text-zinc-300">
                  I design and develop embedded systems, create custom printed circuit boards, and
                  handle electronics prototyping. From soldering components to writing low-level
                  firmware, I work across the entire hardware development lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-5xl font-bold text-[#800020]">Skills</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "C Programming",
                "Python",
                "Embedded Systems",
                "PCB Design",
                "Soldering",
                "Electronics Design",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden rounded-xl border border-[#800020]/20 bg-gradient-to-br from-black/60 to-black/40 p-6 backdrop-blur-sm transition-all hover:border-[#800020]/50 hover:shadow-[0_0_30px_rgba(128,0,32,0.3)]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative z-10">
                    <h3 className="mb-2 text-xl font-semibold text-white">{skill}</h3>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-black/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#800020] to-[#a00028] transition-all duration-1000 group-hover:w-full"
                        style={{ width: `${75 + Math.random() * 20}%` }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/0 to-[#800020]/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-32 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-5xl font-bold text-[#800020]">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group relative overflow-hidden rounded-2xl border border-[#800020]/20 bg-black/40 backdrop-blur-sm transition-all hover:border-[#800020]/50 hover:shadow-[0_0_40px_rgba(128,0,32,0.3)]"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#800020]/20 to-[#a00028]/20"></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-white">Project {project}</h3>
                    <p className="mb-4 text-zinc-400">
                      An embedded systems project featuring custom PCB design and firmware
                      development.
                    </p>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-[#800020]/20 px-3 py-1 text-xs text-[#800020]">
                        C
                      </span>
                      <span className="rounded-full bg-[#800020]/20 px-3 py-1 text-xs text-[#800020]">
                        Embedded
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32 px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-5xl font-bold text-[#800020]">Get In Touch</h2>
            <p className="mb-12 text-lg text-zinc-300">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:your.email@example.com"
                className="group flex items-center gap-3 rounded-lg border border-[#800020]/50 bg-black/30 px-6 py-3 text-[#800020] backdrop-blur-sm transition-all hover:border-[#800020] hover:bg-[#800020]/10"
              >
                <span>Email</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-[#800020]/50 bg-black/30 px-6 py-3 text-[#800020] backdrop-blur-sm transition-all hover:border-[#800020] hover:bg-[#800020]/10"
              >
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-[#800020]/50 bg-black/30 px-6 py-3 text-[#800020] backdrop-blur-sm transition-all hover:border-[#800020] hover:bg-[#800020]/10"
              >
                <span>LinkedIn</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#800020]/20 py-8 text-center text-zinc-400">
          <p>© {new Date().getFullYear()} Raihan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
