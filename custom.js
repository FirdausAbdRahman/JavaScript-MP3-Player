const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const background = document.querySelector("#bg");
const pp = document.querySelector("#play-pause");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");
const playOrder = document.querySelector("#repeat-song");
const moreOpt = document.querySelector("#more-options");
const listOfOptions = document.querySelector("#list-of-options");
const options = document.querySelector("#options");

let playing = true;
let clicking = true;

let songs = ["/album/LP-InTheEnd.mp3", "/album/LP-NewDivide.mp3", "/album/Spektrem-Shine.mp3", "/album/AW-AllFallDown.mp3"], songIndex = 0;
let thumbnails = ["/album/LP-InTheEnd.jpg", "/album/LP-NewDivide.jpg", "/album/Spektrem-Shine.jpg", "/album/AW-AllFallDown.png" ];
let songNames = ["Linkin Park- In The End", "Linkin Park - New Divide", "Spektrem - Shine", "Alan Walker - All Fall Down"];

function playPause(){
    if(playing){
        song.play();    //NOTE play the song
        playing = false;
        thumbnail.src= thumbnails[songIndex];
        songTitle.innerHTML = songNames[songIndex];
        thumbnail.style.transform = "scale(1.2)";
        pp.classList.remove("fa-play");
        pp.classList.add("fa-pause");
    }
    else{
        song.pause();   //NOTE pause the song
        playing = true;
        thumbnail.style.transform = "scale(1.0)";
        pp.classList.remove("fa-pause");
        pp.classList.add("fa-play");
    }
}

function nextSong(){
    songIndex++;
    if(songIndex > 3) songIndex = 0;
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    pp.classList.remove("fa-play");
    pp.classList.add("fa-pause");
    song.play();
    songTitle.innerHTML = songNames[songIndex];
    thumbnail.style.transform = "scale(1.2)";
}

function previousSong(){
    songIndex--;
    if(songIndex < 0) songIndex = 3;
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    pp.classList.remove("fa-play");
    pp.classList.add("fa-pause");
    song.play();
    songTitle.innerHTML = songNames[songIndex];
    thumbnail.style.transform = "scale(1.2)";
}

function updateProgressValue(){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}

setInterval(updateProgressValue, 700);

function changeProgressValue(){
    song.currentTime = progressBar.value;
}

function moreOptions(){
    if(clicking){
        listOfOptions.style.visibility= "visible";
        options.style.visibility = "visible";
        clicking = false;
    }else{
        listOfOptions.style.visibility= "hidden";
        options.style.visibility = "hidden";
        clicking = true;
    }
    
}

function songStatus(){    //TODO pending
    if(clicking){
        playOrder.classList.remove("fa-repeat");
        playOrder.classList.add("fa-random");
        clicking = false; 
        randomOrder();
    }else{
        playOrder.classList.remove("fa-random");
        playOrder.classList.add("fa-repeat");
        clicking = true;
        repeatOrder();
    }
}

function randomOrder(){    //TODO pending
    song.src = songs[Math.floor(Math.random()*songs.length)];
    playPause();
}

function repeatOrder(){     //TODO pending
    playPause();
}