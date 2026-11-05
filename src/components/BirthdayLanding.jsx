import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Heart, Sparkles, Eye, Filter, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const FILTERS = {
  mood: [
    { value: 'intimate', label: 'Intimate & Quiet', icon: <Heart className="w-4 h-4" /> },
    { value: 'energetic', label: 'Loud & Energetic', icon: <Sparkles className="w-4 h-4" /> },
  ],
  scale: [
    { value: 'small', label: 'Just us two', icon: <Heart className="w-4 h-4" /> },
    { value: 'large', label: 'The whole crew', icon: <Sparkles className="w-4 h-4" /> },
  ],
  detail: [
    { value: 'decor', label: 'Cake & Decor', icon: <Package className="w-4 h-4" /> },
    { value: 'experience', label: 'The Experience', icon: <Eye className="w-4 h-4" /> },
  ],
};

const BOXES = [
  { id: 'neon-bash', name: 'Neon Bash Kit', price: 199, tagline: 'Glow, music-led styling for a packed room.', mood: 'energetic', scale: 'large', detail: 'experience', icon: <Sparkles /> },
  { id: 'cake-garden', name: 'Cake Garden', price: 149, tagline: 'Floral centerpieces and a showstopper cake moment.', mood: 'intimate', scale: 'small', detail: 'decor', icon: <Heart /> },
  { id: 'family-festival', name: 'Family Festival', price: 179, tagline: 'Games, garlands and keepsake props for all ages.', mood: 'energetic', scale: 'large', detail: 'decor', icon: <Sparkles /> },
  { id: 'twilight-dinner', name: 'Twilight Dinner', price: 159, tagline: 'Candle-lit table styling for an intimate evening.', mood: 'intimate', scale: 'small', detail: 'experience', icon: <Heart /> },
  { id: 'garden-club', name: 'Garden Club', price: 169, tagline: 'Outdoor-ready decor with fresh botanicals.', mood: 'intimate', scale: 'large', detail: 'decor', icon: <Heart /> },
  { id: 'vip-night', name: 'VIP Night', price: 229, tagline: 'A concierge-style celebration experience.', mood: 'energetic', scale: 'small', detail: 'experience', icon: <Sparkles /> },
];

export default function BirthdayLanding() {
  const [filters, setFilters] = useState({ mood: null, scale: null, detail: null });

  const filtered = useMemo(
    () =>
      BOXES.filter((b) =>
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
      className="min-h-screen text-amber-950"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 20%, rgba(251,191,36,0.18) 0%, transparent 35%), radial-gradient(circle at 85% 70%, rgba(249,115,22,0.14) 0%, transparent 40%), linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%)',
      }}
    >
      {/* Hero */}
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.3em] text-amber-800 backdrop-blur"
        >
          Birthday Studio
        </div>
        <h1 className="mt-6 font-['Anton'] text-6xl md:text-8xl uppercase tracking-tight text-amber-950 drop-shadow-[0_0_40px_rgba(251,191,36,0.3)]">
          Birthday Kits
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-amber-800/80">
          Energetic, ready-to-run celebrations. Filter by vibe, crowd size, and the moment you want to own.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 lg:grid-cols-[280px_1fr]">
        {/* Sidebar filters */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-amber-200/60 bg-white/80 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-amber-800">
                <Filter className="h-4 w-4" />
                Filters
              </div>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="flex items-center gap-1 text-xs uppercase tracking-wider text-amber-700 hover:text-amber-950"
                >
                  <X className="h-3 w-3" />
                  Clear
                </button>
              )}
            </div>

            {Object.entries(FILTERS).map(([key, options]) => (
              <div key={key} className="mb-6 last:mb-0">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-700/80">
                  {key === 'mood'
                    ? 'Vibe'
                    : key === 'scale'
                    ? 'Crowd'
                    : 'Highlight'}
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
                            ? 'border-amber-400 bg-amber-400/20 text-amber-50 shadow-[0_0_20px_rgba(251,191,36,0.15)]'
                            : 'border-amber-200/60 bg-white/80 text-amber-800/80 hover:border-amber-400/40 hover:bg-amber-100'
                        )}
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
            <p className="text-sm uppercase tracking-[0.2em] text-amber-800/60">
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
                className="rounded-3xl border border-amber-200/60 bg-white/80 p-16 text-center backdrop-blur"
              >
                <p className="font-['Anton'] text-3xl uppercase text-amber-950">
                  No matching kits
                </p>
                <p className="mt-2 text-amber-800/70">Try clearing some filters.</p>
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-amber-200/60 bg-white/80 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-700">
                      {React.cloneElement(box.icon, { className: 'h-7 w-7' })}
                    </div>
                    <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-amber-950">
                      {box.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-amber-800/80">{box.tagline}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-amber-800">
                        ${box.price}
                      </span>
                      <a
                        href="mailto:hello@celebrationinabox.com"
                        className="rounded-full bg-amber-400 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-950 transition-colors hover:bg-amber-300"
                      >
                        Inquire
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