var link = document.querySelector(".popup-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector(".form-modal");
var storage = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    email.value = storage;
    text.focus();
  } else {
    email.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("kewdown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
