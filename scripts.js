const DEFAULTSIZE = 16;
const sketchDisplay = document.getElementById('sketchDisplay');

let submit = document.getElementById('submit');
submit.addEventListener('click', resetGridSize);


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
            // hover listener
            box.addEventListener('mouseover', e => e.target.classList.add('colored'));
            row.appendChild(box);
        }
        sketchDisplay.appendChild(row);
    }
}
function resetGridSize() {
    let gridSize = document.getElementById('numInput').value;
    document.getElementById('sketchDisplay').innerHTML = '';
    createGrid(gridSize);
    document.querySelectorAll('.box').forEach(box => box.classList.remove('colored'));
}
createGrid();
