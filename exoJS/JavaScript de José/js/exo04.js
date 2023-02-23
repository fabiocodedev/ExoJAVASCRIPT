// Soit le tableau suivant :
// Var fruits = [‘Banane, ‘Raisin’, ‘Pomme’]
// Afficher la liste des fruits
// Demande à l’utilisateur de saisir un nom de fruits
// S’il est présent dans la liste, on lui affiche son choix et on retire le fruit de la liste
// Sinon on affiche un message ‘Indisponible’
// On affiche à nouveau la liste.

var fruits = ["Banane", "Raisin", "Pomme"];

//saisir un nom de fruits:
//var quesfruit = prompt("Saisir un nom de fruits:")
console.log(fruits);

var quesfruit = "Banane";
var resulta = "";

var quesfruit = "Banane";
//
var quesfruit = prompt("Saisir un nom de fruits:");
var found = fruits.find(element => element == quesfruit);

if (found !== undefined) {
    console.log(found);
    indixep = fruits.indexOf(found);

    console.log(fruits.indexOf(found));

    fruits.splice(indixep,1);


}else{
    console.log("Indisponible");
}


console.log(fruits);


