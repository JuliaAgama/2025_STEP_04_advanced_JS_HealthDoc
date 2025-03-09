
// class MODALMORE


class MODALMORE {
  constructor(container) {
    this.moreFieldset = container.querySelector('.form__more');
    this.submitButton = container.querySelector('#form-submit');
  };

    // Render ModalMore
  render() {
    this.submitButton.classList.remove('hidden');
  };


    // clean ModalMore
  remove() {
    this.moreFieldset.innerHTML = '';
    this.submitButton.classList.add('hidden');
  };
};

export default MODALMORE;

