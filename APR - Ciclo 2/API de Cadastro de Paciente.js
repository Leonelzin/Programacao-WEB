//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 09/05/2023


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let patients = [];

// Rota para cadastrar um paciente
app.post('/patients', (req, res) => {
  const { name, age, gender } = req.body;
  const patient = { name, age, gender };
  patients.push(patient);
  res.status(201).send(`Paciente ${name} cadastrado com sucesso.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//Explicação:

//As dependências express e body-parser são importadas.

//O body-parser é utilizado para que possamos acessar os dados enviados pelo cliente via POST no req.body.

//Uma variável patients é criada para armazenar os pacientes cadastrados.

//É criada uma rota POST para a url /patients.

//No req.body são extraídas as informações do paciente (nome, idade e gênero).

//É criado um objeto patient com essas informações.

//O paciente é adicionado ao array patients.

//É enviado uma resposta com status 201 indicando que o paciente foi cadastrado com sucesso.
