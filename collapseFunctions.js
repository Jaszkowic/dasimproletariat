let collapseVisible = false;
function toggleCollapseElement(targetName, parentName) {
    setTimeout(function() {
        if(!collapseVisible) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${targetName}`).offset().top - $("#mainNav").height() - 16
            }, 100);
        } else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${parentName}`).offset().top - $("#mainNav").height() - 16
            }, 100);
        }
        collapseVisible = !collapseVisible;
    }, 100);
}