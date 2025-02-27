
// class VISIT


// {
//     "title": "Визит к Терапевту",
//     "description": "Срочный визит",
//     "doctor": "Family Doctor",
//     "bp": "21",
//     "age": 31,
//     "weight": 55,
//     "id": 228087
// }

const visits = document.querySelector('#visits');

class VISIT {
    constructor({title, description, doctor, bp, age, weight, id}) {
      this.title = title;
      this.description = description;
      this.doctor = doctor;
      this.bp = bp;
      this.age = age;
      this.weight = weight;
      this.id = id;
      this.visit = document.createElement('li');
      this.buttons = document.createElement('div');
      this.editBtn = document.createElement('button');
      this.deleteBtn = document.createElement('button');
      this.moreBtn = document.createElement('button');
      this.lessBtn = document.createElement('button');
    }

    // Create the visit and render it on the page
  render() {
    this.visit.classList.add('visit');
    this.visit.innerHTML = `
      <h3 class="visit__doctor">Doctor: ${this.doctor}</h3>
      <p class="visit__urgency">Urgency: ${this.bp}</p>
      <p class="visit__description">Problem: ${this.description}</p>
    `;
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
    visits.append(this.visit);

  }

    // Delete the visit and remove it from the page
  delete() {
  }
    // Edit the visit on server and update it on the page
  edit() {
  }
};

export default VISIT;

