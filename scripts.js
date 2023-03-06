const DEFAULTSIZE = 16;
const sketchDisplay = document.getElementById('sketchDisplay');
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
        sketchDisplay.appendChild(row);
    }
}
createGrid();
function getGridSize() {
    //get input number 
    // when user clicks submit
    // then re run the create grid with new sizes
    // and reset the classList of boxes so they go uncolored
}
