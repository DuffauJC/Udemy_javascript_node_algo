var readline= require('readline-sync');

var tab=[];

saisir();
calculMoyenne(tab);

function saisir() {
     var nbNotes=readline.questionInt("Combien de notes à saisir ?");
    for (let i = 1; i<=nbNotes; i++) {
        var saisie = readline.questionInt("Saisir la note numero " + i + " :");
        tab.push(saisie);
    }
    console.log(tab);
    return tab;
}

function calculMoyenne(tab) {
    var resultat = 0;
    for (var i = 0; i < tab.length; i++) {
        resultat = resultat + tab[i];
    }
    let moyenne = resultat / tab.length;
    console.log("La moyenne est de :" + Math.round(moyenne * 10) / 10);
}