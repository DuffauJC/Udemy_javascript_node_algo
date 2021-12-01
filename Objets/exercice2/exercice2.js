var readline =require('readline-sync');

var p1 = {
    nom: "toto",
    age: 15
}
var perso={};
perso.nom= readline.question("Quel est le nom ?");
perso.age=readline.questionInt("Quel est l'age ?");

var persos = [p1,];
persos.push(perso);

for(var i = 0 ; i < persos.length ; i++){
     afficherPerso();

}
function afficherPerso(){
    console.log("-------------");
    console.log("nom : "+ persos[i].nom +" age : "+ persos[i].age);
    console.log("-------------");
}