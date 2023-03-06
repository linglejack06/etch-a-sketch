const DEFAULTSIZE = 4;
const SKETCHDISPLAY = document.getElementById('sketchDisplay');
function createGrid(gridSize = DEFAULTSIZE) {
    for(let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < gridSize; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        SKETCHDISPLAY.appendChild(row);
    }
}
createGrid();