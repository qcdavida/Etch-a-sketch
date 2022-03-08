const container = document.getElementsByClassName("container");

function makeGrid(){
    for(let i = 1; i <= 9; i++){
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        row.textContent = i;
        row.addEventListener('click', changeColor());
    
        container[0].appendChild(row);

    }
    container[0].style.gridTemplateColumns = "repeat(3, 30px)";
    container[0].style.gridTemplateRows = "repeat(3, 30px)";
    addEventsToDivs();
}

function addEventsToDivs(){
    let divs = document.querySelectorAll('.row');

    divs.forEach((div) => {
        console.log(div.id);

        div.addEventListener('click', changeColor);
        // div.onclick = changeColor;
    });
}

function changeColor(){
    console.log("testing");
}

makeGrid();


//        div.addEventListener('click', changeColor);