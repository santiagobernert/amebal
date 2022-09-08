from flask_sqlalchemy import SQLAlchemy
from os import path
from pymysql import connect, Error

db = SQLAlchemy()
DB_NAME = 'amebal'
USERNAME = 'root'
PASSWORD = '1234'


try:
    connection = connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    )
    create_db_query = "CREATE DATABASE amebal"
    cur = connection.cursor()
    cur.execute(create_db_query)
except Error as e:
    print(e)
    
show_db_query = "SHOW DATABASES"
try:
    connection = connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    )
    cur = connection.cursor()
    cur.execute(show_db_query)
    for db in cur:
        print(db)
except Error as e:
    print(e)

def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')