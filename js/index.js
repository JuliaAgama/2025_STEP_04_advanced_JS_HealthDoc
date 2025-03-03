
import handleEnter from './functions/handleEnter.js';
import handleLogin from './functions/handleLogin.js';
import handleFilter from './functions/handleFilter.js';

// let allCards = [];


// ENTER button click
document.querySelector('#enter-btn').addEventListener('click', e => {
  e.preventDefault();
  handleEnter();
});



// LOGIN section: "BACK" to Enter section
document.querySelector('.login-section').addEventListener('click', e => {
  if (e.target.id === 'login-section' || e.target.id === 'back-to-welcome') {
    document.querySelector('.welcome-section').classList.remove('hidden');
    document.querySelector('.header__enter').classList.remove('hidden');
    document.querySelector('.login-section').classList.add('hidden');
  };
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





// FILTER cards on changing SEARCH input, DOCTOR selector, STATUS selector, URGENCY selector
document.querySelector('#filter-content').addEventListener('input', e => {
  e.preventDefault();
  handleFilter();
  // handleFilter(allCards);
});
document.querySelector('#filter-doctor').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
  // handleFilter(allCards);
});
document.querySelector('#filter-status').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
  // handleFilter(allCards);
});
document.querySelector('#filter-urgency').addEventListener('change', e => {
  e.preventDefault();
  handleFilter();
  // handleFilter(allCards);
});




//fake POST requests:

// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 64f91e90-053e-415c-91c0-f9d3d502d68c`
//   },
//   body: JSON.stringify({
//     doctor: 'therapist',
//     urgency: 'low',
//     status: "open",
//     patient: "Smith, John",
//     problem: 'cough, high temperature, running nose',
//     description: 'Vitamin C, D, hot tea, paracetamol',
//     more: {
//      age: 12,
//     }
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
//     urgency: 'high',
//     status: "done",
//     patient: "Hopkins, Mary",
//     problem: 'pain in heart',
//     description: 'urgent tests, probably surgery required',
//     more: {
//      age: 42,
//      weight: 98,
//      pressure: '120 / 80',
//      anamnesis: 'diabetes, heart attack, flue, pneumonia',
//     }
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
//     urgency: 'normal',
//     status: "open",
//     patient: "Klide, Boris",
//     problem: 'black teeth, bad smell',
//     description: 'can wait',
//     more: {
//      lastVisit: '2023-12-04',
//     }
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
//     urgency: 'normal',
//     status: "done",
//     patient: "Johnson, Ivan",
//     problem: 'flue',
//     description: 'hot tea treatment',
//     more: {
//      age: 37,
//     }
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
//     urgency: 'high',
//     status: "done",
//     patient: "Poppins, Jack",
//     problem: 'high temperature, running nose',
//     description: 'hot tea, paracetamol',
//     more: {
//      age: 28,
//     }
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
//     urgency: 'normal',
//     status: "open",
//     patient: "Perez, Thomas",
//     problem: 'some noise',
//     description: 'regular tests',
//     more: {
//      age: 73,
//      weight: 76,
//      pressure: '140 / 100',
//      anamnesis: 'heart attack, pneumonia',
//     }
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
//     urgency: 'low',
//     status: "done",
//     patient: "Malcoln, Kristine",
//     problem: 'bad smell',
//     description: 'wait',
//     more: {
//      lastVisit: '2024-06-15',
//     }
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
//     urgency: 'high',
//     status: "open",
//     patient: "Chaplin, Charlie",
//     problem: 'pain in breast',
//     description: 'send to cardiologist',
//     more: {
//      age: 53,
//     }
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));