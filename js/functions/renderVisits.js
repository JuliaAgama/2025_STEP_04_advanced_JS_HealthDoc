
// Function to render list of visits

import getAllCards from "../api/getAllCards.js";
import VISIT from "../classes/visit.js";

const renderVisits = async () => {
    const cards = await getAllCards();
  console.log('renderVisits: ', cards);
  cards.forEach(card => {
    let visit = new VISIT(card);
    visit.render();
  });
  document.querySelector('.no-items').classList.add('hidden');
};

export default renderVisits;
