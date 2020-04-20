const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const background = document.querySelector("#bg");
const pp = document.querySelector("#play-pause");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");

var playing = true;

function playPause(){
    if(playing){
        song.play(); //play the song
        playing = false;
        thumbnail.src= "/album/LP-InTheEnd.jpg";
    }
    else{
        song.pause();
        playing = true;
    }
}