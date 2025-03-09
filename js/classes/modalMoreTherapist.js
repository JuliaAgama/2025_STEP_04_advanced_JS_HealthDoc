
// class MODALMORETHERAPIST

import MODALMORE from './modalMore.js';

class MODALMORETHERAPIST extends MODALMORE {
  constructor(container) {
    super(container);
    // this.moreFragment = document.getElementById('modal-therapist-template').content.cloneNode(true);
  };

    // Render ModalMoreTherapist
  render({age = ''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <label for="age" class="form__input-label" >Age
        <input type="text" id="age" name="age" class="form__input" value="${age}" />
      </label>
    `;
  };

  // clean ModalMoreTherapist
  remove() {
    super.remove();
    console.log('MODALMORETHERAPIST.remove()');
  };
};

export default MODALMORETHERAPIST;

