function toggleLeft() {
  const cardArray = document.querySelectorAll(".card");
  const tempCard_Node = cardArray[0];
  cardArray[0].className = "card move-out-from-left";
  setTimeout(function () {
      if (cardArray.length > 5) {
          tempCard_Node.classList.add("card--hide");
          cardArray[5].className = "card move-to-position5-from-left";
      }
      cardArray[1].className = "card move-to-position1-from-left";
      cardArray[2].className = "card move-to-position2-from-left";
      cardArray[3].className = "card move-to-position3-from-left";
      cardArray[4].className = "card move-to-position4-from-left";
      cardArray[0].remove();
      document.querySelector(".card-list").appendChild(tempCard_Node);
  }, 500);
}
function toggleRight() {
  const cardArray = document.querySelectorAll(".card");
  cardArray[4].className = "card move-out-from-right";
  setTimeout(function () {
      const numCards = cardArray.length;
      if (numCards > 4) {
          cardArray[4].className = "card card--hide";
      }
      const tempCard_Node = cardArray[numCards - 1];
      tempCard_Node.classList.remove("card--hide");
      cardArray[numCards - 1].remove();
      let cardList_Obj = document.querySelector(".card-list");
      cardList_Obj.insertBefore(tempCard_Node, cardList_Obj.firstChild);
      tempCard_Node.className = "card move-to-position1-from-right";
      cardArray[0].className = "card move-to-position2-from-right";
      cardArray[1].className = "card move-to-position3-from-right";
      cardArray[2].className = "card move-to-position4-from-right";
      cardArray[3].className = "card move-to-position5-from-right";
  }, 500);
}


/** ---------- */
var dateContainers = document.getElementsByClassName("date-container");
var detailContainers = document.getElementsByClassName("row");

function sticky() {
  for (var i = 0; i < dateContainers.length; i++) {

    var yAxis_bottomVal = detailContainers[detailContainers.length - 1].offsetTop + detailContainers[detailContainers.length - 1].offsetHeight;
    var date_cntnr = dateContainers[i];

    var stDt_element = document.getElementsByClassName("sticky-date")[0];
    var stDt_style = window.getComputedStyle(stDt_element);
    var stDt_padTop = parseInt(stDt_style.getPropertyValue("padding-top").split("px")[0])
      + parseInt(stDt_style.getPropertyValue("padding-bottom").split("px")[0])
      + (parseInt(stDt_style.getPropertyValue("height").split("px")[0])) * 0.75;

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

