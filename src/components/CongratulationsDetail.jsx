import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Gift, Zap, Award } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { getCongratulationsBox } from '../data/congratulationsBoxes';

const BACK_HREF = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/congratulations/` : '/congratulations/';

export default function CongratulationsDetail({ slug }) {
  const box = getCongratulationsBox(slug);

  if (!box) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060B18] text-white">
        <div className="text-center p-8">
          <h1 className="text-3xl font-black uppercase">Victory Kit Not Found</h1>
          <p className="mt-2 text-sm text-slate-400">The requested celebration experience could not be located.</p>
          <a
            href={BACK_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-xs uppercase font-bold tracking-widest text-slate-950 shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Victory Studio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-slate-100 bg-[#060B18]"
      style={{
        background: 'linear-gradient(135deg, #060B18 0%, #0A142F 45%, #0B1E3F 100%)',
      }}
    >
      {/* Background Neon Grid & Glow Blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 15%, rgba(0, 210, 255, 0.3) 0%, transparent 45%), radial-gradient(circle at 80% 75%, rgba(16, 185, 129, 0.25) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full blur-[120px] opacity-25 bg-cyan-500"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-10 h-[36rem] w-[36rem] rounded-full blur-[140px] opacity-20 bg-emerald-500"
      />

      {/* Navigation */}
      <nav className="relative z-20 mx-auto max-w-7xl px-6 pt-8 pb-4">
        <a
          href={BACK_HREF}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-slate-800"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Victory Studio
        </a>
      </nav>

      {/* Hero Showcase */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-6 pb-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Main Hero Image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,210,255,0.2)]"
            >
              <img
                src={box.image}
                alt={box.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-950/90 border border-cyan-400/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-md backdrop-blur-md">
                  {box.category}
                </span>
                <span className="rounded-full bg-slate-950/90 border border-white/20 px-4 py-1.5 text-sm font-black text-amber-300 shadow-md backdrop-blur-md">
                  ${box.price} CAD
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 border border-slate-700 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  {box.highlight}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Title & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 w-fit backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 fill-current text-cyan-400" />
              The Milestone Celebration
            </div>

            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl text-white">
              {box.name}
            </h1>

            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-cyan-400">
              "{box.tagline}"
            </p>

            <p className="mt-4 text-sm font-light leading-relaxed text-slate-300 md:text-base">
              {box.description}
            </p>

            {/* Quick Specs */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">Celebration Type</span>
                <p className="mt-1 text-sm font-bold text-white capitalize">
                  {box.category}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Signature Item</span>
                <p className="mt-1 text-xs font-semibold text-white truncate">
                  {box.highlight}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:hello@celebrationinabox.com"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full py-4 px-8 text-xs font-black uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-[1.02]"
              >
                Inquire For Delivery
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">
                Scheduled GTA Coordination
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3-Chapter Dream Celebration Journey */}
      {box.dreamExperience && (
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] font-bold text-cyan-300 backdrop-blur-md">
              <Award className="h-3.5 w-3.5" />
              The Victory Unfolding
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl text-white">
              {box.dreamExperience.headline}
            </h2>
            <p className="mt-3 text-base font-light text-slate-300">
              {box.dreamExperience.tagline}
            </p>
          </div>

          {/* 3-Chapter Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {box.dreamExperience.chapters.map((chapter, idx) => (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-cyan-500/25 bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]"
              >
                {/* Visual Scene Header */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-cyan-500/20">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Phase & Time */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-950/85 border border-cyan-400/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      {chapter.phase}
                    </span>
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                      {chapter.time}
                    </span>
                  </div>

                  {/* Scene Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-300 drop-shadow">
                      {chapter.tag}
                    </span>
                  </div>
                </div>

                {/* Narrative Body */}
                <div className="flex-1 flex flex-col p-7">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-cyan-300">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-slate-300">
                    {chapter.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Artifacts & Delivery */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Inside the Kit */}
          <div className="rounded-[2.5rem] border border-cyan-500/20 bg-slate-900/70 p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                Inside The Victory Kit
              </h2>
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-300 mb-6">
              Each component is hand-selected and crafted for maximum milestone impact:
            </p>
            <ul className="space-y-4">
              {box.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery & Coordination */}
          <div className="rounded-[2.5rem] border border-cyan-500/20 bg-slate-900/70 p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                Turnkey Coordination
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Direct to Home or Office
                </span>
                <p className="mt-1 text-xs text-slate-300">
                  Coordinated for exact delivery windows across Toronto, Mississauga, Oakville, Burlington, and Hamilton. Arrives ready to reveal.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Zero Prep Required
                </span>
                <p className="mt-1 text-xs text-slate-300">
                  No assembling boxes or running to party stores. Hardware, barware, and celebratory props are ready the moment the seal is broken.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="mailto:hello@celebrationinabox.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-black uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                Inquire For Your Celebration Date
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Banner */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-cyan-500/20 bg-slate-900/80 p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyan-400">
              The Victory Studio
            </span>
            <h3 className="text-2xl font-black uppercase mt-1 text-white">
              Looking for Another Milestone?
            </h3>
            <p className="text-sm mt-1 font-light text-slate-300">
              Explore our full collection of 6 high-impact celebration kits.
            </p>
          </div>
          <a
            href={BACK_HREF}
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-800 px-6 py-3 text-xs font-black uppercase tracking-wider text-cyan-300 shadow-sm transition-all hover:bg-cyan-400 hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            View All 6 Celebration Kits
          </a>
        </div>
      </section>
    </div>
  );
}
