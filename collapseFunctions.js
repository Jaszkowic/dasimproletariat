let collapseVisible = {};
function toggleCollapseElement(targetName, parentName) {

    if(collapseVisible[targetName] === undefined) {
        collapseVisible[targetName] = false;
    }
    setTimeout(function() {
        const mainNavHeight = $("#mainNav").innerHeight();
        if(!collapseVisible[targetName]) {
            console.log(mainNavHeight);
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