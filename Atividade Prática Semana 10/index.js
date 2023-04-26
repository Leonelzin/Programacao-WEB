//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 25/04/2023

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const megalodontes = [
  { id: 1, name: 'Megalodon 1', age: 25, length: 15 },
  { id: 2, name: 'Megalodon 2', age: 30, length: 18 }
];

app.get('/megalodonte', (req, res) => {
  res.send(megalodontes);
});

app.get('/megalodonte/:id', (req, res) => {
  const megalodonte = megalodontes.find(m => m.id === parseInt(req.params.id));
  if (!megalodonte) return res.status(404).send('Megalodonte não encontrado');
  res.send(megalodonte);
});

app.post('/megalodonte', (req, res) => {
  const megalodonte = {
    id: megalodontes.length + 1,
    name: req.body.name,
    age: req.body.age,
    length: req.body.length
  };
  megalodontes.push(megalodonte);
  res.send(megalodonte);
});

app.put('/megalodonte/:id', (req, res) => {
  const megalodonte = megalodontes.find(m => m.id === parseInt(req.params.id));
  if (!megalodonte) return res.status(404).send('Megalodonte não encontrado');
  megalodonte.name = req.body.name;
  megalodonte.age = req.body.age;
  megalodonte.length = req.body.length;
  res.send(megalodonte);
});

app.delete('/megalodonte/:id', (req, res) => {
  const megalodonte = megalodontes.find(m => m.id === parseInt(req.params.id));
  if (!megalodonte) return res.status(404).send('Megalodonte não encontrado');
  const index = megalodontes.indexOf(megalodonte);
  megalodontes.splice(index, 1);
  res.send(megalodonte);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
