//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 09/05/2023

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Definindo modelo para a entidade "megalodonte"
const Megalodonte = {
  id: Number,
  name: String,
  age: Number,
  length: Number,
  locations: [{ type: Number, ref: 'Localizacao' }]
};

// Definindo modelo para a entidade "localizacao"
const Localizacao = {
  id: Number,
  latitude: Number,
  longitude: Number,
  megalodonte: { type: Number, ref: 'Megalodonte' }
};

// Simulando dados das entidades
const megalodontes = [
  { id: 1, name: 'Megalodon 1', age: 25, length: 15, locations: [1, 2] },
  { id: 2, name: 'Megalodon 2', age: 30, length: 18, locations: [3] }
];

const localizacoes = [
  { id: 1, latitude: -23.561684, longitude: -46.656635, megalodonte: 1 },
  { id: 2, latitude: -23.562578, longitude: -46.658956, megalodonte: 1 },
  { id: 3, latitude: -23.564211, longitude: -46.658611, megalodonte: 2 }
];

// Consulta um megalodonte e suas localizações
app.get('/megalodonte/:id', (req, res) => {
  const megalodonte = megalodontes.find(m => m.id === parseInt(req.params.id));
  if (!megalodonte) return res.status(404).send('Megalodonte não encontrado');
  const locs = localizacoes.filter(l => megalodonte.locations.includes(l.id));
  megalodonte.locations = locs;
  res.send(megalodonte);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Nesse código, adicionamos um array de objetos "locations" ao modelo da entidade "megalodonte", indicando que um megalodonte pode ter uma ou várias localizações. Também definimos o modelo para a entidade "localizacao" e adicionamos uma propriedade "megalodonte" que referencia o ID do megalodonte a que a localização pertence.

//Na rota que consulta um megalodonte específico (/megalodonte/:id), adicionamos a lógica para buscar as localizações do megalodonte a partir dos IDs registrados no array "locations", e adicionamos as localizações como propriedades do objeto megalodonte antes de enviar a resposta.

//Observe que, neste exemplo, simulamos os dados das entidades em arrays de objetos na própria API. Em um cenário real, esses dados seriam armazenados em um banco de dados ou em algum outro meio de armazenamento persistente.