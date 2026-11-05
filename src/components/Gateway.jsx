import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const CELEBRATIONS = [
  {
    id: 'birthday',
    label: 'A Birthday',
    mood: 'Energetic',
    accent: 'from-amber-300 via-yellow-200 to-orange-400',
    glow: 'rgba(251,191,36,0.35)',
  },
  {
    id: 'anniversary',
    label: 'An Anniversary',
    mood: 'Romantic',
    accent: 'from-rose-300 via-pink-200 to-red-400',
    glow: 'rgba(244,63,94,0.35)',
  },
  {
    id: 'congratulations',
    label: 'Congratulations',
    mood: 'Proud',
    accent: 'from-sky-300 via-blue-200 to-indigo-400',
    glow: 'rgba(14,165,233,0.35)',
  },
];

export default function Gateway() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0f] text-white flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(208,178,255,0.45), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(232,64,13,0.35), transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            Celebration In A Box
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
            What are we
            <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              celebrating?
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-light mb-16">
            Three distinct rituals. Curated boxes. Delivered to your door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CELEBRATIONS.map((item, i) => {
            const path = SITE_CONFIG.basePath
              ? `${SITE_CONFIG.basePath}/${item.id}/`
              : `/${item.id}/`;

            return (
              <motion.a
                key={item.id}
                href={path}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left transition-all duration-500',
                  hovered === item.id && 'border-white/30'
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: item.glow }}
                />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-12">
                    {item.mood}
                  </p>
                  <h2 className="text-3xl font-bold mb-6">{item.label}</h2>
                  <span
                    className={cn(
                      'inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors'
                    )}
                  >
                    Explore
                    <ArrowRight
                      className={cn(
                        'w-4 h-4 transition-transform duration-300',
                        hovered === item.id && 'translate-x-1'
                      )}
                    />
                  </span>
                </div>
                <div
                  aria-hidden
                  className={cn(
                    'absolute -bottom-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-60 bg-gradient-to-br',
                    item.accent
                  )}
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 text-white/40 text-xs tracking-[0.3em] uppercase"
        >
          GTA & Hamilton Area
        </motion.div>
      </div>
    </div>
  );
}