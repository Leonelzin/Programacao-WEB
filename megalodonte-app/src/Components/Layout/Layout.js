//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 27/03/2023

import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* ... */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Sobre</NavLink>
          </li>
          {/* ... */}
        </ul>
      </nav>
      <main>{children}
      <footer className="mt-5 text-muted mx-auto text-center">
        {/* ... */}
      </footer>
      </main>
    </>
  );
};

export default Layout;
