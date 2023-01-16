import * as  Constants  from './constants.js';
import * as  functions from './functions/functions.js';
import {Player} from './functions/Player.js';
import usePrinter from './functions/printer.js'

const { printHeading, printLine } = usePrinter()
// var Player = require('./functions/Player.js');

printHeading('¡Bienvenido al juego de hundir la flota!');


let player1 = new Player('Jesús');
let player2 = new Player('Daniel');
// functions.printOwnBoard(player1);
// functions.printEnemyBoard(player1);
// functions.printEnemyBoard(player1);

// Colocamos los barcos
player1.setUpBoard();
player2.setUpBoard();

// Asignamos los tablerso


functions.printOwnBoard(player2);
for (let i = 0; i < 30; i++) {
    player1.disparar(player2);
}
functions.printEnemyBoard(player1);
console.log('Log disparos:', player1.logDisparos);
console.log('nummer:' + player1.logDisparos.length);

functions.printOwnBoard(player1);
for (let i = 0; i < 100; i++) {
    player2.disparar(player1);
}
functions.printOwnBoard(player1);
functions.printEnemyBoard(player2);
console.log('Log disparos:', player2.logDisparos);
console.log('nummer:' + player2.logDisparos.length);