
// class VISIT


import deleteCard from "../api/deleteCard.js";

// {
//     "doctor": "cardiologist",
//     "status": "open",
//     "urgency": "normal",
//     "problem": "bad sleep, high pressure, headache",
//     "comment": "can come in March",
//     "age": 65,
//     "weight": 86,
//     "id": 228094
// }


const visits = document.querySelector('#visits');

class VISIT {
    constructor({doctor, patient, urgency, status, problem, age, weight, comment, id}) {
      this.doctor = doctor;
      this.patient = patient;
      this.status = status;
      this.urgency = urgency;
      this.problem = problem;
      this.age = age;
      this.weight = weight;
      this.comment = comment;
      this.id = id;

      this.visit = document.createElement('li');
      this.buttons = document.createElement('div');
      this.editBtn = document.createElement('button');
      this.deleteBtn = document.createElement('button');
      this.moreBtn = document.createElement('button');
      this.lessBtn = document.createElement('button');
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
    console.log()
    this.buttons.classList.add('visit__buttons');
    this.editBtn.classList.add('btn', 'btn--small', 'btn__edit');
    this.deleteBtn.classList.add('btn', 'btn--small', 'btn__delete');
    this.moreBtn.classList.add('btn', 'btn--small', 'btn__more');
    this.lessBtn.classList.add('btn', 'btn--small', 'btn__less', 'hidden');

    this.editBtn.innerHTML = '&#x270e;';
    this.deleteBtn.innerHTML = '&#x1F5D1;';
    this.moreBtn.innerHTML = '&#183;&#183;&#183;';
    this.lessBtn.innerHTML = '^^^';

    this.buttons.append(this.editBtn, this.deleteBtn);
    this.visit.append(this.buttons, this.moreBtn, this.lessBtn);

    this.deleteBtn.addEventListener('click', async (event) => {
      event.preventDefault;
      this.remove();
    });

    this.editBtn.addEventListener('click', async (event) => {
      event.preventDefault;
      this.edit();
    });

    visits.append(this.visit);
  };

    // Delete the visit on server and remove it from the page
  remove() {
    (async () => {
      let response = await deleteCard(this.id);
      response.status === 200 && this.visit.remove();
      visits.children.length === 0 && document.querySelector('.no-items').classList.remove('hidden');
    })();
  };


    // Edit the visit on server and update it on the page
  edit() {

    /*some code here
    */

  };
};

export default VISIT;

