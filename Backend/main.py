from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, matches, teams, predictions, analytics, status
from app.services.sync_scheduler import sync_scheduler
import asyncio

app = FastAPI(title="Hope Foot API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(matches.router, prefix="/api/matches", tags=["matches"])
app.include_router(teams.router, prefix="/api/teams", tags=["teams"])
app.include_router(predictions.router, prefix="/api/predictions", tags=["predictions"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])
app.include_router(status.router, prefix="/api/status", tags=["status"])

@app.get("/")
async def root():
    return {"message": "Hope Foot API"}

@app.on_event("startup")
async def startup_event():
    """Démarrer la synchronisation au lancement"""
    asyncio.create_task(sync_scheduler.start_sync_task())

@app.on_event("shutdown")
async def shutdown_event():
    """Arrêter la synchronisation"""
    sync_scheduler.stop_sync_task()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)