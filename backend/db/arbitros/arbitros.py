from db import db

class Arbitro(db.Model):
    __tablename__ = 'Arbitros'
    id = db.Column('id', db.Integer, primary_key=True, unique=True, autoincrement=False)
    nombre = db.Column(db.String(30))
    apellido = db.Column(db.String(30))
    dni = db.Column(db.Integer, unique=True)
    nacimiento = db.Column(db.Date())
    sexo = db.Column(db.Enum('Masculino', 'Femenino'))

    def __init__(self, id, nombre, apellido, dni, nacimiento, sexo):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.nacimiento = nacimiento
        self.sexo = sexo
    
    def __asdict__(self):
        return {'nombre':self.nombre, 'apellido':self.apellido, 'dni':self.dni, 'id':self.id, 'nacimiento':self.nacimiento, 'sexo':self.sexo}


def nuevo_arbitro(id, nombre, apellido, dni, nacimiento, sexo):
    arbitro = Arbitro(id, nombre, apellido, dni, nacimiento, sexo)
    db.session.add(arbitro)
    db.session.commit()
    return arbitro