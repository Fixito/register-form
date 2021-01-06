const images = ["fall.jpeg", "leaf.jpeg", "flowerPlant.jpeg"];

function changeBackground() {
  let randomNumber = ~~(Math.random() * images.length);
  document.body.style.backgroundImage = "url(img/" + images[randomNumber] + ")";
}

window.onload = changeBackground;
