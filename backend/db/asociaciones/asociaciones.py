from . import db

class Asociacion(db.Model):
    __tablename__ = 'Asociaciones'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))

    def __init__(self, nombre):
        self.nombre = nombre

    
    def __str__(self):
        return f'{self.id} {self.nombre}'

def nueva_asociacion(nombre):
    asociacion = Asociacion(nombre)
    db.session.add(asociacion)
    db.session.commit()
    return asociacion