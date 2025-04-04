// Juego de PIEDRA, PAPEL y TIJERA
let seguirJugando = true;

// Array de opciones
const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];

// Bucle principal del juego
while (seguirJugando) {
    // Elección de la computadora (aleatoria)
    const indiceComputadora = Math.floor(Math.random() * 3);
    const eleccionComputadora = opciones[indiceComputadora];
    
    // Elección del usuario
    let eleccionUsuario = prompt('Elige PIEDRA, PAPEL o TIJERA:').toUpperCase();
    
    // Verificar que la elección del usuario sea válida
    while (!opciones.includes(eleccionUsuario)) {
        eleccionUsuario = prompt('Por favor, elige una opción válida: PIEDRA, PAPEL o TIJERA:').toUpperCase();
    }
    
    // Mostrar las elecciones
    console.log(`Tu elección: ${eleccionUsuario}`);
    console.log(`Elección de la computadora: ${eleccionComputadora}`);
    
    // Determinar el ganador
    if (eleccionUsuario === eleccionComputadora) {
        console.log("¡ESTAMOS EMPATADOS!");
    } else if (
        (eleccionUsuario === 'PIEDRA' && eleccionComputadora === 'TIJERA') ||
        (eleccionUsuario === 'PAPEL' && eleccionComputadora === 'PIEDRA') ||
        (eleccionUsuario === 'TIJERA' && eleccionComputadora === 'PAPEL')
    ) {
        console.log("¡FELICIDADES...GANASTE!");
    } else {
        console.log("LO SIENTO...PERDISTE");
    }
    
    // Preguntar si quiere jugar otra vez
    const jugarDeNuevo = prompt('¿Quieres jugar de nuevo? (S/N):').toUpperCase();
    if (jugarDeNuevo !== 'S') {
        seguirJugando = false;
        console.log("Gracias por jugar");
    }
}