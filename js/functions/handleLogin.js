
// Function to handle the 'LOGIN' button click

import getAllCards from '../api/getAllCards.js';
import renderVisits from './renderVisits.js';


const handleLogin = async (event) => {
  try {
    const body = {};
    const inputs = event.target.querySelectorAll("input");
    inputs.forEach((el) => {
      body[el.name] = el.value;
    });

    const { data } = await axios.post(
      "https://ajax.test-danit.com/api/v2/cards/login",
      body
    );

    localStorage.setItem('token', data);

    document.querySelector('.login-section').classList.add('hidden');
    document.querySelector('.authorized-section').classList.remove('hidden');

    renderVisits();

  } catch (err) {
    console.log(err);
  }
};

export default handleLogin;
