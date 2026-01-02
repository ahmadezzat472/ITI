$(document).ready(function () {
  /** heading */
  $("#btn-blue").click(function () {
    $("#main-heading").css("backgroundColor", "blue");
    $("#main-heading").css("color", "white");
  });
  $("#btn-red").click(function () {
    $("#main-heading").css("backgroundColor", "red");
    $("#main-heading").css("color", "white");
  });
  $("#btn-green").click(function () {
    $("#main-heading").css("backgroundColor", "green");
    $("#main-heading").css("color", "white");
  });

  /** magic box */
  $("#btn-magic").click(function () {
    $("#magic-box").toggleClass("magic");
  });

  /** secret message */
  $("#btn-secret").click(function () {
    $("#secret-message").toggle();
  });

  /** counter */
  $("#btn-counter").click(function () {
    var value = $("#counter-value").text();
    $("#counter-value").text(+value + 1);
  });
});
