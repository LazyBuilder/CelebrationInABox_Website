import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Package, Eye, Heart } from 'lucide-react';

const STEPS = [
  {
    id: 'mood',
    question: 'How should it feel?',
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
  }
];

export default function CelebrationFlow({ type }) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [isRevealed, setIsRevealed] = useState(false);

  const handleSelect = (value) => {
    setSelections({ ...selections, [STEPS[step].id]: value });
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setIsRevealed(true);
    }
  };

  if (isRevealed) {
    return <OutcomeReveal type={type} selections={selections} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl w-full text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-12">{STEPS[step].question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS[step].options.map((opt) => (
              <motion.button
                key={opt.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(opt.value)}
                className="p-8 border border-current rounded-3xl text-2xl font-light flex flex-col items-center gap-4 transition-all hover:bg-current hover:text-white"
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <AnimatePresence>
        {!showBox ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="max-w-4xl"
          >
            <motion.div
              className="w-full aspect-video bg-zinc-200 rounded-3xl mb-12 overflow-hidden relative"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 italic">
                [Cinematic Visual of {type} outcome based on {JSON.stringify(selections)}]
              </div>
            </motion.div>
            <h3 className="text-5xl font-light mb-8">Imagine this in your home...</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBox(true)}
              className="px-12 py-6 bg-current text-white rounded-full text-xl font-medium"
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
              <div className="text-5xl font-serif mb-8">$149.00</div>
              <button className="px-12 py-6 border border-current rounded-full text-xl font-light hover:bg-current hover:text-white transition-all">
                Inquire for Delivery
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
