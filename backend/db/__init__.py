from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()
DB_NAME = 'amebal'
USERNAME = 'root'
PASSWORD = 'santi1005'


def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')