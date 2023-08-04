function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const colorText = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');
colorBtn.addEventListener('click', onColor);
function onColor(event) {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorText.textContent = color;

}

