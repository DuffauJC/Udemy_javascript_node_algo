var prenom="Gaston";
var nom ="Matthieu";
console.log("prenom : "+ prenom + " nom :"+nom);
var temp;// variable temporaire pour transvaser....
temp=prenom;//gaston
prenom=nom;//prenom = matthieu
nom=temp;// nom = gaston
console.log("prenom : "+ prenom + " nom :"+nom);