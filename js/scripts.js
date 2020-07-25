$(document).ready(function () {
  $("form#contacts").submit(function(event) {

    var names= $("#name").val();
    var email= $("#email").val();
    var message = $("#YourMessage").val();
    alert("Dear " +names+ ",email address "+ email+ ",your message has been received. Thank you for contacting us");
    event.preventDefault();

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
});
