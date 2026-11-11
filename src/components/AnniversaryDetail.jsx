import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck, Gift, Wine } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { getAnniversaryBox } from '../data/anniversaryBoxes';

const BACK_HREF = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/anniversary/` : '/anniversary/';

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

export default function AnniversaryDetail({ slug }) {
  const box = getAnniversaryBox(slug);

  if (!box) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF0F2] text-[#2D0A16]">
        <div className="text-center p-8">
          <h1 className="font-serif text-3xl font-bold">Anniversary Kit Not Found</h1>
          <p className="mt-2 text-sm text-[#4A1525]">The requested anniversary experience could not be located.</p>
          <a
            href={BACK_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2D0A16] px-6 py-2.5 text-xs uppercase tracking-widest text-white shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Anniversary Collection
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-[#2D0A16]"
      style={{
        background: 'linear-gradient(145deg, #FAF0F2 0%, #F5E5E9 40%, #EBD0D7 100%)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(201, 122, 126, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(74, 21, 37, 0.25) 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(212, 175, 55, 0.03) 0 2px, transparent 2px 14px)',
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

      {/* Navigation */}
      <nav className="relative z-20 mx-auto max-w-7xl px-6 pt-8 pb-4">
        <a
          href={BACK_HREF}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] transition-all hover:bg-white"
          style={{ borderColor: PALETTE.cardBorder, color: PALETTE.burgundy, background: 'rgba(255,255,255,0.6)' }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Anniversary Collection
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
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border shadow-2xl"
              style={{ borderColor: PALETTE.cardBorder }}
            >
              <img
                src={box.image}
                alt={box.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Floating badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2D0A16] shadow-sm">
                  {box.milestone}
                </span>
                <span className="rounded-full bg-black/70 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-amber-200 border border-amber-300/30">
                  ${box.price} CAD
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 text-sm font-serif italic text-white/95 drop-shadow-md">
                  <Heart className="h-4 w-4 fill-rose-400 text-rose-400" />
                  {box.ritual}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Title & Experience Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] w-fit"
              style={{
                borderColor: PALETTE.cardBorder,
                background: 'rgba(255, 255, 255, 0.65)',
                color: PALETTE.wine,
              }}
            >
              The Curated Love Ritual
            </div>

            <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl" style={{ color: PALETTE.noir }}>
              {box.name}
            </h1>

            <p className="mt-3 font-serif text-xl italic leading-relaxed" style={{ color: PALETTE.rose }}>
              "{box.tagline}"
            </p>

            <p className="mt-4 text-sm font-light leading-relaxed md:text-base" style={{ color: PALETTE.wine }}>
              {box.description}
            </p>

            {/* Quick Specs */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-6" style={{ borderColor: PALETTE.cardBorder }}>
              <div className="rounded-2xl border p-4 bg-white/50 backdrop-blur-sm" style={{ borderColor: PALETTE.cardBorder }}>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-700">Experience Type</span>
                <p className="mt-1 font-serif text-sm font-semibold capitalize" style={{ color: PALETTE.burgundy }}>
                  {box.mood.replace('-', ' ')}
                </p>
              </div>
              <div className="rounded-2xl border p-4 bg-white/50 backdrop-blur-sm" style={{ borderColor: PALETTE.cardBorder }}>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-700">Perfect For</span>
                <p className="mt-1 font-serif text-sm font-semibold capitalize" style={{ color: PALETTE.burgundy }}>
                  {box.milestone}
                </p>
              </div>
            </div>

            {/* Order CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:hello@celebrationinabox.com"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full py-4 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: '#2D0A16' }}
              >
                Inquire For Delivery
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: PALETTE.rose }}>
                Discreet Delivery in GTA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3-Chapter Dream Celebration Journey */}
      {box.dreamExperience && (
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.35em] font-bold"
              style={{
                borderColor: PALETTE.cardBorder,
                background: 'rgba(255,255,255,0.7)',
                color: PALETTE.wine,
              }}
            >
              The Unfolding Romance
            </span>
            <h2
              className="mt-4 font-serif text-3xl font-normal tracking-tight md:text-5xl"
              style={{ color: PALETTE.noir }}
            >
              {box.dreamExperience.headline}
            </h2>
            <p className="mt-3 text-base font-light italic font-serif leading-relaxed" style={{ color: PALETTE.rose }}>
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
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  borderColor: PALETTE.cardBorder,
                  background: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                {/* Visual Scene Header */}
                <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: PALETTE.cardBorder }}>
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Phase & Time Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-200 border border-rose-300/30">
                      {chapter.phase}
                    </span>
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#2D0A16] shadow-sm">
                      {chapter.time}
                    </span>
                  </div>

                  {/* Scene Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/90 drop-shadow">
                      {chapter.tag}
                    </span>
                  </div>
                </div>

                {/* Narrative Body */}
                <div className="flex-1 flex flex-col p-7">
                  <h3
                    className="font-serif text-2xl font-semibold tracking-tight transition-colors group-hover:text-rose-900"
                    style={{ color: PALETTE.noir }}
                  >
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed font-light" style={{ color: PALETTE.burgundy }}>
                    {chapter.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Artifacts & Delivery Specs */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Inside the Box */}
          <div
            className="rounded-[2.5rem] border p-8 backdrop-blur-xl shadow-sm"
            style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.75)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-6 w-6 text-rose-700" />
              <h2 className="font-serif text-3xl font-semibold tracking-tight" style={{ color: PALETTE.noir }}>
                What’s Inside The Keepsake Box
              </h2>
            </div>
            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: PALETTE.wine }}>
              Every element has been custom-commissioned for tactile luxury and enduring memory value:
            </p>
            <ul className="space-y-4">
              {box.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium" style={{ color: PALETTE.burgundy }}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seamless Experience & Delivery */}
          <div
            className="rounded-[2.5rem] border p-8 backdrop-blur-xl shadow-sm"
            style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.75)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-3xl font-semibold tracking-tight" style={{ color: PALETTE.noir }}>
                The White-Glove Guarantee
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-relaxed font-light" style={{ color: PALETTE.wine }}>
              <div className="rounded-2xl border p-4 bg-white/60" style={{ borderColor: PALETTE.cardBorder }}>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-800">
                  Discreet & Timed Delivery
                </span>
                <p className="mt-1 text-xs" style={{ color: PALETTE.burgundy }}>
                  Arrives in plain outer packaging to preserve the surprise. Hand-delivered across the Greater Toronto Area & Hamilton corridor on your chosen evening.
                </p>
              </div>

              <div className="rounded-2xl border p-4 bg-white/60" style={{ borderColor: PALETTE.cardBorder }}>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-800">
                  Ready-To-Run Ritual
                </span>
                <p className="mt-1 text-xs" style={{ color: PALETTE.burgundy }}>
                  No running errands or assembling props. Matches, playlist card, unboxing flow, and ritual sequence are curated down to the minute.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="mailto:hello@celebrationinabox.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all hover:scale-[1.02]"
                style={{ background: '#2D0A16', color: '#FAF0F2' }}
              >
                Inquire For Your Date
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Banner */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div
          className="rounded-[2rem] border p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: PALETTE.cardBorder, background: 'rgba(255,255,255,0.7)' }}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-rose-700">
              The Anniversary Collection
            </span>
            <h3 className="font-serif text-2xl font-normal mt-1" style={{ color: PALETTE.noir }}>
              Exploring Other Milestone Rituals?
            </h3>
            <p className="text-sm mt-1 font-light" style={{ color: PALETTE.wine }}>
              Browse our complete suite of 6 romantic anniversary rituals crafted for couples.
            </p>
          </div>
          <a
            href={BACK_HREF}
            className="shrink-0 inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#2D0A16] shadow-sm transition-all hover:bg-[#2D0A16] hover:text-white"
            style={{ borderColor: PALETTE.cardBorder }}
          >
            <ArrowLeft className="h-4 w-4" />
            View All 6 Anniversary Kits
          </a>
        </div>
      </section>
    </div>
  );
}
