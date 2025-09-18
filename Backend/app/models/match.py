from sqlalchemy import Column, Integer, String, DateTime, JSON
from config.database import Base

class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    sportmonks_id = Column(Integer, unique=True, index=True)
    home_team_id = Column(Integer)
    away_team_id = Column(Integer)
    home_team_name = Column(String)
    away_team_name = Column(String)
    league_name = Column(String)
    match_date = Column(DateTime)
    status = Column(String)  # scheduled, live, finished
    home_score = Column(Integer, nullable=True)
    away_score = Column(Integer, nullable=True)
    additional_data = Column(JSON, nullable=True)