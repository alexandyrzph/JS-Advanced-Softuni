function create(words) {
    const content = document.getElementById('content');

    words.forEach((word => {
        const div = document.createElement('div');
        const para = document.createElement('p');
        para.textContent = word;
        para.style.display = 'none';
        div.appendChild(para);
        content.appendChild(div)
        div.addEventListener('click', (e) => {e.currentTarget.children[0].style.display = ''});
    }))
}