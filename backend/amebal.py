from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash
from .db.jugadores.jugadores import Jugador, nuevo_jugador 
from db.asociaciones.asociaciones import Asociacion, nueva_asociacion
from db.pases.pases import Pase, nuevo_pase

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return {'result': 'hola perrito'}

@app.route('/jugador', methods=['POST'])
def jugador():
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
        nacimiento = request.form.get('nacimiento')
        club = request.form.get('club')
        categoria = request.form.get('categoria')

        nombre_existe = Jugador.query.filter_by(nombre=nombre).first()
        apellido_existe = Jugador.query.filter_by(apellido=apellido).first()
        
        if nombre_existe or apellido_existe:
            print('jugador ya existe')
        else:
            nuevo_jugador(nombre, apellido, nacimiento, club, categoria)
            print('jugador creado')
            return { 
                'nombre': nombre,
                'apellido': apellido,
                'nacimiento': nacimiento,
                'club': club,
                'categoria': categoria
            }
    return render_template('jugadores.html')

@app.route('/pase', methods=['POST'])
def pase():
    if request.method == 'POST':
        jugador = request.form.get('nombre')
        fecha = request.form.get('fecha')
        club_salida = request.form.get('clubsalida')
        club_llegada = request.form.get('clubllegada')

        jugador_existe = Pase.query.filter_by(jugador=jugador).first()
        
        if jugador_existe:
            print('pase ya existe')
        else:
            nuevo_pase(jugador, fecha, club_salida, club_llegada)
            print('pase creado')
            return { 
                'jugador': jugador,
                'fecha': fecha,
                'club_salida': club_salida,
                'club_llegada': club_llegada,
            }
    return render_template('pases.html')

@app.route('/asociacion', methods=['POST'])
def asociacion():
    if request.method == 'POST':
        nombre = request.form.get('nombre')

        nombre_existe = Asociacion.query.filter_by(nombre=nombre).first()
        
        if nombre_existe:
            print('asociacion ya existe')
        else:
            nueva_asociacion(nombre)
            print('asociacion creado')
            return { 
                'asociacion': nombre,
            }
    return render_template('asociaciones.html')

if __name__ == '__main__':
    app.run(debug=True)

