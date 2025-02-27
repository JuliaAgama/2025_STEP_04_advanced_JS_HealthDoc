
// Function to handle the 'ENTER' button click

import getAllCards from '../api/getAllCards.js';
import renderVisits from './renderVisits.js';

const handleEnter = async () => {
  let token = localStorage.getItem('token');

  if (token) {
    document.querySelector('.authorized-section').classList.remove('hidden');
    document.querySelector('.header__add-visit').classList.remove('hidden');

    renderVisits();

  } else {
    document.querySelector('.login-section').classList.remove('hidden');
  };
  document.querySelector('.welcome-section').classList.add('hidden');
  document.querySelector('.header__enter').classList.add('hidden');

};

export default handleEnter;