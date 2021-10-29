/*
 * 🟢 SCORPIOS | FormBackend AJAX request
 * V.6 | 18.07.2020 @ 22:40 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  ajaxMe();
  console.log(
    `%c loaded:`,
    `color: green`,
    `V.6 | 18.07.2020 @ 22:40 | FormBackend AJAX request`
  ); // end logging
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
        console.log(
          `%c readyState:`,
          `color: blue`,
          `${request.readyState}, status: ${request.status}`
        );
        console.log(`%c server response:`, `color: blue`, `${name}`);
        setTimeout(() => {
          window.location.href = `https://www.${domain}/${subpage}?name=${name}`;
        }, delay);
      }

      // 😡 on error
      function error(err) {
        alert(`Oops, something went wrong: ${err}`);
        console.log(
          `%c error:`,
          `color: red`,
          `Oops, something went wrong: ${err}`
        );
      } // end error()

      request.onload = success;
      request.onerror = error;
      request.open(method, action, async);
      request.setRequestHeader("Accept", "application/json; charset=utf-8");
      request.send(formData);
    }); // end submit listener
  }); // end for each form
} // end ajaxMe()
