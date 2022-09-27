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
        inputEmail.classList.remove("check");
        inputEmail.classList.remove("un-check");
    }

    inputPassword.onfocus = function(){
        inputPassword.classList.remove("check");
        inputPassword.classList.remove("un-check");
    }


    inputPasswordR.onfocus = function(){
        inputPasswordR.classList.remove("check");
        inputPasswordR.classList.remove("un-check");
    }


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

        //validate re password

        inputPasswordR.onblur = function(){
            if(rePassword(inputPasswordR,inputPassword)){
                inputPasswordR.classList.remove("un-check");
                inputPasswordR.classList.add("check");
            }
            else{
                inputPasswordR.classList.remove("check");
                inputPasswordR.classList.add("un-check");
            }
        }

    //validate email call

    inputEmail.onblur = function(){
        validateEmail(inputEmail);

    }

    /* //validate buttom

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
    } */

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

    //validate RE password true or false

    function rePassword(inputText, inputText2){

        if(inputText.value != inputText2.value){
            return false;
        }
        else{
            return true;
        }
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
