import * as Constants from '../constants.js';
import usePrinter from './printer.js'

const { printLine } = usePrinter();

/**
 * Create a board
 * @param {*} maxRows 
 * @param {*} maxCols 
 * @returns 
 */
export function createEmptyBoard(maxRows, maxCols) {
    let board = {};
    for (let i = 0; i < maxRows; i++) {
        let col = [];
        for (let j = 0; j < maxCols; j++) {
            col.push(Constants.INIT_BOARD);
        }
        // board.push(col);
        board[Constants.LETRAS[i]] = col;
    }
    return board;
}
/**
 * Create Board, optimize
 * @param {*} maxRows 
 * @param {*} maxCols 
 * @returns 
 */
export function createBoardOneLine(maxRows, maxCols) {
    return new Array(maxRows).fill().map(() => new Array(maxCols).fill(Constants.INIT_BOARD));
}

// TODO: BORRAR O TERMINAR
//export   function  createBoardNew = (maxCols,maxRows) =>{
//     let board = new Array(maxRows).fill({
//         while(i<10){
//             return('A' : Constants.INIT_BOARD)
//         }
//         ,
//         'B': Constants.INIT_BOARD,
//         'C': Constants.INIT_BOARD
//       })

//       console.table(board)
//       return board;

// }
/**
 * Print own board
 * @param {*} player 
 */
export function printOwnBoard(player) {
    console.log('\n');
    printLine('  ', player.name + '  own board');
    console.table(player.ownBoard);
}
/**
 * Print enemy board
 * @param {*} player 
 */
export function printEnemyBoard(player) {
    console.log('\n');
    printLine('  ', player.name + '  enemy board');
    console.table(player.enemyBoard);
}
/**
 * Randon number
 * @param {*} maxValue 
 * @returns 
 */
export function generateRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
}
/**
 * 
 * @returns 
 */
export function generateRandomPair() {
    let fila = Constants.LETRAS[this.generateRandomNumber(Constants.FILAS_MAX)];
    let columna = this.generateRandomNumber(Constants.COL_MAX);
    return { fila, columna };
}

export function colocateBoat(board, boat) {
    let fila = generateRandomNumber(Constants.FILAS_MAX);
    let columna = generateRandomNumber(Constants.COL_MAX);
    console.log('Posicionamos ', boat.icon ,' en:', Constants.LETRAS[fila], columna);
    // Comprobamos si entra
    if (columna + boat.size <= Constants.FILAS_MAX) {
        // Entra, posicionamos
        // Ver si está libre
        let canPlace = true;
        for (let index = columna; index < columna + boat.size; index++) {
            if (board[Constants.LETRAS[fila]][index] !== Constants.INIT_BOARD) {
                canPlace = false;
            }
        }
        if (canPlace) {
            for (let index = columna; index < columna + boat.size; index++) {
                board[Constants.LETRAS[fila]][index] = boat.icon;
                boat.coordenadas.push(Constants.LETRAS[fila]+index);
            }
        } else {
            console.log('  🚨  Ya está ocupado');
            colocateBoat(board, boat);
        }
        // Colocado en
        console.log('  ' + boat.icon + '  colocado en:' + boat.coordenadas);
    } else {
        // No entra, buscamos de nuevo
        console.log('  No entra', fila, columna);
        colocateBoat(board, boat);
    }
}