var readlineSync = require('readline-sync');

var moisEnLettre = readlineSync.question("Quel mois de l'annee voulez-vous ?")

var txt = "Le mois " + moisEnLettre + " équivaut à ";

if (moisEnLettre === "Janvier") {
    console.log(txt + 1);
} else if (moisEnLettre === "Fevrier") {
    console.log(txt + 2);
} else if (moisEnLettre === "Mars") {
    console.log(txt + 3);
} else if (moisEnLettre === "Avril") {
    console.log(txt + 4);
} else if (moisEnLettre === "Mai") {
    console.log(txt + 5);
} else if (moisEnLettre === "Juin") {
    console.log(txt + 6);
} else if (moisEnLettre === "Juillet") {
    console.log(txt + 7);
} else if (moisEnLettre === "Aout") {
    console.log(txt + 8);
} else if (moisEnLettre === "Septembre") {
    console.log(txt + 9);
} else if (moisEnLettre === "Octobre") {
    console.log(txt + 10);
} else if (moisEnLettre === "Novembre") {
    console.log(txt + 11);
} else if (moisEnLettre === "Decembre") {
    console.log(txt + 12);
}
