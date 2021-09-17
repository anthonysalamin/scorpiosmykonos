Weglot.initialize({ api_key: "wg_0d48bebd939d455579cfc61d3ab2fb353" }),
  Weglot.on("initialized", () => {
    const e = Weglot.getCurrentLang();
    document.querySelector(".wg-element-wrapper.sw3 [lang=" + e + "]") &&
      document
        .querySelector(".wg-element-wrapper.sw3 [lang=" + e + "]")
        .click();
  }),
  document.querySelectorAll(".wg-element-wrapper.sw3 [lang]").forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        setTimeout(() => Weglot.switchTo(this.getAttribute("lang")), 700);
    });
  });