const functions = require('./functions.js');
const CONSTANTS = require('../constants.js');


function player(name) {
    this.name = name;
    this.ownBoard = functions.createBoard(CONSTANTS.FILAS_MAX, CONSTANTS.COL_MAX);
    this.enemyBoard = functions.createBoard(CONSTANTS.FILAS_MAX, CONSTANTS.COL_MAX);
    this.round = 0;
}

module.exports = player;
