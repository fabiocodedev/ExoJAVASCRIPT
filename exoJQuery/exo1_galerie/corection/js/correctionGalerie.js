
$(function () {
    var allImages = $(".thumb-img img");

    console.log(allImages);
// $(".thumb-img img").each(function () {
    
// })
   // $.each(allImages,function () {
        
        $("img").on("click", function () {
            console.log($(this).attr("src"));

            // $(".full-img img").attr("src") = $(this).attr("src");
            // $(".full-img img").attr("src",$(this).attr("src"));
            
            //VERSION JOSE
            $(".full-img img").attr("src",this.src);

            // $(".full-img").text('<img src="'+$(this).attr("src")+'"/>');
            
        })
    })
//})
