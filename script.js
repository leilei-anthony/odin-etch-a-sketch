let paintColor = "black";

const container = document.querySelector(".container");

window.onload = function() {
    document.onmousemove = function() {
        return false;
    };
};

let mouseDown = 0;
document.body.onmousedown = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        container.appendChild(row);
        
        for(let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            
            cellSize = 960 / size;
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";

            cell.addEventListener("mouseover", (event) => {
                if(mouseDown) {
                    cell.style.backgroundColor = paintColor ;
                };
            })

            cell.addEventListener("click", (event) => {
                cell.style.backgroundColor = paintColor;
            })
        
            row.appendChild(cell);
        }
    }
}

function clearGrid() {
    container.innerHTML = "";
}

createGrid(16);

const btnGridSize = document.querySelector("#btnGridSize");

btnGridSize.addEventListener("click", function() {
    let gridSize = window.prompt("Enter Grid Size:");
    while(gridSize > 100 || gridSize < 1) {
        gridSize = window.prompt("ERROR, Grid Size must be less than or equal to 100:")
    }

    clearGrid();
    createGrid(gridSize);
})

const btnRed = document.querySelector("#btnRed");
btnRed.addEventListener("click", function() {
    paintColor = "red";
})

const btnBlue = document.querySelector("#btnBlue");
btnBlue.addEventListener("click", function() {
    paintColor = "blue";
})

const btnYellow = document.querySelector("#btnYellow");
btnYellow.addEventListener("click", function() {
    paintColor = "yellow";
})

const btnGreen = document.querySelector("#btnGreen");
btnGreen.addEventListener("click", function() {
    paintColor = "green";
})

const btnOrange = document.querySelector("#btnOrange");
btnOrange.addEventListener("click", function() {
    paintColor = "orange";
})

const btnPurple = document.querySelector("#btnPurple");
btnPurple.addEventListener("click", function() {
    paintColor = "purple";
})

const btnBlack = document.querySelector("#btnBlack");
btnBlack.addEventListener("click", function() {
    paintColor = "black";
})

const btnWhite = document.querySelector("#btnWhite");
btnWhite.addEventListener("click", function() {
    paintColor = "white";
})