const form = document.querySelector('.login-form');
form.addEventListener('submit', onSambit)
function onSambit(event) {
    event.preventDefault();
    const {email, password}
    = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
       return alert('Всі поля повинні бути заповнені');
    }
    const data = {
      email: email.value,
      password: password.value,
    }
    console.log(data);
    event.currentTarget.reset();
}