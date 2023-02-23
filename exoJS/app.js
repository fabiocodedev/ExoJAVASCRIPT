


// EXO 2 --------------------------------------------------------------------


nb = prompt("Saisisser un nombre entre 0 et 100 pour savoir si c'est un nomre premier :");

if (nb%1==nb && nb%nb==1 && nb%(x)==0) {
    console.log("Ce nombre n'est pas premier !");
}
else {
    console.log("Ce nombre est premier !");
}

// -------------------------------

nb = prompt("Saisisser un nombre entre 0 et 100 pour savoir si c'est un nomre premier :");

for (var index = 1; index = 9; index++) {
    
    if (nb/nb==1 && nb/1==nb && nb/index!=0) {
        console.log("Ce nombre n'est pas premier !");
    }
    else {
        console.log("Ce nombre est premier !");
    }
    
}

// ------------------------------

const number = prompt("Entrez un nombre entre 0 et 100 : ");

const isPremier = (nbre) => {
    for (let i = 1; i<nbre; i++) {
        if ((nbre%i == 0) && (i != 1) && (nbre != i )){
            return false
        }
    }
    return true
}

if (isPremier(number)) {
    alert("C'est un nombre premier")
} else {
    alert("Ce n'est pas un nombre premier")
}



// EXO 3 -----------------------------------------------------------------------

var semaine = ["lun","mar","mer","jeu","ven","sam","dim"] ;

semaine.pop();
// retire le dernier index
semaine.push("dimanche");
// ajoute l'index "dimanche" a la fin

semaine.splice(1,1,"mardi")
// remplace mar (position tableau de 1 à 1 (mar) remplacer par "mardi")


document.write(semaine," ",semaine[4], " ",semaine.length);
// affiche la variable "semaine" dans la page + le 5ème index du tableau + le nombre d'index


// EXO 4 -------------------------------------------------------------------------

var liste = ["banane", "raisin", "pomme"] ;

document.write(liste) ;

fruit = prompt("Saisisser le nom d'un fruit :");

if (fruit = liste.length) {
    document.write (fruit) ;
    liste.pop(fruit) ;
}
else {
    alert("fruit indisponible !") ;
}

document.write (liste) ;
