$(document).ready(function() {
    try {
        $("#header").load("header.html");
        $("#footer").load("footer.html").delay("200");
        $("body").removeClass('.wrapper').fadeIn("1000");
    } finally {
        $("#header").load("../header.html");
        $("#footer").load("../footer.html").delay("200");
        $("body").removeClass('.wrapper').fadeIn("1000");
    }
});