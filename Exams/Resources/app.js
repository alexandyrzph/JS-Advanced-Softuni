window.addEventListener('load', solve);

function solve() {
    const songsCollection = document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');
    let likes
    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();
        const formDataElement = document.querySelector('form');
        const formData = new FormData(formDataElement);

        const genre = formData.get('genre').trim();
        const name = formData.get('name').trim();
        const author = formData.get('author').trim();
        const date = formData.get('date').trim();

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        } else {
            const divElement = document.createElement('div');
            divElement.classList = 'hits-info';

            const img = document.createElement('img');
            img.src = './static/img/img.png';

            const gendreH2 = document.createElement('h2');
            gendreH2.textContent = 'Genre: ' + genre;
            const nameH2 = document.createElement('h2');
            nameH2.textContent = 'Name: ' + name;
            const authorH2 = document.createElement('h2');
            authorH2.textContent = 'Author: ' + author;
            const dateH3 = document.createElement('h3');
            dateH3.textContent = 'Date: ' + date;

            const saveButton = document.createElement('button');
            saveButton.classList = 'save-btn';
            saveButton.textContent = 'Save song';

            const likeButton = document.createElement('button');
            likeButton.classList = 'like-btn';
            likeButton.textContent = 'Like song';

            const deleteButton = document.createElement('button');
            deleteButton.classList = 'delete-btn';
            deleteButton.textContent = 'Delete';

            divElement.appendChild(gendreH2, nameH2, authorH2, dateH3, saveButton, likeButton, deleteButton);
            divElement.appendChild(nameH2);
            divElement.appendChild(authorH2);
            divElement.appendChild(dateH3);
            divElement.appendChild(saveButton);
            divElement.appendChild(likeButton);
            divElement.appendChild(deleteButton);
            
            songsCollection.appendChild(divElement);
        }

        document.body.addEventListener('click', (event) => {
            if (event.target.classList == 'save-btn') {
                event.target.parentElement.remove();

                const divElement = document.createElement('div');
                divElement.classList = 'hits-info';

                const img = document.createElement('img');
                img.src = './static/img/img.png';

                const gendreH2 = document.createElement('h2');
                gendreH2.textContent = event.target.parentElement.children[1].textContent;
                const nameH2 = document.createElement('h2');
                nameH2.textContent = event.target.parentElement.children[2].textContent;
                const authorH2 = document.createElement('h2');
                authorH2.textContent = event.target.parentElement.children[3].textContent;
                const dateH3 = document.createElement('h3');
                dateH3.textContent = event.target.parentElement.children[4].textContent;

                const deleteButton = document.createElement('button');
                deleteButton.classList = 'delete-btn';
                deleteButton.textContent = 'Delete';
                
                divElement.appendChild(img);
                divElement.appendChild(gendreH2);
                divElement.appendChild(nameH2);
                divElement.appendChild(authorH2);
                divElement.appendChild(dateH3);
                divElement.appendChild(deleteButton);

                savedSongs.appendChild(divElement);
            }

            if (event.target.classList == 'like-btn') {

            }

            if (event.target.classList == 'delete-btn') {

            }
        })

    }

}