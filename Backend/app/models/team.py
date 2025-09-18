from sqlalchemy import Column, Integer, String, DateTime, JSON
from sqlalchemy.sql import func
from config.database import Base

class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True, index=True)
    sportmonks_id = Column(Integer, unique=True, index=True)
    name = Column(String, index=True)
    logo_url = Column(String, nullable=True)
    country = Column(String, nullable=True)
    league_name = Column(String, nullable=True)
    additional_data = Column(JSON, nullable=True)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())