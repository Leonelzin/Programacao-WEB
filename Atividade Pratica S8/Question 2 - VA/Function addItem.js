//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 11/04/2023

function adicionarItem() {
    var input = document.getElementById("item");
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.innerText = input.value;
    lista.appendChild(novoItem);
    input.value = "";
  }
  
  //Explicação:
  
  // Obtém o elemento de input do DOM usando o ID "item" e o armazena na variável "input".

  // Obtém o elemento de lista do DOM usando o ID "lista" e o armazena na variável "lista".

  // Cria um novo elemento <li> usando a função createElement() e o armazena na variável "novoItem".

  // Define o conteúdo do novo elemento usando a propriedade innerText e o valor do input.

  // Adiciona o novo elemento à lista existente usando a função appendChild().

  // Limpa o valor do input atribuindo uma string vazia à propriedade value.
