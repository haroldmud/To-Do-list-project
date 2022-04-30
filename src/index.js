import _, { remove } from 'lodash';
// import printMe from './print.js';
import './style.css';
import recycleIcn from './icons/recycle.png';
import trashIcn from './icons/trash.png';
import lineThrough from './modules/steer.js';
import deleteChecked from './modules/deleteChecked.js';
import ellipsisIcn from './icons/ellipsis.png';

document.body.innerHTML = `<div class="container">
<div class="plan"><h3>Today's plan</h3><span><img class="icn1" src="${recycleIcn}" ></span></div>
<input type="text" id="Input" placeholder="Write your task..." draggable="true">
<ul id="list"></ul>
<button class="delete_btn">Clear the selected</button>
</div>`;

const input = document.querySelector('#Input');
const list = document.querySelector('#list');
const toDOList = [];
const task = localStorage.getItem('plans');
const taskParse = JSON.parse(task);

class toDO {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  push() {
    if (!task) {
      toDOList.push(this);
      localStorage.setItem('plans', JSON.stringify(toDOList));
      location.reload();
    } else {
      const storeArr = localStorage.getItem('plans');
      const storeArrParse = JSON.parse(storeArr);
      storeArrParse.push(this);
      localStorage.setItem('plans', JSON.stringify(storeArrParse));
      location.reload();
    }
  }
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const task2 = localStorage.getItem('plans');
    const valeur = input.value;
    let hakuna;
    if (!task2) {
      hakuna = 0;
    } else {
      const storeArr = localStorage.getItem('plans');
      const storeArrParse = JSON.parse(storeArr);
      hakuna = storeArrParse.length;
    }
    const DOs = new toDO(valeur, false, hakuna);
    DOs.push();
  }
});

const LsParse = localStorage.getItem('plans');
const parseLS = JSON.parse(LsParse);

parseLS.forEach((a, i) => {
  list.innerHTML += `<li id="li${i}" class="description" draggabble="true">
  <input type="checkbox" name="" class="checked">
  <div class="check">
    <p class="checking" id="theTask${i}"> ${a.description} </p>
    <span class="dots">
      <img class="dotsImg" id="dit${i}" src = "${ellipsisIcn}">
      <img class="trashImg" id="trasher${i}" src = "${trashIcn}">
    
    </span>
  </div>
  </li>`;
});

const ellipsis = document.querySelectorAll('.dots');
for (let d = 0; d < ellipsis.length; d++) {
  const image = document.getElementById(`li${d}`);
  image.addEventListener('mouseover', () => {
    document.getElementById(`dit${d}`).style.display = 'none';
    document.getElementById(`trasher${d}`).style.display = 'flex';
  });

  image.addEventListener('mouseout', () => {
    document.getElementById(`dit${d}`).style.display = 'flex';
    document.getElementById(`trasher${d}`).style.display = 'none';
  });
}

const trash = document.querySelectorAll('.icn3');
for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener('click', () => {
    parseLS.pop();
  });
}

function updateId() {
  const task = JSON.parse(localStorage.getItem('plans'));
  task.forEach((a, i) => {
    a.index = i;
    localStorage.setItem('plans', JSON.stringify(task));
  });
}

function Removall() {
  const elems = JSON.parse(localStorage.getItem('plans'));
  for (let k = 0; k < elems.length; k++) {
    document.getElementById(`trasher${k}`).addEventListener('click', () => {
      const elemente = elems.filter((obj, i) => obj.index !== k);
      localStorage.setItem('plans', JSON.stringify(elemente));
      location.reload();
      updateId();
    });
  }
}

Removall();
lineThrough();
deleteChecked();
