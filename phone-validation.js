/*
 * Phone geoIpLookup v.4
 * BUILD 02.08.2020 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  log("this is FETCH commented out version");
  girlGimmeYourNumber();
});

function girlGimmeYourNumber() {
  "use strict";
  // globals
  const log = console.log,
    forms = document.getElementsByClassName("form-wrapper"),
    colorValid = "#00b300",
    colorInvalid = "#ff4d4d",
    token = "1733d2d8ac8982"; // production

  // 🧠 debounce function
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
  } // end debounce

  // 🧠 for each form
  Array.from(forms).forEach((form) => {
    const input = form.querySelector(".phone"),
      info = form.querySelector(".check");

    // 🧠 initialise intlTelInput
    let iti = intlTelInput(input, {
      allowDropdown: true,
      separateDialCode: false,
      nationalMode: false,
      autoPlaceholder: "aggressive",
      // onlyCountries: [],
      // excludeCountries: [],
      preferredCountries: ["de", "us", "gr", "ch"],
      initialCountry: "gr", // "auto"
      /*
      geoIpLookup: (callback) => {
        fetch(`https://ipinfo.io?token=${token}`)
          .then((response) => response.json()) // parse response
          .then((data) => {
            const countryCode = data && data.country ? data.country : "gr";
            callback(countryCode);
          })
          .catch((err) => {
            log(`Oops, something went wrong: ${err}`);
          });
      }
      */
    });

    // 🧠 function checking phone input
    let checkNumber = function () {
      // heavy lifting stuff here
      let number = iti.getNumber(),
        validity = iti.isValidNumber();

      // 🧠 clean up input of non numerical value except "+"
      (function cleanInput() {
        input.value = number.replace(/[^0-9\+]/g, "");
      })();

      // 🧠 check if number is valid
      if (validity == true) {
        log(`🍀 Yay, your number ${number} seems legit`);
        // input.value = number; // inject full number with national code
        info.innerHTML = `seems legit`;
        info.style.color = colorValid;
        // else if number is not valid
      } else {
        log(
          `😡 Oops, your number ${number} seems ${
          validity ? "legit" : "invalid"
          }, please try again.`
        );

        // edge cases if number invalid
        let numberLength = number.length;

        if (numberLength < 3) {
          input.placeholder = "";
          setTimeout(function () {
            info.innerHTML = `valid number needed`;
          }, 250);
        } else if (numberLength >= 3 && numberLength <= 5) {
          info.innerHTML = `mmh, not yet valid`;
        } else if (numberLength > 5) {
          info.innerHTML = `almost valid`;
        } // end if edge cases
        info.style.color = colorInvalid;
      } // end if number is valid
    }; // end checkNumber()

    // 🧠 on input keyup, check number every x milliseconds
    input.addEventListener("keyup", debounce(checkNumber, 10));
  }); // end for each form
} // end girlGimmeYourNumber()
