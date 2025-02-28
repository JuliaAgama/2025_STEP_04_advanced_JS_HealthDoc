
// Function to  DELETE request on server


import instance from "./instance.js";



const deleteCard = async (id) => {
  try {
    const response = await instance.delete(`/${ id }`);
    return response;
  } catch (err) {
    console.warn(err);
  }
};

export default deleteCard;
