from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from pydantic import BaseModel

router = APIRouter()

class PredictionCreate(BaseModel):
    match_id: int
    prediction: str  # home, away, draw
    confidence: float

@router.post("/")
async def create_prediction(prediction: PredictionCreate, db: Session = Depends(get_db)):
    """Créer une prédiction"""
    return {"message": "Prediction created", "data": prediction}

@router.get("/")
async def get_user_predictions(db: Session = Depends(get_db)):
    """Récupérer les prédictions de l'utilisateur"""
    return {"data": []}