/*
 * 🟢 SCORPIOS | thanks V.1
 * build: 31.07.2020 @ 12:12 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
      thanks();
      console.log(
        `%c loaded:`,
        `color: green`,
        `phone thanks V.1 | build: 31.07.2020 @ 12:12`
      ); // end logging
    }); // end DOM loaded
    
    function thanks() {
      const log = console.log,
        url = window.location.href, // "https://www.scorpiosmykonos.com/thanks?name={{name}}"
        injectName = document.getElementsByClassName("thanks-name")[0],
        name = url.split("=")[1];
      log(name);
      injectName.textContent = name;
    } // end thanks()
    