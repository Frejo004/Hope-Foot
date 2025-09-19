# Hope Foot Backend

## Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Setup PostgreSQL database:
```sql
CREATE DATABASE hopefoot;
```

3. Install Redis for Celery tasks

4. Run the application:
```bash
python run.py
```

5. Run Celery worker (separate terminal):
```bash
celery -A celery_app worker --loglevel=info
```

6. Run Celery beat scheduler (separate terminal):
```bash
celery -A celery_app beat --loglevel=info
```

## API Endpoints

- `GET /api/matches` - Get all matches
- `GET /api/matches/{id}` - Get specific match
- `GET /health` - Health check

## Features

- Fetches data from Sportmonks API (40 requests/minute limit respected)
- Stores data in PostgreSQL database
- Background tasks with Celery for data synchronization
- RESTful API for frontend consumption
- CORS enabled for frontend integration