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