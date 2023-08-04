const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInputText);
function onInputText() {

    if (inputText.value.length === Number(inputText.dataset.length)) {
        // console.log(typeof(inputText.value.length))
        // console.log(typeof(inputText.dataset.length))
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
        // inputText.classList.add('valid')
        
    } else{
        inputText.classList.add('invalid');
    inputText.classList.remove('valid');

    }
    
    
}
inputText.addEventListener('focus', onFocus);
function onFocus() {
 inputText.value = ''  
}


// const input = document.querySelector('#validation-input');
// const dataLength = input.dataset.length;
// input.addEventListener("blur", () => {
//     const inputLength = input.value.length;
//     if (dataLength <= inputLength) {
//         input.classList.add("valid");
//         input.classList.remove("invalid");
//     } else {
//         input.classList.add("invalid");
//         input.classList.remove("valid");
//     }
// }); 

    
   