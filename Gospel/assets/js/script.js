const letters = document.querySelectorAll(".letter");
const colors = ["red", "green", "white", "blue", "yellow"];
let index = 0;
const image = document.querySelector("img");

function changeColors() {
  letters.forEach((letter, i) => {
    const color = colors[(index + i) % colors.length];
    letter.className = "letter " + color;
    letter.style.filter = `drop-shadow(0 0 5px ${color})`;
  });
  
  const color = colors[index % colors.length];
  image.style.filter = `drop-shadow(0 0 10px ${color})`;
  index++;
}

setInterval(changeColors, 500);