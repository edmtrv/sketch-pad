"use strict"

const container = document.querySelector('.container');
const gridSide = 800;

function createGrid(x) {
  for (let row = 0; row < x; row++) {
    for (let col = 0; col < x; col++) {
      createDiv(x);
    }
  }
    
}

function createDiv(x) {
  const div = document.createElement('div');
  div.style.width = `${gridSide / x}px`;
  div.style.height = `${gridSide / x}px`;
  div.classList.add('square');
  container.appendChild(div);
}

createGrid(16);