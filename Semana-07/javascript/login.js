window.onload = function() {

    var inputEmail = document.querySelector('[name=emaillog]');

    var inputPassword = document.querySelector('[name=passw]');

    var validTotal = document.querySelector('[name=button-validate]');

    //validate password

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && lenghtPassword(inputPassword)){
            inputCreate(inputPassword);
        }
        else{
            inputDelete(inputPassword);
            inputPassword.nextElementSibling.innerText = "Invalid Password";
        }
    }

    //validate email

    inputEmail.onblur = function(){
        if(validateEmail(inputEmail)){
            inputCreate(inputEmail);
        }
        else{
            inputDelete(inputEmail);
            inputEmail.nextElementSibling.innerText = "Invalid Email";
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
                    inputNotComplete(inputPassword);
                }
                alert("Invalid password!");
            }
            if(validateEmail(inputEmail)==false){
                if(lenghtCero(inputEmail)){
                    inputNotComplete(inputEmail);
                }
                alert("Invalid email!");
            }
        }
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

    function inputNotComplete(inputText) {
        inputText.nextElementSibling.classList.add("on");
        inputText.nextElementSibling.innerText = "Complete this field";
    }

    function inputFocus(inputText){
        inputText.nextElementSibling.classList.remove("on");
        inputText.classList.remove("check");
        inputText.classList.remove("un-check");
    }

    //ON FOCUS

    inputEmail.onfocus = function(){
        inputFocus(inputEmail);
    }

    inputPassword.onfocus = function(){
        inputFocus(inputPassword);
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

        var letters="abcdefghijklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

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

    //FETCH

    var url='https://basp-m2022-api-rest-server.herokuapp.com/login ';

    var promise= fetch(url);

    promise
        .then(function(res){
            if(res.status >= 400){
                throw new Error(res.statusText)
            }
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            console.log(data.errors['2'].msg);
        })
        .catch(function(error){
            console.log(error);
        })

}