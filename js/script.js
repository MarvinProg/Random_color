function generateColor() {
  let randomColor = (Math.floor(Math.random()*16777216)).toString(16);
  console.log(randomColor);
  document.body.style.backgroundColor = "#" + randomColor;
  text.innerText = "#" + randomColor;
}