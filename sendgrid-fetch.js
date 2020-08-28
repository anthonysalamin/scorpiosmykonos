/*
 * SendGrid | ⚠️ (async/await fetch API) v.7
 * fetch API + CORS + SendGrid web API
 * DEPENDENCIES: jQuery.js (for fade animations)
 * INFO: https://javascript.info/fetch || https://javascript.info/async-await
 * Builde date: 20/08/2020 | anthonyslamin.ch
 */

// 🍆 unbind default form handling
var Webflow = Webflow || [];
Webflow.push(() => {
    $(document).off("submit");
    console.log("webflow form unbinded successfully");
}); // end Webflow.push()

// 🍌 setup custom form handling
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // globals
    const log = console.log,
        forms = document.getElementsByClassName("form-wrapper"),
        thanksWrapper = document.getElementById("wrapper-thanks-message"),
        thanksWrap = document.getElementById("wrap-thanks-message"),
        speed = 500,
        throttlingSpeed = 800,
        protocol = "https",
        subdomain = "development",
        domain = "einmelden.de",
        file = "sendgrid",
        version = 4,
        extention = "php";
    let submit;

    // 🌽 for each form
    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            placeholder();
            throttleFunction(fetchAsyncAwait, throttlingSpeed);
            closePopUp();
        });

        // 🥦 placeholder handling
        function placeholder() {
            submit = form.querySelector("input[type=submit]");
            submit.value = "sending...";
        } // end placeholder()

        // 🥝 popup success animation
        function successSvg() {
            const svgTick = document.getElementById("successAnimation");
            svgTick.style.opacity = "1";
            svgTick.classList.add("animated");
        } // end successSvg()

        // 🍓 popup close on click
        function closePopUp() {
            const buttonClose = document.getElementById("thanks-close");
            buttonClose.addEventListener("click", () => {
                // popup close
                thanksWrapper.style.opacity = "1";
                $(thanksWrapper).animate(
                    {
                        opacity: "0"
                    },
                    speed
                );
                setTimeout(() => {
                    thanksWrapper.style.display = "none";
                }, speed);

                thanksWrap.style.opacity = "1";
                $(thanksWrap).delay("fast").animate(
                    {
                        opacity: "0"
                    },
                    speed
                );
            }); // end buttonClose click listener
        } // end closePopUp()

        // 🍋 throttle helper function definition
        let timerThrottle; // undefined
        const throttleFunction = function (func, delay) {
            // if setTimeout is already scheduled, no need to do anything
            if (timerThrottle) {
                return;
            }
            // schedule a setTimeout after delay seconds
            timerThrottle = setTimeout(() => {
                func();
                // once setTimeout function execution is finished, timerThrottle = undefined so that in
                // the next "click" event function execution can be scheduled by the setTimeout again
                timerThrottle = undefined;
            }, delay);
        }; // end throttleFunction()

        // 🥬 async-await fetch API
        async function fetchAsyncAwait() {
            const url = `${protocol}://${subdomain}.${domain}/${file}_v${version}.${extention}`,
                method = "POST",
                body = new FormData(form);

            try {
                // 🧠 try to fetch server response
                let response = await fetch(url, {
                    // no need for header as body is a FormData stream
                    // header: Content-Type: application/json, // need to stringify body json
                    method: method,
                    body: body
                });

                // experimental
                if (response.ok) {
                    log("fetch resource successful, response ok.");
                } else {
                    log("Oops, there was a problem in the fetch request.");
                }

                // 🧠 try convert JSON into JavaScript object
                let data = await response.json();
                log(data);

                function thanks() {
                    // inject dynamic data
                    thanksWrapper.querySelector(
                        "#thanks-name"
                    ).textContent = `${data.name}`;
                    thanksWrapper.querySelector(
                        "#thanks-reservation"
                    ).textContent = `${data.reservation}`;

                    let guests = (() => {
                        let person = data.guests;
                        return person <= 1 ? `${person} guest` : `${person} guests`;
                    })();

                    thanksWrapper.querySelector("#thanks-guests").textContent = guests;

                    thanksWrapper.querySelector(
                        "#thanks-time"
                    ).textContent = `${data.time}`;
                    thanksWrapper.querySelector(
                        "#thanks-month"
                    ).textContent = `${data.month}`;

                    // popup open
                    thanksWrapper.style.opacity = "0";
                    thanksWrapper.style.display = "flex";
                    $(thanksWrapper).animate(
                        {
                            opacity: "1"
                        },
                        speed
                    );
                    thanksWrap.style.opacity = "0";
                    $(thanksWrap).delay("fast").animate(
                        {
                            opacity: "1"
                        },
                        speed
                    );
                } // end thanks()

                thanks();
                setTimeout(() => {
                    successSvg();
                    submit.value = "send again";
                    form.reset();
                }, 350);

                // 😡 error handling
            } catch (error) {
                alert(`Oops, something went wrong: ${error}`);
                submit.value = "try again"; // 😏 good luck
            } // end try/catch
        } // end fetchAsyncAwait()
    }); // end for each form
}); // end DOM listener
