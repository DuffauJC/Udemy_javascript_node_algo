var readline = require("readline-sync");

var persos = [];
var choix = -1;
while(choix !== 0){
    menu();
    choix = readline.questionInt("Quel est votre choix ? ");
    switch(choix){
        case 1 : 
            for(var i = 0 ; i < persos.length ; i++){
                console.log("**************");
                afficherPerso(persos[i]);
            }
        break;
        case 2 : 
            var p = genererPerso();
            persos.push(p);
        break;
        case 0 : console.log("A +");
        break;
        default : console.log("Cas non pris en compte");
    }
}


function menu(){
    var txt = "***********************************************\n";
    txt += "1/ Afficher les personnages\n";
    txt += "2/ Ajouter un personnage\n";
    txt += "0/ Quitter\n";
    txt += "***************************************************"
    console.log(txt);
}

function genererPerso(){
    var perso = {
        nom : readline.question("Quel est le nom ? "),
        age : readline.question("Quel est l'age ? ")
    }
    return perso;
}

function afficherPerso(personnage){
    for(var info in personnage){
        console.log(info + " : " + personnage[info]);
    }
}
