# Juego Piedra Papel o Tijeras


Este es un juego simple y tradicional de **Piedra Papel o Tijeras!**. Deberás ingresar tu nombre para comenzar la partida. 

La partida consta de 5 intentos, pero si la computadora o el usuario llega a 3 victorias el juego se termina. Esto es porque una vez que se llegan a 3 victorias habiendo 5 intentos, ya no será posible empatar o ganar la partida.

Una vez iniciada la partida en la esquina derecha en color verde figura el numero de intento correspondiente. El resultado de la elección del usuario o de la computadora se visualizan en carteles ubicados a la izquierda y a la derecha de la pantalla respectivamente.

Una vez que la computadora ingreso su elección el conteo de puntos se muestran en el tablero de puntajes, donde aparecerá el nombre del usuario. 

Al finalizar cada intento se emite un mensaje central en el tablero donde se muestra el resultado de ese intento. También aparece un boton que se deberá presionar para pasar al siguiente intento. 

## Uso
![Imagen1](https://github.com/Andrea2907G/practico3/blob/main/public/img1.jpg?raw=true)

1. Deberá elegir una opción, piedra papel o tijeras según la imagen.

![Imagen2](https://github.com/Andrea2907G/practico3/blob/main/public/img2.jpg?raw=true)

2. Aguarde la elección de la Computadora.

![Imagen4](https://github.com/Andrea2907G/practico3/blob/main/public/img4.jpg?raw=true)

3. Una vez que se actualiza el tablero de puntaje se indicará que inicia la segunda partida. La secuencia se repite hasta alcanzar 5 intentos, o cuando uno de los dos contricantes alcance 3 victorias.


4. Al finalizar la partida se emite un mensaje central que informa el resultado: Empate! Perdiste! o Ganaste! Y se da la opción de volver a jugar, o cerrar la ventana sin volver a jugar.

![Imagen3](https://github.com/Andrea2907G/practico3/blob/main/public/img3.jpg?raw=true)

5. Si se desea volver a jugar se debe presionar el botón "Nueva partida" y los valores anteriores serán reseteados.

6. Los valores tambien son reseteados si se presiona nuevamente el botón "jugar!" sin que haya terminado la partida.

## Detalle sobre lo implementado
### Tecnologías utilizadas

* JSX
* CSS
* JavaScript
* Libreria React 


### Especificaciones

Para la organizacion del código, aparte del componente principal App.js se crearon 5 subcomponentes. 

1. IngresaNombre.js para el header del DOM
2. Juego.js para titulo, subtitulo, numero de intentos, carteles con elecciones, y opciones de piedra papel o tijeras
3. Tablero de puntaje para renderizar Nombre, puntaje de cada jugador y resultado de cada intento
4. Resultado.js para renderizar una ventana modal al final de la partida que anuncia el resultado final y da la opción de volver a iniciar
5. Boton.js con el que renderizo tres botones diferentes: jugar! siguiente! y nueva partida.

Además se usaron eventos para interactividad, estados para controlar elementos a renderizar y otras variables. Se utilizaron props para pasar información entre componentes. 

Se utilizaron 6 hojas de estilos, 1 por cada componente contenidas en la carpeta css. 

Incialmente se crearon funciones para establecer lógica de resultado de cada ronda, además de actualización de marcadores, pero tuve problemas con el uso del valor actual del estado en una función diferente a la función donde se actualizó dicho estado. El problema era que en la funcion donde quería utilizar el estado le llegaba un valor desactualizado del mismo. Esto a pesar que el codigo de la funcion que manejaba esa actualizacion se encontraba antes en la linea de ejecución. Estoy buscando la solución.



[practico3](https://andrea2907g.github.io/practico3/)