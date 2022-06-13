import notification from "./notification.js";

document.getElementById("select").addEventListener("change", function () {
  notification(this.value, "Beatyfull message send to my friend!");
});
