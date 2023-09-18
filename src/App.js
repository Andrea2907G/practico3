import IngresaNombre from './componentes/IngresaNombre';
import { useState, useEffect, useRef } from 'react';
import Juego from './componentes/Juego';
import TableroPuntaje from './componentes/TableroPuntaje';
import Resultado from './componentes/Resultado' 

import './App.css';



function App() {

   // ? ========================Definición de variables========================
  
   //creo variables con let para asignar un valor numérico a la eleccion de la pc y del jugador 0, 1 o 2

  let valorEleccionPc = null;
  let valorEleccionJugador = null;

  // ? ========================Creación de Estados========================

//Creo un estado para cambiar la propiedad display del main, y realizar un scroll hasta ahí, este estado se ejecuta con el evento click del botón jugar
  const [mostrarMain, setMostrarMain] = useState({display:'none'});

//Con el siguiente estado controlo el cambio del Nombre del jugador que se reflejará en el tablero de puntaje
  const [nombreIngresado, setNombreIngresado] = useState('');

//Con el siguiente estado establezco el numero de intento que será renderizado en la interfaz de usuario

  const [numDeIntento, setNumDeIntento] = useState(1);

//Los siguientes estados asignan valor booleano para cambiar el borde de la imagen que se eligió a rojo
  const [jugadorEligioPiedra, setJugadorEligioPiedra] = useState(false);
  const [jugadorEligioPapel, setJugadorEligioPapel] = useState(false);
  const [jugadorEligioTijera, setJugadorEligioTijera] = useState(false);

  //El siguiente estado lo utilizo en un operador ternario para neutralizar el escuchador de evento de las imágenes Piedra, Papel y Tijera una vez que el jugador realizó una elección
  const [eligio, setEligio] = useState(false);


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

//Creo referencias a estos ultimos dos estados.
const pcRef = useRef(pc);
const jugadorRef = useRef(jugador);

//Estado para controlar resultado de cada intento

const [ganadorIntento, setGanadorIntento] = useState('');

//El siguiente estado guarda un valor booleano cuando ya está listo el resultado del intento para ser renderizado, este valor me permite ocultar el resultado del intento al presionar el botón siguiente, ya que lo restablezco en false

const [mostrarResultadoIntento, setMostrarResultadoIntento] = useState (false);

//El siguiente estado controla la neutralizacion del escuchador de evento del boton siguiente intento.

const [neutralizarBotonSiguiente, setNeutralizarBotonSiguiente] = useState(true);

//El siguiente estado permitirá guardar el resultado final de la partida

const [resultadoFinal, setResultadoFinal] = useState('');

//Estado para controlar valor booleano de finalizacion de partida, me permite ocultar o mostrar ventana modal

const [finalizoPartida, setFinalizoPartida] = useState(false);

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
    setJugadorEligioPiedra(true); //Me permite pintar de rojo el borde de la imagen piedra cuando es seleccionada por el jugador
    setEligio(true); //Me permite neutralizar el escuchador de evento de las tres imágenes una vez hecho el click en una de estas
    setEleccionJugador('Elegiste piedra!'); //Devuelve en la interfaz la eleccion del jugador

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 

    //! Jugada de la computadora
    
    setCambiaTurno('Ahora la computadora!'); //Cambia el titulo h2 que refleja el turno en la interfaz de usuario
    

    setTimeout(() => {  
      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(true);
      } else if (valorEleccionPc === 1) {
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(true);
      } else if (valorEleccionPc === 2) {
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(true);
      }
      
      //Funcion para determinar el resultado de cada intento
      resultadoDeIntento();

      finalizacionDelJuego();

    }, 2000)
  }

  const manejarEleccionPapel = () => {
    //! Jugada del usuario
    valorEleccionJugador = 1;
    setJugadorEligioPapel(true);
    setEligio(true);
    setEleccionJugador('Elegiste papel!');

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 

    //! Jugada de la computadora
    
    setCambiaTurno('Ahora la computadora!')//Cambia el titulo h2 que refleja el turno en la interfaz //!Agregar Efecto acá
    
    setTimeout(() => {  
      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(true);
      } else if (valorEleccionPc === 1) {
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(true);
      } else if (valorEleccionPc === 2) {
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(true);
      }

      //Funcion para determinar el resultado de cada intento
      resultadoDeIntento();

      finalizacionDelJuego();
    }, 2000)
  }

  const manejarEleccionTijera = () => {
    //! Jugada del usuario
    valorEleccionJugador = 2;
    setJugadorEligioTijera(true);
    setEligio(true);
    setEleccionJugador('Elegiste tijera!');

    //! Ejecuta la elección de la computadora
    valorEleccionPc = Math.floor(Math.random() * 3); 
    

    //! Jugada de la computadora
    
    setCambiaTurno('Ahora la computadora!'); //Cambia el titulo h2 que refleja el turno en la interfaz //!Agregar Efecto acá
    

    setTimeout(() => {  

      //Determino el mensaje de eleccion de la computadora
      if (valorEleccionPc === 0) {
        setEleccionPc('Computadora eligió piedra!');
        setPcPiedra(true);
      } else if (valorEleccionPc === 1) { 
        setEleccionPc('Computadora eligió papel!');
        setPcPapel(true);
      } else if (valorEleccionPc === 2) {
        setEleccionPc('Computadora eligió tijera!');
        setPcTijera(true);
      }

      resultadoDeIntento();

      finalizacionDelJuego();
    

    }, 2000);
  }

  //Logica para determinar resultado de cada intento

  const resultadoDeIntento = () => {
    if (valorEleccionPc === valorEleccionJugador) {
      setGanadorIntento ("Empate");
      setMostrarResultadoIntento(true);   
    } else if ((valorEleccionPc === 0 && valorEleccionJugador === 2) || 
    (valorEleccionPc === 1 && valorEleccionJugador === 0) ||
    (valorEleccionPc === 2 && valorEleccionJugador === 1)) {
      setPc(pc => pc + 1);
      setGanadorIntento ("Gana la computadora"); 
      setMostrarResultadoIntento(true);
    } else {
      setJugador(jugador => jugador + 1);
      setMostrarResultadoIntento(true); //Este cambio de estado muestra el resultado del intento en pantalla y me permite neutralizar el boton siguiente una vez que se muestra
      setGanadorIntento ("Gana el usuario");
    }
  }
    
  //Creo la función que contiene la logica del boton siguiente Intento

  const manejarSiguienteIntento = () => {
    //Cambio de turno
    setEligio(false);
    setMostrarResultadoIntento(false);
    setCambiaTurno('Elige tu jugada!');
    setNumDeIntento(numDeIntento + 1);
    setEleccionJugador('');
    setEleccionPc('');
    setNeutralizarBotonSiguiente(true);
    
    //Reseteo booleanos para cambios de estilo en el boton elegido por jugador y pc
    if (jugadorEligioPiedra) {
      setJugadorEligioPiedra(false);
    } else if (jugadorEligioPapel) {
      setJugadorEligioPapel(false);
    } else if (jugadorEligioTijera) {
      setJugadorEligioTijera(false);
    }

    if (pcPiedra) {
      setPcPiedra(false);
    } else if (pcPapel) {
      setPcPapel(false)
    } else if (pcTijera) {
      setPcTijera(false);
    }
  }

  //  Logica de finalizacion de juego, con maximo de 5 intento o acumulacion de 3 victorias

  const finalizacionDelJuego = () => {
    if (numDeIntento === 5 || pcRef.current === 3|| jugadorRef.current === 3) { //Para que termine la partida a la 3er victoria
      setNeutralizarBotonSiguiente(true); //Neutralizo el boton siguiente intento para evitar que se presione antes de que aparezca ventana modal
      //Logica para determinar resultado final
      if (jugadorRef.current === pcRef.current) {
        setResultadoFinal("Empate!");
      } else if (jugadorRef.current > pcRef.current) {
        setResultadoFinal("Ganaste!");
      } else {
        setResultadoFinal("Perdiste!");
      }
      setTimeout(() => {
        setFinalizoPartida(true); //Me permite mostrar ventana modal con un delay de 1.5s
        console.log(finalizoPartida)
      }, 1500);
    } else {
      setNeutralizarBotonSiguiente(false);
    } 
  }


  const manejarNuevaPartida = () => {
    setNumDeIntento(1);
    setJugador(0);
    setPc(0);
    setCambiaTurno('Elige tu jugada!');
    setEligio(false);
    setMostrarResultadoIntento(false);
    setNeutralizarBotonSiguiente(true);
    setFinalizoPartida(false);

    if (jugadorEligioPiedra) {
      setJugadorEligioPiedra(false);
    } else if (jugadorEligioPapel) {
      setJugadorEligioPapel(false);
    } else if (jugadorEligioTijera) {
      setJugadorEligioTijera(false);
    }

    if (pcPiedra) {
      setPcPiedra(false);
    } else if (pcPapel) {
      setPcPapel(false)
    } else if (pcTijera) {
      setPcTijera(false);
    }
  }

  const manejadorCruzCierre = () => {
    setFinalizoPartida(false);
    setNeutralizarBotonSiguiente(true);
    setEligio(false);
  }

  // Actualizo las referencias de useRef cuando pc o jugador cambian

  useEffect(() => {
    pcRef.current = pc;
    jugadorRef.current = jugador;
  }, [pc, jugador]);

  return (
    <div className='App'>
      <header className="contenedor" id="inicio">

        <h2>Bienvenidos a</h2>

        <div className="contenedor_titulo">
          <h1>Piedra! Papel! o Tijeras!</h1>
        </div>

        <IngresaNombre
        iniciarJuego={iniciarJuego} /> {/* Formulario para ingreso de nombre */}

      </header>


      <main className="contenedor" id="zona-juego" style={mostrarMain}>
        <div className='numero-de-intento'>Intento {numDeIntento}</div> 

        <Juego 
          eleccionJugador={eleccionJugador}
          eleccionPc={eleccionPc}
          manejarEleccionPiedra={manejarEleccionPiedra} 
          eligioPiedra={jugadorEligioPiedra}
          manejarEleccionPapel={manejarEleccionPapel} 
          eligioPapel={jugadorEligioPapel}
          manejarEleccionTijera={manejarEleccionTijera} 
          eligioTijera={jugadorEligioTijera}
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
          manejarSiguienteIntento={manejarSiguienteIntento}
          valorEleccionJugador = {valorEleccionJugador}
          valorEleccionPc={valorEleccionPc} 
          mostrarResultadoIntento={mostrarResultadoIntento}
          neutralizarBotonSiguiente={neutralizarBotonSiguiente} />

        <Resultado
          resultadoFinal={resultadoFinal}
          manejarNuevaPartida={manejarNuevaPartida}
          finalizoPartida={finalizoPartida}
          manejadorCruzCierre={manejadorCruzCierre}  />

      </main>
    </div>
  );
}

export default App;
