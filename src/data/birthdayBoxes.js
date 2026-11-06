export const BIRTHDAY_BOXES = [
  {
    id: 'neon-bash',
    name: 'Neon Bash Kit',
    price: 199,
    tagline: 'Glow, music-led styling for a packed room.',
    mood: 'energetic',
    scale: 'large',
    detail: 'experience',
    description:
      'A high-energy party kit built around neon lighting cues, a curated playlist guide, and immersive decor that turns any living room into a glow-floor celebration.',
    includes: ['Neon signage set', 'UV lighting guide', 'Glow accessories (12)', 'Sound styling playbook'],
    accent: 'from-fuchsia-400 to-violet-600',
  },
  {
    id: 'cake-garden',
    name: 'Cake Garden',
    price: 149,
    tagline: 'Floral centerpieces and a showstopper cake moment.',
    mood: 'intimate',
    scale: 'small',
    detail: 'decor',
    description:
      'A romantic-meets-festive floral setup with centerpiece instructions, cake styling tools, and keepsake props for an intimate birthday.',
    includes: ['Floral centerpiece kit', 'Cake stand + topper', 'Step-by-step styling guide', 'Memory cards'],
    accent: 'from-amber-300 to-rose-400',
  },
  {
    id: 'family-festival',
    name: 'Family Festival',
    price: 179,
    tagline: 'Games, garlands and keepsake props for all ages.',
    mood: 'energetic',
    scale: 'large',
    detail: 'decor',
    description:
      'A lively all-ages celebration kit with garlands, games, and keepsake crafts that keeps everyone engaged.',
    includes: ['Garland & banner kit', 'Game station set', 'Craft corner supplies', 'Photo backdrop'],
    accent: 'from-lime-300 to-green-500',
  },
  {
    id: 'twilight-dinner',
    name: 'Twilight Dinner',
    price: 159,
    tagline: 'Candle-lit table styling for an intimate evening.',
    mood: 'intimate',
    scale: 'small',
    detail: 'experience',
    description:
      'A candle-lit dinner experience kit with table styling, menu cards, and atmosphere guidance for a quiet celebration.',
    includes: ['Candle & holder set', 'Menu cards', 'Table runner', 'Atmosphere guide'],
    accent: 'from-rose-300 to-pink-500',
  },
  {
    id: 'garden-club',
    name: 'Garden Club',
    price: 169,
    tagline: 'Outdoor-ready decor with fresh botanicals.',
    mood: 'intimate',
    scale: 'large',
    detail: 'decor',
    description:
      'A botanical birthday setup designed for patios and backyards with weather-ready decor and fresh styling.',
    includes: ['Botanical garland kit', 'Outdoor signage', 'Picnic setup guide', 'Floral wrap'],
    accent: 'from-emerald-300 to-teal-500',
  },
  {
    id: 'vip-night',
    name: 'VIP Night',
    price: 229,
    tagline: 'A concierge-style celebration experience.',
    mood: 'energetic',
    scale: 'small',
    detail: 'experience',
    description:
      'A premium, concierge-style birthday night kit with elevated props and a guided run-of-show.',
    includes: ['VIP decor set', 'Run-of-show playbook', 'Keepsake box', 'Ambience kit'],
    accent: 'from-indigo-300 to-violet-500',
  },
];

export const getBox = (id) => BIRTHDAY_BOXES.find((b) => b.id === id);
