const mail = document.querySelector("#email");
const mailErreur = document.querySelector("#reqEmail");

mail.addEventListener("keyup", () => {
  regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (regex.test(mail.value)) {
    mailErreur.innerHTML = "";
  } else {
    mailErreur.innerHTML =
      "L'email ne respecte pas le format monAdresse@monDomain.fr";
  }
});




/****************************************** */

var mdp = document.querySelector("#pass");
var msn1 = document.querySelector("#num");
var msn2 = document.querySelector("#esp");
var msn3 = document.querySelector("#min");
var msn4 = document.querySelector("#maj");
var msn5 = document.querySelector("#char");

regex0 = /^\d$/;
regex1 = /^[!@#$%^&*]$/;
regex2 = /^[a-z]$/;
regex3 = /^[A-Z]$/;
regex4 = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;


mdp.onfocus = function() {
    document.querySelector("#password").style.display="block";
}
mdp.onblur = function() {
    document.querySelector("#password").style.display="none";
}

mdp.addEventListener("keyup", pre);
function pre() {
    text = mdp.value;
    text1 = text.charAt(text.length - 1) 
console.log("entra"+ text1);

    if (regex0.test(text1)) {
        msn1.classList.add("valid");
    } else {
        msn1.classList.add("invalid");
    }

    if (regex1.test(text1)) {
        msn2.classList.add("valid");
    } else {
        msn2.classList.add("invalid");
    }

    if (regex2.test(text1)) {
        msn3.classList.add("valid");
    } else {
        msn3.classList.add("invalid");
    }

    if (regex3.test(text1)) {
        msn4.classList.add("valid");
    } else {
        msn4.classList.add("invalid");
    }
    if (regex4.test(text)) {
        msn5.classList.add("valid");
    } else {
        msn5.classList.add("invalid");
    }

}
 


  

function verif(event){
event.preventDefault();







const champs = document.querySelectorAll(".champ");

Object.values("champs").forEach ((element)  => {
   // const idElement = element.getAttribute("id");
   // console.log("1" + idElement);

});

var firsName = document.getElementById("firsName");
var lastName = document.getElementById("lastName");
var pseudo = document.getElementById("pseudo");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var tel = document.getElementById("tel");
var message = document.getElementById("message");


var error = 7;


var formulaire = document.getElementById("form");
console.log(formulaire);

////**********firsName */


if((firsName.value.length < 5) || (firsName.value.length > 15) ){

    document.getElementById("reqFirstName").innerHTML = "Le firstname doit être compris entre 5 et 15 caractères " ;
    
    firsName.addEventListener("focus", function() {
        firsName.value = "";
        document.getElementById("reqFirstName").innerHTML = "";
    });
}else{
    document.getElementById("reqPseudo").innerHTML = "" ;
    error--;
}


////**********lastName */
if(lastName.value.length < 5 || lastName.value.length > 15 ){

    document.getElementById("reqLastName").innerHTML = "Le lastName doit être compris entre 5 et 15 caractères" ;
}else{
    document.getElementById("reqLastName").innerHTML = "" ;
    error--;
}

////**********Pseudo */
if(pseudo.value.length < 5 || pseudo.value.length > 15 ){

    document.getElementById("reqPseudo").innerHTML = "Le pseudo doit être compris entre 5 et 15 caractères" ;
}else{
    document.getElementById("reqPseudo").innerHTML = "" ;
    error--;
}


////**********email */
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    document.getElementById("reqEmail").innerHTML = "email invalid - Le email doit être compris avec le format: example@example.fr/.com" ;
}else{
    document.getElementById("reqEmail").innerHTML = "" ;
    error--;
}

////**********pass */
// console.log(pass.value);
// let regex = new RegExp();
// regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

// document.querySelector("#pass").addEventListener("keyuo"), function() {

//     console.log(document.querySelector("#pass").value);
// }

if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pass.value)){

    document.getElementById("reqMotPass").innerHTML = "Votre mot de passe doit se composer: majuscules, minuscules, chiffres et caractères spéciaux (@#$%)." ;
}else{
    document.getElementById("reqMotPass").innerHTML = "" ;
    error--;
}

////**********tel */

if(!/^\d{10}$/.test(tel.value)){

    document.getElementById("reqTel").innerHTML = "Le numéro telephone doit se composer pour chiffres." ;
}else{
    document.getElementById("reqTel").innerHTML = "" ;
    error--;
}

////**********message */
if((message.value.length < 5) || (message.value.length > 15) ){

    document.getElementById("reqMenssage").innerHTML = "Le message doit être compris entre 5 et 15 caractères";
}else{
    document.getElementById("reqMenssage").innerHTML = "";
    error--;
}

if(error > 0 ){
    document.getElementById("msm").innerHTML = "Vous avez: " + error + " errors";
}
else{
    //document.body.append(form);
    formulaire.submit();

    document.getElementById("msm").innerHTML = "Vous informations, ils sont été envoyés.";

}

}

