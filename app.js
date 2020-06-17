var colorChanger = document.getElementById("btn");
var body = document.querySelector("body");
var colors = ["orange", "red", "purple", "green", "pink"];

document.body.style.backgroundColor = "yellow";

colorChanger.addEventListener("click", function() {
  var diffColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[diffColor];
})