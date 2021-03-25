const ContactsModel = require('../model/Contacts')

const addContact = async (req, res) => {

    const fullName = req.body.fullName
    const dob = req.body.dob
    const gender = req.body.gender
    const city = req.body.city
    const address = req.body.address
    const mobileNumber = req.body.mobileNumber
    const comment = req.body.comment
    const status = req.body.status
    const favorite = req.body.favorite

    const contact = new ContactsModel({
        fullName,
        dob,
        gender,
        city,
        address,
        mobileNumber,
        comment,
        status,
        favorite,
    })
    try {
        await contact.save()
        res.send("Contact was inserted")
        console.log('Contact from React App was inserted')
    } catch (error) {
        console.log(error)
    }
}

module.exports = addContact