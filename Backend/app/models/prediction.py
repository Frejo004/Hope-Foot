from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.sql import func
from config.database import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    match_id = Column(Integer, ForeignKey("matches.id"))
    prediction = Column(String)  # home, away, draw
    confidence = Column(Float)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    result = Column(String, nullable=True)  # win, loss, pending