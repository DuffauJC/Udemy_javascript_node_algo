var readline = require("readline-sync");

//main///////////////////
var action = -1;
while (action !== 0) {
    afficherMenu();
    action = readline.questionInt("Quel est votre choix ?");
    switch (action) {
        case 1:
            console.log("Calcul de la factorielle");
            var nombre = readline.questionInt("Quel nombre voulez-vous ?");
            console.log("La factorielle de " + nombre + " est : " + calculFactorielle(nombre));
            break;
        case 2:
            console.log("Calcul de la somme");
            var nombre = readline.questionInt("Quel nombre voulez-vous ?");
            console.log("Le résultat de la somme des" + nombre + "premiers nombres est : " + calculSomme(nombre));
            break;
        case 3:
            console.log("A+");
            break;
        default:
            console.log("Je n'ai pas compris, réessayer");
    }
}

function afficherMenu() {
    menu = "1/ Factorielle\n";
    menu += "2/ Somme\n";
    menu += "3/ Quitter";
    console.log(menu);
}

function calculFactorielle(nombre) {
    var resultat = 1;
    for (var i = 1; i <= nombre; i++) {
        resultat = resultat * i;
        i++;
    }
    return resultat;
}

function calculSomme(nombre) {
    var resultat = 0;
    for (var i = 0; i <= nombre; i++) {
        resultat += i;
    }
    return resultat;
}
