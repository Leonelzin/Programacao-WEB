#Curso de Engenharia de Software - UniEVANGÉLICA
#Disciplina de Programação Web
#Dev: Douglas Leonel de Almeida
#DATA: 07/06/2023

from flask import Flask, request, jsonify

app = Flask(__name__)
login_controller = LoginController()

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if login_controller.login(username, password):
        return jsonify({'authenticated': True})
    else:
        return jsonify({'authenticated': False})

if __name__ == '__main__':
    app.run()
