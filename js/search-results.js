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
    buttons = document.getElementsByClassName("songTableBtn");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('onClick', "parent.nextTrack();parent.playAction()");
    }
    // playlists = document.getElementById("playlist_row").children;
    // for(let i = 0; i < songs.length; i++){
    //     songs[i].setAttribute('onClick', "showPlaylistPopup()");
    // }
}

function showAlbumPopup(){
    document.getElementById("albumForm").style.display = "block";
}
function closeAlbumPopup(){
    document.getElementById("albumForm").style.display = "none";
}
// function showPlaylistPopup(){
//     document.getElementById("playlistPopup").style.display = "block";
// }
// function closePlaylistPopup(){
//     document.getElementById("playlistPopup").style.display = "none";
// }