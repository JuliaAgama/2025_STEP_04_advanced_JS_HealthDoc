
// class MODALMORECARDIOLOGIST

import MODALMORE from './modalMore.js';

class MODALMORECARDIOLOGIST extends MODALMORE {
  constructor(container) {
    super(container);
  };

    // Render ModalMoreCardiologist
  render({age = '', weight = '', pressure = '', anamnesis = ''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <div>
        <label for="age" class="form__input-label" >Age
          <input type="text" id="age" name="age" class="form__input" value="${age}" />
        </label>
        <label for="weight" class="form__input-label" >Weight
          <input type="text" id="weight" name="weight" class="form__input" value="${weight}" />
        </label>
        <label for="pressure" class="form__input-label" >Pressure
          <input type="text" id="pressure" name="pressure" class="form__input" value="${pressure}" />
        </label>
      </div>
      <div>
        <label for="anamnesis" class="form__input-label" >Anamnesis
        <textarea id="anamnesis" name="anamnesis" class="form__input" value="${anamnesis}" rows="10" cols="30">${anamnesis}</textarea>
        </label>
      </div>
    `;
  };

  // clean ModalMoreCardiologist
  remove() {
    super.remove();
  };
};

export default MODALMORECARDIOLOGIST;

