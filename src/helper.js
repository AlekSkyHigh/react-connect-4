export const isWinner = (gameBoard, currentMove, currentPlayer) => {

    const boardCopy = [...gameBoard];
    boardCopy[currentMove] = currentPlayer;

    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 16],
        [3, 6, 9, 12]
    ]

    for (let i = 0; i < winLines.length; i++) {

        const [c1, c2, c3, c4] = winLines[i];

        if (boardCopy[c1] > 0 &&
            boardCopy[c1] === boardCopy[c2] &&
            boardCopy[c2] === boardCopy[c3] &&
            boardCopy[c3] === boardCopy[c4]) {
            return true;
        }
    }
    return false;
}

export const isDraw = (gameBoard, currentMove, currentPlayer) => {

    let boardCopy = [...gameBoard];
    boardCopy[currentMove] = currentPlayer;

    let count = boardCopy.reduce((n, x) => n + (x === 0), 0);
    console.log(`count ${count}`);
    return count === 0;
}

export const getComputerMove = (gameBoard) => {

    let validMoves = [];

    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i);
        }
    }

    let randomMove = Math.floor(Math.random() * validMoves.length);

    return validMoves[randomMove];
}