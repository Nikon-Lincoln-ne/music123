//INTIALIZING SONGS
const longNightAudio=new Audio('musics/long night.mp3');
const perfectAudio=new Audio('musics/03 Perfect.mp3');
const godBlessAudio=new Audio('musics/god bless the dead.m4a');
const wastedAudio=new Audio('musics/wasted.mp3');
const nightChangesAudio=new Audio('musics/07 Night Changes.m4a');

const songsArray=[
    {song:longNightAudio, audioName:'Long Night'},
    {song:perfectAudio, audioName:'Perfect'},
    {song:godBlessAudio, audioName:'God Bless The Dead'},
    {song:wastedAudio, audioName:'Wasted'},
    {song:nightChangesAudio, audioName:'Night Chnages'}
]

//INITIALIZING BUTTONS
let songName=document.querySelector('.musicname');
let previous=document.querySelector('.backward');
let playSong=document.querySelector('.play-btn');
let next=document.querySelector('.forward');
//MAKING AUDIO WORK
let current=0;
let currentSong=songsArray[current].song;
songName.textContent=songsArray[current].audioName


playSong.addEventListener('click',()=>
{
    playPause()
}
)
next.addEventListener('click',()=>
{
updateSong('next');
playPause()
})
previous.addEventListener('click',()=>
{
    updateSong('previous');
    playPause()
})
const updateSong=(action)=>
{
    currentSong.pause()
    currentSong.currentTime=0;
    if(action==='next')
    {
        current++;
        if(current>songsArray.length-1)
            current=0;
    }
    if(action==='previous')
    {
        current--;
        if(current<0)
        {
            current=songsArray.length-1;
        }
    }
    currentSong=songsArray[current].song;
    songName.textContent=songsArray[current].audioName
}
const playPause=()=>
{
    if(currentSong.paused)
    {
        currentSong.play()
            playSong.innerHTML='<i class="fa-solid fa-pause"><i>'       
    }
    else
    {
        currentSong.pause()
        playSong.innerHTML='<i class="fa-solid fa-play"></i>'
    }
}
for( const element of songsArray)
{
    element.song.addEventListener('ended',()=>
    {
        updateSong('next');
        playPause()
    })
}