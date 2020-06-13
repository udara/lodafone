$(document).ready(function() {
  // This file just does a GET request t
  // and updates the HTML on the page
  $.get("/api/customers").then(function(data) {
    $("#customer").text(data.first_name);
  });
});