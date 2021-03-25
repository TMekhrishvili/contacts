const CityModel = require('../model/City')

const addCity = async (req, res) => {
    const id = req.body.id
    const cityName = req.body.city
    const city = new CityModel({
        id: id,
        city: cityName
    })

    try {
        await city.save()
        res.send("City was inserted")
        console.log('City from postman was inserted')
    } catch (error) {
        console.log(error)
    }
}

module.exports = addCity