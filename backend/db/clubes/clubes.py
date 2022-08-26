from . import db

class Club(db.Model):
    __tablename__ = 'Clubes'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    asociacion = db.Column(db.String(30), db.ForeignKey('asociaciones.nombre'))
    jugadores = db.relationship('Jugadores', backref='club')
    estadisticas = db.relationship('Estadisticas', backref='id_club')


    def __init__(self, nombre, asociacion):
        self.nombre = nombre
        self.asociacion = asociacion

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.asociacion}'

def nuevo_club(nombre, asociacion):
    club = Club(nombre, asociacion)
    db.session.add(club)
    db.session.commit()
    return club