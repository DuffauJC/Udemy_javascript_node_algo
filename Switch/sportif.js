var readline=require("readline-sync");

var sport=readline.questionInt("Quel sport voulez-vous ? (1-3) ");

switch(sport) {
    case 1://foot
       console.log("footeux");
       // break;
    case 2://rugby
        console.log("rugbeux");
        break;
    case 3://tennis
        console.log("tennieux");
        break;
    default:
        console.log("cas non traité");
}
