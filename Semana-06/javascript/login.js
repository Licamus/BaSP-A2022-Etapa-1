window.onload = function() {

var inputEmail = document.querySelector('[name=emaillog]');

var inputPassword = document.querySelector('[name=passw]');

inputEmail.onfocus = function(){
    inputEmail.classList.add("check");
}

inputPassword.onfocus = function(){
    inputPassword.classList.add("check");
}
}