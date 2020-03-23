import axios from 'axios';

export const fetchShow = endpoint => {
    return axios.get(endpoint)
        .then(response => {
            return response;
        }).catch(error => {
            console.log("Fetch error ", error);
        });
}