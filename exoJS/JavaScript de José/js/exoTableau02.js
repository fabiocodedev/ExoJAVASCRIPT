cont=1;
somme = 0;
valor=0;
pairs=0; 
impairs=0;


var cantite = prompt("Ecrivez le nombre d'elements");

while (cont <= cantite) {
     
     val = prompt("Ecrivez le nombre: " + cont);
     valor = Number(val);
     somme = somme + valor;  

     cont++;
}
console.log(somme);




document.write("<h1>somme: "+somme+"</h1>")