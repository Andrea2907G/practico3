import IngresaNombre from './componentes/IngresaNombre';
import { useState } from 'react';
import Juego from './componentes/Juego';
import TableroPuntaje from './componentes/TableroPuntaje';
/* import Resultado from './componentes/Resultado'  */

import './App.css';
/* import React, { useState } from 'react'; */

function App() {

  // ? ========================Creación de Estados========================

//Creo un estado para cambiar la propiedad display del main, y realizar un scroll hasta ahí, este estado se ejecuta con el evento click del botón jugar
  const [mostrarMain, setMostrarMain] = useState({display:'none'});
//Con el siguiente estado controlo el cambio del Nombre del jugador que se reflejará en el tablero de puntaje
  const [nombreIngresado, setNombreIngresado] = useState('');

//Con los siguientes 4 estados controlo la eleccion del  jugador, setValorEleccionJugador asigna un valor numérico 0, 1 o 2 a la eleccion hecha. Los otros tres asignan valor boleano para cambiar el borde de la imagen que se eligió a rojo
  const [eligioPiedra, setEligioPiedra] = useState(false);
  const [eligioPapel, setEligioPapel] = useState(false);
  const [eligioTijera, setEligioTijera] = useState(false);

  //El siguiente estado lo utilizo en un operador ternario para neutralizar el escuchador de evento de las imágenes Piedra, Papel y Tijera una vez que el jugador realizó una elección
  const [eligio, setEligio] = useState(false);


//creo variables con let para asignar un valor numérico a la eleccion de la pc y del jugador 0, 1 o 2

let valorEleccionPc = null;
let valorEleccionJugador = null;


//Los dos estados siguientes actualizan la eleccion hecha por el jugador y la pc para ser impresa en la interfaz de usuario.
const [eleccionJugador, setEleccionJugador] = useState('');
const [eleccionPc, setEleccionPc] = useState('');


//Creo un estado que me permite cambiar el título en la interfaz, especificando el turno que corresponde
const [cambiaTurno, setCambiaTurno] = useState('Elige tu jugada!');

//Estado para cambiar el estilo de la imagen que elije la computadora
const[pcPiedra, setPcPiedra] = useState(false);
const[pcPapel, setPcPapel] = useState(false);
const[pcTijera, setPcTijera] = useState(false);

//Estado para controlar el puntaje de los jugadores

const [pc, setPc] = useState(0);
const [jugador, setJugador] = useState(0);

//Estado para controlar resultado de cada intento

const [ganadorIntento, setGanadorIntento] = useState('');

// ? ========================Funciones para manejar Estados========================

// La siguiente funcion se pasa como callback al componente IngresaNombre ejecutándose en la funcion manejarEvento del botón jugar, al llamar a esta función se envía al componente App.js el valor del input ingresado.
  const iniciarJuego = (valorImput) => {
    setMostrarMain({display:'block'});
    setNombreIngresado(valorImput);
  }

//Creo las funciones para manejar la lógica luego de la eleccion del jugador
  const manejarEleccionPiedra = () => {
    
    //! Jugada del usuario

    valorEleccionJugador = 0;//Asigno valor numerico a la elección para usar en la lógica que establece el resultado del intento
    setEligioPiedra(true); //Me permite pintar de rojo el borde de la imagen piedra cuando es seleccionada por el jugador
    setEligio(true); //Me permite neutralizar el escuchador de evento de las tres imágenes una vez hecho el click en una de estas
    setEleccionJugador('Elegiste piedra!') //Devuelve en la interfaz la eleccion del jugador

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 
    

    //! Jugada de la computadora
    setTimeout(()=> {
      setCambiaTurno('Ahora la computadora!'); //Cambia el titulo h2 que refleja el turno en la interfaz 
    }, 200)

    setTimeout(() => {  
      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(true);
      } else if (valorEleccionPc === 1) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(true);
      } else if (valorEleccionPc === 2) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(true);
      }
      manejarResultadoDeIntento(); 
    }, 2000)
  }

  const manejarEleccionPapel = () => {
    //! Jugada del usuario
    valorEleccionJugador = 1;
    setEligioPapel(!eligioPapel);
    setEligio(! eligio);
    setEleccionJugador('Elegiste papel!');

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 
  
    //! Jugada de la computadora
    setTimeout(()=> {
      setCambiaTurno('Ahora la computadora!')//Cambia el titulo h2 que refleja el turno en la interfaz //!Agregar Efecto acá
    }, 200)

    setTimeout(() => {  
      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(true);
      } else if (valorEleccionPc === 1) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(true);
      } else if (valorEleccionPc === 2) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(true);
      }
      manejarResultadoDeIntento(); 
    }, 2000)
  }

  const manejarEleccionTijera = () => {
    //! Jugada del usuario
    valorEleccionJugador = 2;
    setEligioTijera(true);
    setEligio(true);
    setEleccionJugador('Elegiste tijera!');

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 
    

    //! Jugada de la computadora
    setTimeout(()=> {
      setCambiaTurno('Ahora la computadora!')//Cambia el titulo h2 que refleja el turno en la interfaz //!Agregar Efecto acá
    }, 500)

    setTimeout(() => {  
      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(!pcPiedra);
      } else if (valorEleccionPc === 1) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(!pcPapel);
      } else if (valorEleccionPc === 2) {
        console.log(valorEleccionPc);
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(!pcTijera);
      }
      manejarResultadoDeIntento(); 
    }, 2000)
  }


  const manejarResultadoDeIntento = () => {

    if (valorEleccionPc === valorEleccionJugador) {
        console.log(valorEleccionPc, valorEleccionJugador);
        setGanadorIntento ("Empate");
    }
    else if (valorEleccionPc === 0 && valorEleccionJugador === 2 || 
      valorEleccionPc === 1 && valorEleccionJugador === 0 ||
      valorEleccionPc === 2 && valorEleccionJugador === 1) {
        console.log(valorEleccionPc, valorEleccionJugador)
        setGanadorIntento ("Gana la computadora");
        setPc(pc + 1);
    }

    else {
        console.log(valorEleccionPc, valorEleccionJugador);
        setGanadorIntento ("Gana el usuario");
        setJugador(jugador + 1);
    }
  }


  //Creo la función que contiene la logica del boton siguiente Intento

  const manejarSiguienteIntento = () => {
    
    setCambiaTurno('Elige tu jugada!');
    setEligio(false);

    //Reseteo booleanos para cambios de estilo en el boton elegido por jugador y pc
    if (valorEleccionJugador === 0) {
      setEligioPiedra(false);
    } else if (valorEleccionJugador === 1) {
      setEligioPapel(false);
    } else if (valorEleccionJugador === 2) {
      setEligioTijera(false);
    }

    if (valorEleccionPc === 0) {
      setPcPiedra(false);
    } else if (valorEleccionPc === 1) {
      setPcPapel(false)
    } else if (valorEleccionPc === 2) {
      setPcTijera(false);
    }
    //Sumar 1 al intento para pasar al siguiente
  }
  
  //Creo una función para manejar el evento click del botón siguiente, este boton actualiza el numero de Intento que como máximo pueden ser 5 y resetea las elecciones hechas

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

        <Juego 
          eleccionJugador={eleccionJugador}
          eleccionPc={eleccionPc}
          manejarEleccionPiedra={manejarEleccionPiedra} 
          eligioPiedra={eligioPiedra}
          manejarEleccionPapel={manejarEleccionPapel} 
          eligioPapel={eligioPapel}
          manejarEleccionTijera={manejarEleccionTijera} 
          eligioTijera={eligioTijera}
          eligio={eligio} 
          pcPiedra={pcPiedra}
          pcPapel={pcPapel}
          pcTijera={pcTijera}
          cambiaTurno={cambiaTurno} /> 

        <TableroPuntaje 
          nombreIngresado={nombreIngresado} 
          jugador={jugador}
          pc={pc}
          ganadorIntento={ganadorIntento}
          manejarSiguienteIntento={manejarSiguienteIntento} />

        {/* <Resultado/> */}

      </main>
    </div>
  );
}

export default App;
