import axios from "axios";

const url = 'https://api.circle.com/v1/w3s/config/entity';
const options = {
    "method": "GET",
    "headers": {
        "Authorization": "Bearer TEST_API_KEY:c6b08f897a8664c348c673549b371f0e:5358d6dda494bce14c69f242396dfab1",
        "Content-Type": "application/json"
    }
};

function APPID() {
    console.log("Hello");
    axios
    .request(url,options)
    .then(function (response) {
        console.log(response.data.data.appId);
    })  
    .catch(function (error) {
        console.error(error);
    });
}

export default APPID;