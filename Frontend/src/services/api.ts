import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// API Football (exemple avec API-FOOTBALL)
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY || '';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

const apiHeaders = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
};

export const footballApi = {
  // Matchs
  getMatches: async (date?: string) => {
    const response = await fetch(`${BASE_URL}/fixtures?date=${date || new Date().toISOString().split('T')[0]}`, {
      headers: apiHeaders
    });
    return response.json();
  },

  // Équipes
  getTeams: async (league: number, season: number) => {
    const response = await fetch(`${BASE_URL}/teams?league=${league}&season=${season}`, {
      headers: apiHeaders
    });
    return response.json();
  },

  // Statistiques
  getTeamStats: async (teamId: number, season: number) => {
    const response = await fetch(`${BASE_URL}/teams/statistics?team=${teamId}&season=${season}&league=1`, {
      headers: apiHeaders
    });
    return response.json();
  }
};