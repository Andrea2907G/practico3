import IngresaNombre from './componentes/IngresaNombre';
import { useRef } from 'react';
/* import Juego from './componentes/Juego';
import TableroPuntaje from './componentes/TableroPuntaje';
import Resultado from './componentes/Resultado' */

import './App.css';
/* import React, { useState } from 'react'; */

function App() {



  return (
    <div className='App'>
      <header className="contenedor" id="inicio">

        <h2>Bienvenidos a</h2>

        <div className="contenedor_titulo">
          <h1>Piedra! Papel! o Tijeras!</h1>
        </div>

        <IngresaNombre/>

      </header>


      <main className="contenedor" id="zona-juego" style={{ display: "none" }}>

        {/* <Juego/> 

        <TableroPuntaje/>

        

        <Resultado/>
 */}
      </main>
    </div>
  );
}

export default App;
