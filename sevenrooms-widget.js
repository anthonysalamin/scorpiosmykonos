/*
 * 🟢 SCORPIOS | SevenroomsWidget v.2
 * last build 09.04.22 @ 13:19
*/
document.addEventListener("DOMContentLoaded", () => {
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
}); // end DOM loaded