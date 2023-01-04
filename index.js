const CONSTANTS = require('./constants.js');
const functions = require('./functions/functions.js');
var Player = require('./functions/Player.js');



console.log('🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢');
console.log('\n      ¡Bienvenido al juego de hundir la flota! \n');
console.log('🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢');

let player1 = new Player('Jesús');
let player2 = new Player('Daniel');
// functions.printOwnBoard(player1);
// functions.printEnemyBoard(player1);
// functions.printEnemyBoard(player1);
functions.printOwnBoard(player1);


for (let i = 0; i < 50; i++) {
    player1.disparar();
}

console.log('Log disparos:', player1.logDisparos);
console.log('nummer:' + player1.logDisparos.length);
functions.printEnemyBoard(player1);
// 
// const arrayOfObjects = new Array(10).fill({
//     '1' : CONSTANTS.INIT_BOARD,
//     'B': CONSTANTS.INIT_BOARD,
//     'C': CONSTANTS.INIT_BOARD
//   })
  

//   console.table(arrayOfObjects)