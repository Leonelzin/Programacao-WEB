#Curso de Engenharia de Software - UniEVANGÉLICA
#Disciplina de Programação Web
#Dev: Douglas Leonel de Almeida
#DATA: 07/06/2023

class LoginController:
    def __init__(self):
        self.users = []  # Lista de usuários registrados (pode ser substituída por um banco de dados)

    def register_user(self, username, password):
        user = User(username, password)
        self.users.append(user)

    def login(self, username, password):
        for user in self.users:
            if user.username == username and user.password == password:
                return True
        return False
