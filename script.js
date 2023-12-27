/*
 * The rules for the evolution of each cell are as follows:
 * Any live cell with fewer than two live neighbors dies, as if by underpopulation.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by overpopulation.
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/
const canvas = document.querySelector("canvas");
const Height = 500;
const Width = 500;

canvas.height = Height;
canvas.width = Width;

const brush = canvas.getContext('2d');

class Cell {
    // creates a small rectange with width and height of 10
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.cellWidth = 10;
        this.cellHeight = 10;
    }

    // cell alive( state : true ) are green and other lightgray (dead) 
    draw() {
        brush.strokeRect(this.x, this.y, this.cellWidth, this.cellHeight);
        brush.fillStyle = this.state ? "green" : "lightgray";
        brush.fillRect(this.x, this.y, this.cellWidth, this.cellHeight);
    }

    // get the surrounding neighbours of a given instance
    // x, y : x_coord and y_coord of that instance (rectange)
    getNeighbours(x, y) {
        const neighbours = [];
        const positions = [
            { dx: -1, dy: -1 }, // Top left
            { dx: 0, dy: -1 },  // Top
            { dx: 1, dy: -1 },  // Top right
            { dx: -1, dy: 0 },  // Left
            { dx: 1, dy: 0 },   // Right
            { dx: -1, dy: 1 },  // Bottom left
            { dx: 0, dy: 1 },   // Bottom
            { dx: 1, dy: 1 },   // Bottom right
        ];
        for (let pos of positions) {
            const newX = x + pos.dx * this.cellWidth;
            const newY = y + pos.dy * this.cellHeight;
            let n = cellArray.find(cell => cell.x === newX && cell.y === newY);
            if (n) {
                neighbours.push(n);
            }
        }
        return neighbours;
    }

    // check the number of alive neighbours and update according to the rules
    update() {
        const neighbours = this.getNeighbours(this.x, this.y);
        const numberOfAlive = neighbours.filter(cell => cell.state).length;

        if (this.state && (numberOfAlive > 3 || numberOfAlive < 2)) {
            this.newState = false;
        } else if (!this.state && numberOfAlive === 3) {
            this.newState = true;
        } else {
            this.newState = this.state;
        }
    }
}

// creates an array of cells whos length is (width * height)
cellArray = [];
for (let x = 0; x < Width; x += 10) {
    for (let y = 0; y < Height; y += 10) {
        let state = Math.random() <= 0.25; // if math.random lessthan 0.25 then true (alive) else false (dead) 
        cellArray.push(new Cell(x, y, state));
    }
}

function animate() {
    // Update cells
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].update();
    }

    // Apply new state
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].state = cellArray[i].newState;
    }

    // Clear canvas
    brush.clearRect(0, 0, canvas.width, canvas.height);

    // Draw cells
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].draw();
    }

    requestAnimationFrame(animate);
}

animate();
