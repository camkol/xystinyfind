var one = "#ffffff",
  two = "#10e88a",
  three = "#7f3995",
  four = "#0d78e7",
  five = "#f88f18",
  six = "#bb6774",
  seven = "#ffffff";

$(window).on("scroll touchmove", function () {
  if ($(document).scrollTop() >= $("#one").position().top) {
    $("body").css("background", $("#one").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#two").position().top) {
    $("body").css("background", $("#two").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#three").position().top) {
    $("body").css("background", $("#three").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#four").position().top) {
    $("body").css("background", $("#four").attr("data-color"));
  }
  if ($(document).scrollTop() >= $("#five").position().top) {
    $("body").css("background", $("#five").attr("data-color"));
  }
  if ($(document).scrollTop() >= $("#six").position().top) {
    $("body").css("background", $("#six").attr("data-color"));
  }
  if ($(document).scrollTop() >= $("#seven").position().top) {
    $("body").css("background", $("#seven").attr("data-color"));
  }
});
