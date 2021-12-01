var readline = require("readline-sync");

var nom1 = "JCD";
var nom2="Tya";
var nom3="Milo";
console.log("-----------------------");
ditBonjour(nom1,"fr");
console.log("-----------------------");
ditBonjour(nom2,"en");
console.log("-----------------------");
ditBonjour(nom3,"es");
console.log("-----------------------");
console.log("-----------------------");
var pseudo = readline.question("Quel est votre prenom ? ");
var lang = readline.question("Quel est votre langue (fr / en / es) ? ");
ditBonjour(pseudo,lang);
console.log("-----------------------");

function ditBonjour(pseudo,lang){

    switch (lang){
        case "fr":  console.log("Bonjour " + pseudo);
        break;
        case "en": console.log("Hello %s ", pseudo);
        break;
        case "es": console.log("Hola " + pseudo);
        break;
        default : console.log("La langue demandée n'est pas paramétrée");
    }
}
