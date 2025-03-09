
// class MODALMOREDENTIST

import MODALMORE from './modalMore.js';

class MODALMOREDENTIST extends MODALMORE {
  constructor(container) {
    super(container);
  };

    // Render ModalMoreDentist
  render({visited ='', problem = '', description = ''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <label for="visited" class="form__input-label" >Visited
        <input type="date" id="visited" name="visited" class="form__input" value="${visited}" max=${new Date().toISOString().split('T')[0]}/>
      </label>
      <div>
        <label for="problem" class="form__input-label" >Problem
        <textarea id="problem" name="problem" class="form__input" value="${problem}" rows="1" cols="50" required>${problem}</textarea>
        </label>
        <label for="description" class="form__input-label" >Description
        <textarea id="description" name="description" class="form__input" value="${description}" rows="2" cols="50">${description}</textarea>
        </label>
      </div>
      `;
  };

  // clean ModalMoreDentist
  remove() {
    super.remove();
    console.log('MODALMOREDENTIST.remove()');
  };
};

export default MODALMOREDENTIST;

