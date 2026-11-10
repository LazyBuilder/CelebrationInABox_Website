import React from 'react';
import { motion } from 'framer-motion';
import { Package, Heart, CheckCircle2, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { getBox } from '../data/birthdayBoxes';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const BACK_HREF = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/birthday/` : '/birthday/';

export default function BirthdayDetail({ slug }) {
  const box = getBox(slug);

  if (!box) {
    return (
      <div className="min-h-screen w-full bg-[#F3E8EE] text-[#243010] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-['Anton'] text-4xl uppercase">Kit not found</h1>
          <a href={BACK_HREF} className="mt-6 inline-block text-sm uppercase tracking-widest underline">
            Back to birthday kits
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-[#243010]" style={{ background: 'linear-gradient(135deg, #F3E8EE 0%, #EAF0E3 45%, #BACDB0 100%)' }}>
      {/* Hero panel */}
      <section className="relative overflow-hidden px-6 pt-12 pb-8">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border shadow-2xl"
          style={{ borderColor: '#BACDB0', background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(234,240,227,0.8) 100%)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={BACK_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-[#BACDB0] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#243010] shadow-sm transition-all hover:bg-[#243010] hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to all birthday kits
                </a>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-400/20 border border-amber-400/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-950">
                    {box.mood}
                  </span>
                  <span className="rounded-full bg-[#243010]/10 border border-[#243010]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#243010]">
                    {box.scale === 'small' ? 'Just Us Two' : 'Whole Crew'}
                  </span>
                  <span className="rounded-full bg-[#243010]/10 border border-[#243010]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#243010]">
                    {box.detail === 'decor' ? 'Cake & Decor' : 'Experience'}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#2A3C24]/80 font-bold">Curated Birthday Experience</p>
                <h1 className="mt-2 font-['Anton'] text-5xl uppercase tracking-tight md:text-7xl" style={{ color: '#243010' }}>
                  {box.name}
                </h1>
                <p className="mt-3 max-w-xl text-lg leading-relaxed font-medium" style={{ color: '#2A3C24' }}>
                  {box.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-[#2A3C24]/70">
                    Starting at
                  </span>
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-embossed-gold" style={{ color: '#FACC15' }}>
                    ${box.price}
                  </span>
                </div>
                <a
                  href="mailto:hello@celebrationinabox.com"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{
                    background: '#FACC15',
                    color: '#243010',
                    boxShadow: '0 4px 16px rgba(202,138,4,0.3)',
                  }}
                >
                  Inquire about this kit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div
                className="relative h-80 sm:h-96 w-full overflow-hidden rounded-[2rem] border shadow-xl"
                style={{ borderColor: '#BACDB0' }}
              >
                {box.image && (
                  <img
                    src={box.image}
                    alt={box.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs uppercase tracking-wider font-bold bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    Primary Kit View
                  </span>
                  <span className="text-xs font-semibold opacity-90 drop-shadow">
                    All-inclusive setup
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Aspect Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: '#2A3C24' }}>
            <Sparkles className="h-4 w-4 text-amber-600" />
            Kit Moments & Experience Gallery
          </div>
          <span className="text-xs uppercase tracking-wider text-[#2A3C24]/70 font-medium">3 Curated Perspectives</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(box.gallery || []).map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-[2rem] border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.65)' }}
            >
              <div
                className="relative mb-5 h-56 overflow-hidden rounded-2xl border"
                style={{ borderColor: '#BACDB0' }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-3.5 left-3.5 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-300/30">
                  Aspect 0{idx + 1}
                </div>
              </div>
              <h3 className="font-['Anton'] text-xl uppercase tracking-wide" style={{ color: '#243010' }}>
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#2A3C24' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border p-8 backdrop-blur-xl" style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.65)' }}>
            <h2 className="font-['Anton'] text-3xl uppercase tracking-wide" style={{ color: '#243010' }}>
              What’s inside
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: '#2A3C24' }}>
              {box.description}
            </p>
            <ul className="mt-6 space-y-3">
              {box.includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold" style={{ color: '#243010' }}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 drop-shadow-gold-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border p-8 backdrop-blur-xl" style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.65)' }}>
            <h2 className="font-['Anton'] text-3xl uppercase tracking-wide" style={{ color: '#243010' }}>
              Perfect for
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[box.mood, box.scale, box.detail].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] border border-amber-400/40 bg-amber-400/15 text-[#243010]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: '#2A3C24' }}>
                Delivery & Coordination
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#243010' }}>
                Curated, packed, and delivered within the GTA & Hamilton area. Email us with your desired date to confirm lead time.
              </p>
            </div>
            <a
              href="mailto:hello@celebrationinabox.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#FACC15', color: '#243010', boxShadow: '0 2px 10px rgba(202,138,4,0.25)' }}
            >
              Inquire for Delivery
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer navigation banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div
          className="rounded-[2rem] border p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.6)' }}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: '#2A3C24' }}>
              Explore More Options
            </span>
            <h3 className="font-['Anton'] text-2xl uppercase tracking-wide mt-1" style={{ color: '#243010' }}>
              Want to compare with other kits?
            </h3>
            <p className="text-sm mt-1" style={{ color: '#2A3C24' }}>
              Explore our full collection of curated birthday experiences and find the perfect match.
            </p>
          </div>
          <a
            href={BACK_HREF}
            className="shrink-0 inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#243010] shadow-sm transition-all hover:bg-[#243010] hover:text-white"
            style={{ borderColor: '#BACDB0' }}
          >
            <ArrowLeft className="h-4 w-4" />
            View all 6 birthday kits
          </a>
        </div>
      </section>
    </div>
  );
}