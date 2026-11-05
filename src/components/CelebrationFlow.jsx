import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Package, Eye, Heart, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SITE_CONFIG } from '../config';

const cn = (...inputs) => twMerge(clsx(inputs));

const BACK_HREF = SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/` : '/';

const THEMES = {
  birthday: {
    page: 'bg-gradient-to-br from-[#1a1408] via-[#2a1f0f] to-[#1c1005] text-amber-50',
    heading: 'text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 text-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.25)]',
    sub: 'uppercase tracking-[0.25em] text-xs text-amber-300/80',
    button: 'rounded-2xl border border-amber-400/40 bg-white/5 text-amber-100 hover:bg-amber-400/20 hover:border-amber-400 font-bold uppercase tracking-wide shadow-lg shadow-amber-900/40 backdrop-blur',
    optionText: 'text-2xl',
    card: 'bg-gradient-to-br from-amber-500/30 to-orange-600/40 text-amber-50 border border-amber-400/30 backdrop-blur',
    price: 'text-6xl font-extrabold tracking-tight text-amber-200',
  },
  anniversary: {
    page: 'bg-gradient-to-br from-[#1a0d12] via-[#2a1219] to-[#14080c] text-rose-50',
    heading: 'text-5xl md:text-7xl font-light italic font-serif mb-4 text-rose-100 drop-shadow-[0_0_30px_rgba(244,63,94,0.25)]',
    sub: 'tracking-[0.35em] text-xs uppercase text-rose-300/80',
    button: 'rounded-full border border-rose-300/40 bg-white/5 text-rose-100 hover:bg-rose-600/30 hover:border-rose-400 font-light tracking-widest shadow-md shadow-rose-900/40 backdrop-blur',
    optionText: 'text-2xl font-light',
    card: 'bg-gradient-to-br from-rose-500/30 to-pink-600/40 text-rose-50 border border-rose-400/30 backdrop-blur',
    price: 'text-6xl font-light font-serif text-rose-100',
  },
  congratulations: {
    page: 'bg-gradient-to-br from-[#0d1120] via-[#131a2e] to-[#08101f] text-sky-50',
    heading: 'text-5xl md:text-7xl font-bold tracking-tight mb-4 text-sky-100 drop-shadow-[0_0_30px_rgba(14,165,233,0.25)]',
    sub: 'tracking-[0.2em] text-xs uppercase font-semibold text-sky-300/80',
    button: 'rounded-xl border border-sky-500/40 bg-sky-500/20 text-sky-100 hover:bg-sky-500/40 hover:border-sky-400 font-semibold tracking-wide shadow-lg shadow-sky-900/40 backdrop-blur',
    optionText: 'text-2xl font-semibold',
    card: 'bg-gradient-to-br from-sky-500/30 to-indigo-600/40 text-sky-50 border border-sky-400/30 backdrop-blur',
    price: 'text-6xl font-bold tracking-tight text-sky-100',
  },
};

const theme = (type) => THEMES[type] || THEMES.birthday;

const CELEBRATION_CONFIGS = {
  birthday: {
    steps: [
      {
        id: 'mood',
        question: 'What is the birthday vibe?',
        options: [
          { label: 'Intimate & Quiet', value: 'intimate', icon: <Heart className="w-5 h-5" /> },
          { label: 'Loud & Energetic', value: 'energetic', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'scale',
        question: 'Who is joining the magic?',
        options: [
          { label: 'Just us two', value: 'small', icon: <Heart className="w-5 h-5" /> },
          { label: 'The whole crew', value: 'large', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'detail',
        question: 'What is the highlight?',
        options: [
          { label: 'The Cake & Decor', value: 'decor', icon: <Package className="w-5 h-5" /> },
          { label: 'The Experience', value: 'experience', icon: <Eye className="w-5 h-5" /> },
        ],
      },
    ],
  },
  anniversary: {
    steps: [
      {
        id: 'mood',
        question: 'How should the romance feel?',
        options: [
          { label: 'Deeply Intimate', value: 'intimate', icon: <Heart className="w-5 h-5" /> },
          { label: 'Celebratory & Grand', value: 'grand', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'scale',
        question: 'Who is being celebrated?',
        options: [
          { label: 'The Couple Only', value: 'small', icon: <Heart className="w-5 h-5" /> },
          { label: 'Family & Close Friends', value: 'large', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'detail',
        question: 'The primary focus?',
        options: [
          { label: 'Timeless Elegance', value: 'elegant', icon: <Heart className="w-5 h-5" /> },
          { label: 'Modern Surprise', value: 'modern', icon: <Eye className="w-5 h-5" /> },
        ],
      },
    ],
  },
  congratulations: {
    steps: [
      {
        id: 'mood',
        question: 'What is the energy?',
        options: [
          { label: 'Sophisticated', value: 'sophisticated', icon: <Heart className="w-5 h-5" /> },
          { label: 'Over-the-top', value: 'extravagant', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'scale',
        question: 'How big is the win?',
        options: [
          { label: 'Private Celebration', value: 'small', icon: <Heart className="w-5 h-5" /> },
          { label: 'Open House Party', value: 'large', icon: <Sparkles className="w-5 h-5" /> },
        ],
      },
      {
        id: 'detail',
        question: 'What defines the win?',
        options: [
          { label: 'Professional Success', value: 'career', icon: <Package className="w-5 h-5" /> },
          { label: 'Personal Milestone', value: 'life', icon: <Eye className="w-5 h-5" /> },
        ],
      },
    ],
  },
};

const OUTCOME_MAP = {
  intimate: 'a serene and candle-lit sanctuary',
  energetic: 'a vibrant explosion of color and joy',
  grand: 'a breathtaking display of luxury',
  sophisticated: 'a curated space of understated elegance',
  extravagant: 'a maximalist celebration of success',
  small: 'perfectly tailored for a few',
  large: 'designed to impress a crowd',
};

export default function CelebrationFlow({ type }) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [isRevealed, setIsRevealed] = useState(false);

  const config = CELEBRATION_CONFIGS[type] || CELEBRATION_CONFIGS.birthday;
  const steps = config.steps;
  const t = theme(type);

  const handleSelect = (value) => {
    setSelections({ ...selections, [steps[step].id]: value });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsRevealed(true);
    }
  };

  if (isRevealed) {
    return <OutcomeReveal type={type} selections={selections} />;
  }

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6 relative', t.page)}>
      <div className="absolute top-8 left-8">
        <a href={BACK_HREF} className="text-sm font-light opacity-50 hover:opacity-100 transition-opacity">
          ← Back to Start
        </a>
      </div>
      <div className="absolute top-12 right-8 text-sm font-light opacity-30">
        Step {step + 1} of {steps.length}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl w-full text-center"
        >
          <h2 className={t.heading}>{steps[step].question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps[step].options.map((opt) => (
              <motion.button
                key={opt.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(opt.value)}
                className={`p-8 flex flex-col items-center gap-4 transition-all ${t.button}`}
              >
                {opt.icon}
                {opt.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OutcomeReveal({ type, selections }) {
  const [showBox, setShowBox] = useState(false);

  const moodValue = selections.mood;
  const scaleValue = selections.scale;
  const moodDesc = OUTCOME_MAP[moodValue] || 'a uniquely curated atmosphere';
  const scaleDesc = OUTCOME_MAP[scaleValue] || 'tailored to your needs';

  const t = theme(type);

  return (
    <div className={cn('min-h-screen flex flex-col items-center justify-center p-6 text-center relative', t.page)}>
      <div className="absolute top-8 left-8">
        <a href={BACK_HREF} className="text-sm font-light opacity-50 hover:opacity-100 transition-opacity">
          ← Back to Start
        </a>
      </div>
      <AnimatePresence>
        {!showBox ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="max-w-4xl"
          >
            <motion.div
              className={`w-full aspect-video rounded-3xl mb-12 overflow-hidden relative ${t.card}`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center italic p-12">
                <span className="text-2xl mb-4">A {type} celebration...</span>
                <span className="text-lg opacity-70 max-w-md">
                  {moodDesc}, {scaleDesc}.
                </span>
              </div>
            </motion.div>
            <h3 className={cn(t.heading, 'mb-8')}>Imagine this in your home...</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBox(true)}
              className={`px-12 py-6 text-xl ${t.button}`}
            >
              Bring this to life
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-square bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center">
               <Package className="w-32 h-32 text-zinc-300" />
               <div className="absolute top-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm">
                 The {type} Kit
               </div>
            </div>
            <div className="text-left">
              <h3 className="text-4xl font-light mb-6">Everything you need, curated.</h3>
              <ul className="space-y-4 mb-12">
                {['Premium Decorations', 'Step-by-Step Manual', 'Atmosphere Guide', 'Curated Props'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-xl font-light">
                    <CheckCircle2 className="w-6 h-6" /> {item}
                  </li>
                ))}
              </ul>
              <div className={cn(t.price, 'mb-8')}>$149.00</div>
              <a
                href="mailto:hello@celebrationinabox.com"
                className={`px-12 py-6 text-xl inline-block ${t.button}`}
              >
                Inquire for Delivery
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
