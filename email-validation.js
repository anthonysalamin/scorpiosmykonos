/*
 * 🟢 SCORPIOS | email validation
 * TO DO: improve error feedback for email input fields
 * V.2 | 31.10.2021 @ 10:58 | anthonysalamin.ch
 */

// on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  emailValidation();
  prettyLog(`success`, `loaded`, `V.2 | 30.08.2021 @ 18:00 | email validation`);
}); // end DOM loaded

// email validation
function emailValidation() {
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

    function emailCheck() {
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
              prettyLog(`success`, `ok`, `email seems legit`);
              // checkInput.style.color = colorValid;
              // return "email seems legit";
            } else {
              prettyLog(`warning`, `warning`, `email not yet valid`);
              // checkInput.style.color = colorInvalid;
              // return "email not yet valid";
            } // end if extension
          } else {
            prettyLog(`warning`, `warning`, `email missing "@" symbol`);
            // checkInput.style.color = colorInvalid;
            // return 'email missing "@" symbol';
          } // end if arobase
        } else {
          prettyLog(`error`, `error`, `email seems invalid, try again`);
          // checkInput.style.color = colorInvalid;
          // return "email invalid, try again";
        } // end if value > 1
      })();

      checkInput.textContent = message;
    } // end emailCheck()
    emailInput.addEventListener("keyup", debounce(emailCheck, speed));
  }); // end for each form
} // end emailValidation()

// log helper
function prettyLog(status, hint, message) {
  let color;
  switch (status) {
    case "info":
      color = "#3498DB";
      break;
    case "success":
      color = "#27AE60";
      break;
    case "warning":
      color = "#E67E22";
      break;
    case "error":
      color = "#E74C3C";
      break;
    default:
      color = "#90A4AE";
  }
  console.log(
    `%c${hint}`,
    [
      `background: ${color}`,
      `border-radius: 0.5em`,
      `color: white`,
      `font-weight: bold`,
      `padding: 2px 0.5em`
    ].join(`;`),
    message
  );
} // end prettyLog
