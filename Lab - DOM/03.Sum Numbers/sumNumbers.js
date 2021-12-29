function calc() {
    //extracting the first value from textArea
    const num1 = document.getElementById('num1').value;
    //extracting the second value from textArea
    const num2 = document.getElementById('num2').value;
    // print the result in the id sum textArea
    document.getElementById('sum').value = Number(num1)+Number(num2);
}