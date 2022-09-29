window.onload = function() {

    var inputEmail = document.querySelector('[name=emaillog]');

    var inputPassword = document.querySelector('[name=passw]');

    var validTotal = document.querySelector('[name=button-validate]');

    //validate password

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword)){
            inputPassword.nextElementSibling.classList.remove("on");
            inputPassword.classList.remove("un-check");
            inputPassword.classList.add("check");
        }
        else{
            inputPassword.nextElementSibling.classList.add("on");
            inputPassword.nextElementSibling.innerText = "Invalid Password";
            inputPassword.classList.remove("check");
            inputPassword.classList.add("un-check");
        }
    }

    //validate email

    inputEmail.onblur = function(){
        if(validateEmail(inputEmail)){
            inputEmail.nextElementSibling.classList.remove("on");
            inputEmail.classList.remove("un-check");
            inputEmail.classList.add("check");
        }
        else{
            inputEmail.nextElementSibling.classList.add("on");
            inputEmail.nextElementSibling.innerText = "Invalid Email";
            inputEmail.classList.remove("check");
            inputEmail.classList.add("un-check");
        }

    }

    //validate buttom

    validTotal.onclick = function(e){
        e.preventDefault();
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && validateEmail(inputEmail) && lenghtPassword(inputPassword)){
            alert("Valid account!");
        }
        else{
            if((numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword))==false){
                if(lenghtCero(inputPassword)){
                    inputPassword.nextElementSibling.classList.add("on");
                    inputPassword.nextElementSibling.innerText = "Complete this field";
                }
                alert("Invalid password!");
            }
            if(validateEmail(inputEmail)==false){
                if(lenghtCero(inputEmail)){
                    inputEmail.nextElementSibling.classList.add("on");
                    inputEmail.nextElementSibling.innerText = "Complete this field";
                }
                alert("Invalid email!");
            }
        }
    }

    //ON FOCUS

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

    //lenght cero

    function lenghtCero(inputText){
        if(inputText.value.length==0){
            return true;
        }
        return false;
    }

    //lenght password

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

        var letters="abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

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