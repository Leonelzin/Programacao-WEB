//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 27/03/2023

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Sobre from './pages/Sobre';
import Formulario from './pages/Formulario';
import Menu from './pages/Menu';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Sobre} />
        <Route path="/formulario" component={Formulario} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Layout>
  );
}

export default App;
