/*
 * 🟢 SCORPIOS | browser detection V.1
 * detect msie and redirect to Chrome download page
 * build: 17.09.2021 21:39 | anthonysalamin.ch
*/
console.log("browser detection V.1 loaded");
function searchAndDestroy() {
  var internetExplorer = navigator.userAgent.match(/Trident.*rv[ :]*11\./i);
  var userAgent = navigator.userAgent.match(
    /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
  );
  if (internetExplorer) {
    // may the force be with you 🤡
    alert(
      "Oops, you're using a very outdated browser. We suggest updating your browser to a modern one like Chrome."
    );
    setTimeout(function () {
      // redirect to Chrome download page
      window.open("https://www.google.com/chrome/");
    }, 1500);
  } else {
    // good user, rock on
    console.log("Yay, your modern browser is " + userAgent[1]);
  }
}
searchAndDestroy();