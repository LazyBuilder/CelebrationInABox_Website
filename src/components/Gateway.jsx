import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const CELEBRATIONS = [
  { id: 'birthday', label: 'A Birthday', color: '#FFD700', mood: 'Energetic' },
  { id: 'anniversary', label: 'An Anniversary', color: '#E63946', mood: 'Romantic' },
  { id: 'congratulations', label: 'Congratulations', color: '#457B9D', mood: 'Proud' },
];

export default function Gateway() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-16 leading-tight">
          What are we <br />
          <span className="italic font-serif text-zinc-400">celebrating?</span>
        </h1>
      </motion.div>

      <div className="flex flex-col gap-6 items-center">
        {CELEBRATIONS.map((item) => {
          const path = SITE_CONFIG.basePath
            ? `${SITE_CONFIG.basePath}/${item.id}/`
            : `${item.id}/`;

          return (
            <motion.a
              key={item.id}
              href={path}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-6 text-2xl font-light border border-zinc-200 rounded-full transition-all duration-500 hover:border-zinc-900 flex items-center gap-6 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">{item.label}</span>
              <ArrowRight
                className={`relative z-10 transition-all duration-500 ${hovered === item.id ? 'translate-x-2 opacity-100' : 'opacity-0'}`}
              />

              {hovered === item.id && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 blur-3xl opacity-30"
                  style={{ backgroundColor: item.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-400 text-xs tracking-[0.3em] uppercase font-medium"
      >
        GTA & Hamilton Area
      </motion.div>
    </div>
  );
}
