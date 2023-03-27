//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 27/03/2023

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './navbar.css';

const App = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light${navbarScrolled ? ' scrolled' : ''}`}>
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
              <a className="nav-link" href="Arquivo 4 Retatorado.html">Imagens</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Formulário de Pesquisa</h1>
        </div>
        <p className="lead">Preencha suas principais dúvidas e curiosidades sobre esse Tubarãozaum:</p>
        <form>
          {/* Form content */}
        </form>
        <footer className="mt-5 text-muted mx-auto text-center">
          <p>&copy; Leonel Site's - 2023 Todos
            os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
