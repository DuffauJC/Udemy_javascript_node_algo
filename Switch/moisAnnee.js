var  readlineSync =require('readline-sync');

var  moisEnChiffre  = readlineSync.questionInt("Quel mois de l'annee voulez-vous ? ");

switch(moisEnChiffre) {
    case 1://janvier
        console . log ("Mois saisit : Janvier " + moisEnChiffre );
         break;
    case 2://février
        console . log ("Mois saisit : Février " + moisEnChiffre );
        break;
    case 3://mars
        console . log ("Mois saisit : Mars " + moisEnChiffre );
        break;
    case 4://avril
        console . log ("Mois saisit : Avril  " + moisEnChiffre );
        break;
    case 5://mai
        console . log ("Mois saisit : Mai " + moisEnChiffre );
        break;
    case 6://juin
        console . log ("Mois saisit : Juin " + moisEnChiffre );
        break;
    case 7://juillet
        console . log ("Mois saisit : Juillet " + moisEnChiffre );
        break;
    case 8://aout
        console . log ("Mois saisit : Aout " + moisEnChiffre );
        break;
    case 9://septembre
        console . log ("Mois saisit : Septembre " + moisEnChiffre );
        break;
    case 10://octobre
        console . log ("Mois saisit : Octobre " + moisEnChiffre );
        break;
    case 11://novembre
        console . log ("Mois saisit : Novembre " + moisEnChiffre );
        break;
    case 12://décembre
        console . log ("Mois saisit : Décembre " + moisEnChiffre );
        break;
    default:
        console.log("mois inexistant");
}

