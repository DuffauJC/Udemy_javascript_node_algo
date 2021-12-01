var readline = require("readline-sync");

//main

var chiffre1=2;
var chiffre2=readline.questionInt("quel nombre voulez-vous ?");
ajoute5(chiffre1);
ajoute5(chiffre2);
// sayHello();

//methodes

function ajoute5(nbEntre) {
var resultat =5+nbEntre;
console.log("Le resultat est :"+resultat);
}
// function hello(){
//     console.log("coucou");
//     console.log("comment ça va ?");
// }
// function sayHello(){
//     console.log("salut")
//     hello();
// }