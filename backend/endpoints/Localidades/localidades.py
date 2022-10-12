from flask import Flask, request, redirect, url_for, Blueprint, render_template, flash, jsonify
import requests
from urllib.parse import urlencode

API_BASE_URL = "https://apis.datos.gob.ar/georef/api/"

def get_similar(endpoint, nombre='', **kwargs):
    kwargs["nombre"] = nombre
    url = f"{API_BASE_URL}{endpoint}?{urlencode(kwargs)}"
    return requests.get(url).json()[endpoint]

provincias = get_similar("provincias")
print(provincias)


localidades = Blueprint('localidades', __name__)

@localidades.route('/club', methods=['GET'])
def club():
    localidades = ()
    if request.method == 'GET':
        print([l.__asdict__() for l in localidades])
        response = jsonify({
            'localidades': [l.__asdict__() for l in localidades]
            })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response