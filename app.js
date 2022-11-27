var btnRun = document.getElementById("btn");
var resultValue = document.getElementById("result");



btnRun.addEventListener("click", function () {

    var metin = "";
    var operators = ["*", "/", "-", "+"];

    selectRandom = Math.floor(Math.random() * 4);

    metin = operators[selectRandom];

    switch (metin) {
        case "+":
            metin = "Toplama işlemi"
            break;
        case "/":
            metin = "Bölme işlemi"
            break;
        case "*":
            metin = "Çarpma işlemi"
            break;
        case "-":
            metin = "Çıkarma işlemi"
            break;

        default:
            metin = "Geçersiz işlem"
            break;
    }

    // resultValue.textContent = metin;
    btnRun.textContent = metin;

})
