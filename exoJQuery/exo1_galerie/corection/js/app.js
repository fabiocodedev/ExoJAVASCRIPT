
$("button.cache").on("click",function(){
       $("p").hide();
    });

$("button.affiche").on("click",function(){
       $("p").show();
    });
    

    console.log($(".links a "));
    // $(".links a ").css('color','red');
    $(".links a ").css({
        'color':'red',
        'background': 'green',
    });



  $('button').on("click", function () {
    // console.log('ok')
    $('img').toggle(3000);
    $('button').text( ($('button').text() == 'Afficher' ? 'Cachée' : 'Afficher') )
  })


  //EACH

  $( "li" ).each(function( index ) {
    console.log("Tour :" +index);
    console.log( index + ": " + $( this ).text() );
  });

  var tab = ['aaa','bbb','ccc','ddd'];
$.each (tab, function (index, valeur) {
 console.log (index+':'+valeur)
});


$.each ($ ('.container'), function ( index, valeur) {
      console.log (index + ':' + $ (valeur) .text ());
     });
    
console.log("=========================================");
     // OBJECTS
const obj = {
     un: 1,
     deux: 2,
     trois: 3,
     quatre: 4,
     cinq: 5
    };
    
    $.each (obj, function (index, valeur) {
      console.log (index+':'+ valeur);
    });
    
//========== EQ - EQUALS ===========
console.log("==========================EQ");
console.log($(".container").eq(1));


console.log("==========================GET");

console.log($(".container").get());

$("p").on("click", function () {
    console.log("Je suis cliqué");
})


