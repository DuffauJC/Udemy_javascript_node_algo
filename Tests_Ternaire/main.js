// variablename = (condition) ? value1:value2
// var voteable = (age < 18) ? "Too young":"Old enough";

var  readlineSync =require('readline-sync');



var age=17;
var etat=(age<18) ? "Mineur":"Majeur";
console.log(etat);

var sportif=false;
var etat2=(sportif===true) ? "Bien":"Devrait faire du sport";
console.log(etat2);

var sexe=false;
var etat3=(sexe===true) ? "Femme":"Homme";
console.log(etat3);

var  nbsaisi1  = readlineSync.questionInt("Saisir un nombre :");
var parite=(nbsaisi1 % 2===0) ? "Paire":"Impaire";
console.log("Parite : "+parite);

var  nbsaisi2  = readlineSync.questionInt("Saisir un nombre :");
var divPar4=(nbsaisi2 % 4===0) ? "divisble par 4":"non divisible par 4";
console.log(divPar4);