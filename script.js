// Select elements
const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");

// Function to update the background color
function updateColor() {
    const selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
}

// Add event listener
colorInput.addEventListener("input", updateColor);
