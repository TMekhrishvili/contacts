const GenderModel = require('../model/Gender')

const getGender = async (req, res) => {

    const callback = (err, results) => {
        if (err) res.send(err)
        res.send(results)
    }

    GenderModel.find({}, callback)
}

module.exports = getGender