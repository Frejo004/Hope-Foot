from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.services.database_service import TeamService
from pydantic import BaseModel

router = APIRouter()

class TeamResponse(BaseModel):
    id: int
    name: str
    logo: str
    country: str

@router.get("/", response_model=List[TeamResponse])
async def get_teams(db: Session = Depends(get_db)):
    teams = TeamService.get_all_teams(db)
    
    result = []
    for team in teams:
        result.append(TeamResponse(
            id=team.id,
            name=team.name,
            logo=team.logo,
            country=team.country
        ))
    
    return result

@router.get("/{team_id}", response_model=TeamResponse)
async def get_team(team_id: int, db: Session = Depends(get_db)):
    team = TeamService.get_team_by_id(db, team_id)
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    
    return TeamResponse(
        id=team.id,
        name=team.name,
        logo=team.logo,
        country=team.country
    )

@router.get("/country/{country}", response_model=List[TeamResponse])
async def get_teams_by_country(country: str, db: Session = Depends(get_db)):
    teams = TeamService.get_teams_by_country(db, country)
    
    result = []
    for team in teams:
        result.append(TeamResponse(
            id=team.id,
            name=team.name,
            logo=team.logo,
            country=team.country
        ))
    
    return result