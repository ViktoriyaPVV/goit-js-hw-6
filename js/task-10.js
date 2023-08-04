function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls>input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', onClickCreate);
function onClickCreate() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
 const arrElements = [];
 for (let i = 0; i < amount; i+=1) {
  const div = document.createElement('div');
  div.style.background = getRandomHexColor();
div.style.width = `${30 + 10* i}px`;
div.style.height = `${30 + 10* i}px`;
arrElements.push(div);
 }
 return boxes.append(...arrElements);
}

destroy.addEventListener('click', onClickDestroy)
function onClickDestroy() {
  input.value = '';
  boxes.innerHTML = '';
}
  
