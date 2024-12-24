const terminalOutput = document.getElementById("terminal-output");
const message = "Feliz Natal";
let index = 0;
const baseColors = ['var(--red)', 'var(--green)', 'var(--blue)', 'var(--yellow)', 'var(--white)'];
let backgroundColors = [];
let textColors = [];
const images = document.querySelectorAll("img");
const colors = ["red", "green", "white", "blue", "yellow"];
let colorIndex = 0;

function generateRandomColors() {
    backgroundColors = baseColors.sort(() => Math.random() - 0.5);
    textColors = baseColors.sort(() => Math.random() - 0.5);
}

async function typeMessage() {
    if (index < message.length) {
        const char = message.charAt(index);
        if (char === ' ') {
            terminalOutput.appendChild(document.createTextNode(' '));
        } else {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.color = '#00ff00';
            span.style.padding = '2px';
            span.style.borderRadius = '3px';
            terminalOutput.appendChild(span);
        }
        index++;
        await new Promise(resolve => setTimeout(resolve, 100)); // Usando Promise para setTimeout
        await typeMessage(); // Chamada recursiva
    } else {
        terminalOutput.appendChild(cursor);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Usando Promise para setTimeout
        await deleteMessage(); // Chamada para deleteMessage
    }
}

async function deleteMessage() {
    if (index > 0) {
        if (terminalOutput.lastChild) {
            terminalOutput.removeChild(terminalOutput.lastChild);
        }
        index--;
        await new Promise(resolve => setTimeout(resolve, 50)); // Usando Promise para setTimeout
        await deleteMessage(); // Chamada recursiva
    } else {
        index = 0;
        terminalOutput.textContent = ">_ "; // Reinicia o terminal com >_
        generateRandomColors();
        await new Promise(resolve => setTimeout(resolve, 500)); // Usando Promise para setTimeout
        await typeMessage(); // Chamada para typeMessage
    }
}

const cursor = document.querySelector('.cursor');

async function changeStyles() {
    // Muda a cor da borda e do box shadow do terminal
    const terminal = document.querySelector('.terminal');
    const color = colors[colorIndex % colors.length];
    terminal.style.borderColor = color; // Muda a cor da borda
    terminal.style.boxShadow = `0 0 20px ${color}`; // Muda o box shadow
    colorIndex++;
}

async function changeDropShadow() {
    images.forEach((img, i) => {
        const color = colors[(colorIndex + i) % colors.length]; // Cor diferente para cada imagem
        img.style.filter = `drop-shadow(0 0 10px ${color})`;
    });
}

document.addEventListener("DOMContentLoaded", async function() {
    terminalOutput.textContent = ">_ "; // Adiciona >_ no início
    generateRandomColors();
    await typeMessage();

    const audio = document.querySelector('audio');
    audio.play();
});

setInterval(changeDropShadow, 500);
setInterval(changeStyles, 1000);