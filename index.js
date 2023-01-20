import * as  Constants from './constants.js';
import * as  functions from './functions/functions.js';
import { Player } from './functions/Player.js';
import usePrinter from './functions/printer.js'

const { printHeading, printLine } = usePrinter()

printHeading('¡Bienvenido al juego de hundir la flota!');

let player1 = new Player('Jesús');
let player2 = new Player('Daniel');

// Colocamos los barcos
player1.setUpBoard();
player2.setUpBoard();
// Tablero player 1
functions.printOwnBoard(player1);

functions.printOwnBoard(player2);
printHeading('... Comenzamos ...');
let rondas = 0;

for (let i = 0; i < Constants.DISPAROS_MAXIMOS && !(player1.finish || player2.finish); i++) {
    let sigueDisparando = true;
    while (sigueDisparando && !(player1.finish || player2.finish)) {
        sigueDisparando = player1.disparar(player2, rondas);
    }
    sigueDisparando = true;
    while (sigueDisparando && !(player1.finish || player2.finish)) {
        sigueDisparando = player2.disparar(player1, rondas);

    }
    rondas++;
}

printLine(' Y el ganador en ' + rondas + ' rondas es ...');
if (player1.finish) {
    printHeading(player1.name);
    printLine(' con ' + player1.logDisparos.length + ' disparos.');
    printLine(player2.name + ' disparó: ' + player2.logDisparos.length);

} else if(player2.finish){
    printHeading(player2.name);
    printLine(' con ' + player2.logDisparos.length + ' disparos.');
    printLine(player1.name + ' disparó: ' + player1.logDisparos.length);
}

