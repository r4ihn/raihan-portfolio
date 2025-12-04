"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="relative min-h-screen overflow-hidden bg-black font-sans">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none fixed inset-0 opacity-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 50%)`,
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="text-2xl font-bold tracking-tight text-white">Raihan</div>
          <div className="hidden gap-10 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-8 pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left Column - Text Content */}
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                  Available for opportunities
                </div>
                <h1 className="mb-8 text-7xl font-bold leading-[1.1] tracking-tight text-white md:text-9xl">
                  Hi, I&apos;m Raihan
                </h1>
                <p className="mb-6 text-3xl font-light leading-relaxed text-zinc-200 md:text-4xl">
                  Embedded Systems & Electronics Engineer
                </p>
                <p className="mb-16 text-xl leading-relaxed text-zinc-400">
                  Designing and developing embedded systems, creating custom PCBs, and bringing
                  hardware projects to life. Bridging the gap between software and hardware with
                  precision and innovation.
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="#projects"
                    className="group relative overflow-hidden rounded-lg bg-white px-10 py-4 text-base font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20"
                  >
                    <span className="relative z-10">View My Work</span>
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg border border-white/30 bg-black/50 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* Right Column - Photo Placeholder */}
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-24 w-24 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-4 text-sm text-white/40">Photo Placeholder</p>
                    </div>
                  </div>
                  {/* Uncomment and replace with your image when ready:
                  <Image
                    src="/your-photo.jpg"
                    alt="Raihan"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-40 px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-6xl font-bold tracking-tight text-white">About Me</h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Passionate about creating innovative solutions at the intersection of software and
                hardware
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Photo Placeholder */}
              <div className="relative lg:col-span-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-24 w-24 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-4 text-sm text-white/40">About Photo</p>
                    </div>
                  </div>
                  {/* Uncomment and replace with your image when ready:
                  <Image
                    src="/about-photo.jpg"
                    alt="About Raihan"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Content Cards */}
              <div className="space-y-8 lg:col-span-2">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">Who I Am</h3>
                  <p className="leading-relaxed text-zinc-300">
                    A passionate embedded systems engineer and electronics enthusiast with expertise
                    in C and Python programming. I specialize in designing custom PCBs, developing
                    embedded firmware, and bringing hardware projects from concept to reality.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">What I Do</h3>
                  <p className="leading-relaxed text-zinc-300">
                    I design and develop embedded systems, create custom printed circuit boards, and
                    handle electronics prototyping. From soldering components to writing low-level
                    firmware, I work across the entire hardware development lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-40 px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-6xl font-bold tracking-tight text-white">
                Technical Skills
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
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
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-white/10"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="relative z-10">
                    <h3 className="mb-4 text-xl font-semibold text-white">{skill}</h3>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000 group-hover:w-full"
                        style={{ width: `${80 + index * 3}%` }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-40 px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-6xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Showcasing my work in embedded systems, software development, and electronics
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* C Project */}
              <a
                href="https://github.com/winthrop1/INF1002-P5-7-C-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-16 w-16 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-xs text-white/40">Project Photo</p>
                    </div>
                  </div>
                  {/* Uncomment and replace with your image when ready:
                  <Image
                    src="/c-project.jpg"
                    alt="Course Management System"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  */}
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-white">
                      Course Management System (C)
                    </h3>
                    <svg
                      className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className="mb-6 leading-relaxed text-zinc-300">
                    A comprehensive C-based Course Management System featuring binary search
                    optimization, bulk import with pre-allocation, multi-level undo functionality,
                    and robust security enhancements. Includes memory leak prevention, buffer
                    overflow protection, and comprehensive error handling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      C
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Data Structures
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Memory Management
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Security
                    </span>
                  </div>
                </div>
              </a>

              {/* Python Project */}
              <a
                href="https://github.com/winthrop1/INF1002-P5-7-Python-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-16 w-16 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-xs text-white/40">Project Photo</p>
                    </div>
                  </div>
                  {/* Uncomment and replace with your image when ready:
                  <Image
                    src="/python-project.jpg"
                    alt="Phishing Email Detection System"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  */}
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-white">
                      Phishing Email Detection System
                    </h3>
                    <svg
                      className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className="mb-6 leading-relaxed text-zinc-300">
                    An advanced Python system designed to analyze email content using multi-layered
                    detection algorithms. Features keyword analysis, domain verification, URL risk
                    assessment, and sophisticated pattern matching to identify potential phishing
                    threats with high accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Python
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Security
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Machine Learning
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                      Pattern Recognition
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-40 px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-6xl font-bold tracking-tight text-white">Get In Touch</h2>
            <p className="mb-16 text-xl leading-relaxed text-zinc-400">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="mailto:your.email@example.com"
                className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://github.com/winthrop1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Raihan. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
