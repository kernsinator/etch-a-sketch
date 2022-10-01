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
            div.setAttribute("data-brightness", "1.0")
            div.style.filter = `brightness(${+div.getAttribute("data-brightness")})`;
            div.addEventListener('mouseover', paintCell)
            container.appendChild(div);
        }
    }
}



function paintCell(event) {
    if(event.target.classList.contains('.painted' ) && +event.target.getAttribute("data-brightness") > 0) {
        let newBrightness = +event.target.getAttribute("data-brightness") - 0.1
        event.target.style.filter = `brightness(${newBrightness})`;
        event.target.setAttribute("data-brightness", `${newBrightness}`)
        return;
    }
    event.target.style.backgroundColor = getRandomColor();
    event.target.classList.add('.painted');
}

function getRandomColor() {
    let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    return color;
}


drawGrid(defaultGrid)