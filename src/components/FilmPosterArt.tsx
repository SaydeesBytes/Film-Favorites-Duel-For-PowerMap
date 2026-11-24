import React from 'react';
import { FilmItem } from '../types/game';

interface FilmPosterArtProps {
  film: FilmItem;
  compact?: boolean;
}

export const FilmPosterArt: React.FC<FilmPosterArtProps> = ({
  film,
  compact = false,
}) => {
  const { bg, bgSecondary, ink, accent, highlight } = film.palette;

  const renderMotif = () => {
    switch (film.motif) {
      case 'ten-things':
        return (
          <g>
            {/* Paintball splatters + acoustic guitar + locker note */}
            <circle cx="52" cy="54" r="22" fill={highlight} stroke={ink} strokeWidth="2.5" />
            <circle cx="152" cy="64" r="16" fill={accent} stroke={ink} strokeWidth="2.5" />
            <circle cx="138" cy="148" r="12" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            {/* Retro Guitar Body */}
            <ellipse cx="100" cy="126" rx="34" ry="26" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <ellipse cx="100" cy="94" rx="22" ry="18" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <circle cx="100" cy="116" r="11" fill={ink} />
            <rect x="95" y="42" width="10" height="58" rx="3" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            <rect x="91" y="34" width="18" height="14" rx="3" fill={accent} stroke={ink} strokeWidth="2.5" />
            {/* Heart Stamp */}
            <path
              d="M148 112 C148 104 160 104 160 112 C160 104 172 104 172 112 C172 122 160 130 160 130 C160 130 148 122 148 112 Z"
              fill={accent}
              stroke={ink}
              strokeWidth="2.5"
            />
          </g>
        );

      case 'glee':
        return (
          <g>
            {/* Red Slushie Cup + Megaphone + Music Notes */}
            <path d="M56 76 L88 76 L82 146 L62 146 Z" fill={accent} stroke={ink} strokeWidth="3" />
            <path d="M52 76 C52 60 92 60 92 76 Z" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <line x1="74" y1="64" x2="84" y2="38" stroke={highlight} strokeWidth="5" strokeLinecap="round" />
            <line x1="74" y1="64" x2="84" y2="38" stroke={ink} strokeWidth="2" strokeLinecap="round" />
            {/* Megaphone */}
            <path d="M110 106 L160 76 L160 140 L110 120 Z" fill={highlight} stroke={ink} strokeWidth="3" />
            <rect x="104" y="104" width="10" height="20" rx="2" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            {/* Music Note */}
            <circle cx="136" cy="54" r="8" fill={ink} />
            <path d="M143 54 L143 32 L162 28 L162 48" fill="none" stroke={ink} strokeWidth="3.5" />
            <circle cx="155" cy="49" r="8" fill={ink} />
          </g>
        );

      case 'omotara':
        return (
          <g>
            {/* Golden Nollywood VCD + Royal Coral Beads + Crown */}
            <circle cx="100" cy="102" r="52" fill={highlight} stroke={ink} strokeWidth="3" />
            <circle cx="100" cy="102" r="36" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            <circle cx="100" cy="102" r="14" fill={bg} stroke={ink} strokeWidth="2.5" />
            {/* Crown silhouette on top */}
            <path
              d="M66 64 L74 40 L90 54 L100 34 L110 54 L126 40 L134 64 Z"
              fill={accent}
              stroke={ink}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Coral bead necklace arc */}
            <circle cx="62" cy="144" r="6" fill={accent} stroke={ink} strokeWidth="2" />
            <circle cx="77" cy="151" r="6.5" fill={accent} stroke={ink} strokeWidth="2" />
            <circle cx="93" cy="154" r="7" fill={accent} stroke={ink} strokeWidth="2" />
            <circle cx="109" cy="154" r="7" fill={accent} stroke={ink} strokeWidth="2" />
            <circle cx="125" cy="151" r="6.5" fill={accent} stroke={ink} strokeWidth="2" />
            <circle cx="140" cy="144" r="6" fill={accent} stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'living-in-bondage':
        return (
          <g>
            {/* Vintage VHS Cassette */}
            <rect x="34" y="64" width="132" height="84" rx="6" fill="#2D1E2F" stroke={ink} strokeWidth="3" />
            <rect x="46" y="76" width="108" height="38" rx="4" fill={highlight} stroke={ink} strokeWidth="2.5" />
            <circle cx="72" cy="95" r="11" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            <circle cx="128" cy="95" r="11" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            <rect x="88" y="88" width="24" height="14" fill={ink} />
            <rect x="54" y="124" width="92" height="14" rx="2" fill={accent} stroke={ink} strokeWidth="2" />
            {/* Dramatic Lightning / Spotlight */}
            <path d="M104 28 L90 50 L102 50 L94 64 L114 44 L102 44 Z" fill={accent} stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'osuofia':
        return (
          <g>
            {/* Red London Double-Decker Bus + Suitcase */}
            <rect x="42" y="56" width="116" height="72" rx="10" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <rect x="52" y="66" width="22" height="18" rx="2" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <rect x="80" y="66" width="22" height="18" rx="2" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <rect x="108" y="66" width="22" height="18" rx="2" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <rect x="136" y="66" width="14" height="18" rx="2" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <rect x="52" y="96" width="32" height="20" rx="2" fill={highlight} stroke={ink} strokeWidth="2" />
            <rect x="92" y="96" width="58" height="20" rx="2" fill={highlight} stroke={ink} strokeWidth="2" />
            <circle cx="66" cy="130" r="13" fill="#2D1E2F" stroke={ink} strokeWidth="2.5" />
            <circle cx="66" cy="130" r="5" fill="#FFFFFF" />
            <circle cx="134" cy="130" r="13" fill="#2D1E2F" stroke={ink} strokeWidth="2.5" />
            <circle cx="134" cy="130" r="5" fill="#FFFFFF" />
            {/* Big Ben clock peek */}
            <circle cx="100" cy="40" r="12" fill={highlight} stroke={ink} strokeWidth="2.5" />
            <path d="M100 34 L100 40 L105 42" stroke={ink} strokeWidth="2" fill="none" />
          </g>
        );

      case 'nneka':
        return (
          <g>
            {/* Mystical Emerald Medallion & Serpent Wave */}
            <circle cx="100" cy="96" r="46" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <path
              d="M66 132 C66 96 134 108 134 72 C134 52 108 42 94 56 C80 70 112 86 100 112"
              fill="none"
              stroke={highlight}
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M66 132 C66 96 134 108 134 72 C134 52 108 42 94 56 C80 70 112 86 100 112"
              fill="none"
              stroke={ink}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="96" cy="54" r="4" fill={accent} />
            <polygon points="100,28 106,42 94,42" fill={accent} stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'casablanca':
        return (
          <g>
            {/* Art Deco Runway Arch + Propeller Plane + Fedora */}
            <path d="M44 146 L44 76 C44 42 156 42 156 76 L156 146 Z" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <circle cx="100" cy="84" r="24" fill={highlight} stroke={ink} strokeWidth="2.5" />
            {/* Plane Silhouette */}
            <path
              d="M60 88 L96 80 L108 58 L116 58 L110 80 L138 78 L144 86 L110 92 L114 106 L104 106 L96 92 L60 92 Z"
              fill={ink}
            />
            {/* Piano Keys at bottom */}
            <rect x="52" y="122" width="96" height="24" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            <rect x="64" y="122" width="10" height="14" fill={ink} />
            <rect x="82" y="122" width="10" height="14" fill={ink} />
            <rect x="108" y="122" width="10" height="14" fill={ink} />
            <rect x="126" y="122" width="10" height="14" fill={ink} />
          </g>
        );

      case 'tiffany':
        return (
          <g>
            {/* Iconic Cat-Eye Sunglasses + Croissant + Pearls */}
            <path
              d="M36 74 L84 82 C88 108 56 116 42 96 Z"
              fill={ink}
              stroke={ink}
              strokeWidth="3"
            />
            <path
              d="M164 74 L116 82 C112 108 144 116 158 96 Z"
              fill={ink}
              stroke={ink}
              strokeWidth="3"
            />
            <line x1="84" y1="84" x2="116" y2="84" stroke={ink} strokeWidth="4" />
            {/* Pearl Necklace */}
            <circle cx="74" cy="130" r="6" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <circle cx="90" cy="136" r="7" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <circle cx="110" cy="136" r="7" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <circle cx="126" cy="130" r="6" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            {/* Diamond Sparkle */}
            <path d="M100 34 L106 48 L120 54 L106 60 L100 74 L94 60 L80 54 L94 48 Z" fill={highlight} stroke={ink} strokeWidth="2.5" />
          </g>
        );

      case 'godfather':
        return (
          <g>
            {/* Tuxedo Lapel + Crimson Rose */}
            <polygon points="48,148 76,56 100,118" fill={ink} />
            <polygon points="152,148 124,56 100,118" fill={ink} />
            <polygon points="76,56 124,56 100,118" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            {/* Bowtie */}
            <polygon points="82,66 100,74 82,82" fill={ink} />
            <polygon points="118,66 100,74 118,82" fill={ink} />
            {/* Red Rose on Lapel */}
            <circle cx="128" cy="96" r="14" fill={accent} stroke={ink} strokeWidth="2.5" />
            <path d="M122 96 C122 90 134 90 134 96 C134 102 124 104 122 96 Z" fill={highlight} stroke={ink} strokeWidth="2" />
            <line x1="128" y1="110" x2="128" y2="128" stroke="#38B28B" strokeWidth="3" />
          </g>
        );

      case 'singin-rain':
        return (
          <g>
            {/* Classic Streetlamp + Umbrella + Raindrops */}
            <line x1="62" y1="42" x2="62" y2="148" stroke={ink} strokeWidth="5" />
            <polygon points="50,46 74,46 68,30 56,30" fill={highlight} stroke={ink} strokeWidth="2.5" />
            {/* Umbrella */}
            <path d="M84 96 C84 62 152 62 152 96 Z" fill={accent} stroke={ink} strokeWidth="3" />
            <path d="M118 96 L118 136 C118 144 108 144 108 136" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" />
            {/* Raindrops */}
            <ellipse cx="94" cy="48" rx="4" ry="7" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <ellipse cx="144" cy="54" rx="4" ry="7" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <ellipse cx="154" cy="116" rx="4" ry="7" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'eeaao':
        return (
          <g>
            {/* Everything Bagel + Googly Eyes */}
            <circle cx="100" cy="98" r="46" fill={ink} />
            <circle cx="100" cy="98" r="16" fill={bg} stroke={ink} strokeWidth="3" />
            {/* Googly Eye Left */}
            <circle cx="62" cy="64" r="18" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <circle cx="67" cy="68" r="8" fill={ink} />
            {/* Googly Eye Right */}
            <circle cx="138" cy="126" r="18" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <circle cx="132" cy="121" r="8" fill={ink} />
            {/* Multiverse Sparkles */}
            <circle cx="144" cy="56" r="8" fill={highlight} stroke={ink} strokeWidth="2" />
            <circle cx="56" cy="134" r="7" fill={accent} stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'spider-verse':
        return (
          <g>
            {/* Halftone Portal Rings + Spider Emblem */}
            <circle cx="100" cy="96" r="50" fill={highlight} stroke={ink} strokeWidth="3" />
            <circle cx="100" cy="96" r="34" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            <circle cx="100" cy="96" r="18" fill={accent} stroke={ink} strokeWidth="2.5" />
            {/* Stylized Spider */}
            <ellipse cx="100" cy="96" rx="8" ry="12" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <path d="M92 90 L70 72 M92 96 L66 96 M92 102 L72 122" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <path d="M108 90 L130 72 M108 96 L134 96 M108 102 L128 122" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </g>
        );

      case 'black-panther':
        return (
          <g>
            {/* Vibranium Kinetic Necklace + Geometric Panther Crest */}
            <polygon points="100,40 144,68 134,132 100,150 66,132 56,68" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <polygon points="74,66 86,44 96,62" fill={ink} />
            <polygon points="126,66 114,44 104,62" fill={ink} />
            {/* Glowing Kinetic Visor */}
            <polygon points="72,88 92,94 78,100" fill={highlight} stroke={ink} strokeWidth="2" />
            <polygon points="128,88 108,94 122,100" fill={highlight} stroke={ink} strokeWidth="2" />
            {/* Collar Claws */}
            <polygon points="82,126 88,140 76,140" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <polygon points="100,128 106,144 94,144" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <polygon points="118,126 124,140 112,140" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'dune-two':
        return (
          <g>
            {/* Twin Desert Suns + Sweeping Dunes */}
            <circle cx="80" cy="64" r="24" fill={highlight} stroke={ink} strokeWidth="2.5" />
            <circle cx="122" cy="52" r="14" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            {/* Sand Dunes */}
            <path d="M30 124 Q80 88 136 120 T170 114 L170 152 L30 152 Z" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <path d="M30 138 Q100 110 170 138 L170 152 L30 152 Z" fill={ink} />
          </g>
        );

      case 'notting-hill':
        return (
          <g>
            {/* Iconic Blue Door + Open Book */}
            <rect x="64" y="42" width="72" height="106" rx="36" fill={accent} stroke={ink} strokeWidth="3" />
            <rect x="76" y="88" width="20" height="46" fill={bg} stroke={ink} strokeWidth="2" />
            <rect x="104" y="88" width="20" height="46" fill={bg} stroke={ink} strokeWidth="2" />
            <circle cx="126" cy="108" r="4" fill={highlight} stroke={ink} strokeWidth="2" />
            {/* Little Cloud */}
            <path d="M40 58 C40 48 56 48 58 54 C68 50 76 62 66 66 L44 66 Z" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'lose-a-guy':
        return (
          <g>
            {/* Love Fern in Pot + Diamond Ring */}
            <rect x="76" y="106" width="48" height="40" rx="4" fill={accent} stroke={ink} strokeWidth="3" />
            <path d="M100 106 L82 62 M100 106 L100 50 M100 106 L118 62" stroke="#38B28B" strokeWidth="5" strokeLinecap="round" />
            <ellipse cx="78" cy="64" rx="10" ry="6" fill={highlight} stroke={ink} strokeWidth="2" />
            <ellipse cx="100" cy="48" rx="8" ry="11" fill={highlight} stroke={ink} strokeWidth="2" />
            <ellipse cx="122" cy="64" rx="10" ry="6" fill={highlight} stroke={ink} strokeWidth="2" />
            <circle cx="144" cy="52" r="12" fill="none" stroke={ink} strokeWidth="3" />
            <polygon points="144,34 152,42 136,42" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'crazy-rich':
        return (
          <g>
            {/* Emerald Mahjong Tile + Lotus */}
            <rect x="64" y="46" width="72" height="98" rx="8" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
            <rect x="74" y="56" width="52" height="78" rx="4" fill={bgSecondary} stroke={ink} strokeWidth="2" />
            <circle cx="100" cy="95" r="18" fill={highlight} stroke={ink} strokeWidth="2.5" />
            <circle cx="100" cy="95" r="7" fill={accent} stroke={ink} strokeWidth="2" />
            {/* Corner pips */}
            <circle cx="84" cy="68" r="4" fill="#FFFFFF" />
            <circle cx="116" cy="122" r="4" fill="#FFFFFF" />
          </g>
        );

      case 'endgame':
        return (
          <g>
            {/* Cosmic Shield + Hammer + Infinity Gems */}
            <circle cx="100" cy="98" r="46" fill={accent} stroke={ink} strokeWidth="3" />
            <circle cx="100" cy="98" r="32" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            <circle cx="100" cy="98" r="18" fill={bgSecondary} stroke={ink} strokeWidth="2.5" />
            <polygon points="100,82 104,94 116,94 106,102 110,114 100,106 90,114 94,102 84,94 96,94" fill="#FFFFFF" stroke={ink} strokeWidth="1.5" />
            {/* Infinity Dots */}
            <circle cx="48" cy="52" r="7" fill="#F3AE3D" stroke={ink} strokeWidth="2" />
            <circle cx="152" cy="52" r="7" fill="#38B28B" stroke={ink} strokeWidth="2" />
            <circle cx="48" cy="140" r="7" fill="#62B1AB" stroke={ink} strokeWidth="2" />
            <circle cx="152" cy="140" r="7" fill="#D67C92" stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'guardians':
        return (
          <g>
            {/* Awesome Mix Cassette Tape */}
            <rect x="38" y="58" width="124" height="80" rx="8" fill={bgSecondary} stroke={ink} strokeWidth="3" />
            <rect x="48" y="68" width="104" height="22" rx="3" fill={highlight} stroke={ink} strokeWidth="2" />
            <rect x="56" y="96" width="88" height="26" rx="4" fill="#2D1E2F" />
            <circle cx="78" cy="109" r="8" fill="#FFFFFF" />
            <circle cx="122" cy="109" r="8" fill="#FFFFFF" />
            <polygon points="62,138 138,138 130,126 70,126" fill={accent} stroke={ink} strokeWidth="2" />
          </g>
        );

      case 'no-way-home':
        return (
          <g>
            {/* Multiverse Magic Ring + 3 Web Lines */}
            <circle cx="100" cy="96" r="46" fill="none" stroke={highlight} strokeWidth="7" strokeDasharray="8 5" />
            <circle cx="100" cy="96" r="46" fill="none" stroke={ink} strokeWidth="2" />
            <circle cx="100" cy="96" r="28" fill={accent} stroke={ink} strokeWidth="3" />
            <path d="M100 50 L100 142 M54 96 L146 96 M68 64 L132 128 M132 64 L68 128" stroke={ink} strokeWidth="2" />
            <circle cx="100" cy="96" r="10" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
          </g>
        );
    }
  };

  if (compact) {
    return (
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden border-2 border-[#2D1E2F]"
        style={{ backgroundColor: bg }}
      >
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {renderMotif()}
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-[5/4] overflow-hidden border-2 border-[#2D1E2F] flex flex-col justify-between"
      style={{ backgroundColor: bg }}
    >
      {/* Top Film Strip Corner Marks */}
      <div className="flex items-center justify-between px-3 pt-2.5 text-[11px] font-tabular tracking-tight opacity-85 z-10">
        <span className="font-bold" style={{ color: ink }}>
          {film.year}
        </span>
        <span className="truncate max-w-[65%]" style={{ color: ink }}>
          {film.category}
        </span>
      </div>

      {/* Bespoke Illustrated Centerpiece */}
      <div className="flex-1 flex items-center justify-center px-2">
        <svg
          viewBox="0 0 200 175"
          className="w-full h-full max-h-[185px] drop-shadow-sm"
          aria-hidden="true"
        >
          {renderMotif()}
        </svg>
      </div>

      {/* Bottom Vintage Poster Credits Bar */}
      <div
        className="px-3 py-1.5 border-t-2 border-[#2D1E2F] flex items-center justify-between gap-2 text-[11px] font-medium"
        style={{ backgroundColor: bgSecondary, color: ink }}
      >
        <span className="truncate font-semibold">
          Dir. {film.directorOrCreator}
        </span>
        <span className="font-tabular shrink-0 opacity-85">REEL #{film.id.slice(0, 3).toUpperCase()}</span>
      </div>
    </div>
  );
};
