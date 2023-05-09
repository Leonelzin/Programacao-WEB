//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 09/05/2023

//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 09/05/2023
//Atividade Individual

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let appointments = [];

// Rota para cadastrar um agendamento
app.post('/appointments', (req, res) => {
  const { patientName, date } = req.body;
  const appointment = { patientName, date };
  appointments.push(appointment);
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//Explicação:

//As dependências express e body-parser são importadas.

//O body-parser é utilizado para que possamos acessar os dados enviados pelo cliente via POST no req.body.

//Uma variável appointments é criada para armazenar os agendamentos.

//É criada uma rota POST para a url /appointments.

//No req.body são extraídas as informações do agendamento (nome do paciente e data).

//É criado um objeto appointment com essas informações.

//O agendamento é adicionado ao array appointments.

//É enviado uma resposta com status
