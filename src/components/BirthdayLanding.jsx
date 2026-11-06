import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Heart, Sparkles, Eye, Filter, X, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const PALETTE = {
  deep: '#243010',
  forest: '#2A3C24',
  sage: '#BACDB0',
  blush: '#F3E8EE',
  gold: '#CA8A04',
};

const FILTERS = {
  mood: [
    { value: 'intimate', label: 'Intimate & Quiet', icon: <Heart className="h-4 w-4" /> },
    { value: 'energetic', label: 'Loud & Energetic', icon: <Sparkles className="h-4 w-4" /> },
  ],
  scale: [
    { value: 'small', label: 'Just us two', icon: <Heart className="h-4 w-4" /> },
    { value: 'large', label: 'The whole crew', icon: <Sparkles className="h-4 w-4" /> },
  ],
  detail: [
    { value: 'decor', label: 'Cake & Decor', icon: <Package className="h-4 w-4" /> },
    { value: 'experience', label: 'The Experience', icon: <Eye className="h-4 w-4" /> },
  ],
};

const BOXES = [
  { id: 'neon-bash', name: 'Neon Bash Kit', price: 199, tagline: 'Glow, music-led styling for a packed room.', mood: 'energetic', scale: 'large', detail: 'experience', accent: 'from-amber-300 to-orange-500' },
  { id: 'cake-garden', name: 'Cake Garden', price: 149, tagline: 'Floral centerpieces and a showstopper cake moment.', mood: 'intimate', scale: 'small', detail: 'decor', accent: 'from-yellow-200 to-amber-400' },
  { id: 'family-festival', name: 'Family Festival', price: 179, tagline: 'Games, garlands and keepsake props for all ages.', mood: 'energetic', scale: 'large', detail: 'decor', accent: 'from-lime-300 to-green-500' },
  { id: 'twilight-dinner', name: 'Twilight Dinner', price: 159, tagline: 'Candle-lit table styling for an intimate evening.', mood: 'intimate', scale: 'small', detail: 'experience', accent: 'from-rose-300 to-pink-500' },
  { id: 'garden-club', name: 'Garden Club', price: 169, tagline: 'Outdoor-ready decor with fresh botanicals.', mood: 'intimate', scale: 'large', detail: 'decor', accent: 'from-emerald-300 to-teal-500' },
  { id: 'vip-night', name: 'VIP Night', price: 229, tagline: 'A concierge-style celebration experience.', mood: 'energetic', scale: 'small', detail: 'experience', accent: 'from-indigo-300 to-violet-500' },
];

export default function BirthdayLanding() {
  const [filters, setFilters] = useState({ mood: null, scale: null, detail: null });

  const filtered = useMemo(
    () =>
      BOXES.filter(
        (b) =>
          (filters.mood ? b.mood === filters.mood : true) &&
          (filters.scale ? b.scale === filters.scale : true) &&
          (filters.detail ? b.detail === filters.detail : true)
      ),
    [filters]
  );

  const setFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }));

  const clearAll = () => setFilters({ mood: null, scale: null, detail: null });
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#243010]"
      style={{
        background:
          'linear-gradient(135deg, #F3E8EE 0%, #EAF0E3 45%, #BACDB0 100%)',
      }}
    >
      {/* Texture + pattern layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 12%, rgba(202,138,4,0.18) 0%, transparent 30%), radial-gradient(circle at 88% 75%, rgba(42,60,36,0.16) 0%, transparent 35%), repeating-linear-gradient(45deg, rgba(202,138,4,0.05) 0 2px, transparent 2px 14px)',
        }}
      />
      {/* Decorative orbs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(202,138,4,0.35), transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(42,60,36,0.25), transparent 70%)' }} />

      {/* Hero */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.35em] backdrop-blur"
              style={{ borderColor: PALETTE.sage, background: 'rgba(255,255,255,0.45)', color: PALETTE.forest }}
            >
              Birthday Studio
            </span>
            <h1
              className="mt-6 font-['Anton'] text-6xl uppercase tracking-tight md:text-8xl"
              style={{ color: PALETTE.deep }}
            >
              Birthday
              <br />
              <span style={{ color: PALETTE.gold }}>Kits</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: PALETTE.forest }}>
              Bold, ready-to-run birthday experiences. Filter by vibe, crowd size, and the moment that matters most.
            </p>
          </div>
          <div
            className="relative hidden h-64 overflow-hidden rounded-[2rem] border lg:block"
            style={{
              borderColor: PALETTE.sage,
              background: 'linear-gradient(135deg, #CA8A04 0%, #2A3C24 70%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0 2px, transparent 2px 16px)',
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] opacity-80">Signature Collection</p>
              <p className="mt-2 text-3xl font-black uppercase">The Grand Bash</p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 lg:grid-cols-[280px_1fr]">
        {/* Sidebar filters */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div
            className="rounded-[2rem] border p-6 backdrop-blur-xl"
            style={{ borderColor: PALETTE.sage, background: 'rgba(255,255,255,0.55)' }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div
                className="flex items-center gap-2 text-sm uppercase tracking-[0.2em]"
                style={{ color: PALETTE.forest }}
              >
                <Filter className="h-4 w-4" />
                Filters
              </div>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="flex items-center gap-1 text-xs uppercase tracking-wider hover:opacity-70"
                  style={{ color: PALETTE.deep }}
                >
                  <X className="h-3 w-3" />
                  Clear
                </button>
              )}
            </div>

            {Object.entries(FILTERS).map(([key, options]) => (
              <div key={key} className="mb-6 last:mb-0">
                <p
                  className="mb-3 text-xs uppercase tracking-[0.25em]"
                  style={{ color: PALETTE.forest }}
                >
                  {key === 'mood' ? 'Vibe' : key === 'scale' ? 'Crowd' : 'Highlight'}
                </p>
                <div className="space-y-2">
                  {options.map((opt) => {
                    const active = filters[key] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFilter(key, opt.value)}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-bold uppercase tracking-wide transition-all',
                          active
                            ? 'shadow-lg'
                            : 'hover:translate-x-0.5'
                        )}
                        style={
                          active
                            ? {
                                background: PALETTE.gold,
                                color: PALETTE.deep,
                                borderColor: PALETTE.gold,
                              }
                            : {
                                background: 'rgba(255,255,255,0.6)',
                                color: PALETTE.deep,
                                borderColor: PALETTE.sage,
                              }
                        }
                      >
                        {opt.icon}
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Product grid */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <p className="text-sm uppercase tracking-[0.2em]" style={{ color: PALETTE.forest }}>
              {filtered.length} {filtered.length === 1 ? 'kit' : 'kits'}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-[2rem] border p-16 text-center backdrop-blur-xl"
                style={{ borderColor: PALETTE.sage, background: 'rgba(255,255,255,0.55)' }}
              >
                <p className="font-['Anton'] text-3xl uppercase" style={{ color: PALETTE.deep }}>
                  No matching kits
                </p>
                <p className="mt-2" style={{ color: PALETTE.forest }}>Try clearing some filters.</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {filtered.map((box, i) => (
                  <motion.article
                    key={box.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group relative flex flex-col overflow-hidden rounded-[2rem] border p-6 backdrop-blur-xl transition-all hover:-translate-y-1"
                    style={{ borderColor: PALETTE.sage, background: 'rgba(255,255,255,0.6)' }}
                  >
                    <div
                      className="mb-6 h-40 overflow-hidden rounded-2xl border"
                      style={{
                        borderColor: PALETTE.sage,
                        background: `linear-gradient(135deg, ${PALETTE.gold} 0%, ${PALETTE.forest} 100%)`,
                      }}
                    >
                      <div
                        className="h-full w-full opacity-40"
                        style={{
                          backgroundImage:
                            'repeating-radial-gradient(circle at 30% 40%, rgba(255,255,255,0.5) 0 2px, transparent 2px 18px)',
                        }}
                      />
                    </div>
                    <h3
                      className="font-['Anton'] text-2xl uppercase tracking-wide"
                      style={{ color: PALETTE.deep }}
                    >
                      {box.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: PALETTE.forest }}>
                      {box.tagline}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-3xl font-extrabold" style={{ color: PALETTE.gold }}>
                        ${box.price}
                      </span>
                      <a
                        href="mailto:hello@celebrationinabox.com"
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                        style={{ background: PALETTE.gold, color: PALETTE.deep }}
                      >
                        Inquire
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}