
// Function to handle the 'ENTER' button click

import handleRenderVisits from './handleRenderVisits.js';

const handleEnter = async () => {
// const handleEnter = () => {

  if (localStorage.getItem('token')) {
    document.querySelector('.authorized-section').classList.remove('hidden');
    document.querySelector('.header__add-visit').classList.remove('hidden');

    handleRenderVisits();

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