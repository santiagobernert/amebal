from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash, jsonify
from db.jugadores.jugadores import Jugador, nuevo_jugador 
from db.asociaciones.asociaciones import Asociacion, nueva_asociacion
from db.clubes.clubes import Club, nuevo_club
from db.categorias.categorias import Categoria, nueva_categoria
from db.pases.pases import Pase, nuevo_pase
from __init__ import create_app

app = create_app()




@app.route('/')
@app.route('/home')
def home():
    return {'result': 'hola perrito'}

@app.route('/jugador', methods=['GET', 'POST'])
def jugador():
    jugadores = Jugador.query.all()
    clubes = Club.query.all()
    categorias = Categoria.query.all()
    if request.method == 'GET':
        return render_template('jugadores.html', jugadores=jugadores, clubes=clubes, categorias=categorias)
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
            print(f'jugador {nombre} {apellido}, creado')
            jugadores = Jugador.query.all()
            return render_template('asociaciones.html', jugadores=jugadores, clubes=clubes, categorias=categorias)
    return render_template('jugadores.html')

@app.route('/pases', methods=['GET', 'POST'])
def pase():
    pases = Pase.query.all()
    if request.method == 'GET':
        return render_template('pases.html', pases=pases)
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

@app.route('/asociacion', methods=['GET', 'POST'])
def asociacion():
    asociaciones = Asociacion.query.all()
    if request.method == 'GET':
        response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    if request.method == 'POST':
        nombre = request.json['nombre']
        abreviatura = request.json['abreviatura']
        provincia = request.json['provincia']

        nombre_existe = Asociacion.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Asociacion.query.filter_by(asociacion=asociacion).first()
        
        if nombre_existe:
            flash('Asociacion ya existe')
            print('Asociacion ya existe')
        if abreviatura_existe:
            flash('abreviatura ya existe')
            print('abreviatura ya existe')
        else:
            nueva_asociacion(nombre, abreviatura, provincia)
            print(f'club {nombre} {abreviatura} {provincia}, creado')
            asociaciones = Asociacion.query.all()
            response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/club', methods=['GET', 'POST'])
def club():
    clubes = Club.query.all()
    asociaciones = Asociacion.query.all()
    if request.method == 'GET':
        response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    if request.method == 'POST':
        request.headers.add('Access-Control-Allow-Origin', '*')
        nombre = request.json['nombre']
        asociacion = request.json['asociacion']

        nombre_existe = Club.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Club.query.filter_by(asociacion=asociacion).first()
        
        if nombre_existe:
            flash('club ya existe')
            print('club ya existe')
        if abreviatura_existe:
            flash('abreviatura ya existe')
            print('abreviatura ya existe')
        else:
            nuevo_club(nombre, asociacion)
            print(f'club {nombre} {asociacion}, creado')
            asociaciones = Club.query.all()
            response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api', methods=['GET'])
def api():
    response = jsonify( {'data': 'hace algo'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
if __name__ == '__main__':
    app.run(debug=True)

