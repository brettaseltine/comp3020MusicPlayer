//-----------------------------------------------------------------
// SIDEBAR FUNCTIONS
//-----------------------------------------------------------------
function openSidebar() {
    expandedSize = "250px";
    // make sidebar wider, and add margin to main display
    document.getElementById("sidebar").style.width = expandedSize;
    pages = document.getElementById("main").children;
    for(let i = 0; i < pages.length; i++) pages[i].style.marginLeft = expandedSize;
    document.getElementById("closebtn").style.display = "block"; // show close button
    document.getElementById("openbtn").style.display = "none";   // hide open button

    document.getElementById("home").style.fontSize = "25px";
    document.getElementById("library").style.fontSize = "25px";
    document.getElementById("history").style.fontSize = "25px";
    document.getElementById("settings").style.fontSize = "25px";


    showText();
    localStorage.setItem("sidebarOpen", true);
}

function closeSidebar() {
    closedSize = "100px"
    // make sidebar less wide, lessen margin to main display
    document.getElementById("sidebar").style.width = closedSize;
    pages = document.getElementById("main").children;
    for(let i = 0; i < pages.length; i++) pages[i].style.marginLeft = closedSize;
    document.getElementById("closebtn").style.display = "none"; // hide close button

    document.getElementById("openbtn").style.display = "block"; // show open button
    document.getElementById("openbtn").style.border = "none";  

    document.getElementById("home").style.fontSize = "15px";
    document.getElementById("library").style.fontSize = "15px";
    document.getElementById("history").style.fontSize = "15px";
    document.getElementById("settings").style.fontSize = "15px";

    hideText();
    localStorage.setItem("sidebarOpen", false);

}
function showText() {
    document.getElementById("home").innerHTML = `<i class="fa fa-home"></i> Home`;
    document.getElementById("library").innerHTML = `<i class="fa fa-book"></i> Library`;
    document.getElementById("history").innerHTML = `<i class="fa fa-clock"></i> History`;
    document.getElementById("settings").innerHTML = `<i class="fa fa-gear"></i> Settings`;
    
}
function hideText() {
    document.getElementById("home").innerHTML = `<i class="fa fa-home"></i>`;
    document.getElementById("library").innerHTML = `<i class="fa fa-book"></i>`;
    document.getElementById("history").innerHTML = `<i class="fa fa-clock"></i>`;
    document.getElementById("settings").innerHTML = `<i class="fa fa-gear"></i>`;
}