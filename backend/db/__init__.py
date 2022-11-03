from flask_sqlalchemy import SQLAlchemy
from os import path
from pymysql import connect, Error

db = SQLAlchemy()
DB_NAME = 'amebal'
USERNAME = 'root'
PASSWORD = '[$Ant:1005]'

show_db_query = "SHOW DATABASES"

query = "ALTER TABLE `amebal`.`Asociaciones` ADD COLUMN `provincias` VARCHAR(20) NULL AFTER `abreviatura`;"

'''
try:
    connection = connect(
        host="127.0.0.1",
        port=3308,
        user=USERNAME,
        password=PASSWORD
    )
    cur = connection.cursor()
    print('conexion')
    cur.execute(query)
    print('capo')
except Error as e:
        print(e)

try:
    connection = connect(
        host="127.0.0.1",
        port=3306,
        user=USERNAME,
        #password=PASSWORD
    )
    create_db_query = f"CREATE DATABASE {DB_NAME}"
    cur = connection.cursor()
    print('conexion')
    cur.execute(create_db_query)
    print('db creada')
except Error as e:
    try:
        connection = connect(
            host="127.0.0.1",
            port=3306,
            user=USERNAME,
            #password=PASSWORD,
            database='amebal'
        )
        cur = connection.cursor()
        cur.execute(show_db_query)
        for db in cur:
            print(db)
    except Error as e:
        print(e)

'''
def create_database(app):
    if not path.exists('backend/' + DB_NAME):
        db.create_all(app=app)
        print('Base de datos creada')