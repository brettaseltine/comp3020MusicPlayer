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
    resetIconColours();
    document.getElementById("home").style.color = "red";
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


