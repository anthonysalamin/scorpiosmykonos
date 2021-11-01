/*
 * 🟢 SCORPIOS | FormBackend AJAX request
 * V.6 | 18.07.2020 @ 22:40 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  ajaxMe();
  prettyLog(`loaded`, `V.6 | 18.07.2020 @ 22:40 | FormBackend AJAX request`);
});

function ajaxMe() {
  // globals
  const log = console.log,
    forms = document.getElementsByClassName("form-wrapper"),
    processor = "https://www.formbackend.com/f/",
    id = "59a2cbc2187b31b6", // PRODUCTION_KEY
    domain = "scorpiosmykonos.com",
    subpage = "thanks",
    delay = 1000;

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      log("prevented default");

      const formData = new FormData(form),
        request = new XMLHttpRequest(),
        method = "POST",
        action = `${processor}${id}`,
        async = "true";

      // 🍀 on success
      function success() {
        const response = JSON.parse(request.response),
          name = response.values.name;
        prettyLog(
          `info`,
          `readyState: ${request.readyState}, status: ${request.status}, response: ${name}`
        );
        setTimeout(() => {
          window.location.href = `https://www.${domain}/${subpage}?name=${name}`;
        }, delay);
      }

      // 😡 on error
      function error(err) {
        alert(`Oops, something went wrong: ${err}`);
        prettyLog(`error`, `Oops, something went wrong: ${err}`);
      } // end error()

      request.onload = success;
      request.onerror = error;
      request.open(method, action, async);
      request.setRequestHeader("Accept", "application/json; charset=utf-8");
      request.send(formData);
    }); // end submit listener
  }); // end for each form
} // end ajaxMe()

// log helper
function prettyLog(status, message) {
  let color;
  switch (status) {
    case "info":
      color = "#4DD0E1";
      break;
    case "success":
      color = "#1DE9B6";
      break;
    case "loaded":
      color = "#1DE9B6";
      break;
    case "warning":
      color = "#FFC107";
      break;
    case "error":
      color = "#FF3D00";
      break;
    default:
      color = "#90A4AE";
  }
  console.log(
    `%c${status}`,
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
