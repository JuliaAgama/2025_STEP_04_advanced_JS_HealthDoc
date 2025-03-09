
// Function to send PUT request to edit card to server


import instance from "./instance.js";

// editCard request

const editCard = async (id, body) => {
  try {
    const { data } = await instance.put('' + `/${ id }`, body);
    return data;
  } catch (err) {
    console.warn(err);
  }
};


export default editCard;










