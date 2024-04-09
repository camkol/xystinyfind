$(document).ready(() => {
  $(".presser").on("click", (event) => {
    $(event.currentTarget).siblings(".views").slideToggle();
  });

  $(".navbar-toggler").on("click", () => {
    $("#navbarSupportedContent").slideToggle("slow");
  });
});
