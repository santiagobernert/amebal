from . import db

class Jugador(db.Model):
    __tablename__ = 'Jugadores'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    apellido = db.Column(db.String(30))
    nacimiento = db.Column(db.Date())
    club = db.Column(db.String(50))
    categoria = db.Column(db.String(50))

    def __init__(self, nombre, apellido, nacimiento, club, categoria):
        self.nombre = nombre
        self.apellido = apellido
        self.nacimiento = nacimiento
        self.club = club
        self.categoria = categoria
    
    def __str__(self):
        return f'{self.nombre} {self.apellido} {self.id} {self.nacimiento} {self.club} {self.categoria}'


def nuevo_jugador(nombre, apellido, nacimiento, club, categoria):
    jugador = Jugador(nombre, apellido, nacimiento, club, categoria)
    db.session.add(jugador)
    db.session.commit()
    return jugador

'''
    try:
        with connect(
            host="localhost",
            user=input("Enter username: "),
            password=input("Enter password: "),
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute(create_usuarios_table_query)
                connection.commit()
    except Error as e:
        print(e)'''

