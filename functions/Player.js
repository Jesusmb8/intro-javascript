import * as Constants from '../constants.js';
import * as  functions from './functions.js';
import Boat from './Boat.js'


export function Player(name) {
    this.name = name;
    this.ownBoard = functions.createEmptyBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.enemyBoard = functions.createEmptyBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.round = 0;
    this.logDisparos = [];

    this.setUpBoard = () =>{
        console.log('  colocando barcos de ', this.name);
        let ships = [];
        let portaaviones = new Boat('Portaaviones',5,Constants.PORTAAVIONES);
        let buque = new Boat('Buque',4,Constants.BUQUE);
        let submarino = new Boat('Submarino',3,Constants.SUBMARINO);
        let crucero = new Boat('Crucero',2,Constants.CRUCERO);
        let lancha = new Boat('Lancha',1,Constants.LANCHA);
        // Insertamos
        ships.push(portaaviones);

        ships.push(buque);
        
        ships.push(submarino);
        ships.push(submarino);
        
        ships.push(crucero);
        ships.push(crucero);
        ships.push(crucero);
        
        ships.push(lancha);
        ships.push(lancha);
        ships.push(lancha);
        // Colocamos cada uno
        ships.forEach(ship => {
            functions.colocateBoat(this.ownBoard, ship)
        });
    };
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
            if (this.enemyBoard[Constants.LETRAS[fila]][columna] === Constants.AGUA) {
                console.log('Agua');
            }else{
                console.log('Tocado');
            }
            this.enemyBoard[Constants.LETRAS[fila]][columna] = 'X'

        }
    }

    // this.colocarBarcos = () => {
    //     let size = 5;
    //     let { fila, columna } = functions.generateRandomPair();
    //     if (condition) {

    //     }
    // }
}