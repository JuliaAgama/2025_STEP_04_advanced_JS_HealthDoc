
// Function to handle the 'LOGIN' button click
// login: <doctor@health-doc.com>, pass: 1234

import getToken from '../api/getToken.js';
import renderVisits from './renderVisits.js';
import { getCookie, setCookie } from '../utils/cookie.js';


const handleLogin = async (event) => {
  const body = {};
  const inputs = event.target.querySelectorAll("input");
  inputs.forEach((el) => {
    body[el.name] = el.value;
  });
  const token = await getToken(body);

  token && setCookie('token', token);

  inputs.forEach(input => {
    input.addEventListener('focus', event => {
      event.preventDefault();
      document.querySelector('.login__warning') && document.querySelector('.login__warning').remove();
    });
  });

  if (getCookie('token')) {
    document.querySelector('.header__add-visit').classList.remove('hidden');
    document.querySelector('.login-section').classList.add('hidden');
    document.querySelector('.authorized-section').classList.remove('hidden');

    renderVisits();

  } else {
    let warning = document.createElement('p');
    warning.classList.add('login__warning');
    warning.textContent = 'login or password are wrong';
    document.querySelector('.login').append(warning);
  }
};

export default handleLogin;
