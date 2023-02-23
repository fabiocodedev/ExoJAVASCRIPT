
// ------------------------------ AFFICHER ENLEVER LISTE MDP

document.getElementById("pass").onfocus = siClickP;
document.getElementById("pass").onblur = siPasClickP;

function siClickP() {
  document.getElementById("passList").style.display="block";
}

function siPasClickP() {
  document.getElementById("passList").style.display="none"
}


// ------------------------------ AFFICHER ENLEVER EXEMPLE MAIL

document.getElementById("email").onfocus = siClickM;
document.getElementById("email").onblur = siPasClickM;

function siClickM() {
  document.getElementById("formatMail").style.display="block";
}

function siPasClickM() {
  document.getElementById("formatMail").style.display="none"
}


// --------------------- controle mot de passe + mail
let secret = document.getElementById("pass");


let mini = document.getElementById("min");
let maju = document.getElementById("maj");
let nbre = document.getElementById("nb");
let spec = document.getElementById("spe");
let longeur = document.getElementById("long");

let mail = document.getElementById("email")

let msge = document.getElementById("formatMail")

///--- regex

regex0 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
regex1 = /[a-z]/;
regex2 = /[A-Z]/;
regex3 = /[0-9]/;
regex4 = /[!\@#$\%^\&\*]/;
regex5 = /^[a-zA-Z0-9!\@#$\%^\&\*]{8,15}$/;

regex6 = /^[a-zA-Z0-9!\@#$\%^\&\*]+\@(([a-zA-Z0-9]+\.))+([a-zA-Z0-9]{2,3})+$/


// ----------------EVENEMENT


// ----MAIL

document.getElementById("email").addEventListener("keyup" , function () {
  if (regex6.test(mail.value)) {
        msge.classList.add("ok")
        msge.classList.remove("nok")
  } else {
         msge.classList.add("nok")
         msge.classList.remove("ok")
  }
})

// ----MDP

document.getElementById("pass").addEventListener("keyup" ,function() {
  
  // IF mini
      if (regex1.test(secret.value)) {
        mini.classList.add("ok")
        mini.classList.remove("nok")
      } else {
        mini.classList.add("nok")
        mini.classList.remove("ok")
      }
  // IF maju
      if (regex2.test(secret.value)) {
        maju.classList.add("ok")
        maju.classList.remove("nok")
      } else {
        maju.classList.add("nok")
        maju.classList.remove("ok")
      }
  // IF nbre
      if (regex3.test(secret.value)) {
        nbre.classList.add("ok")
        nbre.classList.remove("nok")
      } else {
        nbre.classList.add("nok")
        nbre.classList.remove("ok")
      }
  // IF spec
      if (regex4.test(secret.value)) {
        spec.classList.add("ok")
        spec.classList.remove("nok")
      } else {
        spec.classList.add("nok")
        spec.classList.remove("ok")
      }
  // IF longeur
      if (regex5.test(secret.value)) {
        longeur.classList.add("ok")
        longeur.classList.remove("nok")
      } else {
        longeur.classList.add("nok")
        longeur.classList.remove("ok")
      }


})


// ----- FONCTIONS PREDEFINI !!!

// onclick == sous condition du clic
// onblur == si curseur inactif
// onfocus == si curseur actif
// test  == compare 



// ---------EVENEMENTS

// keyup
// mouseover


// ------------------------- AFFICHER MSG ERREUR


function verif(envent) {
  event.preventDefault();
  
let listElement = document.querySelectorAll("input[type=text], input[type=password]");

let msn = "Saissisez entre 5 et 15 caractères";


listElement.forEach(element => {
// capturer les element dfinit par listeElement

  if (element.value == "" || element.value <=4 || element.value >=16) {
     document.getElementById(element.name + "Error").innerHTML = msn ;
  //  concataine le nom de l'element avec "Error" + y fait apparaitre let msn
  } else {
    document.getElementById(element.name + "Error").innerHTML = "";
  }

});

}

