document.getElementById('button').addEventListener('click', increment);

function increment(ev) {
    let value = Number(ev.target.textContent);
    Number(ev.target.textContent) >= 20 ? value += 2 : value++;

    ev.target.textContent = value;
}