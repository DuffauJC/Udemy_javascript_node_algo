var readline= require("readline-sync");

var tableMultiplications = readline.questionInt("Quel table voulez-vous ? ");

for(var i = 10 ; i >= 1 ; i--){
    console.log(i + " * "+ tableMultiplications +" = "+ (i*tableMultiplications));
}