var dateContainers = document.getElementsByClassName("date-container");
var detailContainers = document.getElementsByClassName("row");

function sticky() {
    for (var i = 0; i < dateContainers.length; i++) {

        var yAxis_bottomVal = detailContainers[detailContainers.length - 1].offsetTop + detailContainers[detailContainers.length - 1].offsetHeight;
        var date_cntnr = dateContainers[i];

        var stDt_element = document.getElementsByClassName("sticky-date")[0];
        var stDt_style = window.getComputedStyle(stDt_element);
        var stDt_padTop = parseInt(stDt_style.getPropertyValue("padding-top").split("px")[0])
            + parseInt(stDt_style.getPropertyValue("padding-bottom").split("px")[0]);
            // + (parseInt(stDt_style.getPropertyValue("height").split("px")[0])) * 0.75;

        console.log("Windows Y offset: " + window.pageYOffset);
        console.log("Sticky Container #" + i + ": " + date_cntnr.offsetTop);
        console.log("padding-top: " + stDt_padTop);
        console.log("yAxis_bottomVal: " + yAxis_bottomVal);

        if (window.pageYOffset >= (date_cntnr.offsetTop - stDt_padTop)) {
            console.log("1.Sticky Container #" + i + " got FIXED on: " + window.pageYOffset + ">= " + (date_cntnr.offsetTop - stDt_padTop));
            console.log("----");
            date_cntnr.classList.add("fixed");
        } else {
            console.log("2.Sticky Container #" + i + " got UN-FIXED on: " + window.pageYOffset + ">= " + (date_cntnr.offsetTop - stDt_padTop));
            console.log("||||");
            date_cntnr.classList.remove("fixed");
        }
        if (window.pageYOffset >= (date_cntnr.offsetTop - stDt_padTop) + yAxis_bottomVal) {
            console.log("3.Sticky Container #" + i + " got BOTTOM FIXED on: " + window.pageYOffset + ">= " + ((date_cntnr.offsetTop - stDt_padTop) + yAxis_bottomVal));
            console.log("----");
            date_cntnr.classList.add("fixedBottom");
        }
        else {
            console.log("4.Sticky Container #" + i + " got BOTTOM UN-FIXED on: " + window.pageYOffset + ">= " + ((date_cntnr.offsetTop - stDt_padTop) + yAxis_bottomVal));
            console.log("||||");
            date_cntnr.classList.remove("fixedBottom");
        }
        console.log("\n\n");
    }
}
window.onscroll = function () {
    sticky();
}