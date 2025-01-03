const word = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];
let answerArr = [];
let currentChar = '';
let count = 6;
let gameOver = false; 

const images = [
    "images/hangman-0.svg",
    "images/hangman-1.svg",
    "images/hangman-2.svg",
    "images/hangman-3.svg",
    "images/hangman-4.svg",
    "images/hangman-5.svg",
    "images/hangman-6.svg"
];

const imgElement = document.querySelector(".img img");

for (let i = 0; i < word.length; i++) {
    answerArr[i] = "_";
}

const answerBox = document.querySelector(".wordBox");
answerBox.textContent = answerArr.join(" ");

updateWordBox();

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const keysContainer = document.querySelector(".keys");

// Dynamically generate alphabet buttons
alphabet.split("").forEach(letter => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("btn");
    keysContainer.appendChild(button);

    button.addEventListener("click", () => {
        if (gameOver) return;
        button.disabled = true;

        currentChar = letter;
        if (word.includes(currentChar)) {
            fillWord();
            if (isWordComplete()) {
                gameOver = true;
            }
        } else if (count > 0) {
            count--;
            updateImage();
            if (count === 0) {
                gameOver = true;
                alert("Game Over! The correct word was " + word.join(""));
            }
        }
    });
});

function fillWord() {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === currentChar) {
            answerArr[i] = currentChar;
        }
    }
    updateWordBox();
}

function updateWordBox() {
    answerBox.innerHTML = ""; // Clear the box
    answerArr.forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        if (char === "_") {
            span.classList.add("blinking"); // Add blinking effect for underscores
        }
        answerBox.appendChild(span);
    });
}


function updateImage() {
    const index = 6 - count; // Calculate which image to display
    imgElement.src = images[index];
}

function isWordComplete() {
    // Check if all letters in answerArr are filled correctly
    return answerArr.join("") === word.join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const text = "I'm Amandeep Kaur! A 4th year CS student at UofC.";
    const typingEffect = document.getElementById("typingEffect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }
    function startTypingEffect() {
        typingEffect.textContent = ""; // Clear the text
        index = 0; // Reset the index
        type(); // Start typing animation
    }
    startTypingEffect();
    setInterval(startTypingEffect, 30000); 
});
