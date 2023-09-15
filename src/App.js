import IngresaNombre from './componentes/IngresaNombre';
import { useRef, useState } from 'react';
import Juego from './componentes/Juego';
import TableroPuntaje from './componentes/TableroPuntaje';
/* import Resultado from './componentes/Resultado'  */

import './App.css';
/* import React, { useState } from 'react'; */

function App() {

  const [mostrarMain, setMostrarMain] = useState({display:'none'});
  const [nombreIngreado, setNombreIngresado] = useState('');

  const iniciarJuego = (valorImput) => {
    setMostrarMain({display:'block'});
    setNombreIngresado(valorImput);
  }

  return (
    <div className='App'>
      <header className="contenedor" id="inicio">

        <h2>Bienvenidos a</h2>

        <div className="contenedor_titulo">
          <h1>Piedra! Papel! o Tijeras!</h1>
        </div>

        <IngresaNombre
        iniciarJuego={iniciarJuego} />

      </header>


      <main className="contenedor" id="zona-juego" style={mostrarMain}>

        <Juego /> 

        <TableroPuntaje 
          nombreIngreado={nombreIngreado} />

        {/* <Resultado/> */}

      </main>
    </div>
  );
}

export default App;
