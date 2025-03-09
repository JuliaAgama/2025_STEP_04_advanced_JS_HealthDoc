
// Function to send POST request with new card to server


import instance from "./instance.js";


const addCard = async (body) => {
  try {
    const { data } = await instance.post('', body);
    return data;
  } catch (err) {
    console.warn(err);
  }
};


export default addCard;





/************************    EXAMPLES  of VISIT objects for different doctors   ***********************/

const therapist = {
  id: 111,
  doctor: 'therapist',
  urgency: 'low',
  status: "open",
  patient: "Smith, John",
  problem: 'cough, high temperature, running nose',
  description: 'Vitamin C, D, hot tea, paracetamol',
  more: {
    age: 12,
  }
};

const dentist = {
  id: 222,
  doctor: 'dentist',
  urgency: 'normal',
  status: "open",
  patient: "Klide, Boris",
  problem: 'Bad breath',
  description: 'Toothpaste recommended',
  more: {
    visited: '2023-12-04',
  }
};

const cardiologist = {
  id: 333,
  doctor: 'cardiologist',
  urgency: 'high',
  status: "done",
  patient: "Hopkins, Mary",
  problem: 'Heavy heartbeating',
  description: 'Needs more tests',
  more: {
    age: 42,
    weight: 98,
    pressure: '120 / 80',
    anamnesis: 'diabetes, heart attack, flue, pneumonia',
  }
};
