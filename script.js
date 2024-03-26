var arr = [
    {songName: 'Arjan Vailey', url: './songs/Arjan Vailly Ne.mp3', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filmibeat.com%2Fph-big%2F2023%2F01%2Fanimal-2023_167264941510.jpg&f=1&nofb=1&ipt=ca959651357d835bc685411a83d06a5e863a3098724f0a6941a1c5d47124c512&ipo=images', time: '3:00'},
    {songName: '7 years', url: './songs/Lukas-Graham-7-Years-(JustNaija.com).mp3', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTMPEL0oK7MQ%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=c1681df4bf09e290a81735ee9a77cd0db2306edc03215185e8909c37157c1be0&ipo=images', time: '3:00'},
    {songName: 'Luffy UK Drill', url: './songs/Jale 2.mp3', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsJcponXw_RM%2Fhqdefault.jpg&f=1&nofb=1&ipt=3aac3aaff32fd41612784748124cdc42d1595779f801e21689524ce94c9f7c9d&ipo=images', time: '3:00'},
    {songName: 'Expert Jatt', url: './songs/Pehle Bhi Main.mp3', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM7iKhTxhEuA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=e3f7b20d4f0f0aeab0aad5eddf4e61912cf013c0d9d64703634ff5cabe42ab9d&ipo=images', time: '3:00'}
]

var audio = new Audio()
var allSongs = document.querySelector('.all-songs')
var play = document.querySelector('#play')
var back = document.querySelector('#backward')
var fore = document.querySelector('#forward')
var selectedSong = 0

function mainFunction(){
    var clutter = ''
    arr.forEach((song, i) => {
    clutter += `<div class="song-card" id=${i}>
        <div class="part1">
            <img src="${song.img}" alt="">
            <h2>${song.songName}</h2> 
        </div>
            <h6>${song.time}</h6>
    </div>`    
    })
    audio.src = arr[selectedSong].url
    allSongs.innerHTML = clutter
}
mainFunction()



allSongs.addEventListener('click', (details)=> {
    var image = arr[details.target.id].img
    document.querySelector('#songImage').src = image

    selectedSong = details.target.id
    audio.play()
})

var flag = 0
play.addEventListener('click', ()=> {
    if (flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0

    }
})

