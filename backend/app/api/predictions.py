from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.services.database_service import PredictionService
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class PredictionResponse(BaseModel):
    id: int
    match_id: int
    user_id: str
    prediction: str
    confidence: float
    created_at: datetime
    result: str = None

@router.get("/", response_model=List[PredictionResponse])
async def get_predictions(db: Session = Depends(get_db)):
    predictions = PredictionService.get_all_predictions(db)
    
    result = []
    for prediction in predictions:
        result.append(PredictionResponse(
            id=prediction.id,
            match_id=prediction.match_id,
            user_id=prediction.user_id,
            prediction=prediction.prediction,
            confidence=prediction.confidence,
            created_at=prediction.created_at,
            result=prediction.result
        ))
    
    return result

@router.get("/{prediction_id}", response_model=PredictionResponse)
async def get_prediction(prediction_id: int, db: Session = Depends(get_db)):
    prediction = PredictionService.get_prediction_by_id(db, prediction_id)
    if not prediction:
        raise HTTPException(status_code=404, detail="Prediction not found")
    
    return PredictionResponse(
        id=prediction.id,
        match_id=prediction.match_id,
        user_id=prediction.user_id,
        prediction=prediction.prediction,
        confidence=prediction.confidence,
        created_at=prediction.created_at,
        result=prediction.result
    )

@router.get("/match/{match_id}", response_model=List[PredictionResponse])
async def get_predictions_by_match(match_id: int, db: Session = Depends(get_db)):
    predictions = PredictionService.get_predictions_by_match(db, match_id)
    
    result = []
    for prediction in predictions:
        result.append(PredictionResponse(
            id=prediction.id,
            match_id=prediction.match_id,
            user_id=prediction.user_id,
            prediction=prediction.prediction,
            confidence=prediction.confidence,
            created_at=prediction.created_at,
            result=prediction.result
        ))
    
    return result

@router.get("/user/{user_id}", response_model=List[PredictionResponse])
async def get_predictions_by_user(user_id: str, db: Session = Depends(get_db)):
    predictions = PredictionService.get_predictions_by_user(db, user_id)
    
    result = []
    for prediction in predictions:
        result.append(PredictionResponse(
            id=prediction.id,
            match_id=prediction.match_id,
            user_id=prediction.user_id,
            prediction=prediction.prediction,
            confidence=prediction.confidence,
            created_at=prediction.created_at,
            result=prediction.result
        ))
    
    return result