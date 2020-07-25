$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".design-show").toggle();
    $(".design-hide").toggle();
  });
  $(".clickable2").click(function() {
    $(".development-show").toggle();
    $(".development-hide").toggle();
  });
  $(".clickable3").click(function() {
    $(".productManagement-show").toggle();
    $(".productManagement-hide").toggle();
  });
});
