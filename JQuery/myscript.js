$("h1").click(function () {
  $(this).text("Malai change garyo !");
});

//KEY PRESS
$("input")
  .eq(0)
  .keypress(function (event) {
    if (event.which === 97) {
      $("h3").toggleClass("turnBlue");
    }
  });

//on()
$("h1").on("dblclick", function () {
  $(this).toggleClass("turnBlue");
});

$("h1").on("mouseenter", function () {
  $(this).toggleClass("turnBlue");
});

$("input")
  .eq(1)
  .on("click", function () {
    $(".container").fadeOut(3000);
  });
