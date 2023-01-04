const functions = require('./functions.js');
const CONSTANTS = require('../constants.js');


function player(name) {
    this.name = name;
    this.ownBoard = functions.createBoard(CONSTANTS.FILAS_MAX, CONSTANTS.COL_MAX);
    this.enemyBoard = functions.createBoardOneLine(CONSTANTS.FILAS_MAX, CONSTANTS.COL_MAX);
    this.round = 0;
    this.logDisparos = [];

    this.disparar = () => {
        // Generamos el disparo ahora, todo numérico
        let fila = functions.generateRandomNumber(CONSTANTS.FILAS_MAX);
        let columna = functions.generateRandomNumber(CONSTANTS.COL_MAX);
        let disparo = CONSTANTS.LETRAS[fila] + columna;
        if (this.logDisparos.includes(disparo)) {
            console.log('Repetido, disparamos de nuevo: ' +disparo);
            this.disparar();
        }else{
            // console.log('disparo a:', disparo);
            this.logDisparos.push(disparo)
            // Marcamos en el tablero
            this.enemyBoard[fila][columna]='X'

        }
    }

    this.colocarBarcos = () =>{
        let size = 5;
        let {fila,columna} = functions.generateRandomPair();
        if (condition) {
            
        }
    }
}

module.exports = player;
