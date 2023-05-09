//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 09/05/2023

//Para estabelecer relacionamentos no modelo de dados do projeto "Megalodonte", é necessário primeiro identificar quais são as entidades ou recursos que se relacionam entre si. 

//Por exemplo, para criar uma nova entidade "Avistamento" que se relacionasse com a entidade "Megalodonte", cria-se o seguinte modelo:

const avistamentos = [
    { id: 1, megalodonte_id: 1, local: 'Rio de Janeiro', data: '2023-04-01' },
    { id: 2, megalodonte_id: 2, local: 'São Paulo', data: '2023-04-02' },
    { id: 3, megalodonte_id: 1, local: 'Bahia', data: '2023-04-03' }
  ];

//Nesse exemplo, cada avistamento tem um id único, uma chave estrangeira megalodonte_id que se relaciona com o id de um registro na entidade "Megalodonte", um campo "local" que indica onde o avistamento ocorreu e um campo "data" que indica a data do avistamento.

//Para retornar os registros relacionados a um registro específico da entidade "Megalodonte", seria necessário fazer uma consulta nas entradas da entidade "Avistamento" que tenham o megalodonte_id igual ao id do megalodonte solicitado. 

//Isso poderia ser feito utilizando o método filter do JavaScript. 

//Por exemplo, para obter todos os avistamentos de um megalodonte com id igual a 1, poderíamos fazer o seguinte:

const avistamentosDoMegalodonte = avistamentos.filter(a => a.megalodonte_id === 1);

//Assim, teremos um array com todos os avistamentos do megalodonte com id igual a 1, que poderiam ser enviados como resposta em conjunto com o registro do megalodonte solicitado.