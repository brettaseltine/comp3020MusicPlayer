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
    
}
function hideText() {
   
}