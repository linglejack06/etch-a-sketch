const DEFAULTSIZE = 16;
const SKETCHDISPLAY = document.getElementById('sketchDisplay');
// loops through and creates grid
function createGrid(gridSize = DEFAULTSIZE) {
    for(let i = 0; i < gridSize; i++) {
        // create row
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < gridSize; j++) {
            // loop within row and add boxes across row
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        SKETCHDISPLAY.appendChild(row);
    }
}
createGrid();
function getGridSize() {

}
