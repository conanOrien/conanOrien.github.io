$(document).ready(function() {
    $("#header").load("../header.html");
    $("#footer").load("../footer.html").delay("200");
    $("body").removeClass('.wrapper').fadeIn("1000");
});