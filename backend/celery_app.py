from celery import Celery
from app.core.config import settings

celery_app = Celery(
    "hopefoot",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
    include=["app.tasks"]
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    beat_schedule={
        "sync-matches-every-minute": {
            "task": "app.tasks.sync_matches_task",
            "schedule": 60.0,  # Every minute
        },
        "sync-leagues-daily": {
            "task": "app.tasks.sync_leagues_task",
            "schedule": 86400.0,  # Daily
        },
    },
)