from flask import Flask
from flask_login import LoginManager
from os import path

from db.usuarios.usuarios import Usuario

from endpoints.Asociaciones.asociaciones import asociaciones
from endpoints.Clubes.clubes import clubes
from endpoints.Categorias.categorias import categorias
from endpoints.Imagenes.imagenes import imagenes
from endpoints.Jugadores.jugadores import jugadores
from endpoints.Login.login import login
from endpoints.Pases.pases import pases
from endpoints.Roles.roles import roles

from db import db, DB_NAME, USERNAME, PASSWORD, create_database

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{USERNAME}@127.0.0.1:3306/{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = 'amebal'
    db.init_app(app)


    app.register_blueprint(asociaciones, url_prefix='/')
    app.register_blueprint(categorias, url_prefix='/')
    app.register_blueprint(clubes, url_prefix='/')
    app.register_blueprint(imagenes, url_prefix='/')
    app.register_blueprint(jugadores, url_prefix='/')
    app.register_blueprint(login, url_prefix='/')
    app.register_blueprint(pases, url_prefix='/')
    app.register_blueprint(roles, url_prefix='/')

    
    login_manager = LoginManager()
    login_manager.login_view = 'login.log_in'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return Usuario.query.get(int(id))

    create_database(app)

    return app
