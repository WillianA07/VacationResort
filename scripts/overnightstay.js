
"use strict";

window.onload = function () {
    document.getElementById("calculationsToHide").style.display = "none";
    document.getElementById("messageDiv").style.display = "none";
    document.getElementById("estimateCostButton").onclick = getRoomRate;
}

function getRoomRate() {
    document.getElementById("calculationsToHide").style.display = "block";

    const date = new Date(document.getElementById("checkinDate").value).getMonth();
    const numberOfNights = Number(document.getElementById("numberOfNights").value);
    const queenType = document.getElementById("queenType").checked;
    const kingType = document.getElementById("kingType").checked;
    const twoBedsType = document.getElementById("twoBedsType").checked;
    const numberOfAdults = Number(document.getElementById("numberOfAdults").value);
    const numberOfChildren = Number(document.getElementById("numberOfChildren").value);
    const noneDiscount = document.getElementById("noneDiscount").checked;
    const seniorDiscount = document.getElementById("seniorDiscount").checked;
    const militaryDiscount = document.getElementById("militaryDiscount").checked;
    const messageDiv = document.getElementById("messageDiv");
    const calculationsToHide = document.getElementById("calculationsToHide");

    let occupants = numberOfAdults + numberOfChildren;
    let roomCost = 0;
    let discountAmount = 0;
    let roomCostAfterDiscount = 0;

    if (queenType && occupants > 5) {
        calculationsToHide.style.display = "none";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "The room you selected will not hold your party."
    }
    else if (kingType && occupants > 2) {
        calculationsToHide.style.display = "none";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "The room you selected will not hold your party."
    }
    else if (twoBedsType && occupants > 6) {
        calculationsToHide.style.display = "none";
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "The room you selected will not hold your party."
    }
    else {
        messageDiv.style.display = "none";
    }

    if (date == 5 || date == 6 || date == 7) {
        if (queenType) {
            roomCost = 250 * numberOfNights;
        }
        else if (kingType) {
            roomCost = 250 * numberOfNights;
        }
        else if (twoBedsType) {
            roomCost = 350 * numberOfNights;
        }
    }

    else if (queenType) {
        roomCost = 150 * numberOfNights;
    }
    else if (kingType) {
        roomCost = 150 * numberOfNights;
    }
    else if (twoBedsType) {
        roomCost = 210 * numberOfNights;
    }

    if (noneDiscount) {
        roomCostAfterDiscount = roomCost;
    }
    else if (seniorDiscount) {
        discountAmount = roomCost * 0.10;
        roomCostAfterDiscount = roomCost - discountAmount;
    }
    else if (militaryDiscount) {
        discountAmount = roomCost * 0.20;
        roomCostAfterDiscount = roomCost - discountAmount;
    }

    let tax = roomCostAfterDiscount * 0.12;
    let total = roomCostAfterDiscount + tax;

    document.getElementById("originalRoomCost").value = roomCost;
    document.getElementById("discountAmount").value = discountAmount;
    document.getElementById("roomCostAfterDiscount").value = roomCostAfterDiscount;
    document.getElementById("tax").value = tax;
    document.getElementById("total").value = total;
}