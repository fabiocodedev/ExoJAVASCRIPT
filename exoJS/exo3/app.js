
// EXO 1 ------------------------------------------------------

// var questions = [
//     {
//     question: 'Est-ce que tu aimes le JavaScript ?',
//     reponse : 'oui'
//     },
//     {
//     question: 'Le JavaScript est une évolution du Java ?',
//     reponse : 'non'
//     },
//     {
//     question: 'Le JavaScript est proche du Java ?',
//     reponse : 'non'
//     },
//     {
//     question: 'Le JavaScript est un langage d\'objet par prototypage ?',
//     reponse : 'oui'
//     },
//     {
//     question: 'Le JavaScript est souvent utilisé coté client ?',
//     reponse : 'oui'
//     },
//     {
//     question: 'Le JavaScript peut être utilisé coté client et serveur ?',
//     reponse : 'oui'
//     }
//     ];


// V1 avec FOREACH 

// var score = 0
// questions.forEach(element => {
//     var resultat=prompt(element.question) ;
//     if (resultat.toLowerCase()==element.reponse) {
//         alert("vous avez donner la bonne résonse !") ;
//         score++ ;
//     } 
//     else {
//         alert("Ce n'est pas la bonne reponse, la bonne reponse a la question : " + element.question + " etait " + element.reponse) ;

//     }
// });
// document.write("Votre score est de  ", score, " / 6") ;



// V2 avec boucle FOR

// var score = 0
// for (var index = 0; index < questions.length; index++) {
//    var resultat = prompt(questions[index].question) ;
//     if (resultat.toLowerCase() == (questions[index].reponse)) {
//         alert("vous avez donner la bonne résonse !") ;
//         score++ ;
//     } else {
//         alert("Ce n'est pas la bonne reponse, la bonne reponse a la question : " + questions[index].question + " etait " + questions[index].reponse) ;
//     }
//    }
// document.write("Votre score est de  ", score, " / 6") ;



// EXO 2 -------------------------------------------




// var etudiant = [["Moussa", 14],
//                 ["Vanessa", 17], 
//                 ["Jean", 8], 
//                 ["Afpa", 5],
//                 ["Fab", 9],
//                 ]

// for (let index = 0; index < etudiant.length; index++) {
//     if (etudiant[index][1]<=9) {
//         document.write("<p>" + etudiant[index][0] + " n'etes pas admis avec sa moyenne de : " + etudiant[index][1] + "</p>")
//     } else {
//         document.write("<p>" + etudiant[index][0] + " est admis avec sa moyenne de : " + etudiant[index][1] + "</p>")
//     } 
    
// }
