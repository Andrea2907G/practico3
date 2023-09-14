import React from "react";
import '../css/Boton.css'

function Boton({ texto , nombreDeEstilo, manejarEvento })  {

    const nombreDeClases = `button ${nombreDeEstilo}`;

    return (
        <button 
            className={nombreDeClases}
            onClick={manejarEvento}>
            {texto}
        </button>
    )
}

export default Boton;