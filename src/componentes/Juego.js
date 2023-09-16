import React from "react"; //importa la biblioteca principal de React y la asigna a la variable React
import { useEffect } from "react";
import piedraImg from '../img/piedra.png';
import papelImg from '../img/papel.png';
import tijerasImg from '../img/tijeras.png'
import '../css/Juego.css'

//Este componente retorna la interfaz de usuario correspondiente a las opciones de Piedra Papel o Tijeras. 


function Juego({ eleccionJugador, eleccionPc, manejarEleccionPiedra, eligioPiedra, manejarEleccionPapel, eligioPapel, manejarEleccionTijera, eligioTijera, eligio, pcPiedra, pcPapel, pcTijera, cambiaTurno }) {

    useEffect( () => {
        if (eligio) {
            //Cambia el color del título
            document.getElementById('turno').style.color = 'yellow';
        } else {
            //Restaura el color original del título
            document.getElementById('turno').style.color = 'red';
        }        
    }, [eligio])



    const claseBase = 'opciones-imagenes';

    return(
        <section id="juego">
            <h2 id="turno">{cambiaTurno}</h2>
            <div className="elecciones jugador">{eleccionJugador}</div>
            <div className="elecciones pc">{eleccionPc}</div>
            <h3>Gana el mejor de 5 intentos</h3>
            <div>
                <img className={`${claseBase} ${pcPiedra ? 'opcion-activada' : ''}`} style={eligioPiedra ? {border:'3px solid red'} : {}} src={piedraImg} alt="Piedra" onClick={eligio ? null : manejarEleccionPiedra} />
                <img className={`${claseBase} ${pcPapel ? 'opcion-activada' : ''}`} style={eligioPapel ? {border:'3px solid red'} : {}} src={papelImg} alt="Papel" onClick={eligio ? null : manejarEleccionPapel} />
                <img className={`${claseBase} ${pcTijera ? 'opcion-activada' : ''}`} style={eligioTijera ? {border:'3px solid red'} : {}} src={tijerasImg} alt="Tijeras" onClick={eligio ? null : manejarEleccionTijera} />
            </div>
        </section>
    )
}

export default Juego;