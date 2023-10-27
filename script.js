
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlback = document.getElementById("ctrlback");
let ctrlforw = document.getElementById("ctrlforw");
let timer = document.querySelector(".timer");
let duration = document.getElementById("duration");



    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
        duration.textContent = formatTime(song.duration);
    };

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
    timer.textContent = formatTime(song.currentTime);
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


function playfrwd() {
    if (song.currentTime + 5 < song.duration) {
        song.currentTime += 5;
    }
}


function playbrwd() {
    if (song.currentTime - 5 > 0) {
        song.currentTime -= 5;
    }
}

progress.onclick = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

progress.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    const test = (tempSliderValue / song.duration) * 100;

    progress.style.background = `linear-gradient(to right, #f50 ${test}%, #ccc ${test}%)`;
})