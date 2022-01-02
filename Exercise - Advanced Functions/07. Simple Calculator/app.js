function calculator() {
    let firstInput;
    let secondInput;
    let resultBox;

    function init(selector1, selector2, selector3) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resultBox = document.querySelector(selector3);
        console.log(firstInput, secondInput, resultBox);
    }

    function add() {
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }


    return {
        init,
        add,
        subtract,
    }

}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


