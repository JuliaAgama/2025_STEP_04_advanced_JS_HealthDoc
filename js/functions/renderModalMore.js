
// function to render more inputs in modal depending on the doctor

import MODALMORETHERAPIST from "../classes/modalMoreTherapist.js";
import MODALMOREDENTIST from "../classes/modalMoreDentist.js";
import MODALMORECARDIOLOGIST from "../classes/modalMoreCardiologist.js";
import getCard from "../api/getCard.js";


const renderModalMore = async (doctor, container, id) => {
  let inputsMore;

  switch (doctor.value) {
    case 'therapist': {
      inputsMore = new MODALMORETHERAPIST(container);
      break;
    };
    case 'cardiologist': {
      inputsMore = new MODALMORECARDIOLOGIST(container);
      break;
    };
    case 'dentist': {
      inputsMore = new MODALMOREDENTIST(container);
      break;
    };
  };

  if (id) {
    const { more } = await getCard(id);
    inputsMore.render(more);
  } else {
    inputsMore.render({});
  };
};

export default renderModalMore;
