// Faire un script demandant à l’utilisateur de saisir un nombre entre 0 et 100 ensuite
// il doit vérifier si c’est un nombre premier.
// NB : Un nombre premier est donc un nombre dont ses seuls diviseurs sont 1 et luimême.

//var numero = prompt("Saisir un nombre:")


nombre = 43;
cont = 0;
i = 0;



    for (i = 0; i <= nombre; i++) {
        if (nombre % i == 0) {
            cont++;
        }
    }
    if (cont == 2) {
        console.log(+ nombre + " c’est un nombre premier");
    } else {
        console.log(+ nombre + " c’est ne pas un nombre premier");
    }


/******************   deuxième   *************************************************************** */
nbre = 45
estPremier = true
    for (let index = 2; index < nbre; index++) {
        if (nbre % index == 0) {
            estPremier = false;
            console.log(+ nombre + " c’est ne pas un nombre premier" + " " + index);
        }
    }
    if (estPremier) {
        console.log(+ nbre + " c’est un nombre premier");
    }