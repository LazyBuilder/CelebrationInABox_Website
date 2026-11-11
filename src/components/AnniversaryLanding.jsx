import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Moon, Wine, Clock, ArrowRight, CheckCircle2, Bookmark, Star } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SITE_CONFIG } from '../config';
import { ANNIVERSARY_BOXES as BOXES, getImagePath } from '../data/anniversaryBoxes';

const boxPath = (id) =>
  SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/anniversary/${id}/` : `/anniversary/${id}/`;

const backToGateway = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/` : '/';

const cn = (...inputs) => twMerge(clsx(inputs));

const PALETTE = {
  noir: '#140509',
  burgundy: '#2D0A16',
  wine: '#4A1525',
  rose: '#C97A7E',
  softRose: '#E8B4B8',
  blush: '#FAF0F2',
  champagne: '#F5E6D3',
  gold: '#D4AF37',
  cardBg: 'rgba(255, 255, 255, 0.82)',
  cardBorder: '#E8D0D5',
};

const MILESTONES = [
  { value: 'all', label: 'All Milestones' },
  { value: '1st to 5th', label: 'First Years (1–5)' },
  { value: '10th', label: 'Decade Landmark (10+)' },
  { value: 'Any', label: 'Timeless / Any Year' },
];

const RITUALS = [
  { value: 'all', label: 'All Atmospheres', icon: <Sparkles className="h-3.5 w-3.5" /> },
  { value: 'velvet-lounge', label: 'Velvet & Champagne', icon: <Wine className="h-3.5 w-3.5" /> },
  { value: 'candlelit-dining', label: 'Candlelit Dining', icon: <Heart className="h-3.5 w-3.5" /> },
  { value: 'open-air', label: 'Under the Stars', icon: <Moon className="h-3.5 w-3.5" /> },
  { value: 'slow-morning', label: 'Slow Morning', icon: <Clock className="h-3.5 w-3.5" /> },
  { value: 'sentimental-vault', label: 'Heirloom Vault', icon: <Bookmark className="h-3.5 w-3.5" /> },
];

export default function AnniversaryLanding() {
  const [selectedMilestone, setSelectedMilestone] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');

  const filtered = useMemo(() => {
    return BOXES.filter((box) => {
      const matchMilestone =
        selectedMilestone === 'all' ||
        (selectedMilestone === '1st to 5th' && (box.milestone.includes('1st') || box.milestone.includes('5th'))) ||
        (selectedMilestone === '10th' && (box.milestone.includes('10th') || box.milestone.includes('Decade'))) ||
        (selectedMilestone === 'Any' && (box.milestone.includes('Any') || box.milestone.includes('Timeless') || box.milestone.includes('Milestone Landmark')));

      const matchMood = selectedMood === 'all' || box.mood === selectedMood;

      return matchMilestone && matchMood;
    });
  }, [selectedMilestone, selectedMood]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-[#2D0A16]"
      style={{
        background: 'linear-gradient(145deg, #FAF0F2 0%, #F5E5E9 40%, #EBD0D7 100%)',
      }}
    >
      {/* Background romantic grain and ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(201, 122, 126, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(74, 21, 37, 0.2) 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(212, 175, 55, 0.03) 0 2px, transparent 2px 16px)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, #C97A7E, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle, #4A1525, transparent 70%)' }}
      />

      {/* Top Navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-4">
        <a
          href={backToGateway}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] transition-all hover:bg-white/80"
          style={{ borderColor: PALETTE.cardBorder, color: PALETTE.burgundy, background: 'rgba(255,255,255,0.5)' }}
        >
          ← Return to Studio
        </a>
        <span
          className="font-serif italic text-sm tracking-widest"
          style={{ color: PALETTE.rose }}
        >
          Rituals for Two • Curated Love Stories
        </span>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] backdrop-blur-md"
              style={{
                borderColor: PALETTE.cardBorder,
                background: 'rgba(255, 255, 255, 0.65)',
                color: PALETTE.wine,
              }}
            >
              <Heart className="h-3 w-3 fill-current text-rose-500" />
              The Anniversary Collection
            </div>

            <h1
              className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
              style={{ color: PALETTE.noir }}
            >
              Moments That
              <br />
              <span className="italic font-light text-rose-800 drop-shadow-sm">
                Become Forever.
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed font-light md:text-xl"
              style={{ color: PALETTE.wine }}
            >
              Step away from the crowded dining rooms. Reclaim the quiet romance of your story
              with sensory evening rituals, vintage crystal pours, and keepsakes designed to be unlocked for decades to come.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div
              className="rounded-3xl border p-6 backdrop-blur-xl shadow-sm"
              style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.7)' }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rose-700">
                The Anniversary Guarantee
              </span>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: PALETTE.burgundy }}>
                Delivered across GTA & Hamilton in our discreet satin-tied keepsake boxes with zero assembly required. Just light the tapers and press play.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Ritual Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            className="flex items-start gap-4 rounded-2xl border p-5 backdrop-blur-md"
            style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.5)' }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-900 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold" style={{ color: PALETTE.noir }}>
                Atmosphere, Solved
              </h3>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: PALETTE.wine }}>
                Hand-dipped taper candles, botanical room mists, and curated playlists that set an instant romantic tone.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 rounded-2xl border p-5 backdrop-blur-md"
            style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.5)' }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-900 shadow-sm">
              <Wine className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold" style={{ color: PALETTE.noir }}>
                The Toast Ritual
              </h3>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: PALETTE.wine }}>
                Handblown crystal flutes and 24k gold-rimmed goblets paired with guided tasting notes for a celebratory pour.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 rounded-2xl border p-5 backdrop-blur-md"
            style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.5)' }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-900 shadow-sm">
              <Bookmark className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold" style={{ color: PALETTE.noir }}>
                The Keepsake Capsule
              </h3>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: PALETTE.wine }}>
                Wax-sealed vow paper, audio voice recording capsules, and heirloom journals that become family treasures.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Filter and Selection Bar */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-8">
        <div
          className="rounded-3xl border p-6 backdrop-blur-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.75)' }}
        >
          {/* Milestone Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] mr-2" style={{ color: PALETTE.rose }}>
              Milestone:
            </span>
            {MILESTONES.map((m) => (
              <button
                key={m.value}
                onClick={() => setSelectedMilestone(m.value)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-medium transition-all',
                  selectedMilestone === m.value
                    ? 'bg-[#2D0A16] text-white shadow-md'
                    : 'bg-white/60 text-[#4A1525] hover:bg-white hover:text-black border border-rose-200/60'
                )}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Atmosphere Dropdown / Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] mr-2" style={{ color: PALETTE.rose }}>
              Atmosphere:
            </span>
            {RITUALS.map((r) => (
              <button
                key={r.value}
                onClick={() => setSelectedMood(r.value)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all',
                  selectedMood === r.value
                    ? 'bg-rose-900 text-white shadow-md'
                    : 'bg-white/60 text-[#4A1525] hover:bg-white hover:text-black border border-rose-200/60'
                )}
              >
                {r.icon}
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Boxes Grid */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-normal tracking-tight md:text-4xl" style={{ color: PALETTE.noir }}>
              Curated Anniversary Kits
            </h2>
            <p className="mt-1 text-sm font-light" style={{ color: PALETTE.wine }}>
              Showing {filtered.length} of {BOXES.length} romance rituals
            </p>
          </div>
        </div>

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
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  borderColor: PALETTE.cardBorder,
                  background: PALETTE.cardBg,
                }}
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b" style={{ borderColor: PALETTE.cardBorder }}>
                  <img
                    src={box.image}
                    alt={box.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2D0A16] shadow-sm">
                      {box.milestone}
                    </span>
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-amber-200 border border-amber-300/30">
                      ${box.price} CAD
                    </span>
                  </div>

                  {/* Ritual Tag on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-serif italic text-white/95 drop-shadow-md">
                      <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
                      {box.ritual}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3
                    className="font-serif text-2xl font-semibold tracking-tight transition-colors group-hover:text-rose-900"
                    style={{ color: PALETTE.noir }}
                  >
                    {box.name}
                  </h3>

                  <p className="mt-2 text-sm italic font-serif leading-relaxed" style={{ color: PALETTE.rose }}>
                    "{box.tagline}"
                  </p>

                  <p className="mt-3 text-xs leading-relaxed font-light line-clamp-3" style={{ color: PALETTE.wine }}>
                    {box.description}
                  </p>

                  {/* Inclusions Preview */}
                  <div className="mt-6 pt-5 border-t space-y-2" style={{ borderColor: 'rgba(232, 208, 213, 0.6)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-rose-800">
                      Inside The Keepsake Box:
                    </span>
                    <ul className="space-y-1.5 text-xs font-medium" style={{ color: PALETTE.burgundy }}>
                      {box.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-rose-600" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                      {box.includes.length > 3 && (
                        <li className="text-[11px] font-semibold text-rose-700 italic pl-5.5">
                          + {box.includes.length - 3} more curated artifacts
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="mt-8 pt-4">
                    <a
                      href={boxPath(box.id)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        background: '#2D0A16',
                        color: '#FAF0F2',
                      }}
                    >
                      Explore Experience
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Romantic Testimonial Banner */}
      <footer className="relative z-10 border-t pb-20 pt-16" style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.6)' }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Star className="mx-auto h-6 w-6 text-amber-500 fill-amber-400 mb-4" />
          <blockquote className="font-serif text-2xl font-light italic md:text-3xl" style={{ color: PALETTE.noir }}>
            "We didn’t just celebrate another year together; we remembered why we fell in love in the first place."
          </blockquote>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: PALETTE.rose }}>
            Elena & Marcus • 10th Anniversary • Toronto
          </p>
        </div>
      </footer>
    </div>
  );
}
