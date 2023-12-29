import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://api.circle.com/v1/w3s/users',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer TEST_API_KEY:c6b08f897a8664c348c673549b371f0e:5358d6dda494bce14c69f242396dfab1'},
  data: {userId: '<USER_ID>'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });