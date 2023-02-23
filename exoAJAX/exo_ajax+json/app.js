

// AJAX : RECUP D'AUTRES PAGE POUR LES AFFICHER DANS LA PAGE PRINCIPALE SANS RECHARGER LA PAGE PRINCIPALE

$(".navLink").on("click", function (event) {
    event.preventDefault();
    // PERMET DE BLOQUER LE RECHARGEMENT DE LA PAGE A L'EVENEMENT "CLICK"

    $.ajax({
        url:$(this).attr('href'), 
        // datatype:"text",
        // cache:false,
        success:function (data) {
            $("div").html(data)
        },
        error:function (xhr, status, text) {
            console.log("je suis le code erreur n° : "+xhr.status);
            console.log("le status est un code de type : "+status);
            console.log("le message d'erreur est : "+text);
        }
    })
})





//   JSON ---------------------------------
// AFFICHE LE JSON ------------------------

$.ajax({
    url:("eleve.json"),
    datatype:"json",
    success:function (data) {
        
        var listEleve = "<div>";
        // console.log(listEleve);
        
            // console.log(data);
        for (let i = 0; i < data.eleve.length; i++) {
            
            
            
            var nomEleve = data.eleve[i].nom;
            var prenomEleve = data.eleve[i].prenom;
            var moyenneEleve = data.eleve[i].moyenne;
            
            listEleve += "<p>";
            listEleve += nomEleve+" ";
            listEleve += prenomEleve+" ";
            listEleve += moyenneEleve+" ";
            listEleve += "</p>"; 
        };
        
        listEleve += "</div>";
        
        // console.log(listEleve);
        
      
        $("#tab1").html(listEleve)
    },
    error:function (xhr, status, text) {
            console.log("je suis le code erreur n° : "+xhr.status);
            console.log("le status est un code de type : "+status);
            console.log("le message d'erreur est : "+text);
    }
})


// AFFICHE LES ADMIS -----------------------------------------------------------------------


$.ajax({
    url:("eleve.json"),
    datatype:"json",
    success:function (data) {
        
        var nom  = [];
        var moyenne = [];

        $(data).each(function (index) {

            nom  += data.eleve[index].nom;
            moyenne += data.eleve[index].moyenne;

            console.log(nom);
            
            if (moyenne >= 10) {
                $("#tab2").html(nom+" est admis avec la moyenne de : "+moyenne).css("color","green");
            } else {
                $("#tab3").html(nom+" n'est pa admis avec la moyenne de : "+moyenne).css("color","red");
            }
        })
    },
    error:function (xhr, status, text) {
            console.log("je suis le code erreur n° : "+xhr.status);
            console.log("le status est un code de type : "+status);
            console.log("le message d'erreur est : "+text);
    }
})


// ---------------GEO MARC ------------------------

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log("Votre position actuelle est :");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);






















