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
}

function addHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(el => 
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'red';
        }));
}
    
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);

function clearGrid(){
    const colored = document.querySelectorAll('.square');
    for(let i = 0; i < colored.length; i++){
        let square = colored[i];
        square.style.backgroundColor = '';
    }
}