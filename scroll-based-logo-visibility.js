/*
 * 🟢 SCORPIOS | scroll-based logo visibility
 * V.1 | 01.08.2020 @ 21:47 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  // 🥥 run triggerMe on scroll every x milliseconds
  window.addEventListener("scroll", debounce(triggerMe, 100));
  console.log(
    `%c loaded:`,
    `color: green`,
    `V.1 | 01.08.2020 @ 21:47 | scroll-based logo visibility`
  ); // end logging
}); // end DOMContentLoaded()

// 🥗 globals
const log = console.log,
  scrollBar = document.scrollingElement,
  logotype = document.getElementsByClassName("logo-link-white")[0],
  // check = document.getElementById("check"),
  // status = document.getElementById("status"),
  limit = 600; // in pixels
let inRange;

// 🍉 debounce function definition
function debounce(func, wait) {
  let timeout;
  return () => {
    let context = this, // arguments "func" and "wait"
      later = () => {
        func.apply(context);
      };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }; // end return
} // end debounce

// 🍓 trigger hide/show based on inRange variable
function triggerMe() {
  let currentScrollpos = scrollBar.scrollTop;

  inRange = (() => {
    if (currentScrollpos <= limit) {
      return true;
    } else {
      return false;
    }
  })();

  if (inRange) {
    logotype.style.opacity = "1";
  } else {
    logotype.style.opacity = "0";
  } // end if

  // check.textContent = `scroll position: ${currentScrollpos} px`;
  // status.textContent = `logotype is: ${inRange ? "visible" : "hidden"}`;
} // end triggerMe()
