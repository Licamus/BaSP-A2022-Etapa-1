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
    var inputG = document.getElementsByTagName("input");
    var array = [];
    var inputDateAux;

    for (i=0; i<=10; i++){
        array[i]=1;
    }

    function inputCreate(inputText) {
        inputText.nextElementSibling.classList.remove('on');
        inputText.classList.remove('un-check');
        inputText.classList.add('check');
    }

    function inputDelete(inputText) {
        inputText.nextElementSibling.classList.add('on');
        inputText.classList.remove('check');
        inputText.classList.add('un-check');
    }

    function inputFocus(inputText) {
        inputText.nextElementSibling.classList.remove('on');
        inputText.classList.remove('check');
        inputText.classList.remove('un-check');
    }

    inputName.onfocus = function() {
        inputFocus(inputName);
    }

    inputLastName.onfocus = function() {
        inputFocus(inputLastName);
    }

    inputId.onfocus = function() {
        inputFocus(inputId);
    }

    inputDate.onfocus = function() {
        inputFocus(inputDate);
    }

    inputPhone.onfocus = function() {
        inputFocus(inputPhone);
    }

    inputDirection.onfocus = function() {
        inputFocus(inputDirection);
    }

    inputLocation.onfocus = function() {
        inputFocus(inputLocation);
    }

    inputPostalCode.onfocus = function() {
        inputFocus(inputPostalCode);
    }

    inputEmail.onfocus = function() {
        inputFocus(inputEmail);
    }

    inputPassword.onfocus = function() {
        inputFocus(inputPassword);
    }

    inputPasswordR.onfocus = function() {
        inputFocus(inputPasswordR);
    }

    inputName.onblur = function() {
        if(lettersOnly(inputName) && (inputName.value.length>=3)) {
            inputCreate(inputName);
            array[0]=0;
        }
        else {
            inputDelete(inputName);
            array[0]='Invalid Name\n';
            inputName.nextElementSibling.innerText = 'Invalid Name';
        }
    }

    inputLastName.onblur = function() {
        if(lettersOnly(inputLastName) && (inputLastName.value.length>=3)) {
            inputCreate(inputLastName);
            array[1]=0;
        }

        else {
            inputDelete(inputLastName);
            array[1]='Invalid Last Name\n';
            inputLastName.nextElementSibling.innerText = 'Invalid Last Name';
        }
    }

    inputId.onblur = function() {
        if(numbersOnly(inputId) && (inputId.value.length>=7)) {
            inputCreate(inputId);
            array[2]=0;
        }
        else {
            inputDelete(inputId);
            array[2]='Invalid ID\n';
            inputId.nextElementSibling.innerText = 'Invalid ID';
        }
    }

    inputDate.onblur = function(e) {
        inputDateAux = e.target.value;
            var date = inputDateAux.split('-');
            var year = date.shift();
            date.push(year);
            inputDateAux = date.join('/');
            console.log(inputDateAux);
        if(inputDate.value.length!=0){
            inputCreate(inputDate);
            array[3]=0;
        }
        else {
            inputDelete(inputDate);
            array[3]='Invalid Date\n';
            inputDate.nextElementSibling.innerText = 'Invalid Date';
        }
    }

    inputPhone.onblur = function() {
        if(numbersOnly(inputPhone) && (inputPhone.value.length==10)){
            inputCreate(inputPhone);
            array[4]=0;
        }
        else {
            inputDelete(inputPhone);
            array[4]='Invalid Phone\n';
            inputPhone.nextElementSibling.innerText = 'Invalid Phone';
        }
    }

    inputDirection.onblur = function() {
        if(alphanumericOnly(inputDirection) && (inputDirection.value.length>=3) && spaceB(inputDirection) && numbersPassword(inputDirection) && lettersPassword(inputDirection)) {
            inputCreate(inputDirection);
            array[5]=0;
        }
        else {
            inputDelete(inputDirection);
            array[5]='Invalid Direction\n';
            inputDirection.nextElementSibling.innerText = 'Invalid Direction';
        }
    }

    inputLocation.onblur = function() {
        if(alphanumericOnly(inputLocation) && (inputLocation.value.length>=3) && lettersPassword(inputLocation)) {
            inputCreate(inputLocation);
            array[6]=0;
        }
        else {
            inputDelete(inputLocation);
            array[6]='Invalid Location\n';
            inputLocation.nextElementSibling.innerText = 'Invalid Location';
        }
    }

    inputPostalCode.onblur = function() {
        if(numbersOnly(inputPostalCode) && (inputPostalCode.value.length>=4) && (inputPostalCode.value.length<=5)) {
            inputCreate(inputPostalCode);
            array[7]=0;
        }
        else {
            inputDelete(inputPostalCode);
            array[7]='Invalid Postal Code\n';
            inputPostalCode.nextElementSibling.innerText = 'Invalid Postal Code';
        }
    }

    inputPassword.onblur = function(){
        if(numbersPassword(inputPassword) && lettersPassword(inputPassword) && (inputPassword.value.length>=8)) {
            inputCreate(inputPassword);
            array[8]=0;
        }
        else {
            inputDelete(inputPassword);
            array[8]='Invalid Password\n';
            inputPassword.nextElementSibling.innerText = 'Invalid Password';
        }
    }

    inputPasswordR.onblur = function() {
        if(rePassword(inputPasswordR,inputPassword) && (inputPasswordR.value.length!=0)){
            inputCreate(inputPasswordR);
            array[9]=0;
        }
        else {
            inputDelete(inputPasswordR);
            array[9]='Invalid Repeat Password\n';
            inputPasswordR.nextElementSibling.innerText = 'Invalid Repeat Password';
        }
    }

    inputEmail.onblur = function() {
        if(validateEmail(inputEmail)){
            inputCreate(inputEmail);
            array[10]=0;
        }
        else {
            inputDelete(inputEmail);
            array[10]='Invalid Email\n';
            inputEmail.nextElementSibling.innerText = 'Invalid Email\n';
        }
    }

    validTotal.onclick = function(e) {
        e.preventDefault();
        var j=0, w=0;
        var array2= ['Please complete all the fields correctly to sent the form'];

        for (var i=0; i<=10; i++) {
            if((array[i]!=0) && (array[i]!=1)) {
                array2[j]=array[i];
                j++;
            }
            if(array[i]==1){
                w++;
                inputG[i].nextElementSibling.classList.add('on');
                inputG[i].nextElementSibling.innerText = 'Complete this field';
            }
        }
        if(w>0) {
            alert('Incompleted fields');
        }
        if((w==0) && (array2.length==0)) {
            alert('Account Created');
        }
        else {
            alert('You enter an invalid format to this forms:\n' + array2);
        }

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + inputName.value + '&lastName=' + inputLastName.value + '&dni=' + inputId.value + '&dob=' + inputDateAux + '&phone=' + inputPhone.value
        + '&address=' + inputDirection.value + '&city=' + inputLocation.value + '&zip='+ inputPostalCode.value + '&email='+ inputEmail.value +'&password='+ inputPassword.value;

        var promise = fetch(url);

        var arrayError = [];

        promise
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if(data.success) {
                    localStorage.setItem('name',inputName.value);
                    localStorage.setItem('lastName',inputLastName.value);
                    localStorage.setItem('dni',inputId.value);
                    localStorage.setItem('dob',inputDateAux);
                    localStorage.setItem('phone',inputPhone.value);
                    localStorage.setItem('address',inputDirection.value);
                    localStorage.setItem('city',inputLocation.value);
                    localStorage.setItem('zip',inputPostalCode.value);
                    localStorage.setItem('password',inputPassword.value);

                    alert(data.msg);
                }
                else {
                    if(data.errors === undefined) {
                        arrayError[0] = data.msg;
                        throw new Error(arrayError);
                    }
                    else {
                        for(var i=0; i < data.errors.length ; i++) {
                            arrayError[i] = data.errors[i].msg;
                        }
                        throw new Error(arrayError);
                    }
                }
            })
            .catch(function(error) {
                alert(error);
            })
    }

    function lettersOnly(inputText){

        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';

        for(var i=0; i<inputText.value.length; i++) {

            if (letters.indexOf(inputText.value.charAt(i),0)==-1) {
                return false;
            }
        }
        return true;
    }

    function numbersOnly(inputText) {

        var numbers = '0123456789';

        for(var i=0; i<inputText.value.length; i++){
            if (numbers.indexOf(inputText.value.charAt(i),0)==-1){
                return false;
            }
        }
        return true;
    }

    function alphanumericOnly(inputText) {

        var letters = 'abcdefghijklmnñopqrstuvwxyz123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';

        for(var i=0; i<inputText.value.length; i++){
            if (letters.indexOf(inputText.value.charAt(i),0)==-1){
                return false;
            }
        }
        return true;
    }

    function spaceB(inputText) {

        var letters = '- ';
        var auxiliar = inputText.value.length;

        auxiliar = auxiliar-1;

        for(i=1; i<auxiliar; i++) {
            if (letters.indexOf(inputText.value.charAt(i),1)!=-1) {
                return true;
            }
        }
        return false;
    }

    function numbersPassword(inputText) {

        var numbers = '0123456789';

        for(var i=0; i<inputText.value.length; i++){
            if (numbers.indexOf(inputText.value.charAt(i),0)!=-1){
                return true;
            }
        }
        return false;
    }

    function lettersPassword(inputText) {

        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

        for(var i=0; i<inputText.value.length; i++){
            if (letters.indexOf(inputText.value.charAt(i),0)!=-1) {
                return true;
            }
        }
        return false;
    }

    function rePassword(inputText, inputText2) {

        if(inputText.value != inputText2.value) {
            return false;
        }
        else{
            return true;
        }
    }

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
