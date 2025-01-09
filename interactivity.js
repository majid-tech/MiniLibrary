const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value.trim();
    let author = document.getElementById('author').value.trim();
    let pages = parseInt(document.getElementById('pages').value.trim());
    let read = document.getElementById('read').checked;

    if (!title || !author || isNaN(pages)) {
        alert('Please provide valid inputs!');
        return;
    }

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    let container = document.getElementById('container');
    container.innerHTML = ''; // Clear the container before rendering

    myLibrary.forEach((book, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read'}</p>
        `;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeBook(index));
        card.appendChild(removeBtn);

        let toggleBtn = document.createElement('button');
        toggleBtn.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
        toggleBtn.addEventListener('click', () => toggleRead(index));
        card.appendChild(toggleBtn);

        container.appendChild(card);
    });
}

function removeBook(index) {
    if (index >= 0 && index < myLibrary.length) {
        myLibrary.splice(index, 1);
        render();
    }
}

function toggleRead(index) {
    if (index >= 0 && index < myLibrary.length) {
        myLibrary[index].read = !myLibrary[index].read;
        render();
    }
}

document.getElementById('newBook').addEventListener('click', addBookToLibrary);
render();
