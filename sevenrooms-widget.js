console.log(
  `%c deployed:`,
  `color: green`,
  `🟢 SCORPIOS | sevenrooms-widget | v.3.1.2 | 24.04.2022 @18:56`
);

// on DOM loaded handle sevenrooms integration
document.addEventListener("DOMContentLoaded", () => {
  handleAPIinjection();
});

// 🥬 helper | check if current URL needs API injection
function checkNeededURLs() {
  console.time("🥬 checkNeededURLs");

  // scoped variables
  let neededURLs = [];
  const currentURL = window.location.href,
    urlSchema = {
      protocol: "https",
      subDomain: "www",
      rootDomain: "scorpiosmykonos",
      TLDs: ["com", "webflow.io"], // Top Level Domain
      paths: ["", "reserve"]
    };

  // build needed URLs list
  Array.from(urlSchema.TLDs).forEach((TLD) => {
    const URls = urlSchema.paths.map(
      (path) =>
        `${urlSchema.protocol}://${urlSchema.subDomain}.${urlSchema.rootDomain}.${TLD}/${path}`
    );
    neededURLs.push(...URls);
  });

  console.table(neededURLs);
  console.timeEnd("🥬 checkNeededURLs");
  return neededURLs.includes(currentURL); // boolean
}

// 🍑 inject API ind DOM based on URL check
function handleAPIinjection() {
  console.time("🍑 handleAPIinjection");
  if (!checkNeededURLs()) return;

  // scoped variables
  const source = `https://www.sevenrooms.com/widget/embed.js`,
    script = document.createElement("script");
    
  // set script attributes
  script.setAttribute("async", "");
  script.setAttribute("src", `${source}`);
  document.body.append(script);

  // handle onload / onerror
  script.onload = () => initialiseSevenRooms();
  script.onerror = () => console.error(`error loading "${source}"`);
  console.timeEnd("🍑 handleAPIinjection");
}

// 🍒 initialise sevenrooms
function initialiseSevenRooms() {
  console.time("🍒 initialiseSevenRooms");

  // scoped variables
  const group = "scorpiosmykonos",
    locations = ["beach", "sunsetbeach", "restaurant"],
    buttons = document.querySelectorAll(".btn-widget");

  // for each button, init SevenroomsWidget
  Array.from(buttons).forEach((button) => {
    
    // scoped variables
    const venueId = button.dataset.venue,
      triggerId = button.id,
      locationsList = locations.map((location) => `${group}${location}`),
      allVenues = venueId == `${group}group` ? locationsList : [];

    // inject values + initialise widget
    SevenroomsWidget.init({
      venueId: venueId,
      allVenues: allVenues,
      triggerId: triggerId,
      type: "reservations",
      styleButton: false
    });
    
  }); // end for each button
  console.timeEnd("🍒 initialiseSevenRooms");
}

// go get an 🍦