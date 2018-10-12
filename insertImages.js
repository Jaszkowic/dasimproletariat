window.onload = function() {
    let shows = [{name: '2606', numImgs: 2}, {name: '0810', numImgs: 27}];
    for (let n = 0; n < shows.length; n++) {
        let show = shows[n];
        for (let i = 1; i <= show.numImgs; i++) {
            let scrName = (i < 10) ? `0${i}.jpg` : `${i}.jpg`;
            let initHtmlToInsert = `<div class=\"carousel-item active\"><img src=\"img/shows/${show.name}/${scrName}\" alt=\"\" style=\"width: 100%; height: 100%; object-fit: contain;\"></div>`;
            let htmlToInsert = `<div class=\"carousel-item\"><img src=\"img/loading.png\" data-src=\"img/shows/${show.name}/${scrName}" alt=\"\" style=\"width: 100%; height: 100%; object-fit: contain;\"></div>`;
            let chosenHtml = (i == 1) ? initHtmlToInsert : htmlToInsert;
            let showId = `show${show.name}imagesContainer`;
            document.getElementById(showId).insertAdjacentHTML('afterbegin',chosenHtml);
        }
    }
}
