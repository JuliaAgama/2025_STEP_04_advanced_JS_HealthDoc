
// class MODAL

import renderModalMore from '../functions/renderModalMore.js';
import handleSubmit from '../functions/handleSubmit.js';
import changeCheckedRadio from '../functions/changeCheckedRadio.js';

class MODAL {
  constructor({ id, doctor, patient, urgency, status }) {
    this.id = id;
    this.patient = patient;
    this.urgency = urgency;
    this.status = status;
    this.doctor = doctor;

    this.modal = document.getElementById('modal-template').content.cloneNode(true);
  };


  render(parent = document.querySelector('body')) {

    this.modal.querySelector('.modal-section__title').textContent = this.id ? `Visit #${ this.id }` : `New visit`;

    // fill the fields for existing visit:

    if (this.patient) {
      this.modal.querySelector('#first-name').value = this.patient.split(', ')[1];
      this.modal.querySelector('#last-name').value = this.patient.split(', ')[0];
    };

    if (this.urgency) {
      this.modal.querySelector('.form__urgency').querySelectorAll('input').forEach(radio => {
        radio.value === this.urgency ? radio.setAttribute('checked', true) : radio.removeAttribute('checked');
      });
    };

    if (this.status) {
      this.modal.querySelector('.form__status').querySelectorAll('input').forEach(radio => {
        radio.value === this.status ? radio.setAttribute('checked', true) : radio.removeAttribute('checked');
      });
    };

    if (this.doctor) {
      this.modal.querySelectorAll('.form__doctor-option').forEach(option => {
        option.value === this.doctor ? option.setAttribute('selected', true) : option.removeAttribute('selected');
      });
      renderModalMore(this.modal.querySelector('.form__doctor'), this.modal, this.id);
    };


    // EVENT LISTENERS ON MODAL:

    this.modal.querySelector('.modal-section').addEventListener('click', ({ target }) => {
      if (target.classList.contains('modal-section__wrapper')) {
        this.remove();
      };
    });

    this.modal.querySelector('.modal-section__close-btn').addEventListener('click', event => {
      event.preventDefault();
      this.remove();
    });

    this.modal.querySelector('.form__urgency').addEventListener('change', event => {
      event.preventDefault();
      changeCheckedRadio(event);
    });

    this.modal.querySelector('.form__status').addEventListener('change', event => {
      event.preventDefault();
      changeCheckedRadio(event);
    });

    this.modal.querySelector('.form').addEventListener('change', event => {
      if (event.target.id === 'doctor') {
        renderModalMore(event.target, event.currentTarget);
      };
    });

    this.modal.querySelector('.form').addEventListener('input', event => {
      event.preventDefault();
      if (event.target.getAttribute('type') === 'text') {
        event.target.style.backgroundColor = '#fff';
        event.target.removeAttribute('placeholder');
      };
    });

    this.modal.querySelector('.form').addEventListener('submit', event => {
      event.preventDefault();
      handleSubmit(event, this.id);
    });

    parent.appendChild(this.modal);
    document.body.style.overflow = 'hidden';
  };


  remove() {
    document.querySelector('.modal-section').remove();
    document.body.style.overflow = '';
  };
};

export default MODAL;
