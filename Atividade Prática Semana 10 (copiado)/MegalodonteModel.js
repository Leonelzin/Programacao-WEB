//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 03/05/2023

class MegalodonteModel {
    constructor() {
      this.megalodontes = [
        { id: 1, name: 'Megalodon 1', age: 25, length: 15 },
        { id: 2, name: 'Megalodon 2', age: 30, length: 18 }
      ];
    }
  
    getAll() {
      return this.megalodontes;
    }
  
    getById(id) {
      return this.megalodontes.find(m => m.id === parseInt(id));
    }
  
    add(megalodonte) {
      const newMegalodonte = {
        id: this.megalodontes.length + 1,
        name: megalodonte.name,
        age: megalodonte.age,
        length: megalodonte.length
      };
      this.megalodontes.push(newMegalodonte);
      return newMegalodonte;
    }
  
    update(id, updatedMegalodonte) {
      const megalodonte = this.megalodontes.find(m => m.id === parseInt(id));
      if (!megalodonte) return null;
      megalodonte.name = updatedMegalodonte.name;
      megalodonte.age = updatedMegalodonte.age;
      megalodonte.length = updatedMegalodonte.length;
      return megalodonte;
    }
  
    delete(id) {
      const megalodonte = this.megalodontes.find(m => m.id === parseInt(id));
      if (!megalodonte) return null;
      const index = this.megalodontes.indexOf(megalodonte);
      this.megalodontes.splice(index, 1);
      return megalodonte;
    }
  }
  
  module.exports = MegalodonteModel;
  

//Neste arquivo, criei a classe MegalodonteModel com os métodos getAll, getById, add, update e delete que correspondem às operações de CRUD. O construtor da classe inicializa a lista de megalodontes com dados estáticos para teste.

//O método getAll retorna a lista completa de megalodontes. 

//O método getById recebe um id como parâmetro e retorna o megalodonte com o id correspondente. 

//O método add recebe um objeto megalodonte com as informações do novo megalodonte a ser adicionado e adiciona o megalodonte à lista, gerando um novo id incremental. 

//O método update recebe um id e um objeto updatedMegalodonte com as informações atualizadas do megalodonte e atualiza o megalodonte correspondente na lista. 

//O método delete recebe um id e remove o megalodonte correspondente da lista.