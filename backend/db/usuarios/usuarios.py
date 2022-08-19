from . import db
from flask_login import UserMixin

class Usuario(db.Model, UserMixin):
    __tablename__ = 'Usuarios'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    apellido = db.Column(db.String(30))
    email = db.Column(db.String(50))
    contraseña = db.Column(db.String(50))
    club = db.Column(db.String(50))
    rol = db.Column(db.String(50))
    categoria = db.Column(db.String(50))
    numero = db.Column(db.String(50))

    def __init__(self, nombre, apellido, email, contraseña, club, rol, categoria, numero):
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.contraseña = contraseña
        self.club = club
        self.rol = rol
        self.categoria = categoria
        self.numero = numero
    
    def __str__(self):
        return f'{self.nombre} {self.apellido} {self.id} {self.mail} {self.contraseña}'

    def string_club_categoria(self):
        return f' {self.club} {self.categoria} '

def nuevo_usurio(nombre, apellido, email, contraseña, club, rol, categoria, numero):
    usuario = Usuario(nombre, apellido, email, contraseña, club, rol, categoria, numero)
    db.session.add(usuario)
    db.session.commit()
    return usuario

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

