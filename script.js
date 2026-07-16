// Welcome message
window.onload = function () {
    alert("Welcome to Tealaxx Coffee!");
};

// Smooth button effect
const buttons = document.querySelectorAll(".button, .btn");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});
