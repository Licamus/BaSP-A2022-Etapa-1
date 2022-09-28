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

    //On focus all

    inputName.onfocus = function(){
        inputName.nextElementSibling.classList.remove("on");
        inputName.classList.remove("check");
        inputName.classList.remove("un-check");
    }

    inputLastName.onfocus = function(){
        inputLastName.nextElementSibling.classList.remove("on");
        inputLastName.classList.remove("check");
        inputLastName.classList.remove("un-check");
    }

    inputId.onfocus = function(){
        inputId.nextElementSibling.classList.remove("on");
        inputId.classList.remove("check");
        inputId.classList.remove("un-check");
    }

    inputDate.onfocus = function(){
        inputDate.nextElementSibling.classList.remove("on");
        inputDate.classList.remove("check");
        inputDate.classList.remove("un-check");
    }

    inputPhone.onfocus = function(){
        inputPhone.nextElementSibling.classList.remove("on");
        inputPhone.classList.remove("check");
        inputPhone.classList.remove("un-check");
    }

    inputDirection.onfocus = function(){
        inputDirection.nextElementSibling.classList.remove("on");
        inputDirection.classList.remove("check");
        inputDirection.classList.remove("un-check");
    }

    inputLocation.onfocus = function(){
        inputLocation.nextElementSibling.classList.remove("on");
        inputLocation.classList.remove("check");
        inputLocation.classList.remove("un-check");
    }

    inputPostalCode.onfocus = function(){
        inputPostalCode.nextElementSibling.classList.remove("on");
        inputPostalCode.classList.remove("check");
        inputPostalCode.classList.remove("un-check");
    }

    inputEmail.onfocus = function(){
        inputEmail.nextElementSibling.classList.remove("on");
        inputEmail.classList.remove("check");
        inputEmail.classList.remove("un-check");
    }

    inputPassword.onfocus = function(){
        inputPassword.nextElementSibling.classList.remove("on");
        inputPassword.classList.remove("check");
        inputPassword.classList.remove("un-check");
    }


    inputPasswordR.onfocus = function(){
        inputPasswordR.nextElementSibling.classList.remove("on");
        inputPasswordR.classList.remove("check");
        inputPasswordR.classList.remove("un-check");
    }

    //validate name

    inputName.onblur = function(){
        if(lettersOnly(inputName) && lenghtThree(inputName)){
            inputName.nextElementSibling.classList.remove("on");
            array[0]=0;
            inputName.classList.remove("un-check");
            inputName.classList.add("check");
        }
        else{
            inputName.nextElementSibling.classList.add("on");
            array[0]='Invalid Name\n';
            inputName.nextElementSibling.innerText = "Invalid Name";
            inputName.classList.remove("check");
            inputName.classList.add("un-check");
        }
    }

    //validate Lastname

    inputLastName.onblur = function(){
        if(lettersOnly(inputLastName) && lenghtThree(inputLastName)){
            inputLastName.nextElementSibling.classList.remove("on");
            array[1]=0;
            inputLastName.classList.remove("un-check");
            inputLastName.classList.add("check");
        }
        else{
            inputLastName.nextElementSibling.classList.add("on");
            array[1]='Invalid Last Name\n';
            inputLastName.nextElementSibling.innerText = "Invalid Last Name";
            inputLastName.classList.remove("check");
            inputLastName.classList.add("un-check");
        }
    }

    //validate ID

    inputId.onblur = function(){
        if(numbersOnly(inputId) && lenghtSeven(inputId)){
            inputId.nextElementSibling.classList.remove("on");
            array[2]=0;
            inputId.classList.remove("un-check");
            inputId.classList.add("check");
        }
        else{
            inputId.nextElementSibling.classList.add("on");
            array[2]='Invalid ID\n';
            inputId.nextElementSibling.innerText = "Invalid ID";
            inputId.classList.remove("check");
            inputId.classList.add("un-check");
        }
    }

    //validate Date

    inputDate.onblur = function() {
        if(lenghtCero(inputDate)==false){
            inputDate.nextElementSibling.classList.remove("on");
            array[3]=0;
            inputDate.classList.remove("un-check");
            inputDate.classList.add("check");
        }
        else{
            inputDate.nextElementSibling.classList.add("on");
            array[3]='Invalid Date\n';
            inputDate.nextElementSibling.innerText = "Invalid Date";
            inputDate.classList.remove("check");
            inputDate.classList.add("un-check");
        }
    }

    //validate Phone

    inputPhone.onblur = function(){
        if(numbersOnly(inputPhone) && lenghtTen(inputPhone)){
            inputPhone.nextElementSibling.classList.remove("on");
            array[4]=0;
            inputPhone.classList.remove("un-check");
            inputPhone.classList.add("check");
        }
        else{
            inputPhone.nextElementSibling.classList.add("on");
            array[4]='Invalid Phone\n';
            inputPhone.nextElementSibling.innerText = "Invalid Phone";
            inputPhone.classList.remove("check");
            inputPhone.classList.add("un-check");
        }
    }

    //validate direction

    inputDirection.onblur = function(){
        if(alphanumericOnly(inputDirection) && lenghtThree(inputDirection) && spaceB(inputDirection) && numbersPassword(inputDirection) && lettersPassword(inputDirection)){
            inputDirection.nextElementSibling.classList.remove("on");
            array[5]=0;
            inputDirection.classList.remove("un-check");
            inputDirection.classList.add("check");
        }
        else{
            inputDirection.nextElementSibling.classList.add("on");
            array[5]='Invalid Direction\n';
            inputDirection.nextElementSibling.innerText = "Invalid Direction";
            inputDirection.classList.remove("check");
            inputDirection.classList.add("un-check");
        }
    }

     //validate location

    inputLocation.onblur = function(){
        if(alphanumericOnly(inputLocation) && lenghtThree(inputLocation)){
            inputLocation.nextElementSibling.classList.remove("on");
            array[6]=0;
            inputLocation.classList.remove("un-check");
            inputLocation.classList.add("check");
        }
        else{
            inputLocation.nextElementSibling.classList.add("on");
            array[6]='Invalid Location\n';
            inputLocation.nextElementSibling.innerText = "Invalid Location";
            inputLocation.classList.remove("check");
            inputLocation.classList.add("un-check");
        }
    }

    //validate Postal Code

     inputPostalCode.onblur = function(){
        if(numbersOnly(inputPostalCode) && lenghtFour(inputPostalCode) && lenghtFiveMax(inputPostalCode)){
            inputPostalCode.nextElementSibling.classList.remove("on");
            array[7]=0;
            inputPostalCode.classList.remove("un-check");
            inputPostalCode.classList.add("check");
        }
        else{
            inputPostalCode.nextElementSibling.classList.add("on");
            array[7]='Invalid Postal Code\n';
            inputPostalCode.nextElementSibling.innerText = "Invalid Postal Code";
            inputPostalCode.classList.remove("check");
            inputPostalCode.classList.add("un-check");
        }
    }


    //validate password

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword)){
            inputPassword.nextElementSibling.classList.remove("on");
            array[8]=0;
            inputPassword.classList.remove("un-check");
            inputPassword.classList.add("check");
        }
        else{
            inputPassword.nextElementSibling.classList.add("on");
            array[8]='Invalid Password\n';
            inputPassword.nextElementSibling.innerText = "Invalid Password";
            inputPassword.classList.remove("check");
            inputPassword.classList.add("un-check");
        }
    }

    //validate re password

    inputPasswordR.onblur = function(){
        if(rePassword(inputPasswordR,inputPassword) && (lenghtCero(inputPasswordR)==false)){
            inputPasswordR.nextElementSibling.classList.remove("on");
            array[9]=0;
            inputPasswordR.classList.remove("un-check");
            inputPasswordR.classList.add("check");
        }
        else{
            inputPasswordR.nextElementSibling.classList.add("on");
            array[9]='Invalid Repeat Password\n';
            inputPasswordR.nextElementSibling.innerText = "Invalid Repeat Password";
            inputPasswordR.classList.remove("check");
            inputPasswordR.classList.add("un-check");
        }
    }

    //validate email call

    inputEmail.onblur = function(){
        if(validateEmail(inputEmail)){
            inputEmail.nextElementSibling.classList.remove("on");
            array[10]=0;
            inputEmail.classList.remove("un-check");
            inputEmail.classList.add("check");
        }
        else{
            inputEmail.nextElementSibling.classList.add("on");
            array[10]='Invalid Email\n';
            inputEmail.nextElementSibling.innerText = "Invalid Email\n";
            inputEmail.classList.remove("check");
            inputEmail.classList.add("un-check");
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

        var letters="abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

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

        var letters="abcdefghyjklmnñopqrstuvwxyz123456789ABCDEFGHYJKLMNÑOPQRSTUVWXYZ ";

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

        var letters="abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

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
            return true;
        }
        else
        {
            return false;
        }
    }
}
