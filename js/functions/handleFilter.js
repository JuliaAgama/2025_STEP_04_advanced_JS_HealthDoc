
// Function to handle FILTER

import debounce from '../utils/debounce.js';
import getAllCards from '../api/getAllCards.js';
import VISIT from '../classes/visit.js'

const handleFilter = debounce(async () => {

  document.querySelector('#visits').innerHTML = '';

  let contentFilter = document.querySelector('#filter-content').value;
  let doctorilter = document.querySelector('#filter-doctor').value;
  let statusFilter = document.querySelector('#filter-status').value;
  let urgencyFilter = document.querySelector('#filter-urgency').value;

  const allCards = await getAllCards();
  const filteredCards = allCards
    .filter(card => card.problem.includes(contentFilter) || card.comment.includes(contentFilter))
    .filter(card => doctorilter !== 'all' ? card.doctor === doctorilter : true)
    .filter(card => statusFilter !== 'all' ? card.status === statusFilter : true)
    .filter(card => urgencyFilter !== 'all' ? card.urgency === urgencyFilter : true);

  filteredCards.forEach(card => {
    new VISIT(card).render();
  });
}, 500)

export default handleFilter;
