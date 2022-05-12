console.log(
  `%c deployed:`,
  `color: green`,
  `🟢 SCORPIOS | tabs v.3.0.1 | 11.05.22 @11:39`
);

document.addEventListener("DOMContentLoaded", () => {
  injectGSAP();
});

// 🥬 helper | inject GSAP API
function injectGSAP() {
  console.time("🔵 injectGSAP()");
  // scoped
  const source = `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js`,
    script = document.createElement("script");
  // set script attributes
  script.setAttribute("async", "");
  script.setAttribute("src", `${source}`);
  document.body.append(script);
  // handle onload / onerror
  script.onload = () => injectScrollToPlugin();
  script.onerror = () => console.error(`Oops, error loading "${source}"`);
  console.timeEnd("🔵 injectGSAP()");
}

// 🥬 helper | inject ScrollToPlugin API
function injectScrollToPlugin() {
  console.time("🔵 ScrollToPlugin()");
  // scoped
  const source = `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js`,
    script = document.createElement("script");
  // set script attributes
  script.setAttribute("async", "");
  script.setAttribute("src", `${source}`);
  document.body.append(script);
  // handle onload / onerror
  script.onload = () => handleScrolling();
  script.onerror = () => console.error(`Oops, error loading "${source}"`);
  console.timeEnd("🔵 ScrollToPlugin()");
}

// 🍑 handle scrolling
function handleScrolling() {
  console.time("🔵 handleScrolling()");
  // globals
  const production = true,
    log = console.log,
    decimalPrecision = 2;
  const links = document.querySelectorAll(".tab-link"),
    menuWrapper = document.querySelector("#tabs-menu"),
    initialmenuWrapperPosition = menuWrapper.getBoundingClientRect().top,
    offset = 50,
    ScrollDuration = 1.2;

  // listen to clicks
  Array.from(links).forEach((link) => {
    link.addEventListener("click", () => {
      
      // 🥑 get menu position
      const menuWrapperPosition = menuWrapper.getBoundingClientRect().top;
      // log(`menu @ clicked Y: ${menuWrapperPosition.toFixed(decimalPrecision)}px`);

      // 🍇 get current scroll position
      const scrollPosition = window.scrollY;
      // log(`scroll @ clicked Y: ${scrollPosition.toFixed(decimalPrecision)}px`);

      // 🍈 scroll to menu position
      gsap.to(window, {
        scrollTo: initialmenuWrapperPosition - offset,
        duration: ScrollDuration,
        ease: Power4.easeInOut
      });
      
    }); // end click
  }); // end for each
  console.timeEnd("🔵 handleScrolling()");
}

// go get an 🍦