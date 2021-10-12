import React from 'react'

export const Rules = ()=>{
    return (
        <div className='rules-container'>
            <h1 className='rules-title'>Game Rules</h1>
            <p className='rules-description'>
                The follow are the game rules for our battlefield
            </p>
            <ul className='rules-list'>
                <li>

                    <h3>Ships</h3>
                    <ul className='rules-sublist'>
                        <li> 1 Battleship que tiene 4 espacios de largo.</li>
                        <li> 2 cruise que son 3 espacios de largo.  </li>
                        <li> 3 submarine que son 2 espacios de largo.  </li>
                        <li> 4 destroyer que son 1 espacio de largo.   </li>
                        <li>
                            El usuario debe ingresar el número de turnos (o intentos) antes de comenzar el juego, y
                            también debe haber 3 niveles predefinidos para seleccionar: fácil (turnos infinitos),
                            medio (100 turnos), difícil (50 turnos)  
                        </li>
                        <li>
                            La aplicación debe tener enrutamiento para diferentes páginas (configuración del juego,
                            tablero de juego, lista de juegos terminados, etc.).
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>Points</h3>
                    <ul>
                        <li>Un clic en un espacio ya hecho clic no debe contar como un turno.</li>
                        <li>Debe haber una indicación visual cuando:</li>
                        <li>El jugador falla un tiro.</li>
                        <li>El jugador aterriza un tiro.</li>
                        <li>Un barco está hundido.</li>
                    </ul>
                </li>
                <li>
                    <h3>Levels</h3>
                    <ul>
                        <li>El jugador hunde todas las naves y gana el juego.</li>
                        <li>¡El jugador usa todos los turnos sin hundir todas las naves, lo que significa que el juego  ha terminado!</li>
                        <li>Se debe mostrar un mensaje en la pizarra con la etiqueta "Intentar de nuevo". Si el jugador hace clic, el juego debería comenzar de nuev</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
