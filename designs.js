
let height;
let width;
let table;
let canvas;
let color;

window.onload = () => {
    // alert()
    height = document.getElementById('inputHeight')
    width = document.getElementById('inputWidth')
    table = document.getElementById('pixelCanvas')
    color = document.getElementById('colorPicker')
    document.getElementById("sizePicker").addEventListener("submit", makeGrid)

    table.addEventListener('click', (event) => {
     const target = event.target;
     if (target.tagName !== 'TD')
        return
    target.style.background = color.value
    })
}

function makeGrid(event) {
    event.preventDefault()
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
