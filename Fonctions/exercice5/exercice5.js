var readline=require("readline-sync");
var nombre = readline.questionInt("Quel nombre voulez-vous verifier ? ");
var diviseur = readline.questionInt("Quel est le diviseur ? ");

estDivisible(nombre,diviseur);

function estDivisible(nombre,diviseur){
    if(nombre % diviseur === 0){
        console.log("Le nombre "+ nombre +" est divisble par "+ diviseur );
    } else {
        console.log("Le nombre "+ nombre +" n'est divisble par "+ diviseur );
    }
}