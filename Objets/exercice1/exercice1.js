var p1={
    nom:"toto",
    note1:15,
    note2:13,
    note3:10
}
var p2={
    nom:"titi",
    note1:12,
    note2:17,
    note3:16
}
var p3={
    nom:"tata",
    note1:10,
    note2:8,
    note3:12
}
// calculMoyenne(p1);
// calculMoyenne(p2);
// calculMoyenne(p3);
//
//
// function calculMoyenne(perso){
//     var moyenne = (perso.note1 + perso.note2 +perso.note3)/3;
//     console.log("La moyenne de "+perso.nom+" est : "+Math.round(moyenne*100)/100);
// }

var persos = [p1,p2,p3];

for(var i = 0 ; i < persos.length ; i++){
    var moyenne = calculMoyenne(persos[i]);
    console.log("La moyenne "+ persos[i].nom +" est : "+ Math.round(moyenne*10)/10);
}

function calculMoyenne(perso){
    var moyenne = 0;
    var nbNotes = 0;
    for(var element in perso){
        if(typeof(perso[element]) === "number"){
            moyenne += perso[element];
            nbNotes++;
        }
    }
    return moyenne / nbNotes;
}