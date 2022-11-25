let sidebarOpen = localStorage.getItem("sidebarOpen");
let currentTrack = document.createElement('audio');
let trackList = [
    {
        title: "Hey Jude",
        artist: "The Beatles",
        image: "./Images/albumcovers/21.jpg",
        path: "./music/The Beatles - Hey Jude.mp3"
    },
    {
        title: "Black Skinhead",
        artist: "Kanye West",
        image: "./Images/albumcovers/15.jpg",
        path: "./music/Kanye West - Black Skinhead.mp3"
    },
    {
        title: "Antidote",
        artist: "Travis Scott",
        image: "./Images/albumcovers/ts.jpg",
        path: "./music/Travis Scott - Antidote.mp3"
    },
];
let currentIdx = 0;
let playing = false;


function setup() {
    // add event listeners here
    document.getElementById("closebtn").addEventListener("click", closeSidebar);
    document.getElementById("openbtn").addEventListener("click", openSidebar);
    document.getElementById("home").addEventListener("click", showHomePage);
    document.getElementById("library").addEventListener("click", showLibraryPage);
    document.getElementById("history").addEventListener("click", showHistoryPage);
    document.getElementById("settings").addEventListener("click", showSettingsPage);
    document.getElementById("spExpandbtn").addEventListener("click", showFullscreenPlayer)
    document.getElementById("closefspbutton").addEventListener("click", closeFullscreenPlayer);
    document.getElementById("playbtn").addEventListener("click", playAction);
    document.getElementById("pausebtn").addEventListener("click", pauseAction);
    document.getElementById("nextbtn").addEventListener("click", nextTrack);
    document.getElementById("prevbtn").addEventListener("click", prevTrack);
    
    runSidebar();
    resetIconColours();
    document.getElementById("home").style.color = "red";

    loadTrack(currentIdx);
}

function runSidebar() {
    var isSideBarOpen = (localStorage.getItem("sidebarOpen") === 'true');
    if(isSideBarOpen){
        openSidebar();
    }
    else{
        closeSidebar();
    }
}

//-----------------------------------------------------------------
// PAGE CHANGING FUNCTIONS
//-----------------------------------------------------------------

function showHomePage() {
    clearPages();
    document.getElementById("homePage").style.display = "block";
    document.getElementById("home").style.color = "red";
}
function showLibraryPage() {
    clearPages();
    document.getElementById("libraryPage").style.display = "block";
    document.getElementById("library").style.color = "red";
}
function showHistoryPage() {
    clearPages();
    document.getElementById("historyPage").style.display = "block";
    document.getElementById("history").style.color = "red";
}
function showSettingsPage() {
    clearPages();
    document.getElementById("settingsPage").style.display = "block";
    document.getElementById("settings").style.color = "red";
}
function showSearchResultsPage() {
    clearPages();
    document.getElementById("searchResultsPage").style.display = "block";
}
function showFullscreenPlayer() {
    document.getElementById("fullscreenPlayer").style.display = "block";
    document.getElementById("closefspbutton").style.display = "block";
}
function closeFullscreenPlayer() {
    document.getElementById("fullscreenPlayer").style.display = "none";
    document.getElementById("closefspbutton").style.display = "none";
}

function clearPages() {
    resetIconColours();
    pages = document.getElementsByClassName("page");
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
}

function resetIconColours() {
    document.getElementById("home").style.color = "black";
    document.getElementById("library").style.color = "black";
    document.getElementById("history").style.color = "black";
    document.getElementById("settings").style.color = "black";
}

//----------------------------------------
// SMALL MUSIC PLAYER BUTTON FUNCS
//----------------------------------------
function playAction() {
    document.getElementById("playbtn").style.display = "none";
    document.getElementById("pausebtn").style.display = "inline"
    currentTrack.play();
    playing = true;
}

function pauseAction() {
    document.getElementById("pausebtn").style.display = "none";
    document.getElementById("playbtn").style.display = "inline";
    currentTrack.pause();
    playing = false;
}

function loadTrack(trackIdx){
    currentTrack.src = trackList[trackIdx].path;
    currentTrack.load();
    document.getElementById("songTitle").innerText = trackList[trackIdx].title;
    document.getElementById("songArtist").innerText = trackList[trackIdx].artist;
    document.getElementById("songImage").src = trackList[trackIdx].image;
    if(playing){
        currentTrack.play();
    }
}

function nextTrack(){
    if ((currentIdx + 1) > trackList.length - 1){
        currentIdx = 0;
    }
    else{
        currentIdx += 1;
    }
    loadTrack(currentIdx);
}

function prevTrack(){
    // Can add some functionality here where you restart the current song if it has been playing for a while 
    if ((currentIdx - 1) < 0)
    {
        currentIdx = trackList.length - 1;
    }
    else{
        currentIdx -= 1;
    }
    loadTrack(currentIdx);
}