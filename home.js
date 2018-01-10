// BEGIN ALL-PAGE JS //

shows_on = false;

$(document).ready(function () {
    $("html").click(function(e) {
        if (shows_on && e.target.nodeName != "A") {
            $("#dl_shows").slideUp(function() {
                $("#dl_shows").removeClass("show");
                shows_on = false
            });
        };
    });

    $("#dd_shows").click(function() {
        if (!shows_on) {
            $("#dl_shows").slideDown(function() {
                $("#dl_shows").addClass("show");
                shows_on = true
            });
        }
    });
});

//  END ALL-PAGE JS //