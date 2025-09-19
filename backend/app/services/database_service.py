from sqlalchemy.orm import Session
from app.models.models import League, Team, Match, Prediction
from typing import List, Optional
from datetime import datetime

class LeagueService:
    @staticmethod
    def get_all_leagues(db: Session) -> List[League]:
        return db.query(League).all()
    
    @staticmethod
    def get_league_by_id(db: Session, league_id: int) -> Optional[League]:
        return db.query(League).filter(League.id == league_id).first()
    
    @staticmethod
    def get_league_by_sportmonks_id(db: Session, sportmonks_id: int) -> Optional[League]:
        return db.query(League).filter(League.sportmonks_id == sportmonks_id).first()

class TeamService:
    @staticmethod
    def get_all_teams(db: Session) -> List[Team]:
        return db.query(Team).all()
    
    @staticmethod
    def get_team_by_id(db: Session, team_id: int) -> Optional[Team]:
        return db.query(Team).filter(Team.id == team_id).first()
    
    @staticmethod
    def get_team_by_sportmonks_id(db: Session, sportmonks_id: int) -> Optional[Team]:
        return db.query(Team).filter(Team.sportmonks_id == sportmonks_id).first()
    
    @staticmethod
    def get_teams_by_country(db: Session, country: str) -> List[Team]:
        return db.query(Team).filter(Team.country == country).all()

class MatchService:
    @staticmethod
    def get_all_matches(db: Session) -> List[Match]:
        return db.query(Match).all()
    
    @staticmethod
    def get_match_by_id(db: Session, match_id: int) -> Optional[Match]:
        return db.query(Match).filter(Match.id == match_id).first()
    
    @staticmethod
    def get_match_by_sportmonks_id(db: Session, sportmonks_id: int) -> Optional[Match]:
        return db.query(Match).filter(Match.sportmonks_id == sportmonks_id).first()
    
    @staticmethod
    def get_matches_by_league(db: Session, league_id: int) -> List[Match]:
        return db.query(Match).filter(Match.league_id == league_id).all()
    
    @staticmethod
    def get_matches_by_team(db: Session, team_id: int) -> List[Match]:
        return db.query(Match).filter(
            (Match.home_team_id == team_id) | (Match.away_team_id == team_id)
        ).all()
    
    @staticmethod
    def get_matches_by_date_range(db: Session, start_date: datetime, end_date: datetime) -> List[Match]:
        return db.query(Match).filter(
            Match.date >= start_date,
            Match.date <= end_date
        ).all()
    
    @staticmethod
    def get_upcoming_matches(db: Session) -> List[Match]:
        return db.query(Match).filter(
            Match.date >= datetime.utcnow(),
            Match.status == "scheduled"
        ).all()
    
    @staticmethod
    def get_live_matches(db: Session) -> List[Match]:
        return db.query(Match).filter(Match.status == "live").all()
    
    @staticmethod
    def get_finished_matches(db: Session) -> List[Match]:
        return db.query(Match).filter(Match.status == "finished").all()

class PredictionService:
    @staticmethod
    def get_all_predictions(db: Session) -> List[Prediction]:
        return db.query(Prediction).all()
    
    @staticmethod
    def get_prediction_by_id(db: Session, prediction_id: int) -> Optional[Prediction]:
        return db.query(Prediction).filter(Prediction.id == prediction_id).first()
    
    @staticmethod
    def get_predictions_by_match(db: Session, match_id: int) -> List[Prediction]:
        return db.query(Prediction).filter(Prediction.match_id == match_id).all()
    
    @staticmethod
    def get_predictions_by_user(db: Session, user_id: str) -> List[Prediction]:
        return db.query(Prediction).filter(Prediction.user_id == user_id).all()
    
    @staticmethod
    def get_winning_predictions(db: Session) -> List[Prediction]:
        return db.query(Prediction).filter(Prediction.result == "win").all()