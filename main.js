/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
//turn -> tour pour changer la langue
let tour = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = tour; 
    tour = tour === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    //changer turn -> tour pour afficher fr
    messages.textContent = win === 'T' ? `Égalité!` : win ? `${win} Gagne la partie!` : `Au tour de ${tour}!`;
    };

init();

let pointageX = 0;

document.getElementById("Moins").onclick = function(){
    pointageX -= 1;
    document.getElementById("ScoreX").innerHTML = pointageX;
}

document.getElementById("RemettreAzero").onclick = function(){
    pointageX = 0;
    document.getElementById("ScoreX").innerHTML = pointageX;
}

document.getElementById("Ajouter").onclick = function(){
    pointageX += 1 ;
    document.getElementById("ScoreX").innerHTML = pointageX;
}


let pointageO  = 0;


document.getElementById("MoinsO").onclick = function(){
    pointageO -= 1;
    document.getElementById("ScoreO").innerHTML = pointageO;
}

document.getElementById("RemettreAzeroO").onclick = function(){
    pointageO = 0;
    document.getElementById("ScoreO").innerHTML = pointageO;
}

document.getElementById("AjouterO").onclick = function(){
    pointageO += 1 ;
    document.getElementById("ScoreO").innerHTML = pointageO;
}

