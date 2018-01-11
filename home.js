// BEGIN ALL-PAGE JS //

var navtab_active = null;
var anchor_queued = null;

function navtab_id(e) {
    var anchor_id = e.toString();
    anchor_queued = anchor_id.replace("a_", "#nt_");
};

function reveal(nt) {
    $(nt + " a").hide().delay(150).fadeIn(600);
    $(nt).slideDown(750, function() {
        navtab_active = nt;
        anchor_queued = null;
    });
};

function hide(nt) {
    $(nt + " a").show().fadeOut(600);
    $(nt).slideUp(750, function() {
        navtab_active = null;
    });   
};

$(document).ready(function () {
    $("html").click(function(e) {
        if (navtab_active == null) {
            reveal(anchor_queued);
        } else if (anchor_queued == null && e.target.nodeName != "A") {
            hide(navtab_active);
        } else if (anchor_queued != null && anchor_queued != navtab_active) {
            hide(navtab_active);
            reveal(anchor_queued);
        } else {
            anchor_queued = null;
        };
    });
});

//  END ALL-PAGE JS //