import React from "react";
import { useState } from 'react'; //importa la biblioteca principal de React y la asigna a la variable React
import Boton from './Boton';

import '../css/IngresaNombre.css'


function IngresaNombre({ iniciarJuego }) {
    const inputMargin = {
        marginBottom: "10px"
    };
    
    const [valorImput, setValorInput] = useState (''); //Estado para la entrada de texto (input)
    const [mostrarError, setMostrarError]  = useState (false); //Estado para variable que indicará si se muestra o no el error 
    

    const manejarInput = (evento) => { //Cuando se genera el evento de cambio en el capo de texto, se toma el nuevo valor ingresado y se actualiza el estado del input
        let nuevoNombre = evento.target.value.trim() //Elimino espacios al principio y final
        nuevoNombre = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.substring(1) ; //Pongo en mayuscula primera letra
        setValorInput(nuevoNombre);
    }

    const manejarEvento = () => {
        if (valorImput != "") {
            iniciarJuego(valorImput);
            setMostrarError(false);
        } else {
            setMostrarError(true);
        }
    };
    
    return (
    <div id='contenedor_nombre'>
        <label forhtml='nombre'>Ingresa tu nombre</label>
        <input id='nombre' style={mostrarError ? inputMargin : {}} type='text' autoComplete= 'off' valor= {valorImput} onChange={manejarInput} />
        <p style = {{color: 'red'}}>{mostrarError ? 'Escribe tu nombre, por favor!' : ''}</p>
        <a href='#zona-juego'>
            <Boton 
                texto='Jugar!'
                nombreDeEstilo='boton-jugar'
                manejarEvento={manejarEvento}
                neutralizarEvento = {false} /> {/* Evito que se neutralice el escuchador de evento del botón jugar! */}
        </a>
    </div>
    )
}

export default IngresaNombre;