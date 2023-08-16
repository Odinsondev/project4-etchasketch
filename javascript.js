
let sideSquares = 25;

const totalSquares = sideSquares * sideSquares;

let currentShade = 69    //Variable to reference after changing square count


//Create a single row

function createRow () {
  const container = document.getElementById('container');
  const row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);   //Creates one row
  for (let i = 0; i < sideSquares; i++) {
    const square = document.createElement('div');
    square.className = 'gridSquare';
    row.appendChild(square);   //Creates squares inside the row
  }
}

//Create the grid

function createGrid () {
  for (let i = 0; i < sideSquares; i++) {
    createRow();   //Creates individual rows several times to create the grid
  }
}

createGrid();


//Create square to use in shade functions

const square = document.getElementsByClassName('gridSquare');


//Shade square blue

function shade1() {

  currentShade = 1;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor1);
    function shadeColor1() {
      if (currentShade !== 1) {    //Stops for loop when other functions selected
        return
      } else {
        square[i].style.backgroundColor = 'rgb(110, 110, 110, 1)';
        square[i].style.opacity = '1';
        console.log("shade1 loop running");
      }
    }
  }
}


//Shade2 - Shade square with random RGB

function shade2() {

  currentShade = 2;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor2);
    function shadeColor2() {
      if (currentShade !== 2) {    //Stops for loop when other functions selected
        return
      } else {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        square[i].style.opacity = '1';
        console.log("shade2 loop running");
      }
    }
  }
}


//Shade3 - Darken square

function shade3() {

  currentShade = 3;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor3);
    function shadeColor3() {
      if (currentShade !== 3) {    //Stops for loop when other functions selected
        return
      } else {
        const opacity1 = Number(window.getComputedStyle(square[i]).getPropertyValue('opacity'));
        const opacity2 = opacity1 - 0.1;
        console.log(opacity2);
        square[i].style.opacity = opacity2;
        console.log("shade3 loop running");
      }
    }
  }
}


//Shade4 - Greens

function shade4() {

  currentShade = 4;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor4);
    function shadeColor4() {
      if (currentShade !== 4) {    //Stops for loop when other functions selected
        return
      } else {
        const red = Math.floor(Math.random() * 30);
        const green = Math.floor(Math.random() * (256 - 150) + 150);
        const blue = Math.floor(Math.random() * 30);
        const randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        square[i].style.opacity = '1';
        console.log("shade4 loop running");
      }
    }
  }
}


//Shade5 - Color picker

function shade5() {

  currentShade = 5;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor5);
    function shadeColor5() {
      if (currentShade !== 5) {    //Stops for loop when other functions selected
        return
      } else {
        const colorValue = (document.getElementById('color-picker').value)
        square[i].style.backgroundColor = colorValue;
        square[i].style.opacity = '1';
        console.log("shade5 loop running");
      }
    }
  }
}


//Shade6 - Reds

function shade6() {

  currentShade = 6;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor6);
    function shadeColor6() {
      if (currentShade !== 6) {    //Stops for loop when other functions selected
        return
      } else {
        const red = Math.floor(Math.random() * (256 - 150) + 150);
        const green = Math.floor(Math.random() * 30);
        const blue = Math.floor(Math.random() * 30);
        const randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        square[i].style.opacity = '1';
        console.log("shade6 loop running");
      }
    }
  }
}


//Shade7 - Blues

function shade7() {

  currentShade = 7;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor7);
    function shadeColor7() {
      if (currentShade !== 7) {    //Stops for loop when other functions selected
        return
      } else {
        const red = Math.floor(Math.random() * 30);
        const green = Math.floor(Math.random() * 30);
        const blue = Math.floor(Math.random() * (256 - 150) + 150);
        const randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        square[i].style.opacity = '1';
        console.log("shade7 loop running");
      }
    }
  }
}

//Shade8 - Yellows

function shade8() {

  currentShade = 8;
  console.log(currentShade);

  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].addEventListener('mouseover', shadeColor8);
    function shadeColor8() {
      if (currentShade !== 8) {    //Stops for loop when other functions selected
        return
      } else {
        const red = Math.floor(Math.random() * (256 - 200) + 200);
        const green = Math.floor(Math.random() * (256 - 200) + 200);
        const blue = Math.floor(Math.random() * 0);
        const randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
        square[i].style.backgroundColor = randomColor;
        square[i].style.opacity = '1';
        console.log("shade8 loop running");
      }
    }
  }
}


//Switch between shade functions

function switchShade() {
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');
  const button6 = document.getElementById('button6');
  const colorPicker = document.getElementById('color-picker');
  const button7 = document.getElementById('button7');
  const button8 = document.getElementById('button8');
  const button9 = document.getElementById('button9');
  const button10 = document.getElementById('button10');


  button3.addEventListener('click', shade1);
  button4.addEventListener('click', shade2);
  button5.addEventListener('click', shade3);
  button6.addEventListener('click', shade4);
  colorPicker.addEventListener('input', shade5);
  button7.addEventListener('click', shade5);
  button8.addEventListener('click', shade6);
  button9.addEventListener('click', shade7);
  button10.addEventListener('click', shade8);
}

switchShade();


//Button1 - Grid size selection prompt

const button1 = document.getElementById('button1');
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
    } else if (currentShade === 3) {
      shade3();
    } else if (currentShade === 4) {
      shade4();
    } else if (currentShade === 5) {
      shade5();
    } else if (currentShade === 6) {
      shade6();
    } else if (currentShade === 7) {
      shade7();
    } else if (currentShade === 8) {
      shade8();
    } else {
      return;
    }
    
  } else {
    deleteGrid();
    sideSquares = sideSquares2;
    createGrid();

    if (currentShade === 1) {
      shade1();
    } else if (currentShade === 2) {
      shade2();
    } else if (currentShade === 3) {
      shade3();
    } else if (currentShade === 4) {
      shade4();
    } else if (currentShade === 5) {
      shade5();
    } else if (currentShade === 6) {
      shade6();
    } else if (currentShade === 7) {
      shade7();
    } else if (currentShade === 8) {
      shade8();
    } else {
      return;
    }

  }
}


//Delete old grid

function deleteGrid() {
  const container = document.getElementById('container');
  const row = document.getElementsByClassName('row');
  for (let i = sideSquares - 1; i >= 0; i--) {
    container.removeChild(row[i]);
  }
}


//Button2 - Clear grid

const button2 = document.getElementById('button2');
button2.addEventListener('click', clearField);

function clearField() {
  const totalSquares = sideSquares * sideSquares; //Added as otherwise function will use old value

  for (let i = 0; i < totalSquares; i++) {
    square[i].style.backgroundColor = '#f2f6e0';
    square[i].style.border = '1px solid rgb(228, 240, 200)';
    square[i].style.opacity = '1'
  }
}