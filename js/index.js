
import handleEnter from './functions/handleEnter.js';
import handleLogin from './functions/handleLogin.js';
import renderVisits from './functions/renderVisits.js';
import instance from './api/instance.js';

// ENTER button click
document.querySelector('#enter-btn').addEventListener('click', e => {
  e.preventDefault();
  handleEnter();
});


// LOGIN button click
//login: doctor@health-doc.com, pass: 1234
document.querySelector('#login-form').addEventListener('submit', e => {
  e.preventDefault();
  handleLogin(e);
});


// ADD A VISIT button click
document.querySelector('#add-btn').addEventListener('click', e => {
  e.preventDefault();

  /*
  open modal window
  */
});









// let token = localStorage.getItem('token');

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
//   body: JSON.stringify({
//     title: 'Визит к Стоматологу',
//     description: 'Приоритетный визит',
//     doctor: 'Dentist',
//     bp: '37',
//     age: 44,
//     weight: 85
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

