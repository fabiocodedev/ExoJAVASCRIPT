// - Retirer la dernière valeur du tableau
// - Afficher les valeurs du tableau en utilisant la méthode document.write
// - Ajouter la valeur la valeur ‘dimanche’ à la fin du tableau
// - Remplacer le mar par mardi
// - Afficher le nombre de valeurs du tableau
// - Afficher la 5éme valeur 


var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanc"] ;



//Retirer la dernière valeur du tableau
semaine.forEach(element => {
    console.log(element);
});

console.log(semaine);
console.log(semaine.pop());
console.log(semaine);

// Afficher les valeurs du tableau en utilisant la méthode document.write

//document.write(semaine)

// Ajouter la valeur la valeur ‘dimanche’ à la fin du tableau
console.log(semaine);
semaine.push("dimanche");
console.log(semaine);


// Remplacer le mar par mardi
console.log(semaine);
semaine.splice(1,1,"mardi");

//semaine[1] = "mardi";

console.log(semaine);


// Afficher la 5éme valeur 
console.log(semaine[4]);


// Afficher le nombre de valeurs du tableau
console.log(semaine.length);
