from flask import Flask
import jyserver.Flask as jsf

app = Flask(__name__)

@jsf.use(app)
class App:
    def __init__(self):
        pass

@app.route('/')
@app.route('/home')
def home():
    pass

if __name__ == '__main__':
    app.run(debug=True)