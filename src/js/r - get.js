const BASE_URL = 'http://localhost:4040';

// fetch('http://localhost:4040/books/2')
//   .then(res => res.json())
//   .then(console.log);

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);
