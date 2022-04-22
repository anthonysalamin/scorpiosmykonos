console.log(
  `%c loaded:`,
  `color: green`,
  `SCORPIOS | scroll-based-logo-visibility.js | V.1.0.2 | 22.04.2022 @14:18`
);

// on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  // 🥬 globals
  const log = console.log,
    production = false,
    scrollBar = document.scrollingElement,
    logotype = document.querySelector("#fantom"),
    limit = 600; // in pixels
  let inRange;

  // 🥬 helper | debounce function definition
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

  // 🥬 helper | trigger hide/show based on inRange variable
  function triggerMe() {
    let currentScrollpos = scrollBar.scrollTop;

    inRange = (() => {
      if (currentScrollpos <= limit) {
        return true;
      } else {
        return false;
      }
    })();

    // opacity logic
    if (inRange) {
      logotype.style.opacity = "1";
    } else {
      logotype.style.opacity = "0";
    }

    // debug
    /*
    if (!production) {
      console.clear();
      log(`scroll position: ${currentScrollpos.toFixed()} px`);
      log(`logotype is: ${inRange ? "visible" : "hidden"}`);
      log(`logotype.style.opacity: ${logotype.style.opacity}`);
    }
    */
  }

  // run triggerMe on scroll every 25 milliseconds
  window.addEventListener("scroll", debounce(triggerMe, 25));
}); // end DOM loaded
