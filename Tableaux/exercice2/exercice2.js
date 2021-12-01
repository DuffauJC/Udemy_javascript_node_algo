var tab = [5, 12, 18, 13, 14, 10, 7];

var resultat=0;
for (var i = 0; i<tab.length; i++) {
    resultat = resultat+tab[i];
}
let moyenne = resultat /tab.length;
console.log("La moyenne est de :"+ Math.round(moyenne*10)/10);