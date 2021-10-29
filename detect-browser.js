/*
 * 🟢 SCORPIOS | browser detection V.1
 * detect msie and redirect to Chrome download page
 * build: 17.09.2021 21:39 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", function () {
  searchAndDestroy();
  console.log(
    `%c loaded:`,
    `color: green`,
    `browser detection V.1 | build: 17.09.2021 21:39`
  ); // end logging
});

function searchAndDestroy() {
  var internetExplorerBrowser = navigator.userAgent.match(/Trident.*rv[ :]*11\./i);
  if (internetExplorerBrowser) {
    alert(
      "Oops, you're using a very outdated browser 🤡 We suggest updating your browser to a modern one like Chrome."
    );
    setTimeout(function () {
      // redirect to Chrome download page
      window.open("https://www.google.com/chrome/");
    }, 1500);
  } // end if internetExplorer
} // end searchAndDestroy()
