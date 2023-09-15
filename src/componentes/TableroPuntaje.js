import React from "react"; //importa la biblioteca principal de React y la asigna a la variable React
import '../css/TableroPuntaje.css'

function TableroPuntaje({ nombreIngreado }) {
    return(
        <section id="tablero">

            <h3>Tablero de puntajes</h3>

            <div id="resultados">

                <div class="caja-contador">
                    <p>{nombreIngreado}</p> {/* <!-- Acá va el nombre del jugador --> */}
                    <div class="contador">
                        <p></p> {/* <!-- Acá van los puntos del jugador --> */}
                    </div>
                </div>

                <div style={{textAlign: "center"}}>
                    <p></p> {/* <!-- Resultado de la partida --> */}
                    <button id="siguiente">Siguiente!</button>
                </div>

                <div className="caja-contador">
                    <p>PC</p>
                    <div className="contador">
                        <p></p> {/* <!-- Acá van los puntos de la computadora --> */}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default TableroPuntaje;