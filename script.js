function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    const result = document.getElementById('result');
    const lastChar = result.value.slice(-1);
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        result.value += operator;
    }
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}