from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.models import Match, Team, League
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class TeamResponse(BaseModel):
    id: int
    name: str
    logo: str
    country: str

class LeagueResponse(BaseModel):
    id: int
    name: str
    country: str
    logo: str
    season: int

class MatchResponse(BaseModel):
    id: int
    homeTeam: TeamResponse
    awayTeam: TeamResponse
    date: datetime
    status: str
    score: dict = None
    league: LeagueResponse

@router.get("/", response_model=List[MatchResponse])
async def get_matches(db: Session = Depends(get_db)):
    matches = db.query(Match).join(Team, Match.home_team_id == Team.id).join(League).all()
    
    result = []
    for match in matches:
        score = None
        if match.home_score is not None and match.away_score is not None:
            score = {"home": match.home_score, "away": match.away_score}
        
        result.append(MatchResponse(
            id=match.id,
            homeTeam=TeamResponse(
                id=match.home_team.id,
                name=match.home_team.name,
                logo=match.home_team.logo,
                country=match.home_team.country
            ),
            awayTeam=TeamResponse(
                id=match.away_team.id,
                name=match.away_team.name,
                logo=match.away_team.logo,
                country=match.away_team.country
            ),
            date=match.date,
            status=match.status,
            score=score,
            league=LeagueResponse(
                id=match.league.id,
                name=match.league.name,
                country=match.league.country,
                logo=match.league.logo,
                season=match.league.season
            )
        ))
    
    return result

@router.get("/{match_id}", response_model=MatchResponse)
async def get_match(match_id: int, db: Session = Depends(get_db)):
    match = db.query(Match).filter(Match.id == match_id).first()
    if not match:
        raise HTTPException(status_code=404, detail="Match not found")
    
    score = None
    if match.home_score is not None and match.away_score is not None:
        score = {"home": match.home_score, "away": match.away_score}
    
    return MatchResponse(
        id=match.id,
        homeTeam=TeamResponse(
            id=match.home_team.id,
            name=match.home_team.name,
            logo=match.home_team.logo,
            country=match.home_team.country
        ),
        awayTeam=TeamResponse(
            id=match.away_team.id,
            name=match.away_team.name,
            logo=match.away_team.logo,
            country=match.away_team.country
        ),
        date=match.date,
        status=match.status,
        score=score,
        league=LeagueResponse(
            id=match.league.id,
            name=match.league.name,
            country=match.league.country,
            logo=match.league.logo,
            season=match.league.season
        )
    )