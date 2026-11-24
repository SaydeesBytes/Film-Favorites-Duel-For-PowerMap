import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Play, Volume2, VolumeX } from 'lucide-react';
import { DeckMode } from '../types/game';

interface RetroMonitorHeroProps {
  mode: DeckMode;
  onModeChange: (mode: DeckMode) => void;
  onStart: () => void;
  onOpenStats: () => void;
  totalPlays: number;
  muted: boolean;
  onToggleMute: () => void;
}

export const RetroMonitorHero: React.FC<RetroMonitorHeroProps> = ({
  mode,
  onModeChange,
  onStart,
  onOpenStats,
  totalPlays,
  muted,
  onToggleMute,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF3E0]">
      {/* Sage green horizon table matching Image 2 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-[#A8C69F] border-t-[3px] border-[#2D1E2F]"
        aria-hidden="true"
      />

      {/* Clean 1-row Top Bar Contract */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <span className="font-pixel text-base sm:text-lg tracking-tight text-[#2D1E2F] whitespace-nowrap shrink-0">
          PowerMap
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#2D1E2F]/80">
          <button
            type="button"
            onClick={() => onModeChange('quick')}
            className={`hover:text-[#2D1E2F] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'quick' ? 'underline underline-offset-4 text-[#2D1E2F]' : ''
            }`}
          >
            Quick Run
          </button>
          <button
            type="button"
            onClick={() => onModeChange('classic')}
            className={`hover:text-[#2D1E2F] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'classic' ? 'underline underline-offset-4 text-[#2D1E2F]' : ''
            }`}
          >
            Classic Showdown
          </button>
          <button
            type="button"
            onClick={onOpenStats}
            className="hover:text-[#2D1E2F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Booth Tally
          </button>
          <a
            href="https://powermap.tech"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#2D1E2F] transition-colors whitespace-nowrap shrink-0"
          >
            powermap.tech
          </a>
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
            className="p-2.5 rounded-lg border-2 border-[#2D1E2F] bg-[#FAF3E0] text-[#2D1E2F] hover:bg-[#F4A9BE]/40 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onStart}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#E84A3C] border-2 border-[#2D1E2F] rounded-lg retro-shadow-sm retro-btn whitespace-nowrap shrink-0 cursor-pointer"
          >
            Play Quiz
          </button>
        </div>
      </header>

      {/* Main Retro Pink CRT Monitor Centerpiece */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4 sm:py-6">
        <div className="w-full max-w-[740px] flex flex-col items-center">
          {/* Editorial Hook */}
          <div className="text-center mb-4 sm:mb-5 max-w-xl">
            <p className="text-xs sm:text-sm font-medium text-[#2D1E2F]/80 mb-1">
              PowerMap Booth Activation · Film &amp; Outage Quiz
            </p>
            <h1 className="font-pixel text-xl sm:text-3xl leading-tight text-[#2D1E2F] text-balance">
              Pick Your Classics. Survive the Blackout.
            </h1>
          </div>

          {/* CRT Monitor Outer Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="bg-[#F4A9BE] border-[3px] border-[#2D1E2F] rounded-[24px] p-4 sm:p-6 retro-shadow-lg">
              {/* Deep Navy Bezel Frame */}
              <div className="bg-[#344075] border-[3px] border-[#2D1E2F] rounded-2xl p-2 sm:p-3">
                {/* Teal CRT Screen */}
                <div className="relative bg-[#6AB5B0] border-2 border-[#2D1E2F] rounded-xl px-4 py-6 sm:px-8 sm:py-7 crt-scanlines overflow-hidden flex flex-col items-center text-center">
                  {/* Pixel Clouds */}
                  <svg
                    viewBox="0 0 64 28"
                    className="w-14 h-7 absolute top-3 left-4 opacity-90"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 22 H56 V16 H48 V10 H38 V6 H24 V12 H14 V16 H8 Z"
                      fill="#FAF3E0"
                      stroke="#344075"
                      strokeWidth="3"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 64 28"
                    className="w-12 h-6 absolute top-4 right-5 opacity-90"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 22 H56 V16 H48 V10 H38 V6 H24 V12 H14 V16 H8 Z"
                      fill="#FAF3E0"
                      stroke="#344075"
                      strokeWidth="3"
                    />
                  </svg>

                  {/* Pixel Sparkles */}
                  <span
                    className="font-pixel text-white/90 text-sm absolute bottom-6 left-8 select-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="font-pixel text-white/90 text-xs absolute bottom-10 right-10 select-none"
                    aria-hidden="true"
                  >
                    +
                  </span>

                  {/* Dashed Pixel Marquee Box */}
                  <button
                    type="button"
                    onClick={onStart}
                    className="group relative mt-2 mb-3 px-7 sm:px-12 py-3.5 sm:py-4 border-[3px] border-dashed border-[#344075] bg-[#6AB5B0]/50 hover:bg-[#D4EC6E]/35 transition-colors rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D1E2F]"
                  >
                    <span
                      className="font-pixel text-3xl sm:text-5xl tracking-wider text-[#F4A9BE] block"
                      style={{
                        textShadow: '3px 3px 0px #344075, -1px -1px 0px #344075',
                      }}
                    >
                      START
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-[#2D1E2F] bg-[#D4EC6E] px-2.5 py-0.5 border-2 border-[#2D1E2F] rounded">
                      <Play className="w-3 h-3 fill-current" />
                      Tap to Play
                    </span>
                  </button>

                  <p className="font-pixel text-xs sm:text-sm text-[#FAF3E0] tracking-wide mb-3 max-w-md">
                    WHICH FILM SURVIVES = YOUR NAIJA OUTAGE PERSONALITY
                  </p>

                  {/* 3 Pixel Hearts */}
                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    {[0, 1, 2].map((idx) => (
                      <svg key={idx} viewBox="0 0 24 22" className="w-6 h-5">
                        <path
                          d="M12 20 L3 11 C0 8 0 3 4 2 C7 1 10 3 12 6 C14 3 17 1 20 2 C24 3 24 8 21 11 Z"
                          fill="#F4A9BE"
                          stroke="#344075"
                          strokeWidth="2.5"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Mode Selector inside Screen */}
                  <div className="inline-flex items-center gap-1.5 p-1 bg-[#344075] border-2 border-[#2D1E2F] rounded-lg">
                    <button
                      type="button"
                      onClick={() => onModeChange('quick')}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        mode === 'quick'
                          ? 'bg-[#D4EC6E] text-[#2D1E2F]'
                          : 'text-[#FAF3E0] hover:text-white'
                      }`}
                    >
                      Quick · 7 Duels
                    </button>
                    <button
                      type="button"
                      onClick={() => onModeChange('classic')}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        mode === 'classic'
                          ? 'bg-[#D4EC6E] text-[#2D1E2F]'
                          : 'text-[#FAF3E0] hover:text-white'
                      }`}
                    >
                      Classic · 11 Duels
                    </button>
                  </div>
                </div>
              </div>

              {/* Monitor Indicator Buttons Row (matching Image 2) */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5" aria-hidden="true">
                  <span className="w-4 h-4 rounded-full bg-[#2AA876] border-2 border-[#2D1E2F]" />
                  <span className="w-4 h-4 rounded-full bg-[#F3AE3D] border-2 border-[#2D1E2F]" />
                  <span className="w-4 h-4 rounded-full bg-[#D4EC6E] border-2 border-[#2D1E2F]" />
                  <span className="w-4 h-4 rounded-full bg-[#68C2BA] border-2 border-[#2D1E2F]" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenStats}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded border-2 border-[#2D1E2F] bg-[#FAF3E0] text-xs font-bold text-[#2D1E2F] hover:bg-[#D4EC6E] transition-colors cursor-pointer"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span className="font-tabular">{totalPlays}</span> Played
                  </button>
                  <div className="hidden sm:flex w-16 h-6 rounded border-2 border-[#2D1E2F] bg-[#F7C2D1] items-center justify-end pr-1.5">
                    <span className="w-2.5 h-2 rounded-xs bg-[#2AA876] border border-[#2D1E2F]" />
                  </div>
                </div>
              </div>
            </div>

            {/* CRT Monitor Stand */}
            <div className="mx-auto w-44 sm:w-56 h-7 bg-[#E2829D] border-x-[3px] border-[#2D1E2F] flex items-center justify-center">
              <div className="w-28 h-2 border-b-2 border-[#2D1E2F]/40" />
            </div>

            {/* Desktop Console Base (honoring Image 2's floppy console + brand plate) */}
            <div className="bg-[#F4A9BE] border-[3px] border-[#2D1E2F] rounded-2xl px-4 sm:px-6 py-3.5 retro-shadow flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#FAF3E0] border-2 border-[#2D1E2F] rounded px-3 py-1">
                  <span className="font-pixel text-xs sm:text-sm text-[#2AA876]">
                    powermap.tech
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2D1E2F] hidden sm:inline">
                  Nollywood · Hollywood · Rom-Coms · Marvel · Blockbusters
                </span>
              </div>

              {/* Tactile Floppy Drive Slot */}
              <div className="flex items-center gap-2 ml-auto">
                <div className="w-32 sm:w-40 h-5 bg-[#E2829D] border-2 border-[#2D1E2F] rounded-sm flex items-center px-2">
                  <div className="w-full h-1.5 bg-[#2D1E2F] rounded-full" />
                </div>
                <span className="w-5 h-4 bg-[#F3AE3D] border-2 border-[#2D1E2F] rounded-xs" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
