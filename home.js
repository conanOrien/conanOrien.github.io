// BEGIN ALL-PAGE JS //

navtabon = false;

function navtabshow(nt) {
    if (!navtabon) {
        $(nt).show("slide", {direction: "left"}, 750);
        $(nt + " a").hide().delay(150).fadeIn(600);
        navtabon = true;
    };
};

/*function navtabswitch(nt_before, nt_after)*/

function navtabhide(nt) {
    if (navtabon) {
        $(nt).hide("slide", {direction: "left"}, 750);
        $(nt + " a").show().fadeOut(600);
        navtabon = false;
    };
};

$(document).ready(function () {
    $("html").click(function(e) {
        if (navtabon && e.target.nodeName != "A") {
            navtabhide("#nt_shows");
        };
    });
    
    $("#a_shows").click(function() {
        navtabshow("#nt_shows");
    });
});

//  END ALL-PAGE JS //