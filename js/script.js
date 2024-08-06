"use strict";

const tabBox = document.querySelectorAll(".tab-box");
const arrow = document.querySelectorAll(".arrow");
const hiddenInfo = document.querySelectorAll(".hidden-info");

arrow[0].addEventListener("click", function () {
  if (hiddenInfo[0].classList.contains("hidden")) {
    hiddenInfo[0].classList.remove("hidden");
    tabBox[0].classList.add("change-color");
  } else {
    hiddenInfo[0].classList.add("hidden");
    tabBox[0].classList.remove("change-color");
  }
});

arrow[1].addEventListener("click", function () {
  if (hiddenInfo[1].classList.contains("hidden")) {
    hiddenInfo[1].classList.remove("hidden");
    tabBox[1].classList.add("change-color");
  } else {
    hiddenInfo[1].classList.add("hidden");
    tabBox[1].classList.remove("change-color");
  }
});

arrow[2].addEventListener("click", function () {
  if (hiddenInfo[2].classList.contains("hidden")) {
    hiddenInfo[2].classList.remove("hidden");
    tabBox[2].classList.add("change-color");
  } else {
    hiddenInfo[2].classList.add("hidden");
    tabBox[2].classList.remove("change-color");
  }
});
