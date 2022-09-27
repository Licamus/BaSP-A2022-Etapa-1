window.onload = function() {

var inputEmail = document.querySelector('[name=emaillog]');

var inputPassword = document.querySelector('[name=passw]');




inputEmail.onblur = function(){
    ValidateEmail(inputEmail);
}


inputPassword.onblur = function(){

   
    inputPassword.classList.add("check");

    
}



function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
inputText.classList.add("check");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
inputText.classList.add("un-check");
document.form1.text1.focus();
return false;
}
}



}