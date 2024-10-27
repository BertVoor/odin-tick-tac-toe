console.log("script loaded");

function Gameboard() {
    const board = [];
    const rows = 3;
    const columns = 3;

    for(let i = 0; i<rows; i++){
        board[i] = [];
        for(let j = 0; j<columns;j++){
            board[i].push(0);
        }
    }
    console.log(board);

}

function Player() {

}

