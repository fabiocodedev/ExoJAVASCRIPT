//var an = prompt("Acrivez l'année:")
var an = 2012

condition1 = (an % 400 == 0) ? true : false;
condition2 = (an % 4 == 0 ) ? true : false;
condition3 = (an % 100 == 0) ? true : false;

if((condition2 == true && condition3 == false) || condition1 == true ){
    console.log( "L'année " + an + " est bissextile");
}else{
    console.log( "L'année " + an + " n'est bissextile"); 
}


/////// ----------------------

((condition2 == true && condition3 == false) || condition1 == true ) ? console.log( "L'année " + an + " est bissextile") : console.log( "L'année " + an + " n'est bissextile");

resultad = (an % 4 == 0 ) && (an % 100 != 0) || (an % 400 == 0)? console.log( "L'année " + an + " est bissextile") : console.log( "L'année " + an + " n'est bissextile");


switch (true) {
    case (condition2 == true && condition3 == false):
    case condition1 == true :    
         console.log( "L'année " + an + " est bissextile") 
         break;

    default:
        console.log( "L'année " + an + " n'est bissextile");
        break;
}