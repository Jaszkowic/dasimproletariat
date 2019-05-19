let collapseVisible = {};
let lazyActivated = false;

function toggleCollapseElement(targetName, parentName) {

    if(collapseVisible[targetName] === undefined) {
        collapseVisible[targetName] = false;
    }

    if(!lazyActivated) {
        $(".carousel").on("slide.bs.carousel", function(ev) {
            let lazy = $(ev.relatedTarget).find("img[data-src]");
            lazy.attr("src", lazy.data('src'));
            lazy.removeAttr("data-src");
        });
        lazyActivated = true;
    }

    setTimeout(function() {
        const mainNavHeight = $("#mainNav").innerHeight();
        if(!collapseVisible[targetName]) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${targetName}`).offset().top - mainNavHeight - 16
            }, 100);
        } else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${parentName}`).offset().top - mainNavHeight - 16
            }, 100);
        }
        collapseVisible[targetName] = collapseVisible[targetName] = !collapseVisible[targetName];
    }, 100);
}