
// Function to send GET request to get all cards from server


import instance from "./instance.js";



const getAllCards = async () => {
  try {
    const { data } = await instance.get('');
    return data;
  } catch (err) {
    console.warn(err);
  }
};


export default getAllCards;