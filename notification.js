//Author: TheLoloS

function alert(type, string) {
  //do variable with all alerts
  let alerts = [...document.querySelectorAll(".alert")];
  alerts.forEach((element) => {
    //checking if any of the items are the same as searched
    if (element.attributes.type.nodeValue == type) {
      element.innerHTML = string;
      //do time line to manage gsap operations
      let tml = gsap.timeline();
      tml.to(`.alert-${type}`, {
        onStart: showDiv,
        onStartParams: [element],
        duration: 2,
        opacity: 1,
        x: -10,
      });
      tml.to(`.alert-${type}`, {
        duration: 2,
        opacity: 0,
        delay: 5,
        x: 10,

        onComplete: showDiv,
        onCompleteParams: [element],
      });
    }
  });
}

//turn of/on DIV
function showDiv(div) {
  div.classList.toggle("none");
}

export default alert;

//to use need:
//gsap: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js
//bootsrap: https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css
/*In css must change alert to this: 
.alert {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 2vh;
}
*/
//Usage
//import notification from "./notification.js"; <= main script must be module type!
//in html you must add this:
/*
    <div type="primary" class="alert alert-primary none" role="alert"></div>
    <div type="secondary" class="alert alert-secondary none" role="alert"></div>
    <div type="success" class="alert alert-success none" role="alert"></div>
    <div type="danger" class="alert alert-danger none" role="alert"></div>
    <div type="warning" class="alert alert-warning none" role="alert"></div>
    <div type="info" class="alert alert-info none" role="alert"></div>
    <div type="light" class="alert alert-light none" role="alert"></div>
    <div type="dark" class="alert alert-dark none" role="alert"></div>
    */
