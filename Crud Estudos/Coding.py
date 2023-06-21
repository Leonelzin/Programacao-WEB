#CREATE (POST)

def create_user(name, email, password) :
    user = {'name': name, 'email': email, 'password': password}
    db.users.insert_one(user)
    return user

#READ (GET)

def read_user(user_id):
    user = db.users.find_one({'_id': ObjectID(user_id)})
    return user

#UPDATE (PUT)

def update_user(user_id, name=None, email=None, password=None):
    user = db.users.find_one({'_id': ObjectID(user_id)})
    if name:
        user['name'] = name
    if email:
        user['email'] = email
    if password:
        user['password'] = password
    db.users.update_one({'_id': ObjectID(user_id)}, {'$set': user})
    return user

#DELETE (DEL)

def delete_user(user_id):
    db.users.delete_one({'_id': ObjectID(user_id)})

#CRUD BÁSICO DEFINIDO (CREATE, READ, UPDATE, DELETE)

GET /api/tema: retorna a lista de todos 

GET /api/tema/id: retorna o tema com o ID especificado

POST /api/tema: adiciona um novo tema

PUT /api/tema/id: atualiza o tema

DELETE /api/tema/id: remove o tema com o ID especificado
