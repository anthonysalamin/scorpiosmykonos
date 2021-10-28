/*
 * 🟢 SCORPIOS | cookie signup V.1
 * last build: 26.10.2021 18:35 | anthonysalamin.ch
 */
console.log("cookie sign up V.1 loaded");
document.addEventListener("DOMContentLoaded", () => {
  // globals
  const log = console.log,
    cookieName = "Scorpios_Signup_2022",
    cookieValue = "Seen",
    popupDelay = 8, // delay in seconds after which the popup appears
    dayStored = 365, // days during which the cookie is stored in user's browser
    speed = 250,
    cookieWrapper = document.getElementById("cookie-wrapper"),
    popupButtons = new Set(document.getElementsByClassName("popup-button"));

  // 🧠 if no cookie found
  if (!Cookies.get(cookieName)) {
    log("no Subscriptions 🍪 was found.");
    // display popup after x amount of seconds
    setTimeout(() => {
      cookieWrapper.style.display = "flex";
      $(cookieWrapper).fadeTo(speed, 1, "linear");
      log("Subscriptions 🍪 popup displayed.");
    }, popupDelay * 1000);

    // close popup on click
    Array.from(popupButtons).forEach((popupButton) => {
      popupButton.addEventListener("click", () => {
        $(cookieWrapper).fadeTo(speed, 0, "linear");
        setTimeout(function () {
          cookieWrapper.style.display = "none";
        }, speed);
      });
    });

    // set date to be equal to x amount of days from current date time in ms
    let date = new Date();
    date.setTime(date.getTime() + dayStored * 24 * 60 * 60 * 1000);

    // 🧠 create cookie on button click to expire on newly defined date
    popupButtons.forEach((popupButton) => {
      popupButton.addEventListener("click", () => {
        log("Subscriptions 🍪 created and stored.");
        Cookies.set(cookieName, cookieValue, {
          expires: date
        }); // end set cookie
      }); // end listener
    }); // end forEach
  } else {
    log(
      `🍪 ${cookieName} "${cookieValue}" has been found, popup remains hidden.`
    );
  } // end if
}); // end DOMloaded