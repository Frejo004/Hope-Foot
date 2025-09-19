from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import matches
from app.core.database import engine, Base
from app.api import leagues, teams, predictions

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Hope Foot API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(matches.router, prefix="/api/matches", tags=["matches"])
app.include_router(leagues.router, prefix="/api/leagues", tags=["leagues"])
app.include_router(teams.router, prefix="/api/teams", tags=["teams"])
app.include_router(predictions.router, prefix="/api/predictions", tags=["predictions"])

@app.get("/")
async def root():
    return {"message": "Hope Foot API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}