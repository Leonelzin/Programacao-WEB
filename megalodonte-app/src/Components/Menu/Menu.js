//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 27/03/2023

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Megalodonte
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Sobre
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/formulario">
              Formulário
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tabelas">
              Tabelas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/imagens">
              Imagens
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
