
// class VISIT

import deleteCard from "../api/deleteCard.js";
import getCard from "../api/getCard.js";
import MODAL from "./modal.js";
import renderNoItems from "../functions/renderNoItems.js";


const visits = document.querySelector('#visits');

class VISIT {
    constructor({id, doctor, urgency, status, patient, more}) {
      this.id = id;
      this.doctor = doctor;
      this.urgency = urgency;
      this.status = status;
      this.patient = patient;
      this.more = more;

      this.visit = document.createElement('li');
      this.buttons = document.createElement('div'); // wrapper for buttons Edit & Delete
      this.editBtn = document.createElement('button');
      this.deleteBtn = document.createElement('button');

      this.moreBtn = document.createElement('button'); //more and less card content
      this.lessBtn = document.createElement('button');
      this.moreFragment = document.createDocumentFragment();
  };

    // Render the visit on the page in particular place vs. container
  render(container = visits, method = 'prepend') {
    this.visit.setAttribute('id', this.id);
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


    // EVENT LISTENERS ON CARD:

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
    });


    // DRAG & DROP:

    this.visit.setAttribute('draggable', 'true');

    this.visit.addEventListener('dragstart', event => {
      event.dataTransfer.setData('id', this.id);
      event.target.style.opacity = 0.5;
    });

    this.visit.addEventListener('dragover', event => {
      event.preventDefault();
      event.target.style.opacity = 1;
    });

    this.visit.addEventListener('drop', event => {
      event.preventDefault();
      const draggedId = event.dataTransfer.getData('id');
      const draggedCard = document.getElementById(draggedId);
      this.visit.before(draggedCard);
    });


    // put card in particular place vs container
    switch (method) {
      case 'prepend': {
        container.prepend(this.visit);
        break;
      };
      case 'append': {
        container.append(this.visit);
        break;
      };
      case 'before': {
        container.before(this.visit);
        break;
      };
      case 'after': {
        container.after(this.visit);
        break;
      };
    };

    document.querySelector('.no-items') && document.querySelector('.no-items').remove();
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
      visits.children.length === 0 &&  renderNoItems();
    })();
  };


    // Edit the visit on server and update it on the page
  edit() {
    (async () => {
      let visitObj = await getCard(this.id);
      let modal = new MODAL(visitObj);
      modal.render();
    })();
  };
};

export default VISIT;
