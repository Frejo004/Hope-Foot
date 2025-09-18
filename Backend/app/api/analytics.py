from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db

router = APIRouter()

@router.get("/stats")
async def get_user_stats(db: Session = Depends(get_db)):
    """Récupérer les statistiques utilisateur"""
    return {
        "data": {
            "total_predictions": 0,
            "correct_predictions": 0,
            "accuracy": 0.0,
            "rank": 0
        }
    }

@router.get("/leaderboard")
async def get_leaderboard(db: Session = Depends(get_db)):
    """Récupérer le classement"""
    return {"data": []}