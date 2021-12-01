var readline = require('readline-sync');

var tab = [4, 8, 12, 16];

var saisie = readline.questionInt("Quel nombre voulez-vous ?");

var bool=verifTab(tab, saisie);
if (bool){
    console.log("le tableau ne contient que des valeurs divisibles par "+ saisie);
}else {
    console.log("le tableau ne contient pas que des valeurs divisibles par "+ saisie);
}

function verifTab(tab, saisie) {
    for (let i = 0; i<tab.length; i++) {
        console.log(tab[i]);
        if (tab[i] % saisie !== 0) {
           return false;
        }
    }
    return true;
}