class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, pages, read) {
        if (!title || !author || isNaN(pages)) {
            alert('Please provide valid inputs!');
            return;
        }
        const newBook = new Book(title, author, pages, read);
        this.books.push(newBook);
        this.render();
    }

    removeBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
            this.render();
        }
    }

    toggleRead(index) {
        if (index >= 0 && index < this.books.length) {
            this.books[index].toggleReadStatus();
            this.render();
        }
    }

    render() {
        const container = document.getElementById('container');
        container.innerHTML = ''; // Clear the container before rendering

        this.books.forEach((book, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${book.title}</h2>
                <p>by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p>${book.read ? 'Read' : 'Not Read'}</p>
            `;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => this.removeBook(index));
            card.appendChild(removeBtn);

            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
            toggleBtn.addEventListener('click', () => this.toggleRead(index));
            card.appendChild(toggleBtn);

            container.appendChild(card);
        });
    }
}

// Create a library instance
const myLibrary = new Library();

// Function to handle adding a new book
function addBookToLibrary() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = parseInt(document.getElementById('pages').value.trim());
    const read = document.getElementById('read').checked;

    myLibrary.addBook(title, author, pages, read);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}

// Event listener for the "Add Book" button
document.getElementById('newBook').addEventListener('click', addBookToLibrary);

// Initial render
myLibrary.render();
