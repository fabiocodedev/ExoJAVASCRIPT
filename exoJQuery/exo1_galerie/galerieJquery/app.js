// cheminement :
// 1 detecter le clic sur les images
// 2 faire une boucle pour donner un id a chaque image 
// 3 remplacer la source de l'image principale = src

// --------------------------------------------------------------------------------------------------

let clicImg = $(".imgHomer");

$(clicImg).each(function () {
    // console.log(ça boucle !);
    $(".imgHomer").on("click" , function () {
        // console.log$(this).attr("src");
        $("#div1 img").attr("src" , $(this).attr("src") )
       } )
})