/*
 * Responsive Navigation System
 * CODEPEN: Responsive navigation system v.51
 * BUILD: 16.07.2020 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  // globals
  const log = console.log,
    scrollBar = document.scrollingElement,
    wrapper = document.getElementById("navigation-wrapper"),
    hamburger = document.getElementById("hamburger"),
    overlay = document.getElementById("navi-overlay"),
    logotype = document.getElementById("logotype"),
    lines = document.getElementsByClassName("line"),
    navLinks = document.getElementsByClassName("navi-link"),
    up = "-100%",
    down = "0%",
    relative = "relative",
    fixed = "fixed",
    transparent = "transparent",
    color = "#f0eae2",
    transition = "top 0.5s, opacity 0.5s",
    timing = "ease-in-out",
    limit = 600,
    threshold = 400,
    deviceLimit = 991, // 991px ≈ tablet
    debounceTime = 250; // miliseconds
  let trigger = false,
    menu = false,
    width,
    device;

  // 🥬 debounce definition
  function debounce(func, wait) {
    let timeout;
    return () => {
      let context = this; // arguments "func" and "wait"
      let later = () => {
        func.apply(context);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }; // end return
  } // end debounce definition

  // 🧀 device type management
  function deviceType() {
    // 🍐 check device's size on window resize
    function deviceSize() {
      device = (() => {
        width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (width >= deviceLimit) {
          return "desktop";
        } else {
          return "mobile";
        } // end if
      })(); // end device variable
      log(device);
    } // end deviceSize()
    deviceSize();

    // 🍌 check device size every 250ms on resize event
    window.addEventListener("resize", debounce(deviceSize, debounceTime));
  } // end deviceType()
  deviceType();

  // 🍓 set initial states
  function initialStates() {
    // initial state overlay
    if (device == "desktop") {
      overlay.style.top = "-100%";
      overlay.style.opacity = "0";
      overlay.style.opacity = "1";
    } else if (device == "mobile") {
      overlay.style.opacity = "0";
    }
    // initial state wrapper
    wrapper.style.position = relative;
    wrapper.style.top = down;
    wrapper.style.opacity = 1;
    wrapper.style.backgroundColor = transparent;
  } // end initialStates()
  initialStates();

  // 🍓 scroll trigger check
  function triggerMe() {
    let initialScrollPos = scrollBar.scrollTop,
      scrolledDown = 0,
      scrolledUp = 0;

    window.addEventListener("scroll", () => {
      let currentScrollpos = scrollBar.scrollTop;
      // if current scroll position > initial scroll position
      trigger = (() => {
        if (currentScrollpos > initialScrollPos) {
          // amount of pixels scrolled down
          // equals current scroll position minus last scroll position
          scrolledDown += currentScrollpos - initialScrollPos;
          //log(`${scrolledDown} px scrolled down`);
          if (scrolledDown >= threshold) {
            scrolledDown = 0;
            return {
              direction: "down",
              position: currentScrollpos
            };
          } else {
            return false;
          }
          // else if current position is smaller than initial scroll position
        } else if (currentScrollpos < initialScrollPos) {
          // amount of pixels scrolled up
          // equals last scroll position minus current scroll position
          scrolledUp += initialScrollPos - currentScrollpos;
          //log(`${scrolledUp} px scrolled up`);
          if (scrolledUp >= threshold) {
            scrolledUp = 0;
            return {
              direction: "up",
              position: currentScrollpos
            };
          } else {
            return false;
          }
        } // end if
      })(); // end trigger variable
      log(trigger);
      // initial scroll position is now equals to the current one
      initialScrollPos = currentScrollpos;
    }); // end scroll listener
  } // end triggerMe()
  triggerMe();

  // 🍓 navigation management
  function moveUpAndDown() {
    function preventDefault(event) {
      event.preventDefault();
    }
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          }
        })
      );
    } catch (err) {}
    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    // call disableScroll() to disable scroll
    function disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    }
    // call enableScroll() to enable scroll
    function enableScroll() {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
    }

    // 🍓 overlay + hamburger click management
    // check .animate() experimental javascript method
    hamburger.addEventListener("click", () => {
      const speed = 500;
      hamburger.classList.toggle("menu");
      wrapper.classList.toggle("invert");

      setTimeout(() => {
        logotype.classList.toggle("switchToBlack");
      }, 150);

      if (device == "desktop") {
        if (!menu) {
          // 🍊 reveal overlay if menu is closed
          $(overlay).animate(
            {
              top: down,
              opacity: "1"
            },
            speed
          );

          // 🍊 reveal links if menu is closed
          Array.from(navLinks).forEach((navLink) => {
            navLink.style.opacity = "0";
            setTimeout(() => {
              $(navLink).animate(
                {
                  opacity: "1"
                },
                speed
              );
            }, 400);
          });
        } else if (menu) {
          // 🍊 hide overlay if menu is open
          $(overlay).animate(
            {
              top: up,
              opacity: "0"
            },
            speed
          );
          // 🍊 hide links if menu is open
          Array.from(navLinks).forEach((navLink) => {
            $(navLink).animate(
              {
                opacity: "0"
              },
              100
            );
          });
        }
      } else if (device == "mobile") {
        // 🍊 reveal overlay if menu is closed
        if (!menu) {
          overlay.style.display = "flex";
          $(overlay).animate(
            {
              opacity: "1"
            },
            speed
          );

          // 🍊 reveal links if menu is closed
          for (let i = 0; i < navLinks.length; i++) {
            let navLink = navLinks[i];
            navLink.style.opacity = "0";
            setTimeout(() => {
              $(navLink).animate(
                {
                  opacity: "1"
                },
                150 * i * 2 // for slick ass progressiv effect
              );
            }, 200);
          }
        } else if (menu) {
          // 🍊 hide links if menu is open
          Array.from(navLinks).forEach((navLink) => {
            $(navLink).animate(
              {
                opacity: "0"
              },
              100
            );
          });
          setTimeout(() => {
            // 🍊 hide overlay if menu is opened
            $(overlay).animate(
              {
                opacity: "0"
              },
              speed
            );
            setTimeout(() => {
              overlay.style.display = "none";
            }, speed);
          }, 100);
        }
      }
      // define if menu is open or not
      menu = (() => {
        if (wrapper.classList[1] == "invert") {
          log("overlay opened");
          if (device == "mobile") {
            disableScroll();
          }
          return true;
        } else {
          log("overlay closed");
          if (device == "mobile") {
            enableScroll();
          }
          return false;
        }
      })(); // end menu variable
    });
    log(menu);

    // 🍓 check if scroll position is in range
    function inRange(position, min, max) {
      return position >= min && position <= max;
    }

    document.addEventListener("scroll", () => {
      let currentScrollpos = scrollBar.scrollTop;
      if (menu) {
        // 🥦 wrapper on menu open
        wrapper.style.position = fixed;
        wrapper.style.top = down;
        wrapper.style.color = "black";
        wrapper.style.opacity = 1;
      } else if (!menu) {
        // 🍋 wrapper above limit on menu closed
        if (trigger.position < limit) {
          if (trigger.direction == "up") {
            // show wrapper on scroll up within limit
            wrapper.style.position = relative;
            wrapper.style.top = down;
            wrapper.style.backgroundColor = transparent;
            wrapper.style.opacity = 1;
          }
        } else if (
          inRange(trigger.position, 0, 1000) &&
          trigger.direction == "up"
        ) {
          // 🍋 wrapper within limit on menu closed
          log("trigger up position is in range");
          // show wrapper on scroll within limit
          logotype.style.fill = "white";
          Array.from(lines).forEach((line) => {
            line.style.stroke = "white";
          });
          wrapper.style.transition = transition;
          wrapper.style.transitionTimingFunction = timing;
          wrapper.style.opacity = 0;
          setTimeout(() => {
            wrapper.style.position = relative;
            wrapper.style.top = down;
            wrapper.style.backgroundColor = transparent;
            wrapper.style.opacity = 1;
            wrapper.style.color = "white";
          }, 250);
        } else if (trigger.position > limit) {
          // 🍋 wrapper bellow limit on menu closed
          if (trigger.direction == "down") {
            // hide wrapper on scroll down below limit
            wrapper.style.opacity = 0;
            setTimeout(() => {
              wrapper.style.top = up;
            }, 500);
          } else if (trigger.direction == "up") {
            // show wrapper on scroll up below limit
            logotype.style.fill = "black";
            Array.from(lines).forEach((line) => {
              line.style.stroke = "black";
            });
            wrapper.style.transition = transition;
            wrapper.style.transitionTimingFunction = timing;
            wrapper.style.opacity = 1;
            wrapper.style.color = "black";
            wrapper.style.position = fixed;
            wrapper.style.top = down;
            wrapper.style.backgroundColor = color;
          }
        }
      }
    }); // end scroll listener
  } // end moveUpAndDown()
  moveUpAndDown();
}); // end DOMContentLoaded

// go get an 🍦
