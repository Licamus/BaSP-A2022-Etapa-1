//Exercise a

var num1;
num1=Math.random();

console.log(num1);

if(num1>=0.5){
    alert('Greater than 0,5');
}else{
    alert('Lower than 0,5');
}

//Exercise b

var Age=Math.random()*100;

console.log(Age);

if(Age<2){
    alert('Bebe');
}else if(Age<=12 && Age>=2){
    alert('Niño');

}else if(Age<=19 && Age>=13){
    alert('Adolescente');

}else if(Age<=30 && Age>=20){
    alert('Joven');

}else if(Age<=60 && Age>=31){
    alert('Adulto');

}else if(Age<=75 && Age>=61){
    alert('Adulto mayor');

}else if(Age>75){
    alert('Anciano');

}

