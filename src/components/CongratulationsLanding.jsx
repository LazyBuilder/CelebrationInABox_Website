import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Briefcase, Home, GraduationCap, Baby, Award, Compass, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SITE_CONFIG } from '../config';
import { CONGRATULATIONS_BOXES as BOXES, getImagePath } from '../data/congratulationsBoxes';

const boxPath = (id) =>
  SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/congratulations/${id}/` : `/congratulations/${id}/`;

const backToGateway = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/` : '/';

const cn = (...inputs) => twMerge(clsx(inputs));

const CATEGORIES = [
  { slug: 'all', label: 'All Celebrations', icon: <Trophy className="h-4 w-4" /> },
  { slug: 'career', label: 'Promotion & Career', icon: <Briefcase className="h-4 w-4" /> },
  { slug: 'home', label: 'New Home & Hearth', icon: <Home className="h-4 w-4" /> },
  { slug: 'academic', label: 'Graduation & Honors', icon: <GraduationCap className="h-4 w-4" /> },
  { slug: 'baby', label: 'New Baby & Arrival', icon: <Baby className="h-4 w-4" /> },
  { slug: 'win', label: 'Big Life Wins', icon: <Award className="h-4 w-4" /> },
  { slug: 'legacy', label: 'Retirement & Horizon', icon: <Compass className="h-4 w-4" /> },
];

export default function CongratulationsLanding() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return BOXES;
    return BOXES.filter((b) => b.categorySlug === activeCategory);
  }, [activeCategory]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-slate-100 bg-[#060B18]"
      style={{
        background: 'linear-gradient(135deg, #060B18 0%, #0A142F 45%, #0B1E3F 100%)',
      }}
    >
      {/* Background Neon Grid & Electric Glow Blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
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

      {/* Top Navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-4">
        <a
          href={backToGateway}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-slate-800"
        >
          ← Return to Studio
        </a>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400">
            Live Across GTA & Hamilton
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-14">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 fill-current text-cyan-400" />
              The Victory Studio
            </div>

            <h1 className="mt-6 text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
              Honor The Win.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,210,255,0.35)]">
                Mark The Milestone.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-300 md:text-xl">
              Because extraordinary achievements deserve far more than a text message.
              Turn promotions, housewarmings, graduations, and life victories into high-voltage sensory unboxings.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                <Trophy className="h-4 w-4" />
                Turnkey Victory Kits
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 font-light">
                Every kit arrives loaded with celebratory hardware, heirloom plaques, custom barware, and zero assembly needed. Ready to pop and toast immediately.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bold Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-inner">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Heirloom Hardware
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400 font-light">
                Laser-engraved brass medals, titanium desk plaques, and faceted crystal tumblers built to last decades.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-inner">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                The Celebration Ritual
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400 font-light">
                High-velocity champagne spouts, metallic gold streamer cannons, and artisanal toasts for epic energy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-inner">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                White-Glove GTA Delivery
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400 font-light">
                Discreetly packed and coordinated straight to the home or office with a scheduled delivery window.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Occasion Matrix Selector Bar */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl border border-cyan-500/25 bg-slate-900/80 p-5 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">
              Select Celebration Type:
            </span>
            <span className="text-xs text-slate-400">
              Showing {filtered.length} of {BOXES.length} milestone kits
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300',
                  activeCategory === cat.slug
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,210,255,0.5)] scale-105'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60'
                )}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Victory Boxes Grid */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((box, index) => (
              <motion.article
                key={box.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-slate-900/75 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,210,255,0.25)]"
              >
                {/* Visual Showcase */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-cyan-500/20">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-950/80 border border-cyan-400/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-sm">
                      {box.category}
                    </span>
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md">
                      ${box.price} CAD
                    </span>
                  </div>

                  {/* Hardware Highlight chip on bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-slate-700 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-emerald-400" />
                      {box.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-cyan-300">
                    {box.name}
                  </h3>

                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-cyan-400/90">
                    "{box.tagline}"
                  </p>

                  <p className="mt-3 text-xs leading-relaxed font-light text-slate-300 line-clamp-3">
                    {box.description}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-slate-400">
                      Inside The Victory Kit:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {box.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                      {box.includes.length > 3 && (
                        <li className="text-[11px] font-semibold text-emerald-400 italic pl-5.5">
                          + {box.includes.length - 3} more victory artifacts
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-4">
                    <a
                      href={boxPath(box.id)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02]"
                    >
                      Explore Victory Kit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Footer Quote Banner */}
      <footer className="relative z-10 border-t border-cyan-500/20 bg-slate-950/80 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Trophy className="mx-auto h-7 w-7 text-amber-400 mb-4" />
          <blockquote className="text-xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-snug">
            "We didn't just sign the deal; we blew the roof off the living room with gold streamers and champagne."
          </blockquote>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] font-semibold text-cyan-400">
            Kareem & Partners • Seed Round Close • Toronto
          </p>
        </div>
      </footer>
    </div>
  );
}
