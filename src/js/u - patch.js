import { title } from 'process';

const BASE_URL = 'http://localhost:4040';

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'app;ication/json',
//   },
//   body: JSON.stringify({ title: 'Большая новая Тестовая книга по HTML' }),
// };

// fetch(`${BASE_URL}/books/4404`, options)
//   .then(resp => resp.json())
//   .then(console.log());

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById({ title: 'Большая новая книга по NODEJS' }, 11);

updateBookById({ rating: 1 }, 18);

updateBookById({ rating: 4, author: 'Манго' }, 17);
