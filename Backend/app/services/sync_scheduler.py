import asyncio
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from config.database import SessionLocal
from app.services.cache_manager import cache_manager

class SyncScheduler:
    def __init__(self):
        self.is_running = False
    
    async def start_sync_task(self):
        """Démarrer la tâche de synchronisation"""
        if self.is_running:
            return
            
        self.is_running = True
        while self.is_running:
            try:
                await self.sync_data()
                # Attendre 6 minutes (10 calls/min max)
                await asyncio.sleep(360)
            except Exception as e:
                print(f"Erreur sync: {e}")
                await asyncio.sleep(60)
    
    async def sync_data(self):
        """Synchroniser les données avec l'API"""
        db = SessionLocal()
        try:
            if cache_manager.can_make_api_call():
                print(f"Sync données - {datetime.now()}")
                await cache_manager.get_matches_cached(db)
                print(f"API calls utilisés: {cache_manager.api_calls_count}/10")
        finally:
            db.close()
    
    def stop_sync_task(self):
        """Arrêter la synchronisation"""
        self.is_running = False

sync_scheduler = SyncScheduler()