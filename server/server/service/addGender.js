const GenderModel = require('../model/Gender')


const addGender = async (req, res) => {
    const id = req.body.id
    const genderName = req.body.gender

    const gender = new GenderModel({
        id: id,
        gender: genderName
    })

    try {
        await gender.save()
        res.send("Gender was inserted")
        console.log('Gender from postman was inserted')
    } catch (error) {
        console.log(error)
    }
}

module.exports = addGender