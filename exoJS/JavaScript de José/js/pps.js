var age = 18  //prompt("Age?")

if (age >= 1 && age <= 6 ) {
    console.log("Vous êtes un jeune enfant");
} else if (age >= 7 && age <= 11 ) {
    console.log("Vous êtes un enfant qui a atteint l'âge de raison");
} else if (age >= 12 && age <= 17 ) {
    console.log("Vous êtes un adolecent");
} else if (age >= 18 && age <= 120 ) {
    console.log("Vous êtes un adulte");
} else{
    console.log("Vous êtes mort");
}