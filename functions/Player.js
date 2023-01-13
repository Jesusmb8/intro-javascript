import * as Constants from '../constants.js';
import * as  functions from './functions.js';


export function Player(name) {
    this.name = name;
    this.ownBoard = functions.createBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.enemyBoard = functions.createBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.round = 0;
    this.logDisparos = [];

    this.disparar = () => {
        // Generamos el disparo ahora, todo numérico
        let fila = functions.generateRandomNumber(Constants.FILAS_MAX);
        let columna = functions.generateRandomNumber(Constants.COL_MAX);
        let disparo = Constants.LETRAS[fila] + columna;
        if (this.logDisparos.includes(disparo)) {
            console.log('Repetido, disparamos de nuevo: ' + disparo);
            this.disparar();
        } else {
            // console.log('disparo a:', disparo);
            this.logDisparos.push(disparo)
            // Marcamos en el tablero
            this.enemyBoard[Constants.LETRAS[fila]][columna] = 'X'

        }
    }

    this.colocarBarcos = () => {
        let size = 5;
        let { fila, columna } = functions.generateRandomPair();
        if (condition) {

        }
    }
}