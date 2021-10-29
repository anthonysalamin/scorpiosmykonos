/*
 * 🟠 SCORPIOS | Isotope + imagesLoaded
 * V.1 | 11.07.2020 @ 12:12 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  injectIsotopeScripts();
  console.log(
    `%c loaded:`,
    `color: green`,
    `V.1 | 11.07.2020 @ 12:12 | Isotope + imagesLoaded`
  ); // end logging
}); // end DOM loaded

// init Isotope
function initIsotope() {
  const grid = document.getElementById("grid");
  const log = console.log;
  if (typeof Isotope === "undefined") {
    log(
      "Ooh 🍅 Isotope scripts not loaded, Mixitup function will not initialise further"
    );
    return;
  } else {
    log("Yay 🥦 Isotope scripts injected, Isotope is ready.");
  }

  const iso = new Isotope(grid, {
    itemSelector: ".item",
    percentPosition: true,
    masonry: {
      columnWidth: ".item" // grid-sizer (?)
    }
  });

  // layout Isotope after each image loads
  imagesLoaded(grid).on("progress", () => {
    iso.layout();
  });
} // end initIsotope()

// dynamically inject Isotope scripts
function injectIsotopeScripts() {
  const grid = document.getElementById("grid");
  const log = console.log,
    body = document.body,
    delay = 0.25;

  // create script elements
  const scriptIsotope = document.createElement("script"),
    scriptImagesloaded = document.createElement("script");

  // define script urls
  const URLs = [
    [
      scriptImagesloaded,
      "https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.pkgd.min.js"
    ],
    [
      scriptIsotope,
      "https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js"
    ]
  ];

  // check if Isotope is needed
  if (grid != null) {
    // define script source based on URLs array + inject scripts into body
    URLs.forEach((url) => {
      url[0].src = url[1];
      body.insertBefore(url[0], body.childNodes[1].nextSibling);
    });

    log("Yay 🥦 An Isotope grid is present.");

    // init Isotope after delay
    setTimeout(function () {
      initIsotope();
    }, delay * 1000);
  } else {
    log("Yay 🥦 It seems no Isotope layout is needed.");
    return;
  }
} // end injectIsotopeScripts()
