
// Function to handle the 'ENTER' button click

import renderVisits from './renderVisits.js';
import { getCookie } from '../utils/cookie.js';


const handleEnter = async () => {

  if (getCookie('token')) {
    document.querySelector('.authorized-section').classList.remove('hidden');
    document.querySelector('.header__add-visit').classList.remove('hidden');

    renderVisits();

  } else {
    document.querySelector('.login-section').classList.remove('hidden');
    document.querySelectorAll('.login__input').forEach(input => {
      input.value = '';
    });
  }
  document.querySelector('.welcome-section').classList.add('hidden');
  document.querySelector('.header__enter').classList.add('hidden');
};

export default handleEnter;