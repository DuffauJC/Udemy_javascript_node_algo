var readline=require("readline-sync");
var nombre = readline.questionInt("Quel nombre voulez-vous verifier ? ");
var diviseur = readline.questionInt("Quel est le diviseur ? ");

var result="";

estDivisible(nombre,diviseur);
console.log(result);

function estDivisible(nombre,diviseur){
    if(nombre % diviseur === 0){
       result= "Le nombre "+ nombre +" est divisible par "+ diviseur;
    } else {
      result= "Le nombre "+ nombre +" n'est divisible par "+ diviseur;
    }
    return result;
}