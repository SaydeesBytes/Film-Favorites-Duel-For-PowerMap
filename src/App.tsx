import { useCallback, useEffect, useState } from 'react';
import {
  BoothStats,
  DeckMode,
  DuelHistoryEntry,
  FilmItem,
  GameState,
} from './types/game';
import { buildTournamentDeck, OUTAGE_PERSONAS } from './data/films';
import { soundEngine } from './utils/sound';
import { RetroMonitorHero } from './components/RetroMonitorHero';
import { DuelArena } from './components/DuelArena';
import { PersonalityResult } from './components/PersonalityResult';
import { BoothStatsModal } from './components/BoothStatsModal';

const STORAGE_KEY = 'powermap_booth_film_stats_v1';

const DEFAULT_STATS: BoothStats = {
  totalPlays: 0,
  filmWins: {},
  personaCounts: {},
  recentChampions: [],
};

function loadBoothStats(): BoothStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw) as Partial<BoothStats>;
    return {
      totalPlays: typeof parsed.totalPlays === 'number' ? parsed.totalPlays : 0,
      filmWins: parsed.filmWins ?? {},
      personaCounts: parsed.personaCounts ?? {},
      recentChampions: Array.isArray(parsed.recentChampions)
        ? parsed.recentChampions
        : [],
    };
  } catch {
    return DEFAULT_STATS;
  }
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>('TITLE_MENU');
  const [mode, setMode] = useState<DeckMode>('classic');
  const [muted, setMuted] = useState<boolean>(false);
  const [statsOpen, setStatsOpen] = useState<boolean>(false);
  const [boothStats, setBoothStats] = useState<BoothStats>(() => loadBoothStats());

  // Active tournament state
  const [deck, setDeck] = useState<FilmItem[]>([]);
  const [leftFilm, setLeftFilm] = useState<FilmItem | null>(null);
  const [rightFilm, setRightFilm] = useState<FilmItem | null>(null);
  const [nextIndex, setNextIndex] = useState<number>(2);
  const [round, setRound] = useState<number>(1);
  const [championSide, setChampionSide] = useState<'left' | 'right' | null>(null);
  const [championStreak, setChampionStreak] = useState<number>(0);
  const [history, setHistory] = useState<DuelHistoryEntry[]>([]);
  const [finalChampion, setFinalChampion] = useState<FilmItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boothStats));
    } catch {
      // Ignore storage quota errors in private booth sessions
    }
  }, [boothStats]);

  const handleToggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      soundEngine.setMuted(next);
      if (!next) {
        soundEngine.playSoftClick();
      }
      return next;
    });
  }, []);

  const handleStartGame = useCallback(() => {
    const newDeck = buildTournamentDeck(mode);
    setDeck(newDeck);
    setLeftFilm(newDeck[0]);
    setRightFilm(newDeck[1]);
    setNextIndex(2);
    setRound(1);
    setChampionSide(null);
    setChampionStreak(0);
    setHistory([]);
    setFinalChampion(null);
    setGameState('PLAYING');
    soundEngine.playStart();
  }, [mode]);

  const handleChoose = useCallback(
    (winnerSide: 'left' | 'right') => {
      if (!leftFilm || !rightFilm || gameState !== 'PLAYING') return;

      const winner = winnerSide === 'left' ? leftFilm : rightFilm;
      const eliminated = winnerSide === 'left' ? rightFilm : leftFilm;
      const updatedHistory: DuelHistoryEntry[] = [
        ...history,
        { round, winner, eliminated },
      ];
      setHistory(updatedHistory);

      const newStreak = championSide === winnerSide ? championStreak + 1 : 1;

      // Check if that was the final duel
      if (nextIndex >= deck.length) {
        soundEngine.playVictory();
        setFinalChampion(winner);
        setGameState('RESULT');

        const persona = OUTAGE_PERSONAS[winner.personaId];
        setBoothStats((prev) => ({
          totalPlays: prev.totalPlays + 1,
          filmWins: {
            ...prev.filmWins,
            [winner.id]: (prev.filmWins[winner.id] ?? 0) + 1,
          },
          personaCounts: {
            ...prev.personaCounts,
            [persona.title]: (prev.personaCounts[persona.title] ?? 0) + 1,
          },
          recentChampions: [
            {
              filmTitle: winner.title,
              personaTitle: persona.title,
              timestamp: Date.now(),
            },
            ...prev.recentChampions,
          ].slice(0, 12),
        }));
        return;
      }

      // Winner stays standing; next challenger steps into the opposite slot
      soundEngine.playPick();
      const nextChallenger = deck[nextIndex];
      if (winnerSide === 'left') {
        setRightFilm(nextChallenger);
      } else {
        setLeftFilm(nextChallenger);
      }
      setChampionSide(winnerSide);
      setChampionStreak(newStreak);
      setRound((r) => r + 1);
      setNextIndex((idx) => idx + 1);
    },
    [
      leftFilm,
      rightFilm,
      gameState,
      history,
      round,
      championSide,
      championStreak,
      nextIndex,
      deck,
    ]
  );

  const handleReturnToTitle = useCallback(() => {
    soundEngine.playSoftClick();
    setGameState('TITLE_MENU');
  }, []);

  const handleResetStats = useCallback(() => {
    soundEngine.playSoftClick();
    setBoothStats(DEFAULT_STATS);
  }, []);

  return (
    <>
      {gameState === 'TITLE_MENU' && (
        <RetroMonitorHero
          mode={mode}
          onModeChange={(nextMode) => {
            soundEngine.playSoftClick();
            setMode(nextMode);
          }}
          onStart={handleStartGame}
          onOpenStats={() => {
            soundEngine.playSoftClick();
            setStatsOpen(true);
          }}
          totalPlays={boothStats.totalPlays}
          muted={muted}
          onToggleMute={handleToggleMute}
        />
      )}

      {gameState === 'PLAYING' && leftFilm && rightFilm && (
        <DuelArena
          leftFilm={leftFilm}
          rightFilm={rightFilm}
          championSide={championSide}
          championStreak={championStreak}
          round={round}
          totalRounds={Math.max(1, deck.length - 1)}
          muted={muted}
          onToggleMute={handleToggleMute}
          onChoose={handleChoose}
          onRestart={handleReturnToTitle}
          onOpenStats={() => {
            soundEngine.playSoftClick();
            setStatsOpen(true);
          }}
        />
      )}

      {gameState === 'RESULT' && finalChampion && (
        <PersonalityResult
          champion={finalChampion}
          history={history}
          onPlayAgain={handleStartGame}
          onOpenStats={() => {
            soundEngine.playSoftClick();
            setStatsOpen(true);
          }}
        />
      )}

      <BoothStatsModal
        isOpen={statsOpen}
        stats={boothStats}
        onClose={() => setStatsOpen(false)}
        onResetStats={handleResetStats}
      />
    </>
  );
}
