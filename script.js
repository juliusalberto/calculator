const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let firstNum;
let secondNum;
let operand;

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function runCalc(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            break;
    }
}

function displayValue(event) {
    const buttonValue = event.target.value;

    if (display.textContent === 'Error' || display.textContent === 'Infinity') {
        display.textContent = "";
        firstNum = null;
        secondNum = null;
        operand = null;
    }

    switch (buttonValue) {
        case "clear":
            display.textContent = "";
            firstNum = null;
            secondNum = null;
            operand = null;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            firstNum = parseFloat(display.textContent);
            display.textContent = "";
            operand = buttonValue;

            // add active class to clicked operator

            event.target.classList.add("active-operator");

            break;
        case "=":
            document.querySelectorAll(".key-operator").forEach(button => {
                button.classList.remove("active-operator");
            })

            secondNum = parseFloat(display.textContent);
            let result = runCalc(firstNum, operand, secondNum);

            if (result === undefined) {
                display.textContent = 'Error';
                break;
            }

            display.textContent = result;
            break;
        case "negate":
            display.textContent = Number(display.textContent * -1);
            break;
        case "percent":
            display.textContent = Number(display.textContent / 100);
            break;
        default:
            display.textContent += buttonValue;
            break;
    }

}

buttons.forEach(button => {
    button.addEventListener('click', displayValue);
})
