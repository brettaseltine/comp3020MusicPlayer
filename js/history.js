var dateContainers = document.getElementsByClassName("date-container");
var detailContainers = document.getElementsByClassName("detail-container");

function sticky() {
    for (var i = 0; i < dateContainers.length; i++) {

        var yAxis_bottomVal = detailContainers[dateContainers.length - 1].offsetBottom;
        var date_cntnr = dateContainers[i];

        console.log("Windows Y offset: " + window.pageYOffset);
        console.log("Sticky Container #" + i + ": " + date_cntnr.offsetTop);

        if (window.pageYOffset >= date_cntnr.offsetTop) {
            console.log("1.Sticky Container #" + i + " got FIXED on: " + window.pageYOffset + ">= " + date_cntnr.offsetTop);
            console.log("----");
            date_cntnr.classList.add("fixed");
        } else {
            console.log("2.Sticky Container #" + i + " got UN-FIXED on: " + window.pageYOffset + ">= " + date_cntnr.offsetTop);
            console.log("||||");
            date_cntnr.classList.remove("fixed");
        }
        if (window.pageYOffset >= date_cntnr.offsetTop + yAxis_bottomVal) {
            console.log("3.Sticky Container #" + i + " got BOTTOM FIXED on: " + window.pageYOffset + ">= " + (date_cntnr.offsetTop + yAxis_bottomVal));
            console.log("----");
            date_cntnr.classList.add("fixedBottom");
        }
        else {
            console.log("4.Sticky Container #" + i + " got BOTTOM UN-FIXED on: " + window.pageYOffset + ">= " + (date_cntnr.offsetTop + yAxis_bottomVal));
            console.log("||||");
            date_cntnr.classList.remove("fixedBottom");
        }
        console.log("\n\n");
    }
}
window.onscroll = function () {
    sticky();
}