
let sideSquares = 5

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

//createRow()

function createGrid () {
  for (let i = 0; i < sideSquares; i++) {
    createRow()
  }
}

createGrid()