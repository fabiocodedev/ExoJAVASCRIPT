$("button").on("click", function () {
    
    var saisiUser = $("#pal").val();
    console.log("Dans un premier temps:" +saisiUser);
    
    var saisiUserSplit = saisiUser.split("")
    console.log("Apres split:" +saisiUserSplit);
    
    // on compare les deux tableaux
    var saisiUserSplitReverse = saisiUserSplit.reverse()
    console.log("Apres split reverse:" +saisiUserSplitReverse);

    // var saisiUserReverse = saisiUserSplitReverse.toString().replaceAll(",","");
    var saisiUserReverse = saisiUserSplitReverse.join("");
    console.log("Apres reverse:" +saisiUserReverse);

    if (saisiUser == saisiUserReverse) {
        console.log("pal");
        $(".alert").html(saisiUser + " est un pal").addClass("alert-success").removeClass("alert-danger");
        $(".alert").css("display","block");
    } else {
        $(".alert").html(saisiUser + " n'est pas un pal").addClass("alert-danger").removeClass("alert-success");
        $(".alert").css("display","block");
        console.log("pas pal");
    }

})