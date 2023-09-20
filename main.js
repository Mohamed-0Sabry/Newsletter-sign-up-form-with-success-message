let email = document.getElementById("email");
let form = document.getElementById("form");
let main = document.querySelector(".main");
let popup = document.querySelector(".popup");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (window.sessionStorage.getItem(`email`) === email.value) {
    popup.classList.add("isActive");
  } else {
    window.sessionStorage.setItem(`email`, email.value);
    window.open("secondIndex.html", "_parent");
  }
});

document.querySelector("html").addEventListener("click", function (e) {
  popup.classList.remove("isActive");
});
