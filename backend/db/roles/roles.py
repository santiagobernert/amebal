from . import db

class Rol(db.Model):
    __tablename__ = 'Roles'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    permisos = db.Column(db.String(30))


    def __init__(self, nombre, permisos):
        self.nombre = nombre
        self.permisos = permisos

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.permisos}'

def nuevo_rol(nombre, permisos):
    rol = Rol(nombre, permisos)
    db.session.add(rol)
    db.session.commit()
    return rol