/**
 * Main
 */
ligneTirets();
console.log("Bonjour");
afficherLignes();
console.log("Coucou");
afficherLignes();
console.log("Salut");
ligneTirets();

/**
 * Fonctions
 */
function ligneTirets(){
    var txt = "";
    for(var i = 0; i < 30 ; i++){
        txt += "-";
    }
    console.log(txt);
}

function afficherLignes(){
    for(var i = 0; i < 3; i++){
        ligneTirets();
    }
}