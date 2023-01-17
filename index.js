import * as  Constants from './constants.js';
import * as  functions from './functions/functions.js';
import { Player } from './functions/Player.js';
import usePrinter from './functions/printer.js'

const { printHeading, printLine } = usePrinter()
// var Player = require('./functions/Player.js');

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


for (let i = 0; !player1.finish && !player2.finish; i++) {
    player1.disparar(player2);
    player2.disparar(player1);
}

printLine(' Y el ganador es ...');
if (player1.finish) {
    printHeading(player1.name);
    printLine(' con ' + player1.logDisparos.length + ' disparos.');

} else {
    printHeading(player2.name);
    printLine(' con ' + player2.logDisparos.length + ' disparos.');
}
// functions.printOwnBoard(player2);
// functions.printEnemyBoard(player1);
// console.log('Log disparos:', player1.logDisparos);
// console.log('nummer:' + player1.logDisparos.length);

// for (let i = 0; !player2.finish; i++) {
//     player2.disparar(player1);
// }
// functions.printOwnBoard(player1);
// functions.printEnemyBoard(player2);
// console.log('Log disparos:', player2.logDisparos);
// console.log('nummer player 1: ' + player1.logDisparos.length);
// console.log('nummer player 2: ' + player2.logDisparos.length);
