from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash, jsonify
from db import db
from flask_cors import CORS
from db.jugadores.jugadores import Jugador, nuevo_jugador 
from db.asociaciones.asociaciones import Asociacion, nueva_asociacion
from db.clubes.clubes import Club, nuevo_club
from db.categorias.categorias import Categoria, nueva_categoria
from db.pases.pases import Pase, nuevo_pase
from __init__ import create_app

app = create_app()
cors = CORS(app, resources={r"/*": {'origins':"*"}})



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

@app.route('/asociacion', methods=['GET', 'POST', 'PUT', 'DELETE'])
def asociacion():
    asociaciones = Asociacion.query.all()
    print([a.__asdict__() for a in asociaciones])
    if request.method == 'GET':
        asociaciones = Asociacion.query.all()
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
        abreviatura_existe = Asociacion.query.filter_by(abreviatura=abreviatura).first()
        
        if nombre_existe:
            print('Asociacion ya existe')
            return 'Asociacion ya existe'
        if abreviatura_existe:
            print('abreviatura ya existe')
            return 'abreviatura ya existe'
        else:
            nueva_asociacion(nombre, abreviatura, provincia)
            print(f'Asociacion {nombre} {abreviatura} {provincia}, creado')
            asociaciones = Asociacion.query.all()
            response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

    if request.method == 'PUT':
        print('PUT')
        valores = request.get_json()
        id = valores['id']
        print(valores)
        asociacion = Asociacion.query.filter_by(id=id).first()
        #clubes_relacionados = Club.query.filter_by(asociacion=id)
        #clubes_relacionados.update({'asociacion': None})
        print(asociacion.nombre, asociacion.abreviatura, asociacion.provincia)
        asociacion.nombre = valores['nombre']
        asociacion.abreviatura = valores['abreviatura']
        asociacion.provincia = valores['provincia']
        db.session.commit()
        print('Asociacion ', id, ' editado')
        asociaciones = Asociacion.query.all()
        print([a.__asdict__() for a in asociaciones])
        response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'DELETE':
        print('delete')
        id = request.get_json()
        print(id)
        asociacion = Asociacion.query.filter_by(id=id)
        clubes_relacionados = Club.query.filter_by(asociacion=id)
        clubes_relacionados.update({'asociacion': None})
        asociacion.delete()
        db.session.commit()
        print('Asociacion ', id, ' eliminado')
        asociaciones = Asociacion.query.all()
        print([a.__asdict__() for a in asociaciones])
        response = jsonify({
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


    # response = jsonify({
    #         'asociaciones': [a.__asdict__() for a in asociaciones],
    #         })
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # return response


@app.route('/club', methods=['GET', 'POST', 'PUT', 'DELETE'])
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
        print(request.get_json())
        nombre = request.json['clubes'][-1]['nombre']
        asociacion = request.json['clubes'][-1]['asociacion']
        nombrecorto = request.json['clubes'][-1]['nombrecorto']
        abreviatura = request.json['clubes'][-1]['abreviatura']
        escudo = request.json['clubes'][-1]['escudo']

        nombre_existe = Club.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Club.query.filter_by(abreviatura=abreviatura).first()
        
        if nombre_existe:
            print('club ya existe')
            return'club ya existe'
        if abreviatura_existe:
            print('abreviatura ya existe')
            return'abreviatura ya existe'
        else:
            nuevo_club(nombre, asociacion, nombrecorto, abreviatura, escudo)
            print(f'club {nombre} {asociacion} {nombrecorto} {abreviatura} creado')
            asociaciones = Club.query.all()
            response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
            'asociaciones': [a.__asdict__() for a in asociaciones],
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

    if request.method == 'PUT':
        print('PUT')
        valores = request.get_json()
        id = valores['id']
        print(valores)
        club = Club.query.filter_by(id=id).first()
        #clubes_relacionados = Club.query.filter_by(asociacion=id)
        #clubes_relacionados.update({'asociacion': None})
        print(club.nombre, club.abreviatura, club.asociacion, club.nombrecorto)
        club.nombre = valores['nombre']
        club.asociacion = valores['asociacion']
        club.nombrecorto = valores['nombrecorto']
        club.abreviatura = valores['abreviatura']
        club.escudo = valores['escudo']
        db.session.commit()
        print('Club ', id, ' editado')
        clubes = Club.query.all()
        print([c.__asdict__() for c in clubes])
        response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'DELETE':
        print('delete')
        id = request.get_json()
        print(id)
        club = Club.query.filter_by(id=id)
        #clubes_relacionados = Club.query.filter_by(asociacion=id)
        #clubes_relacionados.update({'asociacion': None})
        club.delete()
        db.session.commit()
        print('Club ', id, ' eliminado')
        clubes = Club.query.all()
        print([c.__asdict__() for c in clubes])
        response = jsonify({
            'clubes': [c.__asdict__() for c in clubes],
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

