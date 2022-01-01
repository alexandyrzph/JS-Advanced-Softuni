function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        //   TODO:
        let searchField = document.getElementById('searchField').value.toLowerCase();
        let tableElements = Array.from(document.querySelectorAll('tbody tr'));


        tableElements.forEach((el) => {
            let text = el.textContent.toLowerCase();
            if (text.includes(searchField)) {
                el.classList.add('select');
            } else {
                el.classList.remove('select');
            }
        });
        document.getElementById('searchField').value = '';
    }
}