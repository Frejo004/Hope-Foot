#!/usr/bin/env python3
"""
Script de migration pour créer/mettre à jour les tables de la base de données
"""
from app.core.database import engine, Base
from app.models.models import League, Team, Match, Prediction

def run_migrations():
    """Créer toutes les tables dans la base de données"""
    print("Lancement des migrations...")
    
    try:
        # Créer toutes les tables
        Base.metadata.create_all(bind=engine)
        print("Migrations terminées avec succès!")
        print("Tables créées: leagues, teams, matches, predictions")
        
    except Exception as e:
        print(f"Erreur lors des migrations: {e}")
        return False
    
    return True

if __name__ == "__main__":
    run_migrations()