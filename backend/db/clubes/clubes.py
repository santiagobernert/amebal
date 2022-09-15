from db import db

class Club(db.Model):
    __tablename__ = 'Clubes'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    asociacion = db.Column(db.Integer, db.ForeignKey('Asociaciones.id'))
    #nombrecorto = db.Column(db.String(12))
    #abreviatura = db.Column(db.String(3))
    #escudo = db.Column(db.String(100))
    jugadores = db.relationship('Jugador', backref='nombre_club')
    estadisticas = db.relationship('Estadistica', backref='id_club')


    def __init__(self, nombre, asociacion):
        self.nombre = nombre
        self.asociacion = asociacion

    
    def __asdict__(self):
        return {'id':self.id, 'nombre':self.nombre, 'asociacion':self.asociacion}

def nuevo_club(nombre, asociacion):
    club = Club(nombre, asociacion)
    db.session.add(club)
    db.session.commit()
    return club