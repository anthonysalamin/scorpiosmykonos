/*
 * 🟢 SCORPIOS | date picker V.14
 * Last build: 09/09/2021 14:10 | anthonysalamin.ch
 */
console.log("date-picker V.14 loaded");
document.addEventListener("DOMContentLoaded", () => {
  // globals
  const log = console.log,
    currentYear = new Date().getFullYear(),
    seasonStart = { day: 23, month: 5, year: currentYear },
    seasonEnd = { day: 3, month: 10, year: currentYear },
    daysLimit = 30, // limit reservation timeframe (30 = 1 month)
    seasonHasAnEnd = true,
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

  // min date
  const min = new Date(
    date.setUTCFullYear(
      seasonStart.year,
      seasonStart.month - 1,
      seasonStart.day
    )
  );

  const max = new Date(
    date.setUTCFullYear(seasonEnd.year, seasonEnd.month - 1, seasonEnd.day)
  );
  // log(max);

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
        () => {
          instance.show();
          month();
        },
        false
      ); // end listener
    }); // end for each form
  } // end datePickerInit()
}); // end DOM listener
