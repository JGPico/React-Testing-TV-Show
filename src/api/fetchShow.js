import axios from 'axios';

export const fetchShow = endpoint => {
    return axios.get(endpoint)
        .then(response => {
            console.log("FetchShow response ", response);
            return response;
        }).catch(error => {
            console.log("Fetch error ", error);
        });
}