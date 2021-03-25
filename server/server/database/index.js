const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://admin:iM6hBCGWTByybK5@contacts.w0uwn.mongodb.net/contacts?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(true)
    }
}

module.exports = connectDB