from mysql.connector import connect, Error

try:
    with connect(
        host="localhost",
        user=input("Enter username: "),
        password=input("Enter password: "),
    ) as connection:
        create_db_query = "CREATE DATABASE sistema"
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