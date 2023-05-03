//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 03/05/2023

const MegalodonteModel = require('./MegalodonteModel');

class MegalodonteController {
  static async getAll(req, res) {
    try {
      const megalodontes = await MegalodonteModel.getAll();
      res.json(megalodontes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar os megalodontes');
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const megalodonte = await MegalodonteModel.getById(id);
      if (!megalodonte) {
        res.status(404).send('Megalodonte não encontrado');
      } else {
        res.json(megalodonte);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar o megalodonte');
    }
  }

  static async create(req, res) {
    try {
      const megalodonteData = req.body;
      const newMegalodonte = await MegalodonteModel.create(megalodonteData);
      res.status(201).json(newMegalodonte);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao criar o megalodonte');
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const megalodonteData = req.body;
      const updatedMegalodonte = await MegalodonteModel.update(id, megalodonteData);
      if (!updatedMegalodonte) {
        res.status(404).send('Megalodonte não encontrado');
      } else {
        res.json(updatedMegalodonte);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar o megalodonte');
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const removedMegalodonte = await MegalodonteModel.remove(id);
      if (!removedMegalodonte) {
        res.status(404).send('Megalodonte não encontrado');
      } else {
        res.json(removedMegalodonte);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao remover o megalodonte');
    }
  }
}

module.exports = MegalodonteController;


