const letters = document.querySelectorAll(".letter");
const colors = ["red", "green", "white", "blue", "yellow"];
let index = 0;
const notes = document.querySelectorAll(".musical-note");
const images = document.querySelectorAll("img");

function changeColors() {
  letters.forEach((letter, i) => {
    const color = colors[(index + i) % colors.length];
    letter.className = "letter";
    letter.style.color = color;
    letter.style.filter = `drop-shadow(0 0 5px ${color})`;
  });
  notes.forEach((note, i) => {
    const color = colors[(index + i) % colors.length];
    note.className = "musical-note";
    note.style.color = colors[2];
    note.style.filter = `drop-shadow(0 0 5px ${color})`;
  });

  images.forEach(img => {
    const color = colors[index % colors.length];
    img.style.filter = `drop-shadow(0 0 10px ${color})`;
  });
  index++;
}

setInterval(changeColors, 500);