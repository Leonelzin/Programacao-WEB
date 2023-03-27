//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 27/03/2023

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './navbar.css';

const App = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('scrolled');
      } else {
        navbarRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Megalodonte</a>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="Arquivo 1 Refatorado.html">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Arquivo 2 Refatorado.html">Formulário</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Arquivo 3 Refatorado.html">Tabelas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Arquivo 4 Refatorado.html">Imagens</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Conheça o Megalodon! O maior tubarão que já existiu.</h1>
        </div>
        <p className="lead">Antecipadamente, o megalodon foi o maior
        tubarão que já existiu, predador
        feroz nos mares pré-históricos, além
        disso, com uma força de mordida cinco
        vezes mais potente que a do tubarão-branco.</p>
        <p className="lead">Logo, o nome científico Carcharocles
        Megalodon, significa "dente grande".
        Em consequência, durante o tempo
        de vida foi o maior peixe que já
        existiu. Relatos cientificos diziam
        que: "os maiores indivíduos mediam,
        até mesmo, 18 metros cerca de três
        vezes o tamanho dos maiores tubarões".</p>
        <ul className="list-group">
          <li className="list-group-item">- Outrora, o megalodon foi
          o maior tubarão que já existiu,
          predador feroz nos mares pré-históricos</li>
          <li className="list-group-item">- Com uma força de mordida cinco
          vezes mais potente que a do tubarão-branco</li>
          <li className="list-group-item">- As fêmeas eram mães especiais,
          usando berçários para melhorar
          as chances de sobrevivência dos
          filhotes</li>
          <li className="list-group-item">- Nome científico Carcharocles Megalodon,
          significa "dente grande"</li>
          <li className="list-group-item">- Maior peixe que já existiu, com
          os maiores indivíduos medindo
          até 18 metros</li>
        </ul>
        <p className="lead">Saiba mais do Megalodon no site a seguir:</p>
        <a href="https://marsemfim.com.br/conheca-o-megalodon-o-maior-tubarao-que-ja-existiu/"
        className="btn btn-primary">Clique aqui!</a>
        <footer className="mt-5 text-muted mx-auto text-center">
          <p>&copy; Leonel Site's - 2023 Todos
          os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
