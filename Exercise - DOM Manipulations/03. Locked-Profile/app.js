function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const infoDiv = e.target.parentElement.querySelector('div');
        const radio = e.target.parentElement.querySelector('input[type="radio"]')
        if (!radio.checked) {
            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it'
            } else {
                infoDiv.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}