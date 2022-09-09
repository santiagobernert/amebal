from flask import Flask
from flask_login import LoginManager
from os import path

from db import db, DB_NAME, USERNAME, PASSWORD, create_database

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{USERNAME}:{PASSWORD}@127.0.0.1:3308/{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = 'amebal'
    db.init_app(app)

    from paginas.Login.login import login

    app.register_blueprint(login, url_prefix='/')

    from db.usuarios.usuarios import Usuario
    
    login_manager = LoginManager()
    login_manager.login_view = 'login.log_in'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return Usuario.query.get(int(id))

    create_database(app)

    return app
