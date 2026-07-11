// src/components/hero/HeroSection.jsx
function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 lg:py-24">
        {/* Left: text */}
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Welcome to Api Technologies
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Empowering Businesses With{' '}
            <span className="text-blue-400">Intelligent Digital Solutions</span>
          </h1>

          <p className="text-sm text-slate-200 sm:text-base">
            Api Technologies delivers scalable, secure, and high‑performance software, web, mobile, and cloud‑ready solutions that accelerate innovation and drive sustainable business growth.
          </p>

          <p className="text-sm text-slate-300 sm:text-base">
            Partner with an engineering‑first team that aligns technology with your long‑term strategy using modern frameworks, agile delivery, and data‑driven decision making.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-blue-400 hover:text-blue-300"
            >
              View Services
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-300 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Custom software & product engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Web, mobile & cloud‑ready solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Data‑driven digital transformation</span>
            </div>
          </div>
        </div>

        {/* Right: visual placeholder */}
        <div className="w-full max-w-md md:max-w-sm lg:max-w-md">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-5 shadow-2xl shadow-blue-900/50">
            <div className="space-y-3 text-sm text-slate-50">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">
                Digital Transformation Snapshot
              </p>
              <p className="text-sm">
                Streamline operations, elevate user experiences, and unlock new revenue opportunities with tailor‑made digital platforms.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-[10px] text-blue-100/80">Delivery</p>
                  <p className="text-base font-semibold">Agile</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-[10px] text-blue-100/80">Security</p>
                  <p className="text-base font-semibold">Enterprise</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-[10px] text-blue-100/80">Scalability</p>
                  <p className="text-base font-semibold">Cloud‑ready</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
