$(document).ready(function() {
    $("#main").load("nav.html").delay("200");
    $("body").removeClass('.preload').fadeIn("1000");
});