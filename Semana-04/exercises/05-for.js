//Exercise a


var i, words = ["enero", "febrero", "marzo", "abril", "mayo"];

for (i=0; i<=4; i++){
    alert(words[i]);
}

//Exercise b

var i, aux, aux2, words = ["enero", "febrero", "marzo", "abril", "mayo"];


for (i=0; i<=4; i++){
    aux=words[i].substring(1,string1.length);
    aux2=words[i].substring(0,1);
    aux2=aux2.toUpperCase();
    words[i]=aux2+aux;
    alert(words[i]);
}

//Exercise c

var sentence='', words = ["enero", "febrero", "marzo", "abril", "mayo"];

for (i=0; i<=4; i++){
    sentence+=(words[i]);
}

alert(sentence);

//Exercise d

var words = [];

for (i=0; i<=9; i++){
    words[i]=i;
}

console.log(words);