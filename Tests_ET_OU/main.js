var age=58;
var sexe="masculin";
var ville="Marseille";

if (age>60 && ville==="Toulouse" && (sexe==="masculin" || sexe==="féminin")){
    console.log("Personne agée de "+ville+" de sexe "+sexe)
}else if (age<60 && (ville==="Paris" || ville==="Marseille") && (sexe==="masculin" || sexe==="féminin")){
    console.log("Personne adulte de "+ville+" de sexe "+sexe);
}else{
    console.log("En dehors des critères.")
}