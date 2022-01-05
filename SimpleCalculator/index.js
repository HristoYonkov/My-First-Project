
let hiddenInputField = '';
let operation = '';
let isClear = false;

function press (e) {
    let btnNumber = e.target.innerText;

    if (hiddenInputField === '') {
        let input = document.getElementById('in').value += btnNumber;
    } else {
        if (!isClear) {
            document.getElementById('in').value = btnNumber;
            isClear = true;
        } else {
            document.getElementById('in').value += btnNumber;
        }
    }
}

function dotPress (e) {
    let text = document.getElementById('in').value;
    if (!text.includes('.')) {
        let dot = e.target.innerText;
        document.getElementById('in').value += dot;
    }
}

function divide(e) {
    if (operation === '') {
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
        
    } else if (operation === '/' && isClear) {
        equal();
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
    }
}


function multiplication(e) {
    if (operation === '') {
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
        
    } else if (operation === 'x' && isClear) {
        equal();
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
    }
}


function equal (e) {
    let firstNum = Number(hiddenInputField);
    let secondNum = Number(document.getElementById('in').value);
    let result;
    if (operation === '/') {
        result = firstNum / secondNum;
        document.getElementById('in').value = result;
        hiddenInputField = '';
        operation = '';
        isClear = false;

    } else if (operation === 'x') {
        result = firstNum * secondNum;
        document.getElementById('in').value = result;
        hiddenInputField = '';
        operation = '';
        isClear = false;
    }
    
}
