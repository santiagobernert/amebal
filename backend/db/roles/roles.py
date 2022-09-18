from db import db

class Rol(db.Model):
    __tablename__ = 'Roles'
    id = db.Column('id', db.Integer, primary_key=True, autoincrement=False)
    nombre = db.Column(db.String(30))
    letra = db.Column(db.String(1))
    usuarios = db.relationship('Usuario', backref='id_rol')


    def __init__(self, id, nombre, letra):
        self.id = id
        self.nombre = nombre
        self.letra = letra

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.letra}'

def nuevo_rol(id, nombre, letra):
    rol = Rol(id, nombre, letra)
    db.session.add(rol)
    db.session.commit()
    return rol