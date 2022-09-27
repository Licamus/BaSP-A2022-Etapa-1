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
        inputName.classList.remove("check");
        inputName.classList.remove("un-check");
    }

    inputLastName.onfocus = function(){
        inputLastName.classList.remove("check");
        inputLastName.classList.remove("un-check");
    }

    inputId.onfocus = function(){
        inputId.classList.remove("check");
        inputId.classList.remove("un-check");
    }

    inputDate.onfocus = function(){
        inputDate.classList.remove("check");
        inputDate.classList.remove("un-check");
    }

    inputDirection.onfocus = function(){
        inputDirection.classList.remove("check");
        inputDirection.classList.remove("un-check");
    }

    inputLocation.onfocus = function(){
        inputLocation.classList.remove("check");
        inputLocation.classList.remove("un-check");
    }

    inputPostalCode.onfocus = function(){
        inputPostalCode.classList.remove("check");
        inputPostalCode.classList.remove("un-check");
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

    //validate name

    inputName.onblur = function(){
        if(lettersOnly(inputName) && lenghtThree(inputName)){
            inputName.classList.remove("un-check");
            inputName.classList.add("check");
        }
        else{
            inputName.classList.remove("check");
            inputName.classList.add("un-check");
        }
    }

    //validate Lastname

    inputLastName.onblur = function(){
        if(lettersOnly(inputLastName) && lenghtThree(inputLastName)){
            inputLastName.classList.remove("un-check");
            inputLastName.classList.add("check");
        }
        else{
            inputLastName.classList.remove("check");
            inputLastName.classList.add("un-check");
        }
    }

    //validate ID

    inputId.onblur = function(){
        if(numbersOnly(inputId) && lenghtSeven(inputId)){
            inputId.classList.remove("un-check");
            inputId.classList.add("check");
        }
        else{
            inputId.classList.remove("check");
            inputId.classList.add("un-check");
        }
    }

     //validate Postal Code

     inputPostalCode.onblur = function(){
        if(numbersOnly(inputPostalCode) && lenghtFour(inputPostalCode) && lenghtFiveMax(inputPostalCode)){
            inputPostalCode.classList.remove("un-check");
            inputPostalCode.classList.add("check");
        }
        else{
            inputPostalCode.classList.remove("check");
            inputPostalCode.classList.add("un-check");
        }
    }


    //validate password

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword)){
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

  

/***************************************************************************************************************************************** */


    //have only letters?

    function lettersOnly(inputText){

        var letters="abcdefghyjklmnñopqrstuvwxyz";

        inputText.value = inputText.value.toLowerCase();
        for(i=0; i<inputText.value.length; i++){

            if (letters.indexOf(inputText.value.charAt(i),0)==-1){
                return false;
        }
         }
        return true;
    }

     //Have only Numbers?

     function numbersOnly(inputText){

        var numbers="0123456789";

        for(i=0; i<inputText.value.length; i++){
        if (numbers.indexOf(inputText.value.charAt(i),0)==-1){
            return false;
        }
        }
        return true;
    }


    //lenght >=3

    function lenghtThree(inputText){
        if(inputText.value.length>=3){
            return true;
        }
        return false;
    }

    //lenght >=4

    function lenghtFour(inputText){
        if(inputText.value.length>=4){
            return true;
        }
        return false;
    }

    //lenght <=5

    function lenghtFiveMax(inputText){
        if(inputText.value.length<=5){
            return true;
        }
        return false;
    }

    //lenght password >=7

    function lenghtSeven(inputText){
        if(inputText.value.length>=7){
            return true;
        }
        return false;
    }

    //lenght password >=8

    function lenghtPassword(inputText){
        if(inputText.value.length>=8){
            return true;
        }
        return false;
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
        var mailformat =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

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
