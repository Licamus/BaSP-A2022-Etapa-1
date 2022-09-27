window.onload = function() {
    var inputName = document.querySelector('[name=name-sing]');
    var inputLastName = document.querySelector('[name=last-name-sing]');
    var inputId = document.querySelector('[name=id-sing]');
    var inputDate = document.querySelector('[name=date-of-birth]');
    var inputDirection = document.querySelector('[name=direction]');
    var inputLocation = document.querySelector('[name=location]');
    var inputPostalCode = document.querySelector('[name=postal-code]');
    var inputEmail = document.querySelector('[name=emaillog]');
    var inputPassword = document.querySelector('[name=passw]');
    var inputPasswordR = document.querySelector('[name=passw-repeat]');


    inputEmail.onfocus = function(){
        inputEmail.classList.add("check");
    }
    
    inputPassword.onfocus = function(){
        inputPassword.classList.add("check");
    }
    }
