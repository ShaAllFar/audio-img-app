var imgSongArray = [];

function ImgSong(picName,picFilepath,audioName, audioFilePath){
  this.picName = picName;
  this.picFilepath = picFilepath;
  this.audioName = audioName;
  this.audioFilePath = audioFilePath;
  imgSongArray.push(this);
}
new ImgSong('me','images/me.jpg','blessings','audio/blessings.mp3');

function displayImgSong(){
  var img = document.getElementById('img');
  var player = document.getElementById('player');
  img.src = imgSongArray[0].picFilepath;
  player.src = imgSongArray[0].audioFilePath;
}

function playSong(){
  var player = document.getElementById('player');
  if(player.play()){
    player.pause();
  }else{
    player.play();
  }
}

function handleMouseOver(event){
  playSong();
}
var playerPlay = document.getElementById('img');
playerPlay.addEventListener('mouseover', handleMouseOver);
