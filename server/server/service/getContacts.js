const ContactModel = require('../model/Contacts')

const getContacts = async (req, res) => {

    const callback = (err, results) => {
        if (err) res.send(err)
        res.send(results)
    }

    ContactModel.find({}, callback)
}

module.exports = getContacts