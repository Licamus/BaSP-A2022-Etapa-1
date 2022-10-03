window.onload = function() {
    var inputName = document.querySelector('[name=name-sing]');
    var inputLastName = document.querySelector('[name=last-name-sing]');
    var inputId = document.querySelector('[name=id-sing]');
    var inputDate = document.querySelector('[name=date-of-birth]');
    var inputPhone = document.querySelector('[name=phonenumber]');
    var inputDirection = document.querySelector('[name=direction]');
    var inputLocation = document.querySelector('[name=location]');
    var inputPostalCode = document.querySelector('[name=postal-code]');
    var inputEmail = document.querySelector('[name=emaillog]');
    var inputPassword = document.querySelector('[name=passw]');
    var inputPasswordR = document.querySelector('[name=passw-repeat]');
    var validTotal = document.querySelector('[name=button-validate]');
    var ghostp = document.getElementsByClassName('validation-ghost-p');
    var inputG = document.getElementsByTagName("input");
    var array = [];

    for (i=0; i<=10; i++){
        array[i]=1;
    }

     // PRUEBA
     function inputCreate(inputText){
        inputText.nextElementSibling.classList.remove("on");
        inputText.classList.remove("un-check");
        inputText.classList.add("check");
    }

    function inputDelete(inputText){
        inputText.nextElementSibling.classList.add("on");
        inputText.classList.remove("check");
        inputText.classList.add("un-check");
    }

    function inputFocus(inputText){
        inputText.nextElementSibling.classList.remove("on");
        inputText.classList.remove("check");
        inputText.classList.remove("un-check");
    }

    //on focus

    inputName.onfocus = function(){
        inputFocus(inputName);
    }

    inputLastName.onfocus = function(){
        inputFocus(inputLastName);
    }

    inputId.onfocus = function(){
        inputFocus(inputId);
    }

    inputDate.onfocus = function(){
        inputFocus(inputDate);
    }

    inputPhone.onfocus = function(){
        inputFocus(inputPhone);
    }

    inputDirection.onfocus = function(){
        inputFocus(inputDirection);
    }

    inputLocation.onfocus = function(){
        inputFocus(inputLocation);
    }

    inputPostalCode.onfocus = function(){
        inputFocus(inputPostalCode);
    }

    inputEmail.onfocus = function(){
        inputFocus(inputEmail);
    }

    inputPassword.onfocus = function(){
        inputFocus(inputPassword);
    }

    inputPasswordR.onfocus = function(){
        inputFocus(inputPasswordR);
    }

    //validate name

    inputName.onblur = function(){
        if(lettersOnly(inputName) && lenghtThree(inputName)){
            inputCreate(inputName);
            array[0]=0;
        }
        else{
            inputDelete(inputName);
            array[0]='Invalid Name\n';
            inputName.nextElementSibling.innerText = "Invalid Name";
        }
    }

    //validate Lastname

    inputLastName.onblur = function(){
        if(lettersOnly(inputLastName) && lenghtThree(inputLastName)){
            inputCreate(inputLastName);
            array[1]=0;
        }

        else{
            inputDelete(inputLastName);
            array[1]='Invalid Last Name\n';
            inputLastName.nextElementSibling.innerText = "Invalid Last Name";
        }
    }
    //validate ID

    inputId.onblur = function(){
        if(numbersOnly(inputId) && lenghtSeven(inputId)){
            inputCreate(inputId);
            array[2]=0;
        }
        else{
            inputDelete(inputId);
            array[2]='Invalid ID\n';
            inputId.nextElementSibling.innerText = "Invalid ID";
        }
    }

    //validate Date

    inputDate.onblur = function() {
        if(lenghtCero(inputDate)==false){
            inputCreate(inputDate);
            array[3]=0;
        }
        else{
            inputDelete(inputDate);
            array[3]='Invalid Date\n';
            inputDate.nextElementSibling.innerText = "Invalid Date";
        }
    }

    //validate Phone

    inputPhone.onblur = function(){
        if(numbersOnly(inputPhone) && lenghtTen(inputPhone)){
            inputCreate(inputPhone);
            array[4]=0;
        }
        else{
            inputDelete(inputPhone);
            array[4]='Invalid Phone\n';
            inputPhone.nextElementSibling.innerText = "Invalid Phone";
        }
    }

    //validate direction

    inputDirection.onblur = function(){
        if(alphanumericOnly(inputDirection) && lenghtThree(inputDirection) && spaceB(inputDirection) && numbersPassword(inputDirection) && lettersPassword(inputDirection)){
            inputCreate(inputDirection);
            array[5]=0;
        }
        else{
            inputDelete(inputDirection);
            array[5]='Invalid Direction\n';
            inputDirection.nextElementSibling.innerText = "Invalid Direction";
        }
    }

     //validate location

    inputLocation.onblur = function(){
        if(alphanumericOnly(inputLocation) && lenghtThree(inputLocation)){
            inputCreate(inputLocation);
            array[6]=0;
        }
        else{
            inputDelete(inputLocation);
            array[6]='Invalid Location\n';
            inputLocation.nextElementSibling.innerText = "Invalid Location";
        }
    }

    //validate Postal Code

     inputPostalCode.onblur = function(){
        if(numbersOnly(inputPostalCode) && lenghtFour(inputPostalCode) && lenghtFiveMax(inputPostalCode)){
            inputCreate(inputPostalCode);
            array[7]=0;
        }
        else{
            inputDelete(inputPostalCode);
            array[7]='Invalid Postal Code\n';
            inputPostalCode.nextElementSibling.innerText = "Invalid Postal Code";
        }
    }


    //validate password

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword)){
            inputCreate(inputPassword);
            array[8]=0;
        }
        else{
            inputDelete(inputPassword);
            array[8]='Invalid Password\n';
            inputPassword.nextElementSibling.innerText = "Invalid Password";
        }
    }

    //validate re password

    inputPasswordR.onblur = function(){
        if(rePassword(inputPasswordR,inputPassword) && (lenghtCero(inputPasswordR)==false)){
            inputCreate(inputPasswordR);
            array[9]=0;
        }
        else{
            inputDelete(inputPassword);
            array[9]='Invalid Repeat Password\n';
            inputPasswordR.nextElementSibling.innerText = "Invalid Repeat Password";
        }
    }

    //validate email call

    inputEmail.onblur = function(){
        if(validateEmail(inputEmail)){
            inputCreate(inputEmail);
            array[10]=0;
        }
        else{
            inputDelete(inputEmail);
            array[10]='Invalid Email\n';
            inputEmail.nextElementSibling.innerText = "Invalid Email\n";
        }

    }

    //validate buttom

    validTotal.onclick = function(e){
        e.preventDefault();
        var j=0, w=0;
        var array2= [];

        for (var i=0; i<=10; i++){

                if((array[i]!=0) && (array[i]!=1)){
                    array2[j]=array[i];
                    j++;
                }
                 if(array[i]==1){
                    w++;
                    inputG[i].nextElementSibling.classList.add("on");
                    inputG[i].nextElementSibling.innerText = "Complete this field";
                }
            }
        if(w>0){
            alert('Incompleted fields');
        }

        if((w==0) && (array2.length==0)){
            alert('Account Created');
        }
        else{
            alert(array2);
        }
    }


/***************************************************************************************************************************************** */


    //have only letters?

    function lettersOnly(inputText){

        var letters="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

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

    //Have alpha numeric?

    function alphanumericOnly(inputText){

        var letters="abcdefghijklmnñopqrstuvwxyz123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";

        for(i=0; i<inputText.value.length; i++){
            if (letters.indexOf(inputText.value.charAt(i),0)==-1){
                return false;
            }
        }
        return true;
    }

    //Have a space or  between?

    function spaceB(inputText){

        var letters="- ";
        var auxiliar=inputText.value.length;

        auxiliar=auxiliar-1;

        for(i=1; i<auxiliar; i++){
            if (letters.indexOf(inputText.value.charAt(i),1)!=-1){
                return true;
            }
        }
        return false;
    }

    //lenght  0

    function lenghtCero(inputText){
        if(inputText.value.length==0){
            return true;
        }
        return false;
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

    //lenght  >=7

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

    //lenght password ==10

    function lenghtTen(inputText){
        if(inputText.value.length==10){
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

        var letters="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

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
        var mailFormat =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if(inputText.value.match(mailFormat))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

