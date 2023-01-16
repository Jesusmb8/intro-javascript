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


functions.printOwnBoard(player1);

// for (let i = 0; i < 50; i++) {
//     player1.disparar();
// }

console.log('Log disparos:', player1.logDisparos);
console.log('nummer:' + player1.logDisparos.length);
// functions.printEnemyBoard(player1);
// 
// const arrayOfObjects = new Array(10).fill({
//     '1' : CONSTANTS.INIT_BOARD,
//     'B': CONSTANTS.INIT_BOARD,
//     'C': CONSTANTS.INIT_BOARD
//   })
  

//   console.table(arrayOfObjects)