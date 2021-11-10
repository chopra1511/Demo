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

  let obj = {
         nameData : nameInput.value,
         mailData : mail.value
    }
    
    let newObj = JSON.stringify(obj);
    localStorage.setItem('obj',newObj);
    let newObj1 = JSON.parse(localStorage.getItem('obj',newObj));
    let display = localStorage.getItem('obj',newObj1);

    var items = document.getElementById('items');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(display));
    items.appendChild(li);
    nameInput.value = "";
    mail.value = "";

}
