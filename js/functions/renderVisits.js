
// Function to render list of visits

import getAllCards from "../api/getAllCards.js";
import PRELOADER from "../classes/preloader.js";
import VISIT from "../classes/visit.js";
import renderNoItems from "./renderNoItems.js";

const renderVisits = async () => {
  let preloader = new PRELOADER();
  preloader.render(document.querySelector('.visits'));
  const cards = await getAllCards();
  preloader.remove();

  if (cards && cards.length > 0) {
    document.querySelector('.no-items') && document.querySelector('.no-items').remove();
    cards.forEach(card => {
      let visit = new VISIT(card);
      visit.render();
    });
  } else {
    renderNoItems();
  }
};

export default renderVisits;
