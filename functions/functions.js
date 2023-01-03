const CONSTANTS = require('../constants.js');

/**
 * Create a board
 * @param {*} maxCols 
 * @param {*} maxRows 
 * @returns 
 */
module.exports.createBoard = (maxCols, maxRows) => {
    let board = [];
    for (let i = 0; i < maxCols; i++) {
        let row = [];
        for (let j = 0; j < maxRows; j++) {
            row.push(CONSTANTS.INIT_BOARD);
        }
        board.push(row);
    }
    return board;
}
/**
 * Print own board
 * @param {*} player 
 */
module.exports.printOwnBoard = (player) => {
    console.log('\n\n');
    console.log('  ', player.name + '  own board');
    console.table(player.ownBoard);
}
/**
 * Print enemy board
 * @param {*} player 
 */
module.exports.printEnemyBoard = (player) => {
    console.log('\n\n');
    console.log('  ', player.name + '  enemy board');
    console.table(player.enemyBoard);
}