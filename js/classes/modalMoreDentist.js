
// class MODALMOREDENTIST

import MODALMORE from './modalMore.js';

class MODALMOREDENTIST extends MODALMORE {
  constructor(container) {
    super(container);
  };

    // Render ModalMoreDentist
  render({visited =''}) {
    super.render();
    this.moreFieldset.innerHTML = `
      <label for="visited" class="form__input-label" >Visited
        <input type="date" id="visited" name="visited" class="form__input" value="${visited}" max=${new Date().toISOString().split('T')[0]} />
      </label>
      `;
  };

  // clean ModalMoreDentist
  remove() {
    super.remove();
    console.log('MODALMOREDENTIST.remove()');
  };
};

export default MODALMOREDENTIST;

