from db import db

class Tecnico(db.Model):
    __tablename__ = 'Tecnicos'
    id = db.Column('id', db.Integer, primary_key=True, unique=True, autoincrement=False)
    nombre = db.Column(db.String(30))
    apellido = db.Column(db.String(30))
    dni = db.Column(db.Integer, unique=True)
    nacimiento = db.Column(db.Date())
    sexo = db.Column(db.Enum('Masculino', 'Femenino'))
    equipos = db.Column(db.Integer, db.ForeignKey('Equipos.id'))
    pases = db.relationship('Pase', backref='id_tecnico')

    def __init__(self, id, nombre, apellido, dni, nacimiento, sexo, equipos, categoria):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.nacimiento = nacimiento
        self.sexo = sexo
        self.equipos = equipos
        self.categoria = categoria
    
    def __asdict__(self):
        return {'nombre':self.nombre, 'apellido':self.apellido, 'dni':self.dni, 'id':self.id, 'nacimiento':self.nacimiento, 'sexo':self.sexo, 'equipos':self.equipos, 'categoria':self.categoria}


def nuevo_tecnico(id, nombre, apellido, dni, nacimiento, sexo, equipos, categoria):
    tecnico = Tecnico(id, nombre, apellido, dni, nacimiento, sexo, equipos, categoria)
    db.session.add(tecnico)
    db.session.commit()
    return tecnico