/*
 * 🟢 SCORPIOS | cookie signup
 * V.1 | 26.10.2021 @ 18:35 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  cookieSignup();
  console.log(
    `%c loaded:`,
    `color: green`,
    `V.1 | 26.10.2021 @ 18:35 | cookie signup`
  ); // end logging
}); // end DOMloaded

function cookieSignup() {
  // globals
  const log = console.log,
    cookieName = "SCORPIOS_SIGNUP_04_04_2022",
    cookieValue = "AGREED",
    popupDelay = 8, // delay in seconds after which the popup appears
    dayStored = 365, // days during which the cookie is stored in user's browser
    speed = 250,
    cookieWrapper = document.getElementById("cookie-wrapper"),
    popupButtons = new Set(document.getElementsByClassName("popup-button"));

  // 🧠 if no cookie found
  if (!Cookies.get(cookieName)) {
    console.log(`%c warning:`, `color: orange`, `no signup 🍪 was found yet`); // end logging
    // display popup after x amount of seconds
    setTimeout(() => {
      cookieWrapper.style.display = "flex";
      $(cookieWrapper).fadeTo(speed, 1, "linear");
      console.log(`%c success:`, `color: green`, `signup 🍪 popup displayed`); // end logging
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
        console.log(`%c success:`, `color: green`, `signup 🍪 created and stored`); // end logging
        Cookies.set(cookieName, cookieValue, {
          expires: date
        }); // end set cookie
      }); // end listener
    }); // end forEach
  } else {
    console.log(
      `%c success:`,
      `color: green`,
      `"${cookieName}" 🍪 is "${cookieValue}", popup remains hidden`
    ); // end logging
  } // end if
} // end cookieSignup()
