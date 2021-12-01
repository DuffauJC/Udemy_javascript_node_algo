var readlineSync = require('readline-sync');

var classe = readlineSync.question("Entrez une lettre allant de A à F pour connaitre la classe.");

if (classe === "A" || classe === "B") {
    console.log("Numéro 1");
} else if (classe === "C" || classe === "D") {
    console.log("Numéro 2");
} else if (classe === "E" || classe === "F") {
    console.log("Numéro 3");
}