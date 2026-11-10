import { SITE_CONFIG } from '../config';

const getImagePath = (filename) =>
  SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/images/birthday/${filename}` : `/images/birthday/${filename}`;

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
    image: getImagePath('neon-bash.jpg'),
    gallery: [
      {
        label: 'Unboxed Kit & Neon Hardware',
        desc: 'Custom LED neon signs, UV lighting guide, and sound styling deck.',
        image: getImagePath('neon-bash.jpg'),
      },
      {
        label: 'Speakeasy Barware & Night-of Styling',
        desc: 'Atmospheric cocktail lounge mood, metallic accents, and party guides.',
        image: getImagePath('vip-night.jpg'),
      },
      {
        label: 'Late-Night Party Glow',
        desc: 'Intimate glowing candle cues and curated late-night playlist sequencing.',
        image: getImagePath('twilight-dinner.jpg'),
      },
    ],
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
    image: getImagePath('cake-garden.jpg'),
    gallery: [
      {
        label: 'Artisanal Cake Display & Florals',
        desc: 'Pedestal ceramic cake stand, fresh botanical arrangement, and cake topper.',
        image: getImagePath('cake-garden.jpg'),
      },
      {
        label: 'Sunlit Botanical Table Setting',
        desc: 'Botanical runners, outdoor lanterns, and seed packet celebration favors.',
        image: getImagePath('garden-club.jpg'),
      },
      {
        label: 'Candlelit Keepsake Moment',
        desc: 'Warm beeswax taper candles, textured linen runner, and custom memory cards.',
        image: getImagePath('twilight-dinner.jpg'),
      },
    ],
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
    image: getImagePath('family-festival.jpg'),
    gallery: [
      {
        label: 'Games & Garlands Unpacked',
        desc: 'Festive paper garlands, wooden party games, and interactive party props.',
        image: getImagePath('family-festival.jpg'),
      },
      {
        label: 'Patio & Backyard Atmosphere',
        desc: 'Lush greenery, hanging lanterns, and weather-ready picnic styling.',
        image: getImagePath('garden-club.jpg'),
      },
      {
        label: 'Sweet Treats & Cake Time',
        desc: 'Pedestal cake stand, celebration flags, and colorful celebration journals.',
        image: getImagePath('cake-garden.jpg'),
      },
    ],
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
    image: getImagePath('twilight-dinner.jpg'),
    gallery: [
      {
        label: 'Candlelit Centerpiece & Menus',
        desc: 'Solid brass holders, organic beeswax tapers, and fine textured linen runner.',
        image: getImagePath('twilight-dinner.jpg'),
      },
      {
        label: 'Lounge Decanter & Nightcap',
        desc: 'Crystal decanter styling, brass accents, and curated dinner vinyl playlist.',
        image: getImagePath('vip-night.jpg'),
      },
      {
        label: 'Botanical Cake Reveal',
        desc: 'Ceramic cake plates, floral centerpiece accents, and gold-foiled menu stationery.',
        image: getImagePath('cake-garden.jpg'),
      },
    ],
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
    image: getImagePath('garden-club.jpg'),
    gallery: [
      {
        label: 'Botanical Garlands & Lanterns',
        desc: 'Fresh-look greenery runners, brass glass lanterns, and outdoor signs.',
        image: getImagePath('garden-club.jpg'),
      },
      {
        label: 'Artisanal Cake & Floral Accents',
        desc: 'Pedestal cake stand, garden rose centerpieces, and seed paper favors.',
        image: getImagePath('cake-garden.jpg'),
      },
      {
        label: 'Celebration Games & Keepsakes',
        desc: 'Lawn games, celebration journal cards, and festive photo keepsakes.',
        image: getImagePath('family-festival.jpg'),
      },
    ],
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
    image: getImagePath('vip-night.jpg'),
    gallery: [
      {
        label: 'Speakeasy Bar & Glassware',
        desc: 'Crystal barware, brushed brass party accessories, and matte black keepsake box.',
        image: getImagePath('vip-night.jpg'),
      },
      {
        label: 'Neon Ambient Party Cues',
        desc: 'Curated atmospheric lighting cues, sound sequence playbook, and party glow.',
        image: getImagePath('neon-bash.jpg'),
      },
      {
        label: 'Candlelit VIP Table Setting',
        desc: 'Mood lighting, wax-sealed VIP invites, and bespoke run-of-show scrolls.',
        image: getImagePath('twilight-dinner.jpg'),
      },
    ],
  },
];

export const getBox = (id) => BIRTHDAY_BOXES.find((b) => b.id === id);
export { getImagePath };

