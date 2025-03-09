
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
  doctor: 'therapist',
  urgency: 'low',
  status: "open",
  patient: "Smith, John",
  more: {
    age: 12,
  }
};

const dentist = {
  doctor: 'dentist',
  urgency: 'normal',
  status: "open",
  patient: "Klide, Boris",
  more: {
    visited: '2023-12-04',
  }
};

const cardiologist = {
  doctor: 'cardiologist',
  urgency: 'high',
  status: "done",
  patient: "Hopkins, Mary",
  more: {
    age: 42,
    weight: 98,
    pressure: '120 / 80',
    anamnesis: 'diabetes, heart attack, flue, pneumonia',
  }
};
