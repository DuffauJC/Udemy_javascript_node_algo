var readline = require("readline-sync");

var menu="1/ Ajouter un joueur\n";
menu +="2/ Modifier un joueur\n";
menu +="3/ Supprimer un joueur\n";
menu +="0/ Quiiter le programme\n";

console.log(menu);
var action = readline.questionInt("Quel choix voulez-vous ?");

switch (action){
    case 1 : console.log("selection ajout joueur");
    break;
    case 2 : console.log("selection modification joueur");
    break;
    case 3 : console.log("selection suppression joueur");
    break;
    case 0 : console.log("A bientôt");
    break;
    default : console.log("cas non traité");
}