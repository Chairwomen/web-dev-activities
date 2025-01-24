function plus() {
    document.getElementById('operator').value = '+';
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if (operator == "+") {
            answer = Number(display2) + Number(display1);

        }

        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
    }

    else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
    }
    document.getElementById('operator').value = "+";
}

function minus() {
    document.getElementById('operator').value = '-';
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if (operator == "-") {
            answer = Number(display1) - Number(display2);

        }

        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
    }

    else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
    }
    document.getElementById('operator').value = "-";
}
function times() {
    document.getElementById('operator').value = '*';
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if (operator == "*") {
            answer = Number(display2) * Number(display1);

        }

        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
    }

    else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
    }
    document.getElementById('operator').value = "*";
}
function divide() {
    document.getElementById('operator').value = '/';
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if (operator == "/") {
            answer = Number(display2) / Number(display1);

        }

        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
    }

    else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
    }
    document.getElementById('operator').value = "/";
}

function equal() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator == "+") {
        answer = Number(display1) + Number(display2);
    }
    else if (operator == "-") {
        answer = Number(display2) - Number(display1);
    }
    else if (operator == "*") {
        answer = Number(display1) * Number(display2);
    }
    else if (operator == "/") {
        answer = Number(display1) / Number(display2);
    }

    document.getElementById('display1').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";
}