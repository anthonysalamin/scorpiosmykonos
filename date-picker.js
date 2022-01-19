/*
 * 🟡 SCORPIOS | date picker
 * dependencies: mobiscroll.js + moment.js
 * V.15 | 28.10.2021 @ 23:13 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  datePicker();
  prettyLog(`success`, `loaded`, `V.15 | 28.10.2021 @ 23:13 | date picker`);
}); // end DOM listener

// date picker handling
function datePicker() {
  // options
  const seasonHasAnEnd = true,
    seasonStart = { day: 15, month: 5, year: 2022 },
    seasonEnd = { day: 3, month: 10, year: 2022 },
    daysLimit = 30;

  // globals
  const log = console.log,
    forms = document.getElementsByClassName("form-block"),
    monthIds = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

  const date = new Date(),
    today = new Date(date.setDate(date.getDate())),
    future = new Date(date.setDate(date.getDate() + daysLimit)); // x days in the future

  const min = new Date(
    date.setUTCFullYear(
      seasonStart.year,
      seasonStart.month - 1,
      seasonStart.day
    )
  );

  const max = new Date(
    date.setUTCFullYear(seasonEnd.year, seasonEnd.month - 1, seasonEnd.day - 1)
  );

  const object = {
      // if today's date is more recent than the season's start...
      // ... then use today's date as min value for each day until the season ends
      min: Date.parse(today) > Date.parse(min) ? today : min,
      max: seasonHasAnEnd ? max : future,
      dateFormat: "dd/mm/yyyy",
      display: "center",
      layout: "layout",
      showOnTap: false,
      showOnFocus: false
    },
    settings = {
      theme: "ios",
      themeVariant: "light",
      calendarSystem: "gregorian"
    };

  // 🍋 date picker management
  Array.from(forms).forEach((form) => {
    const calendar = form.querySelector(".mobiscroll-calendar"),
      button = form.querySelector(".mobiscroll-button"),
      hiddenMonth = form.querySelector('input[name="month"]'),
      formatDate = form.querySelector(".format");

    // 🍇 settings + instance
    mobiscroll.settings = settings;
    const instance = mobiscroll.calendar(calendar, object);

    // 🍓 month injection
    function month() {
      // when date field value change, update hidden field
      calendar.addEventListener("change", () => {
        const dateSelected = calendar.value, // DD/MM/YYYY
          valueMonth = dateSelected.split("/")[1];
        hiddenMonth.value = monthIds[valueMonth - 1]; // zero indexed handling

        // format date with moment.js
        const momentFormat = moment(dateSelected, "DD/MM/YYYY").format(
          "dddd, Do of MMMM" // 🎂 Friday, 24th of July
        );
        formatDate.textContent = momentFormat;
      }); // end change listener
    } // end month()

    // 🍍 on click trigger date picker
    calendar.addEventListener(
      "click",
      function () {
        if (Date.parse(today) > Date.parse(max) && seasonHasAnEnd) {
          // season has ended
          prettyLog(
            `warning`,
            `warning`,
            `season has ended, aborting date picker initialisation`
          );
          // define input disabled css
          const inputDisabledStyle = `
              input:disabled {
                background-color: transparent !important;
                border-top: none !important;
                border-left: none !important;
                border-right: none !important;
                border-bottom: 1px solid black !important;
              }
              input::placeholder {
                color: red;
                opacity: 1; /* Firefox */
              }
              `;

          // inject custom css definition
          function injectStyle(css) {
            const head =
                document.head || document.getElementsByTagName("head")[0],
              style = document.createElement("style");
            // style.type = "text/css"; // commented out 19.01.2022 because type is deprecated
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
          }
          // inject custom css expression
          injectStyle(inputDisabledStyle);

          // update placeholder and disable input
          calendar.placeholder = "Season has ended.";
          calendar.disabled = true;
          calendar.style.cursor = "not-allowed";
        } else {
          // show calendar
          instance.show();
          month();
        } // end if
      },
      false
    ); // end click listener
  }); // end for each form
} // end datePicker()

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
