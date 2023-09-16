import React from "react"; 
import Boton from './Boton';
import '../css/Resultado.css';

function Resultado( { resultadoFinal, manejarNuevaPartida, finalizoPartida, manejadorCruzCierre }) {

    const claseBase = 'ventana-modal';
    
    return (
        <section className={`${claseBase} ${finalizoPartida ? 'mostrar-ventana-modal' : ''}`}>
            <div className="contenedor-ventana-modal" onClick={manejadorCruzCierre}>
                {/* <!-- Icono de cierre de ventana modal --> */}
                <div></div>
                <h2 className="titulo-ventana-modal">{resultadoFinal}</h2>
                <a href="#zona-juego">
                    <Boton 
                        texto='Nueva partida'
                        nombreDeEstilo='boton-nueva-partida'
                        manejarEvento={manejarNuevaPartida}
                        noNeutralizarEvento={true} /> 
                </a>
            </div>
        </section>
    )
}
export default Resultado;