function makeGrid(numOfSquares) {
    let squaresContainer = document.querySelector('.squares');
    let sizeOfSquare = (480/numOfSquares) + 'px';
    for(let i = 0; i < Math.pow(numOfSquares, 2); i++) {
        let square = document.createElement('div');
        square.style.width = sizeOfSquare;
        square.style.height = sizeOfSquare;
        square.classList.add('square');
        squaresContainer.appendChild(square);
    }
    addHover();
}

function addHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(el => 
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'red';
        }));
}

function clearGrid() {
    const grid = document.querySelector('.squares');
    while(grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
}

function promptUser() {
    let choice = 0;
    while(choice < 16 || choice > 100) {
        choice = prompt('Enter a number between 16 and a 100.');
    }
    return choice;
}
