const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('cell')
    container.appendChild(div);
}

function paintCells(event) {
    event.target.classList.add('painted')
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => cell.addEventListener('mouseover', paintCells));
