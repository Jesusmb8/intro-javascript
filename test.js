const functions = require('./functions/functions.js');


let board1 = functions.createBoard(3,2);
let board2 = functions.createBoardOneLine(10,10);

// console.log(board1);
console.table(board1);
console.table(board2);

console.log('b:', board2[1].length);