
import handleEnter from './functions/handleEnter.js';
import handleLogin from './functions/handleLogin.js';
import handleFilter from './functions/handleFilter.js';
import MODAL from './classes/modal.js';


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
  let modal = new MODAL({});
  modal.render();
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
