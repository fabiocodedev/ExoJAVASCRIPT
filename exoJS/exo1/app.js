// age ----------------------------------------------------------------

// IF

age=prompt("Quel age avez-vous?");


if (age>=1 && age<=6) {
    alert("Vous etes un jeune enfant");
}
else if (age >=7 && age<=11){
    alert("Vous etes un enfant qui a ateint l'age de raison");
}
else if (age >=12 && age<=17){
    alert("Vous etes un adolescent");
}
else if (age >=18 && age<=120){
    alert("Vous etes un adulte");
}
else{
    alert("Vous etes trop vieux !");
}



// SWITCH

age=prompt("Quel age avez-vous?");

switch(true) {
    case age>=1 && age<=6:
    alert("Vous etes un jeune enfant");
    break;

    case age>=7 && age<=11:
        alert("Vous etes un enfant qui a ateint l'age de raison");
    break;

    case age>=12 && age<=17:
    alert("Vous etes un adolescent");
    break;

    case age>=18 && age<=120:
    alert("Vous etes un adulte");
    break;

    default:
    alert("Vous etes trop vieux !");
    break;
}



// ANNEE BISSEXTILE -----------------------------------------------------


// IF

a=prompt("En quelle année sommes nous ?");

if ( (a%4==0 && a%100!=0) || (a%400==0) )  {
    alert("Vous etes dans une année bissextile");
}
// else if (a%400==0) {
//     alert("Vous etes dans une année bissextile");
// }
else {
    alert("Vous n'etes pas dans une année bissextile");
}


// TERNAIRE

a=prompt("En quelle année sommes nous ?");

BISSEXTILE=( (a%4==0 && a%100!=0) || (a%400==0) ) ? alert("Vous etes dans une année bissextile") : alert("Vous n'etes pas dans une année bissextile");

// AUTRE

document.write(<p>lorem</p>)

//

prenom=["Moussa","Fabio", "Bob"]

for (var index = 0; index < prenom.length; index++) {
    
    if (prenom===penom[1] ) {
        
    }
}