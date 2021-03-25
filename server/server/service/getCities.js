const CityModel = require('../model/City')

const getCities = async (req, res) => {

    const callback = (err, results) => {
        if (err) res.send(err)
        res.send(results)
    }

    CityModel.find({}, callback)
}

module.exports = getCities