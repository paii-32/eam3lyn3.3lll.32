const songs = [
    {
        title: "About you",
        artist: "The 1975",
        src: "SpotiDownloader.com - About You - The 1975.mp3",
        cover: "Lirik-lagu-About-You-The-1975.jpg"
    },
    {
        title: "Blue",
        artist: "Yung Kai",
        src: "spotifydown.com - blue.mp3",
        cover: "Blue.jpg"
    },
    {
        title: "Cinta luar biasa",
        artist: "Andmesh",
        src: "spotifydown.com - Cinta Luar Biasa.mp3",
        cover: "cinta luar biasa cover gambar.jpg"
    },
    {
        title: "Kasih putih",
        artist: "Glenn fredly",
        src: "SpotiDownloader.com - Kasih Putih - Yovie Widianto.mp3",
        cover: "Kasih putih.jpg"
    },
    {
        title: "Rahasia hati",
        artist: "Nidji",
        src: "spotifydown.com - Rahasia Hati.mp3",
        cover: "Rahasia hati nidji.jpg"
    },
    {
        title: "Season",
        artist: "Wave to earth",
        src: "v4.www-y2mate.blog - wave to earth - seasons (320 KBps).mp3",
        cover: "wave to earth.jpg"
    }
];

let currentSong = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const playlist = document.getElementById('playlist');

function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = "pause";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "play";
}

playBtn.addEventListener('click', () => {
    if (audio.paused) playSong();
    else pauseSong();
});

nextBtn.addEventListener('click', () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    playSong();
});

prevBtn.addEventListener('click', () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    playSong();
});

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${song.title}`;
    li.addEventListener("click", () => {
        currentSong = index;
        loadSong(currentSong);
        playSong();
    });
    playlist.appendChild(li);
});

loadSong(currentSong);
