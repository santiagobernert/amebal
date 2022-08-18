from . import db
from mysql.connector import connect, Error


create_partidos_table_query = """
CREATE TABLE personas(
    id INT PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(20),
    release_year YEAR(4),
    genre VARCHAR(100),
    collection_in_mil INT
)
"""
try:
    with connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    ) as connection:
        with connection.cursor() as cursor:
            cursor.execute(create_partidos_table_query)
            connection.commit()
except Error as e:
    print(e)