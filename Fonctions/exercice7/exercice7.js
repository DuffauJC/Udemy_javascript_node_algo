var readline = require("readline-sync");

var nb1 = readline.questionInt("Saisir premier nombre ? ");
var nb2 = readline.questionInt("Saisir deuxieme nombre ? ");
var nb3 = readline.questionInt("Saisir troisieme nombre ? ");
var nb4 = readline.questionInt("Saisir quatrieme nombre ? ");

var moy1 = moyenneNb(nb1, nb2, nb3, nb4);
console.log("La moyenne des 4 nombres saisis au clavier est de :" + moy1);

function moyenneNb(nb1, nb2, nb3, nb4) {
    return (nb1 + nb2 + nb3 + nb4) / 4;

}