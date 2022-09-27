window.onload = function() {

var inputEmail = document.querySelector('[name=emaillog]');

var inputPassword = document.querySelector('[name=passw]');

var validTotal = document.querySelector('[name=button-validate]');

var boxInput = document.getElementsByClassName('box-contact');

console.log(boxInput[0]);

var errorp = document.createElement('p');

// create p

errorp.appendChild(document.createTextNode('HOLAAAAAAAAAAAAAAAAAAAAA'));
//validate password

inputPassword.onblur = function(){
    if(numbersPassword(inputPassword) && lettersPassword(inputPassword)){
        inputPassword.classList.remove("un-check");
        inputPassword.classList.add("check");
    }
    else{
        inputPassword.classList.remove("check");
        inputPassword.classList.add("un-check");
    }
}

//validate email

inputEmail.onblur = function(){
    validateEmail(inputEmail);

}

//validate buttom

validTotal.onclick = function(){

    if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && validateEmail(inputEmail)){
        alert("Valid account!");
    }
    else{
        if((numbersPassword(inputPassword) && lettersPassword(inputPassword))==false){
            alert("Invalid password!");
        }
        if(validateEmail(inputEmail)==false){
            alert("Invalid email!");
        }

    }
}

//ON FOCUS

inputEmail.onfocus = function(){
    inputEmail.classList.remove("check");
    inputEmail.classList.remove("un-check");
}

inputPassword.onfocus = function(){
    inputPassword.classList.remove("check");
    inputPassword.classList.remove("un-check");
}


//number password

function numbersPassword(inputText){

    var numbers="0123456789";

    for(i=0; i<inputText.value.length; i++){
       if (numbers.indexOf(inputText.value.charAt(i),0)!=-1){
          return true;
       }
    }
    return false;
 }


//letter password

function lettersPassword(inputText){

    var letters="abcdefghyjklmnñopqrstuvwxyz";

    inputText.value = inputText.value.toLowerCase();
    for(i=0; i<inputText.value.length; i++){
        if (letters.indexOf(inputText.value.charAt(i),0)!=-1){
            return true;
      }
   }
   return false;
}

// Validate email

function validateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.value.match(mailformat))
    {
        //alert("Valid email address!");
        inputText.classList.remove("un-check");
        inputText.classList.add("check");
        return true;
    }
    else
    {
        //alert("You have entered an invalid email address!");
        inputText.classList.remove("check");
        inputText.classList.add("un-check");
        return false;
    }
}

}