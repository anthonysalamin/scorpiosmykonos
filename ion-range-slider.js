/*
 * 🟢 SCORPIOS | ion range slider V.1
 * build: 31.07.2020 22:18 | anthonysalamin.ch
 */
console.log("ion range slider V.1 loaded");
// 🍉 plural management
function plural(a) {
  return a <= 1 ? `${a} Guest` : `${a} Guests`;
}

// 🍑 number of people
$(".slider-people").ionRangeSlider({
  skin: "round",
  min: 1,
  max: 10,
  from: 2,
  force_edges: true,
  prettify: plural,
  // max_postfix: " +",
  onStart: (data) => {
    $(".js-input").prop("value", data.from);
  },
  onChange: (data) => {
    $(".js-input").prop("value", data.from);
  }
});

// 🍓 ime slots restaurant
$(".slider-time-restaurant").ionRangeSlider({
  skin: "round",
  values: [
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00"
  ],
  from: 9,
  force_edges: true,
  prefix: "at ",
  onStart: (data) => {
    $(".js-input").prop("value", data.from);
  },
  onChange: (data) => {
    $(".js-input").prop("value", data.from);
  }
});

// 🍅 time slots beach
$(".slider-time-beach").ionRangeSlider({
  skin: "round",
  values: ["11:00", "11:30", "12:00", "12:30", "13:00"],
  from: 2,
  force_edges: true,
  prefix: "at ",
  onStart: (data) => {
    $(".js-input").prop("value", data.from);
  },
  onChange: (data) => {
    $(".js-input").prop("value", data.from);
  }
});

// 🥝 time slots sunset beach
$(".slider-time-sunsetbeach").ionRangeSlider({
  skin: "round",
  values: ["17:00", "17:30", "18:00", "18:30", "19:00"],
  from: 2,
  force_edges: true,
  prefix: "at ",
  onStart: (data) => {
    $(".js-input").prop("value", data.from);
  },
  onChange: (data) => {
    $(".js-input").prop("value", data.from);
  }
});
