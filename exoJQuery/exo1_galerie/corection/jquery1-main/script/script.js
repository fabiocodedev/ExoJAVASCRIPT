/**************************************************
 **********            Qqs exemples
 ****************************************************/
// console.log($.fn.jquery);
// console.log($(".toto").html());

// // $(".toto").html("Bonjour");

// // console.log($(".toto >  p:nth-child(4)").html("Testtest"));

// // console.log($(".tutu"));

// $(".tutu").each(function (index) {
//   console.log(`${index} : ${$(this).text()}`);
// });

/**************************************************
 **********            Partie galerie
 ****************************************************/

for (let i = 1; i <= 8; i++) {
  let nom_image = `pizza${i}.jpg`;
  let image = document.createElement("img");
  image.src = `./assets/${nom_image}`;
  image.width = "100";
  image.height = "100";
  image.style.border = "solid 4px";
  image.style.borderRadius = "10px";
  $(".thumb-img").append(image);
}

$("div img").each(function (index) {
  $(this).on("click", function () {
    $(".full-img>img").attr("src", $(this).attr("src"));
    $(".full-img>img").animate(
      { width: "100px", height: "100px", opacity: "0" },
      "slow"
    );
    $(".full-img>img").animate(
      { width: "400px", height: "400px", opacity: "1" },
      "slow"
    );
  });
});

/**************************************************
 **********            Palindrome
 ****************************************************/
let response = document.createElement("div");
response.style.margin = "20px auto 10px";
response.style.width = "80%";
let test = document.createTextNode("palindrome");

$(".test").on("click", function () {
  let texte = $(".palindrome").val();
  if (
    texte.toUpperCase() === texte.split("").reverse().join("").toUpperCase()
  ) {
    response.style.backgroundColor = "rgb(152, 195, 152)";
    response.style.color = "green";
    test.textContent = `${texte} est un palindrome`;
  } else {
    response.style.backgroundColor = "rgba(234, 147, 147, 0.692)";
    response.style.color = "red";
    test.textContent = `${texte} n'est pas  un palindrome`;
  }
  response.appendChild(test);
  $(".palindrome-container").append(response);
});
