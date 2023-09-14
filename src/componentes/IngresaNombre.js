import React, { useState, useRef } from "react"; //importa la biblioteca principal de React y la asigna a la variable React
import Boton from './Boton';

import '../css/IngresaNombre.css'


function IngresaNombre() {
    
    const [valorImput, setValorInput] = useState (''); //Estado para la entrada de texto (input)
    const [mostrarError, setMostrarError]  = useState (false); //Estado para variable que indicará si se muestra o no el error 
    const mainRef = useRef(null);

    const manejarInput = (evento) => { //Cuando se genera el evento de cambio en el capo de texto, se toma el nuevo valor ingresado y se actualiza el estado del input
        let nuevoNombre = evento.target.value.trim() //Elimino espacios al principio y final
        nuevoNombre = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.substring(1) ; //Pongo en mayuscula primera letra
        setValorInput(nuevoNombre);
    }

    const manejarEvento = () => {
        if (valorImput != "") {
            mainRef.current.style.display = "block";
            setMostrarError(false);
        } else {
            setMostrarError(true);
        }
    };
    
    return (
    <div id='contenedor_nombre'>
        <label forhtml='nombre'>Ingresa tu nombre</label>
        <input id='nombre' type='text' autocomplete= 'off' valor= {valorImput} onChange={manejarInput} />
        <p>{mostrarError ? 'Escribe tu nombre, por favor!' : ''}</p>
        <a href='#zona-juego'>
            <Boton 
                texto='Jugar!'
                nombreDeEstilo='boton-jugar'
                manejarEvento={manejarEvento} />
        </a>
    </div>
    )
}

export default IngresaNombre;