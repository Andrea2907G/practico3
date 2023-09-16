import React from "react";
import '../css/Boton.css'

function Boton({ texto , nombreDeEstilo, manejarEvento, neutralizarEvento })  {

    const nombreDeClases = `button ${nombreDeEstilo}`;

    return (
        <button 
            className={nombreDeClases}
            onClick={neutralizarEvento ? null : manejarEvento}>
            {texto}
        </button>
    )
}

export default Boton;