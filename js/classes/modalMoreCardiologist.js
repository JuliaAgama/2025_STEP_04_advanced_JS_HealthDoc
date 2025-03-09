
// class MODALMORECARDIOLOGIST

import MODALMORE from './modalMore.js';

class MODALMORECARDIOLOGIST extends MODALMORE {
  constructor(container) {
    super(container);
  };

    // Render ModalMoreCardiologist
  render({age = '', weight = '', pressure = '', problem = '', description = '', anamnesis = ''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <div>
        <label for="age" class="form__input-label" >Age
          <input type="text" id="age" name="age" class="form__input" value="${age}" required/>
        </label>
        <label for="weight" class="form__input-label" >Weight
          <input type="text" id="weight" name="weight" class="form__input" value="${weight}" required/>
        </label>
        <label for="pressure" class="form__input-label" >Pressure
          <input type="text" id="pressure" name="pressure" class="form__input" value="${pressure}" required/>
        </label>
      </div>
      <div>
        <label for="problem" class="form__input-label" >Problem
        <textarea id="problem" name="problem" class="form__input" value="${problem}" rows="2" cols="20" required>${problem}</textarea>
        </label>
        <label for="description" class="form__input-label" >Description
        <textarea id="description" name="description" class="form__input" value="${description}" rows="4" cols="20">${description}</textarea>
        </label>
      </div>
      <div>
        <label for="anamnesis" class="form__input-label" >Anamnesis
        <textarea id="anamnesis" name="anamnesis" class="form__input" value="${anamnesis}" rows="9" cols="12">${anamnesis} required</textarea>
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

