
// Function to send POST request to get login token


// login: <doctor@health-doc.com>, pass: 1234



const getToken = async (body) => {
  try {
    const { data } = await axios.post(
      "https://ajax.test-danit.com/api/v2/cards/login",
      body
    );
    return data;
  } catch (err) {
    console.warn(err);
  }
};


export default getToken;