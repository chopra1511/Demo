var frm = document.querySelector('#my-form');
var nameInput = document.querySelector('#userName');
var mail = document.querySelector('#userMail');
var msgInput = document.querySelector('.msg');

frm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === "" || mail.value === ""){
        msgInput.style.color = 'red';
        msgInput.textContent = "Please Fill Up!";
    }
    setInterval(() => {
        msgInput.remove();
    }, 2000);

    var nameData = nameInput.value;
    var mailData = mail.value;

    localStorage.setItem('userDetails',`${nameData}:${mailData}`);

    nameInput.value = "";
    mail.value = "";

}