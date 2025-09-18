import requests
import os
from typing import List, Dict, Optional

class SportmonksAPI:
    def __init__(self):
        self.api_key = os.getenv("SPORTMONKS_API_KEY")
        self.base_url = "https://api.sportmonks.com/v3/football"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Accept": "application/json"
        }

    async def get_matches(self, date: Optional[str] = None) -> List[Dict]:
        """Récupérer les matchs"""
        url = f"{self.base_url}/fixtures"
        params = {"include": "teams,league"}
        if date:
            params["filter[date]"] = date
            
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            return response.json().get("data", [])
        return []

    async def get_teams(self, league_id: Optional[int] = None) -> List[Dict]:
        """Récupérer les équipes"""
        url = f"{self.base_url}/teams"
        params = {"include": "league"}
        if league_id:
            params["filter[league_id]"] = league_id
            
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            return response.json().get("data", [])
        return []

    async def get_team_stats(self, team_id: int, season_id: int) -> Dict:
        """Récupérer les statistiques d'une équipe"""
        url = f"{self.base_url}/teams/{team_id}/statistics"
        params = {"filter[season_id]": season_id}
        
        response = requests.get(url, headers=self.headers, params=params)
        if response.status_code == 200:
            return response.json().get("data", {})
        return {}

sportmonks = SportmonksAPI()