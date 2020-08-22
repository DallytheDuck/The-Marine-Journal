const axios = require('axios').default;

export function transfer(name, email, subject, enquiry) {
    axios.post('http://localhost:3000/dataTransfer',
    {
        name: name,
        email: email,
        subject: subject,
        enquiry: enquiry,
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}



