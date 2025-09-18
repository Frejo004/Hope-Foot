import asyncio
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from sqlalchemy.orm import Session
from app.models.match import Match
from app.models.team import Team
from app.services.sportmonks import sportmonks

class CacheManager:
    def __init__(self):
        self.api_calls_count = 0
        self.last_reset = datetime.now()
        self.max_calls_per_minute = 10
        
    def can_make_api_call(self) -> bool:
        """Vérifier si on peut faire un appel API"""
        now = datetime.now()
        if (now - self.last_reset).seconds >= 60:
            self.api_calls_count = 0
            self.last_reset = now
            
        return self.api_calls_count < self.max_calls_per_minute
    
    def increment_api_calls(self):
        """Incrémenter le compteur d'appels API"""
        self.api_calls_count += 1
    
    async def get_matches_cached(self, db: Session, date: Optional[str] = None) -> List[Dict]:
        """Récupérer les matchs depuis la DB ou API si nécessaire"""
        # Vérifier d'abord en DB
        db_matches = db.query(Match).all()
        
        # Si pas de données récentes et API disponible
        if not db_matches and self.can_make_api_call():
            self.increment_api_calls()
            api_matches = await sportmonks.get_matches(date)
            
            # Sauvegarder en DB
            for match_data in api_matches:
                db_match = Match(
                    sportmonks_id=match_data.get('id'),
                    home_team_name=match_data.get('home_team', {}).get('name'),
                    away_team_name=match_data.get('away_team', {}).get('name'),
                    league_name=match_data.get('league', {}).get('name'),
                    status=match_data.get('status')
                )
                db.add(db_match)
            db.commit()
            
            return api_matches
        
        # Retourner depuis DB
        return [self._match_to_dict(match) for match in db_matches]
    
    def _match_to_dict(self, match: Match) -> Dict:
        """Convertir Match en dict"""
        return {
            "id": match.id,
            "home_team": {"name": match.home_team_name},
            "away_team": {"name": match.away_team_name},
            "league": {"name": match.league_name},
            "status": match.status,
            "date": match.match_date.isoformat() if match.match_date else None
        }

cache_manager = CacheManager()