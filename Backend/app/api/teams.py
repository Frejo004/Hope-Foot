from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from app.services.sportmonks import sportmonks

router = APIRouter()

@router.get("/")
async def get_teams(db: Session = Depends(get_db)):
    """Récupérer les équipes"""
    teams = await sportmonks.get_teams()
    return {"data": teams}

@router.get("/{team_id}")
async def get_team_details(team_id: int, db: Session = Depends(get_db)):
    """Récupérer les détails d'une équipe"""
    return {"data": {"id": team_id, "name": "Team Name"}}