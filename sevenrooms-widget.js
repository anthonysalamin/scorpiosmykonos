console.log(
  `%c loaded:`,
  `color: green`,
  `SCORPIOS | sevenrooms-widget.js | v.3.1.0 | 22.04.2022 @14:18`
);

// on DOM loaded handle sevenrooms integration
document.addEventListener("DOMContentLoaded", () => {
  handleAPIinjection();
});

// 🥬 helper | check if current URL needs API injection
function checkNeededURLs() {
  const protocol = "https://www",
    neededURLs = [
      `${protocol}.scorpiosmykonos.com/`, // production
      `${protocol}.scorpiosmykonos.webflow.io/`, // development
      `${protocol}.scorpiosmykonos.com/reserve`, // production
      `${protocol}.scorpiosmykonos.webflow.io/reserve` // development
    ],
    currentURL = window.location.href;
  return neededURLs.includes(currentURL);
}

// 🍑 inject API ind DOM based on URL check
function handleAPIinjection() {
  console.time("🍈 handleAPIinjection");
  if (!checkNeededURLs()) return;
  // scoped
  const source = `https://www.sevenrooms.com/widget/embed.js`,
    script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("src", `${source}`);
  document.body.append(script);
  
  script.onload = () => initialiseSevenRooms();
  script.onerror = () => console.error(`error loading "${source}"`);
  console.timeEnd("🍈 handleAPIinjection");
} // end handleAPIinjection()

// 🍑 initialise sevenrooms for each button
function initialiseSevenRooms() {
  console.time("🍈 initialiseSevenRooms");
  // scoped
  const group = "scorpiosmykonos",
    locations = ["beach", "sunsetbeach", "restaurant"],
    buttons = document.querySelectorAll(".btn-widget");

  Array.from(buttons).forEach((button) => {
    const venueId = button.dataset.venue,
      triggerId = button.id;

    // define "allVenues", if needed
    function allVenues() {
      if (venueId == `${group}group`) {
        return locations.map((location) => `${group}${location}`);
      } else {
        return [];
      } // end if
    }

    // inject values + initialise widget
    SevenroomsWidget.init({
      venueId: venueId,
      allVenues: allVenues(),
      triggerId: triggerId,
      type: "reservations",
      styleButton: false
    });
  }); // end for each button
  console.timeEnd("🍈 initialiseSevenRooms");
} // end initialiseSevenRooms()

// go get an 🍦
