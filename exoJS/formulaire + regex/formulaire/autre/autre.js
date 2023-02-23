/************************************* */
document.getElementById('submit').onclick = function(e) {
    e.preventDefault(); // annulation du comportement du bouton submit qui a pour rôle de recharger la page
    resultat(); // execution d'une fonction déclarée ci-dessous
  };


//ICI, je recupére tous les inputs de text dans une variable allInputss
var allInputs = document.querySelectorAll("input[type=text]");


function resultat(e)
{
    
    allInputs.forEach(element => {
        if (element.value == "" || element.value.length < 5 || element.value.length > 15) {
        
        document.querySelector('#'+element.name+'Error').innerHTML = "Le "+element.name+ " doit être compris entre 5 et 15 caractères";
        document.getElementById(''+element.name+'').style.border = "2px solid #D38774";
        }else
        {
            document.querySelector('#'+element.name+'Error').innerHTML = "";
            document.querySelector('#'+element.name+'').style.border = "";
        }
    });

}

//ADDEVENTLISTENER pour afficher / retirer le message d'erreur
allInputs.forEach(element => {
    console.log(element);
    element.addEventListener("keyup",function () {
        resultat();
    })
});


/***** GESTION DU MOT DE PASSE *******/
var mdp = document.querySelector("#mdp");

mdp.onfocus =  function () {
    document.querySelector(".invalid-pwd").style.display="block";

    mdp.addEventListener("keyup", function () {

        //Miniscule
        var regex_miniscule = /[a-z]/;
        if (regex_miniscule.test(mdp.value)) {
            document.querySelector("#minis").classList.add("valid")
            document.querySelector("#minis").classList.remove("invalid")
        } else {
            document.querySelector("#minis").classList.remove("valid")
            document.querySelector("#minis").classList.add("invalid")
        }

        //Maj
        var regex_maj = /[A-Z]/;
        if (regex_maj.test(mdp.value)) {
            document.querySelector("#maj").classList.add("valid")
            document.querySelector("#maj").classList.remove("invalid")
        } else {
            document.querySelector("#maj").classList.remove("valid")
            document.querySelector("#maj").classList.add("invalid")
        }

        //Chiffre
        var regex_chiffre = /[0-9]/;
        if (regex_chiffre.test(mdp.value)) {
            document.querySelector("#chiffre").classList.add("valid")
            document.querySelector("#chiffre").classList.remove("invalid")
        } else {
            document.querySelector("#chiffre").classList.remove("valid")
            document.querySelector("#chiffre").classList.add("invalid")
        }

        //Caractéres spéciaux
        var regex_special = /[!?\.+-]/;
        if (regex_special.test(mdp.value)) {
            document.querySelector("#special").classList.add("valid")
            document.querySelector("#special").classList.remove("invalid")
        } else {
            document.querySelector("#special").classList.remove("valid")
            document.querySelector("#special").classList.add("invalid")
        }

        //Taille mot de passe
        if (mdp.value.length > 7) {
            document.querySelector("#taille").classList.add("valid")
            document.querySelector("#taille").classList.remove("invalid")
        } else {
            document.querySelector("#taille").classList.remove("valid")
            document.querySelector("#taille").classList.add("invalid")
        }
    })
}

mdp.onblur =  function () {
    console.log(mdp);
    document.querySelector(".invalid-pwd").style.display="none";
}