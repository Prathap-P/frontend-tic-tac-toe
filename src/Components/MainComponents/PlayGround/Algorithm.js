//Algorithm for making computer move in the game

function calcIndexFromCoOrdinates(x, y){
    return ((3 * x) + y);
}

let board= [];
function initializeBoard(boxes){
    board= [
        [ boxes[0].innerText, boxes[1].innerText, boxes[2].innerText],
        [ boxes[3].innerText, boxes[4].innerText, boxes[5].innerText],
        [ boxes[6].innerText, boxes[7].innerText, boxes[8].innerText]
    ]
}

function makeBestMove(boxes){
    initializeBoard(boxes);
    let bestScore = Infinity;
    let move= {};

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            if (board[i][j] === '') {
                board[i][j] = "O";
                let score = minimax(board, 0, true);
                board[i][j] = '';
                
                if (score < bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    
    return [move.i, move.j];
}

const scores = {
    "X": 1,
    "O": -1,
    "Tie": 0
};

function minimax(board, depth, isMaximizing){
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (board[i][j] === '') {
                    board[i][j] = "X";
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } 

    else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (board[i][j] === '') {
                board[i][j] = "O";
                let score = minimax(board, depth + 1, true);
                board[i][j] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        }
        return bestScore;
    }
}

function checkWinner(){
    
    let equals= (a, b, c) => {
        return a === b && b === c && a !== '';
    }

    let winner = null;
  
    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }
  
    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }
  
    // Diagonal
    if (equals(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }
  
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                openSpots++;
            }
        }
    }
  
    if (winner === null && openSpots === 0)
        return 'Tie';
    
    else
        return winner;
    
}

function hasAnybodyWon(boxes){
    initializeBoard(boxes);
    return checkWinner();
}

export{
    hasAnybodyWon,
    calcIndexFromCoOrdinates,
    makeBestMove    
}
