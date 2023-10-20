const musicArray=
[{song:'musics/wasted.mp3'},{song:'musics/03 Perfect.mp3'},{song:'musics/long night.mp3'}]

const song1=musicArray[0].song;
const song2=musicArray[1].song;
const song3=musicArray[2].song;

const wastedAudio=document.querySelector('.song1');
const perfectAudio=document.querySelector('.song2');
const longNightAudio=document.querySelector('.song3');
const button1=document.querySelector('.playPause1');
const button2=document.querySelector('.playPause2');
const button3=document.querySelector('.playPause3');


const wastedPlay=new Audio(song1);
const perfectPlay=new Audio(song2)
const longNightPlay=new Audio(song3)
const playPause=new Audio(song1);

wastedAudio.addEventListener('click',(()=>
{
    
    if(wastedPlay.paused)
    {
        listSongPlay('wastedAudio');
        button1.innerHTML='<i class="fa-solid fa-play" ></i>'

    } 
    else
    {
        listSongPause();
        button1.innerHTML='<i class="fa-solid fa-pause" ></i>'
    }   
}))
perfectAudio.addEventListener('click',(()=>
{
    if(perfectPlay.paused)
    {
        listSongPlay('perfectAudio');
        button2.innerHTML='<i class="fa-solid fa-pause" ></i>'
    } 
    else
    {
        listSongPause();
        button2.innerHTML='<i class="fa-solid fa-play" ></i>'

    }   
}))
longNightAudio.addEventListener('click',(()=>
{
    if(longNightPlay.paused)
    {
        listSongPlay('longNightAudio');
        button3.innerHTML='<i class="fa-solid fa-pause" ></i>'

    } 
    else
    {
        listSongPause();
        button3.innerHTML='<i class="fa-solid fa-play" ></i>'
    }   
}))

const listSongPlay=(action)=>
{
    
    
    if(action==='wastedAudio')
    {
        wastedPlay.play();
        perfectPlay.pause();
        perfectPlay.currentTime=0;
        longNightPlay.pause();
        longNightPlay.currentTime=0;
        
    }
    if(action==='perfectAudio')
    {
        perfectPlay.play();
        wastedPlay.pause();
        wastedPlay.currentTime=0;
        longNightPlay.pause();
        longNightPlay.currentTime=0;
    }
    if(action==='longNightAudio')
    {
        longNightPlay.play();
        wastedPlay.pause();
        wastedPlay.currentTime=0;
        perfectPlay.pause();
        perfectPlay.currentTime=0;
        
    }

}
const listSongPause=()=>
{
    wastedPlay.pause();
    perfectPlay.pause();
    longNightPlay.pause();
}



