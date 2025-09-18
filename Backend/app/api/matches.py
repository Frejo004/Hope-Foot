from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from config.database import get_db
from app.services.cache_manager import cache_manager
from typing import Optional

router = APIRouter()

@router.get("/")
async def get_matches(
    date: Optional[str] = Query(None),
    league: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    """Récupérer les matchs depuis cache/DB"""
    matches = await cache_manager.get_matches_cached(db, date)
    return {"data": matches, "source": "cache"}

@router.get("/{match_id}")
async def get_match_details(match_id: int, db: Session = Depends(get_db)):
    """Récupérer les détails d'un match"""
    # TODO: Implémenter la récupération depuis la DB ou Sportmonks
    return {"data": {"id": match_id, "status": "scheduled"}}