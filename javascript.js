
let sideSquares = 25;

let totalSquares = sideSquares * sideSquares;

let currentShade = 1    //variable to reference after changing square count

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

function shade1() {

  currentShade = 1;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor1);
    function shadeColor1() {
      square[i].style.backgroundColor = 'CornflowerBlue';
      square[i].style.border = '1px solid rgb(127, 166, 238)';
    }
  }
}

shade1();

//shade square with random RGB

function shade2() {

  currentShade = 2;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor2);
    function shadeColor2() {

      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
      square[i].style.backgroundColor = randomColor;
      square[i].style.border = '1px solid rgb(228, 240, 200)';
    }
  }
}

//shade2();

//switch between shade methods


function switchShade() {
  let button3 = document.getElementById('button3');
  let button4 = document.getElementById('button4');
  button3.addEventListener('click', shade1);
  button4.addEventListener('click', shade2);

}

switchShade();


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

    if (currentShade ===1) {
      shade1();
    } else {
      shade2();
    }
    
  } else {
    deleteGrid();
    sideSquares = sideSquares2;
    createGrid();
    if (currentShade ===1) {
      shade1();
    } else {
      shade2();
    }
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