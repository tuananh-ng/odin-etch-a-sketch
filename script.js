const defaultSize = 16;
createGrid(defaultSize);
addHoveringEffect();

const askingButton = document.querySelector("#ask");
askingButton.addEventListener("click", () => {
    newSize = askForGridSize();
    if (!newSize) {
        return;
    }
    changeGrid(newSize);
});

function createGrid(numRows) {
    let numSquares = numRows;
    for (let i = 0; i < numRows; i++) {
        createRow(numSquares);
    }
}

function createRow(numSquares) {
    const space = document.querySelector("#canvas");
    const row = document.createElement("div");
    row.classList.toggle("container");
    space.appendChild(row);

    let square;
    for (let i = 0; i < numSquares; i++) {
        square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
    }
}

function addHoveringEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "blue";
        });

        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "red";
        })
    });
}

function askForGridSize() {
    let size = +prompt("Enter a grid size (1-100):");

    return size;
}

function changeGrid(size) {
    if (!(Number.isInteger(size))) {
        return;
    }
    if (size < 0 || size > 100) {
        return;
    }

    const body = document.querySelector("body");
    const space = document.querySelector("#canvas");
    if (space) {
        body.removeChild(space);
    }

    const newSpace = document.createElement("div");
    newSpace.setAttribute("id", "canvas");
    body.appendChild(newSpace);
    
    createGrid(size);
    addHoveringEffect();
}