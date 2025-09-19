from sqlalchemy.orm import Session
from app.models.models import League, Team, Match
from app.services.sportmonks import SportmonksService
from app.core.database import SessionLocal
from datetime import datetime
import asyncio

class DataSyncService:
    def __init__(self):
        self.sportmonks = SportmonksService()
    
    async def sync_leagues(self, db: Session):
        leagues_data = await self.sportmonks.get_leagues()
        
        for league_data in leagues_data:
            existing = db.query(League).filter(League.sportmonks_id == league_data["id"]).first()
            
            if not existing:
                league = League(
                    sportmonks_id=league_data["id"],
                    name=league_data["name"],
                    country=league_data.get("country", {}).get("name", ""),
                    logo=league_data.get("image_path", ""),
                    season=datetime.now().year
                )
                db.add(league)
        
        db.commit()
    
    async def sync_teams(self, db: Session, league_id: int):
        teams_data = await self.sportmonks.get_teams(league_id)
        
        for team_data in teams_data:
            existing = db.query(Team).filter(Team.sportmonks_id == team_data["id"]).first()
            
            if not existing:
                team = Team(
                    sportmonks_id=team_data["id"],
                    name=team_data["name"],
                    logo=team_data.get("image_path", ""),
                    country=team_data.get("country", {}).get("name", "")
                )
                db.add(team)
        
        db.commit()
    
    async def sync_matches(self, db: Session, date: str = None):
        matches_data = await self.sportmonks.get_matches(date)
        
        for match_data in matches_data:
            existing = db.query(Match).filter(Match.sportmonks_id == match_data["id"]).first()
            
            participants = match_data.get("participants", [])
            if len(participants) < 2:
                continue
                
            home_team = db.query(Team).filter(Team.sportmonks_id == participants[0]["id"]).first()
            away_team = db.query(Team).filter(Team.sportmonks_id == participants[1]["id"]).first()
            league = db.query(League).filter(League.sportmonks_id == match_data["league"]["id"]).first()
            
            if not all([home_team, away_team, league]):
                continue
            
            scores = match_data.get("scores", [])
            home_score = away_score = None
            
            if scores:
                for score in scores:
                    if score["description"] == "CURRENT":
                        home_score = score["score"]["participant"]
                        away_score = score["score"]["goals"]
            
            if existing:
                existing.status = match_data["state"]["short_name"].lower()
                existing.home_score = home_score
                existing.away_score = away_score
                existing.updated_at = datetime.utcnow()
            else:
                match = Match(
                    sportmonks_id=match_data["id"],
                    home_team_id=home_team.id,
                    away_team_id=away_team.id,
                    league_id=league.id,
                    date=datetime.fromisoformat(match_data["starting_at"].replace("Z", "+00:00")),
                    status=match_data["state"]["short_name"].lower(),
                    home_score=home_score,
                    away_score=away_score
                )
                db.add(match)
        
        db.commit()