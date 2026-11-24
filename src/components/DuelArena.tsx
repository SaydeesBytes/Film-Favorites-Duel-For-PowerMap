import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Crown, RotateCcw, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { FilmItem } from '../types/game';
import { FilmPosterArt } from './FilmPosterArt';
import { getMismatchCommentary } from '../data/films';

interface DuelArenaProps {
  leftFilm: FilmItem;
  rightFilm: FilmItem;
  championSide: 'left' | 'right' | null;
  championStreak: number;
  round: number;
  totalRounds: number;
  muted: boolean;
  onToggleMute: () => void;
  onChoose: (winnerSide: 'left' | 'right') => void;
  onRestart: () => void;
  onOpenStats: () => void;
}

export const DuelArena: React.FC<DuelArenaProps> = ({
  leftFilm,
  rightFilm,
  championSide,
  championStreak,
  round,
  totalRounds,
  muted,
  onToggleMute,
  onChoose,
  onRestart,
  onOpenStats,
}) => {
  // Support 1/2 or Left/Right arrow keys on booth keyboards
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === '1') {
        onChoose('left');
      } else if (e.key === 'ArrowRight' || e.key === '2') {
        onChoose('right');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onChoose]);

  const progressPct = Math.round((round / totalRounds) * 100);
  const championFilm = championSide === 'right' ? rightFilm : leftFilm;
  const challengerFilm = championSide === 'right' ? leftFilm : rightFilm;
  const dialogueText = getMismatchCommentary(
    championFilm,
    challengerFilm,
    round,
    totalRounds,
    championStreak
  );

  const renderPosterCard = (film: FilmItem, side: 'left' | 'right') => {
    const isChampion = championSide === side && championStreak > 0;

    return (
      <motion.div
        key={`${film.id}-${round}-${side}`}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.97 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex"
      >
        <button
          type="button"
          onClick={() => onChoose(side)}
          className="group w-full text-left bg-[#FFFDF8] border-[3px] border-[#2D1E2F] rounded-2xl p-3.5 sm:p-4 retro-shadow hover:-translate-y-1 active:translate-y-0.5 transition-transform duration-150 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E84A3C]"
        >
          <div>
            {/* Clean 1-line status bar without pill spam */}
            <div className="flex items-center justify-between gap-2 mb-2.5 min-h-[24px]">
              {isChampion ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D1E2F] bg-[#D4EC6E] px-2.5 py-0.5 border-2 border-[#2D1E2F] rounded">
                  <Crown className="w-3.5 h-3.5 text-[#E84A3C]" />
                  Returning Winner · {championStreak}{' '}
                  {championStreak === 1 ? 'Win' : 'Wins'}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D1E2F]/70">
                  <Sparkles className="w-3.5 h-3.5 text-[#D67C92]" />
                  {round === 1 ? 'Contender' : 'New Challenger'}
                </span>
              )}

              <span className="font-tabular text-xs font-bold text-[#2D1E2F]/60">
                {side === 'left' ? 'OPTION A' : 'OPTION B'}
              </span>
            </div>

            {/* Bespoke Poster Artwork */}
            <div className="rounded-xl overflow-hidden">
              <FilmPosterArt film={film} />
            </div>

            {/* Film Details */}
            <div className="mt-3.5 px-0.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D1E2F]/65 mb-1">
                <span>{film.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-tabular">{film.year}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#2D1E2F] leading-snug group-hover:text-[#E84A3C] transition-colors">
                {film.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#2D1E2F]/75 line-clamp-2 leading-relaxed">
                {film.tagline}
              </p>
            </div>
          </div>

          {/* Crisp Touch CTA Footer */}
          <div className="mt-4 pt-3 border-t-2 border-[#2D1E2F]/10 flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm font-bold text-[#2D1E2F] group-hover:text-[#E84A3C] transition-colors">
              Keep This Film Standing
            </span>
            <span className="px-3 py-1.5 rounded-lg border-2 border-[#2D1E2F] bg-[#F4A9BE] group-hover:bg-[#D4EC6E] text-xs font-bold text-[#2D1E2F] transition-colors whitespace-nowrap shrink-0">
              Choose
            </span>
          </div>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#FAF3E0] overflow-hidden">
      {/* Subtle nostalgic sunset horizon echoing Image 3's warm rose & sunlit lime */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#D67C92]/25 to-transparent"
        aria-hidden="true"
      />

      {/* Clean 1-Row Top HUD */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 border-b-2 border-[#2D1E2F]/15">
        <button
          type="button"
          onClick={onRestart}
          className="font-pixel text-sm sm:text-base text-[#2D1E2F] hover:text-[#E84A3C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          PowerMap
        </button>

        {/* Round Progress Track */}
        <div className="flex items-center gap-3 flex-1 max-w-xs sm:max-w-sm">
          <span className="font-pixel text-xs sm:text-sm text-[#2D1E2F] font-tabular whitespace-nowrap shrink-0">
            {String(round).padStart(2, '0')} / {String(totalRounds).padStart(2, '0')}
          </span>
          <div className="flex-1 h-3 bg-[#FFFDF8] border-2 border-[#2D1E2F] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#38B28B] transition-all duration-200"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenStats}
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg border-2 border-[#2D1E2F] bg-[#FFFDF8] text-xs font-bold text-[#2D1E2F] hover:bg-[#D4EC6E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Booth Tally
          </button>
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={muted ? 'Unmute sound' : 'Mute sound'}
            className="p-2 rounded-lg border-2 border-[#2D1E2F] bg-[#FFFDF8] text-[#2D1E2F] hover:bg-[#F4A9BE]/40 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#2D1E2F] bg-[#FFFDF8] text-xs font-bold text-[#2D1E2F] hover:bg-[#F4A9BE] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </header>

      {/* Main Duel Arena */}
      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col justify-center">
        <div className="text-center mb-4">
          <h1 className="font-pixel text-base sm:text-xl text-[#2D1E2F] text-balance">
            {round === totalRounds
              ? 'FINAL ROUND — PICK YOUR CHAMPION'
              : 'THIS OR THAT — WINNER STAYS ON'}
          </h1>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 items-stretch">
          <AnimatePresence mode="wait">
            {renderPosterCard(leftFilm, 'left')}
          </AnimatePresence>

          {/* Center VS Medallion */}
          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#D4EC6E] border-[3px] border-[#2D1E2F] items-center justify-center retro-shadow-sm pointer-events-none"
            aria-hidden="true"
          >
            <span className="font-pixel text-base text-[#2D1E2F]">VS</span>
          </div>

          <AnimatePresence mode="wait">
            {renderPosterCard(rightFilm, 'right')}
          </AnimatePresence>
        </div>
      </main>

      {/* Nostalgic Indie RPG Dialogue Box at Bottom (directly honoring Image 3!) */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-5 pt-2">
        <div className="bg-[#3D2E35]/95 border-[3px] border-[#2D1E2F] rounded-xl px-4 sm:px-6 py-3.5 retro-shadow-sm flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-pixel text-[11px] sm:text-xs text-[#D4EC6E] mb-1">
              POWERMAP BOOTH HOST
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#FAF3E0] leading-snug">
              {dialogueText}
            </p>
          </div>
          <span
            className="font-pixel text-sm text-[#F4A9BE] shrink-0 hidden sm:inline"
            aria-hidden="true"
          >
            ▼
          </span>
        </div>
      </footer>
    </div>
  );
};
