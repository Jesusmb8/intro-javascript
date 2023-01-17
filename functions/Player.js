import * as Constants from '../constants.js';
import * as  functions from './functions.js';
import Boat from './Boat.js'
import usePrinter from './printer.js'

const { printLine } = usePrinter();


export function Player(name) {
    this.name = name;
    this.ownBoard = functions.createEmptyBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.enemyBoard = functions.createEmptyBoard(Constants.FILAS_MAX, Constants.COL_MAX);
    this.round = 0;
    this.logDisparos = [];
    this.ships = [];
    this.finish = false;

    this.setUpBoard = () => {
        printLine('  \ncolocando barcos de ', this.name);
        let portaaviones = new Boat('Portaaviones', 5, Constants.PORTAAVIONES);
        let buque = new Boat('Buque', 4, Constants.BUQUE);
        let submarino1 = new Boat('Submarino', 3, Constants.SUBMARINO);
        let submarino2 = new Boat('Submarino', 3, Constants.SUBMARINO);
        let crucero1 = new Boat('Crucero', 2, Constants.CRUCERO);
        let crucero2 = new Boat('Crucero', 2, Constants.CRUCERO);
        let crucero3 = new Boat('Crucero', 2, Constants.CRUCERO);
        let lancha1 = new Boat('Lancha', 1, Constants.LANCHA);
        let lancha2 = new Boat('Lancha', 1, Constants.LANCHA);
        let lancha3 = new Boat('Lancha', 1, Constants.LANCHA);
        // Insertamos
        this.ships.push(portaaviones);

        this.ships.push(buque);

        this.ships.push(submarino1);
        this.ships.push(submarino2);

        this.ships.push(crucero1);
        this.ships.push(crucero2);
        this.ships.push(crucero3);

        this.ships.push(lancha1);
        this.ships.push(lancha2);
        this.ships.push(lancha3);
        // Colocamos cada uno
        this.ships.forEach(ship => {
            functions.colocateBoat(this.ownBoard, ship)
        });
    };
    this.disparar = (player2) => {
        // Generamos el disparo ahora, todo numérico
        let fila = functions.generateRandomNumber(Constants.FILAS_MAX);
        let columna = functions.generateRandomNumber(Constants.COL_MAX);
        let disparo = Constants.LETRAS[fila] + columna;
        let resultado;
        if (this.logDisparos.includes(disparo)) {
            // printLine('Repetido, disparamos de nuevo: ' + disparo);
            this.disparar(player2);
        } else {
            // printLine('disparo a:', disparo);
            this.logDisparos.push(disparo)
            // Marcamos en el tablero
            if (player2.ownBoard[Constants.LETRAS[fila]][columna] === Constants.INIT_BOARD) {
                // printLine(' Agua');
                this.enemyBoard[Constants.LETRAS[fila]][columna] = Constants.AGUA;
                resultado = Constants.AGUA;
            } else {
                // printLine(' Tocado');
                let shipTocado;
                player2.ships.forEach(ship => {
                    if (ship.coordenadas.find(coordenadas => coordenadas === disparo)) {
                        shipTocado = ship;
                        ship.disparosRecibidos++;
                        // Si los disparos es igual al tamaño está hundido.
                        if (ship.disparosRecibidos === ship.size) {
                            ship.hundido = true;
                            ship.coordenadas.forEach(coordenada => {
                                let fila = coordenada[0];
                                let columna = coordenada[1];
                                this.enemyBoard[fila][columna] = Constants.HUNDIDO;
                                resultado = Constants.HUNDIDO;
                            })
                            // Marcamos tocado
                            // printLine('   ❌ El barco hundido es:', ship.name, ship.disparosRecibidos);
                        }
                    }

                });
                if (!shipTocado.hundido) {
                    // Marcamos tocado
                    printLine('   El barco tocado es:', shipTocado.name, shipTocado.disparosRecibidos, shipTocado.hundido);
                    this.enemyBoard[Constants.LETRAS[fila]][columna] = Constants.TOCADO;
                }
                // Comprobamos si todos están hundidos
                let algunoSinHundir = player2.ships.find(ship => ship.hundido === false);
                if (!algunoSinHundir) {
                    // printLine('Todos hundidos:', algunoSinHundir);
                    this.finish = true;
                }
            }
            console.log('\n');
            printLine('Ronda #' + this.logDisparos.length + ' disparando a: ' + disparo + ' --> ' + resultado);
            functions.printOwnBoard(this);
            functions.printEnemyBoard(this);

        }
    }

}