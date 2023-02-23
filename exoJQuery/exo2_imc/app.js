// ------ ETAPES A SUIVRE

// RECUPERER LES VALEURS DES 2 INPUTS AU MOMENT DE "SOUMETTRE"
// FAIRE LA FONCTION QUI CALCULE LES DEUX VALEURS IMPUTS POUR DONNER L'IMC
// RECUPERE LA VALEUR IMC
// AFFICHER LA VALEUR IMC DANS LE RESULTAT
// FAIRE UN IF POUR DONNER L'EXPLICATION EN FONCTION DE LA VALEUR IMC
// -------------------------------------------------------------------------------------------------------



// JE FAIT LA FONCTION QUI CALCULE L'IMC

// function calc() {
//     const resultCalc = ((weight/((tall*tall)/10000)));
//     console.log(calc());
//     return resultCalc ;
// }



$button = $("#buttonclick");

$button.on("click" , function(event) {
    event.preventDefault();
    let tall = $("#taille").val();
    let weight = $("#poids").val();
        console.log("valeur input \#taille -----\> "+tall);
        console.log("valeur input \#poids -----\> "+weight);

    const resultCalc = ((weight/((tall*tall)/10000)));
        console.log("IMC \= "+resultCalc);

    $("#imc").text(resultCalc.toFixed(2)).css({
                                                "color":"red",
                                                "font-size":"4em",
                                                "weight":"bold",
                                                "text-align":"center"
                                            }) ;


// ----- V1 IF --------------
    // if (resultCalc < 18.5) {
    //     $("#exp").text("IMC < 18,5 kg/m² : insuffisance pondérale").css("color","red") ;
    //             console.log("a");
    // } else if (resultCalc > 18.5 && resultCalc < 24.9) {
    //     $("#exp").text("18,5 < IMC < 24,9 : poids normal").css("color","red") ;
    //             console.log("b");
    // } else if (resultCalc > 25 && resultCalc < 29.9) {
    //     $("#exp").text("25 < IMC < 29,9 : surpoids").css("color","red") ;
    //             console.log("c");
    // } else{ 
    // $("#exp").text("IMC > 30 : obésité").css("color","red") ;
    //             console.log("d");
    // }




// ------ swith V2 --------------
// avec css en js

    switch (true) {
        case resultCalc < 18.5 :
             $("#exp").text("IMC < 18,5 kg/m² : insuffisance pondérale").css("color","red") ;
                     console.log("a");
            break;
        case resultCalc > 18.5 && resultCalc < 24.9 :
             $("#exp").text("IMC 18,5 < IMC < 24,9 : poids normal").css("color","red") ;
                     console.log("b");
            break;
        case resultCalc > 25 && resultCalc < 29.9 :
             $("#exp").text("IMC 25 < IMC < 29,9 : surpoids").css("color","red") ;
                     console.log("c");
            break;
        default:
            $("#exp").text("IMC > 30 : obésité").css("color","red") ;
                    console.log("d");
            break;
    }
}) ;






