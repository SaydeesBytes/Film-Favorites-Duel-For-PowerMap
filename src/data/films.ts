import {
  DeckMode,
  FilmCategory,
  FilmItem,
  OutagePersona,
  OutagePersonaId,
} from '../types/game';

export const OUTAGE_PERSONAS: Record<OutagePersonaId, OutagePersona> = {
  'balcony-commander': {
    id: 'balcony-commander',
    title: 'The "Up NEPA!" Balcony Commander',
    tagline: 'First on the estate WhatsApp group before the transformer even cools.',
    vibeBadge: 'Tactical Grid Watcher',
    description:
      'When light goes out, you step straight onto the balcony to check if it is just your phase or the whole street. You already know three cafés with steady inverter Wi-Fi and you coordinate backup plans like an Avengers briefing.',
    signatureMove:
      'Leaning over the railing to shout "Who else lost light?" across four compounds.',
    survivalKit: [
      'Dual-SIM Hotspot',
      'Estate Group Chat Intel',
      'Live PowerMap Radar',
    ],
    powerMapTip:
      'Skip asking neighbors in the dark—check live neighborhood power streaks on powermap.tech before your laptop hits 8%.',
    accentColor: '#E84A3C',
    cardBg: '#FFF4ED',
  },
  'hand-fan-romantic': {
    id: 'hand-fan-romantic',
    title: 'The Hand-Fan & Cold Pure Water Romantic',
    tagline: 'Turns a 9 PM blackout into a candlelit main-character montage.',
    vibeBadge: 'Suya & Soft Breeze',
    description:
      'Zero panic, maximum yearning. You crack open the windows, grab a woven hand-fan, share cold pure water on the veranda, and turn a sweaty Lagos blackout into an indie rom-com third act.',
    signatureMove:
      'Propping a rechargeable ring light on a stack of books for warm, flattering ambience.',
    survivalKit: [
      'Woven Rafia Hand-Fan',
      'Rechargeable Ring Light',
      'Extra Spicy Suya Wrap',
    ],
    powerMapTip:
      'Plan date nights around steady streets—spot which zones actually have light right now on powermap.tech.',
    accentColor: '#D67C92',
    cardBg: '#FFF0F5',
  },
  'gen-syndicate': {
    id: 'gen-syndicate',
    title: 'The Midnight Gen-Starter Strategist',
    tagline: 'Fuel reserves locked, changeover switch mastered, zero wasted watts.',
    vibeBadge: 'Changeover Boss',
    description:
      'You treat power outages like a high-stakes family empire. You know the exact litre-per-hour burn rate of your generator, guard the black-market jerrycan, and make an offer nobody refuses when it is time to split fuel money.',
    signatureMove:
      'Flipping the changeover switch with one smooth wrist flick while everyone cheers.',
    survivalKit: [
      '25L Reserve Jerrycan',
      'Heavy-Duty Extension Box',
      'Noise-Cancelling Earbuds',
    ],
    powerMapTip:
      'Save fuel money—check powermap.tech to see when grid supply usually returns in your area before starting the gen.',
    accentColor: '#2D1E2F',
    cardBg: '#F6EFE6',
  },
  'nollywood-monarch': {
    id: 'nollywood-monarch',
    title: 'The Candlelight Drama Monarch',
    tagline: 'Light goes out and you immediately deliver a two-part parlour monologue.',
    vibeBadge: 'Classic VCD Energy',
    description:
      'You refuse to suffer in silence. The second the AC winds down, you light a pillar candle, drape a wrapper dramatically, and turn a two-hour outage into peak 2000s Nollywood suspense with your housemates.',
    signatureMove:
      'Holding a phone torch under your chin while asking, "So nobody bought prepaid units?"',
    survivalKit: [
      'Scented Pillar Candles',
      'Dramatic Side-Eye',
      'Downloaded Classic Movies',
    ],
    powerMapTip:
      'Keep the plot twist stress-free—track real-time outage reports across the city on powermap.tech.',
    accentColor: '#C87D20',
    cardBg: '#FFF8E4',
  },
  'chaotic-improviser': {
    id: 'chaotic-improviser',
    title: 'The Multiverse Blackout Improviser',
    tagline: 'Charges a phone off a laptop off a car battery while frying plantain.',
    vibeBadge: 'Pure Naija Ingenuity',
    description:
      'Physics bends around you during a blackout. You will daisy-chain three adapters, cook midnight noodles by phone flashlight, and somehow turn total darkness into an unplanned living-room festival.',
    signatureMove:
      'Shouting "Wait, my power bank is at 4%—who has Type-C to Type-C?"',
    survivalKit: [
      '3-Way Octopus Cable',
      'Camp Gas Burner',
      'Bluetooth Speaker at 18%',
    ],
    powerMapTip:
      'Channel that chaotic genius smarter—find the closest powered hub on powermap.tech before your final adapter dies.',
    accentColor: '#38B28B',
    cardBg: '#EEF9F4',
  },
  'analog-vintage': {
    id: 'analog-vintage',
    title: 'The Unbothered Analog Vintage',
    tagline: 'Lights a match, opens a paperback, and pretends Wi-Fi was never invented.',
    vibeBadge: '1950s Cool',
    description:
      'While everybody else refreshes their network bars, you pour a chilled drink, pull out a dusty novel or journal, and coast through the blackout with timeless old-Hollywood poise.',
    signatureMove:
      'Saying "Honestly, the silence is kind of nice" while everyone else sweats.',
    survivalKit: [
      'Paperback Mystery Novel',
      'Chilled Glass of Malt',
      'Pocket Brass Flashlight',
    ],
    powerMapTip:
      'Even analog legends need a charge eventually—peek at powermap.tech when you are ready to rejoin the grid.',
    accentColor: '#4E7B78',
    cardBg: '#EFF6F5',
  },
  'choir-optimist': {
    id: 'choir-optimist',
    title: 'The High-Voltage Hallway Optimist',
    tagline: 'Zero chill, 100% vibes—starts acapella karaoke the moment light goes.',
    vibeBadge: 'Harmonies in the Dark',
    description:
      'An outage cannot dim your aura. Within five minutes you are leading hallway harmonies, hosting improv trivia, and keeping morale dangerously high until the inverter beeps its last breath.',
    signatureMove:
      'Starting a full-volume chorus of a 2000s banger the exact second NEPA strikes.',
    survivalKit: [
      'Acoustic Vibes Only',
      'Mini Rechargeable Fan',
      'Emergency Chin-Chin Jar',
    ],
    powerMapTip:
      'Keep the afterparty going—check powermap.tech to see which neighborhood just got "Up NEPA!" vibes.',
    accentColor: '#E84A3C',
    cardBg: '#FFF3F0',
  },
  'powerbank-cartel': {
    id: 'powerbank-cartel',
    title: 'The Stealth PowerBank Cartel',
    tagline: 'Walks around with 60,000mAh in a tote bag like a walking substation.',
    vibeBadge: 'Always at 100%',
    description:
      'Friends treat your backpack like a public charging kiosk. You have a solar lantern, a mini clip-on fan, two MiFis, and a backup battery solely for your primary backup battery.',
    signatureMove:
      'Silently plugging in your fourth device while everyone asks how your phone is still alive.',
    survivalKit: [
      'Two 30,000mAh Bricks',
      'USB Clip-On Desk Fan',
      'Pocket 4G MiFi',
    ],
    powerMapTip:
      'Pair your hardware prep with real-time grid visibility on powermap.tech—never get caught off-guard.',
    accentColor: '#3D5A80',
    cardBg: '#EFF4FA',
  },
};

export const FILMS: FilmItem[] = [
  // ROM-COMS
  {
    id: 'ten-things',
    title: '10 Things I Hate About You',
    year: 1999,
    category: 'Rom-Coms',
    directorOrCreator: 'Gil Junger',
    tagline: 'Bleacher serenades, paintball chaos, and sharp 90s wit.',
    motif: 'ten-things',
    palette: {
      bg: '#FFE2EA',
      bgSecondary: '#F4A9BE',
      ink: '#2D1E2F',
      accent: '#E84A3C',
      highlight: '#D4EC6E',
    },
    personaId: 'hand-fan-romantic',
    personalVerdict:
      'Choosing Kat & Patrick means you bring poetic stubbornness and roof-top charm straight into a hot blackout.',
  },
  {
    id: 'notting-hill',
    title: 'Notting Hill',
    year: 1999,
    category: 'Rom-Coms',
    directorOrCreator: 'Roger Michell',
    tagline: 'Blue doors, travel bookshops, and quiet rainy romance.',
    motif: 'notting-hill',
    palette: {
      bg: '#E3F1EE',
      bgSecondary: '#62B1AB',
      ink: '#2D1E2F',
      accent: '#2B5B84',
      highlight: '#F3AE3D',
    },
    personaId: 'analog-vintage',
    personalVerdict:
      'A classic bookshop romantic—you wait out the blackout with warm candlelight and calm British composure.',
  },
  {
    id: 'lose-a-guy',
    title: 'How to Lose a Guy in 10 Days',
    year: 2003,
    category: 'Rom-Coms',
    directorOrCreator: 'Donald Petrie',
    tagline: 'Yellow satin gowns, love ferns, and competitive flirting.',
    motif: 'lose-a-guy',
    palette: {
      bg: '#FFF3C4',
      bgSecondary: '#F3AE3D',
      ink: '#2D1E2F',
      accent: '#E84A3C',
      highlight: '#D4EC6E',
    },
    personaId: 'choir-optimist',
    personalVerdict:
      'High-energy charm and playful scheming—you turn even a 10-hour outage into a memorable game night.',
  },
  {
    id: 'crazy-rich',
    title: 'Crazy Rich Asians',
    year: 2018,
    category: 'Rom-Coms',
    directorOrCreator: 'Jon M. Chu',
    tagline: 'Mahjong showdowns, garden weddings, and emerald glamour.',
    motif: 'crazy-rich',
    palette: {
      bg: '#E2F3E9',
      bgSecondary: '#38B28B',
      ink: '#2D1E2F',
      accent: '#C87D20',
      highlight: '#D4EC6E',
    },
    personaId: 'hand-fan-romantic',
    personalVerdict:
      'Even without NEPA, your aesthetic stays immaculate—chilled drinks, silk fans, and effortless poise.',
  },

  // OLD NOLLYWOOD
  {
    id: 'omotara-johnson',
    title: 'Omotara Johnson',
    year: 2006,
    category: 'Old Nollywood',
    directorOrCreator: 'Kunle Afolayan / Heritage Classics',
    tagline: 'Velvet family secrets, parlour showdowns, and golden VCD era.',
    motif: 'omotara',
    palette: {
      bg: '#FCE8D5',
      bgSecondary: '#E88B5A',
      ink: '#2D1E2F',
      accent: '#B8332A',
      highlight: '#F3AE3D',
    },
    personaId: 'nollywood-monarch',
    personalVerdict:
      'An undisputed Old Nollywood crown! You handle NEPA taking light with unforgettable parlour drama and royal composure.',
  },
  {
    id: 'living-in-bondage',
    title: 'Living in Bondage',
    year: 1992,
    category: 'Old Nollywood',
    directorOrCreator: 'Chris Obi Rapu',
    tagline: 'The 1992 home-video revolution that started an era.',
    motif: 'living-in-bondage',
    palette: {
      bg: '#F3E3EC',
      bgSecondary: '#9D4E6D',
      ink: '#2D1E2F',
      accent: '#E84A3C',
      highlight: '#F3AE3D',
    },
    personaId: 'gen-syndicate',
    personalVerdict:
      'Old-school grit and late-night ambition—you keep a secret fuel reserve and never let the house go dark for long.',
  },
  {
    id: 'osuofia-london',
    title: 'Osuofia in London',
    year: 2003,
    category: 'Old Nollywood',
    directorOrCreator: 'Kingsley Ogoro',
    tagline: 'Village swagger meets red double-decker buses.',
    motif: 'osuofia',
    palette: {
      bg: '#FFE7DE',
      bgSecondary: '#E84A3C',
      ink: '#2D1E2F',
      accent: '#2B5B84',
      highlight: '#D4EC6E',
    },
    personaId: 'chaotic-improviser',
    personalVerdict:
      'Pure comedic survival instinct! Nothing—not London traffic or a 14-hour outage—can rattle your street smarts.',
  },
  {
    id: 'nneka-serpent',
    title: 'Nneka the Pretty Serpent',
    year: 1994,
    category: 'Old Nollywood',
    directorOrCreator: 'Zeb Ejiro',
    tagline: '90s VHS mysticism, bold eyeliner, and timeless suspense.',
    motif: 'nneka',
    palette: {
      bg: '#E4F0E2',
      bgSecondary: '#548C67',
      ink: '#2D1E2F',
      accent: '#D67C92',
      highlight: '#D4EC6E',
    },
    personaId: 'nollywood-monarch',
    personalVerdict:
      'Mysterious, cinematic, and slightly terrifying when someone touches your last 10% battery.',
  },

  // MARVEL & CULT
  {
    id: 'glee',
    title: 'Glee',
    year: 2009,
    category: 'Marvel & Cult',
    directorOrCreator: 'Ryan Murphy / Brad Falchuk',
    tagline: 'Red slushies, hallway showstoppers, and chaotic choir practice.',
    motif: 'glee',
    palette: {
      bg: '#FFE5E0',
      bgSecondary: '#E84A3C',
      ink: '#2D1E2F',
      accent: '#2B5B84',
      highlight: '#F3AE3D',
    },
    personaId: 'choir-optimist',
    personalVerdict:
      'Wait—the power went out? Perfect excuse to launch into an unprompted living-room duet until light returns.',
  },
  {
    id: 'endgame',
    title: 'Avengers: Endgame',
    year: 2019,
    category: 'Marvel & Cult',
    directorOrCreator: 'Anthony & Joe Russo',
    tagline: 'Portals opening, final stands, and "Whatever it takes."',
    motif: 'endgame',
    palette: {
      bg: '#E8E2F6',
      bgSecondary: '#7B68A8',
      ink: '#2D1E2F',
      accent: '#E84A3C',
      highlight: '#F3AE3D',
    },
    personaId: 'balcony-commander',
    personalVerdict:
      'Whatever it takes! You rally the whole estate chat to track which transformer is live and mount a charging mission.',
  },
  {
    id: 'guardians',
    title: 'Guardians of the Galaxy',
    year: 2014,
    category: 'Marvel & Cult',
    directorOrCreator: 'James Gunn',
    tagline: 'Orange cassette walkman, starships, and cosmic mischief.',
    motif: 'guardians',
    palette: {
      bg: '#FFE8D2',
      bgSecondary: '#E57A44',
      ink: '#2D1E2F',
      accent: '#3D5A80',
      highlight: '#D4EC6E',
    },
    personaId: 'chaotic-improviser',
    personalVerdict:
      'Awesome Mix Vol. 1 on a 15% phone speaker while rigging up emergency lighting from pure vibes.',
  },
  {
    id: 'no-way-home',
    title: 'Spider-Man: No Way Home',
    year: 2021,
    category: 'Marvel & Cult',
    directorOrCreator: 'Jon Watts',
    tagline: 'Three eras colliding on a rainy rooftop.',
    motif: 'no-way-home',
    palette: {
      bg: '#E2EAF7',
      bgSecondary: '#4A77B5',
      ink: '#2D1E2F',
      accent: '#E84A3C',
      highlight: '#F3AE3D',
    },
    personaId: 'powerbank-cartel',
    personalVerdict:
      'Always prepared across every timeline—you carry three backup cables and keep the squad connected.',
  },

  // OLD HOLLYWOOD
  {
    id: 'casablanca',
    title: 'Casablanca',
    year: 1942,
    category: 'Old Hollywood',
    directorOrCreator: 'Michael Curtiz',
    tagline: 'Foggy runways, piano ballads, and timeless silver-screen cool.',
    motif: 'casablanca',
    palette: {
      bg: '#F4EFE4',
      bgSecondary: '#A89F8D',
      ink: '#2D1E2F',
      accent: '#B8332A',
      highlight: '#F3AE3D',
    },
    personaId: 'analog-vintage',
    personalVerdict:
      'Here’s looking at you, NEPA. You pour something cold, lean back, and stay completely unbothered.',
  },
  {
    id: 'tiffany',
    title: "Breakfast at Tiffany's",
    year: 1961,
    category: 'Old Hollywood',
    directorOrCreator: 'Blake Edwards',
    tagline: 'Fifth Avenue mornings, dark sunglasses, and Moon River.',
    motif: 'tiffany',
    palette: {
      bg: '#DDF4F1',
      bgSecondary: '#62B1AB',
      ink: '#2D1E2F',
      accent: '#D67C92',
      highlight: '#F3AE3D',
    },
    personaId: 'analog-vintage',
    personalVerdict:
      'Sunglasses on even in the dark. You turn an evening power cut into an effortless slow-living ritual.',
  },
  {
    id: 'godfather',
    title: 'The Godfather',
    year: 1972,
    category: 'Old Hollywood',
    directorOrCreator: 'Francis Ford Coppola',
    tagline: 'Red roses, shadowed studies, and quiet family authority.',
    motif: 'godfather',
    palette: {
      bg: '#F2E7E4',
      bgSecondary: '#7A5458',
      ink: '#2D1E2F',
      accent: '#C93B32',
      highlight: '#F3AE3D',
    },
    personaId: 'gen-syndicate',
    personalVerdict:
      'You run the compound generator schedule with iron discipline—nobody wastes watts under your roof.',
  },
  {
    id: 'singin-rain',
    title: "Singin' in the Rain",
    year: 1952,
    category: 'Old Hollywood',
    directorOrCreator: 'Stanley Donen & Gene Kelly',
    tagline: 'Yellow raincoats, streetlamp tap-dancing, and Technicolor joy.',
    motif: 'singin-rain',
    palette: {
      bg: '#FFF5CC',
      bgSecondary: '#F3AE3D',
      ink: '#2D1E2F',
      accent: '#3D7E9A',
      highlight: '#D4EC6E',
    },
    personaId: 'choir-optimist',
    personalVerdict:
      'Rainstorm knocked out the grid? You are outside enjoying the breeze and humming classic hooks.',
  },

  // RECENT BLOCKBUSTERS (2011–2025)
  {
    id: 'eeaao',
    title: 'Everything Everywhere All at Once',
    year: 2022,
    category: 'Recent Blockbusters',
    directorOrCreator: 'Daniel Kwan & Daniel Scheinert',
    tagline: 'Googly eyes, laundromat portals, and glorious chaos.',
    motif: 'eeaao',
    palette: {
      bg: '#FCE6F0',
      bgSecondary: '#D67C92',
      ink: '#2D1E2F',
      accent: '#38B28B',
      highlight: '#D4EC6E',
    },
    personaId: 'chaotic-improviser',
    personalVerdict:
      'You operate in 14 dimensions at once during a blackout—cooking, charging, and cracking jokes simultaneously.',
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    category: 'Recent Blockbusters',
    directorOrCreator: 'Joaquim Dos Santos et al.',
    tagline: 'Halftone skylines, cassette beats, and vibrant leaps of faith.',
    motif: 'spider-verse',
    palette: {
      bg: '#FFE4EC',
      bgSecondary: '#E84A3C',
      ink: '#2D1E2F',
      accent: '#2B5B84',
      highlight: '#D4EC6E',
    },
    personaId: 'powerbank-cartel',
    personalVerdict:
      'Fast, colorful, and hyper-prepared—you keep your gear charged and your route mapped before anyone else moves.',
  },
  {
    id: 'black-panther',
    title: 'Black Panther',
    year: 2018,
    category: 'Recent Blockbusters',
    directorOrCreator: 'Ryan Coogler',
    tagline: 'Vibranium energy, royal heritage, and futuristic pride.',
    motif: 'black-panther',
    palette: {
      bg: '#EAE4F5',
      bgSecondary: '#6F5899',
      ink: '#2D1E2F',
      accent: '#C87D20',
      highlight: '#D4EC6E',
    },
    personaId: 'balcony-commander',
    personalVerdict:
      'Wakanda-grade grid awareness! You coordinate backup power for the whole squad with calm strategic authority.',
  },
  {
    id: 'dune-two',
    title: 'Dune: Part Two',
    year: 2024,
    category: 'Recent Blockbusters',
    directorOrCreator: 'Denis Villeneuve',
    tagline: 'Blazing twin suns, desert horizons, and epic survival.',
    motif: 'dune-two',
    palette: {
      bg: '#FAE7CF',
      bgSecondary: '#D98A4E',
      ink: '#2D1E2F',
      accent: '#2D1E2F',
      highlight: '#F3AE3D',
    },
    personaId: 'gen-syndicate',
    personalVerdict:
      'Desert survival mode activated—every drop of fuel and every percentage of battery is rationed to perfection.',
  },
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Builds a wildly mismatched cross-category tournament deck.
 * Ensures representation from all 5 categories and avoids adjacent films
 * from the exact same category so every pairing feels surprising.
 */
export function buildTournamentDeck(mode: DeckMode): FilmItem[] {
  const targetCount = mode === 'quick' ? 8 : 12;

  const categories: FilmCategory[] = [
    'Old Nollywood',
    'Old Hollywood',
    'Recent Blockbusters',
    'Rom-Coms',
    'Marvel & Cult',
  ];

  // Pick at least 1 guaranteed film from each of the 5 categories first
  const seeded: FilmItem[] = [];
  const usedIds = new Set<string>();

  for (const cat of shuffleArray(categories)) {
    const pool = shuffleArray(FILMS.filter((f) => f.category === cat));
    if (pool.length > 0) {
      seeded.push(pool[0]);
      usedIds.add(pool[0].id);
    }
  }

  // Fill remaining slots from shuffled remaining films
  const remaining = shuffleArray(FILMS.filter((f) => !usedIds.has(f.id)));
  const combined = [...seeded, ...remaining.slice(0, targetCount - seeded.length)];

  // Order deck so adjacent categories are mismatched whenever possible
  const pool = shuffleArray(combined);
  const ordered: FilmItem[] = [];

  while (pool.length > 0) {
    const lastCat = ordered.length > 0 ? ordered[ordered.length - 1].category : null;
    const diffIdx = pool.findIndex((item) => item.category !== lastCat);
    const chosenIdx = diffIdx !== -1 ? diffIdx : 0;
    ordered.push(pool.splice(chosenIdx, 1)[0]);
  }

  return ordered;
}

export function getMismatchCommentary(
  champion: FilmItem,
  challenger: FilmItem,
  round: number,
  totalRounds: number,
  streak: number
): string {
  if (round === totalRounds) {
    return `Final showdown! ${champion.title} faces ${challenger.title} for the Naija blackout crown.`;
  }
  if (streak >= 3) {
    return `${champion.title} is on a ${streak}-round streak! Can ${challenger.category} favorite ${challenger.title} take it down?`;
  }
  if (round === 1) {
    return `${champion.category} vs ${challenger.category}—pick the one that stays standing.`;
  }
  if (champion.category !== challenger.category) {
    return `Wild crossover: ${champion.category} meets ${challenger.category}. Who survives the next round?`;
  }
  return `Same-era clash! Choose wisely—your winner stays on the board.`;
}
