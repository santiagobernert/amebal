from db import db
from db.torneos.torneos import Torneo

class Equipo(db.Model):
    __tablename__ = 'Equipos'
    id = db.Column('id', db.Integer, primary_key=True, autoincrement=False)
    club = db.Column(db.Integer, db.ForeignKey('Clubes.id'))
    categoria = db.Column(db.Integer, db.ForeignKey('Categorias.id'))
    jugadores = db.Column(db.String(40))
    tecnicos = db.Column(db.String(10))
    refuerzos = db.Column(db.String(10))
    estadisticas = db.relationship('Estadistica', backref='id_club')
    partidos = db.relationship('Partido', backref='id_club')

    

    def __init__(self, id, club, categoria, jugadores, tecnicos, refuerzos):
        self.id = id
        self.club = club
        self.categoria = categoria
        self.jugadores = jugadores
        self.tecnicos = tecnicos
        self.refuerzos = refuerzos

    
    def __asdict__(self):
        return  {'id':self.id, 'club':self.club, 'categoria':self.categoria, 'jugadores': self.jugadores, 'tecnicos': self.tecnicos, 'refuerzos': self.refuerzos}

def nuevo_equipo(id, club, categoria, jugadores, tecnicos, refuerzos):
    equipo = Equipo(id, club, categoria, jugadores, tecnicos, refuerzos)
    db.session.add(equipo)
    db.session.commit()
    return equipo