import React from "react";
import '../css/Boton.css'

function Boton({ texto , nombreDeEstilo, manejarEvento, noNeutralizarEvento })  {

    const nombreDeClases = `button ${nombreDeEstilo}`;

    return (
        <button 
            className={nombreDeClases}
            onClick={noNeutralizarEvento ? manejarEvento : null}>
            {texto}
        </button>
    )
}

export default Boton;