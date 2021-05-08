const audio = document.getElementById('media1');
const tc = document.getElementById('timecode');
const square = document.getElementById('blinking');

tc.textContent = 0;

audio.addEventListener('timeupdate', (event) => {
    tc.textContent = audio.currentTime;
    let ti = parseInt(audio.currentTime);
    if (ti % 2 == 0) {
        square.style.color = "red";
    } else {
        square.style.color = "black";
    }
});

function audio_play() {
    audio.play();
}
