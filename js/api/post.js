
// Function to send POST request with new card to server


import instance from "./instance.js";



// postCard function


// fetch("https://ajax.test-danit.com/api/v2/cards", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
//   body: JSON.stringify({
//     title: 'Визит к Терапевту',
//     description: 'Срочный визит',
//     doctor: 'Family Doctor',
//     bp: '21',
//     age: 31,
//     weight: 55
//   })
// })
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));