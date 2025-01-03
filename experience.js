const buttons = document.querySelectorAll('.btn-style');  // Get all buttons
const contentDivs = document.querySelectorAll('.one, .two, .three, .four');  // Select all content divs

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Hide all content divs
        contentDivs.forEach(div => div.style.display = 'none');

        // Match the button's class with the content div's class
        if (this.classList.contains('btn-2021')) {
            document.querySelector('.one').style.display = 'block';  // Show content for 2021
        } else if (this.classList.contains('btn-2022')) {
            document.querySelector('.two').style.display = 'block';  // Show content for 2022
        } else if (this.classList.contains('btn-2023')) {
            document.querySelector('.three').style.display = 'block';  // Show content for 2023
        } else if (this.classList.contains('btn-2024')) {
            document.querySelector('.four').style.display = 'block';  // Show content for 2024
        }
    });
});
