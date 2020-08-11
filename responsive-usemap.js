/*
 * Responsive usemap image areas
 * BUILD 03.07.2020 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  createAreas();
  responsiveUseMap();
});

function createAreas() {
  const restaurant = document.createElement("AREA"),
    sunsetBeach = document.createElement("AREA"),
    terrace = document.createElement("AREA"),
    slopeBeach = document.createElement("AREA"),
    privateBeach = document.createElement("AREA"),
    oasisBeach = document.createElement("AREA"),
    map = document.getElementById("locations"),
    areas = [
      restaurant,
      sunsetBeach,
      terrace,
      slopeBeach,
      privateBeach,
      oasisBeach
    ],
    locations = [
      ["Restaurant", "616,218,785,243", "..."],
      ["Sunset Beach", "382,509,573,536", "..."],
      ["Terrace", "951,463,1080,489", "..."],
      ["Slope Beach", "872,628,1048,652", "..."],
      ["Private Beach", "91,798,293,825", "..."],
      ["Oasis Beach", "960,907,1138,936", "..."]
    ];

  for (let i = 0; i < areas.length; i++) {
    let area = areas[i],
      location = locations[i];
    area.setAttribute("shape", "rect");
    area.setAttribute("coords", location[1]);
    area.setAttribute("alt", locations[0]);
    area.setAttribute("href", locations[2]);
    map.appendChild(area);
  }
} // end createAreas

function responsiveUseMap() {
  $("img[usemap]").rwdImageMaps();
}
