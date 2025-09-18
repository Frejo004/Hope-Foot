from fastapi import APIRouter
from app.services.cache_manager import cache_manager

router = APIRouter()

@router.get("/api-status")
async def get_api_status():
    """Vérifier le statut de l'API et des appels"""
    return {
        "api_calls_used": cache_manager.api_calls_count,
        "api_calls_limit": cache_manager.max_calls_per_minute,
        "can_make_call": cache_manager.can_make_api_call(),
        "last_reset": cache_manager.last_reset.isoformat()
    }