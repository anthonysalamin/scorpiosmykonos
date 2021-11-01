/*
 * 🟢 SCORPIOS | soho member id
 * V1 | 29.03.2021 @ 16:30 | anthonysalamin.ch
 */
document.addEventListener("DOMContentLoaded", () => {
  sohoMember();
  prettyLog(`loaded`, `V.1 | 29.03.2021 @ 16:30 | soho member id`);
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

// log helper
function prettyLog(status, message) {
  let color;
  switch (status) {
      case "info":
      color = "#4DD0E1";
      break;
    case "success":
      color = "#1DE9B6";
      break;
    case "loaded":
      color = "#1DE9B6";
      break;
    case "warning":
      color = "#FFC107";
      break;
    case "error":
      color = "#FF3D00";
      break;
    default:
      color = "#90A4AE";
  }
  console.log(
    `%c${status}`,
    [
      `background: ${color}`,
      `border-radius: 0.5em`,
      `color: white`,
      `font-weight: bold`,
      `padding: 2px 0.5em`
    ].join(`;`),
    message
  );
} // end prettyLog
