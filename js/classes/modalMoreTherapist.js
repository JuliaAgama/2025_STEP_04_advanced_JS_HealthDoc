
// class MODALMORETHERAPIST

import MODALMORE from './modalMore.js';

class MODALMORETHERAPIST extends MODALMORE {
  constructor(container) {
    super(container);
    // this.moreFragment = document.getElementById('modal-therapist-template').content.cloneNode(true);
  };

    // Render ModalMoreTherapist
  render({age = '', problem = '', description = ''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <label for="age" class="form__input-label" >Age
        <input type="text" id="age" name="age" class="form__input" value="${age}" required/>
      </label>
      <div>
        <label for="problem" class="form__input-label" >Problem
        <textarea id="problem" name="problem" class="form__input" value="${problem}" rows="1" cols="40" required>${problem}</textarea>
        </label>
        <label for="description" class="form__input-label" >Description
        <textarea id="description" name="description" class="form__input" value="${description}" rows="2" cols="40">${description}</textarea>
        </label>
      </div>
    `;
  };

  // clean ModalMoreTherapist
  remove() {
    super.remove();
    console.log('MODALMORETHERAPIST.remove()');
  };
};

export default MODALMORETHERAPIST;

