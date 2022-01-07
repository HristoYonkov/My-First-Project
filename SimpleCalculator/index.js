let hiddenInputField = '';
let operation = '';
let isClear = false;
let startover = false;
document.getElementById('in').value = '0';


function press (e) {
    let btnNumber = e.target.innerText;
    if (startover) {
        hiddenInputField = '';
        startover = false;
        document.getElementById('in').value = '';
    }

    if (hiddenInputField === '') {
        if (document.getElementById('in').value === '0') {
            document.getElementById('in').value = '';
        }
        let input = document.getElementById('in').value += btnNumber;

    } else {
        if (!isClear) {
            document.getElementById('in').value = btnNumber;
            isClear = true;
        } else {
            if (document.getElementById('in').value === '0') {
                
            } else {
                document.getElementById('in').value += btnNumber;
            }
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
    if (operation !== '' && operation !== '/') {
        equal();
    }

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
    if (operation !== '' && operation !== 'x') {
        equal();
    }

    if (operation === '') {
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
        
    } else if (operation === 'x' && isClear) {
        equal();
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
    }
}


function addition(e) {
    if (operation !== '' && operation !== '+') {
        equal();
    }

    if (operation === '') {
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
        
    } else if (operation === '+' && isClear) {
        equal();
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
    }
}


function subtract(e) {
    if (operation !== '' && operation !== '-') {
        equal();
    }

    if (operation === '') {
        hiddenInputField = document.getElementById('in').value;
        operation = e.target.innerText;
        
    } else if (operation === '-' && isClear) {
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

    } else if (operation === '+') {
        result = firstNum + secondNum;
        document.getElementById('in').value = result;
        hiddenInputField = '';
        operation = '';
        isClear = false;

    } else if (operation === '-') {
        result = firstNum - secondNum;
        document.getElementById('in').value = result;
        hiddenInputField = '';
        operation = '';
        isClear = false;
    }

    if(e !== undefined) {
        startover = true;
    }
    
}
