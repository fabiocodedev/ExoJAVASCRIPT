document.querySelector('#message').onkeyup=function(){
   
    document.querySelector('#message').style.backgroundColor="red";
}

    // document.querySelector('#firstname').addEventListener("keyup",test)
    


// document.querySelector("#submit").onclick = verif;

document.querySelector("#submit").onclick = function () {
    verif(event);
}

function verif(event) {
    event.preventDefault();
    let firstname= document.querySelector("#firstname");
    if ((firstname.value.length < 5 || firstname.value.length > 10)) {
        
        document.querySelector("#firstnameError").innerHTML = " firstnameError n'est pas valide !"
    } else {
        document.querySelector("#firstnameError").innerHTML = ""
        
    }

    //POUR LE MAIL
/ /    
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    var regex_new = /^([\w\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/g;
    if (!regex.test(document.getElementById('email').value)) { 
        // ((firstname.value.length < 5 || firstname.value.length > 10)) {
            
        document.querySelector("#emailError").innerHTML = " email n'est pas valide !"
    } else {
        document.querySelector("#emailError").innerHTML = ""
        
    }
}

function calcul() {
    var qte = document.querySelector('#qte').value;
    var prix = document.querySelector('#prix').value;
    
    var total = qte*prix;
    
    document.querySelector('#total').value = total;
}

document.querySelector('#qte').addEventListener("keyup", calcul)
    