createGrid();

function createRow() {
    const space = document.querySelector("#canvas");
    const row = document.createElement("div");
    row.classList.toggle("container");
    space.appendChild(row);

    let square, numSquares = 16;
    for (let i = 0; i < numSquares; i++) {
        square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
    }
}

function createGrid() {
    let numRow = 16;
    for (let i = 0; i < numRow; i++) {
        createRow();
    }
}