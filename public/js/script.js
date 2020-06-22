$(document).ready(function() {

  $.get("/api/customers").then(function(data) {
    $("#customer").text(data.first_name);
  });
});