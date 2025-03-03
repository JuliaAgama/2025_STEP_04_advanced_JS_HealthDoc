
// Function to render list of visits

import getAllCards from "../api/getAllCards.js";
import PRELOADER from "../classes/preloader.js";
import VISIT from "../classes/visit.js";

const handleRenderVisits = async () => {
// const handleRenderVisits = (cardsArr) => {
  let preloader = new PRELOADER();
  preloader.render(document.querySelector('.visits'));
  const cards = await getAllCards();
  // const cards = cardsArr;
  preloader.remove(); //   ?????? how to handle preloader 'handleRenderVisits' if not async

  if (cards.length > 0) {
    document.querySelector('.no-items') && document.querySelector('.no-items').remove();
    cards.forEach(card => {
      let visit = new VISIT(card);
      visit.render();
    });
  } else {
    let noItems = document.createElement('p');
    noItems.classList.add('no-items');
    noItems.textContent = 'No items have been added'
    document.querySelector('.visits').append(noItems);
  }
};

export default handleRenderVisits;
