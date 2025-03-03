
// Function to handle FILTER

import debounce from '../utils/debounce.js';
import getAllCards from '../api/getAllCards.js'; // ???
import VISIT from '../classes/visit.js';
import matchSearch from './matchSearch.js';



const handleFilter = debounce(async () => {
// const handleFilter = debounce( cardsArr => {

  document.querySelector('#visits').innerHTML = '';

  let contentFilter = document.querySelector('#filter-content').value.toLowerCase();
  let doctorilter = document.querySelector('#filter-doctor').value.toLowerCase();
  let statusFilter = document.querySelector('#filter-status').value.toLowerCase();
  let urgencyFilter = document.querySelector('#filter-urgency').value.toLowerCase();

  const allCards = await getAllCards();
  // const allCards = cardsArr;
  const filteredCards = allCards
    .filter(card => {
      if (matchSearch(card, contentFilter)) {
        return true;
      }
    })
    .filter(card => doctorilter !== 'all' ? card.doctor === doctorilter : true)
    .filter(card => statusFilter !== 'all' ? card.status === statusFilter : true)
    .filter(card => urgencyFilter !== 'all' ? card.urgency === urgencyFilter : true);

  filteredCards.forEach(card => {
    new VISIT(card).render();
  });
}, 500)

export default handleFilter;
