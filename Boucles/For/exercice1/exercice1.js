var readline = require("readline-sync");

var tableMultiplications = readline.questionInt("Quelle est la table de multiplications ? ");

for(var cpt=1; cpt < 11 ; cpt++){
    var resultat = cpt * tableMultiplications;
    console.log(cpt + " * " + tableMultiplications +" = " + resultat);
}