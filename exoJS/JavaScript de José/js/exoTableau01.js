
cont=1;
somme = 0;
valor=0;

var cantite = prompt("Ecrivez le nombre d'elements");

while (cont <= cantite) {
     
     val = prompt("Ecrivez le nombre: " + cont);
     valor = Number(val);
     somme = somme + valor;  

     cont++;
}
console.log(somme);
document.write("<h1>somme: "+somme+"</h1>")

   

// document.write("<form action='index.html' method='get' class='form' id='formu' >");

// while (cont < cantite) {
//     document.write("<input type='text' name="+cont+" id="+cont+"><br>")
//     cont++;
// }
// if(cont > 0){
//     document.write("<input type='submit' name='envoie' id='envoie' value='calculer la somme'><br><input type='hidden' name=can id='can' value="+cantite+"></form> ")
// }
// const formu = document.getElementById('formu');
// console.log(formu.elements[0]); 
// console.log(formu.elements[1]); 
// console.log(formu.elements[2]); 