import React from "react"; //importa la biblioteca principal de React y la asigna a la variable React
import piedraImg from '../img/piedra.png';
import papelImg from '../img/papel.png';
import tijerasImg from '../img/tijeras.png';
import '../css/Juego.css'

function Juego() {
    return(
        <section id="juego">
            <h2 className="rojo-texto">Elige tu jugada!</h2>
            <div className="elecciones jugador"></div>
            <div className="elecciones pc"></div>
            <h3>Gana el mejor de 5 intentos</h3>
            <div>
                <img className="opciones-imagenes" src={piedraImg} alt="Piedra" />
                <img className="opciones-imagenes" src={papelImg} alt="Papel" />
                <img className="opciones-imagenes" src={tijerasImg} alt="Tijeras" />
            </div>
        </section>
    )
}

export default Juego;