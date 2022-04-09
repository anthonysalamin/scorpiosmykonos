/*
 * 🟢 SCORPIOS | sevenrooms-widget | v.2
 * build 09.04.22 @ 13:19
 * © 2022 anthonysalamin.ch
 */

document.addEventListener("DOMContentLoaded", () => {
  handleSevenRooms();
  prettyLog(
    `info`,
    `loaded`,
    `SCORPIOS | sevenrooms-widget | v.2 | build 09.04.22 @ 13:19`
  );
}); // end DOM listener

// initialise sevenrooms for all buttons
function handleSevenRooms() {
  const buttons = document.querySelectorAll(".btn-widget");
  Array.from(buttons).forEach((button) => {
    const venueId = button.dataset.venue,
      triggerId = button.id;

    // inject all venues if needed
    function handleVenues(triggerId) {
      if (venueId == "scorpiosmykonosgroup") {
        return [
          "scorpiosmykonosbeach",
          "scorpiosmykonossunsetbeach",
          "scorpiosmykonosrestaurant"
        ];
      } else {
        return [];
      } // end if
    }

    // initialise widget
    SevenroomsWidget.init({
      venueId: venueId,
      allVenues: handleVenues(triggerId),
      triggerId: triggerId,
      type: "reservations",
      styleButton: false
    }); // end SevenroomsWidget init
  }); // end for each button
} // end handleSevenRooms()

// helper | log function
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

// go get an 🍦