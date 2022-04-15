let squaresContainer = document.querySelector('.squares');

for(let i = 0; i < 16*16; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    squaresContainer.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(el => 
    el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'red';
    }))