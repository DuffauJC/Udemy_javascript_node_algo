console.log("-----------------------");
console.log(ditBonjour("fr") + "JCD");
console.log("-----------------------");
console.log(ditBonjour("en") + "TYA");
console.log("-----------------------");
console.log(ditBonjour("es") + "MILO");
console.log("-----------------------");


function ditBonjour(lang) {

    switch (lang.toLowerCase()) {
        case "fr":
            return "Bonjour ";
            break;
        case "en":
            return "Hello ";
            break;
        case "es":
            return "Hola ";
            break;
        default :
            return "La langue demandée n'est pas paramétrée";
    }

}
