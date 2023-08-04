const inputSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
inputSize.addEventListener('input', onInputText);
function onInputText() {
    // console.log(textSize)
    textSize.style.fontSize = inputSize.value + 'px' ;
    
}