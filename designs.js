// //Select color input
// // Select size input
// // When size is submitted by the user, call makeGrid()
let height;
let width;
let table;
let canvas;
let color;
let mouseDown = false;

window.onload = () => {
    // alert()
    height = document.getElementById('inputHeight')
    width = document.getElementById('inputWidth')
    table = document.getElementById('pixelCanvas')
    color = document.getElementById('colorPicker')

    table.addEventListener('click', (event) => {
     const target = event.target;
     if (target.tagName !== 'TD')
        return
    target.style.background = color.value
    })
}
function makeGrid() {
    // clear existing grid data
    table.innerHTML = "";

    //create a row for every height
    for (let index_height = 0; index_height < height.value; index_height++) {
        const new_row = document.createElement('tr');

        // create a box/column for every width
        for (let index_width = 0; index_width < width.value; index_width++) {
            const new_box = document.createElement('td');

            // new_box.addEventListener('click', () => alert('you clicked me!'))
            new_row.appendChild(new_box); // append new box to row
        }
        table.appendChild(new_row); // append new elements onto the DOM
    }
}



    for (let_row = 0; _row < inputHeight.value; _row++) {
        let row = document.createElement("tr");
        for (let _col = 0; _col < inputWidth.value; _col++) {
            const box = document.createElement("td");
            box.addEventListener("mouseover", function (event) {
                event.preventDefault()
                if (mouseDown)
                    event.target.style.background = color.value;
            })
            row.appendChild(box)
        }
        canvas.appendChild(row);
    }
    

function colorPixel(event) {
    // //user can color pixels in the grid (color only that precise pixel)
    if (mouseDown)
        event.target.style.background = color.value;
 }
function resetGrid() {
    // // reset the grid to a blank state
}
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.children[0]);
    }
    //canvas.innerHTML=“”
    function init() {
        canvas = document.getElementById("pixelCanvas");
        inputHeight = document.getElementById("inputHeight");
        inputWidth = document.getElementById(" inputWidth");
        color = document.getElementById('colorPicker');
        document.getElementById("sizePicker").addEventListener("submit", makeGrid)

        document.body.onmousedown = () => {
            console.log('mouseDown')
            mouseDown = true;
        }
        document.body.onmouseup = () => mouseDown = false;

    }

// code here caused a bug on my code
// function makeGrid(event) {
//     event.preventDefault()
//     resetGrid()




box.addEventListener("mouseover", function (event) {
    event.preventDefault()
    if (mouseDown)
    event.target.style.background = color.value;
})