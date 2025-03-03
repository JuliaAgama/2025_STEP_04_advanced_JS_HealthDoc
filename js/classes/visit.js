
// class VISIT

import deleteCard from "../api/deleteCard.js";


/* ************** EXAMPLES OF DOCTORS OBJECTS **************/

// const therapist = {
//   doctor: 'therapist',
//   urgency: 'low',
//   status: "open",
//   patient: "Smith, John",
//   problem: 'cough, high temperature, running nose',
//   description: 'Vitamin C, D, hot tea, paracetamol',
//   more: {
//     age: 12,
//   }
// };

// const cardiologist = {
//   doctor: 'therapist',
//   urgency: 'low',
//   status: "open",
//   patient: "Smith, John",
//   problem: 'cough, high temperature, running nose',
//   description: 'Vitamin C, D, hot tea, paracetamol',
//   more: {
//     age: 42,
//     weight: 98,
//     pressure: '120 / 80',
//     anamnesis: 'diabetes, heart attack, flue, pneumonia',
//   }
// };

// const dentist = {
//   doctor: 'therapist',
//   urgency: 'low',
//   status: "open",
//   patient: "Smith, John",
//   problem: 'cough, high temperature, running nose',
//   description: 'Vitamin C, D, hot tea, paracetamol',
//   more: {
//     lastVisit: '2023-12-04',
//   }
// };


const visits = document.querySelector('#visits');

class VISIT {
    constructor({doctor, urgency, status, patient, problem, description, id, more}) {
      this.doctor = doctor;
      this.urgency = urgency;
      this.status = status;
      this.patient = patient;
      this.problem = problem;
      this.description = description;
      this.more = more;
      this.id = id;

      this.visit = document.createElement('li');
      this.buttons = document.createElement('div'); // wrapper for buttons Edit & Delete
      this.editBtn = document.createElement('button');
      this.deleteBtn = document.createElement('button');

      this.moreBtn = document.createElement('button'); //more and less card content
      this.lessBtn = document.createElement('button');
      this.moreFragment = document.createDocumentFragment();
    }

    // Create the visit on server and render it on the page
  render() {
    this.visit.classList.add('visit');
    let statusOpen = this.status === 'open' ? 'visit__status--open' : ''
    this.visit.innerHTML = `
      <h3 class="visit__doctor">Doctor: ${this.doctor}</h3>
      <p class="visit__urgency">Urgency: ${this.urgency}</p>
      <p class="visit__patient">Patient: ${this.patient || 'Anonym'}</p>
      <p class="visit__status ${statusOpen}">${this.status}</p>
    `;

    this.buttons.classList.add('visit__buttons');
    this.editBtn.classList.add('btn', 'btn--small', 'btn__edit');
    this.deleteBtn.classList.add('btn', 'btn--small', 'btn__delete');
    this.moreBtn.classList.add('btn', 'btn--small', 'btn__more');
    this.lessBtn.classList.add('btn', 'btn--small', 'btn__less', 'hidden');

    this.editBtn.innerHTML = '&#x270e;';
    this.deleteBtn.innerHTML = '&#x1F5D1;';
    this.buttons.append(this.editBtn, this.deleteBtn);

    this.moreBtn.innerHTML = '...more';
    this.lessBtn.innerHTML = '...less';
    this.visit.append(this.buttons, this.moreBtn, this.lessBtn);

    this.deleteBtn.addEventListener('click', async (event) => {
      event.preventDefault;
      this.remove();
    });

    this.editBtn.addEventListener('click', async (event) => {
      event.preventDefault;
      this.edit();
    });

    this.moreBtn.addEventListener('click', event => {
      event.preventDefault();
      this.showMore();
    });

    this.lessBtn.addEventListener('click', event => {
      event.preventDefault();
      this.showLess();
    })

    visits.append(this.visit);
  };


  // show more info of the card
  showMore() {
    for (const key in this.more) {
      let p = document.createElement('p');
      p.classList.add(`visit__${ key }`, `visit__more`);
      p.textContent = `${ key.charAt(0).toUpperCase() + key.slice(1) }: ${ this.more[key] }`;
      this.moreFragment.appendChild(p);
    };
    this.visit.append(this.moreFragment);

    this.moreBtn.classList.add('hidden');
    this.lessBtn.classList.remove('hidden');
  };


  // show less info of the card
  showLess() {
    this.visit.querySelectorAll('.visit__more').forEach(el => { el.remove() });

    this.moreBtn.classList.remove('hidden');
    this.lessBtn.classList.add('hidden');
  };


    // Delete the visit on server and remove it from the page
  remove() {
    (async () => {
      let response = await deleteCard(this.id);
      response.status === 200 && this.visit.remove();
      if (visits.children.length === 0) {
        let noItems = document.createElement('p');
        noItems.classList.add('no-items');
        noItems.textContent = 'No items have been added'
        document.querySelector('.visits').append(noItems);
      };
    })();
  };


    // Edit the visit on server and update it on the page
  edit() {

    /*some code here
    */

  };
};

export default VISIT;

