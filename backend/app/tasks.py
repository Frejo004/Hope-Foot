from celery_app import celery_app
from app.services.data_sync import DataSyncService
from app.core.database import SessionLocal
import asyncio

@celery_app.task
def sync_matches_task():
    """Sync matches data from Sportmonks API every minute"""
    db = SessionLocal()
    try:
        sync_service = DataSyncService()
        asyncio.run(sync_service.sync_matches(db))
    finally:
        db.close()

@celery_app.task
def sync_leagues_task():
    """Sync leagues data from Sportmonks API daily"""
    db = SessionLocal()
    try:
        sync_service = DataSyncService()
        asyncio.run(sync_service.sync_leagues(db))
    finally:
        db.close()

@celery_app.task
def sync_teams_task(league_id: int):
    """Sync teams data for a specific league"""
    db = SessionLocal()
    try:
        sync_service = DataSyncService()
        asyncio.run(sync_service.sync_teams(db, league_id))
    finally:
        db.close()