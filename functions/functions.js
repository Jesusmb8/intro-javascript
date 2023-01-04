const CONSTANTS = require('../constants.js');

/**
 * Create a board
 * @param {*} maxRows 
 * @param {*} maxCols 
 * @returns 
 */
module.exports.createBoard = (maxRows, maxCols) => {
    let board = [];
    for (let i = 0; i < maxRows; i++) {
        let col = [];
        for (let j = 0; j < maxCols; j++) {
            col.push(CONSTANTS.INIT_BOARD);
        }
        board.push(col);
    }
    return board;
}
/**
 * Create Board, optimize
 * @param {*} maxRows 
 * @param {*} maxCols 
 * @returns 
 */
module.exports.createBoardOneLine = (maxRows, maxCols) => {
    return new Array(maxRows).fill().map(() => new Array(maxCols).fill(CONSTANTS.INIT_BOARD));
}

// TODO: BORRAR O TERMINAR
//module.exports.createBoardNew = (maxCols,maxRows) =>{
//     let board = new Array(maxRows).fill({
//         while(i<10){
//             return('A' : CONSTANTS.INIT_BOARD)
//         }
//         ,
//         'B': CONSTANTS.INIT_BOARD,
//         'C': CONSTANTS.INIT_BOARD
//       })

//       console.table(board)
//       return board;

// }
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

module.exports.generateRandomNumber = (maxValue)=>{
        return Math.floor(Math.random() * maxValue);
}