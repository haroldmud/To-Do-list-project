import _ from 'lodash';
// import printMe from './print.js';
import './style.css';
import recycleIcn from './icons/recycle.png';
import dotsInc from './icons/ellipsis.png';

document.body.innerHTML = `<div class="container">
<div class="plan"><h3>Today's plan</h3><span><img class="icn1" src="${recycleIcn}" ></span></div>
<input type="text" id="Input" placeholder="Write your task..." draggable="true">
<ul id="list"></ul>
<button class="delete_btn">Clear the selected</button>
</div>`;

const input = document.querySelector('#input');
const list = document.querySelector('#list');
const toDOList = [
  {
    description: 'Netflix',
    completed: 'false',
    index: '1',
  },
  {
    description: 'Yoga',
    completed: 'false',
    index: '2',
  },
  {
    description: 'Laundry',
    completed: 'false',
    index: '3',
  },
];

toDOList.forEach((a, i) => {
  list.innerHTML += `<li class="description" draggabble="true">
  <input type="checkbox" name="" class="checked">
  <div class="check"><p class="checking">${a.description}</p><span class="dots"><b>.</b><b>.</b><b>.</b></span></div></li>`;
});