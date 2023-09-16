import React from "react"; //importa la biblioteca principal de React y la asigna a la variable React
import Boton from './Boton';
import '../css/TableroPuntaje.css'

function TableroPuntaje({ nombreIngresado, jugador, pc, ganadorIntento, manejarSiguienteIntento, mostrarResultadoIntento }) {

    const estiloResultadoDeIntento = {
        fontSize: 'clamp(1.5vw, 2.8vw, 3rem)',
        color: '#15d603'
    }

    return(
        <section id="tablero">

            <h3>Tablero de puntajes</h3>
            
            <div id="resultados">

                <div className="caja-contador">
                    <p>{nombreIngresado}</p> {/* <!-- Acá va el nombre del jugador --> */}
                    <div className="contador">
                        <p>{jugador}</p> {/* <!-- Acá van los puntos del jugador --> */}
                    </div>
                </div>

                <div style={{textAlign: "center"}}>
                    {mostrarResultadoIntento ? <p style={estiloResultadoDeIntento}>{ganadorIntento}</p> : null}
                    <Boton 
                        texto='Siguiente!'
                        nombreDeEstilo='boton-siguiente'
                        manejarEvento={manejarSiguienteIntento}
                        noNeutralizarEvento={mostrarResultadoIntento} /> 
                </div>

                <div className="caja-contador">
                    <p>PC</p>
                    <div className="contador">
                        <p>{pc}</p> {/* <!-- Acá van los puntos de la computadora --> */}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default TableroPuntaje;