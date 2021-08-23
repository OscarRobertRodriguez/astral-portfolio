const navList = document.querySelectorAll(".icon");
const windowList = document.querySelectorAll(".window");
const arrow = document.querySelector(".arrow-up");
const homeBtn = document.querySelector(".home-card_btn");

changeWindows();

homeBtn.addEventListener("click", homeBtnWindowClick);

function homeBtnWindowClick() {
  highlightSelectedIcon(1);
  removeWindows();
  displayActiveWindow(1);
  moveArrow(1);
}

function changeWindows() {
  navList.forEach((icon, idx) => {
    if (Object.is(idx, 3)) {
      return;
    }
    icon.addEventListener("click", () => {
      highlightSelectedIcon(idx);
      removeWindows();
      displayActiveWindow(idx);
      moveArrow(idx);
    });
  });
}

function highlightSelectedIcon(idx) {
  navList.forEach((icon) => {
    icon.classList.remove("active");
  });
  navList[idx].classList.add("active");
}

function removeWindows() {
  windowList.forEach((window) => {
    window.classList.add("displayNone");
  });
}

function displayActiveWindow(index) {
  windowList[index].classList.remove("displayNone");
}

function moveArrow(idx) {
  if (idx === 0) {
    arrow.style.transform = "translateX(0px)";
  }
  if (idx === 1) {
    arrow.style.transform = "translateX(75px)";
  }
  if (idx === 2) {
    arrow.style.transform = "translateX(150px)";
  }
  if (idx === 3) {
    arrow.style.transform = "translateX(200px)";
  }
}
