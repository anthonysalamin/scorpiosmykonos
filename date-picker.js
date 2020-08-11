/*
 * Date Picker
 * DEPENDENCIES: mobiscroll.js + moment.js
 * BUILD: 11.08.2020 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";
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
  let now = new Date(),
    today = new Date(now.setDate(now.getDate())),
    limit = new Date(now.setUTCFullYear(2020, 8, 27)), // 27 september 2020
    object = {
      min: today,
      max: limit,
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

  // inits
  datePickerInit();

  // 🍋 date picker management
  function datePickerInit() {
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
          hiddenMonth.value = monthIds[valueMonth - 1];

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
        () => {
          instance.show();
          month();
        },
        false
      ); // end listener
    }); // end for each form
  } // end datePickerInit()
}); // end DOM listener
