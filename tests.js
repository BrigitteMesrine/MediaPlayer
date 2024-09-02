// Recuperer les éléments json et les transformer en nouveau html
function trackSongCard() {
    tableMusic.forEach((track, i) => {
        let card = document.createElement("figure");
        card.className = "card";
        card.innerHTML =
            `<img src="${track.image}" alt="${track.title}">
                <figcaption class="title">${track.title}</figcaption>
                <figcaption>${track.author}</figcaption>;`
        card.addEventListener("click", () => loadTrack(i));
        songGrid.appendChild(card);
    });
}

trackSongCard();


if (tabPlaylist[i].length > 12) {
    titleElement[i].innerHTML = tabPlaylist[i].name.slice(0, 12) + "<br>" + tabPlaylist[i].name.slice(12)
}
if (tabPlaylist[i].length > 12) {
    artistElement[i].innerHTML = tabPlaylist[i].artist.slice(0, 12) + "<br>" + tabPlaylist[i].artist.slice(12)
}