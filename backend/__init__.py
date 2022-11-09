from flask import Flask
from flask_login import LoginManager
from os import path


from endpoints.Articulos.articulos import articulos
from endpoints.Login.login import login
from endpoints.Pagos.pagos import pagos
from endpoints.Partidos.partidos import partidos
from endpoints.Torneos.torneos import torneos

from db import db, DB_NAME, USERNAME, PASSWORD, create_database

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{USERNAME}:{PASSWORD}@127.0.0.1:3306/{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = 'amebal'
    db.init_app(app)


    app.register_blueprint(articulos, url_prefix='/')
    app.register_blueprint(login, url_prefix='/')
    app.register_blueprint(pagos, url_prefix='/')
    app.register_blueprint(partidos, url_prefix='/')
    app.register_blueprint(torneos, url_prefix='/')

    
    login_manager = LoginManager()
    login_manager.login_view = 'login.log_in'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return Usuario.query.get(int(id))

    create_database(app)

    return app
