let secondButton = document.querySelector(".secondButton");

secondButton.addEventListener("click", function () {
  window.open("index.html", "_parent");
});

function addtext() {
  let span = document.getElementById("span");
  span.innerText = window.sessionStorage.getItem("email");
  span.classList.add("text-span");
}
addtext();
