

var questions = [
    {
    question: 'Est-ce que tu aimes le JavaScript ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est une évolution du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est proche du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est un langage d\'objet par prototypage?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est souvent utilisé coté client ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript peut être utilisé coté client et serveur?',
    reponse : 'Oui'
    }
    ];


    var reponseUtil = "";
    var count = 0;
    var count1 = 0;
    document.write("<h1> TO: " + questions.length + "</h1><br>");
    

    while ( (i = questions.shift()) !== undefined ) {
      console.log(i) ;
        reponseUtil = prompt( i.question + ", Saisir votre reponse OUI ou NON: ");

       if(reponseUtil.toUpperCase().trim() == i.reponse.toUpperCase()){
         count++
         console.log(i.question);
         console.log("Votre reponse: " + reponseUtil + " es correct");
       }
       else{
         console.log(i.question);
         console.log("Votre reponse: " + reponseUtil + " es Incorrect, Reponse correct: " + i.reponse.toUpperCase());
         alert ( "Votre reponse: " + reponseUtil + " es Incorrect- Reponse correct: " + i.reponse);
       }
       count1++;
       
      }

      document.write("<h1> TO: " + questions.length +"</h1><br>");

      console.log("Vous avez un total de: " + count + "reponses corrects / " + count1);
      document.write("<h1>Vous avez un total de: " + count + "reponses corrects / " + count1 +"<h1>");
 
   

    