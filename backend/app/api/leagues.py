from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.services.database_service import LeagueService
from pydantic import BaseModel

router = APIRouter()

class LeagueResponse(BaseModel):
    id: int
    name: str
    country: str
    logo: str
    season: int

@router.get("/", response_model=List[LeagueResponse])
async def get_leagues(db: Session = Depends(get_db)):
    leagues = LeagueService.get_all_leagues(db)
    
    result = []
    for league in leagues:
        result.append(LeagueResponse(
            id=league.id,
            name=league.name,
            country=league.country,
            logo=league.logo,
            season=league.season
        ))
    
    return result

@router.get("/{league_id}", response_model=LeagueResponse)
async def get_league(league_id: int, db: Session = Depends(get_db)):
    league = LeagueService.get_league_by_id(db, league_id)
    if not league:
        raise HTTPException(status_code=404, detail="League not found")
    
    return LeagueResponse(
        id=league.id,
        name=league.name,
        country=league.country,
        logo=league.logo,
        season=league.season
    )