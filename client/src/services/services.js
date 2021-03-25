import axios from "axios"

export const addContact = data => {
    const url = `add`
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}


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

export const fetchFavorite = contactID => {
    const url = `api/contacts/addFavorite/${contactID}`
    return new Promise((resolve, reject) => {
        axios.put(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
};

