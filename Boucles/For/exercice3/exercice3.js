var resultat = 0;

for(var compteur = 0; compteur <= 200 ; compteur = compteur + 2){ // 2 en 2 jusqu'à 200  pour les 100 premiers
    resultat += compteur; //resultat = resultat + compteur;
    //console.log(compteur +" : "+ resultat);
}
// for(var compteur = 0; compteur <= 200 ; compteur = compteur + 1){
//     if(compteur % 2 === 0){
//         resultat += compteur;
//     } 
// }

console.log("La somme des 100 premiers nombres pair est égale à : "+ resultat);

