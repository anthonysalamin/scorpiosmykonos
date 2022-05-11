console.log(
  `%c deployed:`,
  `color: green`,
  `🟢 SCORPIOS | tabs v.3.0.0 | 09.05.22 @19:18`
);

document.addEventListener("DOMContentLoaded", () => {
  // globals
  const production = true,
    log = console.log,
    decimalPrecision = 2;
  const links = document.querySelectorAll(".tab-link"),
    menuWrapper = document.querySelector("#tabs-menu"),
    initialmenuWrapperPosition = menuWrapper.getBoundingClientRect().top,
    offset = 50,
    ScrollDuration = 1.2;

  // checkOnScroll();
  function checkOnScroll() {
    window.addEventListener("scroll", () => {
      const menuWrapperPosition = menuWrapper.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      log(`menu @ scroll Y: ${menuWrapperPosition.toFixed(decimalPrecision)}px`);
      log(`scroll @ scroll Y: ${scrollPosition.toFixed(decimalPrecision)}px`);
    });
  }

  // listen to clicks
  Array.from(links).forEach((link) => {
    link.addEventListener("click", () => {
      
      // 🥑 get menu position
      const menuWrapperPosition = menuWrapper.getBoundingClientRect().top;
      log(`menu @ clicked Y: ${menuWrapperPosition.toFixed(decimalPrecision)}px`);

      // 🍇 get current scroll position
      const scrollPosition = window.scrollY;
      log(`scroll @ clicked Y: ${scrollPosition.toFixed(decimalPrecision)}px`);

      // 🍈 scroll to menu position
      gsap.to(window, {
        scrollTo: initialmenuWrapperPosition - offset,
        duration: ScrollDuration,
        ease: Power4.easeInOut
      });
      
    }); // end click
  }); // end for each
}); // end DOM loaded

// go get an 🍦
