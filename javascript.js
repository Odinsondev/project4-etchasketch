
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
      if (currentShade !== 1) {    //stops for loop when other functions
        return
      } else {
        square[i].style.backgroundColor = 'rgb(100, 149, 237, 1)';
        //square[i].style.border = '1px solid rgb(127, 166, 238)';
        square[i].style.opacity = '1'
        console.log("shade1 loop running");
      }
    }
  }
}

//shade1();

//shade2 - shade square with random RGB

function shade2() {


  currentShade = 2;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor2);
    function shadeColor2() {
      if (currentShade !== 2) {    //stops for loop when other functions
        return
      } else {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        //square[i].style.border = '1px solid rgb(228, 240, 200)';
        square[i].style.opacity = '1'
        console.log("shade2 loop running");
      }
    }
  }
}

//shade3 - darken square

function shade3() {

  currentShade = 3;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor3);
    function shadeColor3() {
      if (currentShade !== 3) {    //stops for loop when other functions
        return
      } else {
        let opacity1 = Number(window.getComputedStyle(square[i]).getPropertyValue('opacity'));
        opacity2 = opacity1 - 0.1;
        square[i].style.opacity = opacity2
        //square[i].style.border = '1px solid rgb(228, 240, 200)';
        console.log("shade3 loop running");
      }
    }
  }
}

//shade4 - greens

function shade4() {


  currentShade = 4;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor4);
    function shadeColor4() {
      if (currentShade !== 4) {    //stops for loop when other functions
        return
      } else {
        let red = Math.floor(Math.random() * 30);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 30);
        let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        //square[i].style.border = '1px solid rgb(228, 240, 200)';
        square[i].style.opacity = '1'
        console.log("shade4 loop running");
      }
    }
  }
}

//shade5 - color picker


function shade5() {

  currentShade = 5;
  console.log(currentShade);

  let totalSquares = sideSquares * sideSquares; //added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor5);
    function shadeColor5() {
      if (currentShade !== 5) {    //stops for loop when other functions
        return
      } else {
        let colorValue = (document.getElementById('color-picker').value)
        square[i].style.backgroundColor = colorValue;
        //square[i].style.border = '1px solid rgb(228, 240, 200)';
        square[i].style.opacity = '1'
        console.log("shade5 loop running");
      }
    }
  }
}


//switch between shade methods


function switchShade() {
  let button3 = document.getElementById('button3');
  let button4 = document.getElementById('button4');
  let button5 = document.getElementById('button5');
  let button6 = document.getElementById('button6');
  let colorPicker = document.getElementById('color-picker');
  let button7 = document.getElementById('button7')

  button3.addEventListener('click', shade1);
  button4.addEventListener('click', shade2);
  button5.addEventListener('click', shade3);
  button6.addEventListener('click', shade4);
  colorPicker.addEventListener('input', shade5);
  button7.addEventListener('click', shade5);


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

    if (currentShade === 1) {
      shade1();
    } else if (currentShade === 2) {
      shade2();
    } else {
      shade3();
    }
    
  } else {
    deleteGrid();
    sideSquares = sideSquares2;
    createGrid();
    if (currentShade ===1) {
      shade1();
    } else if (currentShade === 2) {
      shade2();
    } else {
      shade3();
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
    square[i].style.opacity = '1'

  }
}