let collapseVisible = {};
function toggleCollapseElement(targetName, parentName) {
    
    if(collapseVisible[targetName] === undefined) {
        collapseVisible[targetName] = false;
    }
    setTimeout(function() {
        if(!collapseVisible[targetName]) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${targetName}`).offset().top - $("#mainNav").height() - 16
            }, 100);
        } else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${parentName}`).offset().top - $("#mainNav").height() - 16
            }, 100);
        }
        collapseVisible[targetName] = collapseVisible[targetName] = !collapseVisible[targetName];
    }, 100);
}