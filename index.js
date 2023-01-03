const CONSTANTS = require('./constants.js');
const functions = require('./functions/functions.js');
var Player = require('./functions/Player.js');



console.log('🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢');
console.log('\n      ¡Bienvenido al juego de hundir la flota! \n');
console.log('🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢 🚢');

let player1 = new Player('Jesús');
functions.printOwnBoard(player1);
functions.printEnemyBoard(player1);
// functions.printEnemyBoard(player1);