from . import db

class Pase(db.Model):
    __tablename__ = 'Pases'
    id = db.Column('id', db.Integer, primary_key=True)
    jugador = db.Column(db.String(30))
    fecha = db.Column(db.Datetime(30))
    club_salida = db.Column(db.String(30))
    club_llegada = db.Column(db.String(30))
    

    def __init__(self, jugador, fecha, club_salida, club_llegada):
        self.jugador = jugador
        self.fecha = fecha
        self.club_salida = club_salida
        self.club_llegada = club_llegada

    
    def __str__(self):
        return f'{self.id} {self.jugador} {self.fecha} {self.club_salida} {self.club_llegada}'

def nuevo_pase(jugador, fecha, club_salida, club_llegada):
    pase = Pase(jugador, fecha, club_salida, club_llegada)
    db.session.add(pase)
    db.session.commit()
    return pase