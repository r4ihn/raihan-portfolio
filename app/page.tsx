"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="border-b-4 border-white bg-black px-4 py-3 shadow-[0_4px_0_0_#ffffff]">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 bg-white" />
            <span className="text-sm uppercase tracking-[0.25em]">RAIHAN.EXE</span>
          </div>
          <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-8 md:flex-row">
        {/* Left column: main content windows */}
        <div className="flex-1 space-y-8">
          {/* Hero window */}
          <section className="pixel-card p-4">
            <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
              <span className="text-xs uppercase tracking-[0.25em]">/home/portfolio</span>
              <span className="text-xs">[ ONLINE ]</span>
            </div>
            <div className="grid gap-6 md:grid-cols-[1.4fr_minmax(0,1fr)]">
              <div>
                <h1 className="mb-3 text-3xl uppercase leading-tight tracking-[0.25em] md:text-4xl">
                  Raihan
                </h1>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-200">
                  Embedded Systems & Electronics Engineer
                </p>
                <p className="mb-4 text-xs leading-relaxed text-gray-200">
                  Skilled in C, Python, embedded systems, PCB design, soldering, and electronics
                  design. Building things that blink, beep, and actually work.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a href="#projects" className="pixel-button px-4 py-2">
                    View Projects
                  </a>
                  <a href="#contact" className="pixel-button px-4 py-2">
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Photo placeholder */}
              <div className="flex items-center justify-center">
                <div className="flex h-36 w-full max-w-[180px] items-center justify-center border-4 border-white bg-black text-center text-[10px] leading-snug shadow-[4px_4px_0_0_#ffffff]">
                  <span>
                    PHOTO
                    <br />
                    PLACEHOLDER
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* About window */}
          <section id="about" className="pixel-card p-4">
            <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
              <span className="text-xs uppercase tracking-[0.25em]">/about_me.txt</span>
              <span className="text-xs">[ INFO ]</span>
            </div>
            <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div className="space-y-2 text-xs leading-relaxed text-gray-200">
                <p>
                  I&apos;m an embedded systems and electronics engineer who loves working close to
                  the hardware. From low-level C firmware to PCB layout and soldering, I enjoy
                  building complete systems end-to-end.
                </p>
                <p>
                  I work with microcontrollers, sensors, and communication interfaces, turning ideas
                  into reliable, testable hardware. I care about clean design, clear schematics, and
                  code that future-me won&apos;t hate.
                </p>
              </div>
              {/* About photo placeholder */}
              <div className="flex items-center justify-center">
                <div className="flex h-32 w-full max-w-[150px] items-center justify-center border-4 border-white bg-black text-center text-[9px] leading-snug shadow-[4px_4px_0_0_#ffffff]">
                  <span>
                    ABOUT
                    <br />
                    PHOTO
                    <br />
                    PLACEHOLDER
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects window */}
          <section id="projects" className="pixel-card p-4">
            <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
              <span className="text-xs uppercase tracking-[0.25em]">/projects/</span>
              <span className="text-xs">[ 2 ITEMS ]</span>
            </div>
            <div className="space-y-4">
              {/* C Project */}
              <a
                href="https://github.com/winthrop1/INF1002-P5-7-C-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-4 border-white bg-black p-3 text-xs shadow-[4px_4px_0_0_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#ffffff]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="uppercase tracking-[0.2em]">
                    Course Management System (C)
                  </span>
                  <span>[GitHub]</span>
                </div>
                <div className="mb-2 flex flex-col gap-2 md:flex-row">
                  <div className="flex-1 text-[11px] leading-relaxed text-gray-200">
                    A C-based course management system with binary search lookups, bulk import,
                    multi-level undo, and strong memory-safety and security practices.
                  </div>
                  {/* Project image placeholder */}
                  <div className="flex items-center justify-center md:w-28">
                    <div className="flex h-16 w-24 items-center justify-center border-4 border-white bg-black text-[8px] leading-snug">
                      PROJECT
                      <br />
                      IMAGE
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 text-[9px]">
                  <span className="border border-white px-2 py-0.5">C</span>
                  <span className="border border-white px-2 py-0.5">Data Structures</span>
                  <span className="border border-white px-2 py-0.5">Memory</span>
                  <span className="border border-white px-2 py-0.5">Security</span>
                </div>
              </a>

              {/* Python Project */}
              <a
                href="https://github.com/winthrop1/INF1002-P5-7-Python-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-4 border-white bg-black p-3 text-xs shadow-[4px_4px_0_0_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#ffffff]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="uppercase tracking-[0.2em]">
                    Phishing Email Detection (Python)
                  </span>
                  <span>[GitHub]</span>
                </div>
                <div className="mb-2 flex flex-col gap-2 md:flex-row">
                  <div className="flex-1 text-[11px] leading-relaxed text-gray-200">
                    A Python-based system that analyzes email content using layered checks like
                    keyword analysis, domain verification, and URL risk scoring to detect phishing
                    attempts.
                  </div>
                  {/* Project image placeholder */}
                  <div className="flex items-center justify-center md:w-28">
                    <div className="flex h-16 w-24 items-center justify-center border-4 border-white bg-black text-[8px] leading-snug">
                      PROJECT
                      <br />
                      IMAGE
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 text-[9px]">
                  <span className="border border-white px-2 py-0.5">Python</span>
                  <span className="border border-white px-2 py-0.5">Security</span>
                  <span className="border border-white px-2 py-0.5">Detection</span>
                  <span className="border border-white px-2 py-0.5">Automation</span>
                </div>
              </a>
            </div>
          </section>

          {/* Skills window */}
          <section id="skills" className="pixel-card p-4">
            <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
              <span className="text-xs uppercase tracking-[0.25em]">/skills.cfg</span>
              <span className="text-xs">[ LOADED ]</span>
            </div>
            <div className="grid gap-2 text-xs md:grid-cols-2">
              {[
                "C Programming",
                "Python",
                "Embedded Systems",
                "PCB Design",
                "Soldering",
                "Electronics Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between border-2 border-white bg-black px-2 py-1"
                >
                  <span>{skill}</span>
                  <span className="text-[9px]">★★★</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact window */}
          <section id="contact" className="pixel-card p-4">
            <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
              <span className="text-xs uppercase tracking-[0.25em]">/contact.me</span>
              <span className="text-xs">[ READY ]</span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-gray-200">
              Want to collaborate on a project or talk about embedded systems and electronics?
              Reach out using any of the links below.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a href="mailto:your.email@example.com" className="pixel-button px-4 py-2">
                Email
              </a>
              <a
                href="https://github.com/winthrop1"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button px-4 py-2"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button px-4 py-2"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        {/* Right column: small info panel, like retro sidebar */}
        <aside className="mt-8 flex w-full flex-col gap-4 md:mt-0 md:w-64">
          <div className="pixel-card p-3 text-[10px] leading-relaxed text-gray-200">
            <div className="mb-2 border-b-4 border-white pb-1 text-xs uppercase tracking-[0.25em]">
              Status
            </div>
            <p>[ LOCATION ] Singapore (GMT+8)</p>
            <p>[ FOCUS ] Embedded systems, PCBs, electronics</p>
            <p>[ MODE ] Always learning</p>
          </div>
          <div className="pixel-card p-3 text-[10px] leading-relaxed text-gray-200">
            <div className="mb-2 border-b-4 border-white pb-1 text-xs uppercase tracking-[0.25em]">
              Tech Stack
            </div>
            <p>&gt; C / Python</p>
            <p>&gt; Microcontrollers &amp; Sensors</p>
            <p>&gt; PCB Layout &amp; Soldering</p>
          </div>
        </aside>
      </main>

      <footer className="border-t-4 border-white px-4 py-3 text-center text-[10px] text-gray-300">
        © {new Date().getFullYear()} Raihan. All rights reserved.
      </footer>
    </div>
  );
}
