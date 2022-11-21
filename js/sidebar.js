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
    showText();
    localStorage.setItem("sidebarOpen", true);
    console.log("Set sidebar to true");
}

function closeSidebar() {
    closedSize = "80px"
    // make sidebar less wide, lessen margin to main display
    document.getElementById("sidebar").style.width = closedSize;
    pages = document.getElementById("main").children;
    for(let i = 0; i < pages.length; i++) pages[i].style.marginLeft = closedSize;
    document.getElementById("closebtn").style.display = "none"; // hide close button
    document.getElementById("openbtn").style.display = "block"; // show open button
    hideText();
    localStorage.setItem("sidebarOpen", false);
    console.log("Set sidebar to false");

}
function showText() {
    
}
function hideText() {
   
}