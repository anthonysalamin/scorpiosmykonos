/*
 * 🟢 SCORPIOS | soho member id V1
 * build: 29.03.2021 @ 16:30 |anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  sohoMember();
  console.log(
    `%c loaded:`,
    `color: green`,
    `soho member id V1 | build: 29.03.2021 @ 16:30`
  ); // end logging
}); // end DOM loaded

function sohoMember() {
  // globals
  const log = console.log,
    forms = new Set(document.getElementsByClassName("form-block"));
  forms.forEach((form) => {
    // scoped
    const memberId = form.querySelector(".member-id"),
      prefix = "#SHID ";
    memberId.addEventListener("click", () => {
      memberId.value = prefix;
    });
  });
} // end sohoMember