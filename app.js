function randomNumber(min, max) {

    let number = Math.round(Math.random() * (max - min));
    return number;

}

var number1, number2, operator, True = 0, False = 0;

let selectOperator = ["+", "-", "X", "/"];

let btncvp = document.getElementById("btncvp");
number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("operator");


window.onload = function () {

    number1.textContent = randomNumber(0, 3);
    number2.textContent = randomNumber(0, 100);
    operator.textContent = selectOperator[randomNumber(0, 3)];


}
