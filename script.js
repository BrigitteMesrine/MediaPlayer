const trackPlayer = new Audio();
const defaultTracks = new Array();
const covers = document.getElementsByClassName("cover");
const titles = document.getElementsByClassName("titleName")
const artists = document.getElementsByClassName("artistName")
const playButton = document.getElementById("play");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")
const muteButton = document.getElementById("lowerVolume")
const cardBox = document.getElementsByClassName("titlesBox")

// track object
class AudioTrack {
    constructor(title, artist, src, img) {
        this.title = title;
        this.artist = artist;
        this.src = src;
        this.img = img;
    }
}

// defaultTracks.push(new AudioTrack("Grown Up", "Danny Brown", "tracks/Danny Brown - Grown Up (Explicit).mp3", "pochettes/grownup.jpg"));
// defaultTracks.push(new AudioTrack("Anissa", "Wejdene", "tracks/Wejdene - Anissa (Lyrics).mp3", "pochettes/anissa.jpg"));
// defaultTracks.push(new AudioTrack("The Hero!!", "JAM Project", "tracks/One Punch Man - Official Opening - The Hero!! Set Fire to the Furious Fist.mp3", "pochettes/thehero.jpg"));
// defaultTracks.push(new AudioTrack("Highway Star", "Deep Purple", "tracks/Deep Purple - Highway Star.mp3", "pochettes/highwaystar.jpg"));
// defaultTracks.push(new AudioTrack("Batarsité", "Danyèl Waro", "tracks/Batarsité.mp3", "pochettes/batarsité.jpg"));
// defaultTracks.push(new AudioTrack("Magic Music", "Thierry Pastor", "tracks/Magic Music (version longue).mp3", "pochettes/magicmusic.jpg"));
// defaultTracks.push(new AudioTrack("Désert (LIVE)", "Sékou Kouyaté Trio", "tracks/Sékou Trio - Désert (LIVE).mp3", "pochettes/desert.jpg"));
// defaultTracks.push(new AudioTrack("Patty Cake", "Kodak Black", "tracks/Kodak Black - Patty Cake [Official Music Video].mp3", "pochettes/pattycake.jpg"));
// defaultTracks.push(new AudioTrack("Electric Yarghol", "Acid Arab", "tracks/Acid Arab - Electrique Yarghol (feat. Hasan Minawi).mp3", "pochettes/electricyarghol.jpg"));
// defaultTracks.push(new AudioTrack("Glidin'", "Pa Salieu ft. slowthai", "tracks/Pa Salieu feat slowthai - Glidin' (Official Video).mp3", "pochettes/glidin.jpg"));
// defaultTracks.push(new AudioTrack("「夜に駆ける」", "YOASOBI", "tracks/noname.mp3", "pochettes/noname.jpg"));
// defaultTracks.push(new AudioTrack("En quarantaine", "Jul", "tracks/En quarantaine.mp3", "pochettes/enquarantaine.jpg"));
// defaultTracks.push(new AudioTrack("Dobagna", "Moh Kouyaté", "tracks/Dobagna.mp3", "pochettes/dobagna.jpg"));
// defaultTracks.push(new AudioTrack("Boys", "Charli XCX", "tracks/Charli XCX - Boys [Official Video].mp3", "pochettes/boys.png"));
// defaultTracks.push(new AudioTrack("Tokyo Driftin", "Glass Animals", "tracks/Glass Animals  Tokyo Drifting (with Denzel Curry)  Official Audio.mp3", "pochettes/tokyodrifting.jpg"));
// defaultTracks.push(new AudioTrack("Mode Avion", "Favé", "tracks/Favé - Mode Avion (Clip Officiel).mp3", "pochettes/modeavion.jpg"));

defaultTracks.push(new AudioTrack("Blue Skies", "Silent Partner", "tracks/Blue_Skies.mp3", "pochettes/150/1.jpg"))
defaultTracks.push(new AudioTrack("Cartoon Hoedown", "Media Right Productions", "tracks/Cartoon_Hoedown.mp3", "pochettes/150/2.jpg"))
defaultTracks.push(new AudioTrack("Earthy Crust", "JinglePunks", "tracks/Earthy_Crust.mp3", "pochettes/150/3.jpg"))
defaultTracks.push(new AudioTrack("Hold on a minute", "Silent Partner", "tracks/Hold_On_a_Minute.mp3", "pochettes/150/4.jpg"))
defaultTracks.push(new AudioTrack("John Dunbar Theme", "City of Prague Philarmonic", "tracks/JohnDunbarTheme.mp3", "pochettes/150/5.jpg"))
defaultTracks.push(new AudioTrack("Stay with you", "Silent Partner", "tracks/Stay_With_You.mp3", "pochettes/150/6.jpg"))
defaultTracks.push(new AudioTrack("Symphony n°5", "Beethoven", "tracks/Symphony_No_5_by_Beethoven.mp3", "pochettes/150/7.jpg"))
defaultTracks.push(new AudioTrack("Blue_Skies", "Silent Partner", "tracks/Blue_Skies.mp3", "pochettes/150/1.jpg"))

document.getElementById("player").style.visibility = "hidden";
trackPlayer.volume = 0.5;
let currentTrack = defaultTracks[0];
// defining click listener for each cover

defaultTracks.forEach((track, i) => {
    let card = document.createElement("figure");
    card.className = "titlesBox";
    card.innerHTML =
        `<img class ="cover" src="${track.img}" alt="${track.title}">
                <a href="" class="titleName">${track.title}</a>
                <a href="" class="artistName">${track.artist}</a>`
    document.getElementById("titlesSpan").appendChild(card);
});

for (let i = 0; i < defaultTracks.length; i++) {
    covers[i].addEventListener("click", function () {
        stopSong();
        trackPlayer.src = defaultTracks[i].src;
        currentTrack = defaultTracks[i];
        setDisplay()
        playSong();
        for (let j = 0; j < defaultTracks.length; j++) {
            cardBox[j].style.boxShadow = "0px 0px 8px black"
            cardBox[j].style.backgroundColor = "#282828"
        }
        cardBox[i].style.boxShadow = "0px 0px 8px white"
        cardBox[i].style.backgroundColor = "#404040"
        document.getElementById("player").style.visibility = "visible";
    });

    covers[i].src = defaultTracks[i].img;
    artists[i].innerText = defaultTracks[i].artist;
    titles[i].innerText = defaultTracks[i].title;
}

playButton.addEventListener("click", e => {
    if (trackPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
})

nextButton.addEventListener("click", function () {
    console.log("test");
    for (let i = 0; i < defaultTracks.length; i++) {
        console.log(defaultTracks[i].src);
        console.log(trackPlayer.src);
        if (currentTrack == defaultTracks[i] && i < defaultTracks.length - 1) {
            stopSong();
            trackPlayer.src = defaultTracks[i + 1].src;
            currentTrack = defaultTracks[i + 1];
            playSong();
            setDisplay();
            cardBox[i].style.boxShadow = "0px 0px 8px black"
            cardBox[i + 1].style.boxShadow = "0px 0px 8px white"
            cardBox[i].style.backgroundColor = "#282828"
            cardBox[i + 1].style.backgroundColor = "#404040"
            break
        } else if (i == defaultTracks.length - 1) {
            stopSong();
            trackPlayer.src = defaultTracks[0].src;
            currentTrack = defaultTracks[0];
            playSong();
            setDisplay();
            cardBox[i].style.boxShadow = "0px 0px 8px black"
            cardBox[0].style.boxShadow = "0px 0px 8px white"
            cardBox[i].style.backgroundColor = "#282828"
            cardBox[0].style.backgroundColor = "#404040"
            break
        }
    }
})

previousButton.addEventListener("click", function () {
    for (let i = 0; i < defaultTracks.length; i++) {
        if (currentTrack == defaultTracks[i] && i != 0) {
            stopSong();
            trackPlayer.src = defaultTracks[i - 1].src;
            currentTrack = defaultTracks[i - 1];
            playSong();
            setDisplay();
            cardBox[i].style.boxShadow = "0px 0px 8px black"
            cardBox[i - 1].style.boxShadow = "0px 0px 8px white"
            cardBox[i].style.backgroundColor = "#282828"
            cardBox[i - 1].style.backgroundColor = "#404040"
        } else if (currentTrack == defaultTracks[i]) {
            stopSong();
            trackPlayer.src = defaultTracks[defaultTracks.length - 1].src;
            currentTrack = defaultTracks[defaultTracks.length - 1];
            playSong();
            setDisplay();
            cardBox[i].style.boxShadow = "0px 0px 8px black"
            cardBox[defaultTracks.length - 1].style.boxShadow = "0px 0px 8px white"
            cardBox[i].style.backgroundColor = "#282828"
            cardBox[defaultTracks.length - 1].style.backgroundColor = "#404040"
            break
        }
    }
    console.log("test");
})

function playSong() {
    trackPlayer.play();
    progressUpdate();
    playButton.innerHTML = "&#10074;&#10074;";
    if (matchMedia('only screen and (max-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "0px";
    }
    if (matchMedia('only screen and (min-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "0px";
    }
    playButton.style.fontWeight = "bold";
    playButton.style.fontSize = "32px";
}

function pauseSong() {
    trackPlayer.pause();
    playButton.innerHTML = "&#9658;";
    if (matchMedia('only screen and (max-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "4px";
    }
    if (matchMedia('only screen and (min-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "5px";
    }
    playButton.style.fontWeight = "regular";
    playButton.style.fontSize = "36px";
}

function stopSong() {
    trackPlayer.pause();
    trackPlayer.currentTime = 0;
    playButton.innerHTML = "&#9658;";
    if (matchMedia('only screen and (max-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "4px";
    }
    if (matchMedia('only screen and (min-width: 996px)').matches) {
        console.log("test");
        document.getElementById("play").style.textIndent = "5px";
    }
    playButton.style.fontWeight = "regular";
    playButton.style.fontSize = "36px";
}

function switchSong(index) {
    for (let i = 0; i < defaultTracks.length; i++) {
        if (trackPlayer.src == defaultTracks[i].src) {
        }
    }
}

let currentVolume;
volume.addEventListener('input', function () {
    trackPlayer.muted = false;
    trackPlayer.volume = (this.value / 100);
    currentVolume = trackPlayer.volume;
    if (trackPlayer.volume == 0) {
        muteButton.innerHTML = "&#128264;"
    } else if (trackPlayer.volume < 0.5) {
        muteButton.innerHTML = "&#128265;"
    } else if (trackPlayer.volume >= 0.5) {
        muteButton.innerHTML = "&#128266;"
    }
}, false);

function progressUpdate() {
    setTimeout(function () {
        progress.value = (100 / trackPlayer.duration) * trackPlayer.currentTime * 10;
        console.log(progress.value)
        if (!trackPlayer.paused) {
            progressUpdate();
        }
        console.log(trackPlayer.currentTime);
        if (trackPlayer.currentTime == trackPlayer.duration) {
            stopSong();
            progress.value = 0;
        }
    }, 100);
}

progress.addEventListener("input", function () {
    trackPlayer.currentTime = (trackPlayer.duration / 100) * progress.value / 10;
})

function setDisplay() {
    document.getElementById("artistName").innerText = currentTrack.artist;
    document.getElementById("titleName").innerText = currentTrack.title;
    document.getElementById("playedTitle").src = currentTrack.img;
}

muteButton.addEventListener("click", function () {
    if (!trackPlayer.muted) {
        trackPlayer.muted = true;
        volume.value = 0;
        muteButton.innerHTML = "&#128264;"
    } else {
        trackPlayer.muted = false;
        volume.value = currentVolume * 100;
        if (currentVolume == 0) {
            muteButton.innerHTML = "&#128264;"
        } else if (currentVolume < 0.5) {
            muteButton.innerHTML = "&#128265;"
        } else if (trackPlayer.volume >= 0.5) {
            muteButton.innerHTML = "&#128266;"
        }
    }
})



