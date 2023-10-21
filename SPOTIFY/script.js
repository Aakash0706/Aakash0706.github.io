// console.log("wELCOME TO SPOTIFY");
// // innitialize the variable
// let songIndex = 0;
// let audioElement = new Audio('1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let mygif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let bannerSongName = document.getElementById('bannerSongName');
// const masterSongIcon = document.querySelector('.masterSongIcon');
// const songBanner = document.querySelector('.songBanner');
// // -------------------------------------------------
// const currentTime = document.querySelector('.current-time');
// const songDuration = document.querySelector('.song-duration');
// // -------------------------------------------------------
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songs = [
//     { songName: "Sunflower", filePath: "1.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f" },
//     { songName: "It's You", filePath: "2.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b2730010b77c58ab69552922005d" },
//     { songName: "I'm Always by..", filePath: "3.mp3", coverPath: "https://images.genius.com/6dd870a2c456e1caf996a5e5afacac04.1000x1000x1.jpg" },
//     { songName: "With you", filePath: "4.mp3", coverPath: "https://upload.wikimedia.org/wikipedia/en/7/7d/Jimin_%26_Ha_Sung-woon_-_With_You.png" },
//     { songName: "Lily", filePath: "5.mp3", coverPath: "https://songspk.ink/siteuploads/thumb/sft3/1404_resize2x_210x210.webp" },
//     { songName: "Tera Ishq Bada..", filePath: "6.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e024056bfa0599a8cad7a9a88b4" },
//     { songName: "No Love", filePath: "7.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e022a46046339bd779f95a8cf8b" },
//     { songName: "Obsessed", filePath: "8.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02a90a3cbabaee190af2f972bf" },
//     { songName: "Excuses", filePath: "9.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e025b74e703d6ffb2ea16860c86" },
//     { songName: "295", filePath: "10.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae" },
//     { songName: "Elevated", filePath: "11.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0203712fdb8fc3156aee9f85af" },
//     { songName: "We Rollin", filePath: "12.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02d05cb0855dc35316da3d4036" },
//     { songName: "Still Rollin", filePath: "13.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0" },
//     { songName: "Baller", filePath: "14.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0252919a0cb296d317f6bbeebd" },
//     { songName: "Cheques", filePath: "15.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0" },
//     { songName: "Daku", filePath: "16.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02705ab6e67003b22644e62964" },
//     { songName: "Arcade x Mann..", filePath: "17.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02f57df6c1e9ae716173442ee0" },
//     { songName: "Temporary Pyar", filePath: "18.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0293a9941be37b24ef10aa49f0" },
// ]

// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// // audioElement.play();

// //Handle Play Pause CLick
// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play')
//         masterPlay.classList.add('fa-circle-pause')
//         mygif.style.opacity = 1;
//     }

//     else {
//         audioElement.pause();
//         masterPlay.classList.add('fa-circle-play')
        // masterPlay.classList.remove('fa-circle-pause')
        // mygif.style.opacity = 0;
//     }
// })
// // listen to Events
// audioElement.addEventListener('timeupdate', () => {
//     // update Seekbar
//     // myProgressBar.value = 0;
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     myProgressBar.value = progress;
// })
// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// })

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `${songIndex}.mp3`;
//         masterSongIcon.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//         songBanner.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//         masterSongName.innerText = songs[songIndex - 1].songName;
//         bannerSongName.innerText = songs[songIndex - 1].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         mygif.style.opacity = 1;
//         masterPlay.classList.remove('fa-circle-play')
//         masterPlay.classList.add('fa-circle-pause')
//     })
// })

// document.getElementById('previous').addEventListener('click', () => {
//     if (songIndex <= 0) {
//         songIndex = 0;
//     }
//     else if (songIndex <= 1) {
//         songIndex = 1;
//     }
//     else {
//         songIndex -= 1;
//     }
//     audioElement.src = `${songIndex}.mp3`;
//     masterSongIcon.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//     songBanner.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//     masterSongName.innerText = songs[songIndex - 1].songName;
//     bannerSongName.innerText = songs[songIndex - 1].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play')
//     masterPlay.classList.add('fa-circle-pause')

// })

// document.getElementById('next').addEventListener('click', () => {
//     if (songIndex >= 18) {
//         songIndex = 0;
//     }

//     else {
//         songIndex += 1;
//     }   
//     audioElement.src = `${songIndex}.mp3`;
//     masterSongIcon.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//     songBanner.style.backgroundImage = `url('${songs[songIndex - 1].coverPath}')`;
//     masterSongName.innerText = songs[songIndex - 1].songName;
//     bannerSongName.innerText = songs[songIndex - 1].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     mygif.style.opacity = 1;
//     masterPlay.classList.remove('fa-circle-play')
//     masterPlay.classList.add('fa-circle-pause')
// })





// GPT based


console.log("WELCOME TO SPOTIFY");

// Initialize variables
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let mygif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let bannerSongName = document.getElementById('bannerSongName');
const masterSongIcon = document.querySelector('.masterSongIcon');
const songBanner = document.querySelector('.songBanner');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');

// Create an array of song items
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Define an array of songs
let songs = [
    { songName: "Sunflower", filePath: "1.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f" },
    { songName: "It's You", filePath: "2.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b2730010b77c58ab69552922005d" },
    { songName: "I'm Always by..", filePath: "3.mp3", coverPath: "https://images.genius.com/6dd870a2c456e1caf996a5e5afacac04.1000x1000x1.jpg" },
    { songName: "With you", filePath: "4.mp3", coverPath: "https://upload.wikimedia.org/wikipedia/en/7/7d/Jimin_%26_Ha_Sung-woon_-_With_You.png" },
    { songName: "Lily", filePath: "5.mp3", coverPath: "https://songspk.ink/siteuploads/thumb/sft3/1404_resize2x_210x210.webp" },
    { songName: "Tera Ishq Bada..", filePath: "6.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e024056bfa0599a8cad7a9a88b4" },
    { songName: "No Love", filePath: "7.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e022a46046339bd779f95a8cf8b" },
    { songName: "Obsessed", filePath: "8.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02a90a3cbabaee190af2f972bf" },
    { songName: "Excuses", filePath: "9.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e025b74e703d6ffb2ea16860c86" },
    { songName: "295", filePath: "10.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae" },
    { songName: "Elevated", filePath: "11.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0203712fdb8fc3156aee9f85af" },
    { songName: "We Rollin", filePath: "12.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02d05cb0855dc35316da3d4036" },
    { songName: "Still Rollin", filePath: "13.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0" },
    { songName: "Baller", filePath: "14.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0252919a0cb296d317f6bbeebd" },
    { songName: "Cheques", filePath: "15.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0" },
    { songName: "Daku", filePath: "16.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02705ab6e67003b22644e62964" },
    { songName: "Arcade x Mann..", filePath: "17.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02f57df6c1e9ae716173442ee0" },
    { songName: "Temporary Pyar", filePath: "18.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e0293a9941be37b24ef10aa49f0" },
];

// Function to set song information in the UI
function setSongInfo(index) {
    audioElement.src = `${index}.mp3`;
    masterSongIcon.style.backgroundImage = `url('${songs[index - 1].coverPath}')`;
    songBanner.style.backgroundImage = `url('${songs[index - 1].coverPath}')`;
    masterSongName.innerText = songs[index - 1].songName;
    bannerSongName.innerText = songs[index - 1].songName;
}

// Function to handle play and pause
function togglePlayPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        mygif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        mygif.style.opacity = 0;
    }
}

// Function to make all play buttons inactive
function makeAllPlaysInactive() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Function to handle song item play click
function handleSongItemClick(e) {
    makeAllPlaysInactive();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    setSongInfo(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    mygif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}

// Function to handle previous song button click
function handlePreviousSongClick() {
    if (songIndex <= 0) {
        songIndex = 0;
    } else if (songIndex <= 1) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }
    setSongInfo(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}

// Function to handle next song button click
function handleNextSongClick() {
    if (songIndex >= 18) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    setSongInfo(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    mygif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}

// ...

// Function to format time (e.g., 00:00)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secondsRemainder).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

// Set the initial default value for song duration
songDuration.innerText = '00:00';

// Event listener to update current time and song duration
audioElement.addEventListener('timeupdate', () => {
    const currentTimeInSeconds = audioElement.currentTime;
    const durationInSeconds = audioElement.duration;

    // Update current time
    currentTime.innerText = formatTime(currentTimeInSeconds);

    // Check if duration is a valid number (not NaN or Infinity)
    if (!isNaN(durationInSeconds) && isFinite(durationInSeconds)) {
        // Update song duration only if it's a valid number
        songDuration.innerText = formatTime(durationInSeconds);
    }

    // Update progress bar
    const progress = (currentTimeInSeconds / durationInSeconds) * 100;
    myProgressBar.value = progress;
});

// ...

// Set initial song information
setSongInfo(songIndex);

// Event listeners
masterPlay.addEventListener('click', togglePlayPause);
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', handleSongItemClick);
});
document.getElementById('previous').addEventListener('click', handlePreviousSongClick);
document.getElementById('next').addEventListener('click', handleNextSongClick);
