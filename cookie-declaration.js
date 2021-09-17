/*
 * 🟢 SCORPIOS | cookie declaration V.1
 * build: 02.07.2020 21:59 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  // options
  const cookieName = "Scorpios Mykonos Cookie Declaration",
    cookieValue = "Accepted",
    popupDelay = 1, // delay in seconds after which the popup appears
    dayStored = 365, // days during which the cookie is stored in user's browser
    speed = 500;

  const log = console.log,
    gdprWrapper = document.getElementById("gdpr-wrapper"),
    popupButton = document.getElementById("gdpr-continue");

  // 🧠 if no cookie found
  if (!Cookies.get(cookieName)) {
    log("no GDPR 🍪 was found");
    // display popup after x amount of seconds
    setTimeout(() => {
      gdprWrapper.style.display = "flex";
      $(gdprWrapper).fadeTo(speed, 1, "linear");
      log("GDPR 🍪 popup displayed");
    }, popupDelay * 1000);

    // close popup on click
    popupButton.addEventListener("click", () => {
      $(gdprWrapper).fadeTo(speed, 0, "linear");
      setTimeout(function () {
        gdprWrapper.style.display = "none";
      }, speed);
    });

    // set date to be equal to x amount of days from current date time in ms
    let date = new Date();
    date.setTime(date.getTime() + dayStored * 24 * 60 * 60 * 1000);

    // 🧠 create cookie on button click to expire on newly defined date
    popupButton.addEventListener("click", () => {
      log("GDPR 🍪 created and stored");
      Cookies.set(cookieName, cookieValue, {
        expires: date
      }); // end set cookie
    }); // end listener
  } else {
    log(
      `Yay, 🍪 ${cookieName} "${cookieValue}" has been found, popup remains hidden.`
    );
  } // end if
}); // end DOMloaded