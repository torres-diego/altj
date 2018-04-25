let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let music = document.getElementById("music");
let musicPlayer = true;

playBtn.onclick = function(){
    console.log('Play Button CLicked');
    pauseBtn.style.display = 'block';
    playBtn.style.display = 'none';
    music.play();
}
pauseBtn.onclick = function(){
    console.log('Pause Button Clicked');
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    music.pause();
}