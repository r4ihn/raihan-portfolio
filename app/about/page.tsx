"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="border-b-4 border-white bg-black px-4 py-3 shadow-[0_4px_0_0_#ffffff]">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 bg-white" />
            <span className="text-sm uppercase tracking-[0.25em]">ABOUT_RAIHAN.EXE</span>
          </div>
          <nav className="hidden gap-4 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="/" className="hover:underline">
              Home
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8">
        {/* Main about window */}
        <section className="pixel-card p-4">
          <div className="mb-3 flex items-center justify-between border-b-4 border-white pb-2">
            <span className="text-xs uppercase tracking-[0.25em]">/about/me.txt</span>
            <span className="text-xs">[ OPEN ]</span>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Text */}
            <div className="space-y-3 text-xs leading-relaxed text-gray-200">
              <p>
                Hello, I&apos;m Raihan — an embedded systems and electronics engineer who enjoys
                working close to the hardware. I like writing low-level C and Python, designing PCBs,
                and putting everything together on the bench with a soldering iron.
              </p>
              <p>
                I build things like microcontroller-based systems, sensor interfaces, and small tools
                that solve real problems. I&apos;m comfortable going from an idea, to schematic, to
                PCB layout, to firmware, and finally to a working prototype.
              </p>
              <p>
                When I&apos;m not debugging, I&apos;m usually experimenting with new electronics
                projects, learning more about embedded architectures, or improving my workflow so I
                can build faster and better.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-40 w-full max-w-[180px] items-center justify-center border-4 border-white bg-black text-center text-[10px] leading-snug shadow-[4px_4px_0_0_#ffffff]">
                <span>
                  ABOUT PAGE
                  <br />
                  PHOTO
                  <br />
                  PLACEHOLDER
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts window */}
        <section className="pixel-card p-4 text-xs text-gray-200">
          <div className="mb-3 border-b-4 border-white pb-2 text-xs uppercase tracking-[0.25em]">
            /facts.dat
          </div>
          <ul className="space-y-1">
            <li>&gt; Skilled in C, Python, embedded systems, PCB design, soldering, electronics</li>
            <li>&gt; Enjoys turning schematics into real, working boards</li>
            <li>&gt; Likes clean layouts, simple tools, and reliable hardware</li>
          </ul>
        </section>
      </main>

      <footer className="border-t-4 border-white px-4 py-3 text-center text-[10px] text-gray-300">
        © {new Date().getFullYear()} Raihan. All rights reserved.
      </footer>
    </div>
  );
}


