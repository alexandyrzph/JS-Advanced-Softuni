function focused() {
    Array.from(document.getElementsByTagName('input')).forEach(f => {
        f.addEventListener('focus', (ev) => ev.target.parentNode.className = 'focused');
        f.addEventListener('blur', (ev) => ev.target.parentNode.className = '');
    });
}