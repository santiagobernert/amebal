from db import db

class Pago(db.Model):
    __tablename__ = 'Pagos'
    id = db.Column('id', db.Integer, primary_key=True, autoincrement=False)
    usuario = db.Column(db.Integer)
    fecha = db.Column(db.Date)
    importe = db.Column(db.String(8))
    banco = db.Column(db.String(20))
    

    def __init__(self, id, usuario, fecha, importe, banco):
        self.id = id
        self.usuario = usuario
        self.fecha = fecha
        self.importe = importe
        self.banco = banco

    
    def __asdict__(self):
        return  {'id':self.id, 'usuario':self.usuario, 'fecha':self.fecha, 'importe': self.importe, 'banco': self.banco}

def nuevo_pago(id, usuario, fecha, importe, banco):
    pago = Pago(id, usuario, fecha, importe, banco)
    db.session.add(pago)
    db.session.commit()
    return pago