"use strict"

const grid = document.querySelector('.grid');
const gridSide = 800;

function createGrid(x) {
  for (let row = 0; row < x; row++) {
    for (let col = 0; col < x; col++) {
      createSquare(x);
    }
  }

  const divs = document.querySelectorAll('.grid div');
  divs.forEach(div => div.addEventListener('mouseenter', paint));
}

function createSquare(x) {
  const div = document.createElement('div');
  div.style.width = `${gridSide / x}px`;
  div.style.height = `${gridSide / x}px`;
  div.style.backgroundColor = '#fff';
  div.style.float = 'left'
  grid.appendChild(div);
}

function paint(e) {
  const values = extractValues(e.target.style.backgroundColor);
  const calc = calculateNewvalues(values);
  
  e.target.style.backgroundColor = `rgb(${calc[0]}, ${calc[1]}, ${calc[2]})`;
  console.log(e.target.style.backgroundColor);
}

function resetGrid() {
  let size = prompt("Choose Size");

  grid.innerHTML = '';
  createGrid(size);
}

createGrid(16);

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid);

/**
 * Extract an array of values from
 * an rgb string 
 */
function extractValues(rgb) {
  const values = rgb.slice(4, rgb.length - 1);

  return values.split(', ');
}

function calculateNewvalues(arr) {
  const nums = arr.map(el => Number(el) - (255 / 10));

  return nums;
}