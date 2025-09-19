import httpx
from typing import List, Dict, Any
from app.core.config import settings
import asyncio
from datetime import datetime

class SportmonksService:
    def __init__(self):
        self.base_url = settings.SPORTMONKS_BASE_URL
        self.api_key = settings.SPORTMONKS_API_KEY
        self.headers = {"Authorization": f"Bearer {self.api_key}"}
        
    async def _make_request(self, endpoint: str, params: Dict = None) -> Dict[str, Any]:
        async with httpx.AsyncClient() as client:
            url = f"{self.base_url}/{endpoint}"
            response = await client.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            return response.json()
    
    async def get_leagues(self) -> List[Dict]:
        data = await self._make_request("leagues", {"include": "country"})
        return data.get("data", [])
    
    async def get_teams(self, league_id: int) -> List[Dict]:
        data = await self._make_request(f"leagues/{league_id}/teams")
        return data.get("data", [])
    
    async def get_matches(self, date: str = None) -> List[Dict]:
        params = {"include": "participants,scores,league"}
        if date:
            params["filter[date]"] = date
        data = await self._make_request("fixtures", params)
        return data.get("data", [])
    
    async def get_live_matches(self) -> List[Dict]:
        data = await self._make_request("livescores", {"include": "participants,scores,league"})
        return data.get("data", [])