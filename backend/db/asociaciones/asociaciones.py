from db import db
from db.clubes.clubes import Club


class Asociacion(db.Model):
    __tablename__ = 'Asociaciones'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    abreviatura = db.Column(db.String(12))
    clubes = db.relationship(Club, backref='nombre_asociacion')

    def __init__(self, nombre, abreviatura):
        self.nombre = nombre
        self.abreviatura = abreviatura

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.abreviatura}'

def nueva_asociacion(nombre, abreviatura):
    asociacion = Asociacion(nombre, abreviatura)
    db.session.add(asociacion)
    db.session.commit()
    return asociacion