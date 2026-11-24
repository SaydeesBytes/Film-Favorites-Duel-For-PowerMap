export type FilmCategory =
  | 'Old Nollywood'
  | 'Old Hollywood'
  | 'Recent Blockbusters'
  | 'Rom-Coms'
  | 'Marvel & Cult';

export type PosterMotif =
  | 'ten-things'
  | 'glee'
  | 'omotara'
  | 'living-in-bondage'
  | 'osuofia'
  | 'nneka'
  | 'casablanca'
  | 'tiffany'
  | 'godfather'
  | 'singin-rain'
  | 'eeaao'
  | 'spider-verse'
  | 'black-panther'
  | 'dune-two'
  | 'notting-hill'
  | 'lose-a-guy'
  | 'crazy-rich'
  | 'endgame'
  | 'guardians'
  | 'no-way-home';

export type OutagePersonaId =
  | 'balcony-commander'
  | 'hand-fan-romantic'
  | 'gen-syndicate'
  | 'nollywood-monarch'
  | 'chaotic-improviser'
  | 'analog-vintage'
  | 'choir-optimist'
  | 'powerbank-cartel';

export interface OutagePersona {
  id: OutagePersonaId;
  title: string;
  tagline: string;
  vibeBadge: string;
  description: string;
  signatureMove: string;
  survivalKit: [string, string, string];
  powerMapTip: string;
  accentColor: string;
  cardBg: string;
}

export interface FilmItem {
  id: string;
  title: string;
  year: number;
  category: FilmCategory;
  directorOrCreator: string;
  tagline: string;
  motif: PosterMotif;
  palette: {
    bg: string;
    bgSecondary: string;
    ink: string;
    accent: string;
    highlight: string;
  };
  personaId: OutagePersonaId;
  personalVerdict: string;
}

export type GameState = 'TITLE_MENU' | 'PLAYING' | 'RESULT';

export type DeckMode = 'quick' | 'classic';

export interface DuelHistoryEntry {
  round: number;
  winner: FilmItem;
  eliminated: FilmItem;
}

export interface BoothStats {
  totalPlays: number;
  filmWins: Record<string, number>;
  personaCounts: Record<string, number>;
  recentChampions: Array<{
    filmTitle: string;
    personaTitle: string;
    timestamp: number;
  }>;
}
