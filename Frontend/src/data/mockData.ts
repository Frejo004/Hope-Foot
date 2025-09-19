// Données statiques pour le développement
export const mockMatches = [
  {
    id: 1,
    homeTeam: {
      id: 1,
      name: "Paris Saint-Germain",
      logo: "⚽",
      country: "France"
    },
    awayTeam: {
      id: 2,
      name: "Olympique de Marseille",
      logo: "⚽",
      country: "France"
    },
    date: "2024-01-20T20:00:00Z",
    status: "scheduled" as const,
    league: {
      id: 1,
      name: "Ligue 1",
      country: "France",
      logo: "🏆",
      season: 2024
    }
  },
  {
    id: 2,
    homeTeam: {
      id: 3,
      name: "Real Madrid",
      logo: "⚽",
      country: "Spain"
    },
    awayTeam: {
      id: 4,
      name: "FC Barcelona",
      logo: "⚽",
      country: "Spain"
    },
    date: "2024-01-21T21:00:00Z",
    status: "live" as const,
    score: {
      home: 2,
      away: 1
    },
    league: {
      id: 2,
      name: "La Liga",
      country: "Spain",
      logo: "🏆",
      season: 2024
    }
  },
  {
    id: 3,
    homeTeam: {
      id: 5,
      name: "Manchester City",
      logo: "⚽",
      country: "England"
    },
    awayTeam: {
      id: 6,
      name: "Liverpool",
      logo: "⚽",
      country: "England"
    },
    date: "2024-01-19T18:30:00Z",
    status: "finished" as const,
    score: {
      home: 1,
      away: 3
    },
    league: {
      id: 3,
      name: "Premier League",
      country: "England",
      logo: "🏆",
      season: 2024
    }
  },
  {
    id: 4,
    homeTeam: {
      id: 7,
      name: "Bayern Munich",
      logo: "⚽",
      country: "Germany"
    },
    awayTeam: {
      id: 8,
      name: "Borussia Dortmund",
      logo: "⚽",
      country: "Germany"
    },
    date: "2024-01-22T19:30:00Z",
    status: "scheduled" as const,
    league: {
      id: 4,
      name: "Bundesliga",
      country: "Germany",
      logo: "🏆",
      season: 2024
    }
  }
];

export const mockPredictions = [
  {
    id: "1",
    matchId: 1,
    userId: "user1",
    prediction: "home" as const,
    confidence: 85,
    createdAt: "2024-01-19T10:00:00Z",
    result: "win" as const
  },
  {
    id: "2",
    matchId: 2,
    userId: "user1",
    prediction: "away" as const,
    confidence: 70,
    createdAt: "2024-01-20T15:30:00Z"
  },
  {
    id: "3",
    matchId: 3,
    userId: "user1",
    prediction: "away" as const,
    confidence: 90,
    createdAt: "2024-01-18T12:00:00Z",
    result: "win" as const
  }
];

export const mockStats = [
  {
    label: "Prédictions totales",
    value: "156",
    change: "+12%",
    trend: "up" as const,
    icon: "📊"
  },
  {
    label: "Taux de réussite",
    value: "78%",
    change: "+5%",
    trend: "up" as const,
    icon: "🎯"
  },
  {
    label: "Matchs analysés",
    value: "2,847",
    change: "+23%",
    trend: "up" as const,
    icon: "⚽"
  },
  {
    label: "Points gagnés",
    value: "1,234",
    change: "-2%",
    trend: "down" as const,
    icon: "🏆"
  }
];