
// Columns and Rows
// Tic tac toe nought and crosses
// Smaller than go game
// chess checkers 8x8
// Battleship 10x10
// Globe lat lng 180x180

const line = [".", ".", "."]
line[1] = "X" // Change the middle column above
console.log(line) // Prints out

const board = [ // One array of rows 3x3=9
    ["X", ".", "."], // Three columns per row
    [".", ".", "."], // Three columns per row
    [".", ".", "X"], // Three columns per row
]; // End of rows

board[1][1] = "O" // [row_index] [column_index]

// console.log(board[0]) // Prints out
// console.log(board[1]) // Prints out
// console.log(board[2]) // Prints out

// Loop through row indexes
function printBoard(board) {
    for (let r = 0; r < board.length; r++) {
        rowOutput = ""
        // Loop through all cloumn index
        for (let c = 0; c < board[r].length; c++) {
            let value = board[r][c];
            rowOutput += value + " ";
        }
        console.log(r, rowOutput) // Without r, it will print 19 rows of dots in one row
    }
}


// Go board 19X19=361
const rowCount = 19;
const colCount = 19;
let goBoard = []; // Array of rows

for (let r = 0; r < rowCount; r++) {
    let row = [];
    for (let r = 0; r < colCount; r++) {
        row.push(".");
    }
    goBoard.push(row); // Same goBoard[r] = row
}

printBoard(goBoard)


