var marque="Yotota";
var modele="Riyas";
var nbPorte=3;
var annee=2002;
var age;
var date=new Date();
age=date.getFullYear()-annee;

console.log("Marque : "+marque +"\n" +
    "Modèle : "+modele+"\n"+
"La voiture dispose de "+nbPorte+" portes"+"\n"+
"La voiture date de "+annee+", elle a donc "+age+" ans.");