from . import db

class Rol(db.Model):
    __tablename__ = 'Roles'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    letra = db.Column(db.String(1))
    usuarios = db.relationship('Usuarios', backref='rol')


    def __init__(self, nombre, letra):
        self.nombre = nombre
        self.letra = letra

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.letra}'

def nuevo_rol(nombre, letra):
    rol = Rol(nombre, letra)
    db.session.add(rol)
    db.session.commit()
    return rol