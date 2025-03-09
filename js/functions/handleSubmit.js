
// Function to handle 'SAVE' button click on MODAL FORM

import addCard from "../api/addCard.js";
import editCard from "../api/editCard.js";
import VISIT from "../classes/visit.js";
import validateInputs from "./validateInputs.js";


const handleSubmit = async (event, id) => {

  let body = {
    doctor: event.target.querySelector('#doctor').value,
    urgency: event.target.querySelector('[name="form-urgency"][checked]').value,
    status: event.target.querySelector('[name="form-status"][checked]').value,
    patient: `${event.target.querySelector('#last-name').value}, ${event.target.querySelector('#first-name').value}`,
    more: {
    }
  };

  let moreInputs = event.target.querySelectorAll("#form-more .form__input");
  moreInputs.forEach((el) => {
    body.more[el.name] = el.value;
  });

  if (validateInputs(body, event.currentTarget)) {
    if (id) {
      const data = await editCard(id, body);
      const card = new VISIT(data);
      const oldCard = document.getElementById(id);
      card.render(oldCard, 'before');
      oldCard.remove();
    } else {
      const data = await addCard(body);
      const card = new VISIT(data);
      card.render();
    };

    document.querySelector('.modal-section').remove();

  } else {
    console.log(' not validated ');
  };

};

export default handleSubmit;
