var readline=require("readline-sync");

var capital = readline.questionInt("Combien voulez-vous emprunter ? ");
var taux = readline.questionInt("Quel est le taux propose par votre banque ? ");
var duree = readline.questionInt("Quel est la durée de l'emprunt en annee ? ");

var mensualite=0;

calculMensualite(capital,taux,duree);
console.log("Votre mensualité sera de "+ mensualite +" euros par mois");

function calculMensualite(capital,taux,duree){
    var i=taux/100/12;
    var n = duree*12;
    mensualite = capital*(i/(1-Math.pow((1+i),-n)));

    return Math.round(mensualite*100)/100;//arrondi avec 2 chiffre apres la virgule
}