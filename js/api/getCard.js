
// Function to send GET request to get all cards from server


import instance from "./instance.js";



const getCard = async (id) => {
  try {
    const { data } = await instance.get(''+`/${id}`);
    return data;
  } catch (err) {
    console.warn(err);
  }
};


export default getCard;