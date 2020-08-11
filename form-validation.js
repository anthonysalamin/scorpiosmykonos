/*
 * Form validation
 * CODEPEN: Scorpios | Form validation v.6 
 * BUILD: 20.07.2020 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  requiredCheck();
});

function requiredCheck() {
  "use strict";
  // globals
  const log = console.log,
    forms = new Set(document.getElementsByClassName("form-block")),
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
      log(`required inputs: ${requiredInputs.length}`);
      log(`required filled inputs: ${requiredFilledInputs.length}`);
      log(`required empty inputs: ${emptyInputs.length}`);
    } // end inputsManagement

    submit.addEventListener("click", () => {
      inputsManagement();

      if (requiredInputs.length == requiredFilledInputs.length) {
        log("Yay, all required fields filled, sending form");
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
