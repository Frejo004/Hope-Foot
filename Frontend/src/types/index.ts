export interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  status: 'scheduled' | 'live' | 'finished';
  score?: {
    home: number;
    away: number;
  };
  league: League;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  country: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  season: number;
}

export interface Prediction {
  id: string;
  matchId: number;
  userId: string;
  prediction: 'home' | 'away' | 'draw';
  confidence: number;
  createdAt: string;
  result?: 'win' | 'loss';
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  stats: {
    totalPredictions: number;
    correctPredictions: number;
    accuracy: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}