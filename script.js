const container = document.getElementsByClassName("grid-container");

//set the default grid size for grid upon loading page
let gridSize = document.getElementById('grid-size').value;

//set the default color for the color picker tool
let color = document.getElementById('color-picker').value;

//adds an event listenter to the color picker tool and updates the var color
document.getElementById('color-picker').addEventListener('change', (e) =>{
    color = e.target.value;
})

function updateSliderDisplay(value){
    document.getElementById('slider-text').innerHTML = `Grid Size: ${value} x ${value}`;
    gridSize = document.getElementById("grid-size").value;
}

function makeGrid(gridSize){
    removeGrid();

    let numOfBoxes = gridSize * gridSize;
    let numOfColumns = Math.sqrt(numOfBoxes);
    let numOfRows = numOfColumns;

    for(let i = 1; i <= numOfBoxes; i++){
        let box = document.createElement('div');
        box.className = 'box';
        box.id = 'box' + i;
        box.addEventListener('mouseover', changeColor);
    
        container[0].appendChild(box);

    }
    container[0].style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`;
    container[0].style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
}

function changeColor(){
    this.style.background = color;
}

function removeGrid(){
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.remove();
    })
}

makeGrid(gridSize);
