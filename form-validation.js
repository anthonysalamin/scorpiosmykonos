/*
 * 🟢 SCORPIOS | form validation
 TO DO: implement form validation into AJAX request
 * V.6 | 29.10.2021 @ 00:56 | anthonysalamin.ch
 */
 document.addEventListener("DOMContentLoaded", () => {
  requiredCheck();
  prettyLog(`loaded`, `V.6 | 29.10.2021 @ 00:56 | form validation`);
}); // end DOM loaded

// form validation
function requiredCheck() {
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
      prettyLog(`error`, `required inputs: ${requiredInputs.length}`);
      prettyLog(
        `warning`,
        `required filled inputs: ${requiredFilledInputs.length}`
      );
      prettyLog(`warning`, `required empty inputs: ${emptyInputs.length}`);
    } // end inputsManagement

    submit.addEventListener("click", () => {
      inputsManagement();

      if (requiredInputs.length == requiredFilledInputs.length) {
        prettyLog(`success`, `all required fields filled`);
      } else {
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
} // end requiredCheck()

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
