let sidebarOpen = localStorage.getItem("sidebarOpen");
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
    
    runSidebar();
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
}
function showLibraryPage() {
    clearPages();
    document.getElementById("libraryPage").style.display = "block";
}
function showHistoryPage() {
    clearPages();
    document.getElementById("historyPage").style.display = "block";
}
function showSettingsPage() {
    clearPages();
    document.getElementById("settingsPage").style.display = "block";
}
function showFullscreenPlayer() {
    clearPages();
    document.getElementById("fullscreenPlayer").style.display = "block";
    document.getElementById("closefspbutton").style.display = "block";
}
function closeFullscreenPlayer() {
    document.getElementById("fullscreenPlayer").style.display = "none";
    document.getElementById("closefspbutton").style.display = "none";
}

function clearPages() {
    pages = document.getElementsByClassName("page");
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
}