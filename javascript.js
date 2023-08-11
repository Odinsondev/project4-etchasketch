
let sideSquares = 25

let totalSquares = sideSquares * sideSquares

//function to create a single row

function createRow () {
  let container = document.getElementById('container')
    let row = document.createElement('div')
    row.className = 'row'
    container.appendChild(row)
  for (let i = 0; i < sideSquares; i++) {
    let square = document.createElement('div')
    square.className = 'gridSquare'
  
    row.appendChild(square)
  }
}

//function to create the grid

function createGrid () {
  for (let i = 0; i < sideSquares; i++) {
    createRow()
  }
}

createGrid()

//shade

let square = document.getElementsByClassName('gridSquare')

for (let i = 0; i < totalSquares; i++) {
  square[i].addEventListener('mouseover', shade)
  function shade() {
    square[i].style.backgroundColor = 'red'
  }
}

//button1 - grid size selection

//button2 - clear grid

let button1 = document.getElementById('button2');
button1.addEventListener('click', clear)

function clear() {
  for (let i = 0; i < totalSquares; i++) {
    square[i].style.backgroundColor = '#e2e1e1'
  }
}