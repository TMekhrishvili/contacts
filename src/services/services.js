import axios from "axios";

const url = ``;

export const fetchContacts = searchText => {
    return new Promise((resolve, reject) => {
        axios.post(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
};