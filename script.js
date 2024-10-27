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
    const getBoard = () => board;

    const placeToken = (x , y , player) => {
        board[x][y] = player.token;
        console.log(`token: ${player.token}`);
    }


    return {getBoard, placeToken};

}

function Players() {

    const players = [
        {
            name: "Player One",
            token: "X"
        },
        {
            name: "Player Two",
            token:  "O"
        }
    ];

    let activePlayer = players[0];

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    return {switchTurn, getActivePlayer};
};

function gameController() {
    
}

