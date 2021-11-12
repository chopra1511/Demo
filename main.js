document.addEventListener('DOMContentLoaded',function () {
    
    var frm = document.querySelector('#my-form');
    var nameInput = document.querySelector('#userName');
    var mail = document.querySelector('#userMail');
    var msgInput = document.querySelector('.msg');

    


    frm.addEventListener('submit',onSubmit);
    displayData();

    function onSubmit(e) {
        e.preventDefault();
        if(nameInput.value === "" || mail.value === ""){
            msgInput.style.color = 'red';
            msgInput.textContent = "Please Fill Up!";
        }
        setInterval(() => {
             msgInput.remove();
        }, 2000);

        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        if(nameInput.value != "" || mail.value != ""){
            formData.push({
                nameData : nameInput.value,
                mailData : mail.value
            });

            localStorage.setItem('formData', JSON.stringify(formData));

            document.querySelector('#my-form').reset();
            document.getElementById("userName").focus();
    
            displayData();
        }
    }

    function displayData() {
        if(localStorage.getItem('formData')){
            var output = document.querySelector('#items');
            output.innerHTML = "";
            JSON.parse(localStorage.getItem('formData')).forEach( data => {
                output.innerHTML += `<li>${data.nameData}:${data.mailData}</li>`;
            });
        }
    }

    
})
