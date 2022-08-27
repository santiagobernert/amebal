from db import db
from db.categorias.categorias import Categoria

class Partido(db.Model):
    __tablename__ = 'Partidos'
    id = db.Column('id', db.Integer, primary_key=True)
    titulo = db.Column(db.String(30))
    liga = db.Column(db.String(30))
    categoria = db.Column(db.Integer, db.ForeignKey(Categoria.id))
    equipoA = db.Column(db.Integer, db.ForeignKey('Clubes.id'))
    equipoB = db.Column(db.Integer, db.ForeignKey('Clubes.id'))
    sede = db.Column(db.String(50))
    fecha = db.Column(db.String(50))
    jornada = db.Column(db.String(50))
    resultado = db.Column(db.String(150))
    estadisticas = db.relationship('Estadistica', backref='id_partido')


    def __init__(self, titulo, liga, categoria, equipoA, equipoB, sede, fecha, jornada, resultado):
        self.titulo = titulo
        self.liga = liga
        self.categoria = categoria
        self.equipoA = equipoA
        self.equipoB = equipoB
        self.sede = sede
        self.fecha = fecha
        self.jornada = jornada
        self.resultado = resultado
    
    def __str__(self):
        return f'{self.nombre} {self.apellido} {self.id} {self.mail} {self.contraseña}'

    def string_club_categoria(self):
        return f' {self.club} {self.categoria} '

def nuevo_partido(titulo, liga, categoria, equipoA, equipoB, sede, fecha, jornada, resultado):
    partido = Partido(titulo, liga, categoria, equipoA, equipoB, sede, fecha, jornada, resultado)
    db.session.add(partido)
    db.session.commit()
    return partido

'''
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
    print(e)'''