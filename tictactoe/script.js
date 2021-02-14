const turn = document.getElementById('turn');
const restart = document.getElementById('restart');
const cells = document.querySelectorAll('[data-index]');

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let count = 1;
let winner
function draw() {
    if (count == 10) {
        turn.innerHTML = 'Draw';
        turn.classList.add('draw')
    }
}
document.querySelector('.board').addEventListener('click', which);


function which(event) {


    if (count % 2 == 1 && event.target.classList.contains('unselected')) {
        count++
        event.target.innerHTML = '<i class="fas fa-times"></i>';
        turn.innerHTML = "O Player's Turn";
        event.target.classList.remove('unselected');
        event.target.classList.remove('selectedX');
        event.target.classList.add('selectedO');
        winner = 'X Player';
        checkWin();
        draw();
    }
    if (count % 2 == 0 && event.target.classList.contains('unselected')) {
        count++
        event.target.innerHTML = '<i class="far fa-circle"></i>';
        turn.innerHTML = "X Player's Turn";
        event.target.classList.remove('unselected');
        event.target.classList.remove('selectedO');
        event.target.classList.add('selectedX');
        winner = 'O Player';
        checkWin();
        draw();
    }



}

restart.addEventListener('click', newGame);

function newGame() {
    turn.innerHTML = "X Player's Turn";
    count = 1;
    turn.classList.remove('draw')
    cells.forEach(e => {
        e.innerHTML = '';
        e.classList.remove("selectedO", "selectedX");
        e.classList.add("unselected");
    })
}


function checkWin() {
    let squares = document.querySelectorAll('div.box');

    for (var comboIndex = 0, n = winCombos.length; comboIndex < n; comboIndex++) {
        let curCombo = winCombos[comboIndex];
        let value = squares[curCombo[0]].innerHTML;
        if (value !== '') {
            if (squares[curCombo[1]].innerHTML == value && squares[curCombo[2]].innerHTML == value) {
                turn.innerHTML = `${winner} Wins!!!!`;
                count = undefined;
            }
        }
    }
}
