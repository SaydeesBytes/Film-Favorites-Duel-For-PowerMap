import React from 'react';
import { Trash2, Trophy, X } from 'lucide-react';
import { BoothStats } from '../types/game';
import { FILMS } from '../data/films';

interface BoothStatsModalProps {
  isOpen: boolean;
  stats: BoothStats;
  onClose: () => void;
  onResetStats: () => void;
}

export const BoothStatsModal: React.FC<BoothStatsModalProps> = ({
  isOpen,
  stats,
  onClose,
  onResetStats,
}) => {
  if (!isOpen) return null;

  const topFilms = Object.entries(stats.filmWins)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([filmId, count]) => ({
      film: FILMS.find((f) => f.id === filmId),
      count,
    }))
    .filter((entry) => entry.film);

  const topPersonas = Object.entries(stats.personaCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1E2F]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booth-stats-title"
    >
      <div className="w-full max-w-lg bg-[#FAF3E0] border-[3px] border-[#2D1E2F] rounded-2xl p-6 retro-shadow-lg max-h-[88vh] overflow-y-auto">
        <div className="flex items-center justify-between gap-4 pb-4 border-b-2 border-[#2D1E2F]/15">
          <div>
            <p className="text-xs font-semibold text-[#2D1E2F]/65">
              PowerMap Booth Activation
            </p>
            <h2 id="booth-stats-title" className="font-pixel text-lg text-[#2D1E2F]">
              Live Booth Tally
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booth stats"
            className="p-2 rounded-lg border-2 border-[#2D1E2F] bg-white text-[#2D1E2F] hover:bg-[#F4A9BE] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-xl border-2 border-[#2D1E2F] bg-[#D4EC6E]/55">
            <div className="text-xs font-semibold text-[#2D1E2F]/75">Total Players</div>
            <div className="font-pixel text-2xl text-[#2D1E2F] font-tabular mt-1">
              {stats.totalPlays}
            </div>
          </div>
          <div className="p-3.5 rounded-xl border-2 border-[#2D1E2F] bg-[#F4A9BE]/45">
            <div className="text-xs font-semibold text-[#2D1E2F]/75">Top Persona</div>
            <div className="text-sm font-bold text-[#2D1E2F] mt-1 line-clamp-2">
              {topPersonas[0]?.[0] ?? 'Play round 1!'}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D1E2F]/70 mb-2 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#E84A3C]" />
              Most Crowned Films
            </h3>
            {topFilms.length === 0 ? (
              <p className="text-sm text-[#2D1E2F]/70 py-3">
                No winners recorded yet. Let the first guest play!
              </p>
            ) : (
              <div className="space-y-2">
                {topFilms.map(({ film, count }, index) => (
                  <div
                    key={film!.id}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border-2 border-[#2D1E2F] bg-white"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-pixel text-xs text-[#E84A3C] shrink-0">
                        #{index + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#2D1E2F] truncate">
                          {film!.title}
                        </div>
                        <div className="text-xs text-[#2D1E2F]/65">
                          {film!.category} · {film!.year}
                        </div>
                      </div>
                    </div>
                    <span className="font-tabular text-xs font-bold px-2 py-1 rounded bg-[#FAF3E0] border border-[#2D1E2F] shrink-0">
                      {count} {count === 1 ? 'win' : 'wins'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {stats.recentChampions.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D1E2F]/70 mb-2">
                Recent Visitors
              </h3>
              <div className="space-y-1.5">
                {stats.recentChampions.slice(0, 4).map((item, idx) => (
                  <div
                    key={`${item.timestamp}-${idx}`}
                    className="flex items-center justify-between gap-2 text-xs py-1.5 border-b border-[#2D1E2F]/10"
                  >
                    <span className="font-semibold text-[#2D1E2F] truncate">
                      {item.filmTitle}
                    </span>
                    <span className="text-[#2D1E2F]/70 truncate max-w-[55%]">
                      {item.personaTitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t-2 border-[#2D1E2F]/15 flex items-center justify-between gap-3">
          {stats.totalPlays > 0 ? (
            <button
              type="button"
              onClick={onResetStats}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#2D1E2F] bg-white text-xs font-bold text-[#E84A3C] hover:bg-[#FFE5E0] transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Event Tally
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border-2 border-[#2D1E2F] bg-[#D4EC6E] text-xs font-bold text-[#2D1E2F] retro-shadow-sm retro-btn cursor-pointer"
          >
            Back to Booth
          </button>
        </div>
      </div>
    </div>
  );
};
