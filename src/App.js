//importando la librería React y la clase Component
import React, { Component } from 'react';

import './App.css';
import Bibi from "./componentes/Componentebibi";
import Header from './componentes/Header';
import Footer from './componentes/Footer';


class App extends Component {
  //Render devuelve un contenido que es el HTML
  render() {
    

    return (
      <div>
       <Header />
        <body>
        <Bibi />
        </body>
        <Footer />
      </div>
    );
  }

  
}
export default App;