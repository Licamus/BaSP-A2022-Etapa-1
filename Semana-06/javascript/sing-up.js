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

    inputName.onfocus = function(){
        inputName.classList.add("check");
    }

    inputLastName.onfocus = function(){
        inputLastName.classList.add("check");
    }

    inputId.onfocus = function(){
        inputId.classList.add("check");
    }

    inputDate.onfocus = function(){
        inputDate.classList.add("check");
    }

    inputDirection.onfocus = function(){
        inputDirection.classList.add("check");
    }

    inputLocation.onfocus = function(){
        inputLocation.classList.add("check");
    }

    inputPostalCode.onfocus = function(){
        inputPostalCode.classList.add("check");
    }

    inputEmail.onfocus = function(){
        inputEmail.classList.add("check");
    }

    inputPassword.onfocus = function(){
        inputPassword.classList.add("check");
    }


    inputPasswordR.onfocus = function(){
        inputPasswordR.classList.add("check");
    }















    }
