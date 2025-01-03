const word = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];
let answerArr = [];
let currentChar = '';
let count = 6;
let gameOver = false; 

const images = [
    "images/hang0.gif",
    "images/hang1.gif",
    "images/hang2.gif",
    "images/hang3.gif",
    "images/hang4.gif",
    "images/hang5.gif",
    "images/hang6.gif"
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
                showGamePopup("Yay! You guessed it right! WELCOME to my page");
            }
        } else if (count > 0) {
            count--;
            updateImage();
            if (count === 0) {
                gameOver = true;
                showGamePopup("Game Over! The correct word was " + word.join(""));
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
    fadeInImage();
}

function fadeInImage() {
    imgElement.style.opacity = 0;  // Start with image invisible
    imgElement.style.transition = "opacity 3s"; // Smooth fade transition
    setTimeout(() => {
        imgElement.style.opacity = 1; // Fade in
    }, 100); // Delay to apply opacity change
}

function isWordComplete() {
    // Check if all letters in answerArr are filled correctly
    return answerArr.join("") === word.join("");
}

// Pop-up function for Game Over
function showGamePopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<div class="popup-content">
                         <p>${message}</p>
                         <button onclick="closePopup()">Try Again</button>
                       </div>`;

    document.body.appendChild(popup);
    
    // Trigger the fade-in effect by adding the "active" class
    setTimeout(() => {
        popup.classList.add("active");
    }, 500); // Slight delay to allow CSS transition to be applied
}

function closePopup() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("active"); // Trigger fade-out
    setTimeout(() => {
        popup.remove(); // Remove the popup after fade-out
    }, 500); // Time to wait for the fade-out transition to complete
}

function resetGame() {
    // Reset all game variables
    answerArr = [];
    currentChar = '';
    count = 6;
    gameOver = false;

    // Reset the word and update the display
    for (let i = 0; i < word.length; i++) {
        answerArr[i] = "_";
    }

    updateWordBox();
    imgElement.src = images[0]; // Reset the image
    imgElement.style.opacity = 1; // Ensure the image is visible initially

    // Enable all alphabet buttons
    const buttons = document.querySelectorAll(".keys button");
    buttons.forEach(button => button.disabled = false);

    // Remove the pop-up
    const popup = document.querySelector(".popup");
    if (popup) popup.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    const text = "I'm Amandeep Kaur.";
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
