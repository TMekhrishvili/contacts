import axios from "axios";

const url = ``;

export const fetchContacts = () => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
};