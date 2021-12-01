var readlineSync = require('readline-sync');

var moisEnLettre = parseInt(readlineSync.question("Quel mois de l'annee voulez-vous ?"));
// chaine en entier...case 1 :...

var txt = "Le mois " + moisEnLettre + " équivaut à ";

switch(moisEnLettre) {
    case 1://janvier
        console.log(txt + "Janvier");
        break;
    case 2://février
        console.log(txt + "Février");
        break;
    case 3://mars
        console.log(txt + "Mars");
        break;
    case 4://avril
        console.log(txt + "Avril");
        break;
    case 5://mai
        console.log(txt + "Mai");
        break;
    case 6://juin
        console.log(txt + "Juin");
        break;
    case 7://juillet
        console.log(txt + "Juillet");
        break;
    case 8://aout
        console.log(txt + "Aout");
        break;
    case 9://septembre
        console.log(txt + "Septembre");
        break;
    case 10://octobre
        console.log(txt + "Octobre");
        break;
    case 11://novembre
        console.log(txt + "Novembre");
        break;
    case 12://décembre
        console.log(txt + "Décembre");
        break;
    default:
        console.log("mois inexistant");
}

