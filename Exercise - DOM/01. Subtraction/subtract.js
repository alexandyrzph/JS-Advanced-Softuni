function subtract() {
    const num1 = document.getElementById('firstNumber');
    const num2 = document.getElementById('secondNumber');
    const sum = Number(num1.value)-Number(num2.value);
    document.getElementById('result').textContent = sum;
}