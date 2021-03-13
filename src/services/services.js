import axios from "axios";

export const fetchContacts = searchText => {
    const url = `api/contacts?searchText=${searchText}`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const fetchContact = contactID => {
    const url = `api/contacts/${contactID}`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const fetchGender = () => {
    const url = `api/contacts/gender`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const fetchPhoneNumberType = () => {
    const url = `api/contacts/phoneNumberTypes`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const fetchCity = () => {
    const url = `api/contacts/city`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const deleteContact = contactID => {
    const url = `api/contacts/${contactID}`
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
};

export const postContact = data => {
    const url = `api/contacts`
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
};