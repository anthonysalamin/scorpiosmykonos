/*
 * Thanks
 * CODEPEN: Scorpios | Thanks v.1
 * BUILD: 31.07.2020 | anthonysalamin.ch
*/
console.log("Thanks v.1 loaded");
(function thanks() {
      "use strict";
      // globals
      const log = console.log,
            url = window.location.href, // "https://www.scorpiosmykonos.com/thanks?name={{name}}"
            injectName = document.getElementsByClassName("thanks-name")[0],
            name = url.split("=")[1];
      log(name);
      injectName.textContent = name;
})();