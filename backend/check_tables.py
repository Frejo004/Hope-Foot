#!/usr/bin/env python3
"""
Script pour vérifier les tables créées dans la base de données
"""
from sqlalchemy import inspect
from app.core.database import engine

def check_tables():
    """Vérifier les tables dans la base de données"""
    print("Vérification des tables dans la base de données...")
    
    try:
        inspector = inspect(engine)
        tables = inspector.get_table_names()
        
        print(f"Nombre de tables trouvées: {len(tables)}")
        print("Tables créées:")
        for table in tables:
            print(f"  - {table}")
            
        # Vérifier les colonnes de chaque table
        for table in tables:
            print(f"\nColonnes de la table '{table}':")
            columns = inspector.get_columns(table)
            for column in columns:
                print(f"  - {column['name']} ({column['type']})")
                
    except Exception as e:
        print(f"Erreur lors de la vérification: {e}")
        return False
    
    return True

if __name__ == "__main__":
    check_tables()