from . import db

class Categoria(db.Model):
    __tablename__ = 'Categorias'
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    años = db.Column(db.INT(30))


    def __init__(self, nombre, años):
        self.nombre = nombre
        self.años = años

    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.años}'

def nueva_categoria(nombre, años):
    categoria = Categorias(nombre, años)
    db.session.add(categoria)
    db.session.commit()
    return categoria