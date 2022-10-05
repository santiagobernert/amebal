from select import select
from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash, jsonify
from db import db
from db.imagenes.imagenes import Imagen
from flask_cors import CORS
from db.jugadores.jugadores import Jugador, nuevo_jugador 
from db.asociaciones.asociaciones import Asociacion, nueva_asociacion
from db.clubes.clubes import Club, nuevo_club
from db.categorias.categorias import Categoria, nueva_categoria
from db.pases.pases import Pase, nuevo_pase
from db.roles.roles import Rol, nuevo_rol
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
    if request.method == 'GET':
        jugadores = Jugador.query.all()
        print([j.__asdict__() for j in jugadores])
        response = jsonify({
            'jugadores': [j.__asdict__() for j in jugadores],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response    
    if request.method == 'POST':
        id = request.json['id']
        nombre = request.json['nombre']
        apellido = request.json['apellido']
        dni = request.json['dni']
        nacimiento = request.json['nacimiento']
        sexo = request.json['sexo']
        club = request.json['club']
        categoria = request.json['categoria']

        dni_existe = Jugador.query.filter_by(dni=dni).first()
        
        if dni_existe:
            print('jugador ya existe')
        else:
            nuevo_jugador(id, nombre, apellido, dni, nacimiento, sexo, club, categoria)
            print(f'jugador {nombre} {apellido}, creado')
            jugadores = Jugador.query.all()
            response = jsonify({
                'jugadores': [j.__asdict__() for j in jugadores],
                })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

    
    if request.method == 'PUT':
        print('PUT')
        valores = request.get_json()
        id = valores['id']
        print(valores)
        jugador = Jugador.query.filter_by(id=id).first()
        print(jugador.nombre, jugador.apellido, jugador.nacimiento)
        jugador.id = valores['id']
        jugador.nombre = valores['nombre']
        jugador.apellido = valores['apellido']
        jugador.dni = valores['dni']
        jugador.nacimiento = valores['nacimiento']
        jugador.sexo = valores['sexo']
        jugador.club = valores['club']
        jugador.categoria = valores['categoria']
        db.session.commit()
        print('jugador ', id, ' editado')
        jugadores = Jugador.query.all()
        print([j.__asdict__() for j in jugadores])
        response = jsonify({
            'jugadores': [j.__asdict__() for j in jugadores],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'DELETE':
        print('delete')
        id = request.get_json()
        print(id)
        jugador = Jugador.query.filter_by(id=id)
        jugador.delete()
        db.session.commit()
        print('jugador ', id, ' eliminado')
        jugadores = Jugador.query.all()
        print([j.__asdict__() for j in jugadores])
        response = jsonify({
            'jugadores': [j.__asdict__() for j in jugadores],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response 

@app.route('/pases', methods=['GET', 'POST', 'PUT', 'DELETE'])
def pase():
    pases = Pase.query.all()
    print([a.__asdict__() for a in pases])
    if request.method == 'GET':
        pases = Pase.query.all()
        response = jsonify({
            'pases': [p.__asdict__() for p in pases],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    if request.method == 'POST':
        id = request.json['id']
        id_jugador = request.json['jugador']
        nacimiento = request.json['fecha']
        club_salida = request.json['club_salida']
        club_llegada = request.json['club_llegada']
        tipo = request.json['tipo']
        jugador = Jugador.query.filter_by(id=id_jugador).first()
        jugador.club = request.json['club_llegada']

        id_existe = Pase.query.filter_by(id=id).first()
        
        if id_existe:
            print('pase ya existe')
        else:
            nuevo_pase(id, id_jugador, nacimiento, club_salida, club_llegada, tipo)
            print(f'pase {jugador.nombre} {club_salida} {club_llegada}, creado')
            pases = Pase.query.all()
            response = jsonify({
                'pases': [p.__asdict__() for p in pases],
                })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

    if request.method == 'PUT':
        print('PUT')
        valores = request.get_json()
        id = valores['id']
        print(valores)
        pase = Pase.query.filter_by(id=id).first()
        print(pase.id, pase.jugador, pase.fecha)
        pase.id = valores['id']
        pase.jugador = valores['jugador']
        pase.fecha = valores['fecha']
        pase.club_salida = valores['club_salida']
        pase.club_llegada = valores['club_llegada']
        pase.tipo = valores['tipo']
        db.session.commit()
        print('pase ', id, ' editado')
        pases = Pase.query.all()
        print([p.__asdict__() for p in pases])
        response = jsonify({
            'pases': [p.__asdict__() for p in pases],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'DELETE':
        print('delete')
        id = request.get_json()
        print(id)
        pase = Pase.query.filter_by(id=id)
        jugador = Jugador.query.filter_by(id=pase.first().jugador).first()
        jugador.club = pase.first().club_salida
        pase.delete()
        db.session.commit()
        print('pase ', id, ' eliminado')
        pases = Pase.query.all()
        print([p.__asdict__() for p in pases])
        response = jsonify({
            'pasees': [p.__asdict__() for p in pases],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

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
        id = request.json['id']
        nombre = request.json['nombre']
        abreviatura = request.json['abreviatura']
        provincia = request.json['provincia']

        id_existe = Asociacion.query.filter_by(id=id).first()
        nombre_existe = Asociacion.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Asociacion.query.filter_by(abreviatura=abreviatura).first()
        
        if id_existe:
            print('id ya existe')
            return 'id ya existe'
        if nombre_existe:
            print('Asociacion ya existe')
            return 'Asociacion ya existe'
        if abreviatura_existe:
            print('abreviatura ya existe')
            return 'abreviatura ya existe'
        else:
            nueva_asociacion(id, nombre, abreviatura, provincia)
            print(f'Asociacion {id} {nombre} {abreviatura} {provincia}, creado')
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
        asociacion.id = valores['id']
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
    if request.method == 'GET':
        print([c.__asdict__() for c in clubes])
        response = jsonify({
            'clubes': [c.__asdict__() for c in clubes]
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'POST':
        print(request.get_json())
        id = request.json[-1]['id']
        nombre = request.json[-1]['nombre']
        asociacion = request.json[-1]['asociacion']
        nombrecorto = request.json[-1]['nombrecorto']
        abreviatura = request.json[-1]['abreviatura']
        escudo = request.json[-1]['escudo']

        id_existe = Club.query.filter_by(id=id).first()
        nombre_existe = Club.query.filter_by(nombre=nombre).first()
        abreviatura_existe = Club.query.filter_by(abreviatura=abreviatura).first()
        
        if id_existe:
            print('id ya existe')
            return'id ya existe'
        if nombre_existe:
            print('club ya existe')
            return'club ya existe'
        if abreviatura_existe:
            print('abreviatura ya existe')
            return'abreviatura ya existe'
        else:
            nuevo_club(id, nombre, asociacion, nombrecorto, abreviatura, escudo)
            print(f'club {id} {nombre} {asociacion} {nombrecorto} {abreviatura} creado')
            response = jsonify({
            'clubes': [c.__asdict__() for c in clubes]
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
            'clubes': [c.__asdict__() for c in clubes]
            })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/categorias', methods=['GET'])
def categoria():
    categorias = Categoria.query.all()
    if request.method == 'GET':
        print([c.__asdict__() for c in categorias])
        response = jsonify({
            'categorias': [c.__asdict__() for c in categorias],
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response



@app.route('/imagenes/<img>', methods=['GET'])
def imagenes(img):
    if not img:
        response = jsonify( {'data': 'imagen'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    imagen = Imagen.query.filter(Imagen.imagen.contains(img)).first()
    response = jsonify( {'img': imagen})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



@app.route('/roles', methods=['GET'])
def roles():
    if request.method == 'GET':
        roles = Rol.query.all()
        response = jsonify( [r.__asdict__() for r in roles])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response





if __name__ == '__main__':
    app.run(debug=True)

