createGrid();
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    });

    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "red";
    })
});

function createGrid() {
    let numRow = 16;
    for (let i = 0; i < numRow; i++) {
        createRow();
    }
}

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