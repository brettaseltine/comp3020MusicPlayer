const searchParam = document.getElementById("searchQuery");

function showResults(){
    document.write(searchParam);
}

function initializeHandlers(){
    songs = document.getElementById("song_row").children;
    for(let i = 0; i < songs.length; i++){
        songs[i].setAttribute('onClick', "parent.nextTrack()");
    }
    albums = document.getElementById("album_row").children;
    for(let i = 0; i < albums.length; i++){
        albums[i].setAttribute('onClick', "showAlbumPopup()");
    }
    playlists = document.getElementById("playlist_row").children;
    for(let i = 0; i < playlists.length; i++){
        playlists[i].setAttribute('onClick', "showPlaylistPopup()");
    }
    buttons = document.getElementsByClassName("songTableBtn");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('onClick', "parent.nextTrack();parent.playAction()");
    }
}

function showAlbumPopup(){
    document.getElementById("playlistForm").style.display = "none";
    document.getElementById("albumForm").style.display = "block";
}
function closeAlbumPopup(){
    document.getElementById("albumForm").style.display = "none";
}
function showPlaylistPopup(){
    document.getElementById("albumForm").style.display = "none";
    document.getElementById("playlistForm").style.display = "block";
}
function closePlaylistPopup(){
    document.getElementById("playlistForm").style.display = "none";
}