from db import db

class Pase(db.Model):
    __tablename__ = 'Pases'
    id = db.Column('id', db.Integer, primary_key=True, autoincrement=False)
    jugador = db.Column(db.Integer, db.ForeignKey('Jugadores.id'))
    fecha = db.Column(db.Date)
    club_salida = db.Column(db.Integer, db.ForeignKey('Clubes.id'))
    club_llegada = db.Column(db.Integer, db.ForeignKey('Clubes.id'))
    

    def __init__(self, id, jugador, fecha, club_salida, club_llegada):
        self.id = id
        self.jugador = jugador
        self.fecha = fecha
        self.club_salida = club_salida
        self.club_llegada = club_llegada

    
    def __asdict__(self):
        return  {'id':self.id, 'jugador':self.jugador, 'fecha':self.fecha, 'club_salida': self.club_salida, 'club_llegada': self.club_llegada}

def nuevo_pase(id, jugador, fecha, club_salida, club_llegada):
    pase = Pase(id, jugador, fecha, club_salida, club_llegada)
    db.session.add(pase)
    db.session.commit()
    return pase