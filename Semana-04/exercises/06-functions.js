//Exercise a

var num1=2, num2=4, num3;

function plusA(number1, number2) {
    return number1 + number2;
}

num3=plusA(num1, num2);

console.log(num3);

//Exercise b

var num1=2, num2='texto', num3;

function plusB(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number' ) {
        console.log('Es un número');
        return number1 + number2;
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}

num3=plusB(num1, num2);

console.log(num3);

//Exercise c

function Integer(number){
    if (number % 1 == 0) {
        return true;
    }
}

//Exercise d

var num1=227, num2=4.5, num3;

function plusD(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number' ) {
        console.log('Es un número');
        if(Integer(number1)){
        }else{
            number1=Math.trunc(number1);
            alert('Number 1 is not an integer');
            return number1;
        }
        if(Integer(number2)){
        }else{
            number2=Math.trunc(number2);
            alert('Number 2 is not an integer');
            return number2;
        }
        return number1 + number2;
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}

num3=plusD(num1, num2);

console.log(num3);

//Exercise e

var num1=227, num2=5.3, num3;

function validation(number){
    if(Integer(number)){
    }else{
        number=Math.trunc(number);
        alert('Is not an integer');
        console.log(number);
    }
}

function plusE(number1, number2) {
    var aux;
    if (typeof number1 === 'number' && typeof number2 === 'number' ) {
        console.log('Es un número');
        validation(number1);
        validation(number2);
        return number1 + number2;
    } else{
        alert('One of the parameters has an error');
        return NaN;
    }
}

num3=plusE(num1, num2);

console.log(num3);