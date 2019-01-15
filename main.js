let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let numOperator = document.getElementById("operator-select");
let resultcon = document.getElementById("printres")
let result;
let submitNumber = document.getElementById("numAv");
let avArray = [];
let showNewArray = document.getElementById("showarray");
let avRes = document.getElementById("newResultAverage");

function submit() {
    switch (numOperator.value) {
        case "+":
            result = parseInt(number1.value) + parseInt(number2.value);
            PrintResult();
            break;
        case "-":
            result = parseInt(number1.value) - parseInt(number2.value);
            PrintResult();
            break;
        case "/":
            result = parseInt(number1.value) / parseInt(number2.value);
            PrintResult();
            break;
        case "*":
            result = parseInt(number1.value) * parseInt(number2.value);
            PrintResult();
            break;
        case "%":
            result = parseInt(number1.value) % parseInt(number2.value);
            PrintResult();
            break;
        default:
            window.alert("Please select an operator");
            break;
    }
}

function PrintResult() {
    var h = document.createElement("h1");
    var t = document.createTextNode(result);
    h.appendChild(t);
    resultcon.appendChild(h);
    console.log(result);
}

function submit2() {
    let parsedValue = +submitNumber.value;
    avArray.push(parsedValue);
    console.log(parsedValue);
    console.log(avArray);
    avArray.toString();
    showNewArray.innerHTML = avArray;
}

function reducer(a, b) {
    return a + b;
}


function submit3() {
    var sum = avArray.reduce(reducer);
    console.log(sum);
    var average = sum / avArray.length;
    console.log(average);
    avRes.innerHTML = average.toString();
}



