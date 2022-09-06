from flask_sqlalchemy import SQLAlchemy
from os import path
from mysql.connector import connect, Error

db = SQLAlchemy()
DB_NAME = 'amebal'
USERNAME = 'root'
PASSWORD = '1234'


try:
    with connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    ) as connection:
        create_db_query = "CREATE DATABASE amebal"
        with connection.cursor() as cursor:
            cursor.execute(create_db_query)
except Error as e:
    print(e)
    
show_db_query = "SHOW DATABASES"
with connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    ) as connection:
    connection.cursor.execute(show_db_query)
    for db in cursor:
        print(db)

def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')