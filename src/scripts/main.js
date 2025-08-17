const input = document.getElementById("input");
const btnDisplay = document.querySelectorAll(".btnDisplay");
const btnDelete = document.querySelector(".btnDelete");
const btnEqual = document.querySelector(".btnEqual");
const btnNegation = document.querySelector(".btnNegation");

// Calculate
btnEqual.addEventListener("click", () => {
    calculate();
})

function calculate() {
    const operators = ["+", "-", "÷", "×"];
    const inputValue = input.value;
    
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        
        

        if (inputValue.includes(operator)) {
            const parts = inputValue.split(operator);
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);

            if (operator === "+") {
                input.value = num1 + num2;
                return;
            }
            if (operator === "-") {
                input.value = num1 - num2;
                return;
            }
            if (operator === "×") {
                if (num1 === -num1) {
                    
                } else {
                    input.value = num1 * num2;
                    return;
                }
            }
            if (operator === "÷") {
                if (num2 === 0) {
                    input.value = "Error";
                    return;
                } else {
                    input.value = num1 / num2;
                    return;
                }
            }
        }
    }
}

// Negation
btnNegation.addEventListener("click", () => {
    positiveOrNegative(input.value);
})

function positiveOrNegative(num) {
    // const positive = num;
    const negative = -num;

   input.value = negative;
}

// Display
btnDisplay.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnText = btn.innerText;
        displayValue(btnText);
    })});

function displayValue(element) {
    input.value += element;
}

// Delete
btnDelete.addEventListener("click", () => {
    deleteValue();
});

function deleteValue() {
    input.value = "";
}