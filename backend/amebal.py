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
        return render_template('asociaciones.html', asociaciones=asociaciones)
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        abreviatura = request.form.get('abreviatura')

        nombre_existe = Asociacion.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Asociacion.query.filter_by(abreviatura=abreviatura).first()
        
        if nombre_existe:
            flash('asociacion ya existe')
            print('asociacion ya existe')
        if abreviatura_existe:
            flash('abreviatura ya existe')
            print('abreviatura ya existe')
        else:
            nueva_asociacion(nombre, abreviatura)
            print(f'asociacion {nombre} {abreviatura}, creado')
            asociaciones = Asociacion.query.all()
            return render_template('asociaciones.html', asociaciones=asociaciones)
    return render_template('asociaciones.html', asociaciones=asociaciones)


@app.route('/club', methods=['GET', 'POST'])
def club():
    clubes = Club.query.all()
    asociaciones = Asociacion.query.all()
    if request.method == 'GET':
        return render_template('clubes.html', clubes=clubes, asociaciones=asociaciones)
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        asociacion = request.form.get('asociacion')

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
            return render_template('clubes.html', clubes=clubes, asociaciones=asociaciones)
    return render_template('clubes.html', clubes=clubes, asociaciones=asociaciones)

@app.route('/api', methods=['GET'])
def api():
    response = jsonify( {'data': 'hace algo'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
if __name__ == '__main__':
    app.run(debug=True)

