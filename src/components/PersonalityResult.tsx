import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3,
  Check,
  Crown,
  ExternalLink,
  RotateCcw,
  Share2,
  Zap,
} from 'lucide-react';
import { DuelHistoryEntry, FilmItem } from '../types/game';
import { OUTAGE_PERSONAS } from '../data/films';
import { FilmPosterArt } from './FilmPosterArt';

interface PersonalityResultProps {
  champion: FilmItem;
  history: DuelHistoryEntry[];
  onPlayAgain: () => void;
  onOpenStats: () => void;
}

export const PersonalityResult: React.FC<PersonalityResultProps> = ({
  champion,
  history,
  onPlayAgain,
  onOpenStats,
}) => {
  const [copied, setCopied] = useState(false);
  const persona = OUTAGE_PERSONAS[champion.personaId];

  const defeatedFilms = history.map((entry) => entry.eliminated);

  const handleCopyShare = async () => {
    const shareText = `My final film standing at the PowerMap Booth was "${champion.title}" (${champion.year}) — which makes me: ${persona.title}! "${persona.tagline}" Find out yours & track live power updates at powermap.tech`;
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#FAF3E0] overflow-x-hidden">
      {/* Sunlit Lime & Rose Nostalgic Gradient Band (honoring Image 3) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#D67C92]/25 via-[#D4EC6E]/20 to-transparent"
        aria-hidden="true"
      />

      {/* Top Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <span className="font-pixel text-base sm:text-lg text-[#2D1E2F] whitespace-nowrap shrink-0">
          PowerMap
        </span>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenStats}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#2D1E2F] bg-[#FFFDF8] text-xs font-bold text-[#2D1E2F] hover:bg-[#F4A9BE]/40 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Booth Tally
          </button>
          <button
            type="button"
            onClick={onPlayAgain}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border-2 border-[#2D1E2F] bg-[#E84A3C] text-xs sm:text-sm font-bold text-white retro-shadow-sm retro-btn whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Play Again
          </button>
        </div>
      </header>

      {/* Main Result Card */}
      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFDF8] border-[3px] border-[#2D1E2F] rounded-[24px] p-5 sm:p-8 retro-shadow-lg"
        >
          {/* Two-Column Hero Result Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Column: Crowned Film Poster */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4A9BE]/30 border-2 border-[#2D1E2F] rounded-2xl p-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D1E2F] bg-[#D4EC6E] px-2.5 py-1 border-2 border-[#2D1E2F] rounded">
                    <Crown className="w-3.5 h-3.5 text-[#E84A3C]" />
                    Final Film Standing
                  </span>
                  <span className="font-tabular text-xs font-bold text-[#2D1E2F]/70">
                    {champion.category}
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <FilmPosterArt film={champion} />
                </div>

                <div className="mt-3.5">
                  <h2 className="text-xl font-extrabold text-[#2D1E2F]">
                    {champion.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#2D1E2F]/80 mt-1 leading-relaxed">
                    {champion.personalVerdict}
                  </p>
                </div>
              </div>

              {/* Films Defeated Trail */}
              {defeatedFilms.length > 0 && (
                <div className="mt-4 pt-3 border-t-2 border-[#2D1E2F]/15">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2D1E2F]/65 mb-2">
                    Left in the Dark ({defeatedFilms.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#2D1E2F]/80">
                    {defeatedFilms.map((f, idx) => (
                      <span key={`${f.id}-${idx}`} className="inline-flex items-center">
                        <span className="line-through decoration-[#E84A3C]/70">
                          {f.title}
                        </span>
                        {idx < defeatedFilms.length - 1 && (
                          <span className="ml-1.5 text-[#2D1E2F]/40" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Naija Power Outage Personality Verdict */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#E84A3C] mb-1">
                  NEPA Took Light · Your Outage Personality
                </p>
                <h1 className="font-pixel text-2xl sm:text-3xl leading-tight text-[#2D1E2F] text-balance">
                  {persona.title}
                </h1>
                <p className="mt-2 text-base sm:text-lg font-semibold text-[#2D1E2F]/85 leading-snug">
                  {persona.tagline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#2D1E2F]/80 leading-relaxed">
                  {persona.description}
                </p>

                {/* Signature Move + Blackout Kit */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl border-2 border-[#2D1E2F]"
                    style={{ backgroundColor: persona.cardBg }}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2D1E2F]/70 mb-1.5">
                      Your Signature Move
                    </div>
                    <p className="text-sm font-semibold text-[#2D1E2F] leading-snug">
                      {persona.signatureMove}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border-2 border-[#2D1E2F] bg-[#D4EC6E]/35">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2D1E2F]/70 mb-1.5">
                      Blackout Survival Kit
                    </div>
                    <ul className="space-y-1 text-sm font-semibold text-[#2D1E2F]">
                      {persona.survivalKit.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#2D1E2F] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* PowerMap Brand Tie-In & Actions */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl border-2 border-[#2D1E2F] bg-[#6AB5B0]/25 flex items-start gap-3">
                  <div className="p-2 rounded-lg border-2 border-[#2D1E2F] bg-[#D4EC6E] shrink-0">
                    <Zap className="w-4 h-4 text-[#2D1E2F]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#2D1E2F] mb-0.5">
                      PowerMap Reality Check · powermap.tech
                    </div>
                    <p className="text-xs sm:text-sm text-[#2D1E2F]/85 leading-snug">
                      {persona.powerMapTip}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onPlayAgain}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2D1E2F] bg-[#D4EC6E] text-sm font-extrabold text-[#2D1E2F] retro-shadow-sm retro-btn cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Play Again (Next Guest)
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyShare}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-[#2D1E2F] bg-[#F4A9BE] text-sm font-bold text-[#2D1E2F] retro-shadow-sm retro-btn cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Result Copied!
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        Copy Result Blurb
                      </>
                    )}
                  </button>

                  <a
                    href="https://powermap.tech"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border-2 border-[#2D1E2F] bg-white text-sm font-bold text-[#2D1E2F] hover:bg-[#FAF3E0] transition-colors ml-auto"
                  >
                    Visit powermap.tech
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
