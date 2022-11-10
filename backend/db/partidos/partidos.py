from db import db

class Partido(db.Model):
    __tablename__ = 'Partidos'
    id = db.Column('id', db.Integer, primary_key=True, autoincrement=False)
    titulo = db.Column(db.String(30))
    torneo = db.Column(db.String(20))
    categoria = db.Column(db.String(20))
    equipoA = db.Column(db.String(20))
    equipoB = db.Column(db.String(20))
    arbitro1 = db.Column(db.Integer)
    arbitro2 = db.Column(db.Integer)
    mesa1 = db.Column(db.Integer)
    mesa2 = db.Column(db.Integer)
    sede = db.Column(db.String(50))
    fecha = db.Column(db.String(50))
    jornada = db.Column(db.String(50))
    resultado = db.Column(db.String(150))


    def __init__(self, id, titulo, torneo, categoria, equipoA, equipoB, arbitro1, arbitro2, mesa1, mesa2, sede, fecha, jornada, resultado):
        self.id = id
        self.titulo = titulo
        self.torneo = torneo
        self.categoria = categoria
        self.equipoA = equipoA
        self.equipoB = equipoB
        self.arbitro1 = arbitro1
        self.arbitro2 = arbitro2
        self.mesa1 = mesa1
        self.mesa2 = mesa2
        self.sede = sede
        self.fecha = fecha
        self.jornada = jornada
        self.resultado = resultado
    
    def __asdict__(self):
        return {'id':self.id,'titulo': self.titulo,'torneo': self.torneo,'categoria': self.categoria,'equipoA': self.equipoA,'equipoB': self.equipoB,'sede': self.sede,'fecha': self.fecha,'jornada': self.jornada,'resultado': self.resultado}

    def string_club_categoria(self):
        return f' {self.club} {self.categoria} '

def nuevo_partido(id, titulo, torneo, categoria, equipoA, equipoB, arbitro1, arbitro2, mesa1, mesa2, sede, fecha, jornada, resultado):
    partido = Partido(id, titulo, torneo, categoria, equipoA, equipoB, arbitro1, arbitro2, mesa1, mesa2, sede, fecha, jornada, resultado)
    db.session.add(partido)
    db.session.commit()
    return partido
