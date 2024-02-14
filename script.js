const inputDisplay = document.getElementById("inputDisplay");
let calHistory = [];
const appendItem = (input) => {
    inputDisplay.value += input
}

const clearInput = () => {
    inputDisplay.value = ""
}

const calculate = () =>{
    try {
        const rest = eval(inputDisplay.value)
        inputDisplay.value = rest
        appendToHistory(`${inputDisplay.value}`)
    } catch (error) {
        inputDisplay.value = `Syntax Error`
    }
}

function appendToHistory(calc) {
    calHistory.push(calc);
    HistoryList();
}

function HistoryList() {
    const History = document.getElementById('list');
    History.innerHTML = '';
    calHistory.forEach((calc) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = calc;
        row.appendChild(cell);
        History.appendChild(row);
    });
}