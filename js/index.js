
import handleEnter from './functions/handleEnter.js';
import handleLogin from './functions/handleLogin.js';
import handleFilter from './functions/handleFilter.js';


// ENTER button click
document.querySelector('#enter-btn').addEventListener('click', e => {
  e.preventDefault();
  handleEnter();
});
////////////////////////      login modal !!!        /////////////////////







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





// FILTER cards on changing SEARCH input, DOCTOR selector, STATUS selector, URGENCY selector
document.querySelector('#filter-content').addEventListener('input', e => {
  e.preventDefault();
  handleFilter();
});
document.querySelector('#filter-doctor').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
});
document.querySelector('#filter-status').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
});
document.querySelector('#filter-urgency').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
});






// postCard function



//fake POST requests:

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'therapist',
//     status: "open",
//     urgency: 'low',
//     problem: 'cough, high temperature, running nose',
//     comment: 'Vitamin C, D, hot tea, paracetamol',
//     age: 12,
//     weight: 26
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'cardiologist',
//     status: "done",
//     urgency: 'high',
//     problem: 'pain in heart',
//     comment: 'urgent tests, probably surgery required',
//     age: 42,
//     weight: 98
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'dentist',
//     status: "open",
//     urgency: 'normal',
//     problem: 'black teeth, bad smell',
//     comment: 'can wait',
//     age: 21,
//     weight: 67
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'therapist',
//     status: "done",
//     urgency: 'normal',
//     problem: 'flue',
//     comment: 'hot tea treatment',
//     age: 53,
//     weight: 72
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'therapist',
//     status: "done",
//     urgency: 'high',
//     problem: 'high temperature, running nose',
//     comment: 'hot tea, paracetamol',
//     age: 29,
//     weight: 65
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'cardiologist',
//     status: "open",
//     urgency: 'normal',
//     problem: 'some noise',
//     comment: 'regular tests',
//     age: 32,
//     weight: 81
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'dentist',
//     status: "done",
//     urgency: 'low',
//     problem: 'bad smell',
//     comment: 'wait',
//     age: 16,
//     weight: 49
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'therapist',
//     status: "open",
//     urgency: 'high',
//     problem: 'pain in breast',
//     comment: 'send to cardiologist',
//     age: 78,
//     weight: 83
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));