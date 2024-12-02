// Get the display element
const display = document.getElementById("Display");

// Variables to store the current input and operations
let currentInput = "";
let operator = null;
let firstValue = null;

// Get all the buttons and add click listeners
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const value = button.getAttribute("data-num");

        // If it's the clear button, reset everything
        if (value === "C") {
            clearDisplay();
        }
        // If it's the equals button, perform the calculation
        else if (value === "=") {
            calculateResult();
        }
        // If it's an operator (+, -, *, /), save the first value and operator
        else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        }
        // For numbers and decimal points, add to the current input
        else {
            appendToInput(value);
        }
    });
});

// Function to clear the display and reset variables
function clearDisplay() {
    currentInput = "";
    operator = null;
    firstValue = null;
    display.innerText = "0";
}

// Function to append numbers and decimal points to the current input
function appendToInput(value) {
    currentInput += value;
    display.innerText = currentInput;
}

// Function to set the operator and save the first value
function setOperator(op) {
    if (currentInput !== "") {
        firstValue = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    }
}

// Function to calculate and display the result
function calculateResult() {
    if (firstValue !== null && currentInput !== "") {
        const secondValue = parseFloat(currentInput);
        let result = 0;

        // Perform the correct operation based on the operator
        if (operator === "+") {
            result = firstValue + secondValue;
        } else if (operator === "-") {
            result = firstValue - secondValue;
        } else if (operator === "*") {
            result = firstValue * secondValue;
        } else if (operator === "/") {
            result = firstValue / secondValue;
        }

        // Update the display with the result and reset for next calculation
        display.innerText = result;
        currentInput = "";
        firstValue = null;
        operator = null;
    }
}
