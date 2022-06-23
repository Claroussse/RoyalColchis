// Confirmation du message envoyé
const message =
  "Thank you for your message. The Royal Kingdom will answer you as soon as possible!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
