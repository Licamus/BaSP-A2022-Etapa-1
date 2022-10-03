window.onload = function() {

    var inputEmail = document.querySelector('[name=emaillog]');

    var inputPassword = document.querySelector('[name=passw]');

    var validTotal = document.querySelector('[name=button-validate]');

    inputPassword.onblur = function() {
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && (inputPassword.value.length>=8)){
            inputCreate(inputPassword);
        }
        else{
            inputDelete(inputPassword);
            inputPassword.nextElementSibling.innerText = 'Invalid Password';
        }
    }

    inputEmail.onblur = function() {
        if(validateEmail(inputEmail)){
            inputCreate(inputEmail);
        }
        else{
            inputDelete(inputEmail);
            inputEmail.nextElementSibling.innerText = 'Invalid Email';
        }
    }

    validTotal.onclick = function(e) {
        e.preventDefault();
        var array = ['Correct Email ','Correct Password '];

        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && validateEmail(inputEmail) && (inputPassword.value.length>=8)){
            alert('Valid account!');
        }
        else{
            if((numbersPassword(inputPassword) && lettersPassword(inputPassword) && (inputPassword.value.length>=8))==false){
                if(inputPassword.value.length==0) {
                    inputNotComplete(inputPassword);
                }
                array[1] = 'Invalid password!   ';
            }
            if(validateEmail(inputEmail)==false) {
                if(inputEmail.value.length==0) {
                    inputNotComplete(inputEmail);
                }
                array[0] = 'Invalid email!  ';
            }
            alert(array);
        }
    }

    function inputCreate(inputText) {
        inputText.nextElementSibling.classList.remove("on");
        inputText.classList.remove("un-check");
        inputText.classList.add("check");
    }

    function inputDelete(inputText) {
        inputText.nextElementSibling.classList.add("on");
        inputText.classList.remove("check");
        inputText.classList.add("un-check");
    }

    function inputNotComplete(inputText) {
        inputText.nextElementSibling.classList.add("on");
        inputText.nextElementSibling.innerText = "Complete this field";
    }

    function inputFocus(inputText) {
        inputText.nextElementSibling.classList.remove("on");
        inputText.classList.remove("check");
        inputText.classList.remove("un-check");
    }

    inputEmail.onfocus = function() {
        inputFocus(inputEmail);
    }

    inputPassword.onfocus = function() {
        inputFocus(inputPassword);
    }

    function numbersPassword(inputText) {

        var numbers = "0123456789";

        for(var i=0; i<inputText.value.length; i++){
            if (numbers.indexOf(inputText.value.charAt(i),0)!=-1) {
                return true;
            }
        }
        return false;
    }

    function lettersPassword(inputText){

        var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

        for(var i=0; i<inputText.value.length; i++){
            if (letters.indexOf(inputText.value.charAt(i),0)!=-1){
                return true;
            }
        }
    return false;
    }

    function validateEmail(inputText)
    {
        var mailFormat =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if(inputText.value.match(mailFormat)) {
            return true;
        }
        else {
            return false;
        }
    }

    //FETCH

    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

    var promise = fetch(url);

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
