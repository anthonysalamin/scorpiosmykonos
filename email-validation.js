/*
 * 🟢 SCORPIOS | email validation V.2
 * build: 30.08.2021 18:00 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  emailCheck();
  console.log(
    `%c loaded:`,
    `color: green`,
    `email validation V.2 | build: 30.08.2021 18:00`
  ); // end logging
}); // end DOM loaded

// 🍈 check mail
function emailCheck() {
  // globals
  const log = console.log,
    forms = new Set(document.getElementsByClassName("form-block")),
    colorValid = "#00b300",
    colorInvalid = "#ff4d4d",
    speed = 300;
  let value, arobase, extension, message;

  // 🍉 debounce function definition
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

  Array.from(forms).forEach((form) => {
    const emailInput = form.querySelector("input[name=email]"),
      checkInput = form.querySelector(".check-email");

    function emailValidation() {
      value = emailInput.value;

      // 🥙 checks if arobase is present
      arobase = (() => {
        if (value.indexOf("@") != -1) {
          return true; // thre is an "@"
        } else {
          return false; // thre is no "@"
        }
      })();

      // 🌮 checks if domain + TDL seem correct
      extension = (() => {
        if (arobase) {
          let splitted = value.split("@"),
            localPart = splitted[0], // hello
            domain = splitted[1].split(".")[0], // gmail
            point = splitted[1].indexOf("."), // .
            topDomainLevel = splitted[1].split(".")[1]; // com

          if (
            localPart != "" &&
            domain.length >= 1 &&
            point != -1 &&
            topDomainLevel.length >= 2
          ) {
            return true; // extension seems valid
          } else {
            return false; // extension is not yet valid
          }
        }
      })();

      // 🥗 build warning message
      message = (() => {
        if (value.length >= 1) {
          if (arobase) {
            if (extension) {
              checkInput.style.color = colorValid;
              console.log(`%c success:`, `color: green`, `email seems legit`);
              return "email seems legit";
            } else {
              checkInput.style.color = colorInvalid;
              console.log(
                `%c warning:`,
                `color: orange`,
                `email not yet valid`
              );
              return "email not yet valid";
            } // end if extension
          } else {
            checkInput.style.color = colorInvalid;
            return 'email missing "@" symbol';
            console.log(
              `%c warning:`,
              `color: orange`,
              `email missing "@" symbol`
            );
          } // end if arobase
        } else {
          checkInput.style.color = colorInvalid;
          console.log(`%c error:`, `color: error`, `email invalid, try again`);
          return "email invalid, try again";
        } // end if value > 1
      })();

      checkInput.textContent = message;
    } // end emailValidation
    emailInput.addEventListener("keyup", debounce(emailValidation, speed));
  }); // end for each form
} // end emailCheck()
