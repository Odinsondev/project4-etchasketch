
let sideSquares = 25;

let totalSquares = sideSquares * sideSquares;

//function to create a single row

function createRow () {
  let container = document.getElementById('container');
  let row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);   //creates rows
  for (let i = 0; i < sideSquares; i++) {
    let square = document.createElement('div');
    square.className = 'gridSquare';
    row.appendChild(square);   //creates squares inside rows
  }
}

//function to create the grid

function createGrid () {
  for (let i = 0; i < sideSquares; i++) {
    createRow();
  }
}

createGrid();



//shade square blue

let square = document.getElementsByClassName('gridSquare');

function shade() {
  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shade);
    function shade() {
      square[i].style.backgroundColor = 'CornflowerBlue';
      square[i].style.border = '1px solid rgb(127, 166, 238)';
    }
  }
}

shade();

//shade square with random RGB



//button1 - grid size selection prompt

let button1 = document.getElementById('button1');
button1.addEventListener('click', getSize);

function getSize() {
  let sideSquares2 = prompt("Please specify field size (max of 100)", 25);
  if (sideSquares2 > 100) {
    sideSquares2 = 25;
    deleteGrid();
    sideSquares = sideSquares2;
    createGrid();
    shade();
  } else {
    deleteGrid();
    sideSquares = sideSquares2;
    createGrid();
    shade();
  }
}

//delete old grid

function deleteGrid() {
  let container = document.getElementById('container');
  let row = document.getElementsByClassName('row');
  for (let i = sideSquares - 1; i >= 0; i--) {
    container.removeChild(row[i]);
  }
}




//button2 - clear grid

let button2 = document.getElementById('button2');
button2.addEventListener('click', clearField);

function clearField() {
  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].style.backgroundColor = '#f2f6e0';
    square[i].style.border = '1px solid rgb(228, 240, 200)';
  }
}