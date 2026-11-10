import React from 'react';
import { motion } from 'framer-motion';
import { Package, Heart, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Cake, Music } from 'lucide-react';
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
      <section className="relative overflow-hidden px-6 py-12">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border"
          style={{ borderColor: '#BACDB0', background: `linear-gradient(135deg, #FACC15 0%, #2A3C24 80%)` }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'repeating-radial-gradient(circle at 30% 40%, rgba(255,255,255,0.45) 0 2px, transparent 2px 18px)',
            }}
          />
          <div className="relative z-10 flex flex-col gap-6 p-10 md:p-16 text-white">
            <a href={BACK_HREF} className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white">
              <ArrowLeft className="h-3.5 w-3.5" />
              All birthday kits 🎉
            </a>
            <h1 className="font-['Anton'] text-5xl uppercase tracking-tight md:text-7xl">{box.name}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">{box.tagline}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-4xl font-extrabold text-embossed-gold" style={{ color: '#FACC15' }}>
                ${box.price}
              </span>
              <a
                href="mailto:hello@celebrationinabox.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#243010] shadow-md transition-all hover:scale-105 hover:bg-[#eab308] hover:shadow-lg"
                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}
              >
                Inquire
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em]" style={{ color: '#2A3C24' }}>
          <Sparkles className="h-4 w-4" />
          Visual story
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: <Cake className="h-8 w-8" />, label: 'Cake moment', grad: 'from-[#FACC15] to-[#BACDB0]' },
            { icon: <Music className="h-8 w-8" />, label: 'Sound & mood', grad: 'from-[#2A3C24] to-[#FACC15]' },
            { icon: <Package className="h-8 w-8" />, label: 'Kit unpacked', grad: 'from-[#BACDB0] to-[#F3E8EE]' },
          ].map((g) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-56 overflow-hidden rounded-[2rem] border"
              style={{ borderColor: '#BACDB0' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.grad}`} />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 3px, transparent 3px 20px)',
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                {g.icon}
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{g.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border p-8 backdrop-blur-xl" style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.7)' }}>
            <h2 className="font-['Anton'] text-3xl uppercase tracking-wide" style={{ color: '#243010' }}>
              What’s inside
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: '#2A3C24' }}>
              {box.description}
            </p>
            <ul className="mt-6 space-y-3">
              {box.includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold" style={{ color: '#243010' }}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 drop-shadow-gold-icon" style={{ color: '#FACC15' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border p-8 backdrop-blur-xl" style={{ borderColor: '#BACDB0', background: 'rgba(255,255,255,0.7)' }}>
            <h2 className="font-['Anton'] text-3xl uppercase tracking-wide" style={{ color: '#243010' }}>
              Perfect for
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[box.mood, box.scale, box.detail].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ background: 'rgba(202,138,4,0.15)', color: '#243010' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em]" style={{ color: '#2A3C24' }}>
                Delivery
              </p>
              <p className="mt-2 text-sm" style={{ color: '#243010' }}>
                Curated, packed, and delivered within the GTA & Hamilton area. Email us to confirm lead time.
              </p>
            </div>
            <a
              href="mailto:hello@celebrationinabox.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#FACC15', color: '#243010', boxShadow: '0 2px 10px rgba(36,48,16,0.22)' }}
            >
              Inquire for Delivery
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}