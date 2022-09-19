//Exercise a
var string1='HelloThere';

console.log(string1.toUpperCase());

//Exercise b

var string1='HelloThere', string2;

string2=string1.substring(0,5);

console.log(string2);

//Exercise c

var string1='HelloThere', string2;

string2=string1.substring(string1.length-3,string1.length);

console.log(string2);

//Exercise d

var string1='HelloThere', string2, string3, string4;

string2=string1.substring(0,1);
string2=string2.toUpperCase();

string3=string1.substring(1,string1.length);
string3=string3.toLowerCase();

string4= string2 + string3;
console.log(string4);

//Exercise e

var string1='Hello There', pos1;

pos1= string1.indexOf(' ');

console.log(pos1);

//Exercise f

var string1='Hello There', string2, string3, string4, string5, string6, pos1;

pos1= string1.indexOf(' ');


string2=string1.substring(0,1);
string2=string2.toUpperCase();

string3=string1.substring(1,pos1);
string3=string3.toLowerCase();

string4=string1.substring(pos1,pos1+2);
string4=string4.toUpperCase();

string5=string1.substring(pos1+2,string1.length);
string5=string5.toLowerCase();

string6=string2+string3+string4+string5;

console.log(string6);