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

export const fetchContacts = () => {
    const url = `get/contacts`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                console.log(response)
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const fetchGender = () => {
    const url = `get/gender`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                console.log(response)
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const fetchCity = () => {
    const url = `get/cities`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                console.log(response)
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

//----------------------------------------------

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
    })
}

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

