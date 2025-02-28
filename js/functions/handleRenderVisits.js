
// Function to render list of visits

import getAllCards from "../api/getAllCards.js";
import VISIT from "../classes/visit.js";

const handleRenderVisits = async () => {
  const cards = await getAllCards();
  cards.forEach(card => {
    let visit = new VISIT(card);
    visit.render();
  });
  cards.length > 0 && document.querySelector('.no-items').classList.add('hidden');
};

export default handleRenderVisits;
