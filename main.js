const container = document.querySelector('.container')

const defaultGrid = 16;
let userChoice = 0;

function handleClick(e) {
    userChoice  = getUserInput();
    drawGrid(userChoice);
    userChoice = 0;
}

function getUserInput() {
    while (!(typeof(userChoice) === "number" && (userChoice > 0 && userChoice <= 100))) {
        userChoice = +prompt('Enter number of squares per side for new grid: ')
        return userChoice;
    }
    
}

const button = document.querySelector('.user-input')
button.addEventListener('click', handleClick)

function drawGrid(lengthOfSide) {
    container.replaceChildren()
    for (let i = 0; i < lengthOfSide; i++) {
        for (let j = 0; j < lengthOfSide; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            div.style.width = `${800 / lengthOfSide}px`;
            div.style.height = `${800 / lengthOfSide}px`;
            div.addEventListener('mouseover', paintCell)
            container.appendChild(div);
        }
    }
}

function paintCell(event) {
    console.log(event);
    event.target.classList.add('painted')
}


drawGrid(defaultGrid)