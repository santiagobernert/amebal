from db import db
from db.estadisticas.estadisticas import Estadistica

class Jugador(db.Model):
    __tablename__ = 'Jugadores'
    id = db.Column('id', db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(30))
    apellido = db.Column(db.String(30))
    dni = db.Column(db.Integer, unique=True)
    nacimiento = db.Column(db.Date())
    sexo = db.Column(db.Enum('Masculino', 'Femenino'))
    club = db.Column(db.String(50), db.ForeignKey('Clubes.nombre'))
    categoria = db.Column(db.String(12), db.ForeignKey('Categorias.nombre'))
    pases = db.relationship('Pase', backref='id_jugador')
    estadisticas = db.relationship(Estadistica, backref='id_jugador')

    def __init__(self, nombre, apellido, dni, nacimiento, sexo, club, categoria):
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.nacimiento = nacimiento
        self.sexo = sexo
        self.club = club
        self.categoria = categoria
    
    def __str__(self):
        return f'{self.nombre} {self.apellido} {self.dni} {self.id} {self.nacimiento} {self.sexo} {self.club} {self.categoria}'


def nuevo_jugador(nombre, apellido, dni, nacimiento, sexo, club, categoria):
    jugador = Jugador(nombre, apellido, dni, nacimiento, sexo, club, categoria)
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

