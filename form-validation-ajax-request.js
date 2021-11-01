/*
 * 🟡 SCORPIOS | form validation + FormBackend AJAX request
 * TO DO: to be tested in production
 * V.7 | 01.11.2021 @ 13:13 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  formValidation();
  prettyLog(
    `success`,
    `loaded`,
    `V.7 | 01.11.2021 @ 13:13 | form validation + FormBackend AJAX request`
  );
});

// form validation
function formValidation() {
  // globals
  const log = console.log,
    forms = new Set(document.getElementsByClassName("form-wrapper")),
    alertWrapper = document.getElementById("wrapper-alert-message"),
    alertWrap = document.getElementById("wrap-alert-message"),
    speed = 250;

  forms.forEach((form) => {
    const inputs = new Set(form.getElementsByTagName("input")),
      submit = form.querySelector(".form-submit");

    let requiredInputs = [],
      emptyInputs = [],
      inputNames = [],
      requiredFilledInputs;

    // push all required fields into array
    inputs.forEach((input) => {
      if (input.required == true) {
        requiredInputs.push(input);
      }
    });

    // AJAX request
    function ajaxRequest() {
      // globals
      const processor = "https://www.formbackend.com/f/",
        id = "59a2cbc2187b31b6", // PRODUCTION_KEY
        domain = "scorpiosmykonos.com",
        subpage = "thanks",
        delay = 1000;
      const formData = new FormData(form),
        request = new XMLHttpRequest(),
        method = "POST",
        action = `${processor}${id}`,
        async = "true";

      // on success
      function success() {
        const response = JSON.parse(request.response);
        prettyLog(
          `info`,
          `info`,
          `readyState: ${request.readyState}, status: ${request.status}, response: ${response.values.name}`
        );
        setTimeout(() => {
          window.location.href = `https://www.${domain}/${subpage}?name=${response.values.name}`;
        }, delay);
      }

      // on error
      function error(err) {
        alert(`Oops, something went wrong: ${err}`);
        prettyLog(`error`, `error`, `something went wrong: ${err}`);
      } // end error()

      request.onload = success;
      request.onerror = error;
      request.open(method, action, async);
      request.setRequestHeader("Accept", "application/json; charset=utf-8");
      request.send(formData);
    } // end XMLHttpRequest()

    // perform input management
    function inputsManagement() {
      // creates a new array "requiredFilledInputs" with only required input not empty
      requiredFilledInputs = requiredInputs.filter((input) => {
        if (input.value.length > 0) {
          return input;
        } // end if
      }); // end filter

      // create array with empty required inputs
      emptyInputs = requiredInputs.filter((input) => {
        if (input.value.length == 0) {
          return input;
        } // end if
      }); // end filter

      // populates "inputNames" array with the names of each filled required inputs
      inputNames = emptyInputs.map((input) => {
        return input.name;
      });

      // debug only
      prettyLog(
        `info`,
        `info`,
        `required inputs already filled: ${requiredFilledInputs.length}`
      );
      prettyLog(`warning`, `warning`, `required inputs yet to be filled: ${emptyInputs.length}`);
      
    } // end inputsManagement

    submit.addEventListener("click", (event) => {
      event.preventDefault();
      inputsManagement();

      if (requiredInputs.length == requiredFilledInputs.length) {
        prettyLog(
          `success`,
          `success`,
          `all required fields filled, sending XMLHttpRequest request`
        );
        ajaxRequest();
      } else {
        prettyLog(
          `error`,
          `error`,
          `some fields are missing, aborting XMLHttpRequest request`
        );
        const message = inputNames.toString().replace(/,/g, ", "),
          plural = emptyInputs.length > 1 ? "s" : "";

        // inject warning message
        alertWrapper.querySelector(
          "#alert-span"
        ).textContent = `Please, fill in the following required field${plural}: ${message}`;

        // animations
        alertWrapper.style.opacity = "0";
        alertWrapper.style.display = "flex";
        $(alertWrapper).animate(
          {
            opacity: "1"
          },
          speed
        );
        alertWrap.style.opacity = "0";
        $(alertWrap).delay("fast").animate(
          {
            opacity: "1"
          },
          speed
        );

        // inject warning placeholders
        emptyInputs.forEach((input) => {
          input.placeholder = `${input.name} is required`;
          input.classList.add("warning-color");
        });
      } // end of if statement
    }); // end of event listener
  }); // end form forEach()
} // end formValidation()

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
