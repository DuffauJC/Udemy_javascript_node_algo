var  readlineSync =require('readline-sync');

var  age  = readlineSync.questionInt("Saisir un age :");

if (age >= 16 && age<=17){// 16 <= age <= 17
    console . log ("Mineur");
}else  if(age <=20){// 17 <= age <=20
    console . log ("Majeur");
}else  if(age <= 24){// 20 <= age <= 24
    console . log ("Adulte");
}else{// age < 16 || age >= 25
    console.log("age non pris en charge");
}
