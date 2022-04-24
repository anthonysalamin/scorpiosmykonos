console.log(
  `%c loaded:`,
  `color: green`,
  `SCORPIOS | sevenrooms-widget.js | v.3.1.0 | 24.04.2022 @12:13`
);

// on DOM loaded handle sevenrooms integration
document.addEventListener("DOMContentLoaded", () => {
  handleAPIinjection();
});

// 🥬 helper | check if current URL needs API injection
function checkNeededURLs() {
  // scoped
  const url = {
    protocol: "https",
    subDomain: "www",
    rootDomain: "scorpiosmykonos",
    TLD: ["com", "webflow.io"], // Top Level Domain
    path: ["", "reserve"]
  };
  const neededURLs = [
    `${url.protocol}://${url.subDomain}.${url.rootDomain}.${url.TLD[0]}/${url.path[0]}`, // root (production)
    `${url.protocol}://${url.subDomain}.${url.rootDomain}.${url.TLD[1]}/${url.path[0]}`, // root (development)
    `${url.protocol}://${url.subDomain}.${url.rootDomain}.${url.TLD[0]}/${url.path[1]}`, // /reserve (production)
    `${url.protocol}://${url.subDomain}.${url.rootDomain}.${url.TLD[1]}/${url.path[1]}` // /reserve (development)
  ];
  const currentURL = window.location.href;
  // console.table(neededURLs);
  return neededURLs.includes(currentURL);
}

// 🍑 inject API ind DOM based on URL check
function handleAPIinjection() {
  console.time("⏱ handleAPIinjection");
  if (!checkNeededURLs()) return;
  // scoped
  const source = `https://www.sevenrooms.com/widget/embed.js`,
    script = document.createElement("script");
  // set script attributes
  script.setAttribute("async", "");
  script.setAttribute("src", `${source}`);
  document.body.append(script);
  // handle onload / onerror
  script.onload = () => initialiseSevenRooms();
  script.onerror = () => console.error(`error loading "${source}"`);
  console.timeEnd("⏱ handleAPIinjection");
}

// 🍑 initialise sevenrooms
function initialiseSevenRooms() {
  console.time("⏱ initialiseSevenRooms");
  // scoped
  const group = "scorpiosmykonos",
    locations = ["beach", "sunsetbeach", "restaurant"],
    buttons = document.querySelectorAll(".btn-widget");

  // for each button, init SevenroomsWidget
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
    } // end allVenues()

    // inject values + initialise widget
    SevenroomsWidget.init({
      venueId: venueId,
      allVenues: allVenues(),
      triggerId: triggerId,
      type: "reservations",
      styleButton: false
    });
  }); // end for each button

  console.timeEnd("⏱ initialiseSevenRooms");
} // end initialiseSevenRooms()

// go get an 🍦